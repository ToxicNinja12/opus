import cardImage from "@/assets/products/acou-max/Grooved Design Panel.png";
import image1 from "@/assets/products/acou-max/grooved-design-panel/1.png";
import image2 from "@/assets/products/acou-max/grooved-design-panel/2.png";
import image3 from "@/assets/products/acou-max/grooved-design-panel/3.png";

const groovedDesignPanel = {
  slug: "grooved-design-panel",

  // Card on the AcouMAX overview page
  name: "Grooved Design Panel",
  description:
    "Linear grooved surface pattern that adds architectural texture while maintaining acoustic performance — ideal for feature walls.",
  cardImage,

  // Detail page
  title: "AcouMAX Grooved Design Panel",
  subtitle: "Textured PET Acoustic Wall Panels",
  tagline: "Architectural texture that still absorbs sound",
  intro: [
    <>
      The AcouMAX Grooved Design Panel adds dimensional texture to a wall
      without giving up acoustic performance. It's available in two styles —{" "}
      <strong>Linear Grooved</strong>, with straight, evenly spaced channels,
      and <strong>Design Grooved</strong>, with sculpted arch and curve patterns
      — so the same acoustic core can suit either a minimal, architectural look
      or a softer, decorative one. The grooves catch light differently depending
      on viewing angle, giving flat walls a sense of depth that a plain surface
      can't offer.
    </>,
  ],
  bestFor:
    "Corporate office reception areas, executive boardrooms, hospitality lobbies, commercial feature walls.",
  images: [
    {
      src: image1,
      alt: "AcouMAX Linear Grooved acoustic panel on dark feature wall",
    },
    {
      src: image3,
      alt: "AcouMAX Design Grooved acoustic panel with arch pattern on light wall",
    },
    {
      src: image2,
      alt: "Close-up of AcouMAX Plain Panel flat acoustic surface",
    },
  ],
  features: [
    "Two distinct patterns — Linear Grooved (straight channels) and Design Grooved (arch/curve pattern)",
    "Adds architectural texture and depth to flat walls while retaining acoustic performance",
    "Made from polyester fibre (PET) with recycled content, supporting sustainable fit-outs",
    "Flexible installation — suited to walls, ceilings, and glass surfaces",
    "Fire-rated and non-toxic, safe for occupied interior spaces",
  ],
  applications: [
    "Feature walls in corporate office reception areas and executive boardrooms",
    "Hospitality lobbies and hotel reception desks needing a textured, high-end finish",
    "Commercial interiors where the wall itself contributes to the design, not just acoustic treatment",
    "Workstation backdrops and meeting room walls in open-plan corporate offices",
  ],
  installation:
    "AcouMAX Grooved Design Panels can be ceiling-hung using cables or rods, wall-mounted on most surfaces including glass, or fixed to T-grid ceilings with compatible clips. Panels can also be installed directly using adhesive or gun nails, giving flexible options across different site conditions and substrate types.",
  faqs: [
    {
      question:
        "What's the difference between Linear and Design Grooved panels?",
      answer:
        "Linear Grooved panels have straight, evenly spaced channels for a clean architectural look, while Design Grooved panels feature sculpted arch and curve patterns for a softer, more decorative finish.",
    },
    {
      question: "Can Grooved Design Panels be installed on glass?",
      answer:
        "Yes. AcouMAX Grooved Design Panels can be wall-mounted on most surfaces, including glass, in addition to standard wall and T-grid ceiling installation.",
    },
    {
      question: "Do grooved panels absorb sound as well as flat panels?",
      answer:
        "Yes. The grooved surface adds visual texture and architectural detail while the PET fibre core continues to deliver full acoustic absorption performance.",
    },
    {
      question:
        "What installation methods are available for Grooved Design Panels?",
      answer:
        "Panels can be ceiling-hung with cables or rods, wall-mounted with clips or adhesive, fixed to T-grid ceilings, or installed directly with gun nails, depending on the site and substrate.",
    },
  ],
};

export default groovedDesignPanel;
