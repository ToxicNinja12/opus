function SiteInspection() {
  const items = [
    "On-site noise and reverberation measurement",
    "Sound transmission and airborne/structure-borne noise checks",
    "Identification of acoustic leaks, gaps, and weak points in installed systems",
    "Verification against project specifications and building codes",
    "Post-installation performance validation and snag reporting",
    "Detailed inspection reports with corrective recommendations",
  ];

  return (
    <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 text-sky-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <h2 className="font-lead text-2xl sm:text-3xl mb-6">
            Acoustic Site Inspection
          </h2>
          <p className="mb-6 leading-relaxed">
            Before or after installation, our site inspection service verifies
            how a space actually performs — not just how it was designed to
            perform. Our engineers carry out on-site diagnostics to measure
            real-world sound behavior and identify gaps between design intent
            and built reality.
          </p>
          <p className="leading-relaxed">
            This service is ideal for project handover verification,
            troubleshooting existing noise complaints, or auditing a completed
            installation before sign-off — giving stakeholders documented proof
            that a space meets its acoustic targets.
          </p>
        </div>

        <div>
          <p className="font-lead mb-4">What our site inspection covers:</p>
          <ul className="flex flex-col gap-3 mb-8">
            {items.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slate-600">
                <span className="text-primary shrink-0">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="inline-block w-fit bg-primary text-sky-50 px-6 py-4"
          >
            Request a Site Inspection &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

export default SiteInspection;
