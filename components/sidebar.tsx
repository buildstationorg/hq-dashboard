"use client";

import { useSearchParams } from "next/navigation";

export default function Sidebar() {
  const searchParams = useSearchParams();


  return (
    <div className="flex flex-col gap-4 text-left border-r-2 pr-6 border-primary w-[200px]">
      <h2 className="text-xl">dashboard</h2>
      <h2 className="text-xl">biochip</h2>
      <h2 className="text-xl">bounty</h2>
    </div>
  );
}