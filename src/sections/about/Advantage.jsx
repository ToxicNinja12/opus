function Advantage() {
  const items = [
    {
      title: "Global Manufacturing Partnerships",
      description:
        "Partnering with leading international acoustic manufacturers to deliver premium sound-engineering and acoustic panel solutions across the GCC and Europe.",
    },
    {
      title: "Acoustic Specification Support",
      description:
        "Comprehensive technical consultation, BOQ preparation, system recommendations, and acoustic specification assistance for architects and consultants.",
    },
    {
      title: "Sound Engineering Expertise",
      description:
        "Specialist acoustic design combining speech intelligibility, noise control, sustainability, and functional performance.",
    },
    {
      title: "End-to-End Acoustic Delivery",
      description:
        "From acoustic consultancy and product selection to installation support and after-sales service — we ensure acoustic performance at every stage.",
    },
  ];

  return (
    <section className="px-6 sm:px-10 lg:px-20 py-16 lg:pt-24 text-sky-950">
      <p className="text-xs sm:text-sm tracking-widest uppercase text-primary mb-4">
        Our Acoustic Advantage
      </p>
      <h2 className="font-lead text-2xl sm:text-3xl mb-10 lg:mb-16 max-w-2xl">
        Why Architects Choose Opus Acoustic
      </h2>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
        {items.map((item, i) => (
          <li key={item.title}>
            <p className="mb-3 text-slate-300">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mb-1 font-semibold">{item.title}</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Advantage;
