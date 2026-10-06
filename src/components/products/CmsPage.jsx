import clsx from "clsx";

import Sections from "@/components/sections/Sections";
import { paragraphs } from "@/components/sections/RichText";

import ProductHero from "./ProductHero";

// A page built in the CMS: the banner, then its sections in order. The site
// header and footer come from the layouts around it.
function CmsPage({ page, sections, kind, back, subpages, basePath }) {
  const intro = paragraphs(page.description);
  return (
    <>
      <ProductHero
        backHref={back.href}
        backLabel={back.label}
        title={page.title}
        subtitle={page.subtitle}
        compact={page.banner === "compact"}
      >
        {intro.length
          ? intro.map((paragraph, i) => (
              <p
                key={i}
                className={clsx(
                  "max-w-2xl leading-relaxed text-sky-50/80",
                  i < intro.length - 1 && "mb-4",
                )}
              >
                {paragraph}
              </p>
            ))
          : null}
      </ProductHero>

      <Sections
        sections={sections}
        kind={kind}
        subpages={subpages}
        basePath={basePath}
      />
    </>
  );
}

export default CmsPage;
