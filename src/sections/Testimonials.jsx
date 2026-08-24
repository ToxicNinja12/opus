import logo1 from "../assets/clients/logo-adnoc.png";
import logo2 from "../assets/clients/logo-bmw.png";
import logo3 from "../assets/clients/logo-gems.png";
import logo4 from "../assets/clients/logo-ministry.png";
import logo5 from "../assets/clients/logo-khda.png";
import logo6 from "../assets/clients/logo-arla.png";
import logo7 from "../assets/clients/logo-dubai-british-school.png";
import logo8 from "../assets/clients/logo-fujifilm.png";
import logo9 from "../assets/clients/logo-nakheel.png";
import logo10 from "../assets/clients/logo-dana-gas.png";
import logo11 from "../assets/clients/logo-lycee-francais.png";
import logo12 from "../assets/clients/logo-red-sea-international.png";
import logo13 from "../assets/clients/logo-miral-studio.png";
import logo14 from "../assets/clients/logo-aquila-school.png";
import logo15 from "../assets/clients/logo-justlife.png";

function Testimonials() {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
  ];

  return (
    <section className="text-sky-950 px-6 sm:px-10 lg:px-20 py-12 lg:py-16">
      <h2 className="font-lead text-center text-xl mb-2">Our Clients</h2>
      <p className="text-center text-sm text-slate-500 mb-10">
        Trusted by 40+ leading companies across global markets
      </p>

      <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="group relative flex items-center justify-center h-24 sm:h-28 lg:h-32 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(0,0,0,0.08)]"
          >
            <img
              src={logo}
              alt="Client logo"
              className="max-w-[65%] max-h-[45%] object-contain transition-transform duration-300 ease-out group-hover:scale-110"
              style={{
                filter:
                  "contrast(25%) sepia(100%) hue-rotate(180deg) saturate(100%)",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
