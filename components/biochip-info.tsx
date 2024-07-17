import Image from "next/image";

export default function BioChipInfo() {
  return (
    <div>
      <h1 className="bg-primary text-secondary text-xl font-semibold px-4 py-2">0x8e671be721FdE943Fe4F497BeCE6296cC544dc9D</h1>
      <div className="flex flex-col gap-8 p-6 border-2 border-primary w-full lg:max-w-full h-full">
        <h2 className="text-xl font-semibold">information</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Image
            src="/placeholders/pudgy.jpeg"
            width={200}
            height={200}
            alt="pudgy"
            className="border-2 border-primary"
          />
          <Image
            src="/placeholders/noun.svg"
            width={200}
            height={200}
            alt="nouns"
            className="border-2 border-primary"
          />
          <Image
            src="/placeholders/kemonokaki.jpg"
            width={200}
            height={200}
            alt="kemonokaki"
            className="border-2 border-primary"
          />
          <Image
            src="/placeholders/milady.jpg"
            width={200}
            height={200}
            alt="milady"
            className="border-2 border-primary"
          />
        </div>
      </div>
    </div>
  );
}
