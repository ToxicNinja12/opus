function CTA() {
  return (
    <section className="flex flex-col justify-center items-center px-20 pt-8 pb-16 text-sky-50">
      <div className="bg-secondary px-12 py-16 grid grid-cols-[3fr_2fr] gap-20 w-full lg:w-5xl">
        <div className="">
          <h2 className="font-lead font-bold text-4xl mb-4">
            Let’s design how your space should sound.
          </h2>
          <p className="leading-snug">
            Connect directly with our specialized acoustic engineering teams to
            help plan your next step.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 text-center">
          <a href="#" className="bg-primary text-sky-50 px-6 py-4">
            Request a call
          </a>
          <a href="#" className="border border-slate-500 px-6 py-4">
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
