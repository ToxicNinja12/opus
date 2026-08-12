import Logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-secondary pt-16 sm:pt-20 lg:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
          {/* Column 1 — Brand */}
          <div className="w-full md:w-[45%] lg:w-[25%] flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#">
              <img src={Logo} alt="Opus Acoustics Logo" width={180} />
            </a>
            <p className="text-sm text-sky-50 mt-6">
              Engineering sound for modern spaces
            </p>
            <p className="text-sm text-sky-50/60 mt-2">
              Established 2019 · 5+ years of acoustic expertise
            </p>
            <address className="not-italic text-sm text-sky-50/60 mt-4 leading-relaxed">
              Office 403, 4th Floor, Al Saheel Tower 1,
              <br />
              Al Nahda 1, Dubai, UAE
            </address>
          </div>

          {/* Column 2 — Products */}
          <div className="w-full md:w-[45%] lg:w-[18%] flex flex-col items-center md:items-start text-center md:text-left">
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
              <a
                href="#"
                className="text-sm text-sky-50 font-semibold hover:text-sky-50/80 transition-colors mt-1"
              >
                View all products &rarr;
              </a>
            </div>
          </div>

          {/* Column 3 — Company / Quick Links */}
          <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm text-sky-50 font-lead">Company</h3>
            <div className="flex flex-col gap-2 mt-6">
              <a
                href="#about-us"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                About Us
              </a>
              <a
                href="#our-services"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                Career
              </a>
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                Blog / Insights
              </a>
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Column 4 — Social Media */}
          <div className="w-full md:w-[45%] lg:w-[12%] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm text-sky-50 font-lead">Social Media</h3>
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
                Twitter / X
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
                TikTok
              </a>
              <a
                href="#"
                className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Column 5 — Contact */}
          <div className="w-full md:w-[45%] lg:w-[20%] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm text-sky-50 font-lead">Contact</h3>
            <div className="flex flex-col gap-4 mt-6">
              <div>
                <p className="text-sm text-sky-50 mb-1">UAE Head Office</p>
                <address className="not-italic text-sm text-sky-50/60 leading-relaxed mb-1">
                  Office 403, 4th Floor, Al Saheel Tower 1,
                  <br />
                  Al Nahda 1, Dubai, UAE
                </address>
                <a
                  href="tel:+971508265672"
                  className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors block"
                >
                  Phone: +971 50 826 5672
                </a>
                <a
                  href="tel:+97145646778"
                  className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors block"
                >
                  +971 4 564 6778
                </a>
              </div>

              <div>
                <p className="text-sm text-sky-50 mb-1">
                  European Branch — OPUS Europe Global SL / OPUS Europe SL
                </p>
                <address className="not-italic text-sm text-sky-50/60 leading-relaxed mb-1">
                  Avenida Maisonnave, nº 41, 3º H,
                  <br />
                  03003, Spain
                </address>
                <a
                  href="tel:+37120272167"
                  className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors block mb-1"
                >
                  Phone: +371 2027 2167
                </a>
                <a
                  href="mailto:Jashim@opuseurope.eu"
                  className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors block"
                >
                  Email: Jashim@opuseurope.eu
                </a>
                <a
                  href="mailto:rasheed@opusbm.com"
                  className="text-sm text-sky-50/60 hover:text-sky-50 transition-colors block"
                >
                  rasheed@opusbm.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 lg:mt-16">
          <p className="text-xs text-sky-50/60">
            © 2026 Opus UAE &mdash; All Rights Reserved
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xs text-sky-50/60 hover:text-sky-50 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-sky-50/60 hover:text-sky-50 transition-colors"
            >
              Terms
            </a>
            <p className="text-xs text-sky-50/60">
              Designed by 4Biz International LLC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
