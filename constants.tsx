import { ContentData } from './types';

export const CONTENT: Record<'en' | 'ar', ContentData> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Experience",
      partners: "Partners",
      contact: "Contact",
      langLabel: "العربية"
    },
    hero: {
      title: "Environmental consulting for compliance & sustainability",
      subtitle: "Since 2008 Gardenia has provided tailored environmental services for factories and agencies — impact assessments, waste & carbon reporting (CBAM), and ISO management systems.",
      cta: "Explore Our Services"
    },
    about: {
      title: "About Gardenia",
      mainText: "Expert environmental and scientific consulting solutions for sustainable industrial development since 2008.",
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
        { title: "Compliance & Integrity", description: "Dedicated to full compliance with regulations while minimizing operational disruptions.", iconName: "Compliance" },
        { title: "Practical Solutions", description: "Delivering implementable solutions tailored to each factory’s conditions.", iconName: "Practical" },
        { title: "Sustainability", description: "Environmental protection is an opportunity to enhance efficiency and reduce costs.", iconName: "Sustainability" },
        { title: "Quality & Accuracy", description: "Upholding the highest standards of scientific accuracy in all studies.", iconName: "Quality" },
        { title: "Long-Term Partnership", description: "Supporting clients from planning through ongoing operations.", iconName: "Partnership" },
        { title: "Capacity Building", description: "Empowering industrial teams to ensure long-term performance.", iconName: "Training" }
      ]
    },
    services: {
      title: "Our Services",
      description: "Integrated solutions designed to help industrial facilities achieve compliance and minimize risks.",
      items: [
        { title: "Environmental & Social Impact Assessment (ESIA)", description: " thorough assessments to evaluate potential effects, supporting regulatory approvals and legal compliance.", iconName: "FileText" },
        { title: "Environmental & Technical Files", description: "Preparing files for factories in industrial zones to ensure safe operation and obtain licenses.", iconName: "FolderOpen", details: { en: "Prepare and update environmental and technical files required by industrial authorities to secure permits and ensure compliant operations.", ar: "إعداد وتحديث الملفات البيئية والفنية المطلوبة من الجهات الرقابية لضمان استيفاء شروط التشغيل والحصول على التراخيص." } },
        { title: "Solid & Hazardous Waste Management", description: "Integrated solutions including assessment, classification, recycling, and safe disposal.", iconName: "Trash2", details: { en: "Design and implement waste management systems covering segregation, safe storage, recycling opportunities, and compliant disposal routes for hazardous and non-hazardous wastes.", ar: "تصميم وتنفيذ نظم إدارة المخلفات تشمل الجمع والفرز والتخزين الآمن وإعادة التدوير أو التخلص الآمن للمخلفات الصلبة والخطرة." } },
        { title: "Carbon Footprint & CBAM Readiness", description: "Measurement, analysis, and reduction strategies to support export requirements for European markets.", iconName: "Globe", details: { en: "Measure organizational and product carbon footprints, prepare CBAM readiness plans and reduction strategies to support export compliance to EU markets.", ar: "قياس وتحليل البصمة الكربونية للمنشأة والمنتج، وإعداد خطط الاستعداد لـ CBAM وبرامج خفض الانبعاثات لتسهيل امتثال متطلبات التصدير." } },
        { title: "Management Systems & ISO", description: "Implementing ISO 9001, ISO 14001, and ISO 45001 to enhance efficiency and compliance.", iconName: "Award", details: { en: "Design and implement management systems (ISO 9001, ISO 14001, ISO 45001) with processes, documentation and training for certification and continuous improvement.", ar: "تحديد وتصميم أنظمة إدارية (ISO 9001, ISO 14001, ISO 45001) مع توثيق وإجراءات وتدريب للحصول على الاعتماد وتحسين الأداء المستمر." } },
        { title: "Firefighting & Occupational Safety", description: "Designing and assessing safety systems to protect workers and satisfy insurance requirements.", iconName: "ShieldCheck", details: { en: "Assessment, design and testing of fire fighting and alarm systems, HSE planning and boiler inspections to secure safe operations and regulatory compliance.", ar: "تقييم وتصميم واختبار أنظمة مكافحة الحريق والإنذار، وإعداد خطط السلامة والصحة المهنية وفحص الغلايات لضمان بيئة عمل آمنة ومتوافقة." } },
        { title: "Sustainability & Circular Economy", description: "Optimizing resource use and reducing waste to support responsible industrial growth.", iconName: "RefreshCcw", details: { en: "Advise on circular economy strategies, resource optimization and waste valorization to reduce costs and environmental impact.", ar: "وضع استراتيجيات الاقتصاد الدائري وتحسين استخدام الموارد وتحويل المخلفات إلى موارد اقتصادية لتقليل التكاليف والتأثير البيئي." } },
        { title: "Training & Capacity Building", description: "Specialized training programs for industrial teams on compliance, safety, and sustainability.", iconName: "Users", details: { en: "Tailored training for staff and technical teams on compliance, pollution control, carbon reporting and management systems to ensure effective implementation.", ar: "برامج تدريب مخصصة للعاملين والفرق الفنية حول الامتثال، ومكافحة التلوث، وتقارير البصمة الكربونية، وأنظمة الإدارة لضمان تطبيق فعّال." } }
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
      address: "Compound Ashgar Darna - Building A5 - 1st Floor - Maadi - Cairo"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "خبراتنا",
      partners: "شركاء",
      contact: "تواصل معنا",
      langLabel: "English"
    },
    hero: {
      title: "استشارات بيئية للامتثال والاستدامة",
      subtitle: "جاردينيا تقدم منذ عام 2008 خدمات مخصصة للمصانع والمنشآت الصناعية والجهات الحكومية تشمل تقييم الأثر البيئي، إدارة المخلفات، تقارير البصمة الكربونية و CBAM، وأنظمة الإدارة والجودة ISO — بمنهج عملي وتقارير دقيقة قابلة للاعتماد.",
      cta: "اطلب استشارة"
    },
    about: {
      title: "من نحن",
      mainText: "شريك استشاري بيئي يدعم القرار الصناعي. Gardenia for Environmental & Scientific Consulting تعمل مع المصانع والمنشآت الصناعية والجهات الحكومية لتقديم حلول تدعم الالتزام البيئي، تحسين الأداء، وتعزيز الاستدامة.",
      subText: "منذ عام 2008، تعمل جاردينيا كشريك استشاري موثوق في تنفيذ مشروعات بيئية مع المصانع والجهات الحكومية، معتمدة على نهج تشاركي يركز على الحلول العملية، نقل المعرفة، وتطبيق أفضل الممارسات الدولية لتحقيق التزام بيئي واستدامة حقيقية.",
      visionTitle: "رؤيتنا",
      visionText: "نسعى لأن نكون من الشركات الرائدة إقليمياً في مجال الاستشارات البيئية، والشريك الموثوق للمصانع في تحقيق الامتثال البيئي والتنمية الصناعية النظيفة.",
      missionTitle: "رسالتنا",
      missionText: "تقديم حلول واستشارات بيئية وعلمية متكاملة تساعد المصانع على الالتزام بالقوانين، وتقليل التأثيرات السلبية، ودعم التحول نحو الاستدامة.",
      methodologyTitle: "منهجية العمل",
      methodologyText: "نعتمد في Gardenia على منهجية منظمة وواضحة كدراسة وضع المنشأة وفهم نشاطها وتحديد المتطلبات والفجوات البيئية والتنظيمية ونضع حلول عملية تتناسب مع الإمكانيات التشغيلية مع إعداد تقارير دقيقة وقابلة للاعتماد وتوفير المتابعة والدعم الفني عند الحاجة. هدفنا هو تحقيق التزام فعال دون التأثير السلبي على سير العمل."
    },
    values: {
      title: "قيمنا",
      description: "قيمنا هي الأساس الذي يُبنى عليه كل عملنا وعلاقاتنا بعملائنا.",
      items: [
        { title: "الالتزام والامتثال", description: "نلتزم بتطبيق القوانين البيئية بدقة ونساعد عملاءنا على تحقيق الامتثال الكامل.", iconName: "Compliance" },
        { title: "الحلول العملية", description: "نقدم حلول بيئية عملية قابلة للتطبيق مع مراعاة طبيعة نشاط كل مصنع.", iconName: "Practical" },
        { title: "الاستدامة", description: "نؤمن أن حماية البيئة فرصة لتحسين الكفاءة التشغيلية وتقليل التكاليف.", iconName: "Sustainability" },
        { title: "الجودة والدقة", description: "نحرص على أعلى معايير الجودة والدقة العلمية في كل دراسة وتقرير.", iconName: "Quality" },
        { title: "الشراكة طويلة المدى", description: "لسنا مجرد استشاري، بل شريك استراتيجي يدعم العميل من التخطيط حتى التشغيل.", iconName: "Partnership" },
        { title: "بناء القدرات", description: "نهتم بتدريب وتأهيل فرق العمل الصناعية لضمان استمرارية الأنظمة.", iconName: "Training" }
      ]
    },
    services: {
      title: "خدماتنا",
      description: "خدمات مخصصة للمصانع والمنشآت الصناعية والجهات الحكومية — دراسات، ملفات، إدارة مخلفات، البصمة الكربونية، أنظمة إدارة وجودة، والسلامة والمكافحة.",
      items: [
        { title: "دراسات تقييم الأثر البيئي والاجتماعي (ESIA)", description: "إعداد دراسات تقييم الأثر البيئي والاجتماعي للمشروعات الصناعية والتنموية، بما يضمن توافق المشروع مع القوانين والاشتراطات البيئية المحلية والدولية، ويساعد في الحصول على الموافقات اللازمة قبل الإنشاء أو التشغيل أو التوسعات.", iconName: "FileText" },
        { title: "إعداد الملفات البيئية والفنية للمشروعات الصناعية", description: "خدمات إعداد وتحديث الملفات البيئية والفنية للمصانع داخل المناطق الصناعية وفقاً لاشتراطات الجهات الرقابية للحصول على التراخيص والموافقات المطلوبة.", iconName: "FolderOpen" },
        { title: "إدارة المخلفات الصلبة والخطرة", description: "وضع وتنفيذ أنظمة فعالة لإدارة المخلفات الصلبة والخطرة، تشمل الجمع والفرز والتخزين الآمن وإعادة التدوير أو التخلص الآمن، مع دراسات متكاملة لمحطات المعالجة والنقل والتخزين.", iconName: "Trash2" },
        { title: "حساب البصمة الكربونية والاستعداد لـ CBAM", description: "قياس وتحليل البصمة الكربونية للمنشآت والمنتج، إعداد تقارير الاستدامة ووضع خطط لخفض الانبعاثات ومساعدة المصانع على الاستعداد لمتطلبات CBAM وتسويق منتجاتهم للاتحاد الأوروبي.", iconName: "Globe" },
        { title: "تطبيق أنظمة الجودة والإدارة (ISO 9001 – ISO 14001 – ISO 45001)", description: "تصميم وتطبيق نظم الإدارة لتحسين الكفاءة وتقليل المخاطر وضمان الامتثال والمتابعة المستمرة لتحقيق نتائج قابلة للاعتماد.", iconName: "Award" },
        { title: "أنظمة السلامة المهنية ومكافحة الحريق", description: "تصميم ومراجعة وتنفيذ أنظمة مكافحة الحريق والإنذار، بالإضافة إلى إعداد خطط السلامة والصحة المهنية وفحص الغلايات.", iconName: "ShieldCheck" },
        { title: "استشارات الاستدامة والاقتصاد الدائري", description: "وضع استراتيجيات للحد من الهدر، إعادة الاستخدام، وتحويل المخلفات إلى موارد اقتصادية ضمن إطار الاقتصاد الدائري.", iconName: "RefreshCcw" },
        { title: "برامج تدريب وتأهيل للكوادر الصناعية", description: "برامج تدريب متخصصة للعاملين والإدارات الفنية داخل المصانع تشمل الجوانب البيئية، إدارة المخلفات، أنظمة الجودة، السلامة المهنية، والبصمة الكربونية.", iconName: "Users" }
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
      description: "نماذج لبعض المشاريع التي شاركت فيها جاردينيا للاستشارات البيئية والعلمية.",
      items: [
        "مشروعات إدارة الملوثات العضوية الثابتة",
        "مبادرات الاقتصاد الدائري",
        "مشروعات تحويل المخلفات إلى طاقة",
        "التقييمات البيئية والاجتماعية",
        "إعداد الملفات البيئية والفنية"
      ],
      list: [
        {
          title: "SUSTAINABLE PERSISTENT ORGANIC POLLUTANTS (POPS) MANAGEMENT PROJECT (SPMP)",
          period: "2017–2020",
          location: "محافظة الجيزة (منطقة الصف) ومحافظة أسيوط",
          description: "إعداد دراسات متخصصة للتربة والمياه والهواء وتقييم الأثر البيئي والاجتماعي، وإعداد دراسات تحليل المخاطر لإدارة والتخلص من المخلفات الخطرة (المبيدات المحظورة والمهجورة).",
          category: "إدارة المخلفات"
        },
        {
          title: "The Industrial Waste Exchange (IWEX)",
          period: "2017–2019",
          location: "مدينة 6 أكتوبر الصناعية",
          description: "زيارات ميدانية وتجميع بيانات حول المخلفات الصناعية لعدد كبير من المصانع، وإعداد أدلة إرشادية، وتطوير قاعدة بيانات وتدريب الكوادر وإدارة المبادرات لتعزيز تبادل المخلفات بين الصناعات.",
          category: "اقتصاد دائري"
        },
        {
          title: "Waste-to-Energy (Plastic to Fuel) Project",
          period: "2016–2018",
          location: "مشروع بحثي مشترك (مصر/الهند)",
          description: "مشروع بحثي لتحويل مخلفات البلاستيك إلى طاقة بواسطة التحلل الحراري والغازification باستخدام محولات نانوية.",
          category: "بحث وتطوير"
        },
        {
          title: "دراسة تقييم الأثر البيئي لمجمع سكني لضباط الداخلية",
          period: "2025",
          location: "بني سويف",
          client: "جمعية الولاء التعاونية للبناء والاسكان",
          description: "دراسة تقييم الأثر البيئي لمجمع سكني مكون من 24 مبنى لتقييم التأثيرات وتقديم التوصيات.",
          category: "تقييم الأثر"
        },
        {
          title: "دراسة تقييم الأثر البيئي لمشروع توسعات ملاحة (رأس غارب - الزعفرانة)",
          period: "2021",
          location: "البحر الأحمر",
          client: "شركة عمرو إبراهيم الحطاب لتجارة الملح",
          description: "دراسة تقييم الأثر البيئي لمشروع مأخذ بحري وتأثيره على البيئة البحرية والساحلية.",
          category: "تقييم الأثر"
        }
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
    partners: {
      title: "شركاء وعملاء",
      government: ["وزارة البيئة – EEAA"],
      international: ["World Bank", "GEF", "USAID", "UNDP", "JICA", "DANIDA", "FINNIDA", "CIDA"],
      industries: ["الأسمنت", "الكيماويات", "البترول", "النسيج", "الأغذية", "الطاقة"]
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "نحن هنا لدعم مصنعك في كل خطوة نحو الامتثال البيئي والاستدامة.",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      phoneNumbers: ["+2 01003479409", "+2 01021938285", "+2 01096677671", "+2 01067096677"],
      emails: ["info@gardenia.eg", "asmaa_hamouda@yahoo.com", "asmaa@gardenia.eg"],
      address: "كمبوند أشجار دارنا - عمارة A5 الدور الأول - المعادي - القاهرة",
      sendButton: "إرسال الرسالة",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formMessage: "كيف يمكننا مساعدتك؟"
    },
    footer: {
      rights: "جميع الحقوق محفوظة جاردينيا للاستشارات البيئية © 2024",
      address: "كمبوند أشجار دارنا - عمارة A5 الدور الأول - المعادي - القاهرة"
    }
  }
};