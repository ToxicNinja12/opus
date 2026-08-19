import { Accordion, AccordionItem } from "../../components/Accordion";

function ProductsFAQ() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 text-sky-950">
      <p className="text-xs sm:text-sm tracking-widest uppercase text-primary mb-4">
        Frequently Asked
      </p>
      <h2 className="font-lead text-2xl sm:text-3xl mb-10 max-w-2xl">
        Frequently Asked Questions About Opus Acoustic Products
      </h2>

      <Accordion>
        <AccordionItem
          title="What acoustic products does Opus Acoustic supply?"
          defaultOpen
        >
          Opus Acoustic supplies acoustic wall and ceiling panels (AcouMAX,
          AcouFAB, AcouWOOD, AcouWOOL, AcouSLATS), acoustic spray, soundproof
          glass partitions, acoustic ceilings, flooring, furniture, and noise
          control products including barriers, louvers, and sound attenuators.
        </AccordionItem>
        <AccordionItem title="Are Opus Acoustic panels suitable for both residential and commercial projects?">
          Yes. Our acoustic panels and systems are specified for corporate
          offices, educational institutions, healthcare facilities, hospitality
          developments, auditoriums, and residential interiors.
        </AccordionItem>
        <AccordionItem title="Can Opus Acoustic panels be customized in finish or color?">
          Yes, most acoustic panel ranges, including AcouFAB and AcouWOOD, are
          available in a range of finishes, colors, and perforation patterns to
          match project design requirements.
        </AccordionItem>
        <AccordionItem title="Do you provide acoustic testing or on-site inspection with product supply?">
          Yes. Opus Acoustic offers site inspection, noise mapping, and noise
          survey services alongside product supply to verify real-world acoustic
          performance.
        </AccordionItem>
        <AccordionItem title="Where can I see the full Opus Acoustic product catalogue?">
          The full product range is available on this Products page, or you can
          contact our team directly for a detailed catalogue and technical
          specification sheets.
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default ProductsFAQ;
