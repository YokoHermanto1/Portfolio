import { useEffect } from "react";
import Lenis from "lenis";
import { setLenis } from "../lib/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    setLenis(instance);

    function raf(time: number) {
      instance.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
    };
  }, []);

  return null;
}