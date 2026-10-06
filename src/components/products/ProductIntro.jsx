import Image from "next/image";
import clsx from "clsx";

// Two-column opener of a product detail page: copy (children) beside a
// three-image gallery — two side by side, the third spanning both columns.
function ProductIntro({ images, children }) {
  return (
    <section className="px-6 sm:px-10 lg:px-20 pt-16 pb-8 lg:pb-16 text-sky-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center items-start order-2 lg:order-1">
          {children}
        </div>

        <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
          {images.map((image, i) => {
            const wide = i === 2;
            return (
              <Image
                key={i}
                src={image.src}
                alt={image.alt}
                sizes={
                  wide
                    ? "(min-width: 1024px) 50vw, 100vw"
                    : "(min-width: 1024px) 25vw, 50vw"
                }
                className={clsx(
                  "w-full object-cover",
                  wide ? "h-32 sm:h-56 col-span-2" : "h-48 sm:h-64",
                  image.className,
                )}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductIntro;
