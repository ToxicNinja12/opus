import { notFound } from "next/navigation";

import CmsPage from "@/components/products/CmsPage";
import { CATEGORY, getProduct, productPath } from "@/lib/cms";

// Pages are built on first visit and cached until the CMS reports a change,
// so the site builds without the CMS and new products need no deploy.
export function generateStaticParams() {
  return [];
}

export default async function ProductPage({ params }) {
  const { product: slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  return (
    <CmsPage
      kind="product"
      page={product.page}
      sections={product.sections}
      subpages={product.subpages}
      basePath={productPath(product.slug)}
      back={{ href: `/products/${CATEGORY}`, label: "Architectural Acoustics" }}
    />
  );
}
