"use client";
import { useEffect, useState } from "react";
export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setDone(true); return; }
    const start = performance.now();
    const timer = window.setInterval(() => { const p = Math.min(100, Math.round((performance.now() - start) / 7)); setProgress(p); if (p === 100) { clearInterval(timer); setDone(true); } }, 30);
    return () => clearInterval(timer);
  }, []);
  return <div className={`preloader ${done ? "is-done" : ""}`} aria-hidden="true"><span>{progress}%</span></div>;
}
