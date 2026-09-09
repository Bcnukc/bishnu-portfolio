import Pill from "./Pill";
import Reveal from "./Reveal";
export default function About() {
  return <section className="editorial-section about-section" id="about">
    <div className="section-rail"><span className="label">ABOUT</span></div>
    <div className="section-content">
      <Reveal><h2 className="about-heading">I build the connection between the logic of machine learning and the possibilities of software, to turn complex ideas into tools for real people.</h2></Reveal>
      <div className="about-bottom"><Reveal><p>I&apos;m Bishnu K.C., and I believe research should make a difference beyond the paper.<br /><br />I build intelligent applications and language technology, tailored to each problem: a considered process from model evaluation to reliable, usable software.</p></Reveal><Pill href="/about">FIND OUT MORE</Pill></div>
    </div>
  </section>;
}
