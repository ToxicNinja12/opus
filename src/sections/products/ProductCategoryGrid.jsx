import Card from "../../components/Card";
import PanelsImg from "../../assets/products/acou-fab.png";
import PartitionsImg from "../../assets/products/acoustic-glass-partition.jpg";
import CeilingsImg from "../../assets/featured/mesh-ceiling.jpg";
import NoiseControlImg from "../../assets/featured/sound-attenators.jpg";
import FurnitureImg from "../../assets/featured/acoustic-chairs.jpg";
import MonitoringImg from "../../assets/featured/noise-survey.jpg";

const categories = [
  {
    image: PanelsImg,
    title: "Acoustic Panels & Materials",
    blurb:
      "Wall and ceiling panels engineered for sound absorption across a range of finishes and forms.",
  },
  {
    image: PartitionsImg,
    title: "Acoustic Partitions & Enclosures",
    blurb:
      "Space-dividing and noise-isolating systems for open-plan offices, meeting rooms, and equipment areas.",
  },
  {
    image: CeilingsImg,
    title: "Acoustic Ceilings & Flooring",
    blurb:
      "Ceiling and floor systems that combine acoustic performance with architectural finish.",
  },
  {
    image: NoiseControlImg,
    title: "Noise Control Solutions",
    blurb:
      "Barriers, attenuators, and louvers engineered to manage environmental and mechanical noise.",
  },
  {
    image: FurnitureImg,
    title: "Acoustic Furniture",
    blurb:
      "Sound-absorbing furniture pieces designed for workplace and hospitality interiors.",
  },
  {
    image: MonitoringImg,
    title: "Monitoring, Survey & Inspection",
    blurb:
      "Diagnostic and monitoring services that verify real-world acoustic performance.",
  },
];

function ProductCategoryGrid() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 text-sky-950">
      <div className="mb-10 lg:mb-16">
        <h2 className="font-lead text-xl sm:text-2xl">Browse by Category</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {categories.map((category) => (
          <Card
            key={category.title}
            image={category.image}
            title={category.title}
            subtitle={category.blurb}
          />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
        <a
          href="#"
          className="inline-block text-center bg-primary text-sky-50 px-6 py-4"
        >
          View All Acoustic Solutions &rarr;
        </a>
        <a
          href="#"
          className="inline-block text-center border border-slate-300 px-6 py-4"
        >
          Request a Quote &rarr;
        </a>
      </div>
    </section>
  );
}

export default ProductCategoryGrid;
