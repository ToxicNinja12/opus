import Card from "../components/Card";
import prod1 from "../assets/products/acoustic-spray.png";
import prod2 from "../assets/products/acou-max.jpg";
import prod3 from "../assets/products/acou-fab.png";
import prod4 from "../assets/products/acou-wood.avif";
import prod5 from "../assets/products/acouwool.jpeg";
import prod6 from "../assets/products/wooden-Slatted-Panel.webp";
import prod7 from "../assets/products/acoustic-glass-partition.jpg";

function Products() {
  return (
    <section className="text-primary-dark bg-primary-light px-6 sm:px-10 lg:px-20 pt-16 sm:pt-20 lg:pt-32 pb-16">
      <div className="mb-10">
        <h2 className="font-lead text-xl">View our products</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-fr gap-x-4 sm:gap-x-8 lg:gap-x-16 gap-y-6 sm:gap-y-8">
        <Card
          image={prod1}
          title="Acoustic Spray"
          subtitle="Cellulose Acoustic Spray"
        />
        <Card image={prod2} title="AcouMAX" subtitle="Polyester Fibre Panel" />
        <Card image={prod3} title="AcouFAB" subtitle="Stretch Fabric Panel" />
        <Card
          image={prod4}
          title="AcouWOOD"
          subtitle="Acoustic Wooden Perforated Panel"
        />
        <Card
          image={prod5}
          title="AcouWOOL"
          subtitle="Acoustic Wood Wool Panel"
        />
        <Card image={prod6} title="AcouSLATS" subtitle="Wooden Slatted Panel" />
        <Card
          image={prod7}
          title="Acoustic Glass Partition"
          subtitle="Soundproof Glass Partition"
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
