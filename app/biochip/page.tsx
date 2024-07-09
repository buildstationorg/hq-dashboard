import BioChipMint from "@/components/biochip-mint";
import Image from "next/image";

export default function BioChip() {
  return (
    <div className="flex flex-col gap-2 py-6 px-4 h-[768px]">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold">biochip</h1>
        <p className="text-md text-muted-foreground">
          the manisfestation of your digital identity and legacy
        </p>
      </div>
      <div className="flex flex-row gap-4 mt-4">
        <Image
          src="/biochips/BioChipDefault.svg"
          alt="biochip"
          width={400}
          height={400}
          className="border-2 border-primary"
        />
        <BioChipMint />
      </div>

    </div>
  );
}
