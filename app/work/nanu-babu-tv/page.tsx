import type { Metadata } from "next";
import ProjectView from "@/components/ProjectView";

export const metadata: Metadata = {
  title: "NANU BABU TV — Bishnu K.C.",
  description: "Automated Python and FFmpeg production pipeline for Nepali children's media with correct Devanagari rendering.",
};

export default function Page() {
  return <ProjectView slug="nanu-babu-tv" />;
}
