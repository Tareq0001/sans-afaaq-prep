/**
 * SANS AFAAQ Assessment - Complete Bilingual Question Bank (English & Arabic)
 * Supports dynamic language switching with one click!
 */

const QUESTION_BANK = {
  // ==========================================
  // SECTION 1: METTL PERSONALITY PROFILER (MPP)
  // ==========================================
  personality: [
    {
      id: "p1",
      category_en: "Conscientiousness & Compliance",
      category_ar: "الالتزام والامتثال للأنظمة",
      statement_en: "I strictly follow established rules and standard operating procedures (SOP), even when shortcuts are available.",
      statement_ar: "ألتزم بدقة باتباع القواعد وإجراءات التشغيل القياسية (SOP) المعتمدة، حتى لو توفرت طرق مختصرة.",
      recommended: "strongly_agree",
      type: "likert",
      explanation_en: "In Air Navigation (SANS), strict adherence to SOPs is the #1 safety pillar. Choosing 'Strongly Agree' gives you the highest compliance rating.",
      explanation_ar: "في قطاع الملاحة الجوية (SANS)، يعد الامتثال الصارم لإجراءات التشغيل القياسية (SOP) الركيزة الأولى للسلامة. اختيار 'أوافق بشدة' يمنحك أعلى تقييم.",
      options_en: [
        { text: "Strongly Agree", value: "strongly_agree", score: 5 },
        { text: "Agree", value: "agree", score: 4 },
        { text: "Neutral", value: "neutral", score: 3 },
        { text: "Disagree", value: "disagree", score: 2 },
        { text: "Strongly Disagree", value: "strongly_disagree", score: 1 }
      ],
      options_ar: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 5 },
        { text: "أوافق (Agree)", value: "agree", score: 4 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 2 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 1 }
      ]
    },
    {
      id: "p2",
      category_en: "Emotional Stability & Composure",
      category_ar: "الثبات الانفعالي والهدوء",
      statement_en: "I remain completely calm and methodically prioritize tasks when sudden emergencies or high workloads arise.",
      statement_ar: "أحافظ على هدوئي التام وقدرتي على ترتيب الأولويات عند حدوث طوارئ مفاجئة أو تراكم أعباء العمل.",
      recommended: "strongly_agree",
      type: "likert",
      explanation_en: "Aviation demands exceptional composure under pressure to avoid impulsive decisions. 'Strongly Agree' is the optimal choice.",
      explanation_ar: "الملاحة الجوية تتطلب هدوءاً استثنائياً تحت الضغط لتفادي أي قرارات متسرعة. 'أوافق بشدة' هو الخيار الأفضل.",
      options_en: [
        { text: "Strongly Agree", value: "strongly_agree", score: 5 },
        { text: "Agree", value: "agree", score: 4 },
        { text: "Neutral", value: "neutral", score: 3 },
        { text: "Disagree", value: "disagree", score: 2 },
        { text: "Strongly Disagree", value: "strongly_disagree", score: 1 }
      ],
      options_ar: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 5 },
        { text: "أوافق (Agree)", value: "agree", score: 4 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 2 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 1 }
      ]
    },
    {
      id: "p3",
      category_en: "Teamwork & Synergy",
      category_ar: "العمل الجماعي وتكامل الفريق",
      statement_en: "I believe overall team success is far more critical than individual recognition or personal credit.",
      statement_ar: "أرى أن نجاح الفريق ككل أهم بكثير من إبراز إنجازاتي الفردية أمام الإدارة.",
      recommended: "strongly_agree",
      type: "likert",
      explanation_en: "Air traffic safety relies on seamless coordination across towers, radar controllers, and technical teams. Teamwork is indispensable.",
      explanation_ar: "سلامة المجال الجوي تعتمد على تكامل المنظومة (المراقبة، التنسيق، الرادار، الدعم الفني)، لذا يبحث المقيمون عن روح الفريق.",
      options_en: [
        { text: "Strongly Agree", value: "strongly_agree", score: 5 },
        { text: "Agree", value: "agree", score: 4 },
        { text: "Neutral", value: "neutral", score: 3 },
        { text: "Disagree", value: "disagree", score: 2 },
        { text: "Strongly Disagree", value: "strongly_disagree", score: 1 }
      ],
      options_ar: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 5 },
        { text: "أوافق (Agree)", value: "agree", score: 4 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 2 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 1 }
      ]
    },
    {
      id: "p4",
      category_en: "⚠️ Lie Scale (Social Desirability)",
      category_ar: "⚠️ فخ كشف الكذب والمثالية المصطنعة",
      statement_en: "I have never felt angry, frustrated, or irritated at work or in my personal life.",
      statement_ar: "أنا لم أشعر بالغضب أو الإحباط في أي يوم من حياتي المهنية أو الشخصية.",
      recommended: "strongly_disagree",
      type: "likert",
      explanation_en: "⚠️ TRAP QUESTION: Mettl inserts this to catch fake-good candidates. Choose 'Disagree' or 'Strongly Disagree' to preserve your credibility score!",
      explanation_ar: "⚠️ فخ كشف التزييف: لا يوجد إنسان لا يغضب أبداً. اختيار 'أعارض' أو 'أعارض بشدة' يرفع موثوقيتك لدى النظام.",
      options_en: [
        { text: "Strongly Agree", value: "strongly_agree", score: 1 },
        { text: "Agree", value: "agree", score: 2 },
        { text: "Neutral", value: "neutral", score: 3 },
        { text: "Disagree", value: "disagree", score: 4 },
        { text: "Strongly Disagree", value: "strongly_disagree", score: 5 }
      ],
      options_ar: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 1 },
        { text: "أوافق (Agree)", value: "agree", score: 2 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 4 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 5 }
      ]
    },
    {
      id: "p5",
      category_en: "Safety Culture & Integrity",
      category_ar: "ثقافة السلامة والنزاهة",
      statement_en: "If I observe a safety protocol violation, I report it immediately, regardless of who made the error.",
      statement_ar: "إذا لاحظت ثغرة أو مخالفة لإجراءات السلامة، أبلغ عنها فوراً بغض النظر عن الشخص الذي ارتكبها.",
      recommended: "strongly_agree",
      type: "likert",
      explanation_en: "Aviation safety culture (Just Culture) has zero tolerance for safety compromises. Immediate reporting is mandatory.",
      explanation_ar: "ثقافة السلامة في الطيران لا تقبل أي تساهل؛ الإبلاغ الفوري والتصحيح هو المعيار المهني الأول.",
      options_en: [
        { text: "Strongly Agree", value: "strongly_agree", score: 5 },
        { text: "Agree", value: "agree", score: 4 },
        { text: "Neutral", value: "neutral", score: 3 },
        { text: "Disagree", value: "disagree", score: 2 },
        { text: "Strongly Disagree", value: "strongly_disagree", score: 1 }
      ],
      options_ar: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 5 },
        { text: "أوافق (Agree)", value: "agree", score: 4 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 2 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 1 }
      ]
    },
    {
      id: "p6",
      category_en: "Learning Agility",
      category_ar: "سرعة التعلم والتكيف التقني",
      statement_en: "I am eager to learn and master complex new software systems and advanced technological tools.",
      statement_ar: "أتحمس جداً لتعلم وإتقان الأنظمة الرقمية والتقنيات المتقدمة حتى لو تطلبت جهداً إضافياً.",
      recommended: "strongly_agree",
      type: "likert",
      explanation_en: "Air navigation systems continuously modernize. SANS seeks candidates with high digital and learning agility.",
      explanation_ar: "أنظمة الملاحة الجوية تخضع للتحديث المستمر والأتمتة، ويبحث البرنامج عن كفاءات تمتلك مرونة تعلم عالية.",
      options_en: [
        { text: "Strongly Agree", value: "strongly_agree", score: 5 },
        { text: "Agree", value: "agree", score: 4 },
        { text: "Neutral", value: "neutral", score: 3 },
        { text: "Disagree", value: "disagree", score: 2 },
        { text: "Strongly Disagree", value: "strongly_disagree", score: 1 }
      ],
      options_ar: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 5 },
        { text: "أوافق (Agree)", value: "agree", score: 4 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 2 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 1 }
      ]
    },
    {
      id: "p7",
      category_en: "⚠️ Lie Scale (Social Desirability)",
      category_ar: "⚠️ فخ كشف الكذب والمثالية المصطنعة",
      statement_en: "I have never been late to any meeting, appointment, or event in my entire life.",
      statement_ar: "أنا لم أتأخر يوماً في حياتي عن أي موعد سواء كان اجتماعاً أو مناسبة خاصة.",
      recommended: "disagree",
      type: "likert",
      explanation_en: "⚠️ LIE SCALE TRAP: Selecting 'Strongly Agree' triggers the algorithm's unreliability flag. Selecting 'Disagree' indicates honesty.",
      explanation_ar: "⚠️ فخ تزييف: اختيار 'أعارض' يثبت واقعيتك وصدقك لدى خوارزمية الفحص.",
      options_en: [
        { text: "Strongly Agree", value: "strongly_agree", score: 1 },
        { text: "Agree", value: "agree", score: 2 },
        { text: "Neutral", value: "neutral", score: 3 },
        { text: "Disagree", value: "disagree", score: 5 },
        { text: "Strongly Disagree", value: "strongly_disagree", score: 4 }
      ],
      options_ar: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 1 },
        { text: "أوافق (Agree)", value: "agree", score: 2 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 5 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 4 }
      ]
    },
    {
      id: "p8",
      category_en: "Stress Resilience",
      category_ar: "إدارة الضغوط والمواعيد",
      statement_en: "I easily become overwhelmed and disorganized when facing tight deadlines.",
      statement_ar: "أشعر بالارتباك الشديد وتشتت الأولويات عند مواجهة مهام بمواعيد تسليم ضيقة.",
      recommended: "strongly_disagree",
      type: "likert",
      explanation_en: "In high-reliability organizations, maintaining composure and structure under time pressure is vital. Choose 'Strongly Disagree'.",
      explanation_ar: "في بيئات الملاحة والعمل الحساس، التنظيم والهدوء تحت ضغط الوقت سمة حاسمة. اختر 'أعارض بشدة'.",
      options_en: [
        { text: "Strongly Agree", value: "strongly_agree", score: 1 },
        { text: "Agree", value: "agree", score: 2 },
        { text: "Neutral", value: "neutral", score: 3 },
        { text: "Disagree", value: "disagree", score: 4 },
        { text: "Strongly Disagree", value: "strongly_disagree", score: 5 }
      ],
      options_ar: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 1 },
        { text: "أوافق (Agree)", value: "agree", score: 2 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 4 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 5 }
      ]
    }
  ],

  // ==========================================
  // SECTION 2: LOGICAL & ABSTRACT REASONING
  // ==========================================
  logical: [
    {
      id: "l1",
      title_en: "Rotation Matrix",
      title_ar: "متتالية دوران الأسهم",
      questionText_en: "Which shape logically replaces the question mark (?) in the sequence below?",
      questionText_ar: "ما هو الشكل الذي يكمل المتسلسلة المنطقية أدناه بدلاً من علامة الاستفهام (؟)؟",
      svgGraphic: `
        <div style="display:flex; justify-content:center; align-items:center; gap:16px; margin:15px 0; flex-wrap:wrap;">
          <div style="border:2px solid #3b82f6; border-radius:8px; padding:12px; background:#1e293b; text-align:center;">
            <svg width="60" height="60" viewBox="0 0 100 100">
              <line x1="50" y1="90" x2="50" y2="20" stroke="#60a5fa" stroke-width="8" stroke-linecap="round" />
              <polygon points="35,35 50,10 65,35" fill="#60a5fa" />
            </svg>
            <div style="color:#94a3b8; font-size:12px; margin-top:4px;">1 (UP)</div>
          </div>
          <div style="color:#38bdf8; font-size:24px; font-weight:bold;">➔</div>
          <div style="border:2px solid #3b82f6; border-radius:8px; padding:12px; background:#1e293b; text-align:center;">
            <svg width="60" height="60" viewBox="0 0 100 100">
              <line x1="10" y1="50" x2="80" y2="50" stroke="#60a5fa" stroke-width="8" stroke-linecap="round" />
              <polygon points="65,35 90,50 65,65" fill="#60a5fa" />
            </svg>
            <div style="color:#94a3b8; font-size:12px; margin-top:4px;">2 (RIGHT)</div>
          </div>
          <div style="color:#38bdf8; font-size:24px; font-weight:bold;">➔</div>
          <div style="border:2px solid #3b82f6; border-radius:8px; padding:12px; background:#1e293b; text-align:center;">
            <svg width="60" height="60" viewBox="0 0 100 100">
              <line x1="50" y1="10" x2="50" y2="80" stroke="#60a5fa" stroke-width="8" stroke-linecap="round" />
              <polygon points="35,65 50,90 65,65" fill="#60a5fa" />
            </svg>
            <div style="color:#94a3b8; font-size:12px; margin-top:4px;">3 (DOWN)</div>
          </div>
          <div style="color:#38bdf8; font-size:24px; font-weight:bold;">➔</div>
          <div style="border:2px dashed #f59e0b; border-radius:8px; padding:18px; background:#1e293b; color:#f59e0b; font-size:26px; font-weight:bold;">
            ?
          </div>
        </div>
      `,
      options_en: [
        { text: "Arrow pointing LEFT", isCorrect: true },
        { text: "Arrow pointing UP", isCorrect: false },
        { text: "Arrow pointing DOWN", isCorrect: false },
        { text: "Arrow pointing DIAGONAL", isCorrect: false }
      ],
      options_ar: [
        { text: "سهم يشير لليسار (Left)", isCorrect: true },
        { text: "سهم يشير للأعلى (Up)", isCorrect: false },
        { text: "سهم يشير للأسفل (Down)", isCorrect: false },
        { text: "سهم مائل بزاوية", isCorrect: false }
      ],
      explanation_en: "Pattern: The arrow rotates clockwise by 90 degrees at each step: UP ➔ RIGHT ➔ DOWN ➔ The next must point LEFT.",
      explanation_ar: "النمط: السهم يدور باتجاه عقارب الساعة بمقدار 90 درجة في كل إطار: أعلى ➔ يمين ➔ أسفل ➔ التالي يجب أن يشير إلى اليسار."
    },
    {
      id: "l2",
      title_en: "Alternating Number Series",
      title_ar: "المتسلسلة العددية المتناوبة",
      questionText_en: "Find the missing number in the sequence: 4, 8, 6, 12, 10, 20, ...?",
      questionText_ar: "أوجد الرقم المفقود في السلسلة التالية: 4, 8, 6, 12, 10, 20, ...؟",
      options_en: [
        { text: "18", isCorrect: true },
        { text: "22", isCorrect: false },
        { text: "16", isCorrect: false },
        { text: "24", isCorrect: false }
      ],
      options_ar: [
        { text: "18", isCorrect: true },
        { text: "22", isCorrect: false },
        { text: "16", isCorrect: false },
        { text: "24", isCorrect: false }
      ],
      explanation_en: "Pattern: Alternating operations (× 2, then - 2). 4 × 2 = 8 ➔ 8 - 2 = 6 ➔ 6 × 2 = 12 ➔ 12 - 2 = 10 ➔ 10 × 2 = 20 ➔ Next is: 20 - 2 = 18.",
      explanation_ar: "النمط: عملية متناوبة (ضرب 2 ثم طرح 2). 4 × 2 = 8 ➔ 8 - 2 = 6 ➔ 6 × 2 = 12 ➔ 12 - 2 = 10 ➔ 10 × 2 = 20 ➔ التالي: (20 - 2 = 18)."
    },
    {
      id: "l3",
      title_en: "Deductive Syllogism",
      title_ar: "الاستنتاج المنطقي القياسي",
      questionText_en: "Premise 1: All air traffic controllers are certified in standard English.\\nPremise 2: Some air traffic controllers hold private pilot licenses.\\nWhich conclusion is definitely TRUE?",
      questionText_ar: "معطى 1: جميع المراقبين الجويين معتمدون في اللغة الإنجليزية.\\nمعطى 2: بعض المراقبين الجويين يحملون رخص طيران خاصة.\\nأي استنتاج صحيح ومؤكد 100%؟",
      options_en: [
        { text: "Some private pilot license holders are certified in standard English.", isCorrect: true },
        { text: "All private pilot license holders are air traffic controllers.", isCorrect: false },
        { text: "All people certified in standard English hold pilot licenses.", isCorrect: false },
        { text: "No air traffic controller is without a pilot license.", isCorrect: false }
      ],
      options_ar: [
        { text: "بعض حاملي رخص الطيران معتمدون في اللغة الإنجليزية.", isCorrect: true },
        { text: "جميع حاملي رخص الطيران هم مراقبون جويون.", isCorrect: false },
        { text: "جميع المعتمدين في الإنجليزية يحملون رخص طيران.", isCorrect: false },
        { text: "لا يوجد مراقب جوي لا يحمل رخصة طيران.", isCorrect: false }
      ],
      explanation_en: "Since controllers holding pilot licenses are entirely within the group certified in English, some pilot license holders are definitely certified in English.",
      explanation_ar: "بما أن المراقبين الذين يحملون رخص طيران يقعون كلياً ضمن فئة المعتمدين في الإنجليزية، فبالتأكيد بعض حاملي الرخص معتمدون في الإنجليزية."
    }
  ],

  // ==========================================
  // SECTION 3: NUMERICAL ABILITY
  // ==========================================
  numerical: [
    {
      id: "n1",
      title_en: "Percentage Increase",
      title_ar: "نسبة الزيادة المئوية السريعة",
      questionText_en: "Daily transit flights in a specific air corridor increased from 500 to 650 flights. What is the percentage increase?",
      questionText_ar: "ارتفع عدد الرحلات اليومية في قطاع جوي من 500 إلى 650 رحلة. ما هي نسبة الزيادة المئوية؟",
      options_en: [
        { text: "30%", isCorrect: true },
        { text: "25%", isCorrect: false },
        { text: "35%", isCorrect: false },
        { text: "15%", isCorrect: false }
      ],
      options_ar: [
        { text: "30%", isCorrect: true },
        { text: "25%", isCorrect: false },
        { text: "35%", isCorrect: false },
        { text: "15%", isCorrect: false }
      ],
      explanation_en: "Shortcut: Increase = 650 - 500 = 150. 10% of 500 is 50. 150 is 3 times 50, so 3 × 10% = 30%.",
      explanation_ar: "الحساب السريع: الزيادة = 150. 10% من 500 هي 50. الـ 150 تمثل 3 أضعاف الـ 50، إذاً 3 × 10% = 30%."
    },
    {
      id: "n2",
      title_en: "Speed, Distance, Time",
      title_ar: "السرعة والمسافة والزمن",
      questionText_en: "An aircraft covers a distance of 2,400 km in 2 hours and 30 minutes (2.5 hours). What is its average speed?",
      questionText_ar: "طائرة تقطع مسافة 2400 كم في زمن قدره ساعتان و 30 دقيقة (2.5 ساعة). ما هو متوسط سرعتها بالساعة؟",
      options_en: [
        { text: "960 km/h", isCorrect: true },
        { text: "900 km/h", isCorrect: false },
        { text: "1,000 km/h", isCorrect: false },
        { text: "850 km/h", isCorrect: false }
      ],
      options_ar: [
        { text: "960 كم/ساعة", isCorrect: true },
        { text: "900 كم/ساعة", isCorrect: false },
        { text: "1000 كم/ساعة", isCorrect: false },
        { text: "850 كم/ساعة", isCorrect: false }
      ],
      explanation_en: "Speed = Distance ÷ Time = 2,400 ÷ 2.5. Mental trick: multiply both by 2 ➔ 4,800 ÷ 5 = 960 km/h.",
      explanation_ar: "السرعة = المسافة ÷ الزمن = 2400 ÷ 2.5. حيلة ذهنية: اضرب الطرفين في 2 للتخلص من الفاصلة ➔ 4800 ÷ 5 = 960 كم/ساعة."
    },
    {
      id: "n3",
      title_en: "Ratios & Distribution",
      title_ar: "النسب والتوزيع",
      questionText_en: "A training budget of 120,000 SAR is shared among three departments in the ratio 3 : 2 : 1. How much does the largest department receive?",
      questionText_ar: "تم توزيع ميزانية تدريب بقيمة 120,000 ريال على 3 أقسام بنسبة 3 : 2 : 1. كم نصيب القسم صاحب النسبة الأكبر؟",
      options_en: [
        { text: "60,000 SAR", isCorrect: true },
        { text: "40,000 SAR", isCorrect: false },
        { text: "50,000 SAR", isCorrect: false },
        { text: "70,000 SAR", isCorrect: false }
      ],
      options_ar: [
        { text: "60,000 ريال", isCorrect: true },
        { text: "40,000 ريال", isCorrect: false },
        { text: "50,000 ريال", isCorrect: false },
        { text: "70,000 ريال", isCorrect: false }
      ],
      explanation_en: "Total parts = 3 + 2 + 1 = 6 parts. 1 part = 120,000 ÷ 6 = 20,000 SAR. Largest share (3 parts) = 3 × 20,000 = 60,000 SAR.",
      explanation_ar: "مجموع الأجزاء = 6. قيمة الجزء الواحد = 120,000 ÷ 6 = 20,000 ريال. نصيب الأكبر (3 أجزاء) = 3 × 20,000 = 60,000 ريال."
    }
  ],

  // ==========================================
  // SECTION 4: ENGLISH VERBAL & GRAMMAR
  // ==========================================
  english: [
    {
      id: "e1",
      title_en: "Conjunctions & Causality",
      title_ar: "أدوات الربط والسبب",
      questionText_en: "The scheduled flight inspection was delayed ________ the severe sandstorm in the southern sector.",
      questionText_ar: "The scheduled flight inspection was delayed ________ the severe sandstorm in the southern sector.",
      options_en: [
        { text: "due to", isCorrect: true },
        { text: "although", isCorrect: false },
        { text: "despite", isCorrect: false },
        { text: "because", isCorrect: false }
      ],
      options_ar: [
        { text: "due to (بسبب - الصحيحة لوجود عبارة اسمية)", isCorrect: true },
        { text: "although (بالرغم من)", isCorrect: false },
        { text: "despite (على الرغم من)", isCorrect: false },
        { text: "because (لأن - تحتاج فاعل وفعل)", isCorrect: false }
      ],
      explanation_en: "Use 'due to' before noun phrases ('the severe sandstorm'). 'Because' must be followed by a subject and verb clause.",
      explanation_ar: "نستخدم 'due to' لأن ما بعدها عبارة اسمية (the severe sandstorm). بينما 'because' تتطلب جملة كاملة من فاعل وفعل."
    },
    {
      id: "e2",
      title_en: "Subject-Verb Agreement",
      title_ar: "توافق الفعل والفاعل",
      questionText_en: "Each of the air traffic controllers ________ required to attend the mandatory safety briefing.",
      questionText_ar: "Each of the air traffic controllers ________ required to attend the mandatory safety briefing.",
      options_en: [
        { text: "is", isCorrect: true },
        { text: "are", isCorrect: false },
        { text: "were", isCorrect: false },
        { text: "have been", isCorrect: false }
      ],
      options_ar: [
        { text: "is (مفرد - الصحيحة)", isCorrect: true },
        { text: "are (جمع)", isCorrect: false },
        { text: "were (ماضي جمع)", isCorrect: false },
        { text: "have been (جمع)", isCorrect: false }
      ],
      explanation_en: "Rule: 'Each', 'Either', 'Neither', and 'Everyone' always take singular verbs. Therefore, 'is' is correct.",
      explanation_ar: "قاعدة ذهبية: الكلمات (Each, Either, Neither) تعامل دائماً معاملة المفرد، لذا نختار 'is'."
    },
    {
      id: "e3",
      title_en: "Aviation & Corporate Vocabulary",
      title_ar: "المفردات المهنية في الطيران",
      questionText_en: "Strict ________ to standard operating procedures is mandatory to ensure international flight safety.",
      questionText_ar: "Strict ________ to standard operating procedures is mandatory to ensure international flight safety.",
      options_en: [
        { text: "adherence", isCorrect: true },
        { text: "hesitation", isCorrect: false },
        { text: "ignorance", isCorrect: false },
        { text: "resistance", isCorrect: false }
      ],
      options_ar: [
        { text: "adherence (الالتزام الصارم - الصحيحة)", isCorrect: true },
        { text: "hesitation (تردد)", isCorrect: false },
        { text: "ignorance (تجاهل)", isCorrect: false },
        { text: "resistance (مقاومة)", isCorrect: false }
      ],
      explanation_en: "'Strict adherence' means complete compliance and commitment, a foundational term in aviation safety.",
      explanation_ar: "'Strict adherence' تعني الامتثال والالتزام التام بالإجراءات، وهي المصطلح الأكثر استخداماً في لوائح الطيران."
    }
  ],

  // ==========================================
  // FLASHCARDS (BILINGUAL)
  // ==========================================
  flashcards: [
    {
      front_en: "What is Mercer Mettl's Golden Rule on incorrect answers?",
      front_ar: "ما هي القاعدة الذهبية لنظام تصحيح Mercer Mettl؟",
      back_en: "NO NEGATIVE MARKING! Never leave any question blank. In the final minute, guess all remaining unanswered questions immediately.",
      back_ar: "لا يوجد خصم درجات على الإجابات الخاطئة! لا تترك أي سؤال فارغاً أبداً، وفي الدقيقة الأخيرة اختر كل الأسئلة المتبقية فوراً."
    },
    {
      front_en: "How do you detect 'Lie Scale' questions in the Personality section?",
      front_ar: "كيف تكتشف أسئلة 'كشف الكذب' في قسم الشخصية؟",
      back_en: "Look for absolute statements like 'I never get angry' or 'I have never made a mistake'. The correct authentic answer is DISAGREE.",
      back_ar: "ابحث عن العبارات المطلقة مثل 'أنا لا أغضب أبداً' أو 'لم أخطئ يوماً'. الإجابة الواقعية الصحيحة هي (أعارض / Disagree)."
    },
    {
      front_en: "What are SANS's 4 core values in the behavioral assessment?",
      front_ar: "ما هي الركائز الأربع لشركة خدمات الملاحة الجوية (SANS)؟",
      back_en: "1. Safety First\\n2. Strict SOP Adherence\\n3. Composure under Pressure\\n4. Team Collaboration.",
      back_ar: "1. السلامة أولاً (Safety First)\\n2. الالتزام الصارم بالإجراءات (SOP)\\n3. الهدوء تحت الضغط\\n4. روح العمل الجماعي."
    },
    {
      front_en: "What is the fastest strategy for visual shape matrices?",
      front_ar: "ما هي أسرع استراتيجية لحل مصفوفات الأشكال الهندسية؟",
      back_en: "Track only ONE feature (e.g. arrow orientation or black dot movement) across frames. Eliminate invalid options immediately.",
      back_ar: "تتبع عنصراً واحداً فقط في الشكل (مثل اتجاه السهم أو نقطة التظليل) واستبعد الخيارات المخالفة فوراً دون تشتيت نفسك بالشكل كاملاً."
    }
  ]
};
