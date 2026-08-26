import { useState } from "react";

// TODO: replace with real product photography per variant
import plainPanel from "../../assets/products/acou-max.jpg";
import groovedDesign from "../../assets/products/acou-max.jpg";
import acoustic3D from "../../assets/products/acou-max.jpg";
import bafflesCeiling from "../../assets/products/acou-max.jpg";
import cloudCeiling from "../../assets/products/acou-max.jpg";
import screenPartition from "../../assets/products/acou-max.jpg";
import deskPartition from "../../assets/products/acou-max.jpg";
import printedDesign from "../../assets/products/acou-max.jpg";
import modularWallSystem from "../../assets/products/acou-max.jpg";
import phoneBooth from "../../assets/products/acou-max.jpg";

const formats = [
  {
    name: "Plain Panel",
    image: plainPanel,
    description:
      "Clean, flat-finish acoustic panel offering a minimalist look while delivering effective sound absorption for walls and ceilings.",
  },
  {
    name: "Grooved Design Panel",
    image: groovedDesign,
    description:
      "Linear grooved surface pattern that adds architectural texture while maintaining acoustic performance — ideal for feature walls.",
  },
  {
    name: "Acoustic 3D Panels",
    image: acoustic3D,
    description:
      "Sculptural, dimensional panel designs that combine visual impact with sound absorption for statement interiors.",
  },
  {
    name: "Baffles Ceiling",
    image: bafflesCeiling,
    description:
      "Vertically hung acoustic baffles that reduce reverberation in open-plan and high-ceiling spaces without blocking natural light or airflow.",
  },
  {
    name: "Cloud Ceiling",
    image: cloudCeiling,
    description:
      "Suspended acoustic ceiling elements that absorb sound from above — ideal for open offices, cafes, and public spaces.",
  },
  {
    name: "Screen Partition",
    image: screenPartition,
    description:
      "Freestanding acoustic screens that divide space and reduce noise transfer between zones, ideal for open-plan offices.",
  },
  {
    name: "Desk Partition",
    image: deskPartition,
    description:
      "Compact acoustic dividers designed for individual workstations, improving focus and speech privacy at the desk level.",
  },
  {
    name: "Printed Design Panel",
    image: printedDesign,
    description:
      "Custom-printed acoustic panels that combine branding or artwork with sound absorption — ideal for reception areas and feature walls.",
  },
  {
    name: "Modular Wall Acoustic System",
    image: modularWallSystem,
    description:
      "Interlocking acoustic panel system for large-scale wall coverage, allowing flexible layouts and consistent acoustic performance.",
  },
  {
    name: "Acoustic Phone Booth",
    image: phoneBooth,
    description:
      "Enclosed acoustic pod for private calls and focused work, built using AcouMAX panels for effective sound isolation.",
  },
];

function FormatSelector() {
  const [selected, setSelected] = useState(0);
  const active = formats[selected];

  return (
    <div>
      <h3 className="font-lead text-lg sm:text-xl mb-2">
        Available in 10 Formats
      </h3>
      <p className="text-sm text-slate-500 mb-8">
        Select a format below to see its image and description.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Preview panel */}
        <div>
          <img
            src={active.image}
            alt={active.name}
            className="w-full aspect-[4/3] object-cover mb-4"
          />
          <p className="font-semibold mb-1">{active.name}</p>
          <p className="text-sm text-slate-500 leading-relaxed">
            {active.description}
          </p>
        </div>

        {/* Selector grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {formats.map((format, index) => (
            <button
              key={format.name}
              type="button"
              onClick={() => setSelected(index)}
              className={`text-left p-3 border transition-colors ${
                index === selected
                  ? "border-primary bg-primary/5"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <span className="text-xs text-slate-300 block mb-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium">{format.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FormatSelector;
