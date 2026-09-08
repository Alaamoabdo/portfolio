/**
 * Portfolio Script
 * Handles: Translations, Theme Toggle, Typing Animation, Scroll Effects
 * Contact Form: FormSubmit Integration
 */

// --- Translations Data ---
const translations = {
    en: {
        navHome: "HOME",
        navAbout: "ABOUT",
        navEducation: "EDUCATION",
        navSkills: "SKILLS",
        navExperience: "EXPERIENCE",
        expTitle: "My AI Quality Journey",
        experienceComingSoonTitle: "Experience Coming Soon!",
        experienceComingSoonDesc: "My professional experience and career milestones will be added here soon. Stay tuned!",
        exp1Title: "AI Quality Analyst - Personalization Evaluation",
        exp1Date: "Feb 2026 - Present",
        exp1Challenge: "Evaluate whether personalized AI responses are grounded, relevant, and genuinely helpful",
        exp1Action: "Design multi-turn prompts, review model behavior, compare responses side by side, and document evidence-based findings",
        exp1Result: "Produce precise rankings and actionable annotations covering grounding, integration, helpfulness, and naturalness",
        exp2Title: "Technical Foundation - Web Development Projects",
        exp2Date: "Jul 2025 - Aug 2025",
        exp2Challenge: "Understand how real users interact with digital products and where an experience can become confusing",
        exp2Action: "Built web applications while testing flows, checking edge cases, troubleshooting behavior, and communicating findings clearly",
        exp2Result: "Developed the technical awareness and attention to detail needed to assess AI products from a user and system perspective",
        viewCertificate: "View Certificate",
        labelChallenge: "Challenge",
        labelAction: "Action",
        labelResult: "Result",
        navServices: "SERVICES",
        navProjects: "PROJECTS",
        navAchievements: "ACHIEVEMENTS",
        navTestimonials: "TESTIMONIALS",
        comingSoonTitle: "Coming Soon!",
        comingSoonDesc: "My achievements and milestones will be displayed here soon. Stay tuned!",
        heroGreeting: "Hello, I'm",
        heroSummary: "Evaluating personalized AI experiences with analytical rigor, creative prompt design, and precise written feedback.",
        btnViewProjects: "View My Focus",
        btnDownloadCV: "Download CV",
        btnDownloadCVText: "Download CV",
        navContactBtn: "Contact Me",
        aboutTitle: "About Me",
        aboutText1: "I am Alaa, a Computer and Information Technology graduate focused on AI quality evaluation, conversational analysis, and thoughtful user experiences. I enjoy turning ambiguous interactions into clear, evidence-based judgments that help AI systems become more useful and reliable.",
        aboutText2: "My technical background gives me a strong foundation for understanding AI products, while my attention to detail helps me review nuanced responses, compare alternatives side by side, and identify unsupported claims, weak inferences, and unnatural personalization.",
        aboutText3: "I bring strong written communication, structured reasoning, English proficiency, and independent remote-work habits. I am especially interested in evaluating grounding, integration, helpfulness, naturalness, and the quality of multi-turn prompt interactions, including safety compliance and red-teaming robustness.",
        ach1Title: "ITI Summer Training",
        ach1Desc: "Completed intensive training in Angular and modern web development.",
        ach2Title: "SEF Academy",
        ach2Desc: "Practiced structured analysis and evidence-based quality review.",
        eduHeader: "Education",
        eduDegree: "Bachelor of Computer and Information Technology",
        eduInstitution: "Tanta University",
        eduMajor: "Major: Information Technology (IT)",
        eduProject: "Final Project: Crowdfunding Platform in Egypt - Excellent grade",
        eduGPA: "GPA: 3.45 / 4.0 (Very Good) with Honors",
        certHeader: "Certificates",
        cert0Name: "AI Quality Evaluation Portfolio",
        cert0Inst: "Personal Case Studies",
        cert0Date: "2026",
        cert1Name: "Overview of AI",
        cert1Inst: "Huawei ICT Academy",
        cert1Date: "July 11, 2026",
        cert1Desc: "Certificate of completion for the Overview of AI course.",
        cert2Name: "AI for You",
        cert2Inst: "Oracle",
        cert2Date: "June 15, 2026",
        cert2Desc: "Completed Oracle's AI for You learning path and assessment.",
        btnViewCert: "View Certificate",
        tabFrontend: "AI EVALUATION",
        tabBackend: "PROMPT DESIGN",
        tabSoft: "SOFT SKILLS",
        tabTools: "TOOLS & METHODS",
        tabLanguages: "LANGUAGES",
        frontendDesc: "Evaluating personalized AI responses for grounding, integration, helpfulness, naturalness, and accurate use of user context.",
        backendDesc: "Creating multi-turn prompts that test personal context, subtle inferences, conversational continuity, and response quality.",
        skillsTitle: "My Skills",
        servicesTitle: "Services",
        service1Title: "AI Response Evaluation",
        service1Desc: "Evaluating model outputs for factual grounding, instruction compliance, tone accuracy, and personal context retention across complex multi-turn scenarios.",
        service1Tag1: "Grounding",
        service1Tag2: "Fact-Checking",
        service1Tag3: "Context Retention",
        service2Title: "Prompt Engineering & Red-Teaming",
        service2Desc: "Designing realistic multi-turn prompts and execution edge-cases, including adversarial red-teaming vectors to test model boundary safety.",
        service2Tag1: "Multi-Turn",
        service2Tag2: "Red-Teaming",
        service2Tag3: "Jailbreak Testing",
        btnViewPricing: "View Evaluation Profile",
        service3Title: "SxS & Rationale Writing",
        service3Desc: "Performing comparative Side-by-Side (SxS) response analysis and authoring C1-level defensible rationales using strict error taxonomies.",
        service3Tag1: "SxS Ranking",
        service3Tag2: "Error Taxonomy",
        service3Tag3: "C1 Rationales",
        service4Title: "Safety & Red Teaming",
        service4Desc: "Evaluating model robustness against jailbreaks, prompt injections, and over-refusal errors while ensuring policy compliance.",
        service4Tag1: "Red Teaming",
        service4Tag2: "Jailbreak",
        service4Tag3: "Safety Policy",
        projectsTitle: "Evaluation Case Studies",
        projectBenchmarkTitle: "LLM Personalization and SxS Evaluation Benchmark",
        projectBenchmarkScope: "A multi-turn benchmark for evaluating personalized AI experiences",
        projectBenchmarkFocus: "Context retention, personalization quality, side-by-side response ranking, and error taxonomy analysis",
        projectBenchmarkFormat: "Structured datasets, evaluation reports, and reusable Python scripts",
        projectSafetyTitle: "LLM Safety Red Teaming and Jailbreak Benchmark",
        projectSafetyScope: "A comprehensive benchmark for evaluating safe and policy-aligned LLM behavior",
        projectSafetyFocus: "Red teaming, jailbreak attempts, prompt injection detection, and refusal quality",
        projectSafetyFormat: "Safety datasets, evaluation reports, and reusable analysis scripts",
        btnVideo: "Video",
        btnCode: "Code",
        contactTitle: "Get In Touch",
        contactEmailLabel: "Email Me",
        contactPhoneLabel: "Call Me",
        contactLocationLabel: "Location",
        contactLocation: "Fayoum, Egypt",
        contactWhatsappLabel: "WhatsApp",
        btnSendMessage: "Send Message",
        footerCopyright: "© 2026 Alaa Mohamed. All rights reserved.",
        footerWhoTitle: "WHO AM I?",
        footerWhoText: "I am an AI Quality Analyst specializing in prompt design, AI response evaluation, personalization quality, and clear evidence-based feedback.",
        typingRoles: ["Developer", "Engineer", "Enthusiast"],
        formSuccess: "✓ Message sent successfully! I'll get back to you soon.",
        formError: "✗ Failed to send message. Please try again.",
        pricingTitle: "AI Quality Analyst Profile",
        pricingSubtitle: "Why I Fit AI Quality Evaluation",
        pricingDesc: "A concise overview of the skills and working habits I bring to personalized AI evaluation projects.",
        pricingBadge: "Role Fit",
        pricingBanner: "I combine technical product awareness with analytical judgment, creative prompt design, precise written feedback, and independent remote-work discipline.",
        planStarter: "ANALYSIS",
        planBalance: "PROMPTING",
        planProfessional: "COMMUNICATION",
        planCustom: "AVAILABILITY",
        planBasicTitle: "Evidence-Based Review",
        planBalanceTitle: "Structured Prompt Design",
        planProTitle: "Precise Rationales",
        planTalkTitle: "Ready to Contribute",
        planBasicDesc: "Careful review of grounding, relevance, helpfulness, and unsupported personalization.",
        planBalanceDesc: "Realistic multi-turn conversations built from personal context and clear intent.",
        planProDesc: "Clear, concise, structured explanations that reference the exact turn and issue.",
        planTalkDesc: "Available remotely with schedule flexibility and a reliable technical setup.",
        analysisFeature1: "Grounding & Hallucination Audits",
        analysisFeature4: "Multi-turn Context Tracking",
        analysisFeature5: "Adversarial Safety Testing",
        analysisFeature6: "Red-teaming & Safety",
        promptingFeature3: "Constraint-Based Prompting",
        promptingFeature5: "Adversarial Attack Vectors",
        communicationFeature4: "Error Taxonomy Classification",
        analysisCta: "Discuss this strength",
        promptingCta: "See related projects",
        communicationCta: "View evaluation highlights",
        priceProject: "core strength",
        priceFlexible: "Full-time",
        btnGetStarted: "Get Started",
        btnContactMe: "Contact Me",
        backToPortfolio: "Back to Portfolio"
    },
    ar: {
        navHome: "الرئيسية",
        navAbout: "من أنا",
        navEducation: "التعليم",
        navSkills: "مهاراتي",
        navExperience: "الخبرة",
        expTitle: "رحلتي في جودة الذكاء الاصطناعي",
        experienceComingSoonTitle: "الخبرات ستأتي قريباً!",
        experienceComingSoonDesc: "سيتم إضافة خبراتي المهنية ومحطاتي العملية هنا قريباً. ترقبوا!",
        exp1Title: "محلل جودة الذكاء الاصطناعي - تقييم التخصيص",
        exp1Date: "فبراير 2026 - الحاضر",
        exp1Challenge: "تقييم ما إذا كانت ردود الذكاء الاصطناعي مبررة وملائمة ومفيدة فعلاً",
        exp1Action: "تصميم Prompts متعددة الأدوار، ومراجعة سلوك النموذج، ومقارنة الردود، وتوثيق النتائج بالأدلة",
        exp1Result: "إنتاج ترتيبات وتعليقات دقيقة تغطي التأسيس بالأدلة والدمج والفائدة والطبيعية",
        exp2Title: "الأساس التقني - مشاريع تطوير الويب",
        exp2Date: "يوليو 2025 - أغسطس 2025",
        exp2Challenge: "فهم تفاعل المستخدمين مع المنتجات الرقمية وتحديد نقاط الالتباس في التجربة",
        exp2Action: "بناء تطبيقات ويب مع اختبار المسارات والحالات الطرفية وتحليل السلوك وكتابة النتائج بوضوح",
        exp2Result: "تطوير وعي تقني يساعد على تقييم منتجات الذكاء الاصطناعي من منظور المستخدم والنظام",
        viewCertificate: "عرض الشهادة",
        labelChallenge: "التحدي",
        labelAction: "الإجراء",
        labelResult: "النتيجة",
        navServices: "خدماتي",
        navProjects: "مشاريعي",
        navAchievements: "الإنجازات",
        navTestimonials: "التوصيات",
        comingSoonTitle: "قريباً!",
        comingSoonDesc: "إنجازاتي وإنجازاتي ستعرض هنا قريباً. ترقبوا!",
        heroGreeting: "مرحباً، أنا",
        heroSummary: "تقييم تجارب الذكاء الاصطناعي الشخصية بدقة تحليلية وتصميم Prompts وكتابة ملاحظات واضحة.",
        btnViewProjects: "عرض أعمالي",
        btnDownloadCV: "تحميل السيرة الذاتية",
        btnDownloadCVText: "تحميل CV",
        navContactBtn: "تواصل معي",
        aboutTitle: "من أنا",
        aboutText1: "أنا علاء، خريجة حاسبات وتكنولوجيا معلومات أركز على تقييم جودة الذكاء الاصطناعي وتحليل المحادثات وتجارب المستخدم. أستمتع بتحويل التفاعلات الغامضة إلى أحكام واضحة ومدعومة بالأدلة تساعد أنظمة الذكاء الاصطناعي على أن تصبح أكثر فائدة وموثوقية.",
        aboutText2: "تمنحني خلفيتي التقنية أساساً جيداً لفهم منتجات الذكاء الاصطناعي، بينما يساعدني اهتمامي بالتفاصيل على مراجعة الردود الدقيقة ومقارنة البدائل واكتشاف الادعاءات غير المدعومة والاستنتاجات الضعيفة والتخصيص غير الطبيعي.",
        aboutText3: "أمتلك تواصلاً كتابياً قوياً وتفكيراً منظماً وإجادة للإنجليزية وقدرة على العمل باستقلالية عن بُعد. أهتم بشكل خاص بتقييم التأسيس بالأدلة والدمج والفائدة والطبيعية وجودة المحادثات متعددة الأدوار، بما في ذلك الالتزام بمعايير الأمان ومتانة الاختبارات الهجومية.",
        ach1Title: "تدريب ITI الصيفي",
        ach1Desc: "إكمال تدريب مكثف في Angular وتطوير الويب الحديث.",
        ach2Title: "أكاديمية SEF",
        ach2Desc: "حاصلة على شهادة في تدريب تطوير الواجهات الأمامية.",
        eduHeader: "التعليم",
        eduDegree: "بكالوريوس الحاسبات وتكنولوجيا المعلومات",
        eduInstitution: "جامعة طنطا",
        eduMajor: "التخصص: تكنولوجيا المعلومات (IT)",
        eduProject: "مشروع التخرج: منصة للتمويل الجماعي في مصر - تقدير ممتاز",
        eduGPA: "المعدل التراكمي: 3.45 / 4.0 (جيد جداً) مع مرتبة الشرف",
        certHeader: "الشهادات",
        cert0Name: "تطوير الويب المتكامل (Full-Stack)",
        cert0Inst: "مسار Digilians الاحترافي",
        cert0Date: "2026 - الحاضر",
        cert1Name: "نظرة عامة على الذكاء الاصطناعي",
        cert1Inst: "أكاديمية هواوي لتكنولوجيا المعلومات والاتصالات",
        cert1Date: "11 يوليو 2026",
        cert1Desc: "شهادة إتمام دورة Overview of AI.",
        cert2Name: "AI for You",
        cert2Inst: "Oracle",
        cert2Date: "15 يونيو 2026",
        cert2Desc: "إتمام مسار التعلم والتقييم AI for You من Oracle.",
        btnViewCert: "عرض الشهادة",
        tabFrontend: "تقييم الذكاء الاصطناعي",
        tabBackend: "تصميم Prompts",
        tabSoft: "المهارات الشخصية",
        tabTools: "الأدوات والتقنيات",
        tabLanguages: "اللغات",
        frontendDesc: "تقييم ردود الذكاء الاصطناعي الشخصية من حيث التأسيس بالأدلة والدمج والفائدة والطبيعية ودقة استخدام السياق.",
        backendDesc: "إنشاء Prompts متعددة الأدوار تختبر السياق الشخصي والاستنتاجات الدقيقة واستمرارية المحادثة وجودة الرد.",
        skillsTitle: "مهاراتي",
        servicesTitle: "خدماتي",
        service1Title: "تقييم ردود الذكاء الاصطناعي",
        service1Desc: "تقييم مخرجات النماذج من حيث الاستناد إلى الحقائق والالتزام بالتعليمات ودقة النبرة والاحتفاظ بالسياق الشخصي عبر سيناريوهات معقدة متعددة الأدوار.",
        service1Tag1: "الاستناد إلى الأدلة",
        service1Tag2: "التحقق من الحقائق",
        service1Tag3: "الاحتفاظ بالسياق",
        service2Title: "هندسة الـ Prompts والاختبار الهجومي",
        service2Desc: "تصميم Prompts واقعية متعددة الأدوار وحالات تنفيذ طرفية، بما في ذلك أساليب اختبار هجومية لفحص حدود أمان النموذج.",
        service2Tag1: "متعدد الأدوار",
        service2Tag2: "اختبار هجومي",
        service2Tag3: "اختبار تجاوز الحماية",
        btnViewPricing: "عرض ملف التوافق الوظيفي",
        service3Title: "تحليل SxS وكتابة المبررات",
        service3Desc: "إجراء تحليل مقارن للردود جنباً إلى جنب وكتابة مبررات قوية بمستوى C1 باستخدام تصنيفات صارمة للأخطاء.",
        service3Tag1: "ترتيب SxS",
        service3Tag2: "تصنيف الأخطاء",
        service3Tag3: "مبررات C1",
        service4Title: "الأمان والاختبار الهجومي",
        service4Desc: "تقييم متانة النموذج أمام محاولات تجاوز الحماية وحقن التعليمات وأخطاء الرفض المفرط مع ضمان الالتزام بالسياسات.",
        service4Tag1: "اختبار هجومي",
        service4Tag2: "تجاوز الحماية",
        service4Tag3: "سياسة الأمان",
        projectsTitle: "أبرز المشاريع",
        projectBenchmarkTitle: "معيار تقييم تخصيص نماذج اللغة والمقارنة جنباً إلى جنب",
        projectBenchmarkScope: "معيار متعدد الأدوار لتقييم تجارب الذكاء الاصطناعي الشخصية",
        projectBenchmarkFocus: "الاحتفاظ بالسياق، وجودة التخصيص، وترتيب الردود جنباً إلى جنب، وتحليل تصنيف الأخطاء",
        projectBenchmarkFormat: "مجموعات بيانات منظمة وتقارير تقييم وبرامج Python قابلة لإعادة الاستخدام",
        projectSafetyTitle: "معيار اختبار أمان نماذج اللغة واختراقات الحماية",
        projectSafetyScope: "معيار شامل لتقييم سلوك نماذج اللغة الآمن والمتوافق مع السياسات",
        projectSafetyFocus: "اختبارات الفرق الحمراء، ومحاولات تجاوز الحماية، واكتشاف حقن التعليمات، وجودة الرفض",
        projectSafetyFormat: "مجموعات بيانات للأمان وتقارير تقييم وبرامج تحليل قابلة لإعادة الاستخدام",
        btnVideo: "فيديو",
        btnCode: "كود",
        contactTitle: "تواصل معي",
        contactEmailLabel: "راسلني",
        contactPhoneLabel: "اتصل بي",
        contactLocationLabel: "الموقع",
        contactLocation: "الفيوم، مصر",
        contactWhatsappLabel: "واتساب",
        btnSendMessage: "إرسال الرسالة",
        footerCopyright: "© 2026 علاء محمد. جميع الحقوق محفوظة.",
        footerWhoTitle: "من أنا؟",
        footerWhoText: "أنا محللة جودة ذكاء اصطناعي متخصصة في تصميم الـ Prompts وتقييم الردود وجودة التخصيص وكتابة ملاحظات واضحة ومدعومة بالأدلة.",
        typingRoles: ["مطورة", "مهندسة", "شغوفة"],
        formSuccess: "✓ تم إرسال الرسالة بنجاح! سأتواصل معك قريباً.",
        formError: "✗ فشل إرسال الرسالة. الرجاء المحاولة مرة أخرى.",
        pricingTitle: "خطط الأسعار",
        pricingSubtitle: "اختر خطتك",
        pricingDesc: "لا توجد رسوم خفية. كل خطة مصممة لتقديم قيمة حقيقية - من صفحة هبوط بسيطة إلى تطبيق ويب كامل.",
        pricingBadge: "تسعير شفاف",
        pricingBanner: "تشمل جميع الخطط كوداً نظيفاً، وتصميماً استجابياً، ودعماً بعد الإطلاق. كمطور مبتدئ، أقدم أسعاراً معقولة لبناء معرض أعمالي مع تقديم عمل عالي الجودة.",
        planStarter: "البداية",
        planBalance: "التوازن",
        planProfessional: "الاحترافي",
        planCustom: "مخصص",
        planBasicTitle: "أساسي",
        planBalanceTitle: "تصميم Prompts منظم",
        planProTitle: "برو",
        planTalkTitle: "دعنا نتحدث",
        planBasicDesc: "مثالي لمواقع الويب الثابتة البسيطة أو صفحات الهبوط الشخصية.",
        planBalanceDesc: "مثالي لمواقع الأعمال ذات المحتوى الديناميكي و React الأساسي.",
        planProDesc: "مشروع كامل (Full-stack) مع React و Node.js وقاعدة بيانات.",
        planTalkDesc: "حلول مخصصة للمشاريع المعقدة ذات المتطلبات المحددة.",
        analysisFeature1: "تدقيق الاستناد والهلوسة",
        analysisFeature4: "تتبع السياق متعدد الأدوار",
        analysisFeature5: "اختبار الأمان الهجومي",
        analysisFeature6: "الاختبار الهجومي والأمان",
        promptingFeature3: "تصميم Prompts قائم على القيود",
        promptingFeature5: "مسارات الهجوم الهجومية",
        communicationFeature4: "تصنيف الأخطاء وفق taxonomy",
        analysisCta: "ناقش هذه المهارة",
        promptingCta: "شاهد المشاريع المرتبطة",
        communicationCta: "شاهد أبرز التقييمات",
        priceProject: "/للمشروع",
        priceFlexible: "مرن",
        btnGetStarted: "ابدأ الآن",
        btnContactMe: "تواصل معي",
        backToPortfolio: "العودة للمعرض"
    }
};

// --- State Management ---
let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';

// --- Skills Data ---
const skillsData = {
    evaluation: [
        { name: "Grounding", desc: "Check claims against evidence and user-provided context.", icon: "badge-check" },
        { name: "Integration", desc: "Assess whether personal details are used naturally and meaningfully.", icon: "puzzle" },
        { name: "Helpfulness", desc: "Judge relevance, clarity, usefulness, and ease of use.", icon: "hand-helping" },
        { name: "SxS Ranking", desc: "Compare two responses and select the stronger overall result.", icon: "scale" },
        { name: "Error Taxonomy Classification", desc: "Classify grounding, instruction, relevance, and safety failures against defined evaluation criteria.", icon: "list-checks" },
        { name: "Safety & Red-Teaming", desc: "Probe model boundaries with adversarial prompts, jailbreak attempts, and policy-sensitive scenarios.", icon: "shield-alert" },
        { name: "Hallucination Auditing", desc: "Audit factual claims, unsupported inferences, and source-grounding failures in model outputs.", icon: "search-x" },
        { name: "Refusal Alignment", desc: "Evaluate correct refusals against over-refusal and under-refusal failure modes.", icon: "shield-check" }
    ],
    prompting: [
        { name: "Multi-turn Prompts", desc: "Design realistic conversations across one to five turns.", icon: "messages-square" },
        { name: "Context Injection & Personalization", desc: "Inject realistic user context to test personalization fidelity and contextual carryover.", icon: "user-round" },
        { name: "Constraint Enforcement", desc: "Encode strict requirements and acceptance criteria into evaluation prompts.", icon: "target" },
        { name: "Conversation Analysis", desc: "Trace how context is carried through each turn.", icon: "list-checks" },
        { name: "Adversarial Attack Design", desc: "Design friendly and adversarial prompt paths that expose boundary and safety weaknesses.", icon: "swords" }
    ],
    tools: [
        { name: "Python & Evaluation Scripts", desc: "Run reusable scripts for benchmark execution, scoring, and evaluation analysis.", icon: "code-2" },
        { name: "Spreadsheets", desc: "Organize evaluations, rankings, and evidence consistently.", icon: "table-2" },
        { name: "Debug Info", desc: "Extract and verify data-source and summary signals.", icon: "bug" },
        { name: "Annotation", desc: "Record precise turn-level observations and feedback.", icon: "highlighter" },
        { name: "JSON / CSV Benchmarks", desc: "Manage structured benchmark records, annotations, and evaluation outputs.", icon: "file-json-2" },
        { name: "Git & GitHub Repositories", desc: "Manage versioned evaluation projects, scripts, datasets, and reports.", icon: "github" }
    ],
    soft: [
        { name: "Problem Solving", desc: "Finding efficient solutions to complex issues.", icon: "lightbulb" },
        { name: "Defensible Rationale Writing (C1)", desc: "Produce precise, evidence-linked rationales that support comparative judgments.", icon: "message-square" },
        { name: "Teamwork", desc: "Collaborating effectively in group settings.", icon: "users" },
        { name: "Time Management", desc: "Prioritizing tasks and meeting deadlines.", icon: "clock" },
        { name: "Adaptability", desc: "Adjusting quickly to new environments.", icon: "refresh-cw" },
        { name: "Attention to Detail", desc: "Ensuring precision in every evaluation and annotation.", icon: "search" },
        { name: "Continuous Learning", desc: "Staying updated with latest tech trends.", icon: "book-open" }
    ],
    languages: [
        { name: "Arabic", desc: "Native", icon: "star" },
        { name: "English", desc: "C1 Advanced / Fluent", icon: "check-circle" }
    ]
};

const skillsArData = {
    evaluation: [
        { name: "التأسيس بالأدلة", desc: "التحقق من الادعاءات وفق الأدلة وسياق المستخدم.", icon: "badge-check" },
        { name: "دمج المعلومات", desc: "تقييم استخدام التفاصيل الشخصية بشكل طبيعي ومفيد.", icon: "puzzle" },
        { name: "الفائدة", desc: "الحكم على الصلة والوضوح وسهولة الاستخدام.", icon: "hand-helping" },
        { name: "المقارنة الثنائية", desc: "مقارنة ردين واختيار النتيجة الأقوى بشكل عام.", icon: "scale" },
        { name: "تصنيف الأخطاء وفق Taxonomy", desc: "تصنيف أخطاء الاستناد والتعليمات والصلة والأمان وفق معايير تقييم محددة.", icon: "list-checks" },
        { name: "الأمان والاختبار الهجومي", desc: "فحص حدود النموذج باستخدام Prompts هجومية ومحاولات تجاوز الحماية وسيناريوهات حساسة للسياسات.", icon: "shield-alert" },
        { name: "تدقيق الهلوسة", desc: "تدقيق الادعاءات الواقعية والاستنتاجات غير المدعومة وفشل الاستناد إلى المصادر.", icon: "search-x" },
        { name: "مواءمة الرفض", desc: "تقييم الرفض الصحيح مقابل حالات الرفض المفرط أو الرفض غير الكافي.", icon: "shield-check" }
    ],
    prompting: [
        { name: "Prompts متعددة الأدوار", desc: "تصميم محادثات واقعية من دور إلى خمسة أدوار.", icon: "messages-square" },
        { name: "حقن السياق والتخصيص", desc: "إدخال سياق مستخدم واقعي لاختبار دقة التخصيص وانتقال السياق.", icon: "user-round" },
        { name: "فرض القيود", desc: "ترميز المتطلبات الصارمة ومعايير القبول داخل Prompts التقييم.", icon: "target" },
        { name: "تحليل المحادثة", desc: "تتبع انتقال السياق خلال كل دور.", icon: "list-checks" },
        { name: "تصميم الهجمات الهجومية", desc: "تصميم مسارات ودية وهجومية تكشف نقاط ضعف الحدود والأمان.", icon: "swords" }
    ],
    tools: [
        { name: "Python وEvaluation Scripts", desc: "تشغيل سكريبتات قابلة لإعادة الاستخدام لتنفيذ المعايير وحساب النتائج وتحليل التقييم.", icon: "code-2" },
        { name: "الجداول", desc: "تنظيم التقييمات والترتيبات والأدلة باستمرار.", icon: "table-2" },
        { name: "Debug Info", desc: "استخراج والتحقق من إشارات مصادر البيانات والملخصات.", icon: "bug" },
        { name: "التعليقات التوضيحية", desc: "تسجيل الملاحظات الدقيقة لكل دور والتغذية الراجعة.", icon: "highlighter" },
        { name: "JSON / CSV Benchmarks", desc: "إدارة سجلات المعايير المنظمة والملاحظات ومخرجات التقييم.", icon: "file-json-2" },
        { name: "Git وGitHub Repositories", desc: "إدارة مشاريع التقييم والسكريبتات ومجموعات البيانات والتقارير بإصدارات محفوظة.", icon: "github" }
    ],
    soft: [
        { name: "حل المشكلات", desc: "إيجاد حلول فعالة للقضايا المعقدة.", icon: "lightbulb" },
        { name: "كتابة مبررات قوية (C1)", desc: "إنتاج مبررات دقيقة ومرتبطة بالأدلة لدعم الأحكام المقارنة.", icon: "message-square" },
        { name: "العمل الجماعي", desc: "التعاون بفعالية في بيئات المجموعة.", icon: "users" },
        { name: "إدارة الوقت", desc: "تحديد أولويات المهام والالتزام بالمواعيد.", icon: "clock" },
        { name: "التكيف", desc: "التكيف بسرعة مع البيئات الجديدة.", icon: "refresh-cw" },
        { name: "الاهتمام بالتفاصيل", desc: "ضمان الدقة في كل سطر من الأكواد.", icon: "search" },
        { name: "التعلم المستمر", desc: "البقاء على اطلاع بأحدث اتجاهات التكنولوجيا.", icon: "book-open" }
    ],
    languages: [
        { name: "العربية", desc: "اللغة الأم", icon: "star" },
        { name: "الإنجليزية", desc: "C1 متقدم / بطلاقة", icon: "check-circle" }
    ]
};

// --- DOM Elements ---
const langToggle = document.getElementById('lang-toggle');
const themeToggle = document.getElementById('theme-toggle');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navbar = document.querySelector('.navbar');
const typingElement = document.getElementById('typing-text');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const scrollTopBtn = document.getElementById('scroll-top');
const skillsContainer = document.getElementById('skills-container');
const tabBtns = document.querySelectorAll('.tab-btn');

// ==================== CONTACT FORM - FormSubmit Method (Working) ====================
// This sends emails directly to alaamoabdo619@gmail.com using FormSubmit

if (contactForm) {
    // Set the form action dynamically to FormSubmit
    contactForm.action = 'https://formsubmit.co/alaamoabdo619@gmail.com';
    contactForm.method = 'POST';
    
    // Add required hidden fields if they don't exist
    if (!contactForm.querySelector('input[name="_subject"]')) {
        const subjectInput = document.createElement('input');
        subjectInput.type = 'hidden';
        subjectInput.name = '_subject';
        subjectInput.value = 'New message from Alaa Mohamed\'s Portfolio!';
        contactForm.appendChild(subjectInput);
    }
    
    if (!contactForm.querySelector('input[name="_captcha"]')) {
        const captchaInput = document.createElement('input');
        captchaInput.type = 'hidden';
        captchaInput.name = '_captcha';
        captchaInput.value = 'false';
        contactForm.appendChild(captchaInput);
    }
    
    if (!contactForm.querySelector('input[name="_template"]')) {
        const templateInput = document.createElement('input');
        templateInput.type = 'hidden';
        templateInput.name = '_template';
        templateInput.value = 'table';
        contactForm.appendChild(templateInput);
    }
    
    contactForm.addEventListener('submit', async function(e) {
        // Don't prevent default - let FormSubmit handle the submission
        // But we'll show a loading state
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        const loadingText = currentLang === 'en' ? 'Sending...' : 'جاري الإرسال...';
        
        submitBtn.textContent = loadingText;
        submitBtn.disabled = true;
        
        if (formStatus) {
            formStatus.style.color = '#f59e0b';
            formStatus.textContent = currentLang === 'en' ? 'Sending message...' : 'جاري إرسال الرسالة...';
            formStatus.style.display = 'block';
        }
        
        // The form will submit naturally to FormSubmit
        // FormSubmit will redirect to a success page
        // Note: You won't see the success message on the same page because of redirect
    });
}

// Helper functions for form validation (optional, kept for compatibility)
function showFormError(input, message) {
    input.classList.add('is-invalid');
    input.style.borderColor = '#ef4444';
    
    let errorDiv = input.parentElement.querySelector('.form-error-msg');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'form-error-msg';
        errorDiv.style.cssText = 'color: #ef4444; font-size: 0.75rem; margin-top: 0.25rem;';
        input.parentElement.appendChild(errorDiv);
    }
    errorDiv.textContent = message;
}

function clearFormError(input) {
    input.classList.remove('is-invalid');
    input.style.borderColor = '';
    const errorDiv = input.parentElement.querySelector('.form-error-msg');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function clearAllFormErrors() {
    document.querySelectorAll('.is-invalid').forEach(input => {
        input.classList.remove('is-invalid');
        input.style.borderColor = '';
    });
    document.querySelectorAll('.form-error-msg').forEach(error => {
        error.remove();
    });
}

function showFormNotification(type, message) {
    if (!formStatus) return;
    
    formStatus.textContent = message;
    formStatus.style.color = type === 'success' ? '#10b981' : '#ef4444';
    formStatus.style.display = 'block';
    
    setTimeout(() => {
        if (formStatus) {
            formStatus.textContent = '';
            formStatus.style.display = 'none';
        }
    }, 5000);
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Set initial theme
    applyTheme(currentTheme);
    
    // Set initial language
    applyLanguage(currentLang);
    
    // Render initial skills
    if (skillsContainer) {
        renderSkills('evaluation');
    }
    
    // Start typing animation if element exists
    if (typingElement) {
        startTypingAnimation();
    }
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Tab switching logic
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.getAttribute('data-tab');
                
                // Update active button
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Render skills with professional staggered animation
                if (skillsContainer) {
                    skillsContainer.innerHTML = '';
                    renderSkills(tab);
                }
            });
        });
    }
});

function renderSkills(category) {
    const data = currentLang === 'en' ? skillsData[category] : skillsArData[category];
    if (!skillsContainer) return;
    
    skillsContainer.innerHTML = '';
    
    // Add category description if it exists
    const descKey = `${category}Desc`;
    if (translations[currentLang][descKey]) {
        const descDiv = document.createElement('div');
        descDiv.className = 'skills-category-desc';
        descDiv.textContent = translations[currentLang][descKey];
        skillsContainer.appendChild(descDiv);
    }
    
    data.forEach((skill, index) => {
        const card = document.createElement('div');
        card.className = `skill-card ${category}-card ${category === 'languages' ? 'language-card' : ''}`;
        card.style.opacity = '0';
        
        let iconHtml = '';
        if (skill.icon.startsWith('http')) {
            iconHtml = `<img src="${skill.icon}" alt="${skill.name}">`;
        } else {
            iconHtml = `<i data-lucide="${skill.icon}"></i>`;
        }
        
        const showDesc = category === 'languages';
        
        card.innerHTML = `
            <div class="skill-icon-wrapper">
                ${iconHtml}
            </div>
            <h3>${skill.name}</h3>
            ${showDesc ? `<p>${skill.desc}</p>` : ''}
        `;
        
        setTimeout(() => {
            card.classList.add('animate-card');
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, index * 100);
        
        skillsContainer.appendChild(card);
    });
}

// --- Theme Logic ---
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
        localStorage.setItem('theme', currentTheme);
    });
}

function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    }
}

// --- Language Logic ---
if (langToggle) {
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        applyLanguage(currentLang);
        localStorage.setItem('lang', currentLang);
        
        // Restart typing animation with new language
        startTypingAnimation();
    });
}

function applyLanguage(lang) {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? 'AR' : 'EN';
    }
    
    // Update all elements with data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            if (key === 'aboutText2') {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    // Re-render skills to update language
    if (skillsContainer) {
        const activeTabBtn = document.querySelector('.tab-btn.active');
        if (activeTabBtn) {
            const activeTab = activeTabBtn.getAttribute('data-tab');
            renderSkills(activeTab);
        }
    }
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Update placeholders
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    if (nameInput && emailInput && messageInput) {
        if (lang === 'ar') {
            nameInput.placeholder = "اسمك";
            emailInput.placeholder = "بريدك الإلكتروني";
            messageInput.placeholder = "رسالتك";
        } else {
            nameInput.placeholder = "Your Name";
            emailInput.placeholder = "Your Email";
            messageInput.placeholder = "Your Message";
        }
    }
    
    // Update submit button text
    const submitBtn = document.querySelector('#contact-form button[type="submit"]');
    if (submitBtn) {
        submitBtn.textContent = translations[lang].btnSendMessage;
    }
}

// --- Typing Animation ---
let typingInterval;
function startTypingAnimation() {
    if (!typingElement) return;
    if (typingInterval) clearTimeout(typingInterval);
    
    const roles = translations[currentLang].typingRoles;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    
    function type() {
        if (!typingElement) return;
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }
        
        typingInterval = setTimeout(type, typeSpeed);
    }
    
    type();
}

// --- Navbar Logic ---
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Scroll Effects
window.addEventListener('scroll', () => {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    if (scrollTopBtn) {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
    
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') && item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
}

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- Intersection Observer for Animations ---
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const revealElements = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-zoom, .stagger-container, .info-card, .service-card, .project-card-v2, .skill-item'
    );
    
    revealElements.forEach(el => {
        observer.observe(el);
    });
}

// Initialize Lucide icons if available
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}