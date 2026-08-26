import FounderImg from "../../assets/founder.jpeg";

function OurStory() {
  return (
    <section
      id="our-story"
      className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 text-sky-950"
    >
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-16">
        <div className="lg:col-span-2">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-primary mb-4">
            Our Story
          </p>
          <h2 className="font-lead text-2xl sm:text-3xl">
            Building Better-Sounding Spaces Through Acoustic Solutions &amp;
            Design
          </h2>
        </div>

        <div className="lg:col-span-4">
          <p className="mb-6 leading-relaxed">
            Opus Acoustic was established as the dedicated acoustic solutions
            division of Opus Building Materials LLC. Our mission is to bring
            world-class acoustic solutions and acoustic design expertise to the
            region's construction industry. We connect globally recognized
            acoustic manufacturers with architects, consultants, developers, and
            interior designers across Dubai and the wider UAE.
          </p>
          <p className="mb-8 leading-relaxed">
            Opus Acoustic supports projects of every scale, offering complete
            acoustic solutions — from consultancy and technical specification
            through to acoustic panel supply, installation, and after-sales
            service. Our expertise covers acoustic wall and ceiling systems,
            sound-absorptive panels and baffles, acoustic partitions, and
            auditorium acoustics for commercial, educational, healthcare,
            hospitality, and cultural developments.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 py-2 mb-8">
            <p className="font-lead text-lg sm:text-xl leading-snug">
              "Great architecture is felt as much as it is seen. At Opus
              Acoustic, we engineer sound the way architects design space — with
              precision, purpose, and performance in mind."
            </p>
          </blockquote>

          <p className="mb-8 leading-relaxed">
            Our acoustic solutions team of consultants and sound engineers
            provides expert guidance on speech intelligibility, noise control,
            and reverberation management from the earliest design stages. We
            work directly with architects and project stakeholders to create
            acoustically optimized environments for offices, schools, healthcare
            facilities, hospitality venues, auditoriums, and cinemas.
          </p>
          <p className="mb-8 leading-relaxed">
            Opus Acoustic is headquartered in Dubai, United Arab Emirates, and
            delivers acoustic solutions to clients across the GCC and Europe. We
            collaborate with internationally recognized acoustic manufacturers
            to deliver integrated project solutions that meet international
            acoustic performance standards.
          </p>

          <div className="flex items-center gap-4">
            <img
              src={FounderImg}
              alt="Abdul Rasheed, Founder / Director of Opus Acoustic"
              className="w-14 h-14 rounded-full object-cover shrink-0"
            />
            <div>
              <p className="font-semibold">AR — Abdul Rasheed</p>
              <p className="text-sm text-slate-500">Founder / Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
