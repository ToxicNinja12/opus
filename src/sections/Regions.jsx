function Regions() {
  return (
    <section
      className="text-sky-950 px-6 sm:px-10 lg:px-20 pt-12 pb-20 lg:pb-32"
      id="our-locations"
    >
      <div className="">
        <h2 className="font-lead text-xl sm:text-2xl mb-8">
          We have a global presence.
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-between">
          <li
            className="bg-slate-100 p-4 flex flex-col gap-4 justify-between"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <p itemProp="name" className="font-semibold">
              UAE Head Office
            </p>
            <div className="text-sm text-slate-500">
              <address
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
                className="not-italic mb-2"
              >
                <span itemProp="streetAddress">
                  Office 403, 4th Floor, Al Saheel Tower 1, Al Nahda 1
                </span>
                <br />
                <span itemProp="addressLocality">Dubai</span>,{" "}
                <span itemProp="addressCountry">UAE</span>
              </address>
              <p>
                Phone:{" "}
                <a
                  href="tel:+971508265672"
                  itemProp="telephone"
                  className="hover:text-sky-950 transition-colors"
                >
                  +971 50 826 5672
                </a>{" "}
                ·{" "}
                <a
                  href="tel:+97145646778"
                  className="hover:text-sky-950 transition-colors"
                >
                  (04) 564 6778
                </a>
              </p>
            </div>
          </li>

          <li
            className="bg-slate-100 p-4 flex flex-col gap-4"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <p itemProp="name" className="font-semibold">
              European Branch — OPUS Europe Global SL / OPUS Europe SL
            </p>
            <div className="text-sm text-slate-500">
              <address
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
                className="not-italic mb-2"
              >
                <span itemProp="streetAddress">
                  Avenida Maisonnave, nº 41, 3º H
                </span>
                <br />
                <span itemProp="postalCode">03003</span>,{" "}
                <span itemProp="addressCountry">Spain</span>
              </address>
              <p className="mb-1">
                Phone:{" "}
                <a
                  href="tel:+37120272167"
                  itemProp="telephone"
                  className="hover:text-sky-950 transition-colors"
                >
                  +371 2027 2167
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:Jashim@opuseurope.eu"
                  itemProp="email"
                  className="hover:text-sky-950 transition-colors"
                >
                  Jashim@opuseurope.eu
                </a>{" "}
                ·{" "}
                <a
                  href="mailto:rasheed@opusbm.com"
                  className="hover:text-sky-950 transition-colors"
                >
                  rasheed@opusbm.com
                </a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Regions;
