import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import clsx from "clsx";

import Underline from "./Underline";

const links = [
  // { label: "About", href: "#" },
  { label: "Products", href: "#" },
  { label: "Clients", href: "#" },
  { label: "Career", href: "#" },
];

function Navbar({ className, flexMode = false }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className={clsx("flex", className)}>
      {/* Desktop nav */}
      <ul className="hidden md:flex gap-6 w-full">
        <li key="About">
          <Link to="/about-us">About</Link>
        </li>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
        <li className="ml-auto relative">
          <a href="#">Contact Us</a>
          <Underline className="text-primary absolute top-2 right-2" />
        </li>
      </ul>

      {/* Hamburger toggle, mirrors the logo's top-left position */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className={clsx(
          "md:hidden z-50 flex flex-col justify-center gap-1.5 w-8 h-8",
          !flexMode && "absolute top-4 right-6 sm:right-10",
        )}
      >
        <span className="block h-0.5 w-full bg-sky-50" />
        <span className="block h-0.5 w-full bg-sky-50" />
        <span className="block h-0.5 w-full bg-sky-50" />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={clsx(
          "md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      />

      {/* Offscreen sidebar */}
      <div
        className={clsx(
          "md:hidden fixed top-0 right-0 h-full w-72 max-w-[80%] bg-secondary text-sky-50 z-50 px-8 py-8 transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute top-4 right-6 text-2xl leading-none"
        >
          &times;
        </button>

        <ul className="flex flex-col gap-6 mt-16">
          <li key="Home">
            <Link to="/">Home</Link>
          </li>
          <li key="About">
            <Link to="/about-us">About</Link>
          </li>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="relative w-fit">
            <a href="#" onClick={() => setOpen(false)}>
              Contact Us
            </a>
            <Underline className="text-primary absolute top-2 right-2 w-16" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
