import { notFound } from "next/navigation";

import ProductHero from "@/components/products/ProductHero";
import ProductIntro from "@/components/products/ProductIntro";
import BulletList from "@/components/ui/BulletList";
import FaqList from "@/components/ui/FaqList";
import NumberedList from "@/components/ui/NumberedList";
import { acoufabSystems, getAcoufabSystem } from "@/content/acoufab";

export const dynamicParams = false;

export function generateStaticParams() {
  return acoufabSystems.map((system) => ({ system: system.slug }));
}

export default async function AcouFabSystemPage({ params }) {
  const { system: slug } = await params;
  const system = getAcoufabSystem(slug);
  if (!system) notFound();

  return (
    <>
      <ProductHero
        backHref="/products/architectural-acoustic/acoufab"
        backLabel="AcouFAB"
        title={system.title}
        subtitle={system.subtitle}
      />

      <ProductIntro images={system.images}>
        <h2 className="font-lead text-xl sm:text-2xl mb-6">
          {system.introHeading}
        </h2>
        {system.intro.map((paragraph, i) => (
          <p
            key={i}
            className={
              i === system.intro.length - 1
                ? "leading-relaxed text-slate-600"
                : "leading-relaxed text-slate-600 mb-6"
            }
          >
            {paragraph}
          </p>
        ))}
      </ProductIntro>

      <section className="bg-primary-light px-6 sm:px-10 lg:px-20 py-16 text-primary-dark">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          {system.stepsHeading}
        </h2>
        <NumberedList
          items={system.steps}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8"
        />
      </section>

      <section className="px-6 sm:px-10 lg:px-20 py-16 text-sky-950">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          Key Features & Benefits
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="py-3 pr-6 font-semibold">Feature</th>
                <th className="py-3 font-semibold">Benefit</th>
              </tr>
            </thead>
            <tbody>
              {system.features.map((row) => (
                <tr key={row.feature} className="border-b border-slate-200">
                  <td className="py-3 pr-6 text-sm text-slate-600">
                    {row.feature}
                  </td>
                  <td className="py-3 text-sm text-slate-600">{row.benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-primary-light px-6 sm:px-10 lg:px-20 py-16 text-primary-dark">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          {system.applicationsHeading}
        </h2>
        <BulletList
          items={system.applications}
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3"
        />
      </section>

      <section className="px-6 sm:px-10 lg:px-20 py-16 text-sky-950">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          Frequently Asked Questions
        </h2>
        <FaqList faqs={system.faqs} />
      </section>

      <section className="bg-primary-light px-6 sm:px-10 lg:px-20 py-16 text-primary-dark text-center">
        <h2 className="font-lead text-2xl sm:text-3xl mb-4 max-w-2xl mx-auto">
          {system.cta.heading}
        </h2>
        <p className="max-w-2xl mx-auto leading-relaxed text-slate-600 mb-8">
          {system.cta.text}
        </p>
        <a href="#" className="inline-block bg-primary text-sky-50 px-6 py-4">
          {system.cta.label}
        </a>
      </section>
    </>
  );
}
