import Image from "next/image";

import swatches1 from "@/assets/products/acou-max/colors-1.jpg";
import swatches2 from "@/assets/products/acou-max/colors-2.jpg";
import swatches3 from "@/assets/products/acou-max/colors-3.jpg";
import swatches4 from "@/assets/products/acou-max/colors-4.jpg";

function SwatchSheet({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      sizes="100vw"
      className="w-full object-contain"
      // Height follows the source file's exact proportions rather than those
      // of the resized copy Next serves, which rounds to whole pixels.
      style={{ aspectRatio: `${src.width} / ${src.height}` }}
    />
  );
}

function ColorOptions() {
  return (
    <div className="mb-8 mt-12">
      {/* Mobile and Tablet: Original stacked layout */}
      <div className="flex flex-col gap-6 lg:hidden">
        <SwatchSheet
          src={swatches1}
          alt="AcouMAX color swatches, page 1 of 3"
        />
        <SwatchSheet
          src={swatches2}
          alt="AcouMAX color swatches, page 2 of 3"
        />
        <SwatchSheet
          src={swatches3}
          alt="AcouMAX color swatches, page 3 of 3"
        />
      </div>

      {/* Laptop and Desktop: Single combined image */}
      <div className="hidden lg:block">
        <SwatchSheet src={swatches4} alt="AcouMAX all color swatches" />
      </div>
    </div>
  );
}

export default ColorOptions;
