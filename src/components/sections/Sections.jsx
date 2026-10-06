import Image from "next/image";
import clsx from "clsx";

import BulletList from "@/components/ui/BulletList";
import Card from "@/components/ui/Card";
import FaqList from "@/components/ui/FaqList";
import Link from "@/components/ui/Link";
import NumberedList from "@/components/ui/NumberedList";

import { ICONS } from "./icons";
import Intro from "./Intro";
import { inline, paragraphs } from "./RichText";
import { headingClass, sectionClass } from "./styles";

// One component per CMS section type (opus-cms/src/lib/section-types.js).
// Each gets the section's `data`, the wrapper `className` worked out from its
// settings, the `kind` of page it is on ("product" or "subpage"), and
// whether it is the `first` section on that page.

function Heading({ kind, tight, children }) {
  return children ? (
    <h2 className={headingClass(kind, tight)}>{children}</h2>
  ) : null;
}

function Text({ data, className, kind }) {
  const body = paragraphs(data.body);
  return (
    <section className={className}>
      <Heading kind={kind} tight>
        {data.heading}
      </Heading>
      {body.map((paragraph, i) => (
        <p
          key={i}
          className={clsx(
            "max-w-3xl leading-relaxed text-slate-600",
            i < body.length - 1 && "mb-4",
          )}
        >
          {inline(paragraph)}
        </p>
      ))}
    </section>
  );
}

function Bullets({ data, className, kind }) {
  return (
    <section className={className}>
      <Heading kind={kind}>{data.heading}</Heading>
      <BulletList
        items={data.items}
        className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3"
      />
    </section>
  );
}

function Columns({ data, className, kind }) {
  return (
    <section className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {data.columns.map((column, i) => {
          const body = paragraphs(column.text);
          return (
            <div key={i}>
              <Heading kind={kind} tight>
                {column.heading}
              </Heading>
              {column.kind === "text" ? (
                body.map((paragraph, j) => (
                  <p
                    key={j}
                    className={clsx(
                      "leading-relaxed text-slate-600",
                      j < body.length - 1 && "mb-4",
                    )}
                  >
                    {inline(paragraph)}
                  </p>
                ))
              ) : (
                <BulletList items={column.items} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Four across by default; three when that leaves no awkward remainder.
const STEP_COLUMNS = {
  1: "lg:grid-cols-2",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  5: "lg:grid-cols-3",
  6: "lg:grid-cols-3",
  9: "lg:grid-cols-3",
};

function Steps({ data, className, kind }) {
  return (
    <section className={className}>
      <Heading kind={kind}>{data.heading}</Heading>
      <NumberedList
        items={data.items}
        className={clsx(
          "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8",
          STEP_COLUMNS[data.items.length] ?? "lg:grid-cols-4",
        )}
      />
    </section>
  );
}

function Table({ data, className, kind }) {
  return (
    <section className={className}>
      <Heading kind={kind}>{data.heading}</Heading>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-300">
              <th className="py-3 pr-6 font-semibold">{data.columnA}</th>
              <th className="py-3 font-semibold">{data.columnB}</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, i) => (
              <tr key={i} className="border-b border-slate-200">
                <td className="py-3 pr-6 text-sm text-slate-600">{row.a}</td>
                <td className="py-3 text-sm text-slate-600">{row.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Faq({ data, className, kind }) {
  return (
    <section className={className}>
      <Heading kind={kind}>{data.heading}</Heading>
      <FaqList faqs={data.items} />
    </section>
  );
}

function Cta({ data, className }) {
  const href = data.buttonHref || "#";
  if (!data.heading && !data.text)
    return data.buttonLabel ? (
      <section className={clsx("flex justify-center", className)}>
        <a
          href={href}
          className="inline-block text-center bg-primary text-sky-50 px-6 py-4"
        >
          {data.buttonLabel}
        </a>
      </section>
    ) : null;

  return (
    <section className={clsx(className, "text-center")}>
      {data.heading ? (
        <h2 className="font-lead text-2xl sm:text-3xl mb-4 max-w-2xl mx-auto">
          {data.heading}
        </h2>
      ) : null}
      {data.text ? (
        <p className="max-w-2xl mx-auto leading-relaxed text-slate-600 mb-8">
          {data.text}
        </p>
      ) : null}
      {data.buttonLabel ? (
        <a
          href={href}
          className="inline-block bg-primary text-sky-50 px-6 py-4"
        >
          {data.buttonLabel}
        </a>
      ) : null}
    </section>
  );
}

function Characteristics({ data, className, kind }) {
  return (
    <section className={className}>
      <Heading kind={kind}>{data.heading}</Heading>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
        {data.items.map((item, i) => {
          const Icon = ICONS[item.icon] ?? ICONS.Sparkles;
          return (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-14 h-14 bg-slate-100 flex items-center justify-center text-primary">
                <Icon size={22} />
              </div>
              <p className="text-xs uppercase tracking-wide text-slate-600">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const CARD_LAYOUT = {
  compact: {
    grid: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-6",
    sizes: "(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw",
  },
  large: {
    grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  },
};

// The cards of a product's sub-pages. A card links only once its page is live.
function SubpageCards({ data, className, kind, subpages = [], basePath }) {
  const layout = CARD_LAYOUT[data.layout] ?? CARD_LAYOUT.compact;
  return (
    <section className={className}>
      <Heading kind={kind}>{data.heading}</Heading>
      <div className={layout.grid}>
        {subpages.map((subpage) => {
          const card = (
            <Card
              image={subpage.image}
              title={subpage.name}
              subtitle={subpage.description}
              sizes={layout.sizes}
            />
          );
          return subpage.hasPage ? (
            <Link
              key={subpage.slug}
              href={`${basePath}/${subpage.slug}`}
              className="block h-full"
            >
              {card}
            </Link>
          ) : (
            <div key={subpage.slug} className="h-full">
              {card}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FullWidthImage({ image }) {
  return (
    <Image
      src={image}
      alt={image.alt}
      sizes="100vw"
      className="w-full object-contain"
      // Height follows the stored image's exact proportions rather than those
      // of the resized copy Next serves, which rounds to whole pixels.
      style={{ aspectRatio: `${image.width} / ${image.height}` }}
    />
  );
}

// Images stacked at full width; optionally one wide image instead on large screens.
function Images({ data, className }) {
  const images = (data.images ?? []).map((item) => item.image).filter(Boolean);
  const stack = images.map((image, i) => (
    <FullWidthImage key={i} image={image} />
  ));
  return (
    <section className={className}>
      {data.desktopImage ? (
        <>
          <div className="flex flex-col gap-6 lg:hidden">{stack}</div>
          <div className="hidden lg:block">
            <FullWidthImage image={data.desktopImage} />
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-6">{stack}</div>
      )}
    </section>
  );
}

const COMPONENTS = {
  intro: Intro,
  text: Text,
  bullets: Bullets,
  columns: Columns,
  steps: Steps,
  table: Table,
  faq: Faq,
  cta: Cta,
  characteristics: Characteristics,
  subpages: SubpageCards,
  images: Images,
};

// Renders a CMS page body: its sections, in order. Types this build of the
// site doesn't know are skipped.
function Sections({ sections, kind, subpages, basePath }) {
  return sections.map((section, i) => {
    const Component = COMPONENTS[section.type];
    return Component ? (
      <Component
        key={i}
        data={section.data}
        className={sectionClass(section, kind)}
        kind={kind}
        first={i === 0}
        subpages={subpages}
        basePath={basePath}
      />
    ) : null;
  });
}

export default Sections;
