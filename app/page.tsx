import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 text-left w-[768px]">
      <ConnectButton />
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Airdrop</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">A simple tool to airdrop on Kaia chain</p>
      </div>
      <div className="flex flex-col gap-8">
        Test
      </div>
    </div>
  );
}