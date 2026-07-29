import Marquee from "../components/Marquee";
import ProfileImage from "../assets/ImageProfile.png";
import ChangeTheme from "../components/ChangeTheme";

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
    <section
      id="hero"
      className="pt-20 pb-15 font-serif md:px-10 text-center lg:text-left "
    >
      <div className="w-full max-w-7xl mx-auto text-right p-4">
        <ChangeTheme />
      </div>
      {/* Parent Container */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-0">
        {/* Description & CTA Button */}
        <div className="flex flex-col items-center lg:items-start space-y-9 sm:order-1 lg:order-0 ">
          <h1
            aria-label="Yoko Hermanto"
            className="text-[clamp(4rem,10vw,8rem)] font-normal leading-none"
          >
            <span className="block">Yoko</span>
            <span className="block">Hermanto</span>
          </h1>
          <div className=" space-y-2 ">
            <p className="text-xl">Frontend Developer</p>
            <p
              className=" 
                mx-auto
                max-w-2xl
                text-center
                text-xl

                lg:mx-0
                lg:text-left

                text-(--text)"
            >
              Building thoughtful products for people, not just writing code.
            </p>
          </div>
          <a
            href="#Contact"
            className="
                  btn-grad
                  w-fit
                  rounded-2xl
                  px-9
                  py-3
                  transition-colors
                  duration-300"
          >
            Get in touch
          </a>
        </div>

        {/* Profile Image */}
        <div
          className="
            mx-auto
            h-64
            w-64
            shrink-0
            order-first

            rounded-full

            bg-white
            p-1
            ring-1
            ring-neutral-200
            shadow-lg

            dark:bg-neutral-900
            dark:ring-neutral-800

            sm:h-80
            sm:w-80

            lg:order-0
            lg:h-110
            lg:w-110
            lg:mx-0"
        >
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
