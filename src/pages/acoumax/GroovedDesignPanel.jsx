import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import { Accordion, AccordionItem } from "../../components/Accordion";

import panelLeaning from "../../assets/products/acou-max/grooved-design-panel/1.png";
import boardroomInstall from "../../assets/products/acou-max/grooved-design-panel/3.png";
import panelDetail from "../../assets/products/acou-max/grooved-design-panel/2.png";

function GroovedDesignPanel() {
  const features = [
    "Two distinct patterns — Linear Grooved (straight channels) and Design Grooved (arch/curve pattern)",
    "Adds architectural texture and depth to flat walls while retaining acoustic performance",
    "Made from polyester fibre (PET) with recycled content, supporting sustainable fit-outs",
    "Flexible installation — suited to walls, ceilings, and glass surfaces",
    "Fire-rated and non-toxic, safe for occupied interior spaces",
  ];

  const applications = [
    "Feature walls in corporate office reception areas and executive boardrooms",
    "Hospitality lobbies and hotel reception desks needing a textured, high-end finish",
    "Commercial interiors where the wall itself contributes to the design, not just acoustic treatment",
    "Workstation backdrops and meeting room walls in open-plan corporate offices",
  ];

  return (
    <>
      <div className="bg-secondary text-sky-50 px-6 sm:px-10 lg:px-20 py-8 flex items-center justify-between">
        <Link to="/">
          <Logo className="mb-1" />
        </Link>
        <Navbar className="md:basis-xl" flexMode />
      </div>

      {/* Hero — H1 + breadcrumb only */}
      <section className="bg-secondary text-sky-50 px-6 sm:px-10 lg:px-20 pt-8 pb-12 lg:pb-16">
        <p className="text-sm text-sky-50/60 mb-6">
          <Link
            to="/products/architectural-acoustic/acoumax"
            className="hover:text-sky-50 transition-colors"
          >
            &larr; All Variants
          </Link>{" "}
        </p>
        <h1 className="font-lead text-3xl sm:text-4xl lg:text-5xl max-w-3xl">
          AcouMAX Grooved Design Panel
          <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl text-sky-50/80">
            Textured PET Acoustic Wall Panels
          </span>
        </h1>
      </section>

      {/* Intro — text + images side by side */}
      <section className="px-6 sm:px-10 lg:px-20 pt-16 pb-8 lg:pb-16 text-sky-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-start order-2 lg:order-1">
            <h2 className="font-lead text-xl sm:text-2xl mb-6">
              AcouMAX Grooved Design Panel
            </h2>
            <p className="text-primary font-lead mb-4">
              Architectural texture that still absorbs sound
            </p>
            <p className="leading-relaxed text-slate-600 mb-6">
              The AcouMAX Grooved Design Panel adds dimensional texture to a
              wall without giving up acoustic performance. It's available in two
              styles — <strong>Linear Grooved</strong>, with straight, evenly
              spaced channels, and <strong>Design Grooved</strong>, with
              sculpted arch and curve patterns — so the same acoustic core can
              suit either a minimal, architectural look or a softer, decorative
              one. The grooves catch light differently depending on viewing
              angle, giving flat walls a sense of depth that a plain surface
              can't offer.
            </p>
            <p className="text-slate-500 mb-8 sm:mb-10 lg:mb-12">
              <span className="font-semibold text-sky-950">Best for:</span>{" "}
              Corporate office reception areas, executive boardrooms,
              hospitality lobbies, commercial feature walls.
            </p>
            <a
              href="#"
              className="text-center bg-primary text-sky-50 px-6 py-4"
            >
              Request a Quote &rarr;
            </a>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <img
              src={panelLeaning}
              alt="AcouMAX Linear Grooved acoustic panel on dark feature wall"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={boardroomInstall}
              alt="AcouMAX Design Grooved acoustic panel with arch pattern on light wall"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={panelDetail}
              alt="Close-up of AcouMAX Plain Panel flat acoustic surface"
              className="w-full h-32 sm:h-56 object-cover col-span-2"
            />
          </div>
        </div>
      </section>

      {/* Features + Applications side by side */}
      <section className="px-6 sm:px-10 lg:px-20 py-16 text-sky-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h2 className="font-lead text-xl sm:text-2xl mb-6">Features</h2>
            <ul className="flex flex-col gap-3">
              {features.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-600">
                  <span className="text-primary shrink-0">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-lead text-xl sm:text-2xl mb-6">Applications</h2>
            <ul className="flex flex-col gap-3">
              {applications.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-600">
                  <span className="text-primary shrink-0">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="bg-primary-light px-6 sm:px-10 lg:px-20 py-16 text-primary-dark">
        <h2 className="font-lead text-xl sm:text-2xl mb-6">Installation</h2>
        <p className="max-w-3xl leading-relaxed text-slate-600">
          AcouMAX Grooved Design Panels can be ceiling-hung using cables or
          rods, wall-mounted on most surfaces including glass, or fixed to
          T-grid ceilings with compatible clips. Panels can also be installed
          directly using adhesive or gun nails, giving flexible options across
          different site conditions and substrate types.
        </p>
      </section>

      {/* FAQ — background removed */}
      <section className="px-6 sm:px-10 lg:px-20 py-16 text-sky-950">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion>
          <AccordionItem
            title="What's the difference between Linear and Design Grooved panels?"
            defaultOpen
          >
            Linear Grooved panels have straight, evenly spaced channels for a
            clean architectural look, while Design Grooved panels feature
            sculpted arch and curve patterns for a softer, more decorative
            finish.
          </AccordionItem>
          <AccordionItem title="Can Grooved Design Panels be installed on glass?">
            Yes. AcouMAX Grooved Design Panels can be wall-mounted on most
            surfaces, including glass, in addition to standard wall and T-grid
            ceiling installation.
          </AccordionItem>
          <AccordionItem title="Do grooved panels absorb sound as well as flat panels?">
            Yes. The grooved surface adds visual texture and architectural
            detail while the PET fibre core continues to deliver full acoustic
            absorption performance.
          </AccordionItem>
          <AccordionItem title="What installation methods are available for Grooved Design Panels?">
            Panels can be ceiling-hung with cables or rods, wall-mounted with
            clips or adhesive, fixed to T-grid ceilings, or installed directly
            with gun nails, depending on the site and substrate.
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="flex justify-center px-6 sm:px-10 lg:px-20 py-16">
        <a
          href="#"
          className="inline-block text-center bg-primary text-sky-50 px-6 py-4"
        >
          Request a Quote &rarr;
        </a>
      </section>

      <Footer />
    </>
  );
}

export default GroovedDesignPanel;
