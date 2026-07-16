import { Sparkles } from "lucide-react";

type MarqueeProps = {
  items: string[];
};

function Marquee({ items }: MarqueeProps) {
  const doubledItems = [...items, ...items];

  return (
    <section className="border-y border-neutral-300 mt-5">
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          py-10
          mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
        "
      >
        <div
          className="
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            z-20
            bg-white
            pl-8
            pr-10
            flex
            items-center
            gap-3
            border-x
            border-neutral-200
          "
        >
          <Sparkles className="size-4" />
          <span className="font-serif text-lg">Abilities</span>
        </div>

        <div className="marquee-track">
          {doubledItems.map((item, index) => (
            <span
              key={index}
              className="whitespace-nowrap font-serif text-lg mx-15"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Marquee;
