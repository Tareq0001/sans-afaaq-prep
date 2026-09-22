/**
 * SANS AFAAQ Assessment - Complete Question Bank (English Standard)
 * Designed for Mercer | Mettl Preparation (Aviation & Air Navigation Context)
 */

const QUESTION_BANK = {
  // ==========================================
  // SECTION 1: METTL PERSONALITY PROFILER (MPP) - ENGLISH
  // ==========================================
  personality: [
    {
      id: "p1",
      category: "Conscientiousness & Compliance (الالتزام والانضباط)",
      statement: "I strictly follow established rules and standard operating procedures (SOP), even when shortcuts are available.",
      recommended: "strongly_agree",
      type: "likert",
      explanation: "In Air Navigation (SANS), strict adherence to SOPs is the #1 safety pillar. Choosing 'Strongly Agree' gives you the highest compliance rating.",
      options: [
        { text: "Strongly Agree", value: "strongly_agree", score: 5 },
        { text: "Agree", value: "agree", score: 4 },
        { text: "Neutral", value: "neutral", score: 3 },
        { text: "Disagree", value: "disagree", score: 2 },
        { text: "Strongly Disagree", value: "strongly_disagree", score: 1 }
      ]
    },
    {
      id: "p2",
      category: "Emotional Stability & Composure (الثبات الانفعالي)",
      statement: "I remain completely calm and methodically prioritize tasks when sudden emergencies or high workloads arise.",
      recommended: "strongly_agree",
      type: "likert",
      explanation: "Aviation demands exceptional composure under pressure to avoid impulsive decisions. 'Strongly Agree' is the optimal choice.",
      options: [
        { text: "Strongly Agree", value: "strongly_agree", score: 5 },
        { text: "Agree", value: "agree", score: 4 },
        { text: "Neutral", value: "neutral", score: 3 },
        { text: "Disagree", value: "disagree", score: 2 },
        { text: "Strongly Disagree", value: "strongly_disagree", score: 1 }
      ]
    },
    {
      id: "p3",
      category: "Teamwork & Synergy (العمل الجماعي)",
      statement: "I believe overall team success is far more critical than individual recognition or personal credit.",
      recommended: "strongly_agree",
      type: "likert",
      explanation: "Air traffic safety relies on seamless coordination across towers, radar controllers, and technical teams. Teamwork is indispensable.",
      options: [
        { text: "Strongly Agree", value: "strongly_agree", score: 5 },
        { text: "Agree", value: "agree", score: 4 },
        { text: "Neutral", value: "neutral", score: 3 },
        { text: "Disagree", value: "disagree", score: 2 },
        { text: "Strongly Disagree", value: "strongly_disagree", score: 1 }
      ]
    },
    {
      id: "p4",
      category: "⚠️ Lie Scale / Social Desirability (فخ كشف الكذب والمثالية)",
      statement: "I have never felt angry, frustrated, or irritated at work or in my personal life.",
      recommended: "strongly_disagree",
      type: "likert",
      explanation: "⚠️ TRAP QUESTION: Mettl inserts this to catch fake-good candidates. No human never feels frustration. Choose 'Disagree' or 'Strongly Disagree' to preserve your credibility score!",
      options: [
        { text: "Strongly Agree", value: "strongly_agree", score: 1 },
        { text: "Agree", value: "agree", score: 2 },
        { text: "Neutral", value: "neutral", score: 3 },
        { text: "Disagree", value: "disagree", score: 4 },
        { text: "Strongly Disagree", value: "strongly_disagree", score: 5 }
      ]
    },
    {
      id: "p5",
      category: "Safety Culture & Integrity (ثقافة السلامة والنزاهة)",
      statement: "If I observe a safety protocol violation, I report it immediately, regardless of who made the error.",
      recommended: "strongly_agree",
      type: "likert",
      explanation: "Aviation safety culture (Just Culture) has zero tolerance for safety compromises. Immediate reporting is mandatory.",
      options: [
        { text: "Strongly Agree", value: "strongly_agree", score: 5 },
        { text: "Agree", value: "agree", score: 4 },
        { text: "Neutral", value: "neutral", score: 3 },
        { text: "Disagree", value: "disagree", score: 2 },
        { text: "Strongly Disagree", value: "strongly_disagree", score: 1 }
      ]
    },
    {
      id: "p6",
      category: "Learning Agility (سرعة التعلم والتكيف)",
      statement: "I am eager to learn and master complex new software systems and advanced technological tools.",
      recommended: "strongly_agree",
      type: "likert",
      explanation: "Air navigation systems continuously modernize. SANS AFAAQ seeks candidates with high digital and learning agility.",
      options: [
        { text: "Strongly Agree", value: "strongly_agree", score: 5 },
        { text: "Agree", value: "agree", score: 4 },
        { text: "Neutral", value: "neutral", score: 3 },
        { text: "Disagree", value: "disagree", score: 2 },
        { text: "Strongly Disagree", value: "strongly_disagree", score: 1 }
      ]
    },
    {
      id: "p7",
      category: "⚠️ Lie Scale / Social Desirability (فخ كشف الكذب والمثالية)",
      statement: "I have never been late to any meeting, appointment, or event in my entire life.",
      recommended: "disagree",
      type: "likert",
      explanation: "⚠️ LIE SCALE TRAP: Selecting 'Strongly Agree' triggers the algorithm's unreliability flag. Selecting 'Disagree' indicates honesty.",
      options: [
        { text: "Strongly Agree", value: "strongly_agree", score: 1 },
        { text: "Agree", value: "agree", score: 2 },
        { text: "Neutral", value: "neutral", score: 3 },
        { text: "Disagree", value: "disagree", score: 5 },
        { text: "Strongly Disagree", value: "strongly_disagree", score: 4 }
      ]
    },
    {
      id: "p8",
      category: "Stress Resilience (مقاومة الضغوط)",
      statement: "I easily become overwhelmed and disorganized when facing tight deadlines.",
      recommended: "strongly_disagree",
      type: "likert",
      explanation: "In high-reliability organizations, maintaining composure and structure under time pressure is vital. Choose 'Strongly Disagree'.",
      options: [
        { text: "Strongly Agree", value: "strongly_agree", score: 1 },
        { text: "Agree", value: "agree", score: 2 },
        { text: "Neutral", value: "neutral", score: 3 },
        { text: "Disagree", value: "disagree", score: 4 },
        { text: "Strongly Disagree", value: "strongly_disagree", score: 5 }
      ]
    },
    {
      id: "p9",
      category: "Receptiveness to Feedback (تقبل التوجيه والنقد)",
      statement: "I view constructive feedback and performance critiques as valuable learning opportunities.",
      recommended: "strongly_agree",
      type: "likert",
      explanation: "Professional maturity and coachability are critical traits for graduate and talent development programs.",
      options: [
        { text: "Strongly Agree", value: "strongly_agree", score: 5 },
        { text: "Agree", value: "agree", score: 4 },
        { text: "Neutral", value: "neutral", score: 3 },
        { text: "Disagree", value: "disagree", score: 2 },
        { text: "Strongly Disagree", value: "strongly_disagree", score: 1 }
      ]
    },
    {
      id: "p10",
      category: "Attention to Detail (الدقة وقوة الملاحظة)",
      statement: "I double-check numerical figures, coordinates, and details thoroughly before submitting any operational report.",
      recommended: "strongly_agree",
      type: "likert",
      explanation: "In air navigation, even small digit or coordinate errors can have serious safety implications. Meticulous detail is non-negotiable.",
      options: [
        { text: "Strongly Agree", value: "strongly_agree", score: 5 },
        { text: "Agree", value: "agree", score: 4 },
        { text: "Neutral", value: "neutral", score: 3 },
        { text: "Disagree", value: "disagree", score: 2 },
        { text: "Strongly Disagree", value: "strongly_disagree", score: 1 }
      ]
    }
  ],

  // ==========================================
  // SECTION 2: LOGICAL & ABSTRACT REASONING (WITH VISUAL SVGs)
  // ==========================================
  logical: [
    {
      id: "l1",
      title: "Rotation Matrix (متتالية دوران الأسهم)",
      questionText: "Which shape logically replaces the question mark (?) in the sequence below?",
      svgGraphic: `
        <div style="display:flex; justify-content:center; align-items:center; gap:16px; margin:15px 0; flex-wrap:wrap;">
          <div style="border:2px solid #3b82f6; border-radius:8px; padding:12px; background:#1e293b; text-align:center;">
            <svg width="60" height="60" viewBox="0 0 100 100">
              <line x1="50" y1="90" x2="50" y2="20" stroke="#60a5fa" stroke-width="8" stroke-linecap="round" />
              <polygon points="35,35 50,10 65,35" fill="#60a5fa" />
            </svg>
            <div style="color:#94a3b8; font-size:12px; margin-top:4px;">Frame 1 (UP)</div>
          </div>
          <div style="color:#38bdf8; font-size:24px; font-weight:bold;">➔</div>
          <div style="border:2px solid #3b82f6; border-radius:8px; padding:12px; background:#1e293b; text-align:center;">
            <svg width="60" height="60" viewBox="0 0 100 100">
              <line x1="10" y1="50" x2="80" y2="50" stroke="#60a5fa" stroke-width="8" stroke-linecap="round" />
              <polygon points="65,35 90,50 65,65" fill="#60a5fa" />
            </svg>
            <div style="color:#94a3b8; font-size:12px; margin-top:4px;">Frame 2 (RIGHT)</div>
          </div>
          <div style="color:#38bdf8; font-size:24px; font-weight:bold;">➔</div>
          <div style="border:2px solid #3b82f6; border-radius:8px; padding:12px; background:#1e293b; text-align:center;">
            <svg width="60" height="60" viewBox="0 0 100 100">
              <line x1="50" y1="10" x2="50" y2="80" stroke="#60a5fa" stroke-width="8" stroke-linecap="round" />
              <polygon points="35,65 50,90 65,65" fill="#60a5fa" />
            </svg>
            <div style="color:#94a3b8; font-size:12px; margin-top:4px;">Frame 3 (DOWN)</div>
          </div>
          <div style="color:#38bdf8; font-size:24px; font-weight:bold;">➔</div>
          <div style="border:2px dashed #f59e0b; border-radius:8px; padding:18px; background:#1e293b; color:#f59e0b; font-size:26px; font-weight:bold;">
            ?
          </div>
        </div>
      `,
      options: [
        { text: "Arrow pointing LEFT", isCorrect: true },
        { text: "Arrow pointing UP", isCorrect: false },
        { text: "Arrow pointing DOWN", isCorrect: false },
        { text: "Arrow pointing DIAGONAL", isCorrect: false }
      ],
      explanation: "Pattern: The arrow rotates clockwise by 90 degrees at each step: UP ➔ RIGHT ➔ DOWN ➔ The next must point LEFT."
    },
    {
      id: "l2",
      title: "Alternating Number Series (المتسلسلة المتناوبة)",
      questionText: "Find the missing number in the sequence: 4, 8, 6, 12, 10, 20, ...?",
      options: [
        { text: "18", isCorrect: true },
        { text: "22", isCorrect: false },
        { text: "16", isCorrect: false },
        { text: "24", isCorrect: false }
      ],
      explanation: "Pattern: Alternating operations (× 2, then - 2). 4 × 2 = 8 ➔ 8 - 2 = 6 ➔ 6 × 2 = 12 ➔ 12 - 2 = 10 ➔ 10 × 2 = 20 ➔ Next is: 20 - 2 = 18."
    },
    {
      id: "l3",
      title: "Deductive Syllogism (الاستنتاج المنطقي)",
      questionText: "Premise 1: All air traffic controllers are certified in standard English.\\nPremise 2: Some air traffic controllers hold private pilot licenses.\\nWhich conclusion is definitely TRUE?",
      options: [
        { text: "Some private pilot license holders are certified in standard English.", isCorrect: true },
        { text: "All private pilot license holders are air traffic controllers.", isCorrect: false },
        { text: "All people certified in standard English hold pilot licenses.", isCorrect: false },
        { text: "No air traffic controller is without a pilot license.", isCorrect: false }
      ],
      explanation: "Since the intersecting group (controllers holding pilot licenses) is entirely contained within the group certified in English, it is definitely true that some pilot license holders are certified in English."
    },
    {
      id: "l4",
      title: "Cube Folding & Spatial Reasoning (المكعبات ثلاثية الأبعاد)",
      questionText: "When folding a flat 6-square cross layout into a 3D cube, two faces separated by exactly one square are always:",
      options: [
        { text: "Opposite faces (never adjacent)", isCorrect: true },
        { text: "Adjacent faces (sharing an edge)", isCorrect: false },
        { text: "Perpendicular faces", isCorrect: false },
        { text: "Identical faces", isCorrect: false }
      ],
      explanation: "Golden Spatial Rule: In any straight line of squares on a cube net, faces separated by one square will always fold to be opposite each other."
    }
  ],

  // ==========================================
  // SECTION 3: NUMERICAL ABILITY (MENTAL MATH)
  // ==========================================
  numerical: [
    {
      id: "n1",
      title: "Percentage Increase (نسبة الزيادة المئوية)",
      questionText: "Daily transit flights in a specific air corridor increased from 500 to 650 flights. What is the percentage increase?",
      options: [
        { text: "30%", isCorrect: true },
        { text: "25%", isCorrect: false },
        { text: "35%", isCorrect: false },
        { text: "15%", isCorrect: false }
      ],
      explanation: "Shortcut: Increase = 650 - 500 = 150. 10% of 500 is 50. 150 is 3 times 50, so 3 × 10% = 30%."
    },
    {
      id: "n2",
      title: "Speed, Distance, Time (السرعة والزمن والمسافة)",
      questionText: "An aircraft covers a distance of 2,400 km in 2 hours and 30 minutes (2.5 hours). What is its average speed?",
      options: [
        { text: "960 km/h", isCorrect: true },
        { text: "900 km/h", isCorrect: false },
        { text: "1,000 km/h", isCorrect: false },
        { text: "850 km/h", isCorrect: false }
      ],
      explanation: "Speed = Distance ÷ Time = 2,400 ÷ 2.5. Mental trick: multiply both by 2 to eliminate decimals ➔ 4,800 ÷ 5 = 960 km/h."
    },
    {
      id: "n3",
      title: "Ratios & Budget Allocation (النسبة والتناسب)",
      questionText: "A training budget of 120,000 SAR is shared among three departments in the ratio 3 : 2 : 1. How much does the largest department receive?",
      options: [
        { text: "60,000 SAR", isCorrect: true },
        { text: "40,000 SAR", isCorrect: false },
        { text: "50,000 SAR", isCorrect: false },
        { text: "70,000 SAR", isCorrect: false }
      ],
      explanation: "Total parts = 3 + 2 + 1 = 6 parts. Value of 1 part = 120,000 ÷ 6 = 20,000 SAR. Largest share (3 parts) = 3 × 20,000 = 60,000 SAR."
    },
    {
      id: "n4",
      title: "Data Interpretation (تحليل البيانات والنسب)",
      questionText: "If navigation equipment maintenance costs 80,000 SAR total, where 25% is spent on hardware, 40% on software updates, and the remainder on safety training, what is the training budget?",
      options: [
        { text: "28,000 SAR", isCorrect: true },
        { text: "20,000 SAR", isCorrect: false },
        { text: "32,000 SAR", isCorrect: false },
        { text: "24,000 SAR", isCorrect: false }
      ],
      explanation: "Remaining percentage = 100% - (25% + 40%) = 35%. 35% of 80,000: 10% = 8,000, 30% = 24,000, 5% = 4,000 ➔ 24,000 + 4,000 = 28,000 SAR."
    }
  ],

  // ==========================================
  // SECTION 4: ENGLISH VERBAL & COMPREHENSION
  // ==========================================
  english: [
    {
      id: "e1",
      title: "Conjunctions & Causality (أدوات الربط والسبب)",
      questionText: "The scheduled flight inspection was delayed ________ the severe sandstorm in the southern sector.",
      options: [
        { text: "due to", isCorrect: true },
        { text: "although", isCorrect: false },
        { text: "despite", isCorrect: false },
        { text: "because", isCorrect: false }
      ],
      explanation: "Use 'due to' before noun phrases ('the severe sandstorm'). 'Because' must be followed by a subject and verb clause."
    },
    {
      id: "e2",
      title: "Subject-Verb Agreement (توافق الفعل والفاعل)",
      questionText: "Each of the air traffic controllers ________ required to attend the mandatory safety briefing.",
      options: [
        { text: "is", isCorrect: true },
        { text: "are", isCorrect: false },
        { text: "were", isCorrect: false },
        { text: "have been", isCorrect: false }
      ],
      explanation: "Rule: 'Each', 'Either', 'Neither', and 'Everyone' always take singular verbs. Therefore, 'is' is correct."
    },
    {
      id: "e3",
      title: "Aviation & Corporate Vocabulary (المفردات المهنية)",
      questionText: "Strict ________ to standard operating procedures is mandatory to ensure international flight safety.",
      options: [
        { text: "adherence", isCorrect: true },
        { text: "hesitation", isCorrect: false },
        { text: "ignorance", isCorrect: false },
        { text: "resistance", isCorrect: false }
      ],
      explanation: "'Strict adherence' means complete compliance and commitment, a foundational term in aviation safety."
    },
    {
      id: "e4",
      title: "Prepositions (حروف الجر الدقيقة)",
      questionText: "The systems engineer is highly skilled ________ diagnosing automated radar discrepancies.",
      options: [
        { text: "at", isCorrect: true },
        { text: "in", isCorrect: false },
        { text: "with", isCorrect: false },
        { text: "on", isCorrect: false }
      ],
      explanation: "The adjective 'skilled' or 'good' pairs with preposition 'at' when describing proficiency in an activity: 'skilled at diagnosing'."
    },
    {
      id: "e5",
      title: "Contrasting Connectors (الروابط التناقضية)",
      questionText: "________ the challenging crosswinds, the pilot executed a smooth touchdown.",
      options: [
        { text: "Despite", isCorrect: true },
        { text: "Even though", isCorrect: false },
        { text: "Whereas", isCorrect: false },
        { text: "However", isCorrect: false }
      ],
      explanation: "'Despite' is followed by a noun phrase ('the challenging crosswinds') without needing a full clause."
    }
  ],

  // ==========================================
  // FLASHCARDS FOR QUICK REVISION (BILINGUAL/ENGLISH FOCUS)
  // ==========================================
  flashcards: [
    {
      front: "What is Mercer Mettl's Golden Rule on incorrect answers?",
      back: "NO NEGATIVE MARKING! Never leave any question blank. In the final minute, guess all remaining unanswered questions immediately."
    },
    {
      front: "How do you detect 'Lie Scale' questions in the Personality section?",
      back: "Look for absolute statements like 'I never get angry' or 'I have never made a mistake'. The correct, authentic answer is DISAGREE."
    },
    {
      front: "What are SANS's 4 core values in the behavioral assessment?",
      back: "1. Safety First (Zero tolerance for violations)\\n2. Strict SOP Adherence (Follow standard procedures)\\n3. Composure under Pressure (Stay calm in crises)\\n4. Team Collaboration."
    },
    {
      front: "What is the fastest strategy for visual shape matrices?",
      back: "Track only ONE feature (e.g. arrow orientation or black dot movement) across frames. Eliminate invalid options immediately."
    },
    {
      front: "How do you handle English Reading Comprehension efficiently?",
      back: "Read the QUESTION and KEYWORDS first! Then scan the passage for that specific keyword rather than reading the entire text from scratch."
    }
  ]
};
