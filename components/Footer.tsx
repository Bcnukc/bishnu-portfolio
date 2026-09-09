import Link from "next/link";
import { site } from "@/lib/site";
import Clock from "./Clock";
import Pill from "./Pill";
export default function Footer() {
  return <footer className="footer"><div className="footer-box"><div className="footer-top"><div className="footer-links"><div><h3>Menu</h3><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/work">Projects</Link><Link href="/#contact">Contact</Link></div><div><h3>Social</h3>{site.socials.map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}</div><div><h3>Explore</h3><Link href="/#expertise">Expertise</Link><Link href="/about#experience">Experience</Link><a href="/Bishnu-KC-CV.pdf" target="_blank" rel="noreferrer">Download CV</a></div></div><div className="footer-cta"><Pill href="/#contact">GET IN TOUCH</Pill><p>Tell me about your project.<br />Let&apos;s work together.</p></div></div><div className="footer-contact"><Clock prefix="" /><div><a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a></div></div><div className="footer-name" aria-label="Bishnu K.C."><span>BISHNU</span><span>K.C.</span></div><div className="footer-bottom"><span>© {new Date().getFullYear()} BISHNU K.C. ALL RIGHTS RESERVED.</span><a href="#top">BACK TO TOP ↑</a></div></div></footer>;
}
