"use client"
 
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useReadContract, useAccount, useChainId, useReadContracts } from "wagmi";
import { bioChipAbi } from "@/components/abis";
import { BIOCHIP_CONTRACT_ADDRESS } from "@/components/contracts";
import { Address } from "viem";


type BioChip = {
  id: string
  bioChipNumber: number
  status: "uninitialized" | "initialized"
}


export default function BioChipStash() {
  const account = useAccount()
  const chainId = useChainId()

  function getBioChipAddress(chainId: number) {
    switch (chainId) {
      case 8217:
        return BIOCHIP_CONTRACT_ADDRESS.kaia;
      case 1001:
        return BIOCHIP_CONTRACT_ADDRESS.kaiaKairos;
      default:
        return BIOCHIP_CONTRACT_ADDRESS.default;
    }
  }
  const { data: bioChipBalance } = useReadContract({
    abi: bioChipAbi,
    address: getBioChipAddress(chainId),
    functionName: 'balanceOf',
    args: [account.address as Address],
  })

  const contractCalls = Array.from({ length: Number(bioChipBalance) }).map(
    (_, index) => ({
      abi: bioChipAbi,
      address: getBioChipAddress(chainId),
      functionName: "tokenOfOwnerByIndex",
      args: [index],
    })
  );

  const { data: bioChipData, isLoading: bioChipDataIsLoading } = useReadContracts({
    contracts: contractCalls,
  });

  const data: BioChip[] = [
    {
      id: "1",
      bioChipNumber: 2,
      status: "uninitialized",
    },
    {
      id: "2",
      bioChipNumber: 3,
      status: "initialized",
    },
  ]

  const columns: ColumnDef<BioChip>[] = [
    {
      accessorKey: "id",
      header: "No.",
    },
    {
      accessorKey: "bioChipNumber",
      header: "BioChip #",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })



  return (
    <div className="flex flex-col mt-8">
      <h2 className="text-xl font-semibold">stash</h2>
      <p>Total BioChip: {bioChipBalance}</p>
      <p>{JSON.stringify(bioChipData)}</p>
      <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
    </div>
  );
}