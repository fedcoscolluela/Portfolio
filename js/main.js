const projects = {
  p1: {
    emoji: "🏥",
    tag: "Computer Vision · IoT",
    title: "Patient Monitor Transcription",
    desc: "Semi-automated patient monitor transcription system using OCR and IoT. Best Thesis (Score: 1.0/1.0, ranked 1st). Published at the 2023 6th International Conference on Digital Medicine and Image Processing.",
    stack: ["Python", "OpenCV", "OCR", "IoT", "Deep Learning"],
    link: "https://www.semanticscholar.org/paper/Using-Semi-Automated-Annotation-and-Optical-for-of-JanFedericoCoscolluela-Marasigan/a9520508c26dcbf3d83c41ad69fbf59655a90840",
  },
  p2: {
    emoji: "📦",
    tag: "Blockchain - Procurement",
    title: "Excellence Award, AppCon Hackathon 2022 (K++C)",
    desc: "Blockchain-based procurement system for the public sector by developing a smart contract on Ethereum to ensure transparency and efficiency in government procurement processes.",
    stack: ["Blockchain", "Hyperledger Fabric", "Societal Impact"],
    link: "https://appcon.otisphilippines.tech/winners",
  },
  p3: {
    emoji: "❤️",
    tag: "Data Analysis",
    title: "Heart Disease Dashboard",
    desc: "Multi-section analysis of cardiovascular diseases across various health indicators, presented as an interactive dashboard.",
    stack: ["Looker Data Studio", "Kaggle", "Data Analysis"],
    link: "https://lookerstudio.google.com/reporting/5726ed43-0043-4340-88c2-425e53161eb0",
  },
  p4: {
    emoji: "🏭",
    tag: "Manufacturing - Cost Automation",
    title: "Best Paper Award",
    desc: "Real-time cost automation system for manufacturing visibility of daily expense and budget tracking.",
    stack: ["Spring MVC", "Oracle SQL", "Denodo", "Data Virtualization"],
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
