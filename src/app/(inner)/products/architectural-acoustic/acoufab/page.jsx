import ProductHero from "@/components/products/ProductHero";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import Card from "@/components/ui/Card";
import Link from "@/components/ui/Link";
import { acoufabSystems } from "@/content/acoufab";

export default function AcouFabPage() {
  return (
    <>
      <ProductHero
        backHref="/products/architectural-acoustic"
        backLabel="Architectural Acoustics"
        title={<>AcouFAB &mdash; Fabric Wrapped Acoustics</>}
      >
        <p className="max-w-2xl leading-relaxed text-sky-50/80">
          AcouFAB is an eco-friendly, stretch-fabric acoustical system that lets
          architects and designers meet exact acoustic specifications for any
          project. Installed on-site, it reduces sound reflections,
          reverberation, and overall noise levels within a space — improving
          speech intelligibility and acoustic comfort. Available across multiple
          mounting systems and finishes, AcouFAB combines high-performance sound
          absorption with a clean, tailored, design-forward look.
        </p>
      </ProductHero>

      <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 text-sky-950">
        <h2 className="font-lead text-lg sm:text-xl uppercase tracking-wide mb-8">
          Our AcouFAB Systems
        </h2>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          {acoufabSystems.map((system) => (
            <Link
              key={system.slug}
              href={`/products/architectural-acoustic/acoufab/${system.slug}`}
              className="block h-full"
            >
              <Card
                image={system.cardImage}
                title={system.name}
                subtitle={system.description}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            </Link>
          ))}
        </ol>
      </section>

      <section className="bg-primary-light px-6 sm:px-10 lg:px-20 py-16 lg:py-24 text-primary-dark">
        <h2 className="font-lead text-lg sm:text-xl uppercase tracking-wide mb-8">
          Frequently Asked Questions
        </h2>

        <Accordion>
          <AccordionItem
            title="Is AcouFAB fire-rated / non-flammable?"
            defaultOpen
          >
            Yes. AcouFAB systems are Class A – Non-Flammable, tested as per ASTM
            E-84, making them suitable for commercial and public spaces with
            strict fire safety requirements.
          </AccordionItem>
          <AccordionItem title="Can AcouFAB be installed on curved or irregular surfaces?">
            Yes. The PVC track and 3D wrapped systems can be adapted to a range
            of surface shapes, including curved walls and columns, making them
            suitable for creative and non-standard architectural layouts.
          </AccordionItem>
          <AccordionItem title="What fabric colors and finishes are available?">
            AcouFAB comes in a wide range of acoustic fabric colors and
            textures, allowing you to match brand palettes or interior design
            themes without compromising acoustic performance.
          </AccordionItem>
          <AccordionItem title="Is AcouFAB suitable for humid or high-moisture environments?">
            AcouFAB is best suited for indoor, climate-controlled environments.
            For humid or semi-outdoor applications, our team can recommend the
            right system and fabric specification — contact us for
            project-specific guidance.
          </AccordionItem>
          <AccordionItem title="How is AcouFAB maintained and cleaned?">
            The fabric surface can be maintained with regular dusting or gentle
            vacuuming. Avoid harsh chemicals or excessive moisture, as this may
            affect the fabric finish over time.
          </AccordionItem>
          <AccordionItem title="What's the typical lead time for custom sizes or colors?">
            Lead times vary depending on system type, size, and fabric
            selection. Contact our team with your project details for an
            accurate timeline and quote.
          </AccordionItem>
        </Accordion>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 text-sky-950 text-center">
        <h2 className="font-lead text-2xl sm:text-3xl mb-4 max-w-2xl mx-auto">
          Transform Your Space with AcouFAB
        </h2>
        <p className="max-w-2xl mx-auto leading-relaxed text-slate-600 mb-8">
          From open-plan offices to auditoriums and hospitality interiors,
          AcouFAB delivers acoustic performance without compromising on design.
          Talk to our team to find the right fabric-wrapped system for your next
          project.
        </p>
        <a href="#" className="inline-block bg-primary text-sky-50 px-6 py-4">
          Contact Us &rarr;
        </a>
      </section>
    </>
  );
}
