function Services() {
  return (
    <section className="grid grid-cols-6 gap-20 px-20 pt-12 pb-32 text-sky-950">
      <div className="col-span-4 -col-end-1">
        <h3 className="font-lead text-2xl mb-8">
          We provide a variety of services.
        </h3>
        <ol className="grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-4">
          <li>
            <p className="mb-3 text-slate-300">01</p>
            <p className="mb-1">Architectural acoustics</p>
            <p className="text-sm text-slate-500">
              Clarity, comfort and controlled reverberation integrated into the
              design language of the space.
            </p>
          </li>
          <li>
            <p className="mb-3 text-slate-300">02</p>
            <p className="mb-1">Soundproofing & noise control</p>
            <p className="text-sm text-slate-500">
              Layered wall, ceiling and floor systems engineered to reduce
              airborne and structure-borne transmission.
            </p>
          </li>
          <li>
            <p className="mb-3 text-slate-300">03</p>
            <p className="mb-1">Auditorium & theatre</p>
            <p className="text-sm text-slate-500">
              Performance-led treatments for speech intelligibility, even
              distribution and audience comfort.
            </p>
          </li>
          <li>
            <p className="mb-3 text-slate-300">04</p>
            <p className="mb-1">Operable acoustic partitions</p>
            <p className="text-sm text-slate-500">
              Flexible space division with tested sound insulation for
              hospitality, education and commercial environments.
            </p>
          </li>
          <li>
            <p className="mb-3 text-slate-300">05</p>
            <p className="mb-1">Workplace acoustics</p>
            <p className="text-sm text-slate-500">
              Speech privacy, focus and wellbeing across boardrooms,
              collaborative zones and open-plan interiors.
            </p>
          </li>
          <li>
            <p className="mb-3 text-slate-300">06</p>
            <p className="mb-1">Industrial acoustics</p>
            <p className="text-sm text-slate-500">
              Enclosures, barriers, louvers and monitoring strategies for plant,
              equipment and environmental noise.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default Services;
