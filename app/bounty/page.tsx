import BountyContent from "@/components/bounty-content";

export default function Bounty() {
  return (
    <div className="flex flex-col gap-2 py-6 pl-4 h-[768px]">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold">bounty</h1>
        <p className="text-md text-muted-foreground">earn your bread and make your mark</p>
      </div>
      <BountyContent />
    </div>
  );
}