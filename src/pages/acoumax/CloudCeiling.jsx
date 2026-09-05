import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import { Accordion, AccordionItem } from "../../components/Accordion";

import panelLeaning from "../../assets/products/acou-max/cloud-ceiling/1.png";
import boardroomInstall from "../../assets/products/acou-max/cloud-ceiling/2.png";
import panelDetail from "../../assets/products/acou-max/cloud-ceiling/3.png";

function CloudCeiling() {
  const features = [
    "Suspended below the structural ceiling as discrete acoustic elements rather than a full panel system",
    "Made from recycled PET fibre, supporting sustainable commercial fit-outs",
    "Lightweight, durable, and eco-friendly",
    "Available in multiple shapes — including circular clusters and diamond-grid layouts",
    "Flexible layout options, allowing partial ceiling coverage rather than wall-to-wall installation",
  ];

  const applications = [
    "Open-plan corporate offices needing ceiling-level acoustic treatment without a full suspended ceiling",
    "Cafés, transit spaces, and retail interiors with high foot traffic and hard surfaces",
    "Reception and lounge areas where a softer visual ceiling treatment is preferred",
    "Public and commercial spaces needing noise reduction across large open volumes",
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
          AcouMAX Cloud Ceiling
          <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl text-sky-50/80">
            Suspended PET Acoustic Ceiling Panels
          </span>
        </h1>
      </section>

      {/* Intro — text + images side by side */}
      <section className="px-6 sm:px-10 lg:px-20 pt-16 pb-8 lg:pb-16 text-sky-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-start order-2 lg:order-1">
            <h2 className="font-lead text-xl sm:text-2xl mb-6">
              AcouMAX Cloud Ceiling
            </h2>
            <p className="text-primary font-lead mb-4">
              Suspended acoustic elements that soften sound from above
            </p>
            <p className="leading-relaxed text-slate-600 mb-6">
              AcouMAX Cloud Ceiling panels hang below the structural ceiling as
              discrete acoustic "islands," ideal for spaces where a full
              acoustic ceiling isn't practical or desired. Made from recycled
              PET fibre, they're lightweight, durable, and eco-friendly, and
              available in a range of shapes, colours, and thicknesses — from
              soft circular clusters to angular diamond grids — so the format
              can flex between a calm, minimal look and a bolder architectural
              statement.
            </p>
            <p className="text-slate-500 mb-8 sm:mb-10 lg:mb-12">
              <span className="font-semibold text-sky-950">Best for:</span>{" "}
              Open-plan corporate offices, cafés, transit and retail spaces, and
              other public interiors needing ceiling-level sound softening.
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
              alt="AcouMAX Cloud Ceiling circular acoustic panels suspended above office"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={boardroomInstall}
              alt="AcouMAX diamond-grid acoustic cloud ceiling in commercial interior"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={panelDetail}
              alt="Close-up of AcouMAX Cloud Ceiling detail"
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
          Cloud Ceiling panels are suspended from the structural ceiling to
          create discrete acoustic clusters or grids, rather than covering the
          ceiling edge-to-edge. This allows installation to be tailored to the
          areas of a room that need the most acoustic treatment, while leaving
          the rest of the ceiling exposed or untouched.
        </p>
      </section>

      {/* FAQ — background removed */}
      <section className="px-6 sm:px-10 lg:px-20 py-16 text-sky-950">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion>
          <AccordionItem
            title="What is a Cloud Ceiling acoustic panel?"
            defaultOpen
          >
            A Cloud Ceiling panel is a suspended acoustic element that hangs
            below the structural ceiling as a discrete "island" of sound
            absorption, rather than covering the entire ceiling surface.
          </AccordionItem>
          <AccordionItem title="What shapes are AcouMAX Cloud Ceiling panels available in?">
            AcouMAX Cloud Ceiling panels come in a range of shapes, including
            soft circular clusters and angular diamond-grid layouts, to suit
            different design styles.
          </AccordionItem>
          <AccordionItem title="Is Cloud Ceiling suitable for spaces with an exposed or industrial ceiling?">
            Yes. Because Cloud Ceiling panels are suspended as discrete elements
            rather than a full ceiling system, they work well in spaces with
            exposed services or an industrial-style ceiling.
          </AccordionItem>
          <AccordionItem title="What is AcouMAX Cloud Ceiling made from?">
            AcouMAX Cloud Ceiling panels are made from recycled PET fibre,
            making them lightweight, durable, and eco-friendly.
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

export default CloudCeiling;
