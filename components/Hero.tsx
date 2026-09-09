"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Clock from "./Clock";
gsap.registerPlugin(ScrollTrigger);
export default function Hero() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-word", { yPercent: 115, duration: 1.2, stagger: 0.1, delay: 0.35, ease: "expo.out" });
      gsap.from(".hero-intro, .hero-meta", { opacity: 0, y: 20, duration: 1.1, delay: 0.65 });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section className="hero" ref={root} id="top" aria-label="Introduction">
      <div className="glowing-columns" aria-hidden="true">
        {Array.from({ length: 30 }, (_, i) => <div className="glowing-column" key={i}><div className="glowing-beam" style={{ animationDelay: `${i * -0.3}s` }} /></div>)}
      </div>
      <div className="hero-body">
        <div className="hero-spacer" />
        <p className="hero-intro"><strong>AI/ML Engineer.</strong> I build intelligent applications and turn research into reliable, well-built software. I bring machine learning and engineering together to create digital experiences that feel useful, fluid and made for the people using them.</p>
        <h1 className="hero-title"><span className="hero-line first-line"><span className="hero-word">I BUILD DIGITAL</span></span><span className="hero-line second-line"><span className="hero-word">INTELLIGENCE</span></span></h1>
        <div className="hero-meta"><span>BISHNU K.C.</span><Clock /></div>
      </div>
    </section>
  );
}
