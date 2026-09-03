import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import { Accordion, AccordionItem } from "../../components/Accordion";

import panelLeaning from "../../assets/products/acou-max/plain-panel/1.png";
import boardroomInstall from "../../assets/products/acou-max/plain-panel/2.png";
import panelDetail from "../../assets/products/acou-max/plain-panel/3.png";

function PlainPanel() {
  const features = [
    "Flat, seamless acoustic surface with no visible texture or pattern",
    "Lightweight PET panel construction — easy to handle and install without specialist equipment",
    "Fire-rated and non-toxic, safe for occupied interior spaces",
    "Made from polyester fibre with recycled PET content, supporting sustainable fit-outs",
    "Consistent, clean finish suited to large-scale corporate installations",
  ];

  const applications = [
    "Full acoustic feature walls in corporate offices, commercial offices, and reception areas",
    "Backing surface behind joinery, shelving, or furniture in corporate workspaces for subtle sound control",
    "Boardrooms and executive meeting rooms needing a clean, distraction-free acoustic wall finish",
    "Open-plan corporate offices and coworking spaces needing baseline noise reduction without visual complexity",
    "Corridors, lift lobbies, and transition spaces in commercial office buildings",
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
          AcouMAX Plain Panel
          <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl text-sky-50/80">
            Flat-Finish PET Acoustic Wall Panels
          </span>
        </h1>
      </section>

      {/* Intro — text + images side by side */}
      <section className="px-6 sm:px-10 lg:px-20 pt-16 pb-8 lg:pb-16 text-sky-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-start order-2 lg:order-1">
            <h2 className="font-lead text-xl sm:text-2xl mb-6">
              AcouMAX Plain Panel
            </h2>
            <p className="text-primary font-lead mb-4">
              A minimalist acoustic panel that lets performance speak for itself
            </p>
            <p className="leading-relaxed text-slate-600 mb-6">
              The AcouMAX Plain Panel is a flat-finish, sound-absorbing acoustic
              panel made from polyester fibre (PET) — built for spaces where
              noise control matters as much as visual simplicity. With no
              texture or pattern on the surface, it works as a wall panel or
              ceiling panel while still delivering full acoustic performance. As
              the most versatile format in the AcouMAX range, it suits
              everything from a full acoustic feature wall to a subtle backing
              surface behind furniture and joinery.
            </p>
            <p className="text-slate-500 mb-8 sm:mb-10 lg:mb-12">
              <span className="font-semibold text-sky-950">Best for:</span>{" "}
              Corporate offices, commercial office fit-outs, executive
              boardrooms, reception areas.
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
              alt="AcouMAX flat-finish PET acoustic wall panel leaning against wall"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={boardroomInstall}
              alt="AcouMAX Plain Panel installed in modern boardroom ceiling and wall"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={panelDetail}
              alt="Close-up of AcouMAX Plain Panel flat acoustic surface"
              className="w-full h-32 sm:h-56 object-cover object-top col-span-2"
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
          AcouMAX Plain Panels can be wall-mounted on most standard surfaces,
          fixed to T-grid ceilings with compatible clips, or installed directly
          using adhesive or gun nails — the same flexible acoustic panel
          installation methods used across the AcouMAX range. No specialist
          tools are required, and panels can be cut on-site to fit irregular
          wall dimensions.
        </p>
      </section>

      {/* FAQ — background removed */}
      <section className="px-6 sm:px-10 lg:px-20 py-16 text-sky-950">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion>
          <AccordionItem
            title="What is an AcouMAX Plain Panel made of?"
            defaultOpen
          >
            AcouMAX Plain Panel is made from polyester fibre (PET), combining
            recycled and virgin PET fibre into a lightweight, fire-rated
            acoustic panel.
          </AccordionItem>
          <AccordionItem title="Is the Plain Panel suitable for both walls and ceilings?">
            Yes. The Plain Panel can be wall-mounted or ceiling-mounted using
            T-grid clips, adhesive, or gun nails, making it suitable for both
            wall and ceiling acoustic treatment.
          </AccordionItem>
          <AccordionItem title="Is AcouMAX Plain Panel eco-friendly?">
            Yes. The panel core combines recycled PET fibre with virgin PET
            fibre, and the material is non-toxic and safe for occupied interior
            spaces.
          </AccordionItem>
          <AccordionItem title="Where is the Plain Panel typically used?">
            It's commonly used in corporate and commercial offices — feature
            walls, boardrooms, executive meeting rooms, and open-plan work areas
            — as well as reception spaces that need a clean, minimalist acoustic
            finish.
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

export default PlainPanel;
