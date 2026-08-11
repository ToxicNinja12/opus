function AboutHero() {
  const stats = [
    { value: "7+", label: "Years of Acoustic Expertise" },
    { value: "3+", label: "Regional Branches" },
    { value: "250+", label: "Acoustic Projects Delivered" },
    { value: "20+", label: "Global Manufacturing Partners" },
    { value: "100%", label: "Single-Source Acoustic Solutions" },
  ];

  return (
    <section className="bg-secondary text-sky-50 px-6 sm:px-10 lg:px-20 py-16 md:py-20">
      <div className="max-w-3xl">
        <p className="text-xs sm:text-sm tracking-widest uppercase text-primary mb-4">
          Specialist Acoustic Consultancy
        </p>
        <h1 className="font-lead text-3xl sm:text-4xl lg:text-5xl mb-6">
          Engineering Better Sound. Designing Better Spaces.
        </h1>
        <p className="mb-4 leading-relaxed">
          Opus Acoustic is the specialist acoustic consultancy division of Opus
          Building Materials LLC. We design, specify, and deliver acoustic
          solutions — including acoustic wall and ceiling panels,
          sound-absorptive baffles, and acoustic partitions — for architects,
          consultants, and developers across the UAE, GCC, and Europe.
        </p>
        <p className="mb-8 leading-relaxed">
          We help create spaces that sound as good as they look, from corporate
          offices and schools to auditoriums, healthcare facilities, and
          cultural venues.
        </p>
        <a
          href="#our-story"
          className="inline-block w-fit bg-primary text-sky-50 px-6 py-4"
        >
          Discover Our Journey &rarr;
        </a>
      </div>

      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-lead text-2xl sm:text-3xl text-primary mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-sky-50/60 leading-snug">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutHero;
