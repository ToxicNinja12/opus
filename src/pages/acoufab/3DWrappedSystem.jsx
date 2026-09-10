import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import { Accordion, AccordionItem } from "../../components/Accordion";

import panelImg1 from "../../assets/products/acou-fab/3d-wrapped-system/1.png";
import panelImg2 from "../../assets/products/acou-fab/3d-wrapped-system/2.png";
import panelImg3 from "../../assets/products/acou-fab/3d-wrapped-system/3.png";

function ThreeDWrappedSystem() {
  const steps = [
    {
      title: "Core fabrication",
      description:
        "An acoustic core is shaped into a dimensional, sculptural profile.",
    },
    {
      title: "Fabric wrapping",
      description:
        "The shaped core is wrapped in acoustic fabric to preserve sound-absorbing performance.",
    },
    {
      title: "Custom sizing",
      description:
        "Panels are produced in specific sizes and patterns to match the design brief.",
    },
    {
      title: "Wall installation",
      description:
        "Panels are mounted individually or in a modular layout to create a textured, dimensional wall surface.",
    },
  ];

  const features = [
    {
      feature: "Custom shapes & sizes",
      benefit: "Tailored to any design concept",
    },
    {
      feature: "Same core as standard AcouFAB panels",
      benefit: "No compromise on acoustic performance",
    },
    {
      feature: "Sculptural, dimensional surface",
      benefit: "Adds architectural texture and visual depth",
    },
    {
      feature: "Fabric-wrapped finish",
      benefit: "Wide color and texture choices",
    },
    {
      feature: "Versatile installation",
      benefit: "Works on feature walls, full rooms, or accent zones",
    },
  ];

  const applications = [
    "Recording studios and music rooms",
    "Home theaters and media rooms",
    "Corporate offices and reception areas",
    "Conference and meeting rooms",
    "Study rooms and libraries",
    "Hospitality and retail feature walls",
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
          3D Wrapped System
          <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl text-sky-50/80">
            Sculptural Fabric Acoustic Panels
          </span>
        </h1>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 pt-16 pb-8 lg:pb-16 text-sky-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-start order-2 lg:order-1">
            <h2 className="font-lead text-xl sm:text-2xl mb-6">
              What is a 3D Wrapped Acoustic Panel System?
            </h2>
            <p className="leading-relaxed text-slate-600 mb-6">
              A 3D Wrapped Acoustic Panel System is a sculptural, fabric-wrapped
              acoustic panel that adds dimensional texture to walls while
              absorbing sound. The panels are available in custom shapes and
              sizes, offering the same acoustic performance as flat acoustic
              panels with a more decorative, three-dimensional finish.
            </p>
            <p className="leading-relaxed text-slate-600">
              Choose from a range of 3D acoustically coated panels that deliver
              a decorative, sculptural look while ensuring effective ambient
              acoustics. The core material used in 3D wrapped panels shares the
              same acoustic performance values as our other AcouFAB panel
              systems, making design and sound absorption work together rather
              than compete.
            </p>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <img
              src={panelImg1}
              alt="3D Wrapped acoustic panel with sculptural relief pattern"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={panelImg2}
              alt="3D Wrapped acoustic panel installed on feature wall"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={panelImg3}
              alt="Close-up of 3D Wrapped acoustic panel dimensional texture"
              className="w-full h-32 sm:h-56 object-cover col-span-2"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary-light px-6 sm:px-10 lg:px-20 py-16 text-primary-dark">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          How Do 3D Wrapped Acoustic Panels Work?
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
          Where Are 3D Wrapped Panels Used?
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
            title="What makes 3D wrapped panels different from flat acoustic panels?"
            defaultOpen
          >
            3D wrapped panels have a sculptural, dimensional surface that adds
            architectural texture and visual interest, while delivering the same
            acoustic absorption performance as flat panels.
          </AccordionItem>
          <AccordionItem title="Can 3D acoustic panels be custom shaped or sized?">
            Yes. They can be produced in special sizes and shapes to match
            specific design concepts, room dimensions, and creative layouts.
          </AccordionItem>
          <AccordionItem title="Are 3D wrapped panels good for recording studios?">
            Yes. Their dimensional surface helps manage sound diffusion and
            absorption, making them well suited for music rooms, studios, and
            audio recording spaces.
          </AccordionItem>
          <AccordionItem title="Does the 3D shape reduce acoustic performance?">
            No. The core material used in 3D wrapped panels has the same
            acoustic performance values as other AcouFAB panel systems — the
            shape adds design value without sacrificing sound absorption.
          </AccordionItem>
          <AccordionItem title="What spaces benefit most from 3D wrapped panels?">
            Offices, conference rooms, study rooms, recording studios, and any
            interior where a bold design statement is wanted alongside acoustic
            control.
          </AccordionItem>
          <AccordionItem title="How are 3D wrapped panels installed?">
            Panels are mounted individually or in a modular pattern directly
            onto the wall surface. Installation method varies by panel size and
            project — contact our team for specifics.
          </AccordionItem>
        </Accordion>
      </section>

      <section className="bg-primary-light px-6 sm:px-10 lg:px-20 py-16 text-primary-dark text-center">
        <h2 className="font-lead text-2xl sm:text-3xl mb-4 max-w-2xl mx-auto">
          Bring Your Design Vision to Life with AcouFAB
        </h2>
        <p className="max-w-2xl mx-auto leading-relaxed text-slate-600 mb-8">
          Combine striking sculptural design with real acoustic performance.
          Talk to our team about custom shapes, sizes, and finishes for your
          next project.
        </p>
        <a href="#" className="inline-block bg-primary text-sky-50 px-6 py-4">
          Contact Us &rarr;
        </a>
      </section>

      <Footer />
    </>
  );
}

export default ThreeDWrappedSystem;
