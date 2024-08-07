"use client";

import * as React from "react";
import {
  RainbowKitProvider,
  lightTheme,
  getDefaultWallets,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import { trustWallet, ledgerWallet } from "@rainbow-me/rainbowkit/wallets";
import {
  // klaytn, // import klaytn mainnet
  klaytnBaobab, // import klaytn testnet
} from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, http } from "wagmi";
// import according to docs

const { wallets } = getDefaultWallets();
// initialize and destructure wallets object

const config = getDefaultConfig({
  appName: "HQ-BUILDSTATION", // Name your app
  projectId: "f311ad0bea6784a434a1a725dc8a63fa", // Enter your WalletConnect Project ID here
  wallets: [
    ...wallets,
    {
      groupName: "Other",
      wallets: [trustWallet, ledgerWallet],
    },
  ],
  chains: [klaytnBaobab],
  transports: {
    // [klaytn.id]: http("https://rpc.ankr.com/klaytn"), // Select RPC provider Ankr instead of the default
    [klaytnBaobab.id]: http("https://klaytn-baobab.blockpi.network/v1/rpc/public"), // Select RPC provider Ankr instead of the default
  },
  ssr: true, // Because it is Nextjs's App router, you need to declare ssr as true
});


const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={lightTheme({
            accentColor: "#0F172A",
            accentColorForeground: "white",
            borderRadius: "small",
            fontStack: "system",
            overlayBlur: "none",
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
