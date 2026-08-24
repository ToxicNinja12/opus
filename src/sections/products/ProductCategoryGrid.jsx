import { Link } from "react-router-dom";

import architecturalImg from "../../assets/hero.jpg"; // TODO: replace with real Architectural Acoustic photo
import industrialImg from "../../assets/acoustic-site-inspection-uae.png"; // TODO: replace with real Industrial Acoustic photo
import consultancyImg from "../../assets/acoustic-consultancy-uae.png";

export const categories = [
  {
    slug: "architectural-acoustic",
    image: architecturalImg,
    label: "Architectural Acoustic",
  },
  {
    slug: "industrial-acoustic",
    image: industrialImg,
    label: "Industrial Acoustic",
  },
  {
    slug: "acoustic-consultancy",
    image: consultancyImg,
    label: "Acoustic Consultancy",
  },
];

function ProductCategoryGrid() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 text-sky-950">
      <div className="mb-10 lg:mb-16">
        <h2 className="font-lead text-xl sm:text-2xl">Browse by Category</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/products/${category.slug}`}
            className="group relative block h-72 sm:h-96 overflow-hidden"
          >
            <img
              src={category.image}
              alt={category.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 contrast-75"
            />
            <div className="absolute inset-0 bg-secondary/50 transition-colors duration-300 group-hover:bg-secondary/60 " />
            <div className="relative h-full flex items-end p-6">
              <p className="font-lead text-xl text-sky-50">{category.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProductCategoryGrid;
