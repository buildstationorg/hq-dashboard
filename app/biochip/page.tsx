import BioChipMint from "@/components/biochip-mint";
import BioChipImage from "@/components/biochip-image";
import BiochipStash from "@/components/biochip-stash";



export default function BioChip() {
  return (
    <div className="flex flex-col gap-2 py-6 px-2 lg:px-4 h-full">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold">biochip</h1>
        <p className="text-md text-muted-foreground">
          the manisfestation of your digital identity and legacy
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 mt-4 lg:h-[400px]">
        <BioChipImage />
        <BioChipMint />
      </div>
      <BiochipStash />
    </div>
  );
}