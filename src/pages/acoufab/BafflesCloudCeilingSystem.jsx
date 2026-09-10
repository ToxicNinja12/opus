import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import { Accordion, AccordionItem } from "../../components/Accordion";

import panelImg1 from "../../assets/products/acou-fab/cloud-ceiling-system/1.png";
import panelImg2 from "../../assets/products/acou-fab/cloud-ceiling-system/2.png";
import panelImg3 from "../../assets/products/acou-fab/cloud-ceiling-system/3.png";

function BafflesCloudCeilingSystem() {
  const steps = [
    {
      title: "Ceiling assessment",
      description:
        "The space's height, layout, and reverberation levels are evaluated.",
    },
    {
      title: "Panel selection",
      description:
        "Baffles (vertical) or cloud panels (horizontal) are chosen based on the ceiling type and noise source.",
    },
    {
      title: "Suspension mounting",
      description:
        "Fabric-wrapped acoustic panels are hung from the ceiling structure using a suspension system.",
    },
    {
      title: "Sound absorption",
      description:
        "Exposed panel surfaces absorb sound from above and around, reducing echo and reverberation.",
    },
  ];

  const features = [
    {
      feature: "Suspended fabric-wrapped panels",
      benefit: "Absorbs sound from open, high-ceiling areas",
    },
    {
      feature: "Doesn't block light or airflow",
      benefit: "Preserves natural light and HVAC function",
    },
    {
      feature: "Vertical (baffle) or horizontal (cloud) layouts",
      benefit: "Flexible for different ceiling types",
    },
    {
      feature: "Configurable shapes & patterns",
      benefit: "Adds visual interest overhead",
    },
    {
      feature: "Reduces reverberation",
      benefit: "Improves speech clarity in open spaces",
    },
  ];

  const applications = [
    "Open-plan offices",
    "Cafes and restaurants",
    "Public spaces and atriums",
    "Auditoriums and conference halls",
    "Retail spaces with high ceilings",
    "Co-working spaces",
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
          Decorative Baffles & Cloud Ceiling System
          <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl text-sky-50/80">
            Fabric Acoustic Ceilings
          </span>
        </h1>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 pt-16 pb-8 lg:pb-16 text-sky-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-start order-2 lg:order-1">
            <h2 className="font-lead text-xl sm:text-2xl mb-6">
              What is an Acoustic Baffle / Cloud Ceiling System?
            </h2>
            <p className="leading-relaxed text-slate-600 mb-6">
              An acoustic baffle or cloud ceiling system is a suspended,
              fabric-wrapped panel solution that hangs from the ceiling to
              absorb sound and reduce reverberation in large, high-ceiling
              spaces. Baffles hang vertically for open-plan noise control, while
              cloud panels are suspended horizontally to treat sound from above
              without blocking light or airflow.
            </p>
            <p className="leading-relaxed text-slate-600">
              AcouFAB Baffles help reduce noise in large spaces with high
              ceilings. Fabric-wrapped and acoustically engineered, they don't
              just optimize how a space sounds — they elevate how it looks. For
              better-sounding, better-looking spaces, trust Opus Acoustics
              materials on your next project.
            </p>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <img
              src={panelImg1}
              alt="Suspended acoustic baffles in open-plan office"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={panelImg2}
              alt="Acoustic cloud ceiling panels suspended above workspace"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={panelImg3}
              alt="Close-up of fabric-wrapped acoustic baffle panel"
              className="w-full h-32 sm:h-56 object-cover col-span-2"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary-light px-6 sm:px-10 lg:px-20 py-16 text-primary-dark">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          How Do Acoustic Baffles & Cloud Ceilings Work?
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
          Where Are Baffles & Cloud Ceilings Used?
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
            title="How do baffles and cloud ceilings reduce noise?"
            defaultOpen
          >
            Suspended fabric-wrapped panels absorb sound from above, reducing
            reverberation in large, open spaces with high ceilings.
          </AccordionItem>
          <AccordionItem title="What's the difference between baffles and cloud ceilings?">
            Baffles hang vertically and are typically used in rows for open-plan
            noise control, while cloud ceilings are suspended horizontally in
            clusters, treating sound from directly above.
          </AccordionItem>
          <AccordionItem title="Will baffles or cloud panels block natural light or airflow?">
            No. Both systems are designed to reduce reverberation without
            obstructing natural light or airflow, making them suitable for
            open-plan spaces with windows or HVAC systems.
          </AccordionItem>
          <AccordionItem title="What shapes and layouts are available?">
            Baffles and cloud ceiling elements can be configured in various
            shapes, sizes, and hanging patterns to suit both acoustic needs and
            design intent.
          </AccordionItem>
          <AccordionItem title="Are they suitable for public spaces like cafes?">
            Yes. They're commonly used in offices, cafes, and public spaces
            where high ceilings contribute to excess noise and echo.
          </AccordionItem>
          <AccordionItem title="How are baffles and cloud ceilings installed?">
            They are suspended from the ceiling structure using a mounting
            system suited to the space's height and layout. Contact our team for
            installation guidance specific to your project.
          </AccordionItem>
        </Accordion>
      </section>

      <section className="bg-primary-light px-6 sm:px-10 lg:px-20 py-16 text-primary-dark text-center">
        <h2 className="font-lead text-2xl sm:text-3xl mb-4 max-w-2xl mx-auto">
          Control Noise Without Compromising on Design
        </h2>
        <p className="max-w-2xl mx-auto leading-relaxed text-slate-600 mb-8">
          Whether it's an open office or a high-ceiling public space, AcouFAB
          Baffles and Cloud Ceilings deliver acoustic comfort with visual
          impact. Get in touch to plan your layout.
        </p>
        <a href="#" className="inline-block bg-primary text-sky-50 px-6 py-4">
          Contact Us &rarr;
        </a>
      </section>

      <Footer />
    </>
  );
}

export default BafflesCloudCeilingSystem;
