import NumberedList from "@/components/ui/NumberedList";

function Advantage() {
  const items = [
    {
      title: "Quality Products",
      description:
        "Carefully selected acoustic materials suitable for demanding architectural and commercial applications.",
    },
    {
      title: "Technical Expertise",
      description:
        "Our team provides technical product selection, drawings, specifications and project support.",
    },
    {
      title: "Professional Installation",
      description:
        "Experienced installation teams ensure acoustic systems are installed according to approved details and project requirements.",
    },
    {
      title: "Project Support",
      description:
        "From enquiry and material selection through procurement, delivery and installation, we support the project at every stage.",
    },
    {
      title: "Custom Solutions",
      description:
        "We can offer customized colours, sizes, patterns and alternative materials to meet architectural and performance requirements.",
    },
  ];

  return (
    <section className="px-6 sm:px-10 lg:px-20 py-16 lg:pt-24 text-sky-950">
      <p className="text-xs sm:text-sm tracking-widest uppercase text-primary mb-4">
        Our Acoustic Advantage
      </p>
      <h2 className="font-lead text-2xl sm:text-3xl mb-10 lg:mb-16 max-w-2xl">
        Why Architects Choose Opus Acoustic
      </h2>

      <NumberedList
        items={items}
        className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-8"
      />
    </section>
  );
}

export default Advantage;
