export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-2 py-6 px-2 lg:px-4 h-full">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold">BioChip #{params.id}</h1>
        <p className="text-md text-muted-foreground">
          your biochip information
        </p>
      </div>
    </div>
  );
}
