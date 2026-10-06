import cardImage from "@/assets/products/acou-max/Baffles Ceiling.png";
import image1 from "@/assets/products/acou-max/baffles-ceiling/1.png";
import image2 from "@/assets/products/acou-max/baffles-ceiling/2.png";
import image3 from "@/assets/products/acou-max/baffles-ceiling/3.png";

const bafflesCeiling = {
  slug: "baffles-ceiling",

  // Card on the AcouMAX overview page
  name: "Baffles Ceiling",
  description:
    "Vertically hung acoustic baffles that reduce reverberation in open-plan and high-ceiling spaces without blocking natural light or airflow.",
  cardImage,

  // Detail page
  title: "AcouMAX Baffles Ceiling",
  subtitle: "High-Density PET Acoustic Ceiling Baffles",
  tagline: "Vertical acoustic control for large, open, high-ceiling spaces",
  intro: [
    "AcouMAX Baffles Ceiling panels hang vertically from the ceiling to intercept sound before it bounces back into the room, reducing echo and reverberation in large or high-ceiling interiors. Made from high-density, eco-friendly recycled PET, they're lightweight and non-toxic, and are available in four profile shapes — A-Baffle, V-Baffle, I-Baffle, and U-Baffle — so the acoustic and visual profile can be matched to the space. Because baffles hang below the structural ceiling, they treat sound without blocking natural light, sprinklers, or existing services.",
  ],
  bestFor:
    "Open-plan corporate offices, auditoriums, schools, large commercial interiors with high or exposed ceilings.",
  images: [
    {
      src: image1,
      alt: "AcouMAX A-Baffle acoustic ceiling panel hanging in open office",
    },
    {
      src: image2,
      alt: "AcouMAX acoustic baffle ceiling installation above meeting room",
    },
    {
      src: image3,
      alt: "Close-up of individual baffle profile against ceiling grid",
    },
  ],
  features: [
    "Four available profile shapes — A-Baffle, V-Baffle, I-Baffle, and U-Baffle",
    "High-density recycled PET construction for effective sound absorption",
    "Lightweight and non-toxic, suitable for occupied commercial interiors",
    "Hangs below the structural ceiling without blocking light fixtures, sprinklers, or airflow",
    "Suited to large, open, or high-ceiling spaces where wall treatment alone isn't enough",
  ],
  applications: [
    "Open-plan corporate offices with high or exposed ceilings",
    "Auditoriums and large presentation spaces needing reverberation control",
    "Schools and educational facilities",
    "Commercial interiors where ceiling acoustic treatment is needed without a full suspended ceiling",
  ],
  installation:
    "Baffles are suspended from the ceiling structure using cables or rods, allowing them to hang at a set depth below the ceiling without obstructing lighting, sprinklers, or HVAC systems. Baffle profile (A, V, I, or U) can be selected based on the acoustic performance and visual effect required for the space.",
  faqs: [
    {
      question: "What profile shapes are available for AcouMAX Baffles?",
      answer:
        "AcouMAX Baffles Ceiling is available in four profiles: A-Baffle (angled, tent-shaped), V-Baffle (open V-channel), I-Baffle (flat vertical blade), and U-Baffle (closed U-channel).",
    },
    {
      question: "Do ceiling baffles block light or sprinklers?",
      answer:
        "No. Baffles hang below the structural ceiling using cables or rods, so they reduce echo without blocking natural light, sprinklers, or airflow.",
    },
    {
      question: "What spaces are ceiling baffles best suited for?",
      answer:
        "Ceiling baffles work best in large, open, or high-ceiling spaces such as open-plan offices, auditoriums, schools, and large commercial interiors where wall panels alone aren't enough to control reverberation.",
    },
    {
      question: "What material are AcouMAX Baffles made from?",
      answer:
        "AcouMAX Baffles are made from high-density, eco-friendly recycled PET fibre, making them lightweight and non-toxic.",
    },
  ],
};

export default bafflesCeiling;
