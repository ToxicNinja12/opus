import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import Card from "../components/Card";
import ProductCharacteristics from "../sections/products/ProductCharacteristics";
import ColorOptions from "../components/ColorOptions";

// TODO: confirm exact filenames/extensions — truncated in file explorer screenshot
import plainPanel from "../assets/products/acou-max/Plain Panel 2.jpeg";
import groovedDesign from "../assets/products/acou-max/Grooved Design Panel.png";
import acoustic3D from "../assets/products/acou-max/Acoustic 3d panel.png";
import bafflesCeiling from "../assets/products/acou-max/Baffles Ceiling.png";
import cloudCeiling from "../assets/products/acou-max/Cloud Ceiling.png";
import screenPartition from "../assets/products/acou-max/screen partition.png";
import deskPartition from "../assets/products/acou-max/Desk Partition.png";
import printedDesign from "../assets/products/acou-max/Printed Design Panel.png";
import modularWallSystem from "../assets/products/acou-max/Modular Wall Acoustic System.jpeg";
import phoneBooth from "../assets/products/acou-max/Acoustic Phone Booth.png";

const variants = [
  {
    slug: "plain-panel",
    name: "Plain Panel",
    description:
      "Clean, flat-finish acoustic panel offering a minimalist look while delivering effective sound absorption for walls and ceilings.",
    image: plainPanel,
  },
  {
    slug: "grooved-design-panel",
    name: "Grooved Design Panel",
    description:
      "Linear grooved surface pattern that adds architectural texture while maintaining acoustic performance — ideal for feature walls.",
    image: groovedDesign,
  },
  {
    slug: "acoustic-3d-panels",
    name: "Acoustic 3D Panels",
    description:
      "Sculptural, dimensional panel designs that combine visual impact with sound absorption for statement interiors.",
    image: acoustic3D,
  },
  {
    slug: "baffles-ceiling",
    name: "Baffles Ceiling",
    description:
      "Vertically hung acoustic baffles that reduce reverberation in open-plan and high-ceiling spaces without blocking natural light or airflow.",
    image: bafflesCeiling,
  },
  {
    slug: "cloud-ceiling",
    name: "Cloud Ceiling",
    description:
      "Suspended acoustic ceiling elements that absorb sound from above — ideal for open offices, cafes, and public spaces.",
    image: cloudCeiling,
  },
  {
    slug: "screen-partition",
    name: "Screen Partition",
    description:
      "Freestanding acoustic screens that divide space and reduce noise transfer between zones, ideal for open-plan offices.",
    image: screenPartition,
  },
  {
    slug: "desk-partition",
    name: "Desk Partition",
    description:
      "Compact acoustic dividers designed for individual workstations, improving focus and speech privacy at the desk level.",
    image: deskPartition,
  },
  {
    slug: "printed-design-panel",
    name: "Printed Design Panel",
    description:
      "Custom-printed acoustic panels that combine branding or artwork with sound absorption — ideal for reception areas and feature walls.",
    image: printedDesign,
  },
  {
    slug: "modular-wall-acoustic-system",
    name: "Modular Wall Acoustic System",
    description:
      "Interlocking acoustic panel system for large-scale wall coverage, allowing flexible layouts and consistent acoustic performance.",
    image: modularWallSystem,
  },
  {
    slug: "acoustic-phone-booth",
    name: "Acoustic Phone Booth",
    description:
      "Enclosed acoustic pod for private calls and focused work, built using AcouMAX panels for effective sound isolation.",
    image: phoneBooth,
  },
];

function AcouMax() {
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
            to="/products/architectural-acoustic"
            className="hover:text-sky-50 transition-colors"
          >
            &larr; Architectural Acoustics
          </Link>{" "}
        </p>
        <h1 className="font-lead text-3xl sm:text-4xl lg:text-5xl mb-6 max-w-2xl">
          AcouMAX &mdash; PET
        </h1>
        <p className="max-w-2xl leading-relaxed text-sky-50/80">
          AcouMAX polyester fiber acoustic panels are lightweight,
          sound-absorbing panels made from 100% polyester fiber and contain a
          maximum of 75% post-consumer recycled material (PET bottle flakes),
          reducing internal and external sound influences. Safe, eco-friendly,
          and available in multiple densities and thicknesses, they are ideal
          for flexible and creative interior acoustic solutions.
        </p>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 text-sky-950">
        <ColorOptions />
        <ProductCharacteristics />

        <div>
          <h2 className="font-lead text-lg sm:text-xl uppercase tracking-wide mb-8">
            Available in 10 Formats
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-6">
            {variants.map((variant) => (
              <Link
                key={variant.slug}
                to={`/products/architectural-acoustic/acoumax/${variant.slug}`}
                className="block h-full"
              >
                <Card
                  image={variant.image}
                  title={variant.name}
                  subtitle={variant.description}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="inline-block text-center bg-primary text-sky-50 px-6 py-4"
          >
            Request a Quote &rarr;
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AcouMax;
