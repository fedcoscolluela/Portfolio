const projects = {
  p1: {
    emoji: "🏥",
    tag: "Computer Vision · IoT",
    title: "Patient Monitor Transcription",
    desc: "Semi-automated patient monitor transcription system using OCR and IoT. Best Thesis (Score: 1.0/1.0, ranked 1st). Published at the 2023 6th International Conference on Digital Medicine and Image Processing.",
    stack: ["Python", "OpenCV", "OCR", "IoT", "Deep Learning"],
    link: "#",
  },
  p2: {
    emoji: "🤖",
    tag: "AI · Enterprise",
    title: "LLM Assistant on Manufacturing Systems",
    desc: "Virtualized diverse enterprise data sources into cloud architecture facilitating predictive analytics and forecasting. Won Best Paper Award at ASEMEP National Technical Symposium.",
    stack: ["LLM", "Denodo", "AWS", "Python", "Cloud Architecture"],
    link: "#",
  },
  p3: {
    emoji: "❤️",
    tag: "Data Analysis",
    title: "Heart Disease Dashboard",
    desc: "Multi-section analysis of cardiovascular diseases across various health indicators, presented as an interactive dashboard.",
    stack: ["R", "Data Visualization", "Statistical Modelling"],
    link: "#",
  },
  p4: {
    emoji: "₿",
    tag: "Network Analysis",
    title: "SNAP-Bitcoin Trust Network",
    desc: "Who-Trusts-Whom network analysis on the SNAP-Bitcoin dataset using centrality measures and cluster analysis with Louvain and Leiden algorithms.",
    stack: ["Python", "NetworkX", "Louvain", "Leiden", "Graph Analysis"],
    link: "#",
  },
};

function openModal(id) {
  const p = projects[id];
  document.getElementById("mEmoji").textContent = p.emoji;
  document.getElementById("mTag").textContent = p.tag;
  document.getElementById("mTitle").textContent = p.title;
  document.getElementById("mDesc").textContent = p.desc;
  document.getElementById("mStack").innerHTML = p.stack
    .map((s) => `<span class="modal-chip">${s}</span>`)
    .join("");
  document.getElementById("mLink").href = p.link;
  document.getElementById("projModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(e) {
  if (e.target === document.getElementById("projModal")) closeModalDirect();
}

function closeModalDirect() {
  document.getElementById("projModal").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModalDirect();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
