export default function Dashboard() {
  return (
    <div className="flex flex-col py-6 px-4 h-[768px]">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold">dashboard</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">overview of your activities</p>
      </div>
    </div>
  );
}