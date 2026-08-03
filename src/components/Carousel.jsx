import { Children, useRef } from "react";

function Carousel({ children }) {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    const track = trackRef.current;
    const cardWidth = track.firstChild?.offsetWidth || 200;
    track.scrollBy({ left: direction * (cardWidth + 32), behavior: "smooth" });
  };

  return (
    <div className="relative w-full col-span-3">
      <div
        ref={trackRef}
        className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-none"
      >
        {children}
      </div>

      <button
        onClick={() => scroll(-1)}
        aria-label="Previous"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-white shadow rounded-full p-1.5"
      >
        &larr;
      </button>
      <button
        onClick={() => scroll(1)}
        aria-label="Next"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white shadow rounded-full p-1.5"
      >
        &rarr;
      </button>
    </div>
  );
}

export default Carousel;
