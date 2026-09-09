import Link from "next/link";

export default function NotFound() {
  return (
    <section id="top" className="section" style={{ minHeight: "70svh", display: "flex", flexDirection: "column", justifyContent: "center", borderTop: 0 }}>
      <span className="label">
        <span className="dot" />
        404
      </span>
      <h1 className="display d-lg" style={{ margin: "1.5rem 0" }}>
        Page not found
      </h1>
      <p className="lead">That route doesn&apos;t exist — the work index is a good place to restart.</p>
      <div style={{ marginTop: "2rem" }}>
        <Link className="btn btn-solid" href="/work">
          View work
        </Link>
      </div>
    </section>
  );
}
