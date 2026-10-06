// How CMS section settings turn into classes. Class names are written out in
// full so Tailwind can find them.

const SPACE_ABOVE = {
  none: "",
  xs: "pt-8",
  sm: "pt-12",
  md: "pt-8 lg:pt-16",
  lg: "pt-16",
  xl: "pt-16 lg:pt-24",
};

const SPACE_BELOW = {
  none: "",
  xs: "pb-8",
  sm: "pb-12",
  md: "pb-8 lg:pb-16",
  lg: "pb-16",
  xl: "pb-16 lg:pb-24",
};

const BACKGROUND = {
  white: "text-sky-950",
  tint: "bg-primary-light text-primary-dark",
};

// What "Default" spacing means: product pages are airier than their
// sub-pages, and an intro sits a little closer to what follows it.
function defaultSpace(type, kind, side) {
  if (type === "intro" && side === "below") return "md";
  return kind === "product" ? "xl" : "lg";
}

export function sectionClass({ type, settings = {} }, kind) {
  const pick = (value, side) =>
    !value || value === "default" ? defaultSpace(type, kind, side) : value;
  return [
    "px-6 sm:px-10 lg:px-20",
    SPACE_ABOVE[pick(settings.spaceAbove, "above")],
    SPACE_BELOW[pick(settings.spaceBelow, "below")],
    BACKGROUND[settings.background] ?? BACKGROUND.white,
  ]
    .filter(Boolean)
    .join(" ");
}

// Section headings: small caps on product pages, larger on sub-pages.
// `tight` is for headings that sit directly on a paragraph or short list.
export function headingClass(kind, tight = false) {
  if (kind === "product")
    return "font-lead text-lg sm:text-xl uppercase tracking-wide mb-8";
  return tight
    ? "font-lead text-xl sm:text-2xl mb-6"
    : "font-lead text-xl sm:text-2xl mb-8";
}
