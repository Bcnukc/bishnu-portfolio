import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bishnu K.C. — AI/ML Engineer",
  description:
    "AI/ML Engineer in Kathmandu building LLM applications, retrieval-augmented generation systems and low-resource Nepali language technology.",
  openGraph: {
    title: "Bishnu K.C. — AI/ML Engineer",
    description:
      "Generative AI, LLM applications, RAG, NLP, PyTorch and MLOps. Research on low-resource Nepali speech recognition.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <SmoothScroll />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
