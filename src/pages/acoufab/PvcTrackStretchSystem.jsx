import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import { Accordion, AccordionItem } from "../../components/Accordion";

import panelImg1 from "../../assets/products/acou-fab/pvc-track-stretch-system/1.png";
import panelImg2 from "../../assets/products/acou-fab/pvc-track-stretch-system/2.png";
import panelImg3 from "../../assets/products/acou-fab/pvc-track-stretch-system/3.png";

function PvcTrackStretchSystem() {
  const steps = [
    {
      title: "Frame installation",
      description:
        "PVC tracks are mounted to the wall or ceiling in the desired layout.",
    },
    {
      title: "Infill placement",
      description:
        "Acoustic infill (sound-absorbing core) is fitted between the tracks.",
    },
    {
      title: "Fabric stretching",
      description:
        "Acoustic fabric is stretched and locked into the track's interlocking jaws.",
    },
    {
      title: "Finished surface",
      description:
        "The result is a smooth, seamless, joint-free acoustic wall or ceiling.",
    },
  ];

  const features = [
    {
      feature: "Class A – Non-flammable (ASTM E-84)",
      benefit: "Meets commercial fire safety codes",
    },
    {
      feature: "Lightweight construction",
      benefit: "Faster, easier installation",
    },
    { feature: "No formaldehyde", benefit: "Safe for indoor air quality" },
    {
      feature: "Recyclable materials",
      benefit: "Supports green building / LEED goals",
    },
    {
      feature: "Wide color availability",
      benefit: "Matches any interior design scheme",
    },
    {
      feature: "High-performance absorption",
      benefit: "Reduces noise, reverberation & echo",
    },
    {
      feature: "Cost-effective",
      benefit: "Lower cost than most acoustic wall systems",
    },
  ];

  const applications = [
    "Corporate offices and open-plan workspaces",
    "Auditoriums and conference halls",
    "Hospitality interiors (hotels, restaurants)",
    "Educational institutions",
    "Healthcare facilities",
    "Retail and commercial spaces",
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
          PVC Track Stretch System
          <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl text-sky-50/80">
            Fabric Wrapped Acoustic Panels
          </span>
        </h1>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 pt-16 pb-8 lg:pb-16 text-sky-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-start order-2 lg:order-1">
            <h2 className="font-lead text-xl sm:text-2xl mb-6">
              What is a PVC Track Stretch System?
            </h2>
            <p className="leading-relaxed text-slate-600 mb-6">
              A PVC Track Stretch System is a fabric-wrapped acoustic wall and
              ceiling solution where sound-absorbing infill is framed by
              interlocking PVC tracks, and acoustic fabric is stretched into the
              track's jaws for a seamless, joint-free finish. It is one of the
              most cost-effective acoustic treatments available for commercial
              interiors.
            </p>
            <p className="leading-relaxed text-slate-600">
              The PVC Track Stretch System consists of a set of tracks that act
              as a supporting framework. Acoustic infill is placed within this
              framework, and acoustical fabric is stretched into the
              interlocking jaws of the track — giving the entire system a clean,
              seamless finish. It's one of the most cost-effective acoustic
              absorbing solutions available for offices, auditoriums, and
              commercial interiors.
            </p>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <img
              src={panelImg1}
              alt="PVC Track Stretch System acoustic panel installation"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={panelImg2}
              alt="PVC Track Stretch System fabric-wrapped panel close-up"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <img
              src={panelImg3}
              alt="PVC Track Stretch System interlocking track detail"
              className="w-full h-32 sm:h-56 object-cover col-span-2"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary-light px-6 sm:px-10 lg:px-20 py-16 text-primary-dark">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          How Does the PVC Track Stretch System Work?
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
          Where Is the PVC Track Stretch System Used?
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
            title="What is the PVC Track Stretch System made of?"
            defaultOpen
          >
            It's made of a PVC track framework, an acoustic infill core, and a
            stretch-fit acoustical fabric surface.
          </AccordionItem>
          <AccordionItem title="Is the PVC Track Stretch System fire safe?">
            Yes, it is Class A – Non-Flammable, tested to ASTM E-84 standards,
            making it compliant for use in commercial and public buildings.
          </AccordionItem>
          <AccordionItem title="How much does a PVC Track acoustic system cost compared to other acoustic panels?">
            It is one of the most cost-effective fabric-wrapped acoustic systems
            available, generally more affordable than 3D wrapped or
            fiberglass-framed alternatives due to its simple track-and-stretch
            installation method.
          </AccordionItem>
          <AccordionItem title="Can the PVC Track System be installed on ceilings as well as walls?">
            Yes, the track framework can be mounted on both wall and ceiling
            surfaces for full-room acoustic treatment.
          </AccordionItem>
          <AccordionItem title="Is this system eco-friendly?">
            Yes. It contains no formaldehyde and uses recyclable materials,
            making it suitable for sustainable and LEED-focused building
            projects.
          </AccordionItem>
          <AccordionItem title="How long does installation take?">
            Because the track-and-jaw method eliminates adhesives and heavy
            mounting hardware, installation is faster than most acoustic wall
            systems. Timelines vary by project size — contact our team for a
            specific estimate.
          </AccordionItem>
        </Accordion>
      </section>

      <section className="bg-primary-light px-6 sm:px-10 lg:px-20 py-16 text-primary-dark text-center">
        <h2 className="font-lead text-2xl sm:text-3xl mb-4 max-w-2xl mx-auto">
          Get a Quote for Your PVC Track Stretch System
        </h2>
        <p className="max-w-2xl mx-auto leading-relaxed text-slate-600 mb-8">
          Looking for a cost-effective, fire-rated acoustic solution with a
          seamless finish? Talk to our acoustic specialists to specify the right
          size, color, and fabric for your project.
        </p>
        <a href="#" className="inline-block bg-primary text-sky-50 px-6 py-4">
          Contact Us &rarr;
        </a>
      </section>

      <Footer />
    </>
  );
}

export default PvcTrackStretchSystem;
