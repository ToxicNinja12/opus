import Card from "@/components/ui/Card";
import acouMax from "@/assets/products/acou-max.jpg";
import acouFab from "@/assets/products/acou-fab.png";
import acouWood from "@/assets/products/acou-wood.avif";
import acouSlats from "@/assets/products/wooden-Slatted-Panel.webp";
import acousticSpray from "@/assets/products/acoustic-spray.png";
import acouWool from "@/assets/products/acouwool.jpeg";
import acouBamboo from "@/assets/products/acou-bamboo.jpg"; // TODO: needs real image

const sizes = "(min-width: 1024px) 25vw, 50vw";

function Products() {
  return (
    <section className="text-primary-dark bg-primary-light px-6 sm:px-10 lg:px-20 pt-16 sm:pt-20 lg:pt-32 pb-16">
      <div className="mb-10">
        <h2 className="font-lead text-xl">View our products</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-fr gap-x-4 sm:gap-x-8 lg:gap-x-16 gap-y-6 sm:gap-y-8">
        <Card
          image={acouMax}
          title="AcouMAX"
          subtitle="Polyester Fibre Panel"
          sizes={sizes}
        />
        <Card
          image={acouFab}
          title="AcouFAB"
          subtitle="Stretch Fabric Panel"
          sizes={sizes}
        />
        <Card
          image={acouWood}
          title="AcouWOOD"
          subtitle="Acoustic Wooden Perforated Panel"
          sizes={sizes}
        />
        <Card
          image={acouSlats}
          title="AcouSLATS"
          subtitle="Wooden Slatted Panel"
          sizes={sizes}
        />
        <Card
          image={acousticSpray}
          title="Acoustic Spray"
          subtitle="Cellulose Acoustic Spray"
          sizes={sizes}
        />
        <Card
          image={acouWool}
          title="AcouWOOL"
          subtitle="Acoustic Wood Wool Panel"
          sizes={sizes}
        />
        <Card
          image={acouBamboo}
          title="AcouBAMBOO"
          subtitle="Sustainable Bamboo Acoustic Panel"
          sizes={sizes}
        />
        <Card
          title="View all our acoustic solutions"
          subtitle="See more &rarr;"
          location="/products/architectural-acoustic"
          onlyText
        />
      </div>
    </section>
  );
}

export default Products;
