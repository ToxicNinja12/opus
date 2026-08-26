import { Accordion, AccordionItem } from "../../components/Accordion";

function AboutFAQ() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24 text-sky-950">
      <p className="text-xs sm:text-sm tracking-widest uppercase text-primary mb-4">
        Frequently Asked
      </p>
      <h2 className="font-lead text-2xl sm:text-3xl mb-10 max-w-2xl">
        Frequently Asked Questions About Opus Acoustic
      </h2>

      <Accordion>
        <AccordionItem title="What is Opus Acoustic?" defaultOpen>
          Opus Acoustic is the specialized acoustics division of Opus Building
          Materials LLC, providing professional acoustic and sound-control
          solutions for architectural, commercial, hospitality, educational,
          healthcare, residential, and industrial applications.
        </AccordionItem>
        <AccordionItem title="What acoustic services does Opus Acoustic provide?">
          <ul className="flex flex-col gap-0.5">
            <li className="flex gap-3">
              <span className="text-primary shrink-0">●</span>
              <span>Acoustic wall and ceiling treatments</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary shrink-0">●</span>
              <span>Acoustic partition and soundproofing systems</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary shrink-0">●</span>
              <span>Acoustic material selection and specification support</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary shrink-0">●</span>
              <span>
                Technical support for architects, consultants, contractors, and
                developers
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary shrink-0">●</span>
              <span>Acoustic consultancy and design support</span>
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Where does Opus Acoustic operate?">
          Opus Acoustic is headquartered in Dubai, UAE, with an additional
          branch in Europe, and serves clients across the GCC and Europe.
        </AccordionItem>
        <AccordionItem title="Who does Opus Acoustic work with?">
          Opus Acoustic partners with architects, interior designers,
          consultants, developers, and contractors on commercial, educational,
          healthcare, hospitality, and cultural projects.
        </AccordionItem>
        <AccordionItem title="Is Opus Acoustic part of Opus Building Materials?">
          Yes. Opus Acoustic is the dedicated acoustic division of Opus Building
          Materials LLC, founded in Dubai in 2019.
        </AccordionItem>
        <AccordionItem title="What industries does Opus Acoustic serve?">
          Opus Acoustic serves corporate offices, schools and educational
          institutions, healthcare facilities, hospitality developments,
          auditoriums, cinemas, and cultural venues.
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default AboutFAQ;
