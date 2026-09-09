import type { Metadata } from "next";
import WorkList from "@/components/WorkList";
import SplitHeading from "@/components/SplitHeading";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work — Bishnu K.C.",
  description: "Research and engineering projects in AI/ML, NLP and full-stack development.",
};

export default function WorkIndex() {
  return (
    <section id="top" className="section" style={{ paddingTop: "clamp(8rem, 20vh, 14rem)", borderTop: 0 }}>
      <div className="section-head">
        <span className="label">
          <span className="dot" />
          Work — index
        </span>
        <span className="label">04 projects</span>
      </div>

      <SplitHeading text={"Selected\nprojects"} className="display d-xl" as="h1" />

      <Reveal>
        <p className="lead" style={{ margin: "2.5rem 0 4rem" }}>
          Research tracks, platforms and production pipelines — each one a working answer to a
          problem in low-resource language technology, education or applied machine learning.
        </p>
      </Reveal>

      <WorkList />
    </section>
  );
}
