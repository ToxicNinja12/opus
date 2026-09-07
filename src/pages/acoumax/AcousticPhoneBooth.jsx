import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import { Accordion, AccordionItem } from "../../components/Accordion";

import panelLeaning from "../../assets/products/acou-max/acoustic-phone-booth/1.png";
import boardroomInstall from "../../assets/products/acou-max/acoustic-phone-booth/2.png";
import panelDetail from "../../assets/products/acou-max/acoustic-phone-booth/3.png";

function AcousticPhoneBooth() {
  const features = [
    "Compact, self-contained footprint — doesn't require a dedicated room",
    "Built using AcouMAX acoustic panels internally to reduce noise and echo",
    "Sound-insulated enclosure suited to private calls and focused, heads-down work",
    "Suitable for open-plan offices without disrupting existing floor layouts",
    "Can be deployed as a single unit or in multiples for higher-demand areas",
  ];

  const applications = [
    "Open-plan corporate offices needing private call space without a meeting room booking",
    "Coworking spaces offering on-demand focus or privacy pods to members",
    "Commercial interiors where floor space doesn't allow for additional enclosed rooms",
    "Reception or lobby areas needing a discreet space for confidential conversations",
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
          AcouMAX Acoustic Phone Booth
          <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl text-sky-50/80">
            Sound-Insulated Office Pod
          </span>
        </h1>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 pt-16 pb-8 lg:pb-16 text-sky-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-start order-2 lg:order-1">
            <h2 className="font-lead text-xl sm:text-2xl mb-6">
              AcouMAX Acoustic Phone Booth
            </h2>
            <p className="text-primary font-lead mb-4">
              An enclosed pod for private calls and focused work
            </p>
            <p className="leading-relaxed text-slate-600 mb-6">
              The AcouMAX Acoustic Phone Booth is a compact, sound-insulated
              enclosure built using AcouMAX panels internally, designed to
              reduce external noise and echo for the person inside. It gives
              open offices and commercial spaces a self-contained option for
              private calls or heads-down work without needing a dedicated
              meeting room.
            </p>
            <p className="text-slate-500 mb-8 sm:mb-10 lg:mb-12">
              <span className="font-semibold text-sky-950">Best for:</span>{" "}
              Open-plan corporate offices, coworking spaces, and commercial
              interiors needing on-demand private space.
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
              alt="AcouMAX Acoustic Phone Booth in open office corner"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={boardroomInstall}
              alt="Row of AcouMAX Acoustic Phone Booths in commercial office"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={panelDetail}
              alt="Close-up detail of AcouMAX Acoustic Phone Booth"
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
          The Acoustic Phone Booth is a self-contained, freestanding unit that
          can be positioned within an existing office layout without structural
          changes to the building. Multiple booths can be placed together, as
          shown in shared office settings, to meet higher demand for private
          space.
        </p>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 py-16 text-sky-950">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion>
          <AccordionItem
            title="What is an AcouMAX Acoustic Phone Booth used for?"
            defaultOpen
          >
            It's used for private calls and focused work in open offices, giving
            employees an enclosed, sound-insulated space without needing a
            dedicated meeting room.
          </AccordionItem>
          <AccordionItem title="Does the phone booth require structural changes to install?">
            No. It's a self-contained, freestanding unit that can be positioned
            within an existing office layout without structural changes.
          </AccordionItem>
          <AccordionItem title="Can multiple phone booths be installed together?">
            Yes. Multiple booths can be placed together in shared office
            settings to meet higher demand for private space.
          </AccordionItem>
          <AccordionItem title="What makes the booth sound-insulated?">
            The booth is built using AcouMAX acoustic panels internally, which
            reduce external noise and echo for the person inside.
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

export default AcousticPhoneBooth;
