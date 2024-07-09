export default function MobileWarning() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center py-12 px-4 lg:hidden">
      <div className="text-2xl font-bold text-center">
        Mobile devices are not supported.
      </div>
      <div className="text-lg text-center">
        Please use a desktop browser to use the DApp.
      </div>
    </div>
  );
}