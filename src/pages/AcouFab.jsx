import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { Accordion, AccordionItem } from "../components/Accordion";

function AcouFab() {
  const systems = [
    {
      title: "PVC Track Stretch System",
      description:
        "Track-based framework system where acoustic fabric is stretched into interlocking jaws for a seamless, cost-effective finish — ideal for large-scale wall and ceiling coverage.",
    },
    {
      title: "3D Wrapped System",
      description:
        "Sculptural, dimensional fabric-wrapped panels that combine decorative visual impact with strong sound absorption for statement interiors.",
    },
    {
      title: "Decorative Baffles / Cloud Ceiling System",
      description:
        "Fabric-wrapped acoustic baffles and suspended ceiling elements that reduce reverberation in large, high-ceiling spaces while enhancing the overall design.",
    },
    {
      title: "AcouSoft System",
      description:
        "Fiberglass-wool acoustic panel on a metal frame, wrapped in fabric for a soft, upholstered finish with reliable sound absorption — ideal for walls and feature areas.",
    },
  ];

  return (
    <>
      <div className="bg-secondary text-sky-50 px-6 sm:px-10 lg:px-20 py-8 flex items-center justify-between">
        <Link to="/">
          <Logo className="mb-1" />
        </Link>
        <Navbar className="md:basis-xl" flexMode />
      </div>

      <section className="bg-secondary text-sky-50 px-6 sm:px-10 lg:px-20 pt-8 pb-16 lg:pb-24">
        <p className="text-sm text-sky-50/60 mb-6">
          <Link
            to="/products/architectural-acoustic"
            className="hover:text-sky-50 transition-colors"
          >
            &larr; Architectural Acoustics
          </Link>{" "}
        </p>
        <h1 className="font-lead text-3xl sm:text-4xl lg:text-5xl mb-6 max-w-2xl">
          AcouFAB &mdash; Fabric Wrapped Acoustics
        </h1>
        <p className="max-w-2xl leading-relaxed text-sky-50/80">
          AcouFAB is an eco-friendly, stretch-fabric acoustical system that lets
          architects and designers meet exact acoustic specifications for any
          project. Installed on-site, it reduces sound reflections,
          reverberation, and overall noise levels within a space — improving
          speech intelligibility and acoustic comfort. Available across multiple
          mounting systems and finishes, AcouFAB combines high-performance sound
          absorption with a clean, tailored, design-forward look.
        </p>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 text-sky-950">
        <h2 className="font-lead text-lg sm:text-xl uppercase tracking-wide mb-8">
          Our AcouFAB Systems
        </h2>

        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
          {systems.map((system, i) => (
            <li key={system.title}>
              <p className="mb-3 text-slate-300">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mb-1 font-semibold">{system.title}</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                {system.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-primary-light px-6 sm:px-10 lg:px-20 py-16 lg:py-24 text-primary-dark">
        <h2 className="font-lead text-lg sm:text-xl uppercase tracking-wide mb-8">
          Frequently Asked Questions
        </h2>

        <Accordion>
          <AccordionItem
            title="Is AcouFAB fire-rated / non-flammable?"
            defaultOpen
          >
            Yes. AcouFAB systems are Class A – Non-Flammable, tested as per ASTM
            E-84, making them suitable for commercial and public spaces with
            strict fire safety requirements.
          </AccordionItem>
          <AccordionItem title="Can AcouFAB be installed on curved or irregular surfaces?">
            Yes. The PVC track and 3D wrapped systems can be adapted to a range
            of surface shapes, including curved walls and columns, making them
            suitable for creative and non-standard architectural layouts.
          </AccordionItem>
          <AccordionItem title="What fabric colors and finishes are available?">
            AcouFAB comes in a wide range of acoustic fabric colors and
            textures, allowing you to match brand palettes or interior design
            themes without compromising acoustic performance.
          </AccordionItem>
          <AccordionItem title="Is AcouFAB suitable for humid or high-moisture environments?">
            AcouFAB is best suited for indoor, climate-controlled environments.
            For humid or semi-outdoor applications, our team can recommend the
            right system and fabric specification — contact us for
            project-specific guidance.
          </AccordionItem>
          <AccordionItem title="How is AcouFAB maintained and cleaned?">
            The fabric surface can be maintained with regular dusting or gentle
            vacuuming. Avoid harsh chemicals or excessive moisture, as this may
            affect the fabric finish over time.
          </AccordionItem>
          <AccordionItem title="What's the typical lead time for custom sizes or colors?">
            Lead times vary depending on system type, size, and fabric
            selection. Contact our team with your project details for an
            accurate timeline and quote.
          </AccordionItem>
        </Accordion>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 text-sky-950 text-center">
        <h2 className="font-lead text-2xl sm:text-3xl mb-4 max-w-2xl mx-auto">
          Transform Your Space with AcouFAB
        </h2>
        <p className="max-w-2xl mx-auto leading-relaxed text-slate-600 mb-8">
          From open-plan offices to auditoriums and hospitality interiors,
          AcouFAB delivers acoustic performance without compromising on design.
          Talk to our team to find the right fabric-wrapped system for your next
          project.
        </p>
        <a href="#" className="inline-block bg-primary text-sky-50 px-6 py-4">
          Contact Us
        </a>
      </section>

      <Footer />
    </>
  );
}

export default AcouFab;
