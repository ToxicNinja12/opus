import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import { Accordion, AccordionItem } from "../../components/Accordion";

import panelLeaning from "../../assets/products/acou-max/desk-partition/1.png";
import boardroomInstall from "../../assets/products/acou-max/desk-partition/2.png";
import panelDetail from "../../assets/products/acou-max/desk-partition/3.png";

function DeskPartition() {
  const features = [
    "High-density PET fibre construction for effective sound absorption at close range",
    "Compact format designed for workstation-level acoustic control, not full-room treatment",
    "Easy installation using metal clips, without modifying existing furniture",
    "Available in multiple sizes, colours, and thicknesses",
    "Lightweight, durable, and eco-friendly",
  ];

  const applications = [
    "Open-plan corporate offices with shared desking arrangements",
    "Call-heavy teams (sales, support, recruitment) needing speech privacy at the desk",
    "Hot-desk and coworking environments where individual focus space matters",
    "Retrofitting acoustic control onto existing desk systems without full furniture replacement",
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
          AcouMAX Desk Partition
          <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl text-sky-50/80">
            High-Density PET Acoustic Desk Dividers
          </span>
        </h1>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 pt-16 pb-8 lg:pb-16 text-sky-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-start order-2 lg:order-1">
            <h2 className="font-lead text-xl sm:text-2xl mb-6">
              AcouMAX Desk Partition
            </h2>
            <p className="text-primary font-lead mb-4">
              Compact, at-the-desk acoustic dividers for focus and speech
              privacy
            </p>
            <p className="leading-relaxed text-slate-600 mb-6">
              AcouMAX Desk Partitions bring acoustic control down to individual
              workstation level. Made from high-density PET fibre, they reduce
              cross-desk noise and improve speech privacy in open offices. They
              install easily with metal clips and come in multiple sizes,
              colours, and thicknesses, so they integrate cleanly into most
              existing desk systems rather than requiring a full furniture
              overhaul.
            </p>
            <p className="text-slate-500 mb-8 sm:mb-10 lg:mb-12">
              <span className="font-semibold text-sky-950">Best for:</span>{" "}
              Open-plan corporate offices, call-heavy teams, hot-desk and
              coworking environments.
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
              alt="AcouMAX acoustic desk partitions separating open office workstations"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={boardroomInstall}
              alt="Overhead view of AcouMAX desk partition panels on shared office desk"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={panelDetail}
              alt="Close-up detail of AcouMAX Desk Partition material"
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
          Desk Partitions attach to existing desks using metal clips, making
          installation quick and non-permanent. Because they clip directly onto
          standard desk edges, they can typically be added to existing furniture
          without structural changes, and repositioned or removed as desking
          needs change.
        </p>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 py-16 text-sky-950">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion>
          <AccordionItem
            title="How are AcouMAX Desk Partitions installed?"
            defaultOpen
          >
            They install using metal clips that attach directly to standard desk
            edges, so they can be fitted to existing furniture without
            structural changes.
          </AccordionItem>
          <AccordionItem title="What problem do Desk Partitions solve in open offices?">
            They reduce cross-desk noise and improve speech privacy at
            individual workstations, which is useful for call-heavy teams and
            shared desking arrangements.
          </AccordionItem>
          <AccordionItem title="Can Desk Partitions be added to existing office furniture?">
            Yes. Because they clip onto standard desk edges, they typically
            don't require a full furniture overhaul or replacement.
          </AccordionItem>
          <AccordionItem title="What material are AcouMAX Desk Partitions made from?">
            They're made from high-density PET fibre, which is lightweight,
            durable, and eco-friendly.
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

export default DeskPartition;
