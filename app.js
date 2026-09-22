/**
 * SANS AFAAQ Assessment - Interactive Application Engine
 * Manages Tab Navigation, Drills, Mock Exam, Flashcards, and Eye-Care Settings.
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeAndFont();
  initNavigation();
  renderSectionDrills();
  initFlashcards();
  initMockExam();
});

// ==========================================
// 1. THEME & EYE-CARE ACCESSIBILITY CONTROLS
// ==========================================
let currentFontSize = 16;

function initThemeAndFont() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const fontIncreaseBtn = document.getElementById("fontIncreaseBtn");
  const fontDecreaseBtn = document.getElementById("fontDecreaseBtn");

  // Load saved theme
  const savedTheme = localStorage.getItem("sans_theme") || "dark";
  if (savedTheme === "warm-light") {
    document.body.classList.add("warm-light");
    if (themeToggleBtn) themeToggleBtn.innerHTML = "🌙 الوضع الليلي";
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("warm-light");
      const isWarm = document.body.classList.contains("warm-light");
      localStorage.setItem("sans_theme", isWarm ? "warm-light" : "dark");
      themeToggleBtn.innerHTML = isWarm ? "🌙 الوضع الليلي" : "☀️ مريح للعين";
    });
  }

  // Font resize for eye comfort
  if (fontIncreaseBtn && fontDecreaseBtn) {
    fontIncreaseBtn.addEventListener("click", () => {
      if (currentFontSize < 24) {
        currentFontSize += 2;
        document.documentElement.style.setProperty("--font-base", `${currentFontSize}px`);
      }
    });

    fontDecreaseBtn.addEventListener("click", () => {
      if (currentFontSize > 14) {
        currentFontSize -= 2;
        document.documentElement.style.setProperty("--font-base", `${currentFontSize}px`);
      }
    });
  }
}

// ==========================================
// 2. TAB NAVIGATION
// ==========================================
function initNavigation() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const viewPanels = document.querySelectorAll(".view-panel");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");

      tabButtons.forEach(b => b.classList.remove("active"));
      viewPanels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const activePanel = document.getElementById(targetId);
      if (activePanel) {
        activePanel.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
}

// ==========================================
// 3. SECTION DRILLS (PRACTICE MODE)
// ==========================================
function renderSectionDrills() {
  renderPersonalityDrill();
  renderStandardDrill("logical", "logicalQuestionsContainer");
  renderStandardDrill("numerical", "numericalQuestionsContainer");
  renderStandardDrill("english", "englishQuestionsContainer");
}

function renderPersonalityDrill() {
  const container = document.getElementById("personalityQuestionsContainer");
  if (!container || !QUESTION_BANK.personality) return;

  container.innerHTML = QUESTION_BANK.personality.map((q, idx) => `
    <div class="question-item" id="q_card_${q.id}">
      <div class="question-header">
        <span class="question-num">عبارة ${idx + 1} من ${QUESTION_BANK.personality.length}</span>
        <span class="badge ${q.category.includes('⚠️') ? 'badge-amber' : 'badge'}">${q.category}</span>
      </div>
      <div class="question-text">${q.statement}</div>
      <div class="options-list">
        ${q.options.map((opt, optIdx) => `
          <button class="option-btn" onclick="handlePersonalityChoice('${q.id}', '${opt.value}', ${opt.score}, this)">
            <span>${opt.text}</span>
            <span class="choice-indicator">◯</span>
          </button>
        `).join("")}
      </div>
      <div class="explanation-box" id="exp_${q.id}">
        <div class="explanation-title">💡 سر التقييم والتوجيه المهني:</div>
        <div class="explanation-content">${q.explanation}</div>
      </div>
    </div>
  `).join("");
}

window.handlePersonalityChoice = function(qId, val, score, btnElem) {
  const card = document.getElementById(`q_card_${qId}`);
  const allBtns = card.querySelectorAll(".option-btn");
  allBtns.forEach(b => {
    b.classList.remove("selected");
    b.querySelector(".choice-indicator").textContent = "◯";
  });

  btnElem.classList.add("selected");
  btnElem.querySelector(".choice-indicator").textContent = "◉";

  const expBox = document.getElementById(`exp_${qId}`);
  if (expBox) expBox.classList.add("show");
};

function renderStandardDrill(sectionKey, containerId) {
  const container = document.getElementById(containerId);
  const questions = QUESTION_BANK[sectionKey];
  if (!container || !questions) return;

  container.innerHTML = questions.map((q, idx) => `
    <div class="question-item" id="q_card_${q.id}">
      <div class="question-header">
        <span class="question-num">سؤال ${idx + 1} من ${questions.length}</span>
        <span class="badge">${q.title || 'سؤال مهارة'}</span>
      </div>
      <div class="question-text">${q.questionText}</div>
      ${q.svgGraphic ? q.svgGraphic : ''}
      <div class="options-list">
        ${q.options.map((opt, optIdx) => `
          <button class="option-btn" onclick="handleChoice('${q.id}', ${opt.isCorrect}, this)">
            <span>${opt.text}</span>
            <span class="choice-indicator">◯</span>
          </button>
        `).join("")}
      </div>
      <div class="explanation-box" id="exp_${q.id}">
        <div class="explanation-title">💡 مفتاح الحل والشرح السريع:</div>
        <div class="explanation-content">${q.explanation}</div>
      </div>
    </div>
  `).join("");
}

window.handleChoice = function(qId, isCorrect, btnElem) {
  const card = document.getElementById(`q_card_${qId}`);
  const allBtns = card.querySelectorAll(".option-btn");

  allBtns.forEach(b => {
    b.classList.add("disabled");
    b.onclick = null;
  });

  if (isCorrect) {
    btnElem.classList.add("correct");
    btnElem.querySelector(".choice-indicator").textContent = "✓ صحيح";
  } else {
    btnElem.classList.add("wrong");
    btnElem.querySelector(".choice-indicator").textContent = "✕ خطأ";
  }

  const expBox = document.getElementById(`exp_${qId}`);
  if (expBox) expBox.classList.add("show");
};

// ==========================================
// 4. TIMED MOCK EXAM ENGINE
// ==========================================
let mockTimer = null;
let remainingSeconds = 77 * 60; // 77 mins standard
let mockQuestions = [];
let currentMockIndex = 0;
let userMockAnswers = {};

function initMockExam() {
  const startBtn = document.getElementById("startMockBtn");
  const quickStartBtn = document.getElementById("quickMockBtn");
  if (startBtn) {
    startBtn.addEventListener("click", () => startExam(77 * 60));
  }
  if (quickStartBtn) {
    quickStartBtn.addEventListener("click", () => startExam(15 * 60)); // 15-minute quick sprint
  }
}

function startExam(durationSeconds) {
  remainingSeconds = durationSeconds;
  userMockAnswers = {};
  currentMockIndex = 0;

  // Build combined questions list
  mockQuestions = [
    ...QUESTION_BANK.personality.slice(0, 6),
    ...QUESTION_BANK.logical.slice(0, 5),
    ...QUESTION_BANK.numerical.slice(0, 5),
    ...QUESTION_BANK.english.slice(0, 5)
  ];

  document.getElementById("mockIntroCard").style.display = "none";
  document.getElementById("mockActiveCard").style.display = "block";
  document.getElementById("mockResultCard").style.display = "none";

  renderMockPalette();
  renderCurrentMockQuestion();
  startTimerCountdown();
}

function startTimerCountdown() {
  clearInterval(mockTimer);
  updateTimerDisplay();
  mockTimer = setInterval(() => {
    remainingSeconds--;
    updateTimerDisplay();
    if (remainingSeconds <= 0) {
      clearInterval(mockTimer);
      finishExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(remainingSeconds / 60);
  const secs = remainingSeconds % 60;
  const display = document.getElementById("mockTimerDisplay");
  if (display) {
    display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
}

function renderMockPalette() {
  const palette = document.getElementById("mockQuestionPalette");
  if (!palette) return;

  palette.innerHTML = mockQuestions.map((q, idx) => `
    <button class="palette-num ${idx === currentMockIndex ? 'active' : ''} ${userMockAnswers[q.id] ? 'answered' : ''}" onclick="goToMockQuestion(${idx})">
      ${idx + 1}
    </button>
  `).join("");
}

window.goToMockQuestion = function(idx) {
  currentMockIndex = idx;
  renderMockPalette();
  renderCurrentMockQuestion();
};

function renderCurrentMockQuestion() {
  const container = document.getElementById("mockQuestionViewer");
  const q = mockQuestions[currentMockIndex];
  if (!container || !q) return;

  const isPersonality = q.type === "likert";

  container.innerHTML = `
    <div class="question-header">
      <span class="question-num">سؤال ${currentMockIndex + 1} من ${mockQuestions.length}</span>
      <span class="badge">${q.category || q.title || 'سؤال'}</span>
    </div>
    <div class="question-text">${q.statement || q.questionText}</div>
    ${q.svgGraphic ? q.svgGraphic : ''}
    <div class="options-list">
      ${q.options.map((opt, optIdx) => `
        <button class="option-btn ${userMockAnswers[q.id] === opt.text ? 'selected' : ''}" onclick="recordMockAnswer('${q.id}', '${opt.text}', ${isPersonality ? opt.score : (opt.isCorrect ? 1 : 0)}, this)">
          <span>${opt.text}</span>
          <span class="choice-indicator">${userMockAnswers[q.id] === opt.text ? '◉' : '◯'}</span>
        </button>
      `).join("")}
    </div>
  `;

  // Update Prev / Next buttons
  const prevBtn = document.getElementById("prevMockBtn");
  const nextBtn = document.getElementById("nextMockBtn");
  if (prevBtn) prevBtn.disabled = (currentMockIndex === 0);
  if (nextBtn) {
    nextBtn.textContent = (currentMockIndex === mockQuestions.length - 1) ? "إنهاء الاختبار وتأكيد التسليم 🏁" : "السؤال التالي ⬅️";
  }
}

window.recordMockAnswer = function(qId, text, scoreOrCorrect, btnElem) {
  userMockAnswers[qId] = text;
  userMockAnswers[qId + "_score"] = scoreOrCorrect;
  renderMockPalette();
  renderCurrentMockQuestion();
};

window.nextMockQuestion = function() {
  if (currentMockIndex < mockQuestions.length - 1) {
    currentMockIndex++;
    renderMockPalette();
    renderCurrentMockQuestion();
  } else {
    finishExam();
  }
};

window.prevMockQuestion = function() {
  if (currentMockIndex > 0) {
    currentMockIndex--;
    renderMockPalette();
    renderCurrentMockQuestion();
  }
};

function finishExam() {
  clearInterval(mockTimer);
  document.getElementById("mockActiveCard").style.display = "none";
  document.getElementById("mockResultCard").style.display = "block";

  // Calculate results
  let totalCognitive = 0;
  let correctCognitive = 0;
  let personalityTotalScore = 0;
  let personalityMaxScore = 0;

  mockQuestions.forEach(q => {
    if (q.type === "likert") {
      personalityTotalScore += (userMockAnswers[q.id + "_score"] || 0);
      personalityMaxScore += 5;
    } else {
      totalCognitive++;
      if (userMockAnswers[q.id + "_score"] === 1) {
        correctCognitive++;
      }
    }
  });

  const cognitivePercent = Math.round((correctCognitive / totalCognitive) * 100) || 0;
  const personalityPercent = Math.round((personalityTotalScore / personalityMaxScore) * 100) || 0;
  const overallScore = Math.round((cognitivePercent * 0.5) + (personalityPercent * 0.5));

  document.getElementById("resultOverallScore").textContent = `${overallScore}%`;
  document.getElementById("resultCognitiveScore").textContent = `${cognitivePercent}% (${correctCognitive}/${totalCognitive})`;
  document.getElementById("resultPersonalityScore").textContent = `${personalityPercent}%`;

  const statusBadge = document.getElementById("resultStatusBadge");
  if (statusBadge) {
    if (overallScore >= 80) {
      statusBadge.textContent = "مؤهل بامتياز لمرحلة المقابلة (Top Candidate)";
      statusBadge.className = "badge badge-green";
    } else if (overallScore >= 65) {
      statusBadge.textContent = "مستوى جيد مع فرصة تعزيز سرعة البديهة";
      statusBadge.className = "badge badge-amber";
    } else {
      statusBadge.textContent = "يحتاج مزيداً من التدريب على سرعة الحل";
      statusBadge.className = "badge";
    }
  }
}

// ==========================================
// 5. FLASHCARDS SYSTEM
// ==========================================
let currentCardIndex = 0;

function initFlashcards() {
  const cardElem = document.getElementById("activeFlashcard");
  const prevBtn = document.getElementById("prevCardBtn");
  const nextBtn = document.getElementById("nextCardBtn");

  if (!cardElem || !QUESTION_BANK.flashcards) return;

  renderFlashcard();

  cardElem.addEventListener("click", () => {
    cardElem.classList.toggle("flipped");
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentCardIndex > 0) {
        currentCardIndex--;
        cardElem.classList.remove("flipped");
        setTimeout(renderFlashcard, 150);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentCardIndex < QUESTION_BANK.flashcards.length - 1) {
        currentCardIndex++;
        cardElem.classList.remove("flipped");
        setTimeout(renderFlashcard, 150);
      }
    });
  }
}

function renderFlashcard() {
  const card = QUESTION_BANK.flashcards[currentCardIndex];
  if (!card) return;

  const frontElem = document.getElementById("flashcardFrontText");
  const backElem = document.getElementById("flashcardBackText");
  const counterElem = document.getElementById("flashcardCounter");

  if (frontElem) frontElem.innerHTML = card.front;
  if (backElem) backElem.innerHTML = card.back.replace(/\\n/g, "<br>");
  if (counterElem) counterElem.textContent = `بطاقة ${currentCardIndex + 1} من ${QUESTION_BANK.flashcards.length}`;

  const prevBtn = document.getElementById("prevCardBtn");
  const nextBtn = document.getElementById("nextCardBtn");
  if (prevBtn) prevBtn.disabled = (currentCardIndex === 0);
  if (nextBtn) nextBtn.disabled = (currentCardIndex === QUESTION_BANK.flashcards.length - 1);
}
