import { useState } from "react";

function AccordionItem({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-slate-200">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-4 font-semibold text-sky-950"
      >
        <span>{title}</span>
        <span className="shrink-0 text-slate-400">
          {open ? <span>&#9652;</span> : <span>&#9662;</span>}
        </span>
      </button>
      {open && (
        <div className="pb-4 leading-relaxed text-sky-900">{children}</div>
      )}
    </div>
  );
}

function Accordion({ children }) {
  return <div className="divide-y-0 col-span-3 row-start-1">{children}</div>;
}

export { Accordion, AccordionItem };
