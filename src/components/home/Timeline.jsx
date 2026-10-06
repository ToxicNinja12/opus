function Timeline() {
  return (
    <section className="text-sky-950 px-6 sm:px-10 lg:px-20 pt-16 sm:pt-20 lg:pt-32 pb-16">
      <div className="mb-8">
        <h2 className="font-lead text-xl">Our Working Process</h2>
      </div>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-8">
        <li>
          <p className="mb-3 text-slate-300">01</p>
          <p className="mb-1">Consultation & Acoustic Design</p>
          <p className="text-sm text-slate-500">
            We start by understanding how your space will actually be used. Our
            team defines performance criteria, RT60 strategy, and material
            selection, aligned with your architectural and technical goals from
            day one.
          </p>
        </li>
        <li>
          <p className="mb-3 text-slate-300">02</p>
          <p className="mb-1">Site Survey & Noise Mapping</p>
          <p className="text-sm text-slate-500">
            Our engineers measure background noise, reverberation, and
            transmission paths on-site, building an evidence-based picture of
            your space before any product is specified.
          </p>
        </li>
        <li>
          <p className="mb-3 text-slate-300">03</p>
          <p className="mb-1">System Supply & Specification</p>
          <p className="text-sm text-slate-500">
            We supply architectural and industrial acoustic systems backed by
            samples, technical submittals, fire data, and full performance
            documentation — ready for approval and tender.
          </p>
        </li>
        <li>
          <p className="mb-3 text-slate-300">04</p>
          <p className="mb-1">Installation & Handover</p>
          <p className="text-sm text-slate-500">
            Our specialist installation teams manage coordination, inspection,
            and final performance verification as one continuous scope — so you
            get a fully tested, ready-to-use space at handover.
          </p>
        </li>
      </ol>
    </section>
  );
}

export default Timeline;
