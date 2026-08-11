import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import AboutHero from "../sections/about/AboutHero";
import OurStory from "../sections/about/OurStory";
import Milestones from "../sections/about/Milestones";
import Advantage from "../sections/about/Advantage";
import AboutFAQ from "../sections/about/AboutFAQ";
import AboutCTA from "../sections/about/AboutCTA";
import Footer from "../sections/Footer";

import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <div className="bg-secondary text-sky-50 px-6 sm:px-10 lg:px-20 py-8 flex items-center justify-between">
        <Link to="/">
          <Logo className="mb-1" />
        </Link>
        <Navbar className="md:basis-xl" flexMode />
      </div>
      <AboutHero />
      <OurStory />
      <Milestones />
      <Advantage />
      <AboutFAQ />
      <AboutCTA />
      <Footer />
    </>
  );
}

export default AboutUs;
