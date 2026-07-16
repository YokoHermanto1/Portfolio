import Marquee from "../components/Marquee";
import ProfileImage from "../assets/ImageProfile.png";

function Hero() {
  const softSkills = [
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Adaptability",
    "Time Management",
    "Creativity",
    "Leadership",
    "Critical Thinking",
  ];

  return (
    <section id="hero" className="pt-20 pb-15 font-serif md:px-10 text-center lg:text-left ">
      {/* Parent Container */}
      <div className="mx-auto w-full max-w-7xl sm:px-8 lg:px-0 px-4 py-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] items-center">
        {/* Description & CTA Button */}
        <div className="flex flex-col items-center lg:items-start space-y-9 sm:order-1 lg:order-0 ">
          <h1
            aria-label="Yoko Hermanto"
            className="font-serif font-normal leading-none text-[clamp(4rem,10vw,8rem)]"
          >
            <span className="block">Yoko</span>
            <span className="block">Hermanto</span>
          </h1>
          <div className=" space-y-2 ">
            <p className="font-serif text-xl">Fullstack Developer</p>
            <p className=" mx-auto lg:mx-0 max-w-2xl text-xl font-serif text-center lg:text-left">
              Building thoughtful products for people, not just writing code.
            </p>
          </div>
          <button className="w-fit rounded-2xl bg-blue-500 py-3 px-9 font-serif text-white transition hover:bg-blue-700 ">
            Get in touch
          </button>
        </div>

        {/* Profile Image */}
        <div className="mx-auto lg:mx-0 h-64 w-64 sm:h-80 sm:w-80 lg:h-110 lg:w-110 shrink-0 rounded-full bg-white p-1 ring-1 ring-neutral-300 shadow-2xl order-first lg:order-0">
          <img
            src={ProfileImage}
            alt="Yoko Hermanto"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
      <div className="md:-mx-10 ">
        <Marquee items={softSkills}></Marquee>
      </div>
    </section>
  );
}

export default Hero;
