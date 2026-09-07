import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import { Accordion, AccordionItem } from "../../components/Accordion";

import panelLeaning from "../../assets/products/acou-max/modular-wall-acoustic-system/1.png";
import boardroomInstall from "../../assets/products/acou-max/modular-wall-acoustic-system/2.png";
import panelDetail from "../../assets/products/acou-max/modular-wall-acoustic-system/3.png";

function ModularWallAcousticSystem() {
  const features = [
    "Only four modular tile types, combined to create varied, custom wall configurations",
    "Suitable for both wall and ceiling applications, visually integrating the two",
    "100% recyclable, sustainable material",
    "Patented product",
    "Available in more than 55 colours",
    "Cost-effective for large-scale coverage",
    "Easy to maintain — dirt and dust resistant",
  ];

  const applications = [
    "Large open-plan corporate offices needing full-wall acoustic coverage",
    "Corridors and transition spaces where the acoustic treatment continues from wall to ceiling",
    "Projects requiring a sculptural, non-repetitive wall finish at scale",
    "Commercial interiors prioritizing sustainable, certified materials",
  ];

  const certifications = [
    "BS 476 Part 7:1997 + Amd. No. C1:2014 — Fire tests",
    "BS EN 717-1 — E0 formaldehyde emission test report",
    "MSDS — Material Safety Data Sheet",
    "ASTM E84-16 — Class A and B fire rating",
    "EN 13501-1 — Fire classification, Class B, s1, d0",
  ];

  return (
    <>
      <div className="bg-secondary text-sky-50 px-6 sm:px-10 lg:px-20 py-8 flex items-center justify-between">
        <Link to="/">
          <Logo className="mb-1" />
        </Link>
        <Navbar className="md:basis-xl" flexMode />
      </div>

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
          Modular Wall Acoustic System
          <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl text-sky-50/80">
            Interlocking PET Acoustic Panels
          </span>
        </h1>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 pt-16 pb-8 lg:pb-16 text-sky-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-start order-2 lg:order-1">
            <h2 className="font-lead text-xl sm:text-2xl mb-6">
              Modular Wall Acoustic System
            </h2>
            <p className="text-primary font-lead mb-4">
              Four modules, endless walls
            </p>
            <p className="leading-relaxed text-slate-600 mb-6">
              The Modular Wall Acoustic System is built around just four base
              modules, but combines them into what can feel like endless
              "custom" wall sculptures — undulations, ebbs and flows, and
              transitions that can be shaped to fit almost any interior. It
              works equally well as a wall or ceiling system, letting a single
              acoustic language run continuously through a space rather than
              stopping at the wall line.
            </p>
            <p className="text-slate-500 mb-8 sm:mb-10 lg:mb-12">
              <span className="font-semibold text-sky-950">Best for:</span>{" "}
              Large open-plan corporate offices, corridors, and projects needing
              full-wall or wall-to-ceiling acoustic coverage with a unified,
              sculptural look.
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
              alt="AcouMAX Modular Wall Acoustic System cube-textured feature wall"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={boardroomInstall}
              alt="Modular acoustic wall panels integrated into ceiling design"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={panelDetail}
              alt="Close-up detail of interlocking modular acoustic panels"
              className="w-full h-32 sm:h-56 object-cover col-span-2"
            />
          </div>
        </div>
      </section>

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

      <section className="bg-primary-light px-6 sm:px-10 lg:px-20 py-16 text-primary-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h2 className="font-lead text-xl sm:text-2xl mb-6">Installation</h2>
            <p className="leading-relaxed text-slate-600">
              The Modular Wall Acoustic System is available as a ceiling system
              in 9mm and 12mm panel thicknesses. Because the system is built
              from just four interlocking module types, panels can be arranged
              in varied configurations to fit a wall or ceiling's exact
              dimensions while maintaining consistent acoustic performance
              across the surface.
            </p>
          </div>
          <div>
            <h2 className="font-lead text-xl sm:text-2xl mb-6">
              Certifications
            </h2>
            <ul className="flex flex-col gap-3">
              {certifications.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-600">
                  <span className="text-primary shrink-0">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 py-16 text-sky-950">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion>
          <AccordionItem
            title="How many module types does the Modular Wall Acoustic System use?"
            defaultOpen
          >
            The system is built from just four modular tile types, which can be
            combined in different configurations to create varied wall or
            ceiling designs.
          </AccordionItem>
          <AccordionItem title="Can the Modular Wall Acoustic System be used on ceilings as well as walls?">
            Yes. It's available as a ceiling system in 9mm and 12mm panel
            thicknesses, and can visually integrate the ceiling into the overall
            interior design.
          </AccordionItem>
          <AccordionItem title="Is the Modular Wall Acoustic System sustainable?">
            Yes. It's made from 100% recyclable, sustainable material.
          </AccordionItem>
          <AccordionItem title="What fire safety certifications does the system have?">
            It's certified to BS 476 Part 7:1997, ASTM E84-16 (Class A and B),
            and EN 13501-1 (Class B, s1, d0), among other standards.
          </AccordionItem>
          <AccordionItem title="How many colours are available?">
            The Modular Wall Acoustic System is available in more than 55
            colours.
          </AccordionItem>
        </Accordion>
      </section>

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

export default ModularWallAcousticSystem;
