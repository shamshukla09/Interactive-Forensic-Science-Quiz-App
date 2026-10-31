const questions = [
  {
    topic: "Fingerprints",
    question: "Which fingerprint pattern is most common?",
    options: ["Arch", "Loop", "Whorl", "Composite"],
    answer: 1,
    explanation: "Loops are generally the most common fingerprint pattern."
  },
  {
    topic: "Fingerprints",
    question: "What is the scientific study of fingerprints called?",
    options: ["Serology", "Dactyloscopy", "Toxicology", "Odontology"],
    answer: 1,
    explanation: "Dactyloscopy is the study and identification of fingerprints."
  },
  {
    topic: "DNA Forensics",
    question: "Which molecule carries hereditary information?",
    options: ["RNA", "Protein", "DNA", "Lipid"],
    answer: 2,
    explanation: "DNA stores hereditary genetic information."
  },
  {
    topic: "DNA Forensics",
    question: "Which sample may provide DNA?",
    options: ["Hair root", "Clean glass", "Distilled water", "Plain metal"],
    answer: 0,
    explanation: "Hair roots may contain cells useful for DNA analysis."
  },
  {
    topic: "Crime Scene",
    question: "Why is a crime scene secured?",
    options: ["To clean it", "To preserve evidence", "To move objects", "To invite visitors"],
    answer: 1,
    explanation: "Securing a crime scene prevents contamination and evidence loss."
  },
  {
    topic: "Crime Scene",
    question: "What does chain of custody record?",
    options: ["Weather", "Evidence handling and transfer", "Suspect's hobbies", "Crime location only"],
    answer: 1,
    explanation: "It documents who collected, handled and transferred evidence."
  },
  {
    topic: "Ballistics",
    question: "What does forensic ballistics examine?",
    options: ["Firearms and bullets", "Fingerprints only", "Plants", "Handwriting"],
    answer: 0,
    explanation: "Forensic ballistics examines firearms, ammunition and projectile evidence."
  },
  {
    topic: "Ballistics",
    question: "What is the purpose of rifling?",
    options: ["Change colour", "Make the bullet spin", "Reduce weight", "Stop the cartridge"],
    answer: 1,
    explanation: "Rifling gives a bullet spin to help stabilize its flight."
  },
  {
    topic: "Toxicology",
    question: "What does forensic toxicology study?",
    options: ["Handwriting", "Drugs and poisons", "Footprints", "Soil only"],
    answer: 1,
    explanation: "It examines drugs, alcohol, poisons and chemicals in legal investigations."
  },
  {
    topic: "Toxicology",
    question: "Which sample is commonly used for alcohol testing?",
    options: ["Blood", "Fabric", "Glass", "Plastic"],
    answer: 0,
    explanation: "Blood is commonly analysed to determine alcohol concentration."
  },
  {
    topic: "Documents",
    question: "Which feature is examined in handwriting comparison?",
    options: ["Writing slant", "Eye colour", "Blood pressure", "Height"],
    answer: 0,
    explanation: "Writing slant and letter formation are useful comparison features."
  },
  {
    topic: "Digital Forensics",
    question: "What is digital forensics?",
    options: ["Study of fossils", "Examination of digital evidence", "Study of insects", "Study of plants"],
    answer: 1,
    explanation: "Digital forensics involves recovery and examination of digital evidence."
  },
  {
    topic: "Forensic Biology",
    question: "Which blood component helps in clotting?",
    options: ["Red cells", "Platelets", "White cells", "Water"],
    answer: 1,
    explanation: "Platelets help the blood clot."
  },
  {
    topic: "Anthropology",
    question: "Forensic anthropology examines which evidence?",
    options: ["Skeletal remains", "Passwords", "Ink only", "Computer files"],
    answer: 0,
    explanation: "Forensic anthropology examines skeletal remains in legal investigations."
  },
  {
    topic: "Entomology",
    question: "Forensic entomology mainly studies:",
    options: ["Fungi", "Insects", "Rocks", "Mosses"],
    answer: 1,
    explanation: "It studies insects associated with legal investigations."
  }
];

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

let currentQuestion = 0;
let score = 0;
let hasAnswered = false;

function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach(s => {
    s.classList.add("hidden");
  });
  screen.classList.remove("hidden");
}

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  hasAnswered = false;
  const q = questions[currentQuestion];

  document.getElementById("question-count").textContent =
    `QUESTION $DIL0 / $DIL1`;
