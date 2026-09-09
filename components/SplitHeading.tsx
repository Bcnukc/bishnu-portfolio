"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SplitHeading({
  text,
  className = "display d-lg",
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".line-inner", {
        yPercent: 112,
        duration: 1.1,
        stagger: 0.09,
        ease: "expo.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <Tag className={className} ref={ref}>
      {text.split("\n").map((line, i) => (
        <span className="line-mask" key={i}>
          <span className="line-inner">{line}</span>
        </span>
      ))}
    </Tag>
  );
}
