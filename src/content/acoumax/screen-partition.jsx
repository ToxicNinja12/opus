import cardImage from "@/assets/products/acou-max/screen partition.png";
import image1 from "@/assets/products/acou-max/screen-partition/1.png";
import image2 from "@/assets/products/acou-max/screen-partition/2.png";
import image3 from "@/assets/products/acou-max/screen-partition/3.png";

const screenPartition = {
  slug: "screen-partition",

  // Card on the AcouMAX overview page
  name: "Screen Partition",
  description:
    "Freestanding acoustic screens that divide space and reduce noise transfer between zones, ideal for open-plan offices.",
  cardImage,

  // Detail page
  title: "AcouMAX Screen Partition",
  subtitle: "Freestanding PET Acoustic Screens",
  tagline: "Freestanding screens that divide space and reduce noise transfer",
  intro: [
    "AcouMAX Screen Partitions are built from high-performance PET fibre to reduce noise and add visual privacy between zones without requiring permanent construction. Fine cut-out patterns keep the panels visually light while still doing acoustic work, and because they're freestanding, they can be reconfigured as a space's layout changes. Lightweight, durable, and eco-friendly, they're available in a range of sizes, colours, and configurations.",
  ],
  bestFor:
    "Open-plan corporate offices, coworking spaces, and commercial interiors that need flexible zoning without fixed walls.",
  images: [
    {
      src: image1,
      alt: "AcouMAX laser-cut acoustic screen partition dividing office desks",
    },
    {
      src: image2,
      alt: "AcouMAX freestanding acoustic screen panel with geometric pattern",
    },
    {
      src: image3,
      alt: "Close-up detail of AcouMAX Screen Partition cut-out pattern",
    },
  ],
  features: [
    "Freestanding design — no permanent construction or wall fixing required",
    "Fine cut-out patterns that keep the screen visually light while absorbing sound",
    "Made from high-performance PET fibre, lightweight and durable",
    "Reconfigurable as office layouts change, supporting flexible space planning",
    "Eco-friendly material, suited to sustainable commercial fit-outs",
  ],
  applications: [
    "Zoning within open-plan corporate offices, without committing to fixed walls",
    "Coworking spaces needing flexible, movable privacy dividers",
    "Commercial interiors where noise reduction and visual privacy are both needed between desk clusters",
    "Reception or waiting areas needing a decorative, semi-transparent divider",
  ],
  installation:
    "Screen Partitions are freestanding and self-supporting, so they don't require wall mounting or structural fixing. This makes them straightforward to place, move, or reconfigure as a space's layout evolves, without the cost or disruption of permanent partition walls.",
  faqs: [
    {
      question: "Do Screen Partitions need to be fixed to a wall or floor?",
      answer:
        "No. AcouMAX Screen Partitions are freestanding and self-supporting, so they can be placed and moved without wall mounting or structural fixing.",
    },
    {
      question: "Can Screen Partitions be reconfigured after installation?",
      answer:
        "Yes. Because they're freestanding, Screen Partitions can be repositioned or reconfigured as office layouts change, offering more flexibility than fixed partition walls.",
    },
    {
      question: "What material are AcouMAX Screen Partitions made from?",
      answer:
        "They're made from high-performance PET fibre, which is lightweight, durable, and eco-friendly.",
    },
    {
      question:
        "Do Screen Partitions provide visual privacy as well as acoustic benefits?",
      answer:
        "Yes. The fine cut-out patterns reduce noise transfer while also softening sightlines between zones, offering visual as well as acoustic separation.",
    },
  ],
};

export default screenPartition;
