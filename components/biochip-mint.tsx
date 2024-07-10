"use client";

import { Button } from "./ui/button";
import { Binary, CircleAlert, Minus } from "lucide-react";
import {
  type BaseError,
  useAccount,
  useChainId,
  useBalance,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { parseEther } from "viem";
import { bioChipAbi } from "@/components/abis";
import { BIOCHIP_CONTRACT_ADDRESS } from "@/components/contracts";

export default function BioChipMint() {
  const account = useAccount();
  const chainId = useChainId();
  const balance = useBalance({
    address: account.address,
  });
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  function getFee(chainId: number) {
    switch (chainId) {
      case 8217:
        return "1 KLAY";
      case 1001:
        return "1 KLAY";
      default:
        return "0.0001 Ξ";
    }
  }

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

  function mintBioChip() {
    writeContract({
      abi: bioChipAbi,
      address: getBioChipAddress(chainId),
      functionName: "mint",
      value: parseEther("1"),
    });
  }

  return (
    <div className="flex flex-col gap-8 p-6 border-2 border-primary max-w-full h-full">
      <h2 className="text-xl font-semibold">create your biochip</h2>
      <p className="text-md">
        all legends start somewhere. begin yours by minting this biochip and
        accumulate street creds. will cost you a small fee. depending on the
        connected chain, the biochip design will also change accordingly.
      </p>
      {account.address ? (
        <p className="flex flex-row items-center text-lg">
          <Minus className="w-6 h-6 mr-2" />
          {`${getFee(chainId)}`}
        </p>
      ) : (
        <p className="flex flex-row items-center text-lg text-red-500">
          <CircleAlert className="w-6 h-6 mr-2" />
          connect wallet to check fee
        </p>
      )}
      {account.address ? (
        <Button className="w-fit text-lg px-6" onClick={mintBioChip}>
          <Binary className="w-4 h-4 mr-2" />
          mint
        </Button>
      ) : (
        <Button disabled className="w-fit text-lg px-6">
          <Binary className="w-4 h-4 mr-2" />
          mint
        </Button>
      )}
    </div>
  );
}
