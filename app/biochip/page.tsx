import BioChipMint from "@/components/biochip-mint";
import BioChipImage from "@/components/biochip-image";

export default function BioChip() {
  return (
    <div className="flex flex-col gap-2 py-6 pl-4 h-[768px]">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold">biochip</h1>
        <p className="text-md text-muted-foreground">
          the manisfestation of your digital identity and legacy
        </p>
      </div>
      <div className="flex flex-row gap-4 mt-4">
        <BioChipImage />
        <BioChipMint />
      </div>

    </div>
  );
}
