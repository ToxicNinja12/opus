import swatches1 from "../assets/products/acou-max/colors-1.jpg";
import swatches2 from "../assets/products/acou-max/colors-2.jpg";
import swatches3 from "../assets/products/acou-max/colors-3.jpg";

function ColorOptions() {
  return (
    <div className="mb-16 lg:mb-24">
      <div className="flex flex-col gap-6">
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
    </div>
  );
}

export default ColorOptions;
