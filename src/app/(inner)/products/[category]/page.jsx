import ProductHero from "@/components/products/ProductHero";
import Card from "@/components/ui/Card";
import Link from "@/components/ui/Link";
import { architecturalProducts } from "@/content/architectural-acoustic";
import { categories } from "@/content/product-categories";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

// Every category slug renders the Architectural Acoustic listing for now —
// the other categories don't have content of their own yet.
export default function ProductCategoryPage() {
  return (
    <>
      <ProductHero
        backHref="/products"
        backLabel="All Categories"
        title="Architectural Acoustic Solutions"
      >
        <div>
          <p className="mb-4 leading-relaxed text-sky-50/80">
            Opus Acoustic delivers a complete range of architectural acoustic
            solutions — from acoustic wall panels and ceiling systems to
            partitions, doors, and decorative finishes — engineered for
            interiors across Dubai and the UAE. Every acoustic product is
            designed to combine sound performance with architectural intent,
            helping architects, designers, and contractors create spaces that
            look as good as they sound.
          </p>
          <p className="leading-relaxed text-sky-50/80">
            Whether you're specifying acoustic panels for Corporate & Commercial
            Offices, ceiling tiles for Educational Spaces, or soundproofing
            systems for a hospitality project, our architectural acoustic range
            supports commercial, educational, healthcare, and cultural
            developments across the region.
          </p>
        </div>
      </ProductHero>

      <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 text-sky-950">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-6">
          {architecturalProducts.map((product) => {
            const card = (
              <Card
                image={product.image}
                title={product.name}
                subtitle={product.description}
                sizes="(min-width: 1024px) 17vw, (min-width: 640px) 33vw, 50vw"
              />
            );
            return product.slug ? (
              <Link
                key={product.name}
                href={`/products/architectural-acoustic/${product.slug}`}
              >
                {card}
              </Link>
            ) : (
              <div key={product.name}>{card}</div>
            );
          })}
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
    </>
  );
}
