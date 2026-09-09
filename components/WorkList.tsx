"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/projects";
import ProjectPreview from "./ProjectPreview";
import Pill from "./Pill";
gsap.registerPlugin(ScrollTrigger);
const backgrounds = ["#102822", "#c8d1b8", "#16242d", "#302d40"];
export default function WorkList({ limit }: { limit?: number }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 992px) and (prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".project-card").forEach(card => {
          gsap.fromTo(card.querySelector(".project-visual"), { height: "28svh", minHeight: 240 }, { height: "72svh", ease: "none", scrollTrigger: { trigger: card, start: "top bottom", end: "top 10%", scrub: true, invalidateOnRefresh: true } });
          gsap.from(card.querySelector(".project-details"), { opacity: 0, y: 30, duration: .7, scrollTrigger: { trigger: card, start: "top 75%", once: true } });
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);
  return <div className="work-gallery" ref={root}>{(limit ? projects.slice(0, limit) : projects).map((p, i) => <article className="project-card" key={p.slug}>
    <Link href={`/work/${p.slug}`} className="project-visual" aria-label={`View ${p.title}`} style={{ background: backgrounds[i] }}><ProjectPreview slug={p.slug} /></Link>
    <div className="project-details"><h3><Link href={`/work/${p.slug}`}>{p.title}</Link></h3><div className="project-tags">{p.tags.join(", ")}</div><p>Role: {p.role}</p><Pill href={`/work/${p.slug}`}>OPEN PROJECT</Pill></div>
  </article>)}</div>;
}
