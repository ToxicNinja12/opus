import logo1 from "../assets/clients/logo-adnoc.png";
import logo2 from "../assets/clients/logo-bmw.png";
import logo3 from "../assets/clients/logo-gems.png";
import logo4 from "../assets/clients/logo-ministry.png";

function Testimonials() {
  const logos = [logo1, logo2, logo3, logo4];

  return (
    <section className="py-12">
      <h2 className="font-lead text-sky-950 text-center text-xl mb-4">
        Trusted by
      </h2>
      <div className="flex justify-center items-center gap-12 h-18">
        {logos.map((logo) => (
          <img
            src={logo}
            alt=""
            className="h-full grayscale-100 brightness-125 contrast-50"
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
