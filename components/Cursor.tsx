"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const xDot = gsap.quickTo(dot.current, "x", { duration: 0.15, ease: "power3" });
    const yDot = gsap.quickTo(dot.current, "y", { duration: 0.15, ease: "power3" });
    const xRing = gsap.quickTo(ring.current, "x", { duration: 0.55, ease: "power3" });
    const yRing = gsap.quickTo(ring.current, "y", { duration: 0.55, ease: "power3" });

    let shown = false;
    const move = (e: MouseEvent) => {
      if (!shown) {
        shown = true;
        gsap.set([dot.current, ring.current], { x: e.clientX - 5, y: e.clientY - 21 });
        gsap.to([dot.current, ring.current], { opacity: 1, duration: 0.4 });
      }
      xDot(e.clientX - 5);
      yDot(e.clientY - 5);
      xRing(e.clientX - 21);
      yRing(e.clientY - 21);
    };

    const over = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest?.("a, button, .work-row");
      if (!shown) return;
      gsap.to(ring.current, { scale: t ? 1.9 : 1, opacity: t ? 0.55 : 1, duration: 0.4, ease: "power3" });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  );
}
