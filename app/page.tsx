import Dashboard from "@/components/dashboard";

export default function Home() {
  return (
    <div className="flex flex-col py-6 px-4 h-[768px]">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold">dashboard</h1>
        <Dashboard />
      </div>
    </div>
  );
}