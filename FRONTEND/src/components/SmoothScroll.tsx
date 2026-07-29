import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time:number){
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        const rafID = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafID);
            lenis.destroy();
        };
    },[]);
    return null; 
}