import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";
import Pill from "./Pill";
const services = [
  { title: <>GEN AI<br />LLM APPS</>, symbol: "✳", body: "Purpose-built LLM applications, grounded in your data and designed around useful answers, reliable retrieval and thoughtful evaluation.", href: "/work/ghokante" },
  { title: <>MACHINE<br />LEARNING</>, symbol: "⌘", body: "Model training, fine-tuning and evaluation, with close attention to multilingual NLP, speech and low-resource language technology.", href: "/work/nepali-asr" },
  { title: <>SOFTWARE<br />SYSTEMS</>, symbol: "↗", body: "The infrastructure around the model: efficient APIs, data pipelines and interfaces that turn research into working products.", href: "/work/nanu-babu-tv" }
];
export default function Expertise() {
  return <section className="editorial-section" id="expertise">
    <div className="section-rail"><span className="label">SERVICES</span></div>
    <div className="section-content"><SplitHeading text="Skills & Services" className="section-title" /><Reveal><p className="section-description">I combine applied research and thoughtful engineering to build useful digital products. Every project gets a considered approach, caring for model quality and the software around it.</p></Reveal>
      <Reveal className="skills-grid" stagger>{services.map((s, i) => <article className="skill-card" key={i}><div className="skill-top"><h3>{s.title}</h3><span className="skill-icon" aria-hidden="true">{s.symbol}</span></div><div><p>{s.body}</p><Pill href={s.href}>FIND OUT MORE</Pill></div></article>)}</Reveal>
    </div>
  </section>;
}
