import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import ContactHero from "../sections/contact/ContactHero";
import ContactCards from "../sections/contact/ContactCards";
import ContactForm from "../sections/contact/ContactForm";
import ContactMap from "../sections/contact/ContactMap";
import Footer from "../sections/Footer";

import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="bg-secondary text-sky-50 px-6 sm:px-10 lg:px-20 py-8 flex items-center justify-between">
        <Link to="/">
          <Logo className="mb-1" />
        </Link>
        <Navbar className="md:basis-xl" flexMode />
      </div>
      <ContactHero />
      <ContactCards />
      <ContactForm />
      <ContactMap />
      <Footer />
    </>
  );
}

export default Contact;
