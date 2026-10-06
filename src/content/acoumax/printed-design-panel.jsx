import cardImage from "@/assets/products/acou-max/Printed Design Panel.png";
import image1 from "@/assets/products/acou-max/printed-design-panel/1.png";
import image2 from "@/assets/products/acou-max/printed-design-panel/2.png";
import image3 from "@/assets/products/acou-max/printed-design-panel/3.png";

const printedDesignPanel = {
  slug: "printed-design-panel",

  // Card on the AcouMAX overview page
  name: "Printed Design Panel",
  description:
    "Custom-printed acoustic panels that combine branding or artwork with sound absorption — ideal for reception areas and feature walls.",
  cardImage,

  // Detail page
  title: "AcouMAX Printed Design Panel",
  subtitle: "Custom-Printed PET Acoustic Panels",
  tagline: "Branding and artwork, engineered to also absorb sound",
  intro: [
    "AcouMAX Printed Design Panels turn acoustic treatment into a canvas. The panel surface is an ideal base for the latest inkjet printing technology and specialized graphics programs, making it well suited to signage and full-colour imagery. Panels can be used individually or combined into multi-panel displays, with no fixed repeat size required — logos, photography, and graphics can all be printed, as long as the source artwork can be scanned and digitized.",
    "Because it's an inkjet process, colour choice and count are unlimited, and there's no trade-off between look and acoustic performance: the print sits on the same sound-absorbing PET base as the rest of the AcouMAX range.",
  ],
  bestFor:
    "Corporate reception areas, executive lobby feature walls, branded corporate environments, hospitality and retail interiors.[cite: 10]",
  images: [
    {
      src: image1,
      alt: "AcouMAX Printed Design Panel with custom artwork behind reception desk",
    },
    {
      src: image2,
      alt: "Custom printed acoustic panels forming multi-panel wall display",
    },
    { src: image3, alt: "Close-up detail of inkjet printing on AcouMAX panel" },
  ],
  features: [
    "Full-colour inkjet printing directly onto the acoustic PET panel surface",
    "No fixed repeat size — logos, photography, and graphics can all be printed",
    "Unlimited colour choice and count, since printing is inkjet-based rather than limited palette",
    "Usable as individual printed panels or combined into multi-panel displays",
    "Same sound-absorbing PET core as the rest of the AcouMAX range — no acoustic performance trade-off",
  ],
  applications: [
    "Branded reception walls and corporate lobby feature installations",
    "Custom signage combining acoustic treatment with visual identity",
    "Hospitality and retail interiors using large-format imagery or photography",
    "Multi-panel displays for corridors, lobbies, or event spaces",
  ],
  installation:
    "Printed Design Panels install using the same flexible methods as other AcouMAX formats — wall-mounted individually or arranged into a multi-panel layout. Custom print samples are available at cost in 1200×600mm, allowing colours and image quality to be reviewed before a full production run.",
  installationDetails: {
    heading: "Artwork & Print Specifications",
    items: [
      "Print process: Inkjet, using specialized graphics programs",
      "Source artwork: Logos, photographic imagery, and graphics — anything that can be scanned and digitized",
      "Custom sample size: 1200×600mm, available at cost",
      "Minimum image resolution: 600px wide at 300 DPI — images smaller than this may print pixelated or blurry",
    ],
  },
  faqs: [
    {
      question:
        "What kind of artwork can be printed on AcouMAX Printed Design Panels?",
      answer:
        "Anything that can be scanned and digitized — including logos, photographic imagery, and graphics — can be printed using the inkjet process.",
    },
    {
      question: "Is there a minimum image resolution for printing?",
      answer:
        "Yes. Source images should be at least 600px wide at 300 DPI. Images smaller than this may print with pixelization or appear blurry.",
    },
    {
      question: "Are there limits on colour choice for printed panels?",
      answer:
        "No. Because printing uses an inkjet process, colour choice and number are unlimited.",
    },
    {
      question: "Can I get a sample before ordering a full print run?",
      answer:
        "Yes. Custom print samples are available at cost in a 1200×600mm size, allowing colours and image quality to be checked before full production.",
    },
    {
      question: "Does printing affect the acoustic performance of the panel?",
      answer:
        "No. The print is applied to the same sound-absorbing PET panel base used across the AcouMAX range, so acoustic performance is unaffected.",
    },
  ],
};

export default printedDesignPanel;
