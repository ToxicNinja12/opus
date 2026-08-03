import { Accordion, AccordionItem } from "../components/Accordion";

function FAQ() {
  return (
    <section className="grid grid-cols-4 px-20 pt-16 pb-32 gap-12">
      <h2 className="font-lead text-xl mb-10 -col-end-1">
        Frequently Asked Questions
      </h2>
      <Accordion>
        <AccordionItem title="What does Opus Acoustics provide?" defaultOpen>
          Acoustic consultancy, site surveys, noise mapping, system
          specification, product supply, specialist installation, inspection and
          handover support.
        </AccordionItem>
        <AccordionItem title="Do you work with architects and contractors?">
          Yes. We coordinate with architects, interior designers, acoustic
          consultants, main contractors, MEP teams and developers.
        </AccordionItem>
        <AccordionItem title="Do you supply and install acoustic panels?">
          Yes. Our portfolio includes fabric, polyester, perforated wood, wood
          wool, slatted timber, ceiling, spray and sound-isolation systems.
        </AccordionItem>
        <AccordionItem title="Which regions do you serve?">
          We support projects across the UAE and GCC through our Dubai
          headquarters, with international coordination through our Europe
          branch.
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default FAQ;
