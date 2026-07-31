function About() {
  return (
    <section className="grid grid-cols-6 gap-20 px-20 py-32 text-sky-950">
      <div>
        <h2 className="font-lead text-xl">Who are we?</h2>
      </div>
      <div className="-col-end-1 col-span-4 grid grid-cols-subgrid gap-y-8">
        <p className="font-lead text-2xl col-span-full">
          Opus Acoustics is a leading provider of innovative architectural
          acoustic solutions across the Middle East. We specialize in
          high-performance systems that blend sound quality with modern
          aesthetics.
        </p>
        <div className="col-span-2">
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
        <div className="col-span-2">
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
    </section>
  );
}

export default About;
