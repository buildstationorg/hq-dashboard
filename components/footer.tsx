export default function Footer() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center py-12 px-4">
      <div className="hidden lg:flex lg:flex-col lg:gap-4 max-w-3xl border-t-2">
        <h2 className="font-bold text-2xl mt-4">Attribution</h2>
        <p>
          The smart contract deployed on <a target="_blank" className="underline underline-offset-4 text-blue-500" href="https://baobab.klaytnfinder.io/account/0x61684fc62b6a0f1273f69d9fca0e264001a61db6">Kaia Kaios</a> and <a target="_blank" className="underline underline-offset-4 text-blue-500" href="https://baobab.klaytnfinder.io/account/0x53a7a12b0a6da201addfe6c3cdcd75df04bba640">Kaia Mainnet</a> is a fork of the original GasliteDrop smart contract.
        </p>
        <p>The original smart contract is authored by <a target="_blank" className="underline underline-offset-4 text-blue-500" href="https://github.com/PopPunkLLC">PopPunkLLC</a>. The work is licensed under the MIT License at this <a target="_blank" className="underline underline-offset-4 text-blue-500" href="https://github.com/PopPunkLLC/GasliteDrop">GitHub repository</a>.</p>
      </div>
    </div>
  );
}