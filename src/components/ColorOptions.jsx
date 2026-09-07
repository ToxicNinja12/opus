import swatches1 from "../assets/products/acou-max/colors-1.jpg";
import swatches2 from "../assets/products/acou-max/colors-2.jpg";
import swatches3 from "../assets/products/acou-max/colors-3.jpg";
import swatches4 from "../assets/products/acou-max/colors-4.jpg";

function ColorOptions() {
  return (
    <div className="mb-8 mt-12">
      {/* Mobile and Tablet: Original stacked layout */}
      <div className="flex flex-col gap-6 lg:hidden">
        <img
          src={swatches1}
          alt="AcouMAX color swatches, page 1 of 3"
          className="w-full object-contain"
        />
        <img
          src={swatches2}
          alt="AcouMAX color swatches, page 2 of 3"
          className="w-full object-contain"
        />
        <img
          src={swatches3}
          alt="AcouMAX color swatches, page 3 of 3"
          className="w-full object-contain"
        />
      </div>

      {/* Laptop and Desktop: Single combined image */}
      <div className="hidden lg:block">
        <img
          src={swatches4}
          alt="AcouMAX all color swatches"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
}

export default ColorOptions;
