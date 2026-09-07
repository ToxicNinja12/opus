import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import { Accordion, AccordionItem } from "../../components/Accordion";

import panelLeaning from "../../assets/products/acou-max/printed-design-panel/1.png";
import boardroomInstall from "../../assets/products/acou-max/printed-design-panel/2.png";
import panelDetail from "../../assets/products/acou-max/printed-design-panel/3.png";

function PrintedDesignPanel() {
  const features = [
    "Full-colour inkjet printing directly onto the acoustic PET panel surface",
    "No fixed repeat size — logos, photography, and graphics can all be printed",
    "Unlimited colour choice and count, since printing is inkjet-based rather than limited palette",
    "Usable as individual printed panels or combined into multi-panel displays",
    "Same sound-absorbing PET core as the rest of the AcouMAX range — no acoustic performance trade-off",
  ];

  const applications = [
    "Branded reception walls and corporate lobby feature installations",
    "Custom signage combining acoustic treatment with visual identity",
    "Hospitality and retail interiors using large-format imagery or photography",
    "Multi-panel displays for corridors, lobbies, or event spaces",
  ];

  const artworkSpecs = [
    "Print process: Inkjet, using specialized graphics programs",
    "Source artwork: Logos, photographic imagery, and graphics — anything that can be scanned and digitized",
    "Custom sample size: 1200×600mm, available at cost",
    "Minimum image resolution: 600px wide at 300 DPI — images smaller than this may print pixelated or blurry",
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
          AcouMAX Printed Design Panel
          <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl text-sky-50/80">
            Custom-Printed PET Acoustic Panels
          </span>
        </h1>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 pt-16 pb-8 lg:pb-16 text-sky-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-start order-2 lg:order-1">
            <h2 className="font-lead text-xl sm:text-2xl mb-6">
              AcouMAX Printed Design Panel
            </h2>
            <p className="text-primary font-lead mb-4">
              Branding and artwork, engineered to also absorb sound
            </p>
            <p className="leading-relaxed text-slate-600 mb-4">
              AcouMAX Printed Design Panels turn acoustic treatment into a
              canvas. The panel surface is an ideal base for the latest inkjet
              printing technology and specialized graphics programs, making it
              well suited to signage and full-colour imagery. Panels can be used
              individually or combined into multi-panel displays, with no fixed
              repeat size required — logos, photography, and graphics can all be
              printed, as long as the source artwork can be scanned and
              digitized.
            </p>
            <p className="leading-relaxed text-slate-600 mb-6">
              Because it's an inkjet process, colour choice and count are
              unlimited, and there's no trade-off between look and acoustic
              performance: the print sits on the same sound-absorbing PET base
              as the rest of the AcouMAX range.
            </p>
            <p className="text-slate-500 mb-8 sm:mb-10 lg:mb-12">
              <span className="font-semibold text-sky-950">Best for:</span>{" "}
              Corporate reception areas, executive lobby feature walls, branded
              corporate environments, hospitality and retail interiors.[cite:
              10]
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
              alt="AcouMAX Printed Design Panel with custom artwork behind reception desk"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={boardroomInstall}
              alt="Custom printed acoustic panels forming multi-panel wall display"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={panelDetail}
              alt="Close-up detail of inkjet printing on AcouMAX panel"
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
              Printed Design Panels install using the same flexible methods as
              other AcouMAX formats — wall-mounted individually or arranged into
              a multi-panel layout. Custom print samples are available at cost
              in 1200×600mm, allowing colours and image quality to be reviewed
              before a full production run.
            </p>
          </div>
          <div>
            <h2 className="font-lead text-xl sm:text-2xl mb-6">
              Artwork & Print Specifications
            </h2>
            <ul className="flex flex-col gap-3">
              {artworkSpecs.map((item) => (
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
            title="What kind of artwork can be printed on AcouMAX Printed Design Panels?"
            defaultOpen
          >
            Anything that can be scanned and digitized — including logos,
            photographic imagery, and graphics — can be printed using the inkjet
            process.
          </AccordionItem>
          <AccordionItem title="Is there a minimum image resolution for printing?">
            Yes. Source images should be at least 600px wide at 300 DPI. Images
            smaller than this may print with pixelization or appear blurry.
          </AccordionItem>
          <AccordionItem title="Are there limits on colour choice for printed panels?">
            No. Because printing uses an inkjet process, colour choice and
            number are unlimited.
          </AccordionItem>
          <AccordionItem title="Can I get a sample before ordering a full print run?">
            Yes. Custom print samples are available at cost in a 1200×600mm
            size, allowing colours and image quality to be checked before full
            production.
          </AccordionItem>
          <AccordionItem title="Does printing affect the acoustic performance of the panel?">
            No. The print is applied to the same sound-absorbing PET panel base
            used across the AcouMAX range, so acoustic performance is
            unaffected.
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

export default PrintedDesignPanel;
