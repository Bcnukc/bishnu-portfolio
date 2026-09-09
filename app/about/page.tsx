import type { Metadata } from "next";
import Image from "next/image";
import { site, experience, expertise } from "@/lib/site";
import Reveal from "@/components/Reveal";
import Pill from "@/components/Pill";
import Contact from "@/components/Contact";
export const metadata: Metadata = { title: "About — Bishnu K.C.", description: "Research, engineering, and the experience behind Bishnu K.C.'s work." };
export default function AboutPage() {
 return <><header className="proj-hero" id="top"><span className="label">BEHIND THE WORK</span><h1 className="display d-xl" style={{marginTop:32}}>Curiosity.<br />Then code.</h1><p className="lead" style={{marginTop:32}}>AI/ML Engineer based in Kathmandu. Working at the intersection of applied research and production software.</p></header>
 <section className="editorial-section about-section"><div className="section-rail"><span className="label">ABOUT ME</span></div><div className="section-content"><h2 className="about-heading">Research-minded engineering.</h2><div className="experience-intro"><Image className="experience-photo" src="/bishnu.jpg" alt="Bishnu K.C." width={600} height={800} /><div><p className="lead">{site.intro}</p><p className="lead" style={{marginTop:20}}>Currently completing a Master in Information Technology at Tribhuvan University, researching parameter-efficient fine-tuning for low-resource Nepali speech recognition.</p><div style={{marginTop:28}}><Pill href="/Bishnu-KC-CV.pdf">DOWNLOAD CV</Pill></div></div></div></div></section>
 <section className="editorial-section experience-section" id="experience"><div className="section-rail"><span className="label">EXPERIENCE</span></div><div className="section-content"><h2 className="section-title">The path so far</h2><div style={{marginTop:48}}>{experience.map(e => <Reveal className="tl-row" key={e.role + e.when}><span className="tl-when">{e.when}</span><div><h4>{e.role}</h4><p className="tl-where">{e.org}</p><p className="lead">{e.body}</p></div></Reveal>)}</div></div></section>
 <section className="editorial-section"><div className="section-rail"><span className="label">EXPERTISE</span></div><div className="section-content"><h2 className="section-title">From research to production</h2>{expertise.map(e => <div className="tl-row" key={e.num} style={{marginTop:32}}><span className="label">{e.num}</span><div><h4>{e.title}</h4><p className="lead">{e.body}</p><div className="work-tags" style={{marginTop:20}}>{e.items.map(i => <span className="tag" key={i}>{i}</span>)}</div></div></div>)}</div></section><Contact /></>;
}
