import cardImage from "@/assets/products/acou-max/Desk Partition.png";
import image1 from "@/assets/products/acou-max/desk-partition/1.png";
import image2 from "@/assets/products/acou-max/desk-partition/2.png";
import image3 from "@/assets/products/acou-max/desk-partition/3.png";

const deskPartition = {
  slug: "desk-partition",

  // Card on the AcouMAX overview page
  name: "Desk Partition",
  description:
    "Compact acoustic dividers designed for individual workstations, improving focus and speech privacy at the desk level.",
  cardImage,

  // Detail page
  title: "AcouMAX Desk Partition",
  subtitle: "High-Density PET Acoustic Desk Dividers",
  tagline:
    "Compact, at-the-desk acoustic dividers for focus and speech privacy",
  intro: [
    "AcouMAX Desk Partitions bring acoustic control down to individual workstation level. Made from high-density PET fibre, they reduce cross-desk noise and improve speech privacy in open offices. They install easily with metal clips and come in multiple sizes, colours, and thicknesses, so they integrate cleanly into most existing desk systems rather than requiring a full furniture overhaul.",
  ],
  bestFor:
    "Open-plan corporate offices, call-heavy teams, hot-desk and coworking environments.",
  images: [
    {
      src: image1,
      alt: "AcouMAX acoustic desk partitions separating open office workstations",
    },
    {
      src: image2,
      alt: "Overhead view of AcouMAX desk partition panels on shared office desk",
    },
    { src: image3, alt: "Close-up detail of AcouMAX Desk Partition material" },
  ],
  features: [
    "High-density PET fibre construction for effective sound absorption at close range",
    "Compact format designed for workstation-level acoustic control, not full-room treatment",
    "Easy installation using metal clips, without modifying existing furniture",
    "Available in multiple sizes, colours, and thicknesses",
    "Lightweight, durable, and eco-friendly",
  ],
  applications: [
    "Open-plan corporate offices with shared desking arrangements",
    "Call-heavy teams (sales, support, recruitment) needing speech privacy at the desk",
    "Hot-desk and coworking environments where individual focus space matters",
    "Retrofitting acoustic control onto existing desk systems without full furniture replacement",
  ],
  installation:
    "Desk Partitions attach to existing desks using metal clips, making installation quick and non-permanent. Because they clip directly onto standard desk edges, they can typically be added to existing furniture without structural changes, and repositioned or removed as desking needs change.",
  faqs: [
    {
      question: "How are AcouMAX Desk Partitions installed?",
      answer:
        "They install using metal clips that attach directly to standard desk edges, so they can be fitted to existing furniture without structural changes.",
    },
    {
      question: "What problem do Desk Partitions solve in open offices?",
      answer:
        "They reduce cross-desk noise and improve speech privacy at individual workstations, which is useful for call-heavy teams and shared desking arrangements.",
    },
    {
      question: "Can Desk Partitions be added to existing office furniture?",
      answer:
        "Yes. Because they clip onto standard desk edges, they typically don't require a full furniture overhaul or replacement.",
    },
    {
      question: "What material are AcouMAX Desk Partitions made from?",
      answer:
        "They're made from high-density PET fibre, which is lightweight, durable, and eco-friendly.",
    },
  ],
};

export default deskPartition;
