import Link from "next/link";
export function Arrow() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>;
}
export default function Pill({ href, children, outline = false, className = "" }: { href: string; children: string; outline?: boolean; className?: string }) {
  return <Link href={href} className={`pill ${outline ? "pill-outline" : ""} ${className}`}><span className="pill-label"><span>{children}</span><span aria-hidden="true">{children}</span></span><span className="pill-icon"><Arrow /><Arrow /></span></Link>;
}
