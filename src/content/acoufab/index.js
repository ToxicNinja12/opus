import pvcTrackStretchSystem from "./pvc-track-stretch-system";
import threeDWrappedSystem from "./3d-wrapped-system";
import cloudCeilingSystem from "./cloud-ceiling-system";
import acousoftSystem from "./acousoft-system";

// Listed in the order the cards appear on the AcouFAB page. Adding a system
// here is all it takes to give it a card and a detail page.
export const acoufabSystems = [
  pvcTrackStretchSystem,
  threeDWrappedSystem,
  cloudCeilingSystem,
  acousoftSystem,
];

export function getAcoufabSystem(slug) {
  return acoufabSystems.find((system) => system.slug === slug);
}
