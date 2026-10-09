import clsx from "clsx";

function Underline({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 400"
      className={clsx("w-full pointer-events-none", className)}
    >
      <path
        d="M 180 254 c 58 -23 85.665 -38.146 157 -55 s 96.265 -12.8 142.265 -16.8 c 51.283 -2.14 101.81 -0.732 262 12"
        fill="none"
        strokeWidth="24"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Underline;
