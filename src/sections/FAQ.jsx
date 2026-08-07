import { Accordion, AccordionItem } from "../components/Accordion";

function FAQ() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 px-6 sm:px-10 lg:px-20 pt-16 pb-16 lg:pb-32 gap-6 lg:gap-12 text-sky-950">
      <h2 className="font-lead text-xl mb-4 lg:mb-10">
        Frequently Asked Questions
      </h2>
      <Accordion>
        <AccordionItem
          title="What is Opus Acoustics and what services do you provide?"
          defaultOpen
        >
          Opus Acoustics is a Dubai-based provider of architectural acoustic
          solutions across the UAE and GCC. We provide acoustic consultancy,
          site surveys and noise mapping, acoustic product supply, specialist
          installation, site inspection, and project handover support.
        </AccordionItem>
        <AccordionItem title="What is acoustic consultancy and do I need it for my project?">
          Acoustic consultancy is the process of designing a space's sound
          performance before construction begins, covering reverberation
          control, noise isolation, and material selection. It's recommended for
          any project where speech clarity, privacy, or noise control matters —
          such as offices, schools, auditoriums, healthcare facilities, and
          hospitality venues.
        </AccordionItem>
        <AccordionItem title="How does an acoustic site inspection work?">
          An acoustic site inspection involves on-site measurement of noise
          levels, reverberation time, and sound transmission to verify that
          installed acoustic systems meet the required performance standards.
          Opus Acoustics provides detailed inspection reports with corrective
          recommendations where gaps are found.
        </AccordionItem>
        <AccordionItem title="What types of acoustic panels does Opus Acoustics supply?">
          Opus Acoustics supplies a full range of acoustic panels including
          AcouFAB (stretch fabric panels), AcouMAX (polyester fibre panels),
          AcouWOOD (acoustic wooden perforated panels), AcouWOOL (acoustic wood
          wool panels), AcouSLATS (wooden slatted panels), acoustic spray, and
          acoustic glass partitions.
        </AccordionItem>
        <AccordionItem title="Do you work with architects and contractors on tender projects?">
          Yes. Opus Acoustics supports architects, interior designers, and
          contractors from concept through tender and construction, providing
          technical submittals, fire performance data, samples, and
          specification documentation to meet project and compliance
          requirements.
        </AccordionItem>
        <AccordionItem title="Which regions does Opus Acoustics serve?">
          Opus Acoustics is headquartered in Dubai, UAE, and serves projects
          across the UAE and wider GCC region, with an international branch in
          Europe supporting cross-border coordination, sourcing, and
          partnerships.
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default FAQ;
