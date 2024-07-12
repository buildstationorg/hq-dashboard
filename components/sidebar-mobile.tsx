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
import { LayoutDashboard, Cpu, Bug, ArrowRightFromLine } from "lucide-react";

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
          variant="outline"
          className="ml-2 mt-4 w-fit border-2 border-primary rounded-sm text-base lg:hidden"
        >
          <ArrowRightFromLine className="w-6 h-6 mr-2" />
          menu
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
