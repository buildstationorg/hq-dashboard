import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "buildstation HQ",
  description: "your headquarter to manage all your buildstation projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="flex flex-col gap-8 items-center justify-center py-12 px-4">
            <div className="flex flex-col w-screen max-w-7xl">
              <Header />
              {children}
            </div>
          </main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}