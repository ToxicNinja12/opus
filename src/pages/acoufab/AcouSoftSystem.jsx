import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import { Accordion, AccordionItem } from "../../components/Accordion";

import panelImg1 from "../../assets/products/acou-fab/acousoft-system/1.png";
import panelImg2 from "../../assets/products/acou-fab/acousoft-system/2.png";
import panelImg3 from "../../assets/products/acou-fab/acousoft-system/3.png";

function AcouSoftSystem() {
  const steps = [
    {
      title: "Core construction",
      description:
        "A high-density fiberglass wool panel forms the acoustic absorbing core.",
    },
    {
      title: "Frame mounting",
      description:
        "The core is fitted onto a durable metal frame for structural support.",
    },
    {
      title: "Fabric wrapping",
      description:
        "Acoustic fabric is stretched and wrapped tightly over the frame and core.",
    },
    {
      title: "Finished installation",
      description:
        "The panel is mounted to the wall, delivering a smooth, upholstered acoustic surface.",
    },
  ];

  const features = [
    {
      feature: "High-density fiberglass wool core",
      benefit: "Strong, reliable sound absorption",
    },
    {
      feature: "Durable metal frame",
      benefit: "Long-term structural stability",
    },
    {
      feature: "Fabric-wrapped surface",
      benefit: "Soft, refined, upholstered look",
    },
    {
      feature: "Elastic stretch-fit fabric",
      benefit: "Smooth, tensioned, joint-free finish",
    },
    {
      feature: "Wide fabric color range",
      benefit: "Matches any interior design scheme",
    },
  ];

  const applications = [
    "Corporate offices and boardrooms",
    "Conference and meeting rooms",
    "Reception and lobby areas",
    "Hospitality interiors",
    "Educational and healthcare facilities",
    "Feature walls and acoustic zoning areas",
  ];

  return (
    <>
      <div className="bg-secondary text-sky-50 px-6 sm:px-10 lg:px-20 py-8 flex items-center justify-between">
        <Link to="/">
          <Logo className="mb-1" />
        </Link>
        <Navbar className="md:basis-xl" flexMode />
      </div>

      <section className="bg-secondary text-sky-50 px-6 sm:px-10 lg:px-20 pt-8 pb-16 lg:pb-24">
        <p className="text-sm text-sky-50/60 mb-6">
          <Link
            to="/products/architectural-acoustic/acoufab"
            className="hover:text-sky-50 transition-colors"
          >
            &larr; AcouFAB
          </Link>
        </p>
        <h1 className="font-lead text-3xl sm:text-4xl lg:text-5xl max-w-3xl">
          AcouSoft System
          <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl text-sky-50/80">
            Fabric Wrapped Acoustic Panels
          </span>
        </h1>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 pt-16 pb-8 lg:pb-16 text-sky-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-start order-2 lg:order-1">
            <h2 className="font-lead text-xl sm:text-2xl mb-6">
              What is the AcouSoft System?
            </h2>
            <p className="leading-relaxed text-slate-600 mb-6">
              The AcouSoft System is an elastic fabric acoustic panel built from
              a high-density fiberglass wool core, mounted on a durable metal
              frame, and finished with a stretch-wrapped acoustic fabric
              surface. It combines structural stability with a soft, upholstered
              appearance and strong sound absorption performance.
            </p>
            <p className="leading-relaxed text-slate-600">
              The AcouSoft System is an elastic fabric acoustic system
              consisting of a high-density fiberglass wool acoustic panel,
              mounted on a metal frame and wrapped with acoustic fabric on the
              surface — combining structural stability with a soft, refined
              finish suited to a wide range of commercial interiors.
            </p>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <img
              src={panelImg1}
              alt="AcouSoft fabric-wrapped acoustic panel on metal frame"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={panelImg2}
              alt="AcouSoft acoustic panel installed on office wall"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={panelImg3}
              alt="Close-up of AcouSoft upholstered fabric acoustic surface"
              className="w-full h-32 sm:h-56 object-cover col-span-2"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary-light px-6 sm:px-10 lg:px-20 py-16 text-primary-dark">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          How Does the AcouSoft System Work?
        </h2>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          {steps.map((step, i) => (
            <li key={step.title}>
              <p className="mb-3 text-slate-300">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mb-1 font-semibold">{step.title}</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 py-16 text-sky-950">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          Key Features & Benefits
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="py-3 pr-6 font-semibold">Feature</th>
                <th className="py-3 font-semibold">Benefit</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row) => (
                <tr key={row.feature} className="border-b border-slate-200">
                  <td className="py-3 pr-6 text-sm text-slate-600">
                    {row.feature}
                  </td>
                  <td className="py-3 text-sm text-slate-600">{row.benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-primary-light px-6 sm:px-10 lg:px-20 py-16 text-primary-dark">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          Where Is the AcouSoft System Used?
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
          {applications.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-slate-600">
              <span className="text-primary shrink-0">●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 py-16 text-sky-950">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion>
          <AccordionItem
            title="What is the core material of the AcouSoft System?"
            defaultOpen
          >
            It uses a high-density fiberglass wool acoustic panel as its core,
            mounted on a metal frame for structural support.
          </AccordionItem>
          <AccordionItem title='What does "elastic fabric" mean in this system?'>
            The system's surface uses a stretch-fit acoustic fabric wrapped
            tightly over the frame, giving it a smooth, tailored, upholstered
            appearance.
          </AccordionItem>
          <AccordionItem title="Where is the AcouSoft System best used?">
            It works well on walls and feature areas in offices, conference
            rooms, and commercial interiors needing strong sound absorption with
            a soft aesthetic.
          </AccordionItem>
          <AccordionItem title="Is the metal frame durable for long-term use?">
            Yes. The metal frame construction provides structural stability,
            making the system suitable for long-term commercial installations.
          </AccordionItem>
          <AccordionItem title="How does AcouSoft compare to the PVC Track Stretch System?">
            AcouSoft uses a fiberglass wool core with a metal frame for a soft,
            upholstered finish, while the PVC Track System uses a track-and-jaw
            mechanism for a seamless stretched finish. Both deliver strong
            acoustic performance with different aesthetics and installation
            methods.
          </AccordionItem>
          <AccordionItem title="Can AcouSoft panels be customized in fabric color?">
            Yes. A wide range of acoustic fabric colors and textures is
            available to match brand palettes or interior themes.
          </AccordionItem>
        </Accordion>
      </section>

      <section className="bg-primary-light px-6 sm:px-10 lg:px-20 py-16 text-primary-dark text-center">
        <h2 className="font-lead text-2xl sm:text-3xl mb-4 max-w-2xl mx-auto">
          Experience Superior Sound Absorption with AcouSoft
        </h2>
        <p className="max-w-2xl mx-auto leading-relaxed text-slate-600 mb-8">
          Combine structural durability with a refined, soft finish. Reach out
          to our team to specify the right AcouSoft configuration for your
          space.
        </p>
        <a href="#" className="inline-block bg-primary text-sky-50 px-6 py-4">
          Contact Us
        </a>
      </section>

      <Footer />
    </>
  );
}

export default AcouSoftSystem;
