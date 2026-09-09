import { experience } from "@/lib/site";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-head">
        <span className="label">
          <span className="dot" />
          Experience & education
        </span>
        <span className="label">(04)</span>
      </div>

      <SplitHeading text={"The path"} className="display d-lg" />

      <div style={{ marginTop: "3rem", borderTop: "1px solid var(--line)" }}>
        {experience.map((e) => (
          <Reveal className="tl-row" key={e.role + e.when} y={26}>
            <div>
              <span className="tl-when">{e.when}</span>
            </div>
            <div>
              <h4>{e.role}</h4>
              <p className="tl-where">{e.org}</p>
              <p className="lead" style={{ fontSize: "0.95rem", marginTop: "0.8rem" }}>
                {e.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
