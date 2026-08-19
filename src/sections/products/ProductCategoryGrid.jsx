import Card from "../../components/Card";
import PanelsImg from "../../assets/products/acou-fab.png";
import PartitionsImg from "../../assets/products/acoustic-glass-partition.jpg";
import CeilingsImg from "../../assets/featured/mesh-ceiling.jpg";
import NoiseControlImg from "../../assets/featured/sound-attenators.jpg";
import FurnitureImg from "../../assets/featured/acoustic-chairs.jpg";
import MonitoringImg from "../../assets/featured/noise-survey.jpg";

import acousticSpray from "../../assets/products/acoustic-spray.png";
import acouMax from "../../assets/products/acou-max.jpg";
import acouFab from "../../assets/products/acou-fab.png";
import acouWood from "../../assets/products/acou-wood.avif";
import acouWool from "../../assets/products/acouwool.jpeg";
import acouSlats from "../../assets/products/wooden-Slatted-Panel.webp";
import acousticGlassPartition from "../../assets/products/acoustic-glass-partition.jpg";
import polyurethaneFoam from "../../assets/featured/diffuser-foam.jpg";
import acousticEnclosure from "../../assets/featured/enclosure.jpg";
import patchDividers from "../../assets/featured/patch-divider.jpg";
import acousticMeshCeiling from "../../assets/featured/mesh-ceiling.jpg";
import acousticMetalCeiling from "../../assets/featured/mesh-ceiling.jpg";
import acousticFlooring from "../../assets/products/acouwool.jpeg";
import noiseBarriers from "../../assets/featured/noise-sound-barrier.jpg";
import soundAttenuators from "../../assets/featured/sound-attenuator-rectangular.jpg";
import acousticLouvers from "../../assets/featured/sound-attenators.jpg";
import acousticFurnitures from "../../assets/featured/acoustic-chairs.jpg";
import environmentNoiseMonitoring from "../../assets/featured/environment-noise-monitoring.jpg";
import siteInspection from "../../assets/featured/site-inspection.jpeg";
import noiseMapping from "../../assets/featured/noise-mapping.jpg";
import noiseSurvey from "../../assets/featured/noise-survey.jpg";

import { Link } from "react-router-dom";

export const categories = [
  {
    slug: "acoustic-panels-materials",
    image: PanelsImg,
    title: "Acoustic Panels & Materials",
    blurb:
      "Wall and ceiling panels engineered for sound absorption across a range of finishes and forms.",
    items: [
      {
        name: "AcouMAX",
        description: "Polyester fibre acoustic panel for walls and ceilings.",
        image: acouMax,
      },
      {
        name: "AcouFAB",
        description:
          "Stretch fabric acoustic panel for a seamless, tailored finish.",
        image: acouFab,
      },
      {
        name: "AcouWOOD",
        description:
          "Acoustic wooden perforated panel combining natural aesthetics with sound absorption.",
        image: acouWood,
      },
      {
        name: "AcouWOOL",
        description:
          "Acoustic wood wool panel for high-performance sound absorption.",
        image: acouWool,
      },
      {
        name: "AcouSLATS",
        description:
          "Wooden slatted acoustic panel for warm, architectural interiors.",
        image: acouSlats,
      },
      {
        name: "Acoustic Spray",
        description:
          "Cellulose acoustic spray finish for curved or irregular surfaces.",
        image: acousticSpray,
      },
      {
        name: "Polyurethane Foam",
        description:
          "High-density acoustic foam for targeted sound absorption.",
        image: polyurethaneFoam,
      },
    ],
  },
  {
    slug: "acoustic-partitions-enclosures",
    image: PartitionsImg,
    title: "Acoustic Partitions & Enclosures",
    blurb:
      "Space-dividing and noise-isolating systems for open-plan offices, meeting rooms, and equipment areas.",
    items: [
      {
        name: "Acoustic Glass Partition",
        description:
          "Soundproof glass partition for open-plan offices and meeting spaces.",
        image: acousticGlassPartition,
      },
      {
        name: "Acoustic Enclosure",
        description:
          "Enclosed acoustic units for isolating noise-generating equipment.",
        image: acousticEnclosure,
      },
      {
        name: "Patch Dividers",
        description: "Modular acoustic dividers for flexible space planning.",
        image: patchDividers,
      },
    ],
  },
  {
    slug: "acoustic-ceilings-flooring",
    image: CeilingsImg,
    title: "Acoustic Ceilings & Flooring",
    blurb:
      "Ceiling and floor systems that combine acoustic performance with architectural finish.",
    items: [
      {
        name: "Acoustic Metal Ceiling",
        description:
          "Durable metal ceiling systems with integrated acoustic performance.",
        image: acousticMetalCeiling,
      },
      {
        name: "Acoustic Mesh Ceiling",
        description:
          "Perforated mesh ceiling solution for combined design and acoustics.",
        image: acousticMeshCeiling,
      },
      {
        name: "Acoustic Flooring",
        description:
          "Sound-dampening flooring systems for impact and airborne noise control.",
        image: acousticFlooring,
      },
    ],
  },
  {
    slug: "noise-control-solutions",
    image: NoiseControlImg,
    title: "Noise Control Solutions",
    blurb:
      "Barriers, attenuators, and louvers engineered to manage environmental and mechanical noise.",
    items: [
      {
        name: "Noise Barriers",
        description:
          "Engineered barriers for site and environmental noise mitigation.",
        image: noiseBarriers,
      },
      {
        name: "Sound Attenuators",
        description: "Duct and ventilation attenuators for HVAC noise control.",
        image: soundAttenuators,
      },
      {
        name: "Acoustic Louvers",
        description:
          "Ventilated acoustic louvers balancing airflow and sound insulation.",
        image: acousticLouvers,
      },
    ],
  },
  {
    slug: "acoustic-furniture",
    image: FurnitureImg,
    title: "Acoustic Furniture",
    blurb:
      "Sound-absorbing furniture pieces designed for workplace and hospitality interiors.",
    items: [
      {
        name: "Acoustic Furnitures",
        description:
          "Sound-absorbing furniture pieces for workplace and hospitality interiors.",
        image: acousticFurnitures,
      },
    ],
  },
  {
    slug: "monitoring-survey-inspection",
    image: MonitoringImg,
    title: "Monitoring, Survey & Inspection",
    blurb:
      "Diagnostic and monitoring services that verify real-world acoustic performance.",
    items: [
      {
        name: "Environment Noise Monitoring",
        description:
          "Continuous environmental noise monitoring equipment and services.",
        image: environmentNoiseMonitoring,
      },
      {
        name: "Site Inspection",
        description:
          "On-site acoustic verification and post-installation performance checks.",
        image: siteInspection,
      },
      {
        name: "Noise Mapping",
        description:
          "Predictive noise mapping for architectural and industrial planning.",
        image: noiseMapping,
      },
      {
        name: "Noise Survey",
        description:
          "Baseline acoustic surveys to inform design and compliance.",
        image: noiseSurvey,
      },
    ],
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
          <Link key={category.slug} to={`/products/${category.slug}`}>
            <Card
              image={category.image}
              title={category.title}
              subtitle={category.blurb}
            />
          </Link>
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
