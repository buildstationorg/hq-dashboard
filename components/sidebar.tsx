"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Cpu, Bug } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  function isActiveRoute(path: string) {
    return pathname === path
      ? "text-secondary bg-primary px-2 py-1 w-full rounded-sm"
      : "text-primary bg-white px-2 py-1 w-full rounded-sm";
  }

  return (
    <div className="flex flex-col gap-4 text-left border-r-2 py-6 pr-4 border-primary w-[200px]">
      <Link
        href="/"
        className={`flex flex-row items-center text-xl ${isActiveRoute("/")}`}
      >
        <LayoutDashboard className="w-4 h-4 mr-2" />
        dashboard
      </Link>
      <Link href="/biochip" className={`flex flex-row items-center text-xl ${isActiveRoute("/biochip")}`}>
        <Cpu className="w-4 h-4 mr-2" />
        biochip
      </Link>
      <Link href="/bounty" className={`flex flex-row items-center text-xl ${isActiveRoute("/bounty")}`}>
        <Bug className="w-4 h-4 mr-2" />
        bounty
      </Link>
    </div>
  );
}
