import clsx from "clsx";

import Underline from "./Underline";

function Navbar({ className }) {
  return (
    <nav className={clsx("flex", className)}>
      <ul className="flex gap-6 w-full">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Clients</a>
        </li>
        <li>
          <a href="#">Career</a>
        </li>
        <li className="ml-auto relative">
          <a href="#">Contact Us</a>
          <Underline className="text-red-500 absolute top-2 right-2" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
