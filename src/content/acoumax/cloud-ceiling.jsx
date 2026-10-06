import cardImage from "@/assets/products/acou-max/Cloud Ceiling.png";
import image1 from "@/assets/products/acou-max/cloud-ceiling/1.png";
import image2 from "@/assets/products/acou-max/cloud-ceiling/2.png";
import image3 from "@/assets/products/acou-max/cloud-ceiling/3.png";

const cloudCeiling = {
  slug: "cloud-ceiling",

  // Card on the AcouMAX overview page
  name: "Cloud Ceiling",
  description:
    "Suspended acoustic ceiling elements that absorb sound from above — ideal for open offices, cafes, and public spaces.",
  cardImage,

  // Detail page
  title: "AcouMAX Cloud Ceiling",
  subtitle: "Suspended PET Acoustic Ceiling Panels",
  tagline: "Suspended acoustic elements that soften sound from above",
  intro: [
    "AcouMAX Cloud Ceiling panels hang below the structural ceiling as discrete acoustic \"islands,\" ideal for spaces where a full acoustic ceiling isn't practical or desired. Made from recycled PET fibre, they're lightweight, durable, and eco-friendly, and available in a range of shapes, colours, and thicknesses — from soft circular clusters to angular diamond grids — so the format can flex between a calm, minimal look and a bolder architectural statement.",
  ],
  bestFor:
    "Open-plan corporate offices, cafés, transit and retail spaces, and other public interiors needing ceiling-level sound softening.",
  images: [
    {
      src: image1,
      alt: "AcouMAX Cloud Ceiling circular acoustic panels suspended above office",
    },
    {
      src: image2,
      alt: "AcouMAX diamond-grid acoustic cloud ceiling in commercial interior",
    },
    { src: image3, alt: "Close-up of AcouMAX Cloud Ceiling detail" },
  ],
  features: [
    "Suspended below the structural ceiling as discrete acoustic elements rather than a full panel system",
    "Made from recycled PET fibre, supporting sustainable commercial fit-outs",
    "Lightweight, durable, and eco-friendly",
    "Available in multiple shapes — including circular clusters and diamond-grid layouts",
    "Flexible layout options, allowing partial ceiling coverage rather than wall-to-wall installation",
  ],
  applications: [
    "Open-plan corporate offices needing ceiling-level acoustic treatment without a full suspended ceiling",
    "Cafés, transit spaces, and retail interiors with high foot traffic and hard surfaces",
    "Reception and lounge areas where a softer visual ceiling treatment is preferred",
    "Public and commercial spaces needing noise reduction across large open volumes",
  ],
  installation:
    "Cloud Ceiling panels are suspended from the structural ceiling to create discrete acoustic clusters or grids, rather than covering the ceiling edge-to-edge. This allows installation to be tailored to the areas of a room that need the most acoustic treatment, while leaving the rest of the ceiling exposed or untouched.",
  faqs: [
    {
      question: "What is a Cloud Ceiling acoustic panel?",
      answer:
        'A Cloud Ceiling panel is a suspended acoustic element that hangs below the structural ceiling as a discrete "island" of sound absorption, rather than covering the entire ceiling surface.',
    },
    {
      question: "What shapes are AcouMAX Cloud Ceiling panels available in?",
      answer:
        "AcouMAX Cloud Ceiling panels come in a range of shapes, including soft circular clusters and angular diamond-grid layouts, to suit different design styles.",
    },
    {
      question:
        "Is Cloud Ceiling suitable for spaces with an exposed or industrial ceiling?",
      answer:
        "Yes. Because Cloud Ceiling panels are suspended as discrete elements rather than a full ceiling system, they work well in spaces with exposed services or an industrial-style ceiling.",
    },
    {
      question: "What is AcouMAX Cloud Ceiling made from?",
      answer:
        "AcouMAX Cloud Ceiling panels are made from recycled PET fibre, making them lightweight, durable, and eco-friendly.",
    },
  ],
};

export default cloudCeiling;
