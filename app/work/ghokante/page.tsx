import type { Metadata } from "next";
import ProjectView from "@/components/ProjectView";

export const metadata: Metadata = {
  title: "Ghokante — Bishnu K.C.",
  description: "Full-stack study resource platform for Nepali university students, built with Next.js, Go and Python ML services.",
};

export default function Page() {
  return <ProjectView slug="ghokante" />;
}
