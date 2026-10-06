import cardImage from "@/assets/products/acou-max/Plain Panel 2.jpeg";
import image1 from "@/assets/products/acou-max/plain-panel/1.png";
import image2 from "@/assets/products/acou-max/plain-panel/2.png";
import image3 from "@/assets/products/acou-max/plain-panel/3.png";

const plainPanel = {
  slug: "plain-panel",

  // Card on the AcouMAX overview page
  name: "Plain Panel",
  description:
    "Clean, flat-finish acoustic panel offering a minimalist look while delivering effective sound absorption for walls and ceilings.",
  cardImage,

  // Detail page
  title: "AcouMAX Plain Panel",
  subtitle: "Flat-Finish PET Acoustic Wall Panels",
  tagline: "A minimalist acoustic panel that lets performance speak for itself",
  intro: [
    "The AcouMAX Plain Panel is a flat-finish, sound-absorbing acoustic panel made from polyester fibre (PET) — built for spaces where noise control matters as much as visual simplicity. With no texture or pattern on the surface, it works as a wall panel or ceiling panel while still delivering full acoustic performance. As the most versatile format in the AcouMAX range, it suits everything from a full acoustic feature wall to a subtle backing surface behind furniture and joinery.",
  ],
  bestFor:
    "Corporate offices, commercial office fit-outs, executive boardrooms, reception areas.",
  images: [
    {
      src: image1,
      alt: "AcouMAX flat-finish PET acoustic wall panel leaning against wall",
    },
    {
      src: image2,
      alt: "AcouMAX Plain Panel installed in modern boardroom ceiling and wall",
    },
    {
      src: image3,
      alt: "Close-up of AcouMAX Plain Panel flat acoustic surface",
      className: "object-top",
    },
  ],
  features: [
    "Flat, seamless acoustic surface with no visible texture or pattern",
    "Lightweight PET panel construction — easy to handle and install without specialist equipment",
    "Fire-rated and non-toxic, safe for occupied interior spaces",
    "Made from polyester fibre with recycled PET content, supporting sustainable fit-outs",
    "Consistent, clean finish suited to large-scale corporate installations",
  ],
  applications: [
    "Full acoustic feature walls in corporate offices, commercial offices, and reception areas",
    "Backing surface behind joinery, shelving, or furniture in corporate workspaces for subtle sound control",
    "Boardrooms and executive meeting rooms needing a clean, distraction-free acoustic wall finish",
    "Open-plan corporate offices and coworking spaces needing baseline noise reduction without visual complexity",
    "Corridors, lift lobbies, and transition spaces in commercial office buildings",
  ],
  installation:
    "AcouMAX Plain Panels can be wall-mounted on most standard surfaces, fixed to T-grid ceilings with compatible clips, or installed directly using adhesive or gun nails — the same flexible acoustic panel installation methods used across the AcouMAX range. No specialist tools are required, and panels can be cut on-site to fit irregular wall dimensions.",
  faqs: [
    {
      question: "What is an AcouMAX Plain Panel made of?",
      answer:
        "AcouMAX Plain Panel is made from polyester fibre (PET), combining recycled and virgin PET fibre into a lightweight, fire-rated acoustic panel.",
    },
    {
      question: "Is the Plain Panel suitable for both walls and ceilings?",
      answer:
        "Yes. The Plain Panel can be wall-mounted or ceiling-mounted using T-grid clips, adhesive, or gun nails, making it suitable for both wall and ceiling acoustic treatment.",
    },
    {
      question: "Is AcouMAX Plain Panel eco-friendly?",
      answer:
        "Yes. The panel core combines recycled PET fibre with virgin PET fibre, and the material is non-toxic and safe for occupied interior spaces.",
    },
    {
      question: "Where is the Plain Panel typically used?",
      answer:
        "It's commonly used in corporate and commercial offices — feature walls, boardrooms, executive meeting rooms, and open-plan work areas — as well as reception spaces that need a clean, minimalist acoustic finish.",
    },
  ],
};

export default plainPanel;
