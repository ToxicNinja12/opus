import Link from "@/components/ui/Link";

import Logo from "./Logo";
import Navbar from "./Navbar";

function SiteHeader() {
  return (
    <div className="bg-secondary text-sky-50 px-6 sm:px-10 lg:px-20 py-8 flex items-center justify-between">
      <Link href="/">
        <Logo className="mb-1" loading="eager" />
      </Link>
      <Navbar className="md:basis-xl" flexMode />
    </div>
  );
}

export default SiteHeader;
