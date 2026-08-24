function AboutOverview() {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-20 px-6 sm:px-10 lg:px-20 pt-16 sm:pt-20 lg:pt-32 pb-20 lg:mb-0 text-sky-950">
      {/* Mobile/tablet heading — plain, not sticky, no nav */}
      <h2 className="lg:hidden font-lead text-xl">Who are we?</h2>

      {/* Desktop label — sticky, spans all three blocks below */}
      <div className="hidden lg:block lg:row-span-3">
        <div className="sticky top-32 mb-21">
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
        className="lg:col-start-3 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-subgrid gap-y-8 gap-x-8 scroll-mt-24 leading-snug"
      >
        <p className="font-lead text-xl sm:text-2xl col-span-full">
          Opus Acoustics is a Dubai-based architectural acoustic solutions
          company serving the UAE, GCC, and Europe.
        </p>
        <div className="lg:col-span-2">
          <h3 className="font-lead mb-2">About Us</h3>
          <p className="mb-1.5">
            Established in 2019, we design, supply, and install acoustic panels,
            wall systems, and noise control solutions engineered to meet
            international performance standards while blending seamlessly with
            modern interior design. With 7+ years of experience, our team has
            supported architects, interior designers, and contractors across
            commercial, hospitality, education, and industrial projects.
          </p>
          <p>
            As a division of Opus Building Materials LLC, we deliver complete
            interior finishing solutions — from acoustic wall systems to premium
            architectural finishes — backed by direct manufacturing and
            supply-chain expertise.
          </p>
        </div>
        <div className="lg:col-span-2">
          <h3 className="font-lead mb-2">What sets us apart</h3>
          <ul className="list-disc flex flex-col gap-1.5 pl-4">
            <li>
              <strong className="font-semibold">
                Advanced Sonic Modeling & Prediction
              </strong>{" "}
              — We simulate how sound will behave in a space before installation
              begins, so acoustic issues are caught and corrected at the design
              stage, not after construction.
            </li>
            <li>
              <strong className="font-semibold">
                International Standard Compliance
              </strong>{" "}
              — Every acoustic system we supply and install meets recognized
              global acoustic and fire-safety standards, so architects and
              contractors can specify with confidence.
            </li>
            <li>
              <strong className="font-semibold">
                Eco-Friendly & Sustainable Materials
              </strong>{" "}
              — Our acoustic panels are manufactured from sustainable,
              low-impact materials, supporting green building certifications
              without compromising sound performance.
            </li>
          </ul>
        </div>
      </div>

      {/* SERVICES */}
      <div
        id="our-services"
        className="lg:col-start-3 lg:col-span-4 scroll-mt-24"
      >
        <h3 className="font-lead text-xl sm:text-2xl mb-8">
          We provide acoustic solutions for every space.
        </h3>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-x-8 gap-y-8 lg:gap-y-4">
          <li>
            <p className="mb-3 text-slate-300">01</p>
            <p className="mb-1">Educational Acoustic Solutions</p>
            <p className="text-sm text-slate-500">
              Acoustic design and reverberation control for classrooms,
              libraries and lecture halls.
            </p>
          </li>
          <li>
            <p className="mb-3 text-slate-300">02</p>
            <p className="mb-1">Commercial & Corporate Acoustic Solutions</p>
            <p className="text-sm text-slate-500">
              Soundproofing and speech privacy solutions for offices, meeting
              rooms and boardrooms.
            </p>
          </li>
          <li>
            <p className="mb-3 text-slate-300">03</p>
            <p className="mb-1">Healthcare & Hospital Acoustic Solutions</p>
            <p className="text-sm text-slate-500">
              Noise control and acoustic privacy supporting patient comfort and
              confidentiality.
            </p>
          </li>
          <li>
            <p className="mb-3 text-slate-300">04</p>
            <p className="mb-1">Auditorium & Theatre Acoustic Solutions</p>
            <p className="text-sm text-slate-500">
              Acoustic treatments for speech clarity, balanced sound and
              audience comfort.
            </p>
          </li>
          <li>
            <p className="mb-3 text-slate-300">05</p>
            <p className="mb-1">Hospitality Acoustic Solutions</p>
            <p className="text-sm text-slate-500">
              Sound insulation and ambience control for hotels, restaurants and
              event spaces.
            </p>
          </li>
          <li>
            <p className="mb-3 text-slate-300">06</p>
            <p className="mb-1">Industrial Acoustic Solutions</p>
            <p className="text-sm text-slate-500">
              Noise-control systems for factories, machinery, equipment and
              plant rooms.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default AboutOverview;
