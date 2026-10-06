import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import AcousticSolutions from "@/components/home/AcousticSolutions";
import SiteInspection from "@/components/home/SiteInspection";
import Services from "@/components/home/Services";
import Products from "@/components/home/Products";
import Featured from "@/components/home/Featured";
import Timeline from "@/components/home/Timeline";
import Regions from "@/components/home/Regions";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      {/* <Services /> */}
      <AcousticSolutions />
      {/* <SiteInspection /> */}
      <Regions />
      <Products />
      <Featured />
      <Timeline />
      <Testimonials />
      <CTA />
      <FAQ />
    </>
  );
}
