import BioChipInitialize from "@/components/biochip-initialize";
import BioChipImage from "@/components/biochip-image";
import BioChipInfo from "@/components/biochip-info";
import Image from "next/image";
import {
  getContract,
  getContractAddress,
  concat,
  WalletClient,
  encodeFunctionData,
  encodeAbiParameters,
  pad,
  parseAbiParameters,
  numberToHex,
  getAddress,
  numberToBytes,
  bytesToHex,
} from "viem";
import {
  type BaseError,
  useAccount,
  useChainId,
  useBalance,
  useWaitForTransactionReceipt,
  useWriteContract,
  useReadContract,
  useBytecode,
} from "wagmi";

export default function Page({ params }: { params: { id: string } }) {

  // const tokenBoundV3AccountDeployed = useBytecode({
  //   address: getTokenboundV3Account("0x5D98e2C833D8E9A70fee8b271FEd59b4374C8ef6", params.id, 1001, "0x000000006551c19487814612e58FE06813775758", "0x41C8f39463A868d3A88af00cd0fe7102F30E44eC", 1),
  // })

  function getTokenboundV3Account(
    tokenContract: string,
    tokenId: string,
    chainId: number,
    implementationAddress?: `0x${string}`,
    registryAddress?: `0x${string}`,
    salt?: number
  ): `0x${string}` {
    salt = salt ?? 0;
    const erc6551implementation = "0x41C8f39463A868d3A88af00cd0fe7102F30E44eC";
    const erc6551registry = "0x000000006551c19487814612e58FE06813775758";
    const types = [
      { type: "uint256" }, // salt
      { type: "uint256" }, // chainId
      { type: "address" }, // tokenContract
      { type: "uint256" }, // tokenId
    ];

    const values: (string | bigint)[] = [
      salt.toString(),
      BigInt(chainId),
      tokenContract,
      tokenId,
    ];
    const encodedABI = encodeAbiParameters(types, values);

    const hexCreationCode = concat([
      "0x3d60ad80600a3d3981f3363d3d373d3d3d363d73",
      getAddress(erc6551implementation),
      "0x5af43d82803e903d91602b57fd5bf3",
      encodedABI,
    ]);

    const creationCode = addressToUint8Array(hexCreationCode);
    const bigIntSalt = BigInt(salt).toString(16) as `0x${string}`;
    const saltHex = pad(bigIntSalt, { size: 32 });

    return getContractAddress({
      bytecode: creationCode,
      from: getAddress(erc6551registry),
      opcode: "CREATE2",
      salt: saltHex,
    });
  }

  function addressToUint8Array(address: `0x${string}`): Uint8Array {
    // Remove '0x' prefix
    const cleanAddress = address.slice(2);

    // Convert hex string to Uint8Array
    const array = new Uint8Array(cleanAddress.length / 2);

    for (let i = 0; i < cleanAddress.length; i += 2) {
      array[i / 2] = parseInt(cleanAddress.substr(i, 2), 16);
    }

    return array;
  }


  return (
    <div className="flex flex-col gap-2 py-6 px-2 lg:px-4 h-full">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold">BioChip #{params.id}</h1>
        <p className="text-md text-muted-foreground">
          your biochip information
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-start gap-4 mt-4 lg:h-full">
        <BioChipImage />
        {/* <BioChipInitialize id={params.id} /> */}
        <BioChipInfo />
      </div>
    </div>
  );
}
