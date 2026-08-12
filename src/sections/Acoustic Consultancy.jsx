import ConsultancyImg from "../assets/acoustic-consultancy-uae.png";

function AcousticConsultancy() {
  const items = [
    "Acoustic performance briefs and RT60 (reverberation time) strategy",
    "Room-by-room acoustic design recommendations",
    "Material and product selection based on performance targets",
    "Coordination with MEP, structural, and interior design teams",
    "Compliance guidance against international acoustic standards",
    "Technical documentation and specification support for tenders",
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 px-6 sm:px-10 lg:px-20 py-16 lg:pt-0 text-sky-950">
      <div className="flex flex-col justify-center order-2 lg:order-1">
        <h2 className="font-lead text-2xl sm:text-3xl mb-6">
          Acoustic Consultancy
        </h2>
        <p className="mb-6 leading-relaxed">
          Every space has its own acoustic fingerprint. Our consultancy team
          works alongside architects, interior designers, and contractors from
          the earliest design stage to identify sound challenges before they
          become costly problems — translating acoustic science into practical,
          buildable solutions.
        </p>
        <p className="font-lead mb-3">Our consultancy services include:</p>
        <ul className="flex flex-col gap-2 mb-6">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-slate-600">
              <span className="text-primary shrink-0">●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mb-8 leading-relaxed">
          Whether you're designing an auditorium, an open-plan office, a school,
          or a healthcare facility, our consultants help you get the acoustics
          right the first time — reducing rework, delays, and cost overruns
          later in the project.
        </p>
        <a
          href="#"
          className="inline-block w-fit bg-primary text-sky-50 px-6 py-4"
        >
          Book a Consultation &rarr;
        </a>
      </div>

      <div className="order-1 lg:order-2">
        <img
          src={ConsultancyImg}
          alt="Acoustic consultancy site visit"
          className="w-full h-64 sm:h-80 lg:h-full object-cover"
        />
      </div>
    </section>
  );
}

export default AcousticConsultancy;
