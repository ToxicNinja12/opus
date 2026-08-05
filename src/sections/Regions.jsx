function Regions() {
  return (
    <section className="text-sky-950 px-20 pt-12 pb-32 grid grid-cols-6 gap-20">
      <div className="col-span-4 -col-end-1">
        <h3 className="font-lead text-2xl mb-8">We have a global presence.</h3>
        <ol className="grid grid-cols-2 gap-8">
          <li className=" bg-slate-100 p-4">
            <p className="mb-4">Dubai, UAE</p>
            <p className="text-sm text-slate-500">
              Head office and regional project delivery across the Emirates and
              wider GCC.
            </p>
          </li>
          <li className=" bg-slate-100 p-4">
            <p className="mb-4">Europe</p>
            <p className="text-sm text-slate-500">
              European branch supporting international partnerships, technical
              coordination and regional opportunities.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default Regions;
