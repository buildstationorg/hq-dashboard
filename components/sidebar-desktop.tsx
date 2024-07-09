"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Cpu, Bug } from "lucide-react";

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
        className={`flex flex-row items-center text-xl ${isActiveRoute("/")} w-[170px]`}
      >
        <LayoutDashboard className="w-4 h-4 mr-2" />
        dashboard
      </Link>
      <Link href="/biochip" className={`flex flex-row items-center text-xl ${isActiveRoute("/biochip")} w-[170px]`}>
        <Cpu className="w-4 h-4 mr-2" />
        biochip
      </Link>
      <Link href="/bounty" className={`flex flex-row items-center text-xl ${isActiveRoute("/bounty")} w-[170px]`}>
        <Bug className="w-4 h-4 mr-2" />
        bounty
      </Link>
    </div>
  );
}
