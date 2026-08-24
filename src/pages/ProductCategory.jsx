import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import Card from "../components/Card";

// Existing assets
import acouMax from "../assets/products/acou-max.jpg";
import acouFab from "../assets/products/acou-fab.png";
import acouWood from "../assets/products/acou-wood.avif";
import acouSlats from "../assets/products/wooden-Slatted-Panel.webp";
import polyurethaneFoam from "../assets/featured/diffuser-foam.jpg";
import acouWool from "../assets/products/acouwool.jpeg";
import acousticSpray from "../assets/products/acoustic-spray.png";
import acousticGlassPartition from "../assets/products/acoustic-glass-partition.jpg";

// TODO: these assets don't exist yet — add files or update paths
import acouBamboo from "../assets/products/acou-bamboo.jpg";
import acousticCeilingTile from "../assets/featured/mesh-ceiling.jpg";
import movableOperablePartition from "../assets/products/acoustic-glass-partition.jpg";
import soundproofingWallCeiling from "../assets/products/acoustic-glass-partition.jpg";
import acousticDoors from "../assets/products/acoustic-glass-partition.jpg";
import acouMetal from "../assets/featured/diffuser-foam.jpg";
import diffusers from "../assets/featured/diffuser-foam.jpg";
import padding from "../assets/products/acoustic-glass-partition.jpg";
import acousticFlooring from "../assets/products/acoustic-glass-partition.jpg";
import acousticPlaster from "../assets/products/acoustic-glass-partition.jpg";

const products = [
  {
    name: "AcouMAX",
    description: "Polyester fibre acoustic panel for walls and ceilings.",
    image: acouMax,
  },
  {
    name: "AcouFAB",
    description:
      "Stretch fabric acoustic panel for a seamless, tailored finish.",
    image: acouFab,
  },
  {
    name: "AcouWOOD",
    description:
      "Acoustic wooden perforated panel combining natural aesthetics with sound absorption.",
    image: acouWood,
  },
  {
    name: "AcouSLATS",
    description:
      "Wooden slatted acoustic panel for warm, architectural interiors.",
    image: acouSlats,
  },
  {
    name: "AcouBAMBOO",
    description:
      "Sustainable bamboo acoustic panel for eco-conscious interiors.",
    image: acouBamboo,
  },
  {
    name: "Polyurethane Foam",
    description: "High-density acoustic foam for targeted sound absorption.",
    image: polyurethaneFoam,
  },
  {
    name: "AcouWOOL",
    description:
      "Acoustic wood wool panel for high-performance sound absorption.",
    image: acouWool,
  },
  {
    name: "Acoustic Spray",
    description:
      "Cellulose acoustic spray finish for curved or irregular surfaces.",
    image: acousticSpray,
  },
  {
    name: "Acoustic Ceiling Tile",
    description: "Modular ceiling tile system engineered for sound absorption.",
    image: acousticCeilingTile,
  },
  {
    name: "Movable Operable Partition",
    description:
      "Retractable acoustic partition for flexible, sound-isolated space division.",
    image: movableOperablePartition,
  },
  {
    name: "Soundproofing Wall & Ceiling",
    description:
      "Layered wall and ceiling systems built to reduce sound transmission.",
    image: soundproofingWallCeiling,
  },
  {
    name: "Acoustic Doors",
    description:
      "Rated acoustic doors for sound-isolated rooms and enclosures.",
    image: acousticDoors,
  },
  {
    name: "AcouMETAL",
    description:
      "Perforated metal acoustic panel combining durability and performance.",
    image: acouMetal,
  },
  {
    name: "Acoustic Glass Partition",
    description:
      "Soundproof glass partition for open-plan offices and meeting spaces.",
    image: acousticGlassPartition,
  },
  {
    name: "Diffusers",
    description:
      "Acoustic diffusers for even sound distribution and reduced echo.",
    image: diffusers,
  },
  {
    name: "Padding",
    description:
      "Acoustic padding for underlayment and impact noise reduction.",
    image: padding,
  },
  {
    name: "Acoustic Flooring",
    description:
      "Sound-dampening flooring systems for impact and airborne noise control.",
    image: acousticFlooring,
  },
  {
    name: "Acoustic Plaster",
    description:
      "Seamless acoustic plaster finish combining absorption with a smooth surface.",
    image: acousticPlaster,
  },
];

function ProductCategory() {
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
          <Link to="/products" className="hover:text-sky-50 transition-colors">
            &larr; All Categories
          </Link>{" "}
        </p>
        <h1 className="font-lead text-3xl sm:text-4xl lg:text-5xl mb-6 max-w-2xl">
          Architectural Acoustic
        </h1>
        <p className="max-w-2xl leading-relaxed text-sky-50/80">
          Acoustic wall, ceiling, and finishing systems engineered for
          architectural interiors — combining sound performance with design
          intent.
        </p>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 text-sky-950">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12">
          {products.map((product) => (
            <Card
              key={product.name}
              image={product.image}
              title={product.name}
              // subtitle={product.description}
            />
          ))}
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

export default ProductCategory;
