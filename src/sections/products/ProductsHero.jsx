import { Link } from "react-router-dom";

function ProductsHero() {
  return (
    <section className="bg-secondary text-sky-50 px-6 sm:px-10 lg:px-20 pt-16 sm:pt-20 lg:pt-32 pb-16 lg:pb-24">
      <div className="max-w-2xl">
        <p className="text-xs sm:text-sm tracking-widest uppercase text-primary mb-4">
          Our Product Range
        </p>
        <h1 className="font-lead text-3xl sm:text-4xl lg:text-5xl mb-6">
          Acoustic Products for Every Space
        </h1>
        <p className="leading-relaxed text-sky-50/80">
          From acoustic wall panels to ceilings, partitions, and
          noise-monitoring equipment — explore Opus Acoustic's full range of
          acoustic materials and solutions, engineered for architects,
          consultants, and contractors across the UAE, GCC, and Europe.
        </p>
      </div>
    </section>
  );
}

export default ProductsHero;
