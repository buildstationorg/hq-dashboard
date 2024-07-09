"use client";

import { Button } from "./ui/button";
import { Binary, CircleAlert, Minus } from 'lucide-react';
import { useAccount, useChainId } from 'wagmi'

export default function BioChipMint() {
  const account = useAccount()
  const chainId = useChainId()

  function getFee(chainId: number) {
    switch (chainId) {
      case 8217:
        return "1 KLAY"
      case 1001:
        return "1 KLAY"
      default:
        return "0.0001 Ξ"
    }
  }

  return (
    <div className="flex flex-col gap-8 p-6 border-2 border-primary w-full h-full">
      <h2 className="text-xl font-semibold">create your biochip</h2>
      <p className="text-md">all legends start somewhere. begin yours by minting this biochip and accumulate street creds. will cost you a small fee. depending on the connected chain, the biochip design will also change accordingly.</p>
      {account.address ? <p className="flex flex-row items-center text-lg"><Minus className="w-6 h-6 mr-2" />{`${getFee(chainId)}`}</p> : <p className="flex flex-row items-center text-lg text-red-500"><CircleAlert className="w-6 h-6 mr-2" />connect wallet to check fee</p>}
      <Button className="w-fit text-lg px-6"><Binary className="w-4 h-4 mr-2" />mint</Button>
    </div>
  );
}