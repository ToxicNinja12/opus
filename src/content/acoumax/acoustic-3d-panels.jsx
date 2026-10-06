import cardImage from "@/assets/products/acou-max/Acoustic 3d panel.png";
import image1 from "@/assets/products/acou-max/acoustic-3d-panel/1.png";
import image2 from "@/assets/products/acou-max/acoustic-3d-panel/2.png";
import image3 from "@/assets/products/acou-max/acoustic-3d-panel/3.png";

const acoustic3dPanels = {
  slug: "acoustic-3d-panels",

  // Card on the AcouMAX overview page
  name: "Acoustic 3D Panels",
  description:
    "Sculptural, dimensional panel designs that combine visual impact with sound absorption for statement interiors.",
  cardImage,

  // Detail page
  title: "AcouMAX Acoustic 3D Panels",
  subtitle: "Sculptural PET Acoustic Wall Panels",
  tagline: "Dimensional texture that reduces echo and makes a statement",
  intro: [
    "AcouMAX Acoustic 3D Panels trade a flat surface for a sculptural, dimensional one — geometric relief patterns that add bold visual texture while still absorbing sound. Made from recycled PET, they're lightweight, durable, and non-toxic, giving designers a way to treat a wall acoustically without defaulting to a plain finish. The relief pattern reads differently depending on lighting and angle, so the same panel can feel subtle in daylight and dramatic under feature lighting.",
  ],
  bestFor:
    "Corporate office feature walls, executive boardrooms, hospitality and reception interiors, open-plan meeting spaces.",
  images: [
    {
      src: image1,
      alt: "AcouMAX Linear Grooved acoustic panel on dark feature wall",
    },
    {
      src: image2,
      alt: "AcouMAX Design Grooved acoustic panel with arch pattern on light wall",
    },
    {
      src: image3,
      alt: "Close-up of AcouMAX Plain Panel flat acoustic surface",
    },
  ],
  features: [
    "Sculptural, dimensional surface pattern — not flat or printed texture",
    "Made from recycled PET fibre, supporting sustainable commercial fit-outs",
    "Lightweight and non-toxic, safe for occupied interior spaces",
    "Available in multiple patterns for different design intents, from geometric to organic relief",
    "Adds visual depth and shadow play under directional lighting",
  ],
  applications: [
    "Feature walls in corporate reception areas and executive boardrooms",
    "Hospitality interiors — hotel lobbies, restaurant walls, and event spaces",
    "Open-plan offices where the wall needs to double as a design statement",
    "Meeting rooms and collaboration spaces needing both acoustic control and visual interest",
  ],
  installation:
    "AcouMAX Acoustic 3D Panels install using the same flexible methods as the rest of the AcouMAX range — wall-mounted directly, or fixed using adhesive or mechanical fixings depending on the substrate. Because the panels are lightweight, they don't require reinforced wall structures for standard installations.",
  faqs: [
    {
      question: "What are AcouMAX Acoustic 3D Panels made of?",
      answer:
        "AcouMAX Acoustic 3D Panels are made from recycled PET (polyester fibre), making them lightweight, durable, and non-toxic.",
    },
    {
      question:
        "Do 3D acoustic panels reduce echo as effectively as flat panels?",
      answer:
        "Yes. The sculptural surface adds visual texture and dimension while the PET fibre core still absorbs sound and reduces echo in the room.",
    },
    {
      question: "What spaces are Acoustic 3D Panels best suited for?",
      answer:
        "They work well in corporate reception areas, boardrooms, hospitality interiors, and open-plan offices — anywhere a wall needs to combine acoustic performance with a strong visual statement.",
    },
    {
      question: "Are Acoustic 3D Panels heavy to install?",
      answer:
        "No. They're lightweight by design, so standard installations don't require reinforced wall structures.",
    },
  ],
};

export default acoustic3dPanels;
