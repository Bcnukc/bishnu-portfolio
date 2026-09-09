"use client";
import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";
import { Arrow } from "./Pill";
export default function Contact() {
  const [status, setStatus] = useState("");
  function composeEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name")).trim();
    const email = String(data.get("email")).trim();
    const message = String(data.get("message")).trim();
    if (!name || !message) { setStatus("Please add your name and a short message."); return; }
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`Hi Bishnu,\n\n${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("Continue in your email app to send the draft, or email bishnu.kc7864@gmail.com directly.");
  }
  return <section className="editorial-section contact-section" id="contact">
    <div className="section-rail"><span className="label">CONTACTS</span></div>
    <div className="section-content"><SplitHeading text="Let's work together" className="section-title" /><Reveal><p className="section-description">Let&apos;s build useful, intelligent digital experiences.<br />From the first idea to a working product, I bring research and engineering together. Tell me about your project.</p></Reveal>
      <div className="contact-info"><div><span className="label">EMAIL</span><a href={`mailto:${site.email}`}>{site.email}</a></div><div><span className="label">LOCATION</span><span>{site.location} // Remote</span></div><div><span className="label">PHONE</span><a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a></div></div>
      <form className="contact-form" onSubmit={composeEmail}><div className="form-sentence"><span>Hi, I&apos;m </span><input name="name" aria-label="Your name" placeholder="your name" autoComplete="name" maxLength={100} required /><span> and my email is </span><input name="email" aria-label="Your email" placeholder="your@email.com" autoComplete="email" type="email" maxLength={254} required /><span>. See you soon!</span></div><label className="message-label" htmlFor="project-message">IN ONE LINE, WHAT DO YOU NEED?</label><textarea id="project-message" name="message" placeholder="e.g. an AI application, a research collaboration, a useful new tool..." maxLength={3000} required /><div className="form-bottom"><p>Opens a draft in your email app.</p><button className="pill" type="submit"><span className="pill-label"><span>SEND</span><span aria-hidden="true">SEND</span></span><span className="pill-icon"><Arrow /><Arrow /></span></button></div><p className="form-status" role="status">{status}</p></form>
    </div>
  </section>;
}
