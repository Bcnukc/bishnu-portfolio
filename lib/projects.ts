export type Project = {
  slug: string;
  index: string;
  title: string;
  short: string;
  year: string;
  role: string;
  status: string;
  tags: string[];
  stack: string[];
  color: string;
  overview: string;
  challenge: string;
  approach: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "nepali-asr",
    index: "01",
    title: "Low-Resource Nepali ASR",
    short: "Parameter-efficient fine-tuning of Whisper for Nepali speech recognition.",
    year: "2026",
    role: "Master's Research",
    status: "In progress",
    tags: ["Research", "Speech", "PEFT"],
    stack: ["PyTorch", "Whisper", "LoRA / PEFT", "Hugging Face", "Python"],
    color: "#10b981",
    overview:
      "A master's research track comparing LoRA-based parameter-efficient fine-tuning against full fine-tuning of Whisper for Nepali automatic speech recognition, and building a spontaneous-speech benchmark the language currently lacks.",
    challenge:
      "Nepali is a low-resource language: transcribed audio is scarce, existing benchmarks are read-speech heavy, and full fine-tuning of a large multilingual model is expensive on the hardware most researchers in Nepal can reach.",
    approach: [
      "Compare LoRA / PEFT against full fine-tuning across accuracy, trainable parameter count and compute cost.",
      "Design a spontaneous-speech evaluation benchmark for Nepali — collection protocol, transcription guidelines and dataset preparation.",
      "Evaluate with Word Error Rate across read and spontaneous conditions to expose the gap between them.",
      "Document resource-efficiency trade-offs so the pipeline is reproducible on modest GPUs.",
    ],
    outcome:
      "An evaluation methodology and fine-tuning recipe aimed at making Nepali ASR trainable and measurable without large-scale infrastructure.",
  },
  {
    slug: "ghokante",
    index: "02",
    title: "Ghokante",
    short: "Full-stack study resource platform for Nepali university students.",
    year: "2025",
    role: "Design & Engineering",
    status: "In development",
    tags: ["Full-stack", "EdTech", "ML services"],
    stack: ["Next.js", "Go / Echo", "PostgreSQL", "Python", "Docker"],
    color: "#34d399",
    overview:
      "A platform that organises course materials, notes and past papers for university students in Nepal, with machine-learning services handling content processing and retrieval.",
    challenge:
      "Course material for Nepali universities is scattered across chat groups and drives — unversioned, unsearchable and impossible to trust close to exams.",
    approach: [
      "Architected a Next.js frontend over a Go/Echo API with PostgreSQL as the source of truth.",
      "Separated Python ML services for content processing, tagging and intelligent retrieval.",
      "Modelled subjects, semesters and resource types so material maps to real syllabi.",
      "Built for incremental contribution — resources improve as students add to them.",
    ],
    outcome:
      "A structured, searchable resource layer for a student population currently served by ad-hoc file sharing.",
  },
  {
    slug: "nepali-sentiment-analysis",
    index: "03",
    title: "Nepali Sentiment Analysis",
    short: "Multilingual transformers benchmarked on Devanagari sentiment classification.",
    year: "2025",
    role: "Research Project",
    status: "Completed",
    tags: ["NLP", "Transformers", "Evaluation"],
    stack: ["mBERT", "XLM-RoBERTa", "MuRIL", "NepBERTa", "PyTorch"],
    color: "#059669",
    overview:
      "A comparative study of multilingual transformer architectures — mBERT, XLM-RoBERTa, MuRIL and NepBERTa — on Nepali sentiment classification, documented in research-paper format.",
    challenge:
      "Multilingual models claim broad coverage, but tokenisation and transfer behaviour on Devanagari script vary widely and are rarely measured side by side for Nepali.",
    approach: [
      "Standardised preprocessing and evaluation so the four architectures were compared on equal footing.",
      "Analysed tokenisation behaviour on Devanagari and its effect on downstream accuracy.",
      "Examined cross-lingual transfer for a low-resource classification task.",
      "Carried out error analysis and documented methodology, results and limitations.",
    ],
    outcome:
      "A reproducible comparison showing where language-specific pretraining pays off against general multilingual models for Nepali.",
  },
  {
    slug: "nanu-babu-tv",
    index: "04",
    title: "NANU BABU TV",
    short: "Automated Nepali media production pipeline for children's content.",
    year: "2024",
    role: "Creator & Engineer",
    status: "Ongoing",
    tags: ["Automation", "FFmpeg", "Devanagari"],
    stack: ["Python", "FFmpeg", "Pillow", "HarfBuzz / RAQM", "Generative media"],
    color: "#6ee7b7",
    overview:
      "A Nepali children's channel producing animated nursery rhymes and balgeet, built on a Python and FFmpeg pipeline that turns manual editing into a repeatable render.",
    challenge:
      "Devanagari captions break in most automated rendering pipelines — conjuncts and matras need proper text shaping, and manual editing per episode does not scale.",
    approach: [
      "Built Python and FFmpeg workflows for rendering, caption processing, audio integration and post-processing.",
      "Implemented Devanagari text rendering with Pillow and HarfBuzz/RAQM-compatible shaping for correct conjunct forms.",
      "Integrated generative media tools into a repeatable production workflow.",
      "Standardised episode structure so new content is configuration, not re-editing.",
    ],
    outcome:
      "A production pipeline that cuts manual editing per episode and renders Nepali captions correctly by default.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getNext = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
