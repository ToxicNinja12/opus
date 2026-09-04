import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import { Accordion, AccordionItem } from "../../components/Accordion";

import panelLeaning from "../../assets/products/acou-max/acoustic-3d-panel/1.png";
import boardroomInstall from "../../assets/products/acou-max/acoustic-3d-panel/2.png";
import panelDetail from "../../assets/products/acou-max/acoustic-3d-panel/3.png";

function Acoustic3DPanel() {
  const features = [
    "Sculptural, dimensional surface pattern — not flat or printed texture",
    "Made from recycled PET fibre, supporting sustainable commercial fit-outs",
    "Lightweight and non-toxic, safe for occupied interior spaces",
    "Available in multiple patterns for different design intents, from geometric to organic relief",
    "Adds visual depth and shadow play under directional lighting",
  ];

  const applications = [
    "Feature walls in corporate reception areas and executive boardrooms",
    "Hospitality interiors — hotel lobbies, restaurant walls, and event spaces",
    "Open-plan offices where the wall needs to double as a design statement",
    "Meeting rooms and collaboration spaces needing both acoustic control and visual interest",
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
          AcouMAX Acoustic 3D Panels
          <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl text-sky-50/80">
            Sculptural PET Acoustic Wall Panels
          </span>
        </h1>
      </section>

      {/* Intro — text + images side by side */}
      <section className="px-6 sm:px-10 lg:px-20 pt-16 pb-8 lg:pb-16 text-sky-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-start order-2 lg:order-1">
            <h2 className="font-lead text-xl sm:text-2xl mb-6">
              AcouMAX Acoustic 3D Panels
            </h2>
            <p className="text-primary font-lead mb-4">
              Dimensional texture that reduces echo and makes a statement
            </p>
            <p className="leading-relaxed text-slate-600 mb-6">
              AcouMAX Acoustic 3D Panels trade a flat surface for a sculptural,
              dimensional one — geometric relief patterns that add bold visual
              texture while still absorbing sound. Made from recycled PET,
              they're lightweight, durable, and non-toxic, giving designers a
              way to treat a wall acoustically without defaulting to a plain
              finish. The relief pattern reads differently depending on lighting
              and angle, so the same panel can feel subtle in daylight and
              dramatic under feature lighting.
            </p>
            <p className="text-slate-500 mb-8 sm:mb-10 lg:mb-12">
              <span className="font-semibold text-sky-950">Best for:</span>{" "}
              Corporate office feature walls, executive boardrooms, hospitality
              and reception interiors, open-plan meeting spaces.
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
          AcouMAX Acoustic 3D Panels install using the same flexible methods as
          the rest of the AcouMAX range — wall-mounted directly, or fixed using
          adhesive or mechanical fixings depending on the substrate. Because the
          panels are lightweight, they don't require reinforced wall structures
          for standard installations.
        </p>
      </section>

      {/* FAQ — background removed */}
      <section className="px-6 sm:px-10 lg:px-20 py-16 text-sky-950">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion>
          <AccordionItem
            title="What are AcouMAX Acoustic 3D Panels made of?"
            defaultOpen
          >
            AcouMAX Acoustic 3D Panels are made from recycled PET (polyester
            fibre), making them lightweight, durable, and non-toxic.
          </AccordionItem>
          <AccordionItem title="Do 3D acoustic panels reduce echo as effectively as flat panels?">
            Yes. The sculptural surface adds visual texture and dimension while
            the PET fibre core still absorbs sound and reduces echo in the room.
          </AccordionItem>
          <AccordionItem title="What spaces are Acoustic 3D Panels best suited for?">
            They work well in corporate reception areas, boardrooms, hospitality
            interiors, and open-plan offices — anywhere a wall needs to combine
            acoustic performance with a strong visual statement.
          </AccordionItem>
          <AccordionItem title="Are Acoustic 3D Panels heavy to install?">
            No. They're lightweight by design, so standard installations don't
            require reinforced wall structures.
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

export default Acoustic3DPanel;
