export default function ProjectPreview({ slug }: { slug: string }) {
  const isStudy = slug === "ghokante";
  const title = { "nepali-asr": "NEPALI ASR / RESEARCH", ghokante: "GHOKANTE / STUDY RESOURCES", "nepali-sentiment-analysis": "NEPALI NLP / RESEARCH", "nanu-babu-tv": "NANU BABU TV / PRODUCTION" }[slug];
  return <div className={`project-screen ${isStudy ? "screen-light" : ""}`} aria-label={`${title} project illustration`}>
    <div className="screen-bar"><i /><i /><i /><span>{title}</span></div>
    <div className="screen-body">
      {slug === "nepali-asr" && <><span className="screen-kicker">LOW-RESOURCE LANGUAGE TECHNOLOGY</span><h4>A voice for<br />every word.</h4><div className="waveform" aria-hidden="true">{Array.from({ length: 54 }, (_, i) => <i key={i} style={{ height: `${Math.round(10 + Math.abs(Math.sin(i * 1.73) * Math.cos(i * .21)) * 62)}px` }} />)}</div><div className="transcription" lang="ne">नेपाली आवाज, नयाँ सम्भावना।</div><p>Whisper · LoRA · Parameter-efficient fine-tuning</p></>}
      {isStudy && <><span className="screen-kicker">YOUR NEXT CHAPTER STARTS HERE</span><h4>Less searching.<br />More learning.</h4><div className="resource-grid"><span>01 / Course notes</span><span>02 / Past papers</span><span>03 / Study resources</span><span>04 / Semantic search</span></div><p style={{ marginTop: 20 }}>Built for university students in Nepal.</p></>}
      {slug === "nepali-sentiment-analysis" && <><span className="screen-kicker">BEYOND THE WORDS</span><h4>Understanding<br />Nepali sentiment.</h4><div className="sentiment-row"><span lang="ne">यो एकदम राम्रो छ।</span><b>POSITIVE</b></div><div className="sentiment-row"><span lang="ne">आजको समाचार।</span><b>NEUTRAL</b></div><div className="sentiment-row"><span lang="ne">मलाई मन परेन।</span><b>NEGATIVE</b></div><p style={{ marginTop: 20 }}>mBERT / XLM-R / MuRIL / NepBERTa</p></>}
      {slug === "nanu-babu-tv" && <><span className="screen-kicker">NEPALI STORIES, MADE TOGETHER</span><h4>Small stories.<br />Big imagination.</h4><div className="pipeline"><span>Script</span>→<span>Voice</span>→<span>Captions</span>→<span>Render</span></div><div className="transcription" lang="ne">नानी बाबुको रमाइलो संसार</div><p>Python / FFmpeg / Devanagari text shaping</p></>}
    </div>
  </div>;
}
