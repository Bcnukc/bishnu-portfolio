import type { Metadata } from "next";
import ProjectView from "@/components/ProjectView";

export const metadata: Metadata = {
  title: "Low-Resource Nepali ASR — Bishnu K.C.",
  description: "Parameter-efficient fine-tuning of Whisper with LoRA for Nepali automatic speech recognition.",
};

export default function Page() {
  return <ProjectView slug="nepali-asr" />;
}
