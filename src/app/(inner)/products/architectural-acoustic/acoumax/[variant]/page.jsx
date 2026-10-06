import { notFound } from "next/navigation";

import ProductHero from "@/components/products/ProductHero";
import ProductIntro from "@/components/products/ProductIntro";
import BulletList from "@/components/ui/BulletList";
import FaqList from "@/components/ui/FaqList";
import { acoumaxVariants, getAcoumaxVariant } from "@/content/acoumax";

export const dynamicParams = false;

export function generateStaticParams() {
  return acoumaxVariants.map((variant) => ({ variant: variant.slug }));
}

export default async function AcouMaxVariantPage({ params }) {
  const { variant: slug } = await params;
  const variant = getAcoumaxVariant(slug);
  if (!variant) notFound();

  const { installationDetails } = variant;

  return (
    <>
      <ProductHero
        backHref="/products/architectural-acoustic/acoumax"
        backLabel="All Variants"
        title={variant.title}
        subtitle={variant.subtitle}
        compact
      />

      <ProductIntro images={variant.images}>
        <h2 className="font-lead text-xl sm:text-2xl mb-6">{variant.title}</h2>
        <p className="text-primary font-lead mb-4">{variant.tagline}</p>
        {variant.intro.map((paragraph, i) => (
          <p
            key={i}
            className={
              i === variant.intro.length - 1
                ? "leading-relaxed text-slate-600 mb-6"
                : "leading-relaxed text-slate-600 mb-4"
            }
          >
            {paragraph}
          </p>
        ))}
        <p className="text-slate-500 mb-8 sm:mb-10 lg:mb-12">
          <span className="font-semibold text-sky-950">Best for:</span>{" "}
          {variant.bestFor}
        </p>
        <a href="#" className="text-center bg-primary text-sky-50 px-6 py-4">
          Request a Quote &rarr;
        </a>
      </ProductIntro>

      <section className="px-6 sm:px-10 lg:px-20 py-16 text-sky-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h2 className="font-lead text-xl sm:text-2xl mb-6">Features</h2>
            <BulletList items={variant.features} />
          </div>

          <div>
            <h2 className="font-lead text-xl sm:text-2xl mb-6">Applications</h2>
            <BulletList items={variant.applications} />
          </div>
        </div>
      </section>

      <section className="bg-primary-light px-6 sm:px-10 lg:px-20 py-16 text-primary-dark">
        {installationDetails ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="font-lead text-xl sm:text-2xl mb-6">
                Installation
              </h2>
              <p className="leading-relaxed text-slate-600">
                {variant.installation}
              </p>
            </div>
            <div>
              <h2 className="font-lead text-xl sm:text-2xl mb-6">
                {installationDetails.heading}
              </h2>
              <BulletList items={installationDetails.items} />
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-lead text-xl sm:text-2xl mb-6">Installation</h2>
            <p className="max-w-3xl leading-relaxed text-slate-600">
              {variant.installation}
            </p>
          </>
        )}
      </section>

      <section className="px-6 sm:px-10 lg:px-20 py-16 text-sky-950">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          Frequently Asked Questions
        </h2>
        <FaqList faqs={variant.faqs} />
      </section>

      <section className="flex justify-center px-6 sm:px-10 lg:px-20 py-16">
        <a
          href="#"
          className="inline-block text-center bg-primary text-sky-50 px-6 py-4"
        >
          Request a Quote &rarr;
        </a>
      </section>
    </>
  );
}
