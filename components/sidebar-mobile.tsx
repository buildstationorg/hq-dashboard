"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LayoutDashboard, Cpu, Bug } from "lucide-react";

export default function SidebarMobile() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  function isActiveRoute(path: string) {
    return pathname === path
      ? "text-secondary bg-primary px-2 py-1 w-full rounded-sm"
      : "text-primary bg-white px-2 py-1 w-full rounded-sm";
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          className="w-fit mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-6">
        <div className="flex flex-col space-y-3 pt-6">
          <Link
            href="/"
            className={`flex flex-row items-center text-xl ${isActiveRoute(
              "/"
            )} w-[190px]`}
          >
            <LayoutDashboard className="w-4 h-4 mr-2" />
            dashboard
          </Link>
          <Link
            href="/biochip"
            className={`flex flex-row items-center text-xl ${isActiveRoute(
              "/biochip"
            )} w-[190px]`}
          >
            <Cpu className="w-4 h-4 mr-2" />
            biochip
          </Link>
          <Link
            href="/bounty"
            className={`flex flex-row items-center text-xl ${isActiveRoute(
              "/bounty"
            )} w-[190px]`}
          >
            <Bug className="w-4 h-4 mr-2" />
            bounty
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
