import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center border-b-4 p-4 border-primary">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">HQ</h1>
      <ConnectButton />
    </div>
  );
}