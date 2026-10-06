import { Accordion, AccordionItem } from "./Accordion";

// Accordion built from `{ question, answer }` pairs; the first starts open.
function FaqList({ faqs }) {
  return (
    <Accordion>
      {faqs.map((faq, i) => (
        <AccordionItem
          key={faq.question}
          title={faq.question}
          defaultOpen={i === 0}
        >
          {faq.answer}
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FaqList;
