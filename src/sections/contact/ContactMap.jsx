function ContactMap() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 text-sky-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        <div>
          <h3 className="font-lead mb-4">Dubai HQ</h3>
          <iframe
            title="Opus Acoustic Dubai HQ location"
            src="https://www.google.com/maps?q=Al+Saheel+Tower+1,+Al+Nahda+1,+Dubai,+UAE&output=embed"
            className="w-full h-64 sm:h-80 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div>
          <h3 className="font-lead mb-4">European Office</h3>
          <iframe
            title="Opus Acoustic Europe office location"
            src="https://www.google.com/maps?q=Avenida+Maisonnave+41,+03003+Alicante,+Spain&output=embed"
            className="w-full h-64 sm:h-80 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactMap;
