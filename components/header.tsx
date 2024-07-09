import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center border-b-2 py-6 border-primary">
      <h1 className="text-2xl lg:text-4xl font-extrabold">buildstation<span className="text-2xl lg:text-4xl font-medium bg-primary rounded-md text-secondary px-2 py-1 ml-2">HQ</span></h1>
      <ConnectButton />
    </div>
  );
}