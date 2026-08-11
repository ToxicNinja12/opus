import { Accordion, AccordionItem } from "../../components/Accordion";

function AboutFAQ() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-16 text-sky-950">
      <p className="text-xs sm:text-sm tracking-widest uppercase text-primary mb-4">
        Frequently Asked
      </p>
      <h2 className="font-lead text-2xl sm:text-3xl mb-10 max-w-2xl">
        Frequently Asked Questions About Opus Acoustic
      </h2>

      <Accordion>
        <AccordionItem title="What is Opus Acoustic?" defaultOpen>
          Opus Acoustic is the specialist acoustic consultancy division of Opus
          Building Materials LLC, providing acoustic engineering, sound
          consultancy, and acoustic panel solutions for architects, consultants,
          and developers across the UAE, GCC, and Europe.
        </AccordionItem>
        <AccordionItem title="What acoustic services does Opus Acoustic provide?">
          Opus Acoustic provides acoustic consultancy, sound engineering, speech
          intelligibility design, noise control, and supply and installation of
          acoustic wall and ceiling panels, baffles, and partitions.
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
