"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";
import Pill from "./Pill";
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("Info");
  const [scrolled, setScrolled] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const path = usePathname();
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    const update = () => setScrolled(scrollY > innerHeight * 0.45);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (open) { dialog.current?.showModal(); document.body.classList.add("is-locked"); }
    else { dialog.current?.close(); document.body.classList.remove("is-locked"); }
    return () => document.body.classList.remove("is-locked");
  }, [open]);
  return <>
    <header className="nav">
      <Link href="/" className="nav-logo" aria-label="Bishnu K.C. home"><b>BK</b><span>BISHNU K.C.<small>AI / ML ENGINEER</small></span></Link>
      <div className="nav-right"><span className="nav-location">[ Working with the world ]</span><div className="nav-actions"><Pill href="/#contact">GET IN TOUCH</Pill><span className="nav-language">EN</span><button ref={trigger} className="menu-btn" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="portfolio-menu">MENU</button></div></div>
    </header>
    <dialog ref={dialog} id="portfolio-menu" className="menu-drawer" data-lenis-prevent aria-label="Portfolio menu" onCancel={() => setOpen(false)} onClick={e => { if (e.target === dialog.current) { const r = dialog.current.getBoundingClientRect(); if(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) setOpen(false); } }}>
      <div className="menu-tabs"><div role="tablist" aria-label="Menu sections">{["Info", "Projects", "Contacts"].map(name => <button key={name} id={`tab-${name}`} role="tab" aria-selected={tab === name} aria-controls="menu-panel" className={tab === name ? "active" : ""} onClick={() => setTab(name)} onKeyDown={e => {if(e.key === "ArrowRight" || e.key === "ArrowLeft") { const names = ["Info", "Projects", "Contacts"]; const next = names[(names.indexOf(name) + (e.key === "ArrowRight" ? 1 : 2)) % 3]; setTab(next); document.getElementById(`tab-${next}`)?.focus(); }}}>{name}</button>)}</div><button className="menu-close" onClick={() => { setOpen(false); trigger.current?.focus(); }}>CLOSE <span>×</span></button></div>
      <div className="menu-panel" id="menu-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
        {tab === "Info" && <><p className="menu-greeting">Hi,</p><h2>I&apos;m Bishnu K.C.,</h2><p className="muted">AI/ML Engineer based in Kathmandu, Nepal</p><Image src="/bishnu.jpg" alt="Bishnu K.C." width={600} height={400} className="menu-photo" /><p>I build intelligent applications, grounded in research and made for real people.</p><div className="menu-socials">{site.socials.map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}</div><div onClick={() => setOpen(false)}><Pill href="/about">MORE ABOUT ME</Pill></div><Pill href="/Bishnu-KC-CV.pdf" outline>DOWNLOAD CV</Pill></>}
        {tab === "Projects" && <div className="menu-projects">{projects.map(p => <Link href={`/work/${p.slug}`} key={p.slug} onClick={() => setOpen(false)}><span className="label">{p.index} / {p.year}</span><h3>{p.title} ↗</h3><p>{p.short}</p></Link>)}</div>}
        {tab === "Contacts" && <><p className="menu-greeting">Write to me,</p><h2>Let&apos;s work together.</h2><p>Tell me about your idea. Let&apos;s make something useful.</p><div className="menu-contact"><span className="label">EMAIL</span><a href={`mailto:${site.email}`}>{site.email}</a><span className="label">PHONE</span><a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a><span className="label">LOCATION</span><span>{site.location} // Remote</span></div><div onClick={() => setOpen(false)}><Pill href="/#contact">GET IN TOUCH</Pill></div></>}
      </div>
    </dialog>
    <nav className={`floating-nav ${scrolled ? "is-visible" : ""}`} aria-label="Quick navigation" inert={!scrolled}><Link href="/" aria-label="Home">⌂</Link><span>Menu</span><button onClick={() => setOpen(!open)} aria-label="Open menu" aria-expanded={open}><i /><i /></button><Link href="/#contact">Contact ↗</Link></nav>
  </>;
}
