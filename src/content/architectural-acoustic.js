import acouMax from "@/assets/products/acou-max.jpg";
import acouFab from "@/assets/products/acou-fab.png";
import acouWood from "@/assets/products/acou-wood.avif";
import acouSlats from "@/assets/products/wooden-Slatted-Panel.webp";
import polyurethaneFoam from "@/assets/featured/diffuser-foam.jpg";
import acouWool from "@/assets/products/acouwool.jpeg";
import acousticSpray from "@/assets/products/acoustic-spray.png";
import acousticGlassPartition from "@/assets/products/acoustic-glass-partition.jpg";

import acouBamboo from "@/assets/products/acou-bamboo.jpg";
import acousticCeilingTile from "@/assets/featured/mesh-ceiling.jpg";
import movableOperablePartition from "@/assets/featured/movable-operable-partition.jpg";
import soundproofingWallCeiling from "@/assets/featured/soundproofing-wall-ceiling.jpeg";
import acousticDoors from "@/assets/products/acou-doors.jpg";
import acouMetal from "@/assets/products/acou-metal.jpg";
import diffusers from "@/assets/featured/diffusers.jpg";
import padding from "@/assets/products/padding.jpg";
import acousticFlooring from "@/assets/products/acou-flooring.jpg";
import acousticPlaster from "@/assets/products/acou-plaster.jpg";

// Products with a `slug` have their own page under
// /products/architectural-acoustic/<slug>; the rest are cards only.
export const architecturalProducts = [
  // Row 1
  {
    name: "AcouMAX",
    description: "Polyester fibre acoustic panel for walls and ceilings.",
    image: acouMax,
    slug: "acoumax",
  },
  {
    name: "AcouFAB",
    description:
      "Stretch fabric acoustic panel for a seamless, tailored finish.",
    image: acouFab,
    slug: "acoufab",
  },
  {
    name: "AcouWOOL",
    description:
      "Acoustic wood wool panel for high-performance sound absorption.",
    image: acouWool,
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
  // Row 2
  {
    name: "AcouWOOD",
    description:
      "Acoustic wooden perforated panel combining natural aesthetics with sound absorption.",
    image: acouWood,
  },
  {
    name: "Acoustic Plaster",
    description:
      "Seamless acoustic plaster finish combining absorption with a smooth surface.",
    image: acousticPlaster,
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
  // Row 3
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
];
