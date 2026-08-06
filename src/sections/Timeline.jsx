function Timeline() {
  return (
    <section className="text-sky-950 px-6 sm:px-10 lg:px-20 pt-16 sm:pt-20 lg:pt-32 pb-16">
      <div className="mb-8">
        <h2 className="font-lead text-xl">Our Working Process</h2>
      </div>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-8">
        <li>
          <p className="mb-3 text-slate-300">01</p>
          <p className="mb-1">Consultancy & acoustic design</p>
          <p className="text-sm text-slate-500">
            Performance criteria, RT60 strategy, material selection and
            technical coordination shaped around how the space will actually be
            used.
          </p>
        </li>
        <li>
          <p className="mb-3 text-slate-300">02</p>
          <p className="mb-1">Site surveys & noise mapping</p>
          <p className="text-sm text-slate-500">
            Measured background noise, reverberation, transmission paths and
            environmental conditions — so recommendations begin with evidence.
          </p>
        </li>
        <li>
          <p className="mb-3 text-slate-300">03</p>
          <p className="mb-1">System supply & specification</p>
          <p className="text-sm text-slate-500">
            Architectural and industrial acoustic systems supported by samples,
            technical submittals, fire data and performance documentation.
          </p>
        </li>
        <li>
          <p className="mb-3 text-slate-300">04</p>
          <p className="mb-1">Installation & handover</p>
          <p className="text-sm text-slate-500">
            Site coordination, specialist installation, inspection and final
            performance verification managed as one continuous scope.
          </p>
        </li>
      </ol>
    </section>
  );
}

export default Timeline;
