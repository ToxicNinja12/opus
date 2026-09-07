import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import { Accordion, AccordionItem } from "../../components/Accordion";

import panelLeaning from "../../assets/products/acou-max/screen-partition/1.png";
import boardroomInstall from "../../assets/products/acou-max/screen-partition/2.png";
import panelDetail from "../../assets/products/acou-max/screen-partition/3.png";

function ScreenPartition() {
  const features = [
    "Freestanding design — no permanent construction or wall fixing required",
    "Fine cut-out patterns that keep the screen visually light while absorbing sound",
    "Made from high-performance PET fibre, lightweight and durable",
    "Reconfigurable as office layouts change, supporting flexible space planning",
    "Eco-friendly material, suited to sustainable commercial fit-outs",
  ];

  const applications = [
    "Zoning within open-plan corporate offices, without committing to fixed walls",
    "Coworking spaces needing flexible, movable privacy dividers",
    "Commercial interiors where noise reduction and visual privacy are both needed between desk clusters",
    "Reception or waiting areas needing a decorative, semi-transparent divider",
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
          AcouMAX Screen Partition
          <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl text-sky-50/80">
            Freestanding PET Acoustic Screens
          </span>
        </h1>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 pt-16 pb-8 lg:pb-16 text-sky-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-start order-2 lg:order-1">
            <h2 className="font-lead text-xl sm:text-2xl mb-6">
              AcouMAX Screen Partition
            </h2>
            <p className="text-primary font-lead mb-4">
              Freestanding screens that divide space and reduce noise transfer
            </p>
            <p className="leading-relaxed text-slate-600 mb-6">
              AcouMAX Screen Partitions are built from high-performance PET
              fibre to reduce noise and add visual privacy between zones without
              requiring permanent construction. Fine cut-out patterns keep the
              panels visually light while still doing acoustic work, and because
              they're freestanding, they can be reconfigured as a space's layout
              changes. Lightweight, durable, and eco-friendly, they're available
              in a range of sizes, colours, and configurations.
            </p>
            <p className="text-slate-500 mb-8 sm:mb-10 lg:mb-12">
              <span className="font-semibold text-sky-950">Best for:</span>{" "}
              Open-plan corporate offices, coworking spaces, and commercial
              interiors that need flexible zoning without fixed walls.
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
              alt="AcouMAX laser-cut acoustic screen partition dividing office desks"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={boardroomInstall}
              alt="AcouMAX freestanding acoustic screen panel with geometric pattern"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={panelDetail}
              alt="Close-up detail of AcouMAX Screen Partition cut-out pattern"
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
        <h2 className="font-lead text-xl sm:text-2xl mb-6">Installation</h2>
        <p className="max-w-3xl leading-relaxed text-slate-600">
          Screen Partitions are freestanding and self-supporting, so they don't
          require wall mounting or structural fixing. This makes them
          straightforward to place, move, or reconfigure as a space's layout
          evolves, without the cost or disruption of permanent partition walls.
        </p>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 py-16 text-sky-950">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion>
          <AccordionItem
            title="Do Screen Partitions need to be fixed to a wall or floor?"
            defaultOpen
          >
            No. AcouMAX Screen Partitions are freestanding and self-supporting,
            so they can be placed and moved without wall mounting or structural
            fixing.
          </AccordionItem>
          <AccordionItem title="Can Screen Partitions be reconfigured after installation?">
            Yes. Because they're freestanding, Screen Partitions can be
            repositioned or reconfigured as office layouts change, offering more
            flexibility than fixed partition walls.
          </AccordionItem>
          <AccordionItem title="What material are AcouMAX Screen Partitions made from?">
            They're made from high-performance PET fibre, which is lightweight,
            durable, and eco-friendly.
          </AccordionItem>
          <AccordionItem title="Do Screen Partitions provide visual privacy as well as acoustic benefits?">
            Yes. The fine cut-out patterns reduce noise transfer while also
            softening sightlines between zones, offering visual as well as
            acoustic separation.
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

export default ScreenPartition;
