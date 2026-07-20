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
            z-20
            flex
            -translate-y-1/2
            items-center
            gap-3

            border-x
            border-neutral-200

            bg-white
            px-8

            dark:border-neutral-800
            dark:bg-neutral-950
          "
        >
          <Sparkles className="size-4 text-neutral-900 dark:text-neutral-100" />
          <span className="font-serif text-lg text-neutral-900 dark:text-neutral-100">Abilities</span>
        </div>

        <div className="marquee-track">
          {doubledItems.map((item, index) => (
            <span
              key={index}
              className="           
                mx-15
                whitespace-nowrap
                font-serif
                text-lg
                text-neutral-700
                dark:text-neutral-300"
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
