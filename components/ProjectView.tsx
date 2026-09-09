import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getNext } from "@/lib/projects";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

export default function ProjectView({ slug }: { slug: string }) {
  const p = getProject(slug);
  if (!p) notFound();
  const next = getNext(slug);

  return (
    <article>
      <header className="proj-hero" id="top">
        <div
          className="proj-hero-bg"
          style={{
            background: `radial-gradient(120% 95% at 12% 10%, ${p.color}cc 0%, ${p.color}44 32%, rgba(5,7,6,0) 68%)`,
          }}
        />
        <div className="hero-blinds" style={{ opacity: 0.9 }} />
        <div className="hero-grain" />

        <Reveal>
          <Link className="label" href="/work">
            ← Back to work
          </Link>
        </Reveal>

        <div style={{ marginTop: "2rem" }}>
          <SplitHeading text={p.title} className="display d-lg" as="h1" />
        </div>

        <Reveal>
          <p className="lead" style={{ marginTop: "1.6rem" }}>
            {p.short}
          </p>
        </Reveal>

        <Reveal className="proj-meta" stagger>
          <div>
            <p className="label">Year</p>
            <p>{p.year}</p>
          </div>
          <div>
            <p className="label">Role</p>
            <p>{p.role}</p>
          </div>
          <div>
            <p className="label">Status</p>
            <p>{p.status}</p>
          </div>
          <div>
            <p className="label">Focus</p>
            <p>{p.tags.join(", ")}</p>
          </div>
        </Reveal>
      </header>

      <section className="section">
        <div className="grid-2">
          <div>
            <span className="label">
              <span className="dot" />
              Overview
            </span>
          </div>
          <div className="proj-body">
            <Reveal>
              <p style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.35rem)", lineHeight: 1.7 }}>
                {p.overview}
              </p>
            </Reveal>

            <Reveal>
              <h3 className="display d-sm">The problem</h3>
              <p>{p.challenge}</p>
            </Reveal>

            <Reveal>
              <h3 className="display d-sm">Approach</h3>
              <ul>
                {p.approach.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h3 className="display d-sm">Outcome</h3>
              <p>{p.outcome}</p>
            </Reveal>

            <Reveal>
              <h3 className="display d-sm">Stack</h3>
              <div className="work-tags">
                {p.stack.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section next-proj">
        <div>
          <span className="label">Next project</span>
          <Link href={`/work/${next.slug}`} className="display d-md" style={{ display: "block", marginTop: "1rem" }}>
            {next.title}
          </Link>
        </div>
        <Link className="btn" href={`/work/${next.slug}`}>
          View project →
        </Link>
      </section>
    </article>
  );
}
