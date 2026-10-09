import Image from "next/image";
import clsx from "clsx";

import { inline, paragraphs } from "./RichText";

const POSITION = { top: "object-top", bottom: "object-bottom" };

// Two side by side, a third running full width beneath; a lone image takes
// the whole column. `eager` is for a gallery at the top of the page, where
// the images are the first thing a visitor sees.
function Gallery({ images, eager }) {
  return (
    <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
      {images.map((image, i) => {
        const wide = i === 2 || images.length === 1;
        return (
          <Image
            key={i}
            src={image}
            alt={image.alt}
            loading={eager ? "eager" : "lazy"}
            sizes={
              wide
                ? "(min-width: 1024px) 50vw, 100vw"
                : "(min-width: 1024px) 25vw, 50vw"
            }
            className={clsx(
              "w-full object-cover",
              images.length === 1
                ? "h-64 sm:h-96 col-span-2"
                : wide
                  ? "h-32 sm:h-56 col-span-2"
                  : "h-48 sm:h-64",
              POSITION[image.position],
            )}
          />
        );
      })}
    </div>
  );
}

// Heading and copy beside a small gallery.
function Intro({ data, className, first }) {
  const body = paragraphs(data.body);
  const images = (data.images ?? []).map((item) => item.image).filter(Boolean);
  // Space under the last paragraph depends on what follows it.
  const lastGap = data.bestFor ? "mb-6" : data.buttonLabel ? "mb-8" : "";

  const copy = (
    <>
      {data.heading ? (
        <h2 className="font-lead text-xl sm:text-2xl mb-6">{data.heading}</h2>
      ) : null}
      {data.tagline ? (
        <p className="text-primary font-lead mb-4">{data.tagline}</p>
      ) : null}
      {body.map((paragraph, i) => (
        <p
          key={i}
          className={clsx(
            "leading-relaxed text-slate-600",
            i === body.length - 1 ? lastGap : "mb-6",
          )}
        >
          {inline(paragraph)}
        </p>
      ))}
      {data.bestFor ? (
        <p className="text-slate-500 mb-8 sm:mb-10 lg:mb-12">
          <span className="font-semibold text-sky-950">Best for:</span>{" "}
          {data.bestFor}
        </p>
      ) : null}
      {data.buttonLabel ? (
        <a
          href={data.buttonHref || "#"}
          className="text-center bg-primary text-sky-50 px-6 py-4"
        >
          {data.buttonLabel}
        </a>
      ) : null}
    </>
  );

  return (
    <section className={className}>
      {images.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-start order-2 lg:order-1">
            {copy}
          </div>
          <Gallery images={images} eager={first} />
        </div>
      ) : (
        <div className="flex flex-col items-start max-w-3xl">{copy}</div>
      )}
    </section>
  );
}

export default Intro;
