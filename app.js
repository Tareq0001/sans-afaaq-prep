/**
 * SANS AFAAQ Assessment - Master Interactive Application Engine
 * Strict 199-Question Exam Simulation + Anti-Cheat Monitor + Full Bilingual Support
 */

let currentLang = localStorage.getItem("sans_lang") || "ar";
let currentFontSize = 16;

// Mock Exam Global State
let mockTimer = null;
let remainingSeconds = 77 * 60;
let mockQuestions = [];
let currentMockIndex = 0;
let userMockAnswers = {};
let userFlaggedQuestions = {};
let isExamActive = false;
let securityStrikes = 0;
let activePaletteFilter = "all";

document.addEventListener("DOMContentLoaded", () => {
  initThemeAndFont();
  initNavigation();
  initSecurityMonitor();
  setAppLanguage(currentLang);
  initFlashcards();
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
    tabMock: "⏱️ المحاكي الصارم (199 سؤال)",
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

    // Strict Mock Exam
    mockTitle: "⏱️ المحاكي الصارم لاختبار SANS AFAAQ (199 سؤال)",
    mockDesc: "محاكاة صارمة وواقعية 100% للاختبار الفعلي: 199 سؤالاً مقسمة على الأقسام الأربعة، مع مؤقت 77 دقيقة ونظام رقابة لمنع تبديل النوافذ (Anti-Cheating Simulation).",
    mockBtnFull: "🚀 بدء المحاكي الصارم الكامل (199 سؤال - 77 دقيقة)",
    mockBtnQuick: "⚡ تدريب السرعة الخاطف (25 سؤال - 10 دقائق)",
    mockTimeRemaining: "الوقت المتبقي:",
    mockFinishNow: "إنهاء وتسليم الآن",
    flagBtnText: "تمييز للمراجعة",
    flaggedText: "تم التمييز بنجاح 🚩",
    secAll: "الكل (199)",
    secP: "1. الشخصية (1 - 90)",
    secL: "2. المنطق (91 - 126)",
    secN: "3. الأرقام (127 - 162)",
    secE: "4. الإنجليزية (163 - 199)",
    legAns: "مجاب عنه",
    legFlag: "مميز للمراجعة",
    legUnans: "لم يُجب",
    mockPrev: "➡️ السابق",
    mockNext: "التالي ⬅️",
    mockSubmitFinal: "إنهاء الاختبار وتأكيد التسليم 🏁",
    mockResultTitle: "🎉 تقرير النتيجة ومستوى الجاهزية الرسمي",
    mockOverall: "التقييم الإجمالي العام",
    mockCognitive: "القدرات الذهنية والمعرفية",
    mockFit: "مطابقة شخصية الملاحة (SANS Fit)",
    mockLie: "مؤشر كشف المثالية (Lie Scale)",
    scorecardDetailsTitle: "تفصيل درجات الأقسام الأربعة:",
    mockRetake: "🔄 إعادة المحاكي الصارم (199 سؤال)",

    // Security Modal
    secTitle: "🚨 تحذير أمني صارم (محاكاة رقابة Mettl)",
    secDesc: "تم رصد محاولة مغادرة صفحة الاختبار أو تبديل التبويب!<br><strong>⚠️ في الاختبار الحقيقي، يؤدي تبديل النافذة إلى إغلاق الاختبار واستبعادك فوراً!</strong>",
    secStrikesPrefix: "عدد التنبيهات: ",
    secStrikesSuffix: " من 3",
    secDismiss: "العودة لشاشة الاختبار فوراً",

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
    tabMock: "⏱️ Strict Mock (199 Qs)",
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

    // Strict Mock Exam
    mockTitle: "⏱️ Strict SANS AFAAQ Mock Exam (199 Questions)",
    mockDesc: "Authentic 100% strict simulation: 199 questions across all 4 sections with 77-minute countdown and active anti-cheat window monitoring.",
    mockBtnFull: "🚀 Start Full Strict Mock (199 Qs - 77 Mins)",
    mockBtnQuick: "⚡ Speed Sprint Drill (25 Qs - 10 Mins)",
    mockTimeRemaining: "Time Remaining:",
    mockFinishNow: "Finish & Submit Now",
    flagBtnText: "Flag for Review",
    flaggedText: "Flagged for Review 🚩",
    secAll: "All (199)",
    secP: "1. Personality (1 - 90)",
    secL: "2. Logic (91 - 126)",
    secN: "3. Numerical (127 - 162)",
    secE: "4. English (163 - 199)",
    legAns: "Answered",
    legFlag: "Flagged",
    legUnans: "Unanswered",
    mockPrev: "⬅️ Previous",
    mockNext: "Next ➡️",
    mockSubmitFinal: "Finish Exam & Submit 🏁",
    mockResultTitle: "🎉 Official Readiness & Scorecard Report",
    mockOverall: "Overall Readiness Score",
    mockCognitive: "Cognitive & Knowledge Score",
    mockFit: "SANS Culture & Job Fit",
    mockLie: "Authenticity / Lie Scale Index",
    scorecardDetailsTitle: "Detailed Section Performance Breakdown:",
    mockRetake: "🔄 Retake Strict Mock (199 Qs)",

    // Security Modal
    secTitle: "🚨 Strict Proctoring Alert (Mettl Simulation)",
    secDesc: "Tab switching or window blur detected!<br><strong>⚠️ In the real proctored exam, switching tabs immediately invalidates your attempt!</strong>",
    secStrikesPrefix: "Recorded Strikes: ",
    secStrikesSuffix: " of 3",
    secDismiss: "Return to Test Screen Now",

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
// 2. EXPLICIT LANGUAGE SWITCHER
// ==========================================
window.setAppLanguage = function(lang) {
  currentLang = lang;
  localStorage.setItem("sans_lang", lang);

  const isAr = (lang === "ar");
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? "rtl" : "ltr";
  document.body.style.direction = isAr ? "rtl" : "ltr";

  // Toggle active pill state
  const btnAr = document.getElementById("btnLangAr");
  const btnEn = document.getElementById("btnLangEn");
  if (btnAr && btnEn) {
    btnAr.classList.toggle("active", isAr);
    btnEn.classList.toggle("active", !isAr);
  }

  const t = UI_TRANSLATIONS[lang];
  const el = id => document.getElementById(id);

  // Static texts
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
  if (el("startFull199Btn")) el("startFull199Btn").textContent = t.mockBtnFull;
  if (el("quickMockBtn")) el("quickMockBtn").textContent = t.mockBtnQuick;
  if (el("uiMockTimeRemaining")) el("uiMockTimeRemaining").textContent = t.mockTimeRemaining;
  if (el("uiMockFinishNow")) el("uiMockFinishNow").textContent = t.mockFinishNow;
  if (el("uiFlagBtnText")) el("uiFlagBtnText").textContent = userFlaggedQuestions[mockQuestions[currentMockIndex]?.id] ? t.flaggedText : t.flagBtnText;

  if (el("secPillAll")) el("secPillAll").textContent = t.secAll;
  if (el("secPillP")) el("secPillP").textContent = t.secP;
  if (el("secPillL")) el("secPillL").textContent = t.secL;
  if (el("secPillN")) el("secPillN").textContent = t.secN;
  if (el("secPillE")) el("secPillE").textContent = t.secE;

  if (el("legAns")) el("legAns").textContent = t.legAns;
  if (el("legFlag")) el("legFlag").textContent = t.legFlag;
  if (el("legUnans")) el("legUnans").textContent = t.legUnans;

  if (el("prevMockBtn")) el("prevMockBtn").textContent = t.mockPrev;
  if (el("nextMockBtn")) el("nextMockBtn").textContent = t.mockNext;

  if (el("uiMockResultTitle")) el("uiMockResultTitle").textContent = t.mockResultTitle;
  if (el("uiMockOverall")) el("uiMockOverall").textContent = t.mockOverall;
  if (el("uiMockCognitive")) el("uiMockCognitive").textContent = t.mockCognitive;
  if (el("uiMockFit")) el("uiMockFit").textContent = t.mockFit;
  if (el("uiMockLie")) el("uiMockLie").textContent = t.mockLie;
  if (el("uiScorecardDetailsTitle")) el("uiScorecardDetailsTitle").textContent = t.scorecardDetailsTitle;
  if (el("uiMockRetake")) el("uiMockRetake").textContent = t.mockRetake;

  if (el("uiSecTitle")) el("uiSecTitle").textContent = t.secTitle;
  if (el("uiSecDesc")) el("uiSecDesc").innerHTML = t.secDesc;

  if (el("uiCardFlashcardsTitle")) el("uiCardFlashcardsTitle").textContent = t.cardFlashcardsTitle;
  if (el("uiCardFlashcardsDesc")) el("uiCardFlashcardsDesc").textContent = t.cardFlashcardsDesc;
  if (el("uiFlashcardHintFront")) el("uiFlashcardHintFront").textContent = t.flashcardHintFront;
  if (el("uiFlashcardHintBack")) el("uiFlashcardHintBack").textContent = t.flashcardHintBack;
  if (el("prevCardBtn")) el("prevCardBtn").textContent = t.flashcardPrev;
  if (el("nextCardBtn")) el("nextCardBtn").textContent = t.flashcardNext;
  if (el("uiFooterText")) el("uiFooterText").textContent = t.footerText;

  // Re-render
  renderAllContent();
  renderFlashcard();
  if (isExamActive) {
    renderMockPalette();
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
// 5. ANTI-CHEAT SECURITY MONITOR (METTL PROCTOR SIMULATION)
// ==========================================
function initSecurityMonitor() {
  document.addEventListener("visibilitychange", () => {
    if (isExamActive && document.hidden) {
      triggerSecurityStrike();
    }
  });

  window.addEventListener("blur", () => {
    if (isExamActive) {
      triggerSecurityStrike();
    }
  });
}

function triggerSecurityStrike() {
  securityStrikes++;
  const modal = document.getElementById("securityAlertModal");
  const strikesText = document.getElementById("uiSecStrikes");
  const t = UI_TRANSLATIONS[currentLang];

  if (strikesText) {
    strikesText.textContent = `${t.secStrikesPrefix}${securityStrikes}${t.secStrikesSuffix}`;
  }
  if (modal) {
    modal.style.display = "flex";
  }
}

window.dismissSecurityModal = function() {
  const modal = document.getElementById("securityAlertModal");
  if (modal) modal.style.display = "none";
};

// ==========================================
// 6. PRACTICE SECTION DRILLS
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
// 7. STRICT 199-QUESTION TIMED MOCK EXAM ENGINE
// ==========================================
window.startExam = function(questionCount, durationSeconds) {
  remainingSeconds = durationSeconds;
  userMockAnswers = {};
  userFlaggedQuestions = {};
  currentMockIndex = 0;
  isExamActive = true;
  securityStrikes = 0;

  if (questionCount === 199 && QUESTION_BANK.mock199) {
    mockQuestions = [...QUESTION_BANK.mock199];
  } else {
    // 25-question speed drill
    mockQuestions = [
      ...QUESTION_BANK.personality.slice(0, 10),
      ...QUESTION_BANK.logical.slice(0, 5),
      ...QUESTION_BANK.numerical.slice(0, 5),
      ...QUESTION_BANK.english.slice(0, 5)
    ];
  }

  document.getElementById("mockIntroCard").style.display = "none";
  document.getElementById("mockActiveCard").style.display = "block";
  document.getElementById("mockResultCard").style.display = "none";

  filterPalette("all");
  renderCurrentMockQuestion();
  startTimerCountdown();
};

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
    if (remainingSeconds <= 300) {
      display.style.color = "var(--accent-red)";
    } else {
      display.style.color = "var(--accent-amber)";
    }
  }
}

// Section tabs filter
window.filterPalette = function(secKey) {
  activePaletteFilter = secKey;
  const pills = {
    all: document.getElementById("secPillAll"),
    personality: document.getElementById("secPillP"),
    logical: document.getElementById("secPillL"),
    numerical: document.getElementById("secPillN"),
    english: document.getElementById("secPillE")
  };

  Object.keys(pills).forEach(k => {
    if (pills[k]) pills[k].classList.toggle("active", k === secKey);
  });

  renderMockPalette();
};

function renderMockPalette() {
  const palette = document.getElementById("mockQuestionPalette");
  if (!palette) return;

  let filtered = mockQuestions.map((q, idx) => ({ q, idx }));
  if (activePaletteFilter !== "all") {
    filtered = filtered.filter(item => item.q.section === activePaletteFilter);
  }

  palette.innerHTML = filtered.map(({ q, idx }) => {
    const isAnswered = !!userMockAnswers[q.id];
    const isFlagged = !!userFlaggedQuestions[q.id];
    const isActive = (idx === currentMockIndex);

    let cls = "palette-num";
    if (isActive) cls += " active";
    if (isFlagged) cls += " flagged";
    else if (isAnswered) cls += " answered";

    return `
      <button class="${cls}" onclick="goToMockQuestion(${idx})" title="Question ${idx + 1}">
        ${idx + 1}
      </button>
    `;
  }).join("");
}

window.goToMockQuestion = function(idx) {
  currentMockIndex = idx;
  renderMockPalette();
  renderCurrentMockQuestion();
};

window.toggleMockFlag = function() {
  const q = mockQuestions[currentMockIndex];
  if (!q) return;

  userFlaggedQuestions[q.id] = !userFlaggedQuestions[q.id];
  const t = UI_TRANSLATIONS[currentLang];
  const flagText = document.getElementById("uiFlagBtnText");
  if (flagText) {
    flagText.textContent = userFlaggedQuestions[q.id] ? t.flaggedText : t.flagBtnText;
  }
  renderMockPalette();
};

function renderCurrentMockQuestion() {
  const container = document.getElementById("mockQuestionViewer");
  const q = mockQuestions[currentMockIndex];
  if (!container || !q) return;

  const isAr = (currentLang === "ar");
  const isPersonality = (q.type === "likert");

  const sectionName = isAr ? q.section_title_ar : q.section_title_en;
  const category = isAr ? (q.category_ar || q.title_ar) : (q.category_en || q.title_en);
  const text = isAr ? (q.statement_ar || q.questionText_ar) : (q.statement_en || q.questionText_en);
  const options = isAr ? (q.options_ar || q.options_en) : (q.options_en || q.options_ar);

  // Update Flag button text
  const t = UI_TRANSLATIONS[currentLang];
  const flagText = document.getElementById("uiFlagBtnText");
  if (flagText) {
    flagText.textContent = userFlaggedQuestions[q.id] ? t.flaggedText : t.flagBtnText;
  }

  container.innerHTML = `
    <div class="question-header">
      <div>
        <span class="question-num">${isAr ? `سؤال ${currentMockIndex + 1} من ${mockQuestions.length}` : `Question ${currentMockIndex + 1} of ${mockQuestions.length}`}</span>
        <span style="color: var(--text-dim); margin-right: 8px; font-size: 0.85rem;">[${sectionName}]</span>
      </div>
      <span class="badge ${category && category.includes('⚠️') ? 'badge-amber' : ''}">${category}</span>
    </div>
    <div class="question-text" style="white-space: pre-line;">${text}</div>
    ${q.svgGraphic ? q.svgGraphic : ''}
    <div class="options-list">
      ${options.map(opt => `
        <button class="option-btn ${userMockAnswers[q.id] === opt.text ? 'selected' : ''}" onclick="recordMockAnswer('${q.id}', '${opt.text.replace(/'/g, "\\'")}', ${isPersonality ? opt.score : (opt.isCorrect ? 1 : 0)}, this)">
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
    confirmFinishExam();
  }
};

window.prevMockQuestion = function() {
  if (currentMockIndex > 0) {
    currentMockIndex--;
    renderMockPalette();
    renderCurrentMockQuestion();
  }
};

window.confirmFinishExam = function() {
  const answeredCount = Object.keys(userMockAnswers).filter(k => !k.endsWith("_score")).length;
  const unansweredCount = mockQuestions.length - answeredCount;

  if (unansweredCount > 0) {
    const isAr = (currentLang === "ar");
    const msg = isAr
      ? `تنبيه: يوجد ${unansweredCount} سؤالاً لم تقم بالإجابة عليها بعد!\nتذكر قاعدة Mettl: لا يوجد خصم درجات على الخطأ، هل تريد التسليم الفعلي الآن؟`
      : `Warning: You have ${unansweredCount} unanswered questions!\nRemember Mettl has NO negative marking. Are you sure you want to finish?`;
    if (!confirm(msg)) return;
  }
  finishExam();
};

function finishExam() {
  clearInterval(mockTimer);
  isExamActive = false;

  document.getElementById("mockActiveCard").style.display = "none";
  document.getElementById("mockResultCard").style.display = "block";

  // Detailed section performance counters
  let stats = {
    personality: { correct: 0, total: 0, maxScore: 0, actualScore: 0 },
    logical: { correct: 0, total: 0 },
    numerical: { correct: 0, total: 0 },
    english: { correct: 0, total: 0 }
  };

  let lieTrapTotal = 0;
  let lieTrapPassed = 0;

  mockQuestions.forEach(q => {
    const s = q.section;
    const scoreVal = userMockAnswers[q.id + "_score"] || 0;

    if (s === "personality") {
      stats.personality.total++;
      stats.personality.actualScore += scoreVal;
      stats.personality.maxScore += 5;

      if (q.category_en && q.category_en.includes("Lie Scale")) {
        lieTrapTotal++;
        // Passed if selected Disagree or Strongly Disagree (score >= 4)
        if (scoreVal >= 4) lieTrapPassed++;
      }
    } else {
      stats[s].total++;
      if (scoreVal === 1) stats[s].correct++;
    }
  });

  const personalityPercent = Math.round((stats.personality.actualScore / (stats.personality.maxScore || 1)) * 100);
  const cogTotal = stats.logical.total + stats.numerical.total + stats.english.total;
  const cogCorrect = stats.logical.correct + stats.numerical.correct + stats.english.correct;
  const cognitivePercent = Math.round((cogCorrect / (cogTotal || 1)) * 100);

  const overallScore = Math.round((cognitivePercent * 0.5) + (personalityPercent * 0.5));

  // Render metric scores
  const isAr = (currentLang === "ar");
  document.getElementById("resultOverallScore").textContent = `${overallScore}%`;
  document.getElementById("resultCognitiveScore").textContent = `${cognitivePercent}% (${cogCorrect}/${cogTotal})`;
  document.getElementById("resultPersonalityScore").textContent = `${personalityPercent}%`;

  const lieElem = document.getElementById("resultLieScale");
  if (lieElem) {
    if (lieTrapTotal > 0) {
      const liePercent = Math.round((lieTrapPassed / lieTrapTotal) * 100);
      lieElem.textContent = isAr ? `${liePercent}% (${lieTrapPassed}/${lieTrapTotal})` : `${liePercent}% Passed`;
      lieElem.style.color = (liePercent >= 80) ? "var(--accent-green)" : "var(--accent-amber)";
    } else {
      lieElem.textContent = isAr ? "اجتياز تام" : "100% Passed";
    }
  }

  // Render 4-section breakdown table
  const tableContainer = document.getElementById("sectionDetailedScores");
  if (tableContainer) {
    const pLogic = Math.round((stats.logical.correct / (stats.logical.total || 1)) * 100);
    const pNum = Math.round((stats.numerical.correct / (stats.numerical.total || 1)) * 100);
    const pEng = Math.round((stats.english.correct / (stats.english.total || 1)) * 100);

    tableContainer.innerHTML = `
      <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--border-color);">
        <span>${isAr ? '1. مقياس السلوك والشخصية (MPP)' : '1. Personality Profiler (MPP)'}</span>
        <strong>${personalityPercent}% (${stats.personality.actualScore} / ${stats.personality.maxScore})</strong>
      </div>
      <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--border-color);">
        <span>${isAr ? '2. الاستدلال المنطقي وسلاسل الأشكال' : '2. Logical & Abstract Reasoning'}</span>
        <strong>${pLogic}% (${stats.logical.correct} / ${stats.logical.total})</strong>
      </div>
      <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--border-color);">
        <span>${isAr ? '3. القدرة العددية والحساب السريع' : '3. Numerical Ability'}</span>
        <strong>${pNum}% (${stats.numerical.correct} / ${stats.numerical.total})</strong>
      </div>
      <div style="display:flex; justify-content:space-between; padding:8px 0;">
        <span>${isAr ? '4. اللغة الإنجليزية المهنية' : '4. English Language Proficiency'}</span>
        <strong>${pEng}% (${stats.english.correct} / ${stats.english.total})</strong>
      </div>
    `;
  }

  // Status Badge
  const statusBadge = document.getElementById("resultStatusBadge");
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

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// 8. FLASHCARDS SYSTEM
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
