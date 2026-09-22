/**
 * SANS AFAAQ Assessment - Master Interactive Application Engine
 * Supports: Explicit Segmented Language Switch (AR/EN), Eye-Care Mode, Font Sizing, Drills, Mock Exam & Flashcards.
 */

let currentLang = localStorage.getItem("sans_lang") || "ar";
let currentFontSize = 16;

document.addEventListener("DOMContentLoaded", () => {
  initThemeAndFont();
  initNavigation();
  setAppLanguage(currentLang);
  initFlashcards();
  initMockExam();
});

// ==========================================
// 1. DYNAMIC BILINGUAL DICTIONARY
// ==========================================
const UI_TRANSLATIONS = {
  ar: {
    brandTitle: "SANS AFAAQ | محاكي الاختبار التأهيلي",
    brandSubtitle: "شركة خدمات الملاحة الجوية السعودية • إعداد منصة Mercer Mettl",
    themeWarm: "☀️ مريح للعين",
    themeDark: "🌙 الوضع الليلي",
    tabStrategy: "📘 خطة النجاح والتكنيك",
    tabPersonality: "🧠 مقياس الشخصية (MPP)",
    tabLogical: "📐 المنطق والأشكال (SVG)",
    tabNumerical: "🔢 القدرة العددية والحساب",
    tabEnglish: "🇬🇧 اللغة الإنجليزية المهنية",
    tabMock: "⏱️ المحاكي الكامل (المؤقت)",
    tabFlashcards: "📇 بطاقات المراجعة السريعة",
    
    // Strategy
    statFormula: "📊 تحليل معادلة الاختبار (199 سؤال في 77 دقيقة)",
    statTotalQ: "إجمالي عدد الأسئلة",
    statDuration: "زمن الاختبار الكلي",
    statAvgTime: "متوسط وقت كل سؤال",
    statSections: "شخصية • منطق • أرقام • إنجليزي",
    statReassurance: "💡 الحقيقة المطمئنة: رقم (199 سؤال) يبدو ضخماً، لكنه يضم مقياس السمات الشخصية والسلوكية (~100 عبارة) التي تُحل في 3 إلى 5 ثوانٍ فقط، مما يوفر وقتاً كافياً لبقية المسائل!",
    proctoringTitle: "🛡️ القواعد الذهبية للسلامة والمراقبة (Proctoring)",
    proctoringRules: `
      <strong>⚠️ تنبيهات المراقبة الصارمة:</strong>
      <ul style="margin-right: 20px; margin-top: 8px;">
        <li><strong>الكاميرا والمايكروفون:</strong> مراقبة حية بواسطة الذكاء الاصطناعي (تتبع حركة العين والوجه، رصد الأصوات الخارجية).</li>
        <li><strong>ممنوع تبديل التبويب (Tab Switching):</strong> خروج المؤشر أو فتح أي صفحة أخرى يسجل فوراً كـ 'مخالفة' وقد يُلغى اختبارك!</li>
        <li><strong>ممنوع ترك أي سؤال فارغ (No Negative Marking):</strong> لا يوجد خصم درجات على الخطأ؛ خمن الأسئلة المتبقية دائماً.</li>
      </ul>
    `,
    sansValues: `
      <strong>🎯 الركائز الأربع التي تبحث عنها شركة الملاحة الجوية (SANS):</strong>
      <ol style="margin-right: 20px; margin-top: 8px;">
        <li><strong>السلامة أولاً (Safety First):</strong> لا تساهل في أي خلل أو مجاملة على حساب الأنظمة.</li>
        <li><strong>الالتزام الصارم بالإجراءات (Strict SOP Adherence):</strong> اتباع التعليمات المعتمدة بدقة.</li>
        <li><strong>الثبات والهدوء تحت الضغط (Emotional Stability):</strong> السيطرة على النفس عند الطوارئ.</li>
        <li><strong>روح الفريق الواحد (Teamwork):</strong> الملاحة منظومة متكاملة لا تقبل الفردية.</li>
      </ol>
    `,

    // Cards
    cardPersonalityTitle: "🧠 تدريب مقياس الشخصية وأسلوب العمل (Mettl Personality Profiler)",
    cardPersonalityBadge: "القسم الأكبر (~100 عبارة)",
    cardPersonalityDesc: "اختر الإجابة لكل عبارة لتكتشف مباشرة التوجيه المهني الخاص ببيئة الملاحة الجوية، وكيف تكتشف خوارزميات النظام فخاخ 'المثالية المصطنعة' (Lie Scale).",
    
    cardLogicalTitle: "📐 تدريب الاستدلال المنطقي وسلاسل الأشكال (Visual Logic)",
    cardLogicalBadge: "SVG & Matrices",
    cardLogicalDesc: "تدرب على سرعة التقاط النمط (دوران الزوايا، التظليل، والاستنتاج القياسي) مع مفتاح الحل المباشر لكل نمط في 15 ثانية.",

    cardNumericalTitle: "🔢 تدريب القدرة العددية والحساب السريع (Mental Math)",
    cardNumericalBadge: "15-Second Shortcuts",
    cardNumericalDesc: "تدرب على استراتيجية الحل الذهني السريع للنسب المئوية ومسائل السرعة والمسافة والبيانات دون الحاجة لحسابات معقدة.",

    cardEnglishTitle: "🇬🇧 تدريب اللغة الإنجليزية المهنية (English Proficiency)",
    cardEnglishBadge: "Grammar & Aviation Terms",
    cardEnglishDesc: "أهم القواعد الشائعة في اختبارات Mettl (Subject-Verb Agreement، أدوات الربط، وحروف الجر الدقيقة ومفردات الطيران).",

    // Mock Exam
    mockTitle: "⏱️ المحاكي الواقعي لاختبار SANS AFAAQ",
    mockDesc: "هذا المحاكي يجمع لك نماذج متوازنة من الأقسام الأربعة، ويقيس سرعتك ودقتك في الإجابة تحت ضغط الوقت مع مؤقت تنازلي حقيقي.",
    mockBtnFull: "🚀 بدء الاختبار الكامل (مؤقت 77 دقيقة)",
    mockBtnQuick: "⚡ تدريب السرعة الخاطف (15 دقيقة)",
    mockTimeRemaining: "الوقت المتبقي:",
    mockFinishNow: "إنهاء وتسليم الآن",
    mockPrev: "➡️ السابق",
    mockNext: "التالي ⬅️",
    mockSubmitFinal: "إنهاء الاختبار وتأكيد التسليم 🏁",
    mockResultTitle: "🎉 تقرير النتيجة ومستوى الجاهزية",
    mockOverall: "التقييم العام الكلي",
    mockCognitive: "القدرات الذهنية واللغة",
    mockFit: "مطابقة شخصية الملاحة (Fit)",
    mockRetake: "🔄 إعادة التدريب السريع",

    // Flashcards
    cardFlashcardsTitle: "📇 بطاقات المراجعة الذهنية السريعة",
    cardFlashcardsDesc: "المس البطاقة أو اضغط عليها لتقليبها ورؤية الإجابة والقاعدة الذهبية.",
    flashcardHintFront: "اضغط للقلب 🔄",
    flashcardHintBack: "اضغط للعودة 🔄",
    flashcardPrev: "➡️ السابقة",
    flashcardNext: "التالية ⬅️",

    footerText: "منصة التدريب لبرنامج آفاق (SANS AFAAQ) • مخصصة للأستاذ طارق ابوعشي"
  },
  en: {
    brandTitle: "SANS AFAAQ Assessment Prep",
    brandSubtitle: "Saudi Air Navigation Services • Mercer | Mettl Benchmark Simulator",
    themeWarm: "☀️ Eye-Care Mode",
    themeDark: "🌙 Dark Mode",
    tabStrategy: "📘 Strategy & Rules",
    tabPersonality: "🧠 Personality (MPP)",
    tabLogical: "📐 Logical Reasoning",
    tabNumerical: "🔢 Numerical Ability",
    tabEnglish: "🇬🇧 English Verbal",
    tabMock: "⏱️ Timed Mock Exam",
    tabFlashcards: "📇 Flashcards",

    // Strategy
    statFormula: "📊 Assessment Formula Breakdown (199 Qs in 77 Mins)",
    statTotalQ: "Total Questions",
    statDuration: "Total Duration",
    statAvgTime: "Avg. Time per Question",
    statSections: "Personality • Logic • Math • English",
    statReassurance: "💡 Key Reassurance: The 199 questions include the Mettl Personality Profiler (~80-100 items), which are rapid statements answered in 3-5 seconds each, preserving ample time for math and logic!",
    proctoringTitle: "🛡️ Critical Proctoring & Exam Regulations",
    proctoringRules: `
      <strong>⚠️ Strict AI Proctoring Rules:</strong>
      <ul style="margin-left: 20px; margin-top: 8px;">
        <li><strong>Camera & Mic Monitoring:</strong> AI tracks gaze, head turns, multiple faces, and ambient sounds. Look straight at the screen.</li>
        <li><strong>NO Tab Switching:</strong> Leaving the test window triggers an instant strike and may terminate your exam!</li>
        <li><strong>NO Negative Marking:</strong> Zero penalty for wrong answers. Always guess remaining questions before time runs out!</li>
      </ul>
    `,
    sansValues: `
      <strong>🎯 SANS Core Evaluation Pillars:</strong>
      <ol style="margin-left: 20px; margin-top: 8px;">
        <li><strong>Safety First:</strong> Zero tolerance for compromises or shortcuts in aviation procedures.</li>
        <li><strong>Strict SOP Compliance:</strong> Consistently following standard operating procedures.</li>
        <li><strong>Emotional Stability:</strong> Remaining calm, methodical, and collected in high-stress scenarios.</li>
        <li><strong>Team Collaboration:</strong> Air navigation requires harmonious coordination across multiple units.</li>
      </ol>
    `,

    // Cards
    cardPersonalityTitle: "🧠 Mettl Personality Profiler (MPP) Practice",
    cardPersonalityBadge: "Major Section (~100 items)",
    cardPersonalityDesc: "Select your response for each statement to see how Mettl evaluates the trait and how it flags 'social desirability / lie scale' attempts.",

    cardLogicalTitle: "📐 Logical & Abstract Reasoning (Visual Logic)",
    cardLogicalBadge: "SVG & Matrices",
    cardLogicalDesc: "Master pattern recognition (rotations, matrix logic, deduction) with instant 15-second shortcut explanations.",

    cardNumericalTitle: "🔢 Numerical Ability & Mental Math",
    cardNumericalBadge: "15-Second Shortcuts",
    cardNumericalDesc: "Practice fast calculations for percentages, speed-distance-time, and data tables without complex scratch work.",

    cardEnglishTitle: "🇬🇧 Professional English Proficiency",
    cardEnglishBadge: "Grammar & Aviation Terms",
    cardEnglishDesc: "High-frequency grammar rules (Subject-Verb agreement, prepositions, conjunctions) tested in Mettl exams.",

    // Mock Exam
    mockTitle: "⏱️ Realistic SANS AFAAQ Mock Exam",
    mockDesc: "This timed mock exam synthesizes questions from all 4 sections to test your pacing, accuracy, and composure under realistic test conditions.",
    mockBtnFull: "🚀 Start Full Exam (77-Minute Timer)",
    mockBtnQuick: "⚡ Speed Sprint Drill (15-Minute Timer)",
    mockTimeRemaining: "Time Remaining:",
    mockFinishNow: "Finish & Submit Now",
    mockPrev: "⬅️ Previous",
    mockNext: "Next ➡️",
    mockSubmitFinal: "Finish Exam & Submit 🏁",
    mockResultTitle: "🎉 Readiness Scorecard & Report",
    mockOverall: "Overall Readiness Score",
    mockCognitive: "Cognitive & Verbal Ability",
    mockFit: "SANS Job & Culture Fit",
    mockRetake: "🔄 Retake Speed Sprint",

    // Flashcards
    cardFlashcardsTitle: "📇 Quick Revision Flashcards",
    cardFlashcardsDesc: "Tap or click the card to flip and view the answer and secret key.",
    flashcardHintFront: "Tap to flip 🔄",
    flashcardHintBack: "Tap to return 🔄",
    flashcardPrev: "⬅️ Previous",
    flashcardNext: "Next ➡️",

    footerText: "SANS AFAAQ Assessment Preparation Platform • Customized for Tariq Aboushi"
  }
};

// ==========================================
// 2. EXPLICIT LANGUAGE SWITCHER FUNCTION
// ==========================================
window.setAppLanguage = function(lang) {
  currentLang = lang;
  localStorage.setItem("sans_lang", lang);

  const isAr = (lang === "ar");
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? "rtl" : "ltr";
  document.body.style.direction = isAr ? "rtl" : "ltr";

  // Update active pill state
  const btnAr = document.getElementById("btnLangAr");
  const btnEn = document.getElementById("btnLangEn");
  if (btnAr && btnEn) {
    btnAr.classList.toggle("active", isAr);
    btnEn.classList.toggle("active", !isAr);
  }

  const t = UI_TRANSLATIONS[lang];
  const el = id => document.getElementById(id);

  // Update static UI elements
  if (el("uiBrandTitle")) el("uiBrandTitle").textContent = t.brandTitle;
  if (el("uiBrandSubtitle")) el("uiBrandSubtitle").textContent = t.brandSubtitle;

  if (el("uiTabStrategy")) el("uiTabStrategy").textContent = t.tabStrategy;
  if (el("uiTabPersonality")) el("uiTabPersonality").textContent = t.tabPersonality;
  if (el("uiTabLogical")) el("uiTabLogical").textContent = t.tabLogical;
  if (el("uiTabNumerical")) el("uiTabNumerical").textContent = t.tabNumerical;
  if (el("uiTabEnglish")) el("uiTabEnglish").textContent = t.tabEnglish;
  if (el("uiTabMock")) el("uiTabMock").textContent = t.tabMock;
  if (el("uiTabFlashcards")) el("uiTabFlashcards").textContent = t.tabFlashcards;

  if (el("uiStatFormula")) el("uiStatFormula").textContent = t.statFormula;
  if (el("uiStatTotalQ")) el("uiStatTotalQ").textContent = t.statTotalQ;
  if (el("uiStatDuration")) el("uiStatDuration").textContent = t.statDuration;
  if (el("uiStatAvgTime")) el("uiStatAvgTime").textContent = t.statAvgTime;
  if (el("uiStatSections")) el("uiStatSections").textContent = t.statSections;
  if (el("uiStatReassurance")) el("uiStatReassurance").innerHTML = t.statReassurance;

  if (el("uiProctoringTitle")) el("uiProctoringTitle").textContent = t.proctoringTitle;
  if (el("uiProctoringRules")) el("uiProctoringRules").innerHTML = t.proctoringRules;
  if (el("uiSansValues")) el("uiSansValues").innerHTML = t.sansValues;

  if (el("uiCardPersonalityTitle")) el("uiCardPersonalityTitle").textContent = t.cardPersonalityTitle;
  if (el("uiCardPersonalityBadge")) el("uiCardPersonalityBadge").textContent = t.cardPersonalityBadge;
  if (el("uiCardPersonalityDesc")) el("uiCardPersonalityDesc").textContent = t.cardPersonalityDesc;

  if (el("uiCardLogicalTitle")) el("uiCardLogicalTitle").textContent = t.cardLogicalTitle;
  if (el("uiCardLogicalBadge")) el("uiCardLogicalBadge").textContent = t.cardLogicalBadge;
  if (el("uiCardLogicalDesc")) el("uiCardLogicalDesc").textContent = t.cardLogicalDesc;

  if (el("uiCardNumericalTitle")) el("uiCardNumericalTitle").textContent = t.cardNumericalTitle;
  if (el("uiCardNumericalBadge")) el("uiCardNumericalBadge").textContent = t.cardNumericalBadge;
  if (el("uiCardNumericalDesc")) el("uiCardNumericalDesc").textContent = t.cardNumericalDesc;

  if (el("uiCardEnglishTitle")) el("uiCardEnglishTitle").textContent = t.cardEnglishTitle;
  if (el("uiCardEnglishBadge")) el("uiCardEnglishBadge").textContent = t.cardEnglishBadge;
  if (el("uiCardEnglishDesc")) el("uiCardEnglishDesc").textContent = t.cardEnglishDesc;

  if (el("uiMockTitle")) el("uiMockTitle").textContent = t.mockTitle;
  if (el("uiMockDesc")) el("uiMockDesc").textContent = t.mockDesc;
  if (el("startMockBtn")) el("startMockBtn").textContent = t.mockBtnFull;
  if (el("quickMockBtn")) el("quickMockBtn").textContent = t.mockBtnQuick;
  if (el("uiMockTimeRemaining")) el("uiMockTimeRemaining").textContent = t.mockTimeRemaining;
  if (el("uiMockFinishNow")) el("uiMockFinishNow").textContent = t.mockFinishNow;
  if (el("prevMockBtn")) el("prevMockBtn").textContent = t.mockPrev;
  if (el("nextMockBtn")) el("nextMockBtn").textContent = t.mockNext;

  if (el("uiMockResultTitle")) el("uiMockResultTitle").textContent = t.mockResultTitle;
  if (el("uiMockOverall")) el("uiMockOverall").textContent = t.mockOverall;
  if (el("uiMockCognitive")) el("uiMockCognitive").textContent = t.mockCognitive;
  if (el("uiMockFit")) el("uiMockFit").textContent = t.mockFit;
  if (el("uiMockRetake")) el("uiMockRetake").textContent = t.mockRetake;

  if (el("uiCardFlashcardsTitle")) el("uiCardFlashcardsTitle").textContent = t.cardFlashcardsTitle;
  if (el("uiCardFlashcardsDesc")) el("uiCardFlashcardsDesc").textContent = t.cardFlashcardsDesc;
  if (el("uiFlashcardHintFront")) el("uiFlashcardHintFront").textContent = t.flashcardHintFront;
  if (el("uiFlashcardHintBack")) el("uiFlashcardHintBack").textContent = t.flashcardHintBack;
  if (el("prevCardBtn")) el("prevCardBtn").textContent = t.flashcardPrev;
  if (el("nextCardBtn")) el("nextCardBtn").textContent = t.flashcardNext;
  if (el("uiFooterText")) el("uiFooterText").textContent = t.footerText;

  // Re-render question sections and flashcards
  renderAllContent();
  renderFlashcard();
  if (document.getElementById("mockActiveCard") && document.getElementById("mockActiveCard").style.display === "block") {
    renderCurrentMockQuestion();
  }
};

// ==========================================
// 3. THEME & EYE-CARE ACCESSIBILITY
// ==========================================
function initThemeAndFont() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const fontIncreaseBtn = document.getElementById("fontIncreaseBtn");
  const fontDecreaseBtn = document.getElementById("fontDecreaseBtn");

  const savedTheme = localStorage.getItem("sans_theme") || "dark";
  if (savedTheme === "warm-light") {
    document.body.classList.add("warm-light");
    if (themeToggleBtn) themeToggleBtn.innerHTML = UI_TRANSLATIONS[currentLang].themeDark;
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("warm-light");
      const isWarm = document.body.classList.contains("warm-light");
      localStorage.setItem("sans_theme", isWarm ? "warm-light" : "dark");
      themeToggleBtn.innerHTML = isWarm ? UI_TRANSLATIONS[currentLang].themeDark : UI_TRANSLATIONS[currentLang].themeWarm;
    });
  }

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
// 4. TAB NAVIGATION
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
// 5. RENDERING QUESTIONS (AR/EN DYNAMIC)
// ==========================================
function renderAllContent() {
  renderPersonalityDrill();
  renderStandardDrill("logical", "logicalQuestionsContainer");
  renderStandardDrill("numerical", "numericalQuestionsContainer");
  renderStandardDrill("english", "englishQuestionsContainer");
}

function renderPersonalityDrill() {
  const container = document.getElementById("personalityQuestionsContainer");
  if (!container || !QUESTION_BANK.personality) return;

  const isAr = (currentLang === "ar");

  container.innerHTML = QUESTION_BANK.personality.map((q, idx) => {
    const category = isAr ? q.category_ar : q.category_en;
    const statement = isAr ? q.statement_ar : q.statement_en;
    const explanation = isAr ? q.explanation_ar : q.explanation_en;
    const options = isAr ? q.options_ar : q.options_en;

    return `
      <div class="question-item" id="q_card_${q.id}">
        <div class="question-header">
          <span class="question-num">${isAr ? `عبارة ${idx + 1} من ${QUESTION_BANK.personality.length}` : `Statement ${idx + 1} of ${QUESTION_BANK.personality.length}`}</span>
          <span class="badge ${category.includes('⚠️') ? 'badge-amber' : ''}">${category}</span>
        </div>
        <div class="question-text">${statement}</div>
        <div class="options-list">
          ${options.map(opt => `
            <button class="option-btn" onclick="handlePersonalityChoice('${q.id}', '${opt.value}', ${opt.score}, this)">
              <span>${opt.text}</span>
              <span class="choice-indicator">◯</span>
            </button>
          `).join("")}
        </div>
        <div class="explanation-box" id="exp_${q.id}">
          <div class="explanation-title">${isAr ? '💡 سر التقييم والتوجيه المهني:' : '💡 Professional Evaluation Insight:'}</div>
          <div class="explanation-content">${explanation}</div>
        </div>
      </div>
    `;
  }).join("");
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

  const isAr = (currentLang === "ar");

  container.innerHTML = questions.map((q, idx) => {
    const title = isAr ? (q.title_ar || q.title_en) : (q.title_en || q.title_ar);
    const qText = isAr ? (q.questionText_ar || q.questionText_en) : (q.questionText_en || q.questionText_ar);
    const explanation = isAr ? (q.explanation_ar || q.explanation_en) : (q.explanation_en || q.explanation_ar);
    const options = isAr ? (q.options_ar || q.options_en) : (q.options_en || q.options_ar);

    return `
      <div class="question-item" id="q_card_${q.id}">
        <div class="question-header">
          <span class="question-num">${isAr ? `سؤال ${idx + 1} من ${questions.length}` : `Question ${idx + 1} of ${questions.length}`}</span>
          <span class="badge">${title}</span>
        </div>
        <div class="question-text" style="white-space: pre-line;">${qText}</div>
        ${q.svgGraphic ? q.svgGraphic : ''}
        <div class="options-list">
          ${options.map(opt => `
            <button class="option-btn" onclick="handleChoice('${q.id}', ${opt.isCorrect}, this)">
              <span>${opt.text}</span>
              <span class="choice-indicator">◯</span>
            </button>
          `).join("")}
        </div>
        <div class="explanation-box" id="exp_${q.id}">
          <div class="explanation-title">${isAr ? '💡 مفتاح الحل والشرح السريع:' : '💡 Solution Key & Shortcut:'}</div>
          <div class="explanation-content">${explanation}</div>
        </div>
      </div>
    `;
  }).join("");
}

window.handleChoice = function(qId, isCorrect, btnElem) {
  const card = document.getElementById(`q_card_${qId}`);
  const allBtns = card.querySelectorAll(".option-btn");

  allBtns.forEach(b => {
    b.classList.add("disabled");
    b.onclick = null;
  });

  const isAr = (currentLang === "ar");
  if (isCorrect) {
    btnElem.classList.add("correct");
    btnElem.querySelector(".choice-indicator").textContent = isAr ? "✓ صحيح" : "✓ Correct";
  } else {
    btnElem.classList.add("wrong");
    btnElem.querySelector(".choice-indicator").textContent = isAr ? "✕ خطأ" : "✕ Incorrect";
  }

  const expBox = document.getElementById(`exp_${qId}`);
  if (expBox) expBox.classList.add("show");
};

// ==========================================
// 6. TIMED MOCK EXAM ENGINE
// ==========================================
let mockTimer = null;
let remainingSeconds = 77 * 60;
let mockQuestions = [];
let currentMockIndex = 0;
let userMockAnswers = {};

function initMockExam() {
  const startBtn = document.getElementById("startMockBtn");
  const quickStartBtn = document.getElementById("quickMockBtn");
  if (startBtn) startBtn.addEventListener("click", () => startExam(77 * 60));
  if (quickStartBtn) quickStartBtn.addEventListener("click", () => startExam(15 * 60));
}

function startExam(durationSeconds) {
  remainingSeconds = durationSeconds;
  userMockAnswers = {};
  currentMockIndex = 0;

  mockQuestions = [
    ...QUESTION_BANK.personality.slice(0, 6),
    ...QUESTION_BANK.logical.slice(0, 3),
    ...QUESTION_BANK.numerical.slice(0, 3),
    ...QUESTION_BANK.english.slice(0, 3)
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

  const isAr = (currentLang === "ar");
  const isPersonality = q.type === "likert";

  const category = isAr ? (q.category_ar || q.title_ar) : (q.category_en || q.title_en);
  const text = isAr ? (q.statement_ar || q.questionText_ar) : (q.statement_en || q.questionText_en);
  const options = isAr ? (q.options_ar || q.options_en) : (q.options_en || q.options_ar);

  container.innerHTML = `
    <div class="question-header">
      <span class="question-num">${isAr ? `سؤال ${currentMockIndex + 1} من ${mockQuestions.length}` : `Question ${currentMockIndex + 1} of ${mockQuestions.length}`}</span>
      <span class="badge">${category}</span>
    </div>
    <div class="question-text" style="white-space: pre-line;">${text}</div>
    ${q.svgGraphic ? q.svgGraphic : ''}
    <div class="options-list">
      ${options.map(opt => `
        <button class="option-btn ${userMockAnswers[q.id] === opt.text ? 'selected' : ''}" onclick="recordMockAnswer('${q.id}', '${opt.text}', ${isPersonality ? opt.score : (opt.isCorrect ? 1 : 0)}, this)">
          <span>${opt.text}</span>
          <span class="choice-indicator">${userMockAnswers[q.id] === opt.text ? '◉' : '◯'}</span>
        </button>
      `).join("")}
    </div>
  `;

  const prevBtn = document.getElementById("prevMockBtn");
  const nextBtn = document.getElementById("nextMockBtn");
  if (prevBtn) prevBtn.disabled = (currentMockIndex === 0);
  if (nextBtn) {
    nextBtn.textContent = (currentMockIndex === mockQuestions.length - 1)
      ? UI_TRANSLATIONS[currentLang].mockSubmitFinal
      : UI_TRANSLATIONS[currentLang].mockNext;
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

window.finishExam = function() {
  clearInterval(mockTimer);
  document.getElementById("mockActiveCard").style.display = "none";
  document.getElementById("mockResultCard").style.display = "block";

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
      if (userMockAnswers[q.id + "_score"] === 1) correctCognitive++;
    }
  });

  const cognitivePercent = Math.round((correctCognitive / totalCognitive) * 100) || 0;
  const personalityPercent = Math.round((personalityTotalScore / personalityMaxScore) * 100) || 0;
  const overallScore = Math.round((cognitivePercent * 0.5) + (personalityPercent * 0.5));

  document.getElementById("resultOverallScore").textContent = `${overallScore}%`;
  document.getElementById("resultCognitiveScore").textContent = `${cognitivePercent}% (${correctCognitive}/${totalCognitive})`;
  document.getElementById("resultPersonalityScore").textContent = `${personalityPercent}%`;

  const statusBadge = document.getElementById("resultStatusBadge");
  const isAr = (currentLang === "ar");
  if (statusBadge) {
    if (overallScore >= 80) {
      statusBadge.textContent = isAr ? "مؤهل بامتياز لمرحلة المقابلة (Top Candidate)" : "Top Candidate (Highly Qualified)";
      statusBadge.className = "badge badge-green";
    } else if (overallScore >= 65) {
      statusBadge.textContent = isAr ? "مستوى جيد مع فرصة تعزيز سرعة البديهة" : "Good Performance (Keep Practicing)";
      statusBadge.className = "badge badge-amber";
    } else {
      statusBadge.textContent = isAr ? "يحتاج مزيداً من التدريب على سرعة الحل" : "Needs More Speed Drills";
      statusBadge.className = "badge";
    }
  }
};

// ==========================================
// 7. FLASHCARDS SYSTEM
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

  const isAr = (currentLang === "ar");
  const frontElem = document.getElementById("flashcardFrontText");
  const backElem = document.getElementById("flashcardBackText");
  const counterElem = document.getElementById("flashcardCounter");

  if (frontElem) frontElem.innerHTML = isAr ? card.front_ar : card.front_en;
  if (backElem) backElem.innerHTML = (isAr ? card.back_ar : card.back_en).replace(/\\n/g, "<br>");
  if (counterElem) counterElem.textContent = isAr ? `بطاقة ${currentCardIndex + 1} من ${QUESTION_BANK.flashcards.length}` : `Card ${currentCardIndex + 1} of ${QUESTION_BANK.flashcards.length}`;

  const prevBtn = document.getElementById("prevCardBtn");
  const nextBtn = document.getElementById("nextCardBtn");
  if (prevBtn) prevBtn.disabled = (currentCardIndex === 0);
  if (nextBtn) nextBtn.disabled = (currentCardIndex === QUESTION_BANK.flashcards.length - 1);
}
