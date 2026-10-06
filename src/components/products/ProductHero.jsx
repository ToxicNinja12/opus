import clsx from "clsx";

import Link from "@/components/ui/Link";

// Dark banner at the top of every page under /products/<category>. Detail
// pages pass a `subtitle`; overview pages pass their intro copy as children.
function ProductHero({
  backHref,
  backLabel,
  title,
  subtitle,
  compact = false,
  children,
}) {
  return (
    <section
      className={clsx(
        "bg-secondary text-sky-50 px-6 sm:px-10 lg:px-20 pt-8",
        compact ? "pb-12 lg:pb-16" : "pb-16 lg:pb-24",
      )}
    >
      <p className="text-sm text-sky-50/60 mb-6">
        <Link href={backHref} className="hover:text-sky-50 transition-colors">
          &larr; {backLabel}
        </Link>
      </p>
      {subtitle ? (
        <h1 className="font-lead text-3xl sm:text-4xl lg:text-5xl max-w-3xl">
          {title}
          <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl text-sky-50/80">
            {subtitle}
          </span>
        </h1>
      ) : (
        <h1 className="font-lead text-3xl sm:text-4xl lg:text-5xl mb-6 max-w-2xl">
          {title}
        </h1>
      )}
      {children}
    </section>
  );
}

export default ProductHero;
