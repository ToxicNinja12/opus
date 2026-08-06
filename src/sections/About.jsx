function AboutOverview() {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-20 px-6 sm:px-10 lg:px-20 pt-16 sm:pt-20 lg:pt-32 pb-20 lg:pb-32 text-sky-950">
      {/* Mobile/tablet heading — plain, not sticky, no nav */}
      <h2 className="lg:hidden font-lead text-xl">Who are we?</h2>

      {/* Desktop label — sticky, spans all three blocks below */}
      <div className="hidden lg:block lg:row-span-3">
        <div className="sticky top-32">
          <h2 className="font-lead text-xl">Who are we?</h2>
          <nav className="flex flex-col gap-1 mt-4 text-sm text-sky-950/60">
            <a
              href="#about-us"
              className="hover:text-sky-950 transition-colors"
            >
              About us
            </a>
            <a
              href="#our-services"
              className="hover:text-sky-950 transition-colors"
            >
              Our services
            </a>
            <a
              href="#our-locations"
              className="hover:text-sky-950 transition-colors"
            >
              Our locations
            </a>
          </nav>
        </div>
      </div>

      {/* ABOUT */}
      <div
        id="about-us"
        className="lg:col-start-3 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-subgrid gap-y-8 gap-x-8 scroll-mt-24"
      >
        <p className="font-lead text-xl sm:text-2xl col-span-full">
          Opus Acoustics is a leading provider of innovative architectural
          acoustic solutions across the Middle East. We specialize in
          high-performance systems that blend sound quality with modern
          aesthetics.
        </p>
        <div className="lg:col-span-2">
          <h3 className="font-lead">About Us</h3>
          <p className="mb-3">
            We are unique in providing high-end interior and architectural
            specialty finishing products in the highly demanding construction
            industry. Our past proven experience in bridging the gap between the
            world’s leading manufacturers and regional architects, interior
            designers, developers, and contractors gives us an edge in providing
            innovative solutions.
          </p>
          <p>
            As a division of Opus Building Materials LLC, we provide complete
            interior finishing solutions—from wall systems to premium
            architectural finishes.
          </p>
        </div>
        <div className="lg:col-span-2">
          <h3 className="font-lead">Our Mission</h3>
          <p>
            To deliver high-performance acoustic products that blend
            functionality with aesthetic excellence - enhancing comfort through
            craftsmanship and expert consultation.
          </p>
          <h3 className="font-lead mt-4">Our Vision</h3>
          <p>
            To be the region’s leading provider of innovative, design-driven
            acoustic solutions that redefine how people experience sound in
            modern spaces.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <div
        id="our-services"
        className="lg:col-start-3 lg:col-span-4 scroll-mt-24"
      >
        <h3 className="font-lead text-xl sm:text-2xl mb-8">
          We provide a variety of services.
        </h3>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-x-8 gap-y-8 lg:gap-y-4">
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

      {/* REGIONS */}
      <div
        id="our-locations"
        className="lg:col-start-3 lg:col-span-4 scroll-mt-24"
      >
        <h3 className="font-lead text-xl sm:text-2xl mb-8">
          We have a global presence.
        </h3>
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <li className="bg-slate-100 p-4">
            <p className="mb-4">Dubai, UAE</p>
            <p className="text-sm text-slate-500">
              Head office and regional project delivery across the Emirates and
              wider GCC.
            </p>
          </li>
          <li className="bg-slate-100 p-4">
            <p className="mb-4">Europe</p>
            <p className="text-sm text-slate-500">
              European branch supporting international partnerships, technical
              coordination and regional opportunities.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default AboutOverview;
