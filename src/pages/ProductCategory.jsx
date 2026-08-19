import { useParams, Link, Navigate } from "react-router-dom";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import Card from "../components/Card";
import { categories } from "../sections/products/ProductCategoryGrid";

function ProductCategory() {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  return (
    <>
      <div className="bg-secondary text-sky-50 px-6 sm:px-10 lg:px-20 py-8 flex items-center justify-between">
        <Link to="/">
          <Logo className="mb-1" />
        </Link>
        <Navbar className="md:basis-xl" flexMode />
      </div>

      <section className="bg-secondary text-sky-50 px-6 sm:px-10 lg:px-20 pt-8 pb-16 lg:pb-24">
        <p className="text-sm text-sky-50/60 mb-6">
          <Link to="/products" className="hover:text-sky-50 transition-colors">
            &larr; All Categories
          </Link>{" "}
        </p>
        <h1 className="font-lead text-3xl sm:text-4xl lg:text-5xl mb-6 max-w-2xl">
          {category.title}
        </h1>
        <p className="max-w-2xl leading-relaxed text-sky-50/80">
          {category.blurb}
        </p>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 text-sky-950">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {category.items.map((item) => (
            <Card
              key={item.name}
              image={item.image}
              title={item.name}
              subtitle={item.description}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="inline-block text-center bg-primary text-sky-50 px-6 py-4"
          >
            Request a Quote &rarr;
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductCategory;
