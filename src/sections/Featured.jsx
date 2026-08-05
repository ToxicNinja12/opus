import Card from "../components/Card";
import prod1 from "../assets/featured/acoustic-chairs.jpg";
import prod2 from "../assets/featured/diffuser-foam.jpg";
import prod3 from "../assets/featured/enclosure.jpg";
import prod4 from "../assets/featured/environment-noise-monitoring.jpg";
import prod5 from "../assets/featured/site-inspection.jpeg";
import prod6 from "../assets/featured/sound-attenators.jpg";
import prod7 from "../assets/featured/noise-mapping.jpg";
import prod8 from "../assets/featured/mesh-ceiling.jpg";
import prod9 from "../assets/featured/noise-sound-barrier.jpg";
import prod10 from "../assets/featured/noise-survey.jpg";
import prod11 from "../assets/featured/patch-divider.jpg";
import prod12 from "../assets/featured/sound-attenuator-rectangular.jpg";

function Featured() {
  return (
    <section className="text-primary-dark bg-primary-light px-20 pt-16 pb-32">
      <div className="mb-10">
        <h2 className="font-lead text-xl">Featured solutions</h2>
      </div>
      <div className="grid grid-cols-6 grid-rows-2 gap-x-10 gap-y-6">
        <Card image={prod1} title="Acoustic Furnitures" small />
        <Card image={prod2} title="Polyurathene Foam" small />
        <Card image={prod3} title="Acoustic Enclosure" small />
        <Card image={prod4} title="Environment Noise Monitoring" small />
        <Card image={prod5} title="Site Inspection" small />
        <Card image={prod6} title="Acoustic Louvers" small />
        <Card image={prod7} title="Noise Mapping" small />
        <Card image={prod8} title="Acoustic Mesh Ceiling" small />
        <Card image={prod9} title="Noise Barriers" small />
        <Card image={prod10} title="Noise Survey" small />
        <Card image={prod11} title="Patch Dividers" small />
        <Card image={prod12} title="Sound Attenators" small />
      </div>
    </section>
  );
}

export default Featured;
