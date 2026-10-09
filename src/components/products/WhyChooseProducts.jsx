import NumberedList from "@/components/ui/NumberedList";

function WhyChooseProducts() {
  const items = [
    {
      title: "Global Manufacturing Partnerships",
      description: "Sourced from leading international acoustic manufacturers.",
    },
    {
      title: "International Standard Compliance",
      description:
        "Every acoustic system and material is specified and installed to meet recognized global acoustic standards.",
    },
    {
      title: "Eco-Friendly & Sustainable Materials",
      description:
        "Low-impact, sustainably manufactured acoustic panels supporting green building certifications.",
    },
  ];

  return (
    <section className="bg-primary-light text-primary-dark px-6 sm:px-10 lg:px-20 py-16 lg:py-24">
      <h2 className="font-lead text-2xl sm:text-3xl mb-10 lg:mb-16 max-w-2xl">
        Why Choose Opus Acoustic Products
      </h2>

      <NumberedList
        items={items}
        className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-8"
      />
    </section>
  );
}

export default WhyChooseProducts;
