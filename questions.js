/**
 * SANS AFAAQ Assessment - Complete Question Bank
 * Designed specifically for Mercer | Mettl Preparation
 * Categorized by: Personality (MPP), Logical Reasoning (with SVG), Numerical Ability, and English Verbal.
 */

const QUESTION_BANK = {
  // ==========================================
  // SECTION 1: METTL PERSONALITY PROFILER (MPP)
  // ==========================================
  personality: [
    {
      id: "p1",
      category: "Conscientiousness (الالتزام والانضباط)",
      statement: "أفضل دائماً اتباع الإجراءات واللوائح المعتمدة بدقة حتى لو بدت لي الخطوات طويلة أو روتينية.",
      recommended: "strongly_agree",
      type: "likert",
      explanation: "في قطاع الملاحة الجوية (SANS)، يعد الامتثال الصارم لإجراءات التشغيل القياسية (SOP) الركيزة الأولى للسلامة. اختيار 'أوافق بشدة' يعكس انضباطاً عالياً مطلوباً للمنصب.",
      options: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 5 },
        { text: "أوافق (Agree)", value: "agree", score: 4 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 2 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 1 }
      ]
    },
    {
      id: "p2",
      category: "Emotional Stability (الثبات الانفعالي)",
      statement: "أحافظ على هدوئي التام وقدرتي على ترتيب الأولويات عند تراكم المهام أو حدوث طارئ مفاجئ.",
      recommended: "strongly_agree",
      type: "likert",
      explanation: "الملاحة الجوية تتطلب هدوءاً استثنائياً تحت الضغط لتفادي أي قرارات متسرعة. هذه الإجابة تمنحك أعلى تقييم في معيار الاستقرار الانفعالي.",
      options: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 5 },
        { text: "أوافق (Agree)", value: "agree", score: 4 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 2 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 1 }
      ]
    },
    {
      id: "p3",
      category: "Teamwork & Collaboration (العمل الجماعي)",
      statement: "أرى أن نجاح الفريق ككل أهم بكثير من إبراز إنجازاتي الفردية أمام الإدارة.",
      recommended: "strongly_agree",
      type: "likert",
      explanation: "سلامة المجال الجوي تعتمد على تكامل المنظومة (برج المراقبة، التنسيق، الرادار، الدعم الفني)، لذا يبحث المقيمون عن الأشخاص المؤثرين إيجابياً في الفريق.",
      options: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 5 },
        { text: "أوافق (Agree)", value: "agree", score: 4 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 2 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 1 }
      ]
    },
    {
      id: "p4",
      category: "⚠️ فخ كشف الكذب والمثالية (Lie / Social Desirability)",
      statement: "أنا لم أشعر بالغضب أو الإحباط في أي يوم من حياتي المهنية أو الشخصية.",
      recommended: "strongly_disagree",
      type: "likert",
      explanation: "⚠️ تحذير: هذا السؤال مصمم خصيصاً في Mettl لكشف التزييف والمثالية المصطنعة. الإجابة الطبيعية والصادقة هي 'أعارض' أو 'أعارض بشدة'. اختيار 'أوافق' يقلل مصداقية تقريرك كاملاً!",
      options: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 1 },
        { text: "أوافق (Agree)", value: "agree", score: 2 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 4 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 5 }
      ]
    },
    {
      id: "p5",
      category: "Safety & Integrity (السلامة والنزاهة)",
      statement: "إذا لاحظت ثغرة أو خطأ بسيطاً يمس إجراءات السلامة، أبلغ عنه فوراً حتى لو كان صادراً من زميل مقرب.",
      recommended: "strongly_agree",
      type: "likert",
      explanation: "ثقافة السلامة (Safety Culture) في الطيران لا تقبل التستر أو المجاملة. الإبلاغ الفوري والتصحيح هو المعيار المهني الأول.",
      options: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 5 },
        { text: "أوافق (Agree)", value: "agree", score: 4 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 2 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 1 }
      ]
    },
    {
      id: "p6",
      category: "Learning Agility (سرعة التعلم والتكيف)",
      statement: "أتحمس جداً لتعلم واستخدام الأنظمة الرقمية والتقنيات المعقدة حتى لو تطلبت جهداً إضافياً.",
      recommended: "strongly_agree",
      type: "likert",
      explanation: "أنظمة الملاحة الجوية تخضع للتحديث المستمر والأتمتة، والبرنامج يبحث عن كفاءات تمتلك مرونة تعلم عالية.",
      options: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 5 },
        { text: "أوافق (Agree)", value: "agree", score: 4 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 2 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 1 }
      ]
    },
    {
      id: "p7",
      category: "⚠️ فخ كشف الكذب والمثالية (Lie / Social Desirability)",
      statement: "أنا لم أتأخر يوماً في حياتي عن أي موعد سواء كان اجتماعاً أو لقاءً عائلياً.",
      recommended: "disagree",
      type: "likert",
      explanation: "⚠️ فخ تزييف إضافي! لا يوجد إنسان لم يتأخر ظرفياً في حياته. اختيار 'أعارض' يعكس صدقاً وموثوقية عالية لدى خوارزميات التصحيح.",
      options: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 1 },
        { text: "أوافق (Agree)", value: "agree", score: 2 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 5 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 4 }
      ]
    },
    {
      id: "p8",
      category: "Stress Management (إدارة الضغوط)",
      statement: "أشعر أحياناً بالارتباك الشديد عند مواجهة مهام جديدة ذات مواعيد تسليم ضيقة.",
      recommended: "strongly_disagree",
      type: "likert",
      explanation: "في برامج التطوير القيادي والملاحة، يُفضل اختيار 'أعارض' أو 'أعارض بشدة' لإثبات القدرة على العمل برباطة جأش وتنظيم الوقت.",
      options: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 1 },
        { text: "أوافق (Agree)", value: "agree", score: 2 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 4 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 5 }
      ]
    },
    {
      id: "p9",
      category: "Receptiveness to Feedback (تقبل النقد والتطوير)",
      statement: "أعتبر الملاحظات النقدية من المسؤولين والزملاء فرصة حقيقية للتطور المهني وليست هجوماً شخصياً.",
      recommended: "strongly_agree",
      type: "likert",
      explanation: "النقد البناء في التدريب والتأهيل هو وسيلة صقل الكفاءات؛ الموافقة التامة هنا تظهر نضجاً مهنياً عالياً.",
      options: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 5 },
        { text: "أوافق (Agree)", value: "agree", score: 4 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 2 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 1 }
      ]
    },
    {
      id: "p10",
      category: "Attention to Detail (الدقة وقوة الملاحظة)",
      statement: "أدقق في كافة الأرقام والتفاصيل الصغيرة في أي تقرير أو عمل قبل اعتماده نهائياً.",
      recommended: "strongly_agree",
      type: "likert",
      explanation: "في الملاحة الجوية، التفاصيل الصغيرة والأرقام (مثل الارتفاعات ومسارات الرحلات) حاسمة جداً ولا تحتمل أي تساهل.",
      options: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 5 },
        { text: "أوافق (Agree)", value: "agree", score: 4 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 2 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 1 }
      ]
    },
    {
      id: "p11",
      category: "Adaptability (المرونة مع التغيير)",
      statement: "أشعر بالانزعاج الشديد عندما تتغير خطة العمل المقررة في اللحظات الأخيرة.",
      recommended: "strongly_disagree",
      type: "likert",
      explanation: "المجال الجوي ديناميكي ويتأثر بالطقس والطوارئ؛ المرونة وسرعة إعادة ترتيب الخطط سمة محورية.",
      options: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 1 },
        { text: "أوافق (Agree)", value: "agree", score: 2 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 4 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 5 }
      ]
    },
    {
      id: "p12",
      category: "Initiative & Problem Solving (المبادرة وحل المشكلات)",
      statement: "عندما أواجه مشكلة غير معتادة، أبحث عن حلول إبداعية ضمن نطاق الأنظمة المسموح بها دون انتظار توجيه مباشر.",
      recommended: "strongly_agree",
      type: "likert",
      explanation: "تجمع هذه العبارة بين المبادرة الذكية واحترام إطار العمل القانوني المعتمد.",
      options: [
        { text: "أوافق بشدة (Strongly Agree)", value: "strongly_agree", score: 5 },
        { text: "أوافق (Agree)", value: "agree", score: 4 },
        { text: "محايد (Neutral)", value: "neutral", score: 3 },
        { text: "أعارض (Disagree)", value: "disagree", score: 2 },
        { text: "أعارض بشدة (Strongly Disagree)", value: "strongly_disagree", score: 1 }
      ]
    }
  ],

  // ==========================================
  // SECTION 2: LOGICAL & ABSTRACT REASONING (WITH VISUAL SVGs)
  // ==========================================
  logical: [
    {
      id: "l1",
      title: "متتالية حركة الأسهم والدوران (Rotation Matrix)",
      questionText: "ما هو الشكل الذي يكمل المتسلسلة المنطقية أدناه؟",
      svgGraphic: `
        <div style="display:flex; justify-content:center; align-items:center; gap:16px; margin:15px 0; flex-wrap:wrap;">
          <div style="border:2px solid #3b82f6; border-radius:8px; padding:12px; background:#1e293b; text-align:center;">
            <svg width="60" height="60" viewBox="0 0 100 100">
              <line x1="50" y1="90" x2="50" y2="20" stroke="#60a5fa" stroke-width="8" stroke-linecap="round" />
              <polygon points="35,35 50,10 65,35" fill="#60a5fa" />
            </svg>
            <div style="color:#94a3b8; font-size:12px; margin-top:4px;">إطار 1 (أعلى)</div>
          </div>
          <div style="color:#38bdf8; font-size:24px; font-weight:bold;">➔</div>
          <div style="border:2px solid #3b82f6; border-radius:8px; padding:12px; background:#1e293b; text-align:center;">
            <svg width="60" height="60" viewBox="0 0 100 100">
              <line x1="10" y1="50" x2="80" y2="50" stroke="#60a5fa" stroke-width="8" stroke-linecap="round" />
              <polygon points="65,35 90,50 65,65" fill="#60a5fa" />
            </svg>
            <div style="color:#94a3b8; font-size:12px; margin-top:4px;">إطار 2 (يمين)</div>
          </div>
          <div style="color:#38bdf8; font-size:24px; font-weight:bold;">➔</div>
          <div style="border:2px solid #3b82f6; border-radius:8px; padding:12px; background:#1e293b; text-align:center;">
            <svg width="60" height="60" viewBox="0 0 100 100">
              <line x1="50" y1="10" x2="50" y2="80" stroke="#60a5fa" stroke-width="8" stroke-linecap="round" />
              <polygon points="35,65 50,90 65,65" fill="#60a5fa" />
            </svg>
            <div style="color:#94a3b8; font-size:12px; margin-top:4px;">إطار 3 (أسفل)</div>
          </div>
          <div style="color:#38bdf8; font-size:24px; font-weight:bold;">➔</div>
          <div style="border:2px dashed #f59e0b; border-radius:8px; padding:18px; background:#1e293b; color:#f59e0b; font-size:26px; font-weight:bold;">
            ؟
          </div>
        </div>
      `,
      options: [
        { text: "سهم يشير لليسار (Left)", isCorrect: true },
        { text: "سهم يشير للأعلى (Up)", isCorrect: false },
        { text: "سهم يشير للأسفل (Down)", isCorrect: false },
        { text: "سهم مائل بزاوية 45 درجة", isCorrect: false }
      ],
      explanation: "السهم يدور باتجاه عقارب الساعة بمقدار 90 درجة في كل إطار: أعلى ➔ يمين ➔ أسفل ➔ التالي يجب أن يشير إلى اليسار."
    },
    {
      id: "l2",
      title: "متتالية الأرقام المركبة (Alternating Series)",
      questionText: "أوجد الرقم المفقود في السلسلة التالية: 4, 8, 6, 12, 10, 20, ...",
      options: [
        { text: "18", isCorrect: true },
        { text: "22", isCorrect: false },
        { text: "16", isCorrect: false },
        { text: "24", isCorrect: false }
      ],
      explanation: "النمط هو عملية متناوبة: (ضرب 2 ثم طرح 2). 4 × 2 = 8 ➔ 8 - 2 = 6 ➔ 6 × 2 = 12 ➔ 12 - 2 = 10 ➔ 10 × 2 = 20 ➔ التالي هو طرح 2: (20 - 2 = 18)."
    },
    {
      id: "l3",
      title: "مصفوفة تظليل الأشكال (Shading & Increment)",
      questionText: "في مصفوفة مربعات 2×2 مقسمة لأربعة أجزاء، إذا كان الجزء المظلل يتحرك في اتجاه عقارب الساعة مع زيادة مربع مظلل إضافي كل دورتين، ما هي القاعدة الحاكمة؟",
      options: [
        { text: "حركة منتظمة في اتجاه عقارب الساعة بزاوية 90°", isCorrect: true },
        { text: "انعكاس مرآة أفقي وعمودي", isCorrect: false },
        { text: "حركة عشوائية غير محددة", isCorrect: false },
        { text: "دوران عكس عقارب الساعة", isCorrect: false }
      ],
      explanation: "دائماً في اختبارات Mettl، ركز على 'نقطة مرجعية' واحدة وتتبع دورانها أو إزاحتها في كل خطوة."
    },
    {
      id: "l4",
      title: "الاستنتاج القياسي (Syllogism)",
      questionText: "معطى 1: جميع مهندسي الملاحة يتقنون اللغة الإنجليزية.\\nمعطى 2: بعض مهندسي الملاحة حاصلون على رخصة طيران.\\nأي من الاستنتاجات التالية مؤكد وصحيح 100%؟",
      options: [
        { text: "بعض الحاصلين على رخصة طيران يتقنون اللغة الإنجليزية.", isCorrect: true },
        { text: "جميع الحاصلين على رخصة طيران هم مهندسو ملاحة.", isCorrect: false },
        { text: "جميع من يتقنون الإنجليزية حاصلون على رخصة طيران.", isCorrect: false },
        { text: "لا يوجد مهندس ملاحة لا يحمل رخصة طيران.", isCorrect: false }
      ],
      explanation: "بما أن الفئة المشتركة (مهندسو الملاحة الذين يحملون رخصة) تقع كلياً ضمن فئة من يتقنون الإنجليزية، فبالتأكيد بعض حاملي الرخصة يتقنون الإنجليزية."
    },
    {
      id: "l5",
      title: "المكعبات وتطابق الأوجه (Cube Folding)",
      questionText: "عند طي شكل مخطط متقاطع يحتوي على 6 أوجه مربعة لتكوين مكعب ثلاثي الأبعاد، الوجهان اللذان تفصل بينهما خانة واحدة يكونان دائماً:",
      options: [
        { text: "وجهين متقابلين (Opposite faces)", isCorrect: true },
        { text: "وجهين متجاورين (Adjacent faces)", isCorrect: false },
        { text: "متعامدين", isCorrect: false },
        { text: "متطابقين في نفس الموضع", isCorrect: false }
      ],
      explanation: "قاعدة هندسية ثابتة في اختبارات المكعبات: في أي مخطط شريطي مستقيم، الأوجه التي يفصل بينها وجه واحد تكون دائماً متقابلة ولا يمكن أن تتجاور أبداً."
    }
  ],

  // ==========================================
  // SECTION 3: NUMERICAL ABILITY (MENTAL MATH TRICKS)
  // ==========================================
  numerical: [
    {
      id: "n1",
      title: "حساب نسبة الزيادة المئوية السريعة (Percentage Growth)",
      questionText: "ارتفع عدد الطائرات العابرة في قطاع جوي معين من 500 طائرة يومياً إلى 650 طائرة يومياً. ما هي نسبة الزيادة المئوية؟",
      options: [
        { text: "30%", isCorrect: true },
        { text: "25%", isCorrect: false },
        { text: "35%", isCorrect: false },
        { text: "15%", isCorrect: false }
      ],
      explanation: "الحساب السريع: الزيادة = 650 - 500 = 150. نسبة الزيادة = (150 ÷ 500) × 100 = 15 ÷ 50 = 30%. اختصار ذهني: 10% من 500 هي 50، والزيادة هي 150 (3 أضعاف 50)، إذاً 3 × 10% = 30%."
    },
    {
      id: "n2",
      title: "السرعة والزمن والمسافة (Speed, Distance, Time)",
      questionText: "طائرة نقل ركاب تقطع مسافة 2400 كيلومتر في مدة زمنية قدرها ساعتان و 30 دقيقة (2.5 ساعة). ما هو متوسط سرعتها بالساعة؟",
      options: [
        { text: "960 كم/ساعة", isCorrect: true },
        { text: "900 كم/ساعة", isCorrect: false },
        { text: "1000 كم/ساعة", isCorrect: false },
        { text: "850 كم/ساعة", isCorrect: false }
      ],
      explanation: "القانون: السرعة = المسافة ÷ الزمن. 2400 ÷ 2.5. حيلة ذهنية سريعة: اضرب البسط والمقام في 2 للتخلص من الفاصلة ➔ (2400 × 2) ÷ (2.5 × 2) = 4800 ÷ 5 = 960 كم/ساعة فوراً!"
    },
    {
      id: "n3",
      title: "النسبة والتناسب (Ratios & Distribution)",
      questionText: "تم توزيع ميزانية تدريب بقيمة 120,000 ريال على ثلاثة أقسام بنسبة 3 : 2 : 1. كم نصيب القسم صاحب الحصة الأكبر؟",
      options: [
        { text: "60,000 ريال", isCorrect: true },
        { text: "40,000 ريال", isCorrect: false },
        { text: "50,000 ريال", isCorrect: false },
        { text: "70,000 ريال", isCorrect: false }
      ],
      explanation: "مجموع الأجزاء = 3 + 2 + 1 = 6 أجزاء. قيمة الجزء الواحد = 120,000 ÷ 6 = 20,000 ريال. نصيب القسم الأكبر (3 أجزاء) = 3 × 20,000 = 60,000 ريال."
    },
    {
      id: "n4",
      title: "المتوسط الحسابي السريع (Averages)",
      questionText: "سجل برج المراقبة درجات حرارة خلال 5 أيام: (28, 32, 30, 35, 25). ما هو المتوسط الحسابي لدرجة الحرارة؟",
      options: [
        { text: "30", isCorrect: true },
        { text: "29", isCorrect: false },
        { text: "31", isCorrect: false },
        { text: "32", isCorrect: false }
      ],
      explanation: "المجموع = 28 + 32 (=60) + 30 (=90) + 35 + 25 (=60) ➔ 90 + 60 = 150. المتوسط = 150 ÷ 5 = 30."
    },
    {
      id: "n5",
      title: "قراءة وتحليل البيانات من الجداول (Data Interpretation)",
      questionText: "إذا كانت تكلفة تشغيل نظام الملاحة 80,000 ريال وتمثل الصيانة 25% منها، وتحديث البرمجيات 40%، والباقي للتدريب. كم يبلغ المبلغ المخصص للتدريب؟",
      options: [
        { text: "28,000 ريال", isCorrect: true },
        { text: "20,000 ريال", isCorrect: false },
        { text: "32,000 ريال", isCorrect: false },
        { text: "24,000 ريال", isCorrect: false }
      ],
      explanation: "نسبة التدريب المتبقية = 100% - (25% + 40%) = 100% - 65% = 35%. المبلغ = 35% من 80,000 ➔ 10% = 8,000، إذاً 30% = 24,000، و 5% = 4,000 ➔ 24,000 + 4,000 = 28,000 ريال."
    }
  ],

  // ==========================================
  // SECTION 4: ENGLISH VERBAL & COMPREHENSION
  // ==========================================
  english: [
    {
      id: "e1",
      title: "Conjunctions (أدوات الربط والسبب)",
      questionText: "The scheduled flight inspection was delayed ________ the severe sandstorm in the southern region.",
      options: [
        { text: "due to", isCorrect: true },
        { text: "although", isCorrect: false },
        { text: "despite", isCorrect: false },
        { text: "because", isCorrect: false }
      ],
      explanation: "نستخدم 'due to' لأن ما بعدها عبارة اسمية (the severe sandstorm). بينما 'because' يأتي بعدها جملة كاملة (فاعل وفعل)."
    },
    {
      id: "e2",
      title: "Subject-Verb Agreement (توافق الفعل والفاعل)",
      questionText: "Each of the air traffic controllers ________ required to attend the safety briefing.",
      options: [
        { text: "is", isCorrect: true },
        { text: "are", isCorrect: false },
        { text: "were", isCorrect: false },
        { text: "have been", isCorrect: false }
      ],
      explanation: "قاعدة ذهبية في اختبارات Mettl: الكلمات (Each, Either, Neither, Everyone) تعامل دائماً معاملة المفرد، لذلك نختار 'is'."
    },
    {
      id: "e3",
      title: "Workplace & Aviation Vocabulary (المفردات المهنية)",
      questionText: "Strict ________ to standard operating procedures is mandatory to ensure flight safety.",
      options: [
        { text: "adherence", isCorrect: true },
        { text: "hesitation", isCorrect: false },
        { text: "ignorance", isCorrect: false },
        { text: "resistance", isCorrect: false }
      ],
      explanation: "'Strict adherence' يعني (الالتزام الصارم / الامتثال التام)، وهي من أكثر الكلمات استخداماً في أدبيات الطيران والملاحة الجوية."
    },
    {
      id: "e4",
      title: "Prepositions (حروف الجر الدقيقة)",
      questionText: "The engineer is highly skilled ________ diagnosing automated radar systems.",
      options: [
        { text: "at", isCorrect: true },
        { text: "in", isCorrect: false },
        { text: "with", isCorrect: false },
        { text: "on", isCorrect: false }
      ],
      explanation: "الصفة 'skilled' أو 'good' تأخذ حرف الجر 'at' عند الحديث عن مهارة أو أداء محدد: skilled at doing something."
    },
    {
      id: "e5",
      title: "Contrasting Connectors (الروابط التناقضية)",
      questionText: "________ the challenging weather conditions, the pilot executed a smooth landing.",
      options: [
        { text: "Despite", isCorrect: true },
        { text: "Even though", isCorrect: false },
        { text: "Whereas", isCorrect: false },
        { text: "However", isCorrect: false }
      ],
      explanation: "'Despite' (بالرغم من) يأتي بعدها اسم أو شبه جملة اسمية (the challenging weather conditions) دون الحاجة لفعل رئيسي."
    }
  ],

  // ==========================================
  // FLASHCARDS FOR QUICK REVISION
  // ==========================================
  flashcards: [
    {
      front: "ما هي القاعدة الذهبية لنظام تصحيح Mercer Mettl؟",
      back: "لا يوجد خصم درجات على الخطأ (No Negative Marking)! إذا شارف الوقت على الانتهاء، اختر جميع الإجابات المتبقية فوراً ولا تترك أي سؤال فارغاً."
    },
    {
      front: "كيف تكتشف خوارزميات Mettl 'المثالية المصطنعة' في أسئلة الشخصية؟",
      back: "من خلال أسئلة كشف الكذب المطلقة مثل: 'أنا لا أغضب أبداً' أو 'لم أتأخر يوماً'. الإجابة الصحيحة هي (أعارض) لإثبات الصدق والواقعية."
    },
    {
      front: "ما هي الركائز الأربع التي تبحث عنها شركة الملاحة الجوية (SANS)؟",
      back: "1. السلامة أولاً (Safety First)\\n2. الالتزام الصارم بالإجراءات (SOP Adherence)\\n3. الهدوء والثبات تحت الضغط (Composure)\\n4. روح العمل الجماعي (Teamwork)."
    },
    {
      front: "كيف تضاعف سرعتك في حل مسائل الأشكال والمنطق؟",
      back: "حدد عنصراً واحداً فقط في الشكل (سهم أو نقطة تظليل) وتتبع دورانه أو حركته واستبعد الخيارات المخالفة مباشرة دون النظر لتفاصيل الشكل كله."
    },
    {
      front: "كيف تقرأ قطع الفهم في اللغة الإنجليزية (Comprehension)؟",
      back: "اقرأ السؤال وخياراته أولاً لتحديد (الكلمة المفتاحية Keyword)، ثم امسح القطعة بعينيك لتجد الكلمة وتقرأ السطر الذي وردت فيه فقط!"
    }
  ]
};
