import ConsultancyImg from "../assets/acoustic-consultancy-uae.png";

function AcousticSolutions() {
  const offerings = [
    {
      title: "Acoustic Consultancy",
      description:
        "Room-by-room design recommendations, RT60 strategy, material selection, and compliance guidance from the earliest design stage, working alongside architects and contractors.",
    },
    {
      title: "Site Inspection",
      description:
        "On-site diagnostics that verify how a space actually performs, identifying gaps between design intent and built reality, with detailed reporting for handover or troubleshooting.",
    },
    {
      title: "Acoustic Product Supply",
      description:
        "A complete range of acoustic panels, wood wool, slatted systems, and sprays engineered for performance and design flexibility.",
    },
    {
      title: "Specialist Installation",
      description:
        "Coordinated, inspected, and performance-verified installation, delivering a fully tested, ready-to-use space.",
    },
    {
      title: "Noise Mapping & Surveys",
      description:
        "Evidence-based noise assessments that inform design decisions before a single product is specified.",
    },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 px-6 sm:px-10 lg:px-20 py-16 lg:pt-0 text-sky-950">
      <h2 className="font-lead text-2xl sm:text-3xl lg:hidden">
        Acoustic Solutions
      </h2>

      <div className="order-2 lg:order-2">
        <img
          src={ConsultancyImg}
          alt="Acoustic consultancy site visit"
          className="w-full h-64 sm:h-80 lg:h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center order-3 lg:order-1">
        <h2 className="hidden lg:block font-lead text-2xl sm:text-3xl mb-6">
          Acoustic Solutions
        </h2>
        <p className="mb-4 leading-relaxed">
          Every space has its own acoustic fingerprint. From the first design
          sketch to final handover, we help you understand it, control it, and
          get it right — the first time.
        </p>
        <p className="mb-6 leading-relaxed">
          Our team supports projects at every stage, combining consultancy
          expertise, on-site verification, and a full range of acoustic products
          and installation services under one roof.
        </p>

        <p className="font-lead mb-3">What we offer:</p>
        <ul className="flex flex-col gap-3 mb-6">
          {offerings.map((item) => (
            <li key={item.title} className="flex gap-3 text-sm text-slate-600">
              <span className="text-primary shrink-0">●</span>
              <span>
                <span className="font-semibold text-sky-950">{item.title}</span>{" "}
                — {item.description}
              </span>
            </li>
          ))}
        </ul>

        <p className="mb-8 leading-relaxed">
          Whether you're designing an auditorium, an open-plan office, a school,
          or a healthcare facility, we help you get the acoustics right the
          first time — reducing rework, delays, and cost overruns later in the
          project.
        </p>

        <a
          href="#"
          className="inline-block w-fit bg-primary text-sky-50 px-6 py-4"
        >
          Explore Our Solutions &rarr;
        </a>
      </div>
    </section>
  );
}

export default AcousticSolutions;
