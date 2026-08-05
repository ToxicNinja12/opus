import Logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-secondary pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
          <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#">
              <img src={Logo} alt="Opus Acoustics Logo" width={180} />
            </a>
            <p className="text-sm text-sky-50/60 mt-6 max-w-sm leading-relaxed">
              Established in 2019, Opus Building Materials LLC is unique in
              providing high-end interior and architectural specialty finishing
              products in highly demanding construction industry.
            </p>
          </div>

          <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm text-sky-50 font-lead">Products</h3>
            <div className="flex flex-col gap-2 mt-6">
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                Acoustic Consultancy Services
              </a>
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                Acoustic Metal Ceiling
              </a>
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                Acoustic Flooring
              </a>
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                Acoustic Spray
              </a>
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                Wood Wool Panels
              </a>
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                Polyester Fibre Panels
              </a>
            </div>
          </div>

          <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left basis-22">
            <h3 className="text-sm text-sky-50 font-lead">Social Links</h3>
            <div className="flex flex-col gap-2 mt-6">
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                Tiktok
              </a>
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                Linkedin
              </a>
            </div>
          </div>

          <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left basis-32">
            <h3 className="text-sm text-sky-50 font-lead">Contact</h3>
            <div className="flex flex-col gap-2 mt-6">
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                +971 508 265 672
              </a>
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                +971 4 564 6778
              </a>
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                sales@opusbm.com
              </a>
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors mt-1"
              >
                <address className="not-italic">
                  Office 403, Saheel 1<br />
                  Nahda 1, Dubai
                </address>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16">
          <p className="text-xs text-sky-50/60">
            © 2026 Opus UAE &mdash; All Rights Reserved
          </p>
          <p className="text-xs text-sky-50/60">
            Designed by 4Bizinternational
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
