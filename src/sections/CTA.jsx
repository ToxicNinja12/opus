function CTA() {
  return (
    <section className="flex flex-col justify-center text-center px-20 pt-8 pb-32 text-sky-950">
      <div className="bg-primary-light px-8 py-16">
        <h2 className="font-lead font-bold text-2xl mb-2">Connect with us</h2>
        <p className="leading-snug mb-8">
          Let our team help you define your next space.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#" className="bg-primary text-sky-50 px-4 py-2">
            Request a call
          </a>
          <a href="#" className="border border-slate-300 px-4 py-2">
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
