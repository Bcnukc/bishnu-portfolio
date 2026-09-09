import WorkList from "./WorkList";
import SplitHeading from "./SplitHeading";
import Reveal from "./Reveal";
import Pill from "./Pill";
export default function Work() {
  return <section id="work">
    <div className="editorial-section work-heading"><div className="section-rail"><span className="label">PROJECTS</span></div><div className="section-content"><SplitHeading text="Selected Work" className="section-title" /><Reveal><p className="section-description">A curated selection of research and engineering projects, where machine learning meets real-world problems.</p></Reveal></div></div>
    <WorkList /><div className="work-more"><Pill href="/work">ALL PROJECTS</Pill></div>
  </section>;
}
