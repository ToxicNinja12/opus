import SiteHeader from "@/components/layout/SiteHeader";
import Link from "@/components/ui/Link";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <section className="bg-secondary text-sky-50 px-6 sm:px-10 lg:px-20 pt-16 sm:pt-20 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-primary mb-4">
            404
          </p>
          <h1 className="font-lead text-3xl sm:text-4xl lg:text-5xl mb-6">
            This page could not be found
          </h1>
          <p className="mb-8 leading-relaxed text-sky-50/80">
            The page may have moved, or it may not be published yet.
          </p>
          <Link
            href="/products"
            className="inline-block w-fit bg-primary text-sky-50 px-6 py-4"
          >
            Browse our products &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
