import { useState } from "react";

const ENQUIRY_TYPES = [
  "Acoustic Consultancy",
  "Product Specification",
  "Quote Request",
  "General Enquiry",
];

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    enquiryType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to your form endpoint / email service
    console.log(form);
  };

  return (
    <section className="bg-primary-light px-6 sm:px-10 lg:px-20 py-16 lg:py-24 text-primary-dark">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-lead text-2xl sm:text-3xl mb-10 text-center">
          Email Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="bg-white border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="bg-white border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-semibold">
              Contact Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+971 50 123 4567"
              className="bg-white border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="enquiryType" className="text-sm font-semibold">
              What do you need help with?
            </label>
            <select
              id="enquiryType"
              name="enquiryType"
              value={form.enquiryType}
              onChange={handleChange}
              className="bg-white border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-primary"
            >
              <option value="">Select an option</option>
              {ENQUIRY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="subject" className="text-sm font-semibold">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="How can we help?"
              required
              className="bg-white border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="message" className="text-sm font-semibold">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your acoustic project..."
              className="bg-white border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none"
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="bg-primary text-sky-50 px-6 py-4 w-full sm:w-fit"
            >
              Send Message &rarr;
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
