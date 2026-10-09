import ProductsHero from "@/components/products/ProductsHero";
import ProductCategoryGrid from "@/components/products/ProductCategoryGrid";
import WhyChooseProducts from "@/components/products/WhyChooseProducts";
import ProductsFAQ from "@/components/products/ProductsFAQ";
import ProductsCTA from "@/components/products/ProductsCTA";

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductCategoryGrid />
      <WhyChooseProducts />
      <ProductsFAQ />
      <ProductsCTA />
    </>
  );
}
