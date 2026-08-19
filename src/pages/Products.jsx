import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import ProductsHero from "../sections/products/ProductsHero";
import ProductCategoryGrid from "../sections/products/ProductCategoryGrid";
import WhyChooseProducts from "../sections/products/WhyChooseProducts";
import ProductsFAQ from "../sections/products/ProductsFAQ";
import ProductsCTA from "../sections/products/ProductsCTA";
import Footer from "../sections/Footer";

import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <div className="bg-secondary text-sky-50 px-6 sm:px-10 lg:px-20 py-8 flex items-center justify-between">
        <Link to="/">
          <Logo className="mb-1" />
        </Link>
        <Navbar className="md:basis-xl" flexMode />
      </div>
      <ProductsHero />
      <ProductCategoryGrid />
      <WhyChooseProducts />
      <ProductsFAQ />
      <ProductsCTA />
      <Footer />
    </>
  );
}

export default Products;
