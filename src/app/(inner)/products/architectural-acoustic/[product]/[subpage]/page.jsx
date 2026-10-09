import { notFound } from "next/navigation";

import CmsPage from "@/components/products/CmsPage";
import { CATEGORY, getSubpage, productPath } from "@/lib/cms";

export function generateStaticParams() {
  return [];
}

export default async function ProductSubpage({ params }) {
  const { product: productSlug, subpage: slug } = await params;
  const subpage = await getSubpage(productSlug, slug);
  if (!subpage) notFound();

  // Back to the product page, or to the listing while that page is not live.
  const { parent } = subpage;
  const back = parent.hasPage
    ? { href: productPath(parent.slug), label: parent.backLabel || parent.name }
    : { href: `/products/${CATEGORY}`, label: "Architectural Acoustics" };

  return (
    <CmsPage
      kind="subpage"
      page={subpage.page}
      sections={subpage.sections}
      back={back}
    />
  );
}
