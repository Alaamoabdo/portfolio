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
        expTitle: "My Cloud & DevOps Journey",
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
        heroSummary: "Automating cloud infrastructure & DevOps workflows — faster, more reliable deployments with AWS, Terraform, Docker & Kubernetes.",
        btnViewProjects: "View My Focus",
        btnDownloadCV: "Download CV",
        btnDownloadCVText: "Download CV",
        navContactBtn: "Contact Me",
        aboutTitle: "About Me",
        aboutText1: "I’m a Junior Cloud & DevOps Engineer based in Egypt, currently training with the Digital Egypt Pioneers Initiative while completing my engineering degree. I help startups and small businesses make their application deployments more reliable, consistent, and easier to manage.",
        aboutText2: "I provision AWS infrastructure with Terraform, configure and deploy applications with Ansible, containerize workloads with Docker and Kubernetes, and build CI/CD pipelines with Jenkins and Git.",
        aboutText3: "What makes me different is my problem-solving approach. I don’t just follow a fixed process — I break problems down, find the root cause, and build practical, automated, and repeatable solutions.",
        aboutText4: "I also value clear communication and documentation, so technical solutions are easier for clients to understand and manage.",
        aboutText5: "My goal is to reduce repetitive manual work and help businesses build more consistent deployment processes while I continue growing through hands-on Cloud & DevOps projects.",
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
        tabFrontend: "CLOUD & INFRASTRUCTURE",
        tabBackend: "AUTOMATION & IaC",
        tabSoft: "SOFT SKILLS",
        tabTools: "CONTAINERS & CI/CD",
        tabLanguages: "LANGUAGES",
        frontendDesc: "Provisioning and managing AWS cloud infrastructure with Terraform and Infrastructure as Code practices.",
        backendDesc: "Automating infrastructure configuration and application deployments with Ansible to make workflows repeatable and consistent.",
        toolsDesc: "Containerizing workloads with Docker and Kubernetes, building CI/CD pipelines with Jenkins, and managing code with Git.",
        skillsTitle: "My Skills",
        servicesTitle: "Services",
        service1Title: "Cloud Infrastructure Management",
        service1Desc: "Deploying and managing AWS infrastructure with reliability, scalability, and cost awareness in mind.",
        service1Feature1: "AWS resource provisioning",
        service1Feature2: "Infrastructure as Code with Terraform",
        service1Feature3: "Monitoring and scalability planning",
        service2Title: "DevOps Automation & CI/CD",
        service2Desc: "Building automated pipelines and configuration workflows to make deployments more predictable and repeatable.",
        service2Feature1: "Jenkins CI/CD pipeline setup",
        service2Feature2: "Ansible configuration management",
        service2Feature3: "Docker and Kubernetes deployment",
        service3Title: "Computer Networking",
        service3Desc: "Configuring cloud networking and access controls so environments stay connected, secure, and easier to troubleshoot.",
        service3Feature1: "VPC, subnet, and security group design",
        service3Feature2: "IAM and role-based access control",
        service3Feature3: "Connectivity troubleshooting",
        service4Title: "IT Consulting",
        service4Desc: "Helping teams assess their infrastructure, troubleshoot issues, and plan a practical cloud roadmap.",
        service4Feature1: "Infrastructure assessment",
        service4Feature2: "Troubleshooting and problem solving",
        service4Feature3: "Cloud and DevOps strategy planning",
        btnDiscussProject: "View Pricing Plans",
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
        pricingTitle: "Pricing Plans | Alaa Mohamed",
        pricingSubtitle: "Pricing Plans",
        pricingDesc: "Practical cloud infrastructure, deployment automation, networking, and IT consulting for your project.",
        pricingBadge: "PRICING PLANS",
        pricingBanner: "Choose a starting package, then contact me to discuss the project scope and final quote.",
        planStarter: "STARTER",
        planBalance: "STANDARD",
        planProfessional: "PREMIUM",
        planCustom: "ENTERPRISE",
        planBasicTitle: "Basic",
        planBalanceTitle: "Pro",
        planProTitle: "Premium",
        planTalkTitle: "Custom",
        planBasicDesc: "A straightforward starting point for a small cloud setup.",
        planBalanceDesc: "Automate a practical application deployment workflow.",
        planProDesc: "A broader cloud and delivery setup for a growing application.",
        planTalkDesc: "Tailored cloud and DevOps solutions for projects with specific requirements.",
        starterFeature1: "Basic AWS resource setup",
        starterFeature2: "Simple Terraform configuration",
        starterFeature3: "One deployment workflow",
        starterFeature4: "Up to 2 revisions",
        starterFeature5: "Email support",
        proFeature1: "Custom Terraform infrastructure",
        proFeature2: "Ansible configuration automation",
        proFeature3: "Jenkins CI/CD pipeline setup",
        proFeature4: "Up to 4 revisions",
        proFeature5: "Priority support",
        premiumFeature1: "AWS infrastructure and networking setup",
        premiumFeature2: "CI/CD pipeline and deployment automation",
        premiumFeature3: "Docker and Kubernetes deployment support",
        premiumFeature4: "Monitoring and scalability planning",
        premiumFeature5: "Post-delivery support",
        customFeature1: "Custom cloud architecture",
        customFeature2: "Infrastructure and CI/CD integration",
        customFeature3: "Networking and access-control planning",
        customFeature4: "Ongoing support options",
        customFeature5: "Scope tailored to your needs",
        pricingPopularBadge: "MOST POPULAR",
        priceConsulting: "Let's Talk",
        btnGetStarted: "Get Started",
        btnContactMe: "CONTACT ME",
        backToPortfolio: "Back to Portfolio"
    },
    ar: {
        navHome: "الرئيسية",
        navAbout: "من أنا",
        navEducation: "التعليم",
        navSkills: "مهاراتي",
        navExperience: "الخبرة",
        expTitle: "رحلتي في الحوسبة السحابية وDevOps",
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
        heroSummary: "أؤتمت البنية التحتية السحابية وسير عمل DevOps لنشر أسرع وأكثر موثوقية باستخدام AWS وTerraform وDocker وKubernetes.",
        btnViewProjects: "عرض أعمالي",
        btnDownloadCV: "تحميل السيرة الذاتية",
        btnDownloadCVText: "تحميل CV",
        navContactBtn: "تواصل معي",
        aboutTitle: "من أنا",
        aboutText1: "أنا مهندسة مبتدئة في مجال الحوسبة السحابية وDevOps، أعيش في مصر وأتدرب حالياً ضمن مبادرة رواد مصر الرقمية بالتزامن مع إتمام دراستي الهندسية. أساعد الشركات الناشئة والصغيرة على جعل نشر تطبيقاتها أكثر موثوقية واتساقاً وسهولة في الإدارة.",
        aboutText2: "أجهز البنية التحتية على AWS باستخدام Terraform، وأضبط التطبيقات وأنشرها باستخدام Ansible، وأحوّل أعباء العمل إلى حاويات باستخدام Docker وKubernetes، وأبني مسارات CI/CD باستخدام Jenkins وGit.",
        aboutText3: "ما يميزني هو أسلوبي في حل المشكلات. لا أتبع خطوات ثابتة فحسب، بل أقسم المشكلة وأبحث عن سببها الجذري وأبني حلولاً عملية ومؤتمتة وقابلة للتكرار.",
        aboutText4: "أقدّر أيضاً التواصل الواضح والتوثيق، حتى تكون الحلول التقنية أسهل على العملاء في الفهم والإدارة.",
        aboutText5: "هدفي هو تقليل العمل اليدوي المتكرر ومساعدة الشركات على بناء عمليات نشر أكثر اتساقاً، مع مواصلة التطور من خلال مشاريع عملية في الحوسبة السحابية وDevOps.",
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
        tabFrontend: "السحابة والبنية التحتية",
        tabBackend: "الأتمتة وIaC",
        tabSoft: "المهارات الشخصية",
        tabTools: "الحاويات وCI/CD",
        tabLanguages: "اللغات",
        frontendDesc: "تجهيز وإدارة البنية التحتية السحابية على AWS باستخدام Terraform وممارسات البنية التحتية ككود.",
        backendDesc: "أتمتة إعداد البنية التحتية ونشر التطبيقات باستخدام Ansible لبناء عمليات متسقة وقابلة للتكرار.",
        toolsDesc: "تحويل أعباء العمل إلى حاويات باستخدام Docker وKubernetes، وبناء مسارات CI/CD باستخدام Jenkins، وإدارة الكود باستخدام Git.",
        skillsTitle: "مهاراتي",
        servicesTitle: "خدماتي",
        service1Title: "إدارة البنية التحتية السحابية",
        service1Desc: "تجهيز وإدارة بنية AWS التحتية مع مراعاة الاعتمادية وقابلية التوسع والتكلفة.",
        service1Feature1: "تجهيز موارد AWS",
        service1Feature2: "البنية التحتية ككود باستخدام Terraform",
        service1Feature3: "التخطيط للمراقبة وقابلية التوسع",
        service2Title: "أتمتة DevOps وCI/CD",
        service2Desc: "بناء مسارات آلية وسير عمل للإعداد تجعل عمليات النشر أكثر قابلية للتوقع والتكرار.",
        service2Feature1: "إعداد مسارات Jenkins CI/CD",
        service2Feature2: "إدارة الإعدادات باستخدام Ansible",
        service2Feature3: "النشر باستخدام Docker وKubernetes",
        service3Title: "شبكات الحاسوب",
        service3Desc: "إعداد الشبكات السحابية والتحكم في الوصول لضمان اتصال البيئات وأمانها وسهولة استكشاف أخطائها.",
        service3Feature1: "تصميم VPC والشبكات الفرعية ومجموعات الأمان",
        service3Feature2: "IAM والتحكم في الوصول حسب الأدوار",
        service3Feature3: "استكشاف مشكلات الاتصال وإصلاحها",
        service4Title: "استشارات تقنية المعلومات",
        service4Desc: "مساعدة الفرق على تقييم بنيتها التحتية واستكشاف المشكلات ووضع خارطة طريق عملية للسحابة.",
        service4Feature1: "تقييم البنية التحتية",
        service4Feature2: "استكشاف المشكلات وحلها",
        service4Feature3: "التخطيط لاستراتيجية السحابة وDevOps",
        btnDiscussProject: "عرض خطط الأسعار",
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
        pricingTitle: "خطط الأسعار | علاء محمد",
        pricingSubtitle: "خطط الأسعار",
        pricingDesc: "بنية تحتية سحابية عملية، وأتمتة للنشر، وشبكات، واستشارات تقنية لمشروعك.",
        pricingBadge: "خطط الأسعار",
        pricingBanner: "اختر الباقة المناسبة كبداية، ثم تواصل معي لمناقشة نطاق المشروع والسعر النهائي.",
        planStarter: "مبتدئة",
        planBalance: "قياسية",
        planProfessional: "مميزة",
        planCustom: "للشركات",
        planBasicTitle: "أساسية",
        planBalanceTitle: "احترافية",
        planProTitle: "متقدمة",
        planTalkTitle: "مخصصة",
        planBasicDesc: "نقطة بداية بسيطة لإعداد سحابي صغير.",
        planBalanceDesc: "أتمتة عملية لسير عمل نشر التطبيقات.",
        planProDesc: "إعداد سحابي وتسليم أوسع لتطبيق متنامٍ.",
        planTalkDesc: "حلول سحابية وDevOps مصممة للمشاريع ذات المتطلبات الخاصة.",
        starterFeature1: "إعداد موارد AWS الأساسية",
        starterFeature2: "إعداد Terraform بسيط",
        starterFeature3: "سير عمل نشر واحد",
        starterFeature4: "حتى تعديلين",
        starterFeature5: "دعم عبر البريد الإلكتروني",
        proFeature1: "بنية تحتية مخصصة باستخدام Terraform",
        proFeature2: "أتمتة الإعداد باستخدام Ansible",
        proFeature3: "إعداد مسار Jenkins CI/CD",
        proFeature4: "حتى 4 تعديلات",
        proFeature5: "دعم بأولوية",
        premiumFeature1: "إعداد بنية AWS والشبكات",
        premiumFeature2: "أتمتة مسارات CI/CD والنشر",
        premiumFeature3: "دعم النشر باستخدام Docker وKubernetes",
        premiumFeature4: "التخطيط للمراقبة وقابلية التوسع",
        premiumFeature5: "دعم بعد التسليم",
        customFeature1: "تصميم بنية سحابية مخصصة",
        customFeature2: "دمج البنية التحتية مع CI/CD",
        customFeature3: "التخطيط للشبكات والتحكم في الوصول",
        customFeature4: "خيارات دعم مستمر",
        customFeature5: "نطاق عمل يناسب احتياجاتك",
        pricingPopularBadge: "الأكثر طلباً",
        priceConsulting: "لنتحدث",
        btnGetStarted: "ابدأ الآن",
        btnContactMe: "CONTACT ME",
        backToPortfolio: "العودة للمعرض"
    }
};

// --- State Management ---
let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';

// --- Skills Data ---
const skillsData = {
    evaluation: [
        { name: "AWS Cloud", desc: "Provision and manage cloud infrastructure on AWS.", icon: "cloud" },
        { name: "Cloud Infrastructure", desc: "Build reliable, consistent infrastructure for application deployments.", icon: "server" },
        { name: "Terraform", desc: "Define and provision infrastructure using Infrastructure as Code.", icon: "blocks" },
        { name: "Infrastructure as Code (IaC)", desc: "Keep infrastructure definitions repeatable and easier to manage.", icon: "file-code-2" }
    ],
    prompting: [
        { name: "Ansible", desc: "Configure systems and automate application deployment workflows.", icon: "settings-2" },
        { name: "Configuration Management", desc: "Apply consistent configuration across deployment environments.", icon: "list-checks" },
        { name: "Deployment Automation", desc: "Reduce repetitive manual steps in application deployment.", icon: "workflow" },
        { name: "Repeatable Workflows", desc: "Create practical automation that can be reused reliably.", icon: "refresh-cw" }
    ],
    tools: [
        { name: "Docker", desc: "Package applications and workloads in containers.", icon: "container" },
        { name: "Kubernetes", desc: "Work with container orchestration for deployed workloads.", icon: "boxes" },
        { name: "Jenkins CI/CD", desc: "Build continuous integration and deployment pipelines.", icon: "git-branch" },
        { name: "CI/CD Pipelines", desc: "Automate and standardize software delivery workflows.", icon: "workflow" },
        { name: "Git & GitHub", desc: "Track changes and manage code with version control.", icon: "github" }
    ],
    soft: [
        { name: "Problem Solving", desc: "Finding efficient solutions to complex issues.", icon: "lightbulb" },
        { name: "Root-Cause Analysis", desc: "Break down technical problems and identify their underlying causes.", icon: "search" },
        { name: "Clear Communication", desc: "Explain technical solutions clearly to clients and teammates.", icon: "message-square" },
        { name: "Technical Documentation", desc: "Document solutions so they are easier to understand and maintain.", icon: "file-text" },
        { name: "Teamwork", desc: "Collaborate effectively with clients and teammates.", icon: "users" },
        { name: "Time Management", desc: "Prioritizing tasks and meeting deadlines.", icon: "clock" },
        { name: "Adaptability", desc: "Adjust quickly to changing project needs and environments.", icon: "refresh-cw" },
        { name: "Continuous Learning", desc: "Keep developing skills through hands-on cloud and DevOps projects.", icon: "book-open" }
    ],
    languages: [
        { name: "Arabic", desc: "Native", icon: "star" },
        { name: "English", desc: "C1 Advanced / Fluent", icon: "check-circle" }
    ]
};

const skillsArData = {
    evaluation: [
        { name: "سحابة AWS", desc: "تجهيز وإدارة البنية التحتية السحابية على AWS.", icon: "cloud" },
        { name: "البنية التحتية السحابية", desc: "بناء بنية تحتية موثوقة ومتسقة لنشر التطبيقات.", icon: "server" },
        { name: "Terraform", desc: "تعريف وتجهيز البنية التحتية باستخدام مفهوم البنية التحتية ككود.", icon: "blocks" },
        { name: "البنية التحتية ككود (IaC)", desc: "جعل تعريفات البنية التحتية قابلة للتكرار وأسهل في الإدارة.", icon: "file-code-2" }
    ],
    prompting: [
        { name: "Ansible", desc: "إعداد الأنظمة وأتمتة سير عمل نشر التطبيقات.", icon: "settings-2" },
        { name: "إدارة الإعدادات", desc: "تطبيق إعدادات متسقة عبر بيئات النشر.", icon: "list-checks" },
        { name: "أتمتة النشر", desc: "تقليل الخطوات اليدوية المتكررة في نشر التطبيقات.", icon: "workflow" },
        { name: "سير عمل قابل للتكرار", desc: "إنشاء أتمتة عملية يمكن إعادة استخدامها بموثوقية.", icon: "refresh-cw" }
    ],
    tools: [
        { name: "Docker", desc: "تغليف التطبيقات وأعباء العمل داخل حاويات.", icon: "container" },
        { name: "Kubernetes", desc: "العمل مع تنسيق الحاويات لأعباء العمل المنشورة.", icon: "boxes" },
        { name: "Jenkins CI/CD", desc: "بناء مسارات التكامل والنشر المستمر.", icon: "git-branch" },
        { name: "مسارات CI/CD", desc: "أتمتة وتوحيد سير عمل تسليم البرمجيات.", icon: "workflow" },
        { name: "Git وGitHub", desc: "تتبع التغييرات وإدارة الكود باستخدام التحكم بالإصدارات.", icon: "github" }
    ],
    soft: [
        { name: "حل المشكلات", desc: "إيجاد حلول فعالة للقضايا المعقدة.", icon: "lightbulb" },
        { name: "تحليل السبب الجذري", desc: "تحليل المشكلات التقنية وتحديد أسبابها الأساسية.", icon: "search" },
        { name: "التواصل الواضح", desc: "شرح الحلول التقنية بوضوح للعملاء وأعضاء الفريق.", icon: "message-square" },
        { name: "التوثيق التقني", desc: "توثيق الحلول لتسهيل فهمها وصيانتها.", icon: "file-text" },
        { name: "العمل الجماعي", desc: "التعاون بفاعلية مع العملاء وأعضاء الفريق.", icon: "users" },
        { name: "إدارة الوقت", desc: "تحديد أولويات المهام والالتزام بالمواعيد.", icon: "clock" },
        { name: "القدرة على التكيف", desc: "التكيف مع احتياجات المشاريع وبيئات العمل المتغيرة.", icon: "refresh-cw" },
        { name: "التعلم المستمر", desc: "تطوير المهارات من خلال مشاريع عملية في السحابة وDevOps.", icon: "book-open" }
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