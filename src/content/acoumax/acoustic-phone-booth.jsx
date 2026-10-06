import cardImage from "@/assets/products/acou-max/Acoustic Phone Booth.png";
import image1 from "@/assets/products/acou-max/acoustic-phone-booth/1.png";
import image2 from "@/assets/products/acou-max/acoustic-phone-booth/2.png";
import image3 from "@/assets/products/acou-max/acoustic-phone-booth/3.png";

const acousticPhoneBooth = {
  slug: "acoustic-phone-booth",

  // Card on the AcouMAX overview page
  name: "Acoustic Phone Booth",
  description:
    "Enclosed acoustic pod for private calls and focused work, built using AcouMAX panels for effective sound isolation.",
  cardImage,

  // Detail page
  title: "AcouMAX Acoustic Phone Booth",
  subtitle: "Sound-Insulated Office Pod",
  tagline: "An enclosed pod for private calls and focused work",
  intro: [
    "The AcouMAX Acoustic Phone Booth is a compact, sound-insulated enclosure built using AcouMAX panels internally, designed to reduce external noise and echo for the person inside. It gives open offices and commercial spaces a self-contained option for private calls or heads-down work without needing a dedicated meeting room.",
  ],
  bestFor:
    "Open-plan corporate offices, coworking spaces, and commercial interiors needing on-demand private space.",
  images: [
    { src: image1, alt: "AcouMAX Acoustic Phone Booth in open office corner" },
    {
      src: image2,
      alt: "Row of AcouMAX Acoustic Phone Booths in commercial office",
    },
    { src: image3, alt: "Close-up detail of AcouMAX Acoustic Phone Booth" },
  ],
  features: [
    "Compact, self-contained footprint — doesn't require a dedicated room",
    "Built using AcouMAX acoustic panels internally to reduce noise and echo",
    "Sound-insulated enclosure suited to private calls and focused, heads-down work",
    "Suitable for open-plan offices without disrupting existing floor layouts",
    "Can be deployed as a single unit or in multiples for higher-demand areas",
  ],
  applications: [
    "Open-plan corporate offices needing private call space without a meeting room booking",
    "Coworking spaces offering on-demand focus or privacy pods to members",
    "Commercial interiors where floor space doesn't allow for additional enclosed rooms",
    "Reception or lobby areas needing a discreet space for confidential conversations",
  ],
  installation:
    "The Acoustic Phone Booth is a self-contained, freestanding unit that can be positioned within an existing office layout without structural changes to the building. Multiple booths can be placed together, as shown in shared office settings, to meet higher demand for private space.",
  faqs: [
    {
      question: "What is an AcouMAX Acoustic Phone Booth used for?",
      answer:
        "It's used for private calls and focused work in open offices, giving employees an enclosed, sound-insulated space without needing a dedicated meeting room.",
    },
    {
      question: "Does the phone booth require structural changes to install?",
      answer:
        "No. It's a self-contained, freestanding unit that can be positioned within an existing office layout without structural changes.",
    },
    {
      question: "Can multiple phone booths be installed together?",
      answer:
        "Yes. Multiple booths can be placed together in shared office settings to meet higher demand for private space.",
    },
    {
      question: "What makes the booth sound-insulated?",
      answer:
        "The booth is built using AcouMAX acoustic panels internally, which reduce external noise and echo for the person inside.",
    },
  ],
};

export default acousticPhoneBooth;
