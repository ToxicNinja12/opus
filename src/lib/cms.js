import "server-only";

// Product cards, product pages and their sub-pages come from the CMS
// (the opus-cms project). Responses are cached and tagged; the CMS calls
// /api/revalidate after every change, and the cache also expires on its own
// so the site catches up even if that call is missed.
export const CMS_TAG = "cms";
export const CATEGORY = "architectural-acoustic";
const REVALIDATE_SECONDS = 60;

const CMS_URL = process.env.CMS_URL?.replace(/\/$/, "");

// The CMS sends image paths ("/api/images/12"); next/image needs full URLs.
function absoluteImages(value) {
  if (Array.isArray(value)) return value.map(absoluteImages);
  if (!value || typeof value !== "object") return value;
  const out = Object.fromEntries(
    Object.entries(value).map(([key, v]) => [key, absoluteImages(v)]),
  );
  if (typeof out.src === "string" && out.src.startsWith("/api/images/"))
    out.src = CMS_URL + out.src;
  return out;
}

// Resolves to the parsed response, or null when the CMS answers "not found".
async function request(path) {
  if (!CMS_URL) throw new Error("CMS_URL is not set. See .env.example.");
  const response = await fetch(
    `${CMS_URL}/api/public/${path}?category=${CATEGORY}`,
    { next: { tags: [CMS_TAG], revalidate: REVALIDATE_SECONDS } },
  );
  if (response.status === 404) return null;
  if (!response.ok)
    throw new Error(`The CMS answered ${response.status} for ${path}.`);
  return absoluteImages(await response.json());
}

// Cards for the category listing, in display order.
export async function getProducts() {
  return (await request("products")).products;
}

// A product page (null when there is no product or its page is not live).
export function getProduct(slug) {
  return request(`products/${encodeURIComponent(slug)}`);
}

// A product sub-page (null when missing or not live).
export function getSubpage(productSlug, slug) {
  return request(
    `products/${encodeURIComponent(productSlug)}/${encodeURIComponent(slug)}`,
  );
}

export const productPath = (slug, subSlug) =>
  `/products/${CATEGORY}/${slug}${subSlug ? `/${subSlug}` : ""}`;
