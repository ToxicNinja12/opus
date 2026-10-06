import plainPanel from "./plain-panel";
import groovedDesignPanel from "./grooved-design-panel";
import acoustic3dPanels from "./acoustic-3d-panels";
import bafflesCeiling from "./baffles-ceiling";
import cloudCeiling from "./cloud-ceiling";
import screenPartition from "./screen-partition";
import deskPartition from "./desk-partition";
import printedDesignPanel from "./printed-design-panel";
import modularWallAcousticSystem from "./modular-wall-acoustic-system";
import acousticPhoneBooth from "./acoustic-phone-booth";

// Listed in the order the cards appear on the AcouMAX page. Adding a variant
// here is all it takes to give it a card and a detail page.
export const acoumaxVariants = [
  plainPanel,
  groovedDesignPanel,
  acoustic3dPanels,
  bafflesCeiling,
  cloudCeiling,
  screenPartition,
  deskPartition,
  printedDesignPanel,
  modularWallAcousticSystem,
  acousticPhoneBooth,
];

export function getAcoumaxVariant(slug) {
  return acoumaxVariants.find((variant) => variant.slug === slug);
}
