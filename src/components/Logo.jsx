import LogoImg from "../assets/logo.png";
import clsx from "clsx";

function Logo({ className }) {
  return <img src={LogoImg} alt="" className={clsx(className)} width={120} />;
}

export default Logo;
