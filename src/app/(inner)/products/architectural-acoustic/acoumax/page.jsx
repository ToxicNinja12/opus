import ColorOptions from "@/components/products/ColorOptions";
import ProductCharacteristics from "@/components/products/ProductCharacteristics";
import ProductHero from "@/components/products/ProductHero";
import Card from "@/components/ui/Card";
import Link from "@/components/ui/Link";
import { acoumaxVariants } from "@/content/acoumax";

export default function AcouMaxPage() {
  return (
    <>
      <ProductHero
        backHref="/products/architectural-acoustic"
        backLabel="Architectural Acoustics"
        title={<>AcouMAX &mdash; PET</>}
      >
        <p className="max-w-2xl leading-relaxed text-sky-50/80">
          AcouMAX polyester fiber acoustic panels are lightweight,
          sound-absorbing panels made from 100% polyester fiber and contain a
          maximum of 75% post-consumer recycled material (PET bottle flakes),
          reducing internal and external sound influences. Safe, eco-friendly,
          and available in multiple densities and thicknesses, they are ideal
          for flexible and creative interior acoustic solutions.
        </p>
      </ProductHero>

      <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 text-sky-950">
        <ProductCharacteristics />

        <div>
          <h2 className="font-lead text-lg sm:text-xl uppercase tracking-wide mb-8">
            Available in 10 Formats
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-6">
            {acoumaxVariants.map((variant) => (
              <Link
                key={variant.slug}
                href={`/products/architectural-acoustic/acoumax/${variant.slug}`}
                className="block h-full"
              >
                <Card
                  image={variant.cardImage}
                  title={variant.name}
                  subtitle={variant.description}
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                />
              </Link>
            ))}
          </div>
        </div>

        <ColorOptions />

        <div className="flex justify-center">
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
