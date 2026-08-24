import Card from "../components/Card";
import acouMax from "../assets/products/acou-max.jpg";
import acouFab from "../assets/products/acou-fab.png";
import acouWood from "../assets/products/acou-wood.avif";
import acouSlats from "../assets/products/wooden-Slatted-Panel.webp";
import acousticSpray from "../assets/products/acoustic-spray.png";
import acouWool from "../assets/products/acouwool.jpeg";
import acouBamboo from "../assets/products/acou-bamboo.jpg"; // TODO: needs real image

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
        />
        <Card image={acouFab} title="AcouFAB" subtitle="Stretch Fabric Panel" />
        <Card
          image={acouWood}
          title="AcouWOOD"
          subtitle="Acoustic Wooden Perforated Panel"
        />
        <Card
          image={acouSlats}
          title="AcouSLATS"
          subtitle="Wooden Slatted Panel"
        />
        <Card
          image={acousticSpray}
          title="Acoustic Spray"
          subtitle="Cellulose Acoustic Spray"
        />
        <Card
          image={acouWool}
          title="AcouWOOL"
          subtitle="Acoustic Wood Wool Panel"
        />
        <Card
          image={acouBamboo}
          title="AcouBAMBOO"
          subtitle="Sustainable Bamboo Acoustic Panel"
        />
        <Card
          title="View all our acoustic solutions"
          subtitle="See more &rarr;"
          onlyText
        />
      </div>
    </section>
  );
}

export default Products;
