import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import { Accordion, AccordionItem } from "../../components/Accordion";

import panelLeaning from "../../assets/products/acou-max/baffles-ceiling/1.png";
import boardroomInstall from "../../assets/products/acou-max/baffles-ceiling/2.png";
import panelDetail from "../../assets/products/acou-max/baffles-ceiling/3.png";

function BafflesCeiling() {
  const features = [
    "Four available profile shapes — A-Baffle, V-Baffle, I-Baffle, and U-Baffle",
    "High-density recycled PET construction for effective sound absorption",
    "Lightweight and non-toxic, suitable for occupied commercial interiors",
    "Hangs below the structural ceiling without blocking light fixtures, sprinklers, or airflow",
    "Suited to large, open, or high-ceiling spaces where wall treatment alone isn't enough",
  ];

  const applications = [
    "Open-plan corporate offices with high or exposed ceilings",
    "Auditoriums and large presentation spaces needing reverberation control",
    "Schools and educational facilities",
    "Commercial interiors where ceiling acoustic treatment is needed without a full suspended ceiling",
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
          AcouMAX Baffles Ceiling
          <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl text-sky-50/80">
            High-Density PET Acoustic Ceiling Baffles
          </span>
        </h1>
      </section>

      {/* Intro — text + images side by side */}
      <section className="px-6 sm:px-10 lg:px-20 pt-16 pb-8 lg:pb-16 text-sky-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-start order-2 lg:order-1">
            <h2 className="font-lead text-xl sm:text-2xl mb-6">
              AcouMAX Baffles Ceiling
            </h2>
            <p className="text-primary font-lead mb-4">
              Vertical acoustic control for large, open, high-ceiling spaces
            </p>
            <p className="leading-relaxed text-slate-600 mb-6">
              AcouMAX Baffles Ceiling panels hang vertically from the ceiling to
              intercept sound before it bounces back into the room, reducing
              echo and reverberation in large or high-ceiling interiors. Made
              from high-density, eco-friendly recycled PET, they're lightweight
              and non-toxic, and are available in four profile shapes —
              A-Baffle, V-Baffle, I-Baffle, and U-Baffle — so the acoustic and
              visual profile can be matched to the space. Because baffles hang
              below the structural ceiling, they treat sound without blocking
              natural light, sprinklers, or existing services.
            </p>
            <p className="text-slate-500 mb-8 sm:mb-10 lg:mb-12">
              <span className="font-semibold text-sky-950">Best for:</span>{" "}
              Open-plan corporate offices, auditoriums, schools, large
              commercial interiors with high or exposed ceilings.
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
              alt="AcouMAX A-Baffle acoustic ceiling panel hanging in open office"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={boardroomInstall}
              alt="AcouMAX acoustic baffle ceiling installation above meeting room"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={panelDetail}
              alt="Close-up of individual baffle profile against ceiling grid"
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
          Baffles are suspended from the ceiling structure using cables or rods,
          allowing them to hang at a set depth below the ceiling without
          obstructing lighting, sprinklers, or HVAC systems. Baffle profile (A,
          V, I, or U) can be selected based on the acoustic performance and
          visual effect required for the space.
        </p>
      </section>

      {/* FAQ — background removed */}
      <section className="px-6 sm:px-10 lg:px-20 py-16 text-sky-950">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion>
          <AccordionItem
            title="What profile shapes are available for AcouMAX Baffles?"
            defaultOpen
          >
            AcouMAX Baffles Ceiling is available in four profiles: A-Baffle
            (angled, tent-shaped), V-Baffle (open V-channel), I-Baffle (flat
            vertical blade), and U-Baffle (closed U-channel).
          </AccordionItem>
          <AccordionItem title="Do ceiling baffles block light or sprinklers?">
            No. Baffles hang below the structural ceiling using cables or rods,
            so they reduce echo without blocking natural light, sprinklers, or
            airflow.
          </AccordionItem>
          <AccordionItem title="What spaces are ceiling baffles best suited for?">
            Ceiling baffles work best in large, open, or high-ceiling spaces
            such as open-plan offices, auditoriums, schools, and large
            commercial interiors where wall panels alone aren't enough to
            control reverberation.
          </AccordionItem>
          <AccordionItem title="What material are AcouMAX Baffles made from?">
            AcouMAX Baffles are made from high-density, eco-friendly recycled
            PET fibre, making them lightweight and non-toxic.
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

export default BafflesCeiling;
