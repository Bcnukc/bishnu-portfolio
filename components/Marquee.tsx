"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { site } from "@/lib/site";

export default function Marquee() {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(track.current, {
        xPercent: -50,
        duration: 26,
        repeat: -1,
        ease: "none",
      });
    }, track);
    return () => ctx.revert();
  }, []);

  const items = [...site.marquee, ...site.marquee];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" ref={track}>
        {items.map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>
    </div>
  );
}
