import type { Metadata } from "next";
import ProjectView from "@/components/ProjectView";

export const metadata: Metadata = {
  title: "Nepali Sentiment Analysis — Bishnu K.C.",
  description: "Benchmarking mBERT, XLM-RoBERTa, MuRIL and NepBERTa on Nepali sentiment classification.",
};

export default function Page() {
  return <ProjectView slug="nepali-sentiment-analysis" />;
}
