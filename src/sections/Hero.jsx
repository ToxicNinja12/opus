import Navbar from "../components/Navbar";
import Test from "../assets/hero.jpg";
import Logo from "../assets/logo.png";

function Hero() {
  return (
    <section className="grid grid-cols-1 grid-rows-[auto_1fr] md:grid-rows-1 md:grid-cols-2 md:min-h-screen bg-sky-50">
      <div className="relative bg-black/90 h-64 sm:h-80 md:h-auto">
        <img
          src={Logo}
          alt=""
          className="absolute mx-6 my-4 sm:mx-10 md:mx-20 z-10"
          width={110}
        />
        <img
          src={Test}
          alt=""
          className="block object-[25%] object-cover brightness-90 h-full w-full mask-t-from-50%"
        />
      </div>
      <div className="grid grid-rows-[auto_1fr_auto] bg-secondary text-sky-50 px-6 py-8 md:pl-10 md:pr-20 z-5">
        <Navbar />
        <div className="self-end my-10 md:mb-36">
          <h1 className="font-lead text-3xl sm:text-4xl md:text-5xl">
            Acoustic solutions for modern spaces
          </h1>
          <p className="mt-6 md:mt-8 max-w-96">
            We provide high-performance systems that blend sound quality with
            modern aesthetics across the Middle East.
          </p>
        </div>
        <a href="#">Learn More &rarr;</a>
      </div>
    </section>
  );
}

export default Hero;
