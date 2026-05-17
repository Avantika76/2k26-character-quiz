/* =========================
   CHARACTER DATA
========================= */

const characters = {
  blossom: {
    name: "Blossom 🌸",
    score: 0,
    img: "images/blossom.jpeg",
    title: "The Comfort Soul",
    desc: "You’re the emotional safe space. Soft, nurturing, and deeply caring — you show love in quiet ways that mean everything. People feel calmer just being around you.",
    vibe: "Core vibe: warm hugs, check-in texts, pastel energy",
    quote: "Iconic Line: “Did you eat?”"
  },

  pebble: {
    name: "Pebble 🐧",
    score: 0,
    img: "images/pebble.jpeg",
    title: "The Quiet Comfort",
    desc: "Calm, cozy, and emotionally steady. You don’t say much, but your presence alone is reassuring. Low drama, high loyalty.",
    vibe: "Core vibe: rainy nights, hoodies, silent support",
    quote: "Iconic Line: “I’m here.”"
  },

  mochi: {
    name: "Mochi 🐺",
    score: 0,
    img: "images/mochi.jpeg",
    title: "The Soft Chaos",
    desc: "You feel everything deeply and express it honestly. Emotional, affectionate, and intense in the best way. You love loudly and care fiercely.",
    vibe: "Core vibe: emotional playlists, late-night rants",
    quote: "Iconic Line: “Why am I like this??”"
  },

  nimbus: {
    name: "Nimbus 🐨",
    score: 0,
    img: "images/nimbus.jpeg",
    title: "The Gentle Thinker",
    desc: "Thoughtful, introspective, and calm. You observe before reacting and value peace over noise. Quiet wisdom is your strength.",
    vibe: "Core vibe: nature walks, deep thoughts, soft silence",
    quote: "Iconic Line: “Let me think about this.”"
  },

  drift: {
    name: "Drift 🐢",
    score: 0,
    img: "images/drift.jpeg",
    title: "The Steady Soul",
    desc: "Grounded, patient, and emotionally mature. You move at your own pace and bring stability wherever you go.",
    vibe: "Core vibe: slow days, steady comfort",
    quote: "Iconic Line: “One step at a time.”"
  },

  ember: {
    name: "Ember 🦊",
    score: 0,
    img: "images/ember.jpeg",
    title: "The Quiet Spark",
    desc: "Confident, playful, and subtly magnetic. You don’t chase attention — it finds you. Independent with a warm core.",
    vibe: "Core vibe: soft confidence, playful charm",
    quote: "Iconic Line: “I know who I am.”"
  },

  maple: {
    name: "Maple 🐄",
    score: 0,
    img: "images/maple.jpeg",
    title: "The Emotional Anchor",
    desc: "Dependable, protective, and deeply caring. You’re the one people rely on when things fall apart.",
    vibe: "Core vibe: routines, care, emotional safety",
    quote: "Iconic Line: “Text me when you’re home.”"
  },

  indigo: {
    name: "Indigo 🦚",
    score: 0,
    img: "images/indigo.jpeg",
    title: "The Creative Depth",
    desc: "Creative, elegant, and emotionally rich. You have a deep inner world and express yourself with quiet confidence.",
    vibe: "Core vibe: art, introspection, authenticity",
    quote: "Iconic Line: “I don’t need to be loud to shine.”"
  }
};




/* =========================
   QUIZ QUESTIONS
========================= */

const quizData = [

{
  question: "It’s 2 AM and you can’t sleep. What are you doing?",
  options: [
    { text: "Thinking about people I care about", addsTo: ["blossom", "maple"] },
    { text: "Scrolling quietly until I pass out", addsTo: ["pebble"] },
    { text: "Listening to sad music and spiraling", addsTo: ["mochi"] },
    { text: "Overthinking life and the future", addsTo: ["nimbus", "indigo"] }
  ]
},

{
  question: "Your friend says “we need to talk.”",
  options: [
    { text: "Instant worry, but I stay calm for them", addsTo: ["blossom", "maple"] },
    { text: "Mentally preparing but saying nothing", addsTo: ["pebble"] },
    { text: "PANIC. WHAT DID I DO.", addsTo: ["mochi"] },
    { text: "Analyzing every possible scenario", addsTo: ["nimbus"] }
  ]
},

{
  question: "Your comfort content is mostly…",
  options: [
    { text: "Soft, wholesome videos", addsTo: ["blossom"] },
    { text: "Long YouTube videos playing in the background", addsTo: ["pebble"] },
    { text: "Emotional edits / playlists", addsTo: ["mochi"] },
    { text: "Aesthetic or artsy content", addsTo: ["indigo"] }
  ]
},

{
  question: "When you’re overwhelmed, you usually…",
  options: [
    { text: "Check in on others instead", addsTo: ["maple", "blossom"] },
    { text: "Disappear for a bit", addsTo: ["pebble"] },
    { text: "Cry it out and vent", addsTo: ["mochi"] },
    { text: "Detach and think logically", addsTo: ["nimbus", "drift"] }
  ]
},

{
  question: "Pick a random vibe that feels like you",
  options: [
    { text: "Warm hugs and reassurance", addsTo: ["blossom"] },
    { text: "Rainy days and quiet rooms", addsTo: ["pebble"] },
    { text: "Emotional chaos but cute", addsTo: ["mochi"] },
    { text: "Calm walks and deep thoughts", addsTo: ["nimbus", "drift"] }
  ]
},

{
  question: "Your phone gallery is mostly…",
  options: [
    { text: "People I love", addsTo: ["maple", "blossom"] },
    { text: "Random screenshots I forgot about", addsTo: ["pebble"] },
    { text: "Memes + emotional screenshots", addsTo: ["mochi"] },
    { text: "Aesthetic pics / nature / art", addsTo: ["indigo"] }
  ]
},

{
  question: "Someone compliments you. You…",
  options: [
    { text: "Smile and feel soft about it", addsTo: ["blossom"] },
    { text: "Say thanks quietly", addsTo: ["pebble"] },
    { text: "Overthink it for the rest of the day", addsTo: ["mochi"] },
    { text: "Accept it and move on", addsTo: ["ember"] }
  ]
},

{
  question: "Your role in the friend group is…",
  options: [
    { text: "The emotional support", addsTo: ["blossom", "maple"] },
    { text: "The quiet but reliable one", addsTo: ["pebble", "drift"] },
    { text: "The expressive one", addsTo: ["mochi"] },
    { text: "The voice of reason", addsTo: ["nimbus"] }
  ]
},

{
  question: "When plans get cancelled, you secretly feel…",
  options: [
    { text: "A little sad but I understand", addsTo: ["blossom"] },
    { text: "Relieved honestly", addsTo: ["pebble"] },
    { text: "Emotionally rejected", addsTo: ["mochi"] },
    { text: "Neutral — it happens", addsTo: ["drift"] }
  ]
},

{
  question: "Your toxic trait (but make it cute)",
  options: [
    { text: "Caring too much", addsTo: ["blossom", "maple"] },
    { text: "Going quiet instead of explaining", addsTo: ["pebble"] },
    { text: "Feeling everything too deeply", addsTo: ["mochi"] },
    { text: "Overthinking every decision", addsTo: ["nimbus", "indigo"] }
  ]
},

{
  question: "You feel most at peace when…",
  options: [
    { text: "Everyone around me is okay", addsTo: ["maple"] },
    { text: "I’m alone with no expectations", addsTo: ["pebble"] },
    { text: "I’ve expressed my feelings", addsTo: ["mochi"] },
    { text: "My mind feels clear", addsTo: ["nimbus", "drift"] }
  ]
},

{
  question: "Your energy lately has been…",
  options: [
    { text: "Soft and caring", addsTo: ["blossom"] },
    { text: "Low but stable", addsTo: ["pebble", "drift"] },
    { text: "Emotionally intense", addsTo: ["mochi"] },
    { text: "Quietly reflective", addsTo: ["indigo"] }
  ]
},

{
  question: "Pick a text you’re most likely to send",
  options: [
    { text: "Did you eat today?", addsTo: ["maple"] },
    { text: "lol", addsTo: ["pebble"] },
    { text: "Can I rant for a sec?", addsTo: ["mochi"] },
    { text: "I need time to think", addsTo: ["nimbus"] }
  ]
},

{
  question: "What drains you the fastest?",
  options: [
    { text: "Seeing people I love struggle", addsTo: ["blossom", "maple"] },
    { text: "Too much noise or socializing", addsTo: ["pebble"] },
    { text: "Emotional distance", addsTo: ["mochi"] },
    { text: "Meaningless conversations", addsTo: ["indigo", "nimbus"] }
  ]
},

{
  question: "At the end of the day, you want to feel…",
  options: [
    { text: "Loved", addsTo: ["blossom", "maple"] },
    { text: "Calm", addsTo: ["pebble", "drift"] },
    { text: "Understood", addsTo: ["mochi", "indigo"] },
    { text: "Grounded", addsTo: ["nimbus"] }
  ]
}

];



/* =========================
   DOM ELEMENTS
========================= */

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const progressText = document.getElementById("progress");

const screens = {
  start: document.getElementById("start-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen")
};


/* =========================
   STATE
========================= */

let currentQuestion = 0;


/* =========================
   SCREEN CONTROL
========================= */

function showScreen(name) {
  Object.values(screens).forEach(screen =>
    screen.classList.remove("active")
  );
  screens[name].classList.add("active");
}


/* =========================
   QUIZ FLOW
========================= */

function startQuiz() {
  currentQuestion = 0;
  Object.values(characters).forEach(c => c.score = 0);
  showScreen("quiz");
  loadQuestion();
}

function loadQuestion() {
  const q = quizData[currentQuestion];

  questionText.textContent = q.question;
  optionsContainer.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option.text;

    btn.onclick = () => {
      option.addsTo.forEach(char => {
        characters[char].score++;
      });
      nextQuestion();
    };

    optionsContainer.appendChild(btn);
  });

  progressText.textContent = `Question ${currentQuestion + 1} / ${quizData.length}`;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}


/* =========================
   RESULT
========================= */

function showResult() {
  showScreen("result");

  const sorted = Object.values(characters)
    .sort((a, b) => b.score - a.score);

  const winner = sorted[0];

  document.getElementById("result-img").src = winner.img;
  document.getElementById("result-img").alt = winner.name;

  document.getElementById("result-name").textContent = winner.name;
  document.getElementById("result-title").textContent = winner.title;
  document.getElementById("result-desc").textContent = winner.desc;
  document.getElementById("result-vibe").textContent = winner.vibe;
  document.getElementById("result-quote").textContent = winner.quote;
}



function restartQuiz() {
  showScreen("start");
}

function shareResult() {
  const winnerName = document.getElementById("result-name").textContent;

  const shareText =
    `i made a cute lil quiz 🥹✨\n` +
    `i got ${winnerName} 👀\n` +
    `check yours and see what your 2026 vibe is 💫`;

  const shareUrl = window.location.href;

  if (navigator.share) {
    navigator.share({
      title: "What's Your 2026 Vibe?",
      text: shareText,
      url: shareUrl
    }).catch(err => {
      console.log("Share cancelled", err);
    });
  } else {
    // Fallback for desktop
    navigator.clipboard.writeText(shareText + "\n" + shareUrl);
    alert("Link copied! Share it with your friends 💗");
  }
}

