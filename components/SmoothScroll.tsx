"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const syncLock = () => {
      if (document.body.classList.contains("is-locked")) lenis.stop();
      else lenis.start();
    };
    const observer = new MutationObserver(syncLock);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // anchor links
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.("a[href^='/#'], a[href^='#']");
      if (!el) return;
      const href = el.getAttribute("href") || "";
      const id = href.split("#")[1];
      const target = id ? document.getElementById(id) : null;
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -20 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      observer.disconnect();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
