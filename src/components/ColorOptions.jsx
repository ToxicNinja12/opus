import swatches1 from "../assets/products/acou-max/colors-1.jpg";
import swatches2 from "../assets/products/acou-max/colors-2.jpg";
import swatches3 from "../assets/products/acou-max/colors-3.jpg";

function ColorOptions() {
  return (
    <div className="mb-8 mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-y-0">
        <img
          src={swatches1}
          alt="AcouMAX color swatches, page 1 of 3"
          className="w-full object-contain order-1 lg:order-2"
        />
        <img
          src={swatches2}
          alt="AcouMAX color swatches, page 2 of 3"
          className="w-full object-contain order-2 lg:order-1"
        />
        <img
          src={swatches3}
          alt="AcouMAX color swatches, page 3 of 3"
          className="w-full object-contain order-3"
        />
      </div>
    </div>
  );
}

export default ColorOptions;
