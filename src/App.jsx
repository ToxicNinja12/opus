import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Products from "./sections/Products";
import Featured from "./sections/Featured";
import Timeline from "./sections/Timeline";
import Regions from "./sections/Regions";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Hero />
      <About />
      {/* <Services />
      <Regions /> */}
      <Products />
      <Featured />
      <Timeline />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
