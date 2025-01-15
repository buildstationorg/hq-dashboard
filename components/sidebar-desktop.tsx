"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Cpu, Bug, SearchCode } from "lucide-react";

export default function SidebarDesktop() {
  const pathname = usePathname();

  function isActiveRoute(path: string) {
    return pathname === path
      ? "text-secondary bg-primary px-2 py-1 w-full rounded-sm"
      : "text-primary bg-white px-2 py-1 w-full rounded-sm";
  }

  return (
    <div className="hidden lg:flex lg:flex-col gap-4 text-left border-r-2 py-6 px-4 border-primary">
      <Link
        href="/"
        className={`flex flex-row items-center text-xl ${isActiveRoute(
          "/"
        )} w-[190px]`}
      >
        <LayoutDashboard className="w-6 h-6 mr-2" />
        Dashboard
      </Link>
      <Link
        href="/biochip"
        className={`flex flex-row items-center text-xl ${isActiveRoute(
          "/biochip"
        )} w-[190px]`}
      >
        <Cpu className="w-6 h-6 mr-2" />
        Biochip
      </Link>
      <Link
        href="/inspect"
        className={`flex flex-row items-center text-xl ${isActiveRoute(
          "/inspect"
        )} w-[190px]`}
      >
        <SearchCode className="w-6 h-6 mr-2" />
        Inspect
      </Link>
      <Link
        href="/bounty"
        className={`flex flex-row items-center text-xl ${isActiveRoute(
          "/bounty"
        )} w-[190px]`}
      >
        <Bug className="w-6 h-6 mr-2" />
        Bounty
      </Link>
    </div>
  );
}
