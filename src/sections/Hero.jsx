import Navbar from "../components/Navbar";
import Test from "../assets/hero.jpg";
import Logo from "../assets/logo.png";

function Hero() {
  return (
    <section className="grid grid-cols-2 h-screen bg-sky-50">
      <div className="bg-black/90">
        <img
          src={Logo}
          alt=""
          className="absolute mx-20 my-4 z-10"
          width={140}
        />
        <img
          src={Test}
          alt=""
          className="object-[25%] object-cover brightness-90 h-full mask-t-from-50%"
        />
      </div>
      <div className="grid grid-rows-[auto_1fr_auto] bg-secondary text-sky-50 py-8 pl-10 pr-20 z-5">
        <Navbar />
        <div className="self-end mb-36">
          <h1 className="font-lead text-5xl">
            Acoustic solutions for modern spaces
          </h1>
          <p className="mt-8 w-96">
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
