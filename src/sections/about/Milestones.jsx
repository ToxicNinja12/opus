const milestones = [
  {
    year: "2019",
    label: "Inception",
    detail: "5 Projects",
    description:
      "Launched acoustic consultancy operations, delivering our first speech-intelligibility and noise-control projects.",
  },
  {
    year: "2020",
    label: "Initial Traction",
    detail: "25 Projects",
    description:
      "Rapid adoption of our acoustic engineering services validated our design and delivery capability.",
  },
  {
    year: "2021",
    label: "Stabilization",
    detail: "30 Projects",
    description:
      "Refined acoustic testing and specification processes to strengthen technical infrastructure.",
  },
  {
    year: "2022",
    label: "Expansion",
    detail: "55 Projects",
    description:
      "Entered an aggressive growth phase, doubling delivery volume across acoustic panel and system installations.",
  },
  {
    year: "2023",
    label: "Scaling",
    detail: "105 Projects",
    description:
      "Accelerated project throughput, expanding acoustic consultancy reach across new sectors.",
  },
  {
    year: "2024",
    label: "High Velocity",
    detail: "145 Projects",
    description:
      "Reached peak operational performance with a mature network of acoustic manufacturing partners.",
  },
  {
    year: "2025",
    label: "Maturity",
    detail: "205 Projects",
    description:
      "Sustained industry-leading acoustic performance with stable, scalable delivery capacity.",
  },
  {
    year: "2026",
    label: "Expansion 2.0",
    detail: "250+ Projects",
    description:
      "Sustaining excellence through acoustic installations across the GCC and Europe.",
  },
];

function MilestoneCard({ m }) {
  return (
    <div className="w-44 bg-primary-light p-4 text-center">
      <p className="font-semibold text-sky-950 mb-1">{m.label}</p>
      <p className="font-semibold text-slate-700 mb-3 text-xs">{m.detail}</p>
      <p className="text-xs text-slate-500 leading-snug">{m.description}</p>
    </div>
  );
}

function Milestones() {
  return (
    <section className="bg-primary-light-2 text-primary-dark px-6 sm:px-10 lg:px-20 py-16 lg:py-24">
      <p className="text-xs sm:text-sm tracking-widest uppercase text-primary mb-4">
        Our Acoustic Journey
      </p>
      <h2 className="font-lead text-2xl sm:text-3xl mb-10 lg:mb-16 max-w-2xl">
        Milestones That Shaped Opus Acoustic
      </h2>

      {/* Mobile / tablet — stacked list */}
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-x-8 gap-y-10">
        {milestones.map((m) => (
          <li key={m.year} className="border-t border-primary-dark/20 pt-4">
            <p className="font-lead text-2xl mb-1">{m.year}</p>
            <p className="mb-1">
              {m.label}{" "}
              <span className="text-slate-500">&middot; {m.detail}</span>
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              {m.description}
            </p>
          </li>
        ))}
      </ol>

      {/* Desktop — horizontal alternating timeline */}
      <div className="hidden lg:block">
        {/* Top zone: even-index columns show only the year here; odd-index show their card */}
        <div className="flex items-end">
          {milestones.map((m, i) => {
            const isTop = i % 2 === 1;
            return (
              <div
                key={`${m.year}-top`}
                className="flex-1 min-w-0 px-2 flex flex-col items-center justify-end h-64"
              >
                {isTop ? (
                  <MilestoneCard m={m} />
                ) : (
                  <p className="font-lead text-xl">{m.year}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Connector line + dots */}
        <div className="relative flex items-center h-6">
          <div className="absolute left-0 right-0 h-px bg-primary/40" />
          {milestones.map((m) => (
            <div key={`${m.year}-dot`} className="flex-1 flex justify-center">
              <span className="w-3 h-3 rounded-full bg-primary relative z-10" />
            </div>
          ))}
        </div>

        {/* Bottom zone: even-index columns show their card here; odd-index show only the year */}
        <div className="flex items-start">
          {milestones.map((m, i) => {
            const isTop = i % 2 === 1;
            return (
              <div
                key={`${m.year}-bottom`}
                className="flex-1 min-w-0 px-2 flex flex-col items-center justify-start h-64"
              >
                {isTop ? (
                  <p className="font-lead text-xl mt-3">{m.year}</p>
                ) : (
                  <MilestoneCard m={m} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Milestones;
