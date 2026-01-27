import { ContentData } from './types';

export const CONTENT: Record<'en' | 'ar', ContentData> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Experience",
      contact: "Contact",
      langLabel: "العربية"
    },
    hero: {
      title: "Gardenia for Environmental Consulting",
      subtitle: "Integrated solutions for a sustainable industrial future. Compliance, Efficiency, and Growth.",
      cta: "Explore Our Services"
    },
    about: {
      title: "About Gardenia",
      mainText: "Gardenia for Environmental Consulting is an Egyptian environmental consulting firm established in 2008, specializing in providing integrated environmental and scientific consulting solutions for industrial facilities, governmental entities, and development projects across Egypt and the region.",
      subText: "We support our clients in achieving full compliance with local and international environmental regulations while enhancing environmental performance. We rely on a team of certified experts with over 20 years of experience, supported by a track record with organizations like USAID, UNDP, GEF, and JICA.",
      visionTitle: "Our Vision",
      visionText: "To be a leading regional firm in environmental consulting and a trusted partner for achieving compliance and sustainable industrial development.",
      missionTitle: "Our Mission",
      missionText: "To provide integrated consulting solutions that help facilities achieve compliance, reduce impact, and transition toward cleaner development aligned with international standards."
    },
    values: {
      title: "Our Values",
      description: "Our values guide every aspect of our work and shape our relationships with clients.",
      items: [
        { title: "Compliance & Integrity", description: "Dedicated to full compliance with regulations while minimizing operational disruptions." },
        { title: "Practical Solutions", description: "Delivering implementable solutions tailored to each factory’s conditions." },
        { title: "Sustainability", description: "Environmental protection is an opportunity to enhance efficiency and reduce costs." },
        { title: "Quality & Accuracy", description: "Upholding the highest standards of scientific accuracy in all studies." },
        { title: "Long-Term Partnership", description: "Supporting clients from planning through ongoing operations." },
        { title: "Capacity Building", description: "Empowering industrial teams to ensure long-term performance." }
      ]
    },
    services: {
      title: "Our Services",
      description: "Integrated solutions designed to help industrial facilities achieve compliance and minimize risks.",
      items: [
        { title: "Environmental & Social Impact Assessment (ESIA)", description: " thorough assessments to evaluate potential effects, supporting regulatory approvals and legal compliance.", iconName: "FileText" },
        { title: "Environmental & Technical Files", description: "Preparing files for factories in industrial zones to ensure safe operation and obtain licenses.", iconName: "FolderOpen" },
        { title: "Solid & Hazardous Waste Management", description: "Integrated solutions including assessment, classification, recycling, and safe disposal.", iconName: "Trash2" },
        { title: "Carbon Footprint & CBAM Readiness", description: "Measurement, analysis, and reduction strategies to support export requirements for European markets.", iconName: "Globe" },
        { title: "Management Systems & ISO", description: "Implementing ISO 9001, ISO 14001, and ISO 45001 to enhance efficiency and compliance.", iconName: "Award" },
        { title: "Firefighting & Occupational Safety", description: "Designing and assessing safety systems to protect workers and satisfy insurance requirements.", iconName: "ShieldCheck" },
        { title: "Sustainability & Circular Economy", description: "Optimizing resource use and reducing waste to support responsible industrial growth.", iconName: "RefreshCcw" },
        { title: "Training & Capacity Building", description: "Specialized training programs for industrial teams on compliance, safety, and sustainability.", iconName: "Users" }
      ]
    },
    industries: {
      title: "Industries We Serve",
      items: [
        "Chemical Industries",
        "Food & Beverage Manufacturing",
        "Pharmaceuticals",
        "Cement & Building Materials",
        "Plastics & Packaging",
        "Energy & Utilities",
        "New Industrial Projects",
        "Governmental Bodies"
      ]
    },
    whyUs: {
      title: "Why Gardenia?",
      items: [
        "Over 20 years of environmental consulting experience",
        "Specialized team of certified experts",
        "Strong understanding of regulatory requirements",
        "Practical, implementable solutions",
        "Proven track record with international donors",
        "End-to-end support from planning to operation"
      ]
    },
    projects: {
      title: "Projects & Experience",
      description: "We have contributed to numerous projects locally and internationally in cooperation with global funding organizations.",
      items: [
        "POPs management projects",
        "Waste exchange & circular economy initiatives",
        "Waste-to-energy projects",
        "Environmental and social assessments",
        "Technical files for industrial facilities"
      ],
      approachTitle: "Our Approach",
      approachItems: [
        "Understanding each industrial activity",
        "Assessing environmental and operational risks",
        "Designing practical and sustainable solutions",
        "Collaborating as a true partner",
        "Ensuring long-term compliance"
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "We are ready to support your facility at every step toward environmental compliance.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      sendButton: "Send Message",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "How can we help?"
    },
    footer: {
      rights: "All rights reserved Gardenia Environmental Consulting © 2024",
      address: "Cairo, Egypt"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "خبراتنا",
      contact: "تواصل معنا",
      langLabel: "English"
    },
    hero: {
      title: "جاردينيا للاستشارات البيئية",
      subtitle: "حلول متكاملة لمستقبل صناعي مستدام. امتثال، كفاءة، ونمو.",
      cta: "استكشف خدماتنا"
    },
    about: {
      title: "من نحن",
      mainText: "جاردينيا للاستشارات البيئية هي شركة مصرية متخصصة في الاستشارات البيئية والعلمية، تأسست عام 2008، وتعمل على دعم المصانع والمنشآت الصناعية والجهات الحكومية لتحقيق الامتثال الكامل للتشريعات البيئية المحلية والدولية.",
      subText: "نعتمد على فريق من الخبراء والاستشاريين المعتمدين بخبرة تمتد لأكثر من 20 عاماً، مع سجل حافل من المشروعات المنفذة بالتعاون مع منظمات دولية مثل USAID و UNDP و GEF و JICA.",
      visionTitle: "رؤيتنا",
      visionText: "نسعى لأن نكون من الشركات الرائدة إقليمياً في مجال الاستشارات البيئية، والشريك الموثوق للمصانع في تحقيق الامتثال البيئي والتنمية الصناعية النظيفة.",
      missionTitle: "رسالتنا",
      missionText: "تقديم حلول واستشارات بيئية وعلمية متكاملة تساعد المصانع على الالتزام بالقوانين، وتقليل التأثيرات السلبية، ودعم التحول نحو الاستدامة."
    },
    values: {
      title: "قيمنا",
      description: "قيمنا هي الأساس الذي يُبنى عليه كل عملنا وعلاقاتنا بعملائنا.",
      items: [
        { title: "الالتزام والامتثال", description: "نلتزم بتطبيق القوانين البيئية بدقة ونساعد عملاءنا على تحقيق الامتثال الكامل." },
        { title: "الحلول العملية", description: "نقدم حلول بيئية عملية قابلة للتطبيق مع مراعاة طبيعة نشاط كل مصنع." },
        { title: "الاستدامة", description: "نؤمن أن حماية البيئة فرصة لتحسين الكفاءة التشغيلية وتقليل التكاليف." },
        { title: "الجودة والدقة", description: "نحرص على أعلى معايير الجودة والدقة العلمية في كل دراسة وتقرير." },
        { title: "الشراكة طويلة المدى", description: "لسنا مجرد استشاري، بل شريك استراتيجي يدعم العميل من التخطيط حتى التشغيل." },
        { title: "بناء القدرات", description: "نهتم بتدريب وتأهيل فرق العمل الصناعية لضمان استمرارية الأنظمة." }
      ]
    },
    services: {
      title: "خدماتنا",
      description: "نقدم حلول واستشارات بيئية متكاملة تساعد المصانع والمنشآت على الامتثال البيئي وتقليل المخاطر.",
      items: [
        { title: "تقييم الأثر البيئي والاجتماعي (ESIA)", description: "إعداد دراسات لضمان توافق المشروع مع القوانين والحصول على الموافقات اللازمة.", iconName: "FileText" },
        { title: "الملفات البيئية والفنية", description: "إعداد وتحديث الملفات البيئية للمصانع وفقاً لاشتراطات الجهات الرقابية.", iconName: "FolderOpen" },
        { title: "إدارة المخلفات الصلبة والخطرة", description: "أنظمة فعالة تشمل الجمع والفرز والتخلص الآمن وتقليل التكاليف التشغيلية.", iconName: "Trash2" },
        { title: "البصمة الكربونية و CBAM", description: "قياس وتحليل البصمة الكربونية وخطط خفض الانبعاثات للاستعداد للتصدير.", iconName: "Globe" },
        { title: "أنظمة الجودة والإدارة (ISO)", description: "تطبيق أنظمة ISO 9001, 14001, 45001 لتحسين الكفاءة وتقليل المخاطر.", iconName: "Award" },
        { title: "السلامة المهنية ومكافحة الحريق", description: "تصميم ومراجعة أنظمة مكافحة الحريق وخطط السلامة والصحة المهنية.", iconName: "ShieldCheck" },
        { title: "استشارات الاستدامة والاقتصاد الدائري", description: "تحسين استخدام الموارد وتقليل الهدر لدعم التشغيل المستدام.", iconName: "RefreshCcw" },
        { title: "تدريب وتأهيل الكوادر", description: "برامج تدريب متخصصة للعاملين تشمل الجوانب البيئية والسلامة وأنظمة الجودة.", iconName: "Users" }
      ]
    },
    industries: {
      title: "القطاعات التي نخدمها",
      items: [
        "الصناعات الكيماوية",
        "الصناعات الغذائية",
        "الصناعات الدوائية",
        "الأسمنت ومواد البناء",
        "البلاستيك والتعبئة والتغليف",
        "الطاقة والمرافق",
        "المشروعات الصناعية الجديدة",
        "الجهات الحكومية"
      ]
    },
    whyUs: {
      title: "لماذا جاردينيا؟",
      items: [
        "أكثر من 20 عاماً من الخبرة",
        "فريق متخصص من خبراء معتمدين",
        "فهم قوي للاشتراطات القانونية",
        "حلول تطبيقية وليست مجرد تقارير",
        "سجل مشروعات مع جهات دولية",
        "دعم كامل من التخطيط حتى التشغيل"
      ]
    },
    projects: {
      title: "خبراتنا ومشروعاتنا",
      description: "شاركت جاردينيا في تنفيذ وإدارة عدد كبير من المشروعات البيئية بالتعاون مع جهات تمويل دولية.",
      items: [
        "مشروعات إدارة الملوثات العضوية الثابتة",
        "مبادرات الاقتصاد الدائري",
        "مشروعات تحويل المخلفات إلى طاقة",
        "التقييمات البيئية والاجتماعية",
        "إعداد الملفات البيئية والفنية"
      ],
      approachTitle: "منهجيتنا",
      approachItems: [
        "فهم طبيعة كل نشاط صناعي",
        "تحليل المخاطر البيئية والتشغيلية",
        "تصميم حلول عملية ومستدامة",
        "شراكة حقيقية لدعم الصناعة",
        "ضمان الامتثال طويل المدى"
      ]
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "نحن هنا لدعم مصنعك في كل خطوة نحو الامتثال البيئي والاستدامة.",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      sendButton: "إرسال الرسالة",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formMessage: "كيف يمكننا مساعدتك؟"
    },
    footer: {
      rights: "جميع الحقوق محفوظة جاردينيا للاستشارات البيئية © 2024",
      address: "القاهرة، مصر"
    }
  }
};