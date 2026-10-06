import Image from "next/image";

import LogoImg from "@/assets/logo.png";

function Logo({ className, width = 120, alt = "", ...props }) {
  return (
    <Image
      src={LogoImg}
      alt={alt}
      className={className}
      width={width}
      // Height follows the source file's exact proportions rather than those
      // of the resized copy Next serves, which rounds to whole pixels.
      style={{ aspectRatio: `${LogoImg.width} / ${LogoImg.height}` }}
      {...props}
    />
  );
}

export default Logo;
