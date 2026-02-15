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
      title: "Factories and establishments for",
      titleSuffixes: [
        "Environmental & Social Impact Assessment",
        "Integrated Waste Management",
        "Carbon Footprint & CBAM Reporting",
        "Quality Management Systems"
      ],
      subtitle: "",
      cta: "Explore Our Services"
    },
    about: {
      title: "About Gardenia",
      mainText: "Who We Are?",
      tagline: "Environmental Consulting Partner Supporting Industrial Decision-Making",
      subText: "Gardenia for Environmental Consulting is a specialized environmental consulting firm that works with factories, various establishments, and government agencies to provide solutions that support environmental compliance, improve performance, and enhance sustainability.",
      introText: "Since 2008, Gardenia has been working as a trusted consulting partner in implementing environmental projects with factories and government agencies, relying on a participatory approach that focuses on practical solutions, knowledge transfer, and applying international best practices to achieve real environmental compliance and sustainability.",
      visionTitle: "Our Vision",
      visionText: "To be a leading regional firm in environmental consulting and a trusted partner for achieving compliance and sustainable industrial development.",
      missionTitle: "Our Mission",
      missionText: "To provide integrated consulting solutions that help facilities achieve compliance, reduce impact, and transition toward cleaner development aligned with international standards.",
      policiesTitle: "Policies & Objectives",
      policiesItems: [
          "Full commitment to national standards and international and regional agreements.",
          "Providing distinguished services that achieve customer satisfaction and fulfill their environmental commitments.",
          "Promoting the green economy through the application of Cleaner Production mechanisms.",
          "Adopting Green Chemistry technologies and mechanisms to reduce pollution and climate change.",
          "Supporting sustainability, reducing emissions, and calculating, managing, and reducing the carbon footprint of various facilities (Carbon Footprint & CBAM).",
          "Building the capacity of industrial cadres of engineers and technicians in the fields of environmental management and occupational safety and security through specialized training programs according to the nature of each industry.",
          "Assessing the environmental and social impacts of various projects (Environmental Social Impact Assessment)."
        ],
        specializationsTitle: "Our Specializations",
        specializationsItems: [
          "Preparation of Environmental and Social Impact Assessment (ESIA) studies.",
          "Waste management (solid/hazardous) of all types (solid, liquid, and gaseous emissions).",
          "Preparation of environmental records and records of hazardous materials and waste for various facilities.",
          "Preparation of environmental compliance and sanitation plans for factories, companies, and various facilities.",
          "Providing integrated solutions for water and industrial wastewater treatment.",
          "Setting technical specifications and preparing reports for safety and security systems.",
          "Setting technical specifications for X-Ray and Metal Gate baggage and metal detection devices.",
          "Setting technical specifications for fire fighting and alarm systems.",
          "Preparation of sustainability, carbon footprint, and CBAM reports for various sectors.",
          "Preparation of economic and social impact studies for various activities.",
          "Preparation of periodic coal reports for cement factories with consulting services to reduce gaseous emissions and Fuel Mix."
        ],
        addedValueTitle: "Value Added",
        addedValueItems: [
          "More than 25 years of practical experience in the field of environmental work and environmental consulting.",
          "A team of environmental work experts, university professors specializing in environmental engineering, and certified consultants from the Ministry and the Environmental Affairs Agency in various fields of environmental work.",
          "Extensive experience in many local and international projects in the fields of pollution control, waste management, environmental impact assessment, and environmental management studies.",
          "Cooperation with international organizations (World Bank, GEF, USAID, JICA, UNDP, KfW, CIDA)."
        ],
        expertsTitle: "Our Experts",
        expertsIntro: "The company relies on an elite group of experts, consultants, and university professors specialized in various environmental fields.",
        expertsItems: [
          "The team is led by Consultant Engineer Professor Dr. Asmaa Sayed Hammouda, with extensive experience in environmental work with the Egyptian Ministry of Environment, EEAA, and international organizations.",
          "Broad experience in national and international projects funded by major donors.",
          "Safety, security, and firefighting consultants certified by the Syndicate of Engineers with extensive experience working with the Civil Defense Authority."
        ],
        drAsmaaTitle: "Dr. Asmaa Hammouda's Profile",
        drAsmaaBio: [
          "Professor of Chemical Engineering, Environmental Engineering, and Materials Engineering.",
          "Head of the Department of Environmental Science and Industrial Development – Faculty of Postgraduate Studies for Advanced Sciences – Beni Suef University (2017-Present).",
          "Director – Department of Environmental Science & Industrial Development (2017-Present).",
          "Faculty member at the Faculty of Postgraduate Studies for Advanced Sciences, Beni Suef University (2013-Present).",
          "Board member of the JICA Alumni Association (Since 2024).",
          "Adjunct Professor – German International University (2024–2025).",
          "Advisor to the Egyptian Minister of Environment (2012–2013).",
          "Director of EIA for Industrial Projects at the Egyptian Environmental Affairs Agency (2007-2013).",
          "Certified Consultant (EEAA) in: Hazardous Waste Management, ESIA Preparation & Review, and Pollution Abatement & Environmental Sanitation.",
          "Consultant Engineer (Syndicate of Engineers) in Environmental Management since 2015.",
          "Deputy Project Manager for JICA-funded PCBs Management Project (2005-2007).",
          "Coordinator for National Environmental Inspection Plans at EEAA (1999-2005).",
          "Over 28 years of international experience (USA, Canada, Japan, India, Thailand, Germany)."
        ],
        methodologyTitle: "How We Work",
        methodologyText: "At Gardenia, we rely on an organized and clear methodology: studying the facility's situation and understanding its activity, identifying environmental and regulatory requirements and gaps, developing practical solutions that suit operational capabilities, preparing accurate and reliable reports, and providing follow-up and technical support when needed. Our goal is to achieve effective compliance without negatively impacting workflow."
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
      description: "Gardenia for Environmental and Scientific Consulting aims to provide integrated consulting solutions to industry in its various sectors, institutions, bodies, and government agencies in the fields of environmental management, pollution control, waste management of all kinds, and environmental and social impact assessment.",
      items: [
        {
          title: "Environmental & Social Impact Assessment (ESIA)",
          description: "We prepare ESIA studies for industrial and development projects, ensuring compliance with local and international environmental laws and requirements.",
          iconName: "FileText",
          details: {
            en: "• Preparation of ESIA studies for factories, companies, and various facilities.\n• Ensuring compliance with local and international standards.\n• Facilitating necessary approvals before construction, operation, or expansion.",
            ar: "• إعداد دراسات تقييم الأثر البيئي والاجتماعي للمصانع والشركات والمنشآت المختلفة ESIA.\n• ضمان التوافق مع المعايير المحلية والدولية.\n• تسهيل الحصول على الموافقات اللازمة قبل الإنشاء أو التشغيل أو التوسعات."
          }
        },
        {
          title: "Environmental & Technical Files",
          description: "Preparing and updating environmental and technical files for factories within industrial zones according to regulatory requirements.",
          iconName: "FolderOpen",
          details: {
            en: "• Implementation of Industrial Development Authority (IDA) files.\n• Environmental, Technical, and Firefighting files.\n• Ensuring safe and legal operation of the project.",
            ar: "• تنفيذ ملفات هيئة التنمية الصناعية (ملف بيئي – ملف فني – ملف مكافحة الحريق).\n• إعداد وتحديث الملفات البيئية والفنية للمصانع.\n• ضمان التشغيل الآمن والقانوني للمشروع."
          }
        },
        {
          title: "Solid & Hazardous Waste Management",
          description: "Effective systems for managing solid and hazardous waste, including collection, sorting, storage, and safe disposal.",
          iconName: "Trash2",
          details: {
            en: "• Preparation of studies for solid and hazardous waste management.\n• Strategies for transport, storage, and safe disposal.\n• Reducing environmental risks and operational costs.",
            ar: "• إعداد دراسات لإدارة المخلفات الصلبة والخطرة.\n• وضع استراتيجيات النقل والتخزين والتخلص الآمن.\n• تقليل المخاطر البيئية وخفض التكاليف التشغيلية."
          }
        },
        {
          title: "Carbon Footprint & CBAM Reporting",
          description: "Measurement and analysis of carbon footprint for facilities and products, helping factories meet export requirements.",
          iconName: "Leaf",
          details: {
            en: "• Carbon footprint reports for facilities and products (CFP/CBAM).\n• Sustainability reports and emission reduction projects.\n• Preparation for CBAM compliance and European export requirements.",
            ar: "• تقارير البصمة الكربونية للمنشآت والمنتجات (CFP/CBAM).\n• تقارير الاستدامة ومشاريع خفض الانبعاثات.\n• الاستعداد لتطبيق آلية CBAM ومتطلبات التصدير الأوروبية."
          }
        },
        {
          title: "Quality & Management Systems (ISO)",
          description: "Implementing global standards for quality, environment, and occupational health and safety (ISO 9001, 14001, 45001).",
          iconName: "Award",
          details: {
            en: "• Implementation of ISO 9001, ISO 14001, and ISO 45001 systems.\n• Improving performance efficiency and reducing risks.\n• Enhancing compliance within industrial facilities.",
            ar: "• تطبيق نظم ISO 9001 وISO 14001 وISO 45001.\n• تحسين كفاءة الأداء وتقليل المخاطر.\n• رفع مستوى الامتثال داخل المنشآت الصناعية."
          }
        },
        {
          title: "Safety & Firefighting Systems",
          description: "Design and implementation of fire fighting and alarm systems, and occupational health and safety plans.",
          iconName: "ShieldCheck",
          details: {
            en: "• Preparation of Firefighting & Fire Alarm reports.\n• Implementation of fire systems approved by Civil Defense.\n• Boiler inspection and safety specifications.",
            ar: "• إعداد تقارير أنظمة مكافحة وانذار الحريق.\n• تنفيذ أنظمة الحريق المعتمدة من الدفاع المدني.\n• فحص الغلايات ووضع مواصفات السلامة."
          }
        },
        {
          title: "Sustainability & Circular Economy",
          description: "Consulting for sustainability and circular economy practices to reduce waste and improve resource efficiency.",
          iconName: "RefreshCcw",
          details: {
            en: "• Industrial waste recycling and circular economy studies.\n• Cleaner Production and Green Chemistry techniques.\n• Resource optimization and sustainable operation.",
            ar: "• دراسات إعادة تدوير المخلفات الصناعية والاقتصاد الدوار.\n• تطبيق آليات الإنتاج الأنظف والكيمياء الخضراء.\n• تحسين استخدام الموارد والتشغيل المستدام."
          }
        },
        {
          title: "Training & Capacity Building",
          description: "Specialized training programs for industrial cadres in environmental management, safety, and carbon footprinting.",
          iconName: "Users",
          details: {
            en: "• Training on environmental compliance and pollution control.\n• Waste management and quality systems training.\n• Capacity building for engineers and technical teams.",
            ar: "• تدريب على الامتثال البيئي والحد من التلوث.\n• برامج تدريبية في إدارة المخلفات ونظم الجودة.\n• بناء قدرات المهندسين والكوادر الفنية."
          }
        }
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
      description: "",
      items: [
        "Hazardous & solid waste management (POPs, IWEX)",
        "Environmental & Social Impact Assessments (ESIA)",
        "Waste-to-Energy & Circular Economy initiatives",
        "Industrial Development Authority (IDA) technical files",
        "Environmental auditing & compliance monitoring"
      ],
      approachTitle: "Our Approach",
      approachItems: [
        "Deep understanding of each industrial activity",
        "Rigorous scientific assessment of risks",
        "Practical and sustainable solution design",
        "Strategic partnership with clients and regulators",
        "Commitment to international best practices"
      ],
      caseStudiesTitle: "Key Case Studies",
      caseStudies: [
        {
          title: "SUSTAINABLE PERSISTENT ORGANIC POLLUTANTS (POPS) MANAGEMENT PROJECT (SPMP)",
          period: "2017–2020",
          location: "Giza (El-Saff) & Assiut Governorates",
          objective: "Conduct specialized studies for soil, water, and air; ESIA; and quantitative/qualitative risk analysis for the integrated management and disposal of hazardous waste (banned and obsolete pesticides) at storage sites.",
          participation: "Prof. Dr. Asmaa Hammouda served as the Lead Environmental Consultant for the project.",
          image: "/studies/study-20.png",
          category: "Waste Management"
        },
        {
          title: "The Industrial Waste Exchange (IWEX) Project",
          period: "2017–2019",
          location: "6th of October Industrial City",
          objective: "Help industries exchange and reuse industrial waste through an online database, reducing waste and promoting a circular economy.",
          participation: "Dr. Asmaa Hammouda served as the Environmental Expert.",
          image: "/studies/study-4.png",
          details: [
            "Field visits and data collection for 812 factories.",
            "Preparation of guidelines for waste types and recycling methods.",
            "Training cadres in Environmental and Waste Auditing.",
            "Designing a database for waste exchange between industrial sectors."
          ],
          category: "Circular Economy"
        },
        {
          title: "Waste-to-Energy (Plastic to Fuel - P2F)",
          period: "2016–2018",
          location: "Beni Suef University (Funded by ASRT)",
          objective: "Investigate Nano-catalytic decomposition of waste Polypropylene (PP) and Polyethylene (PE) for fuel generation through Pyrolysis and Gasification.",
          participation: "Prof. Dr. Asmaa Hammouda was the Principal Investigator (PI) who formulated the idea and implemented the prototype reactor.",
          image: "/studies/study-2.png",
          category: "Innovation & Research"
        }
      ],
      projectLists: [
        {
          categoryTitle: "Environmental & Social Impact Assessments (ESIA)",
          projects: [
            { 
              name: "ESIA for Interior Ministry Officers Housing Complex (24 Buildings)", 
              client: "Al-Walaa Cooperative Society", 
              location: "Beni Suef", 
              date: "2025",
              image: "/studies/study-19.png"
            },
            { 
              name: "ESIA (Form B) for Marine Intake - Salt Works Expansion", 
              client: "Amr Ibrahim Al-Hattab Salt Trading", 
              location: "Red Sea (Ras Ghareb)", 
              date: "2021",
              image: "/studies/study-18.png"
            },
            { 
              name: "ESIA (Form B) for Hazardous (Medical) Waste Incinerator", 
              client: "Al-Salam Factory (CLEAN)", 
              location: "Cairo (Al-Salam City)", 
              date: "2019",
              image: "/studies/study-17.png"
            },
            { 
              name: "ESIA (Form B) for Hazardous (Medical) Waste Incinerator", 
              client: "Dar Al-Mona Resort for Medical Services", 
              location: "Giza", 
              date: "2019",
              image: "/studies/study-16.png"
            },
            { 
              name: "ESIA (Form B) for Hazardous/Solid Waste Transport", 
              client: "New Valley Environmental Services", 
              location: "Giza to Alexandria", 
              date: "2017",
              image: "/studies/study-15.png"
            },
            { 
              name: "ESIA (Form B) for 6th of October Landfill Operation & Safe Burial", 
              client: "New Valley Environmental Services", 
              location: "Giza", 
              date: "2018",
              image: "/studies/study-14.png"
            },
            { 
              name: "ESIA (Category C) for Carbon Black Production", 
              client: "Borg Al-Arab for Development & Investment", 
              location: "Beni Suef (Heavy Industry Zone)", 
              date: "2013",
              image: "/studies/study-13.png"
            }
          ]
        },
        {
          categoryTitle: "Industrial Development Authority (IDA) Technical Files",
          projects: [
            { 
              name: "Environmental Study for Fertilizer Industry", 
              client: "Al-Taknia for Fertilizers", 
              location: "Bayad Al-Arab Industrial Zone", 
              date: "2023",
              image: "/studies/study-12.png"
            },
            { 
              name: "Environmental File for Medical Food", 
              client: "Nitramed International", 
              location: "10th of Ramadan City", 
              date: "2022",
              image: "/studies/study-11.png"
            },
            { 
              name: "Technical File", 
              client: "Nitrapharm International", 
              location: "10th of Ramadan City", 
              date: "2020",
              image: "/studies/study-10.png"
            },
            { 
              name: "Environmental File for Ready-Mix Concrete Station", 
              client: "Concrete Plus for Engineering", 
              location: "New Alamein City", 
              date: "2020",
              image: "/studies/study-9.png"
            },
            { 
              name: "Technical File for Ready-Mix Concrete Station", 
              client: "Concrete Plus for Engineering", 
              location: "New Alamein City", 
              date: "2020",
              image: "/studies/study-8.png"
            },
            { 
              name: "Environmental File for Corrugated Cardboard Manufacturing", 
              client: "Sealed Air", 
              location: "10th of Ramadan City", 
              date: "2018",
              image: "/studies/study-7.png"
            },
            { 
              name: "Technical File for Paints & Chemicals Industry", 
              client: "International Islamic Co. for Paints", 
              location: "10th of Ramadan City", 
              date: "2018",
              image: "/studies/study-6.png"
            }
          ]
        },
        {
          categoryTitle: "Fire Alarm & Fighting System Inspection Reports",
          projects: [
            { 
              name: "Fire Alarm & Fighting System Description (Scaffolding & Metal Formwork Warehouse)", 
              client: "Pioneers for Industries", 
              location: "6th of October City", 
              date: "2020",
              image: "/studies/study-5.png"
            },
            { 
              name: "Fire Alarm & Fighting System Description (Foam & Plastic Packaging Factory)", 
              client: "Misr El Hegaz for Pipe Fittings", 
              location: "10th of Ramadan City", 
              date: "2020",
              image: "/studies/study-4.png"
            }
          ]
        },
        {
          categoryTitle: "Boiler Validity & Engineering Inspection Reports",
          projects: [
            { 
              name: "Boiler Validity Report (No. 90800400)", 
              client: "Feedmix Egypt (Animal Feed)", 
              location: "Beni Suef (Medium Industry Zone)", 
              date: "2018",
              image: "/studies/study-3.png"
            },
            { 
              name: "Boiler Validity Report (No. 3186)", 
              client: "Beni Suef Animal Feed", 
              location: "Beni Suef (Bayad Al-Arab)", 
              date: "2018",
              image: "/studies/study-2.png"
            },
            { 
              name: "Boiler Validity Report (No. 21152)", 
              client: "Quality Pack (Inks & Packaging)", 
              location: "Fayoum (Kom Oshim)", 
              date: "2018",
              image: "/studies/study-1.png"
            }
          ]
        }
      ],
      summaryTableTitle: "Project Summary - Dr. Asmaa Hammouda as Expert/Consultant",
      summaryTable: [
        { project: "Sustainable Persistent Organic Pollutants (POPs) Management Project (SPMP)", years: "2017-2020", funding: "GEF (Grant TF017336)" },
        { project: "The Industrial Waste Exchange (IWEX) Project", years: "2017-2019", funding: "African Development Bank (AfDB)" },
        { project: "Waste-to-Energy (Plastic to Fuel - P2F)", years: "2016-2018", funding: "Academy of Scientific Research (ASRT)" },
        { project: "Monitoring and Inventory of PCBs in Greater Cairo and Alexandria", years: "2006-2008", funding: "JICA" },
        { project: "Center of Excellence for Water / Beni-Suef University", years: "2019-2025", funding: "USAID / AUC" },
        { project: "Regional Environmental Management Implementation Project (REMIP)", years: "2000-2008", funding: "JICA" },
        { project: "Egyptian Environmental Policy Program (EEPP) - Capacity Building", years: "2000-2008", funding: "USAID" },
        { project: "Environmental Pollution Abatement Programs (EPAP I & II)", years: "2000-2007", funding: "FINNAIDA (Finland)" },
        { project: "Organization Support Program (OSP) / EEAA", years: "2000-2002", funding: "Denmark" },
        { project: "The Egyptian Environmental Information System (EEIS)", years: "1999-2004", funding: "CIDA (Canada)" },
        { project: "Sustainable Environmental Project (EQA - Palestine)", years: "2011-2012", funding: "UNDP" },
        { project: "Support for Environmental Assessment and Management (SEAM)", years: "1999-2005", funding: "DFID (UK)" },
        { project: "Facility for Financing Environmental Protection in Industry", years: "1997-1999", funding: "KfW (Germany)" }
      ],
      partnersTitle: "Our Clients & Partners",
      partners: {
        government: ["Ministry of Environment", "EEAA", "Industrial Development Authority (IDA)"],
        international: ["World Bank", "GEF", "USAID", "UNDP", "JICA", "DANIDA", "FINNAIDA", "CIDA", "AfDB", "KfW", "DFID"],
        industrial: ["Cement", "Chemicals", "Petroleum", "Textile", "Food & Beverages", "Energy"]
      }
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
      rights: "All rights reserved Gardenia Environmental Consulting © 2026",
      address: "Compound Ashgar Darna - Building A5 - 1st Floor - Maadi - Cairo"
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
      title: "نقدم للمصانع والمنشآت خدمات",
      titleSuffixes: [
        "تقييم الأثر البيئي والاجتماعي",
        "الإدارة المتكاملة للمخلفات",
        "تقارير البصمة الكربونية وCBAM",
        "نظم إدارة الجودة"
      ],
      subtitle: "",
      cta: "تعرف على خدماتنا"
    },
    about: {
      title: "من نحن",
      mainText: "من نحن؟",
      tagline: "شريك استشاري بيئي يدعم القرار الصناعي",
      subText: "Gardenia for Environmental Consulting شركة استشارات بيئية تعمل مع المصانع والمنشات الاقتصادية المختلفة والجهات الحكومية لتقديم حلول تدعم الامتثال البيئي وتحسين الأداء وتقليل المخاطر. نلتزم بتقديم دراسات وتقارير واضحة مبنية على الخبرة والمعايير المحلية والدولية، مع تركيز على النتائج العملية التي تساعد المنشآت على اتخاذ قرارات صحيحة وتنفيذها بكفاءة.",
      introText: "منذ عام 2008، تعمل جاردينيا كشريك استشاري موثوق في تنفيذ مشروعات بيئية مع المصانع والجهات الحكومية، معتمدة على نهج تشاركي يركز على الحلول العملية، نقل المعرفة، وتطبيق أفضل الممارسات الدولية لتحقيق التزام بيئي واستدامة حقيقية.",
      visionTitle: "رؤيتنا",
      visionText: "نسعى لأن نكون من الشركات الرائدة إقليمياً في مجال الاستشارات البيئية، والشريك الموثوق للمصانع في تحقيق الامتثال البيئي والتنمية الصناعية النظيفة.",
      missionTitle: "رسالتنا",
      missionText: "تقديم حلول واستشارات بيئية وعلمية متكاملة تساعد المصانع على الالتزام بالقوانين، وتقليل التأثيرات السلبية، ودعم التحول نحو الاستدامة.",
      policiesTitle: "السياسات والأهداف",
      policiesItems: [
          "الالتزام الكامل بالمعايير الوطنية والاتفاقيات الدولية والاقليمية.",
          "تقديم خدمات متميزة تحقق رضا العملاء وتفي بالتزامتهم البيئية.",
          "تعزيز الاقتصاد الأخضر عبر تطبيق اليات الانتاج الانظف المسئول Cleaner Production",
          "تبني تكنولوجيات واليات الكيمياء الخضراء Green Chemistry للحد من التلوث والتغيرات المناخية .",
          "دعم الاستدامة وتقليل الانبعاثات وحساب وادارة وخفض البصمة الكربونية للمنشات المختلفة (Carbon Footprint & CBAM)",
          "بناء قدرات الكوادر الصناعية من المهندسين والفنين في مجالات الادارة البيئية والامن والسلامة المهنية عبر برامج تدريبية متخصصة طبقا لطبيعة كل صناعة .",
          "تقييم الاثار البيئية والاجتماعية للمشاريع المختلفة Environmental Social Impact Assessment"
        ],
        specializationsTitle: "تخصصات الشركة",
        specializationsItems: [
          "إعداد دراسات تقييم الأثر البيئي والاجتماعي.",
          "إدارة المخلفات (الصلبة/الخطرة) بكافة انواعها ( الصلبة والسائلة والانبعاثات الغازية).",
          "إعداد السجلات البيئية وسجلات المواد والمخلفات الخطرة للمنشات المختلفة.",
          "إعداد خطط التوافق والاصحاح البيئي للمصانع والشركات والمنشات المختلفة.",
          "تقديم حلول متكاملة لمعالجة المياه والصرف الصناعي.",
          "وضع المواصفات الفنية واعداد التقارير الخاصة بانظمة السلامة والامان",
          "وضع المواصفات الفنية لاجهزة الكشف عن الحقائب والكشف عن المعادن X-Ray and Metal Gate",
          "وضع المواصفات الفنية الخاصة بأنظمة مكافحة وانذار الحريق",
          "اعداد تقارير الاستدامة والبصمة الكربونية وCBAM للقطاعات المختلفة",
          "اعداد دراسات الاثر الاقتصادي والاجتماعي للانشطة المختلفة",
          "اعداد التقارير الدورية للفحم لمصانع الاسمنت مع تقديم خدمات استشارية للحد من الانبعاثات الغازية و Fuel Mix"
        ],
        addedValueTitle: "القيمة المضافة",
        addedValueItems: [
          "أكثر من 25 عامًا خبرة عملية في مجال العمل البيئي والاستشارات البيئية.",
          "فريق من خبراء العمل البيئي والأساتذة الجامعيين المتخصصين في الهندسة البيئية والاستشاريين المعتمدين من وزارة وجهاز شئون البيئة في مجالات العمل البيئي المختلفة.",
          "خبرة واسعة في العديد من المشاريع المحلية والدولية في مجالات الحد من التلوث وادارة المخلفات وتقييم الاثر البيئي ودراسات الادارة البيئية.",
          "تعاون مع منظمات عالمية (World Bank, GEF, USAID, JICA, UNDP, KfW, CIDA)."
        ],
        expertsTitle: "الكوادر والخبراء",
        expertsIntro: "تعتمد الشركة على نخبة من الخبراء والاستشاريين وأساتذة الجامعات المتخصصين في المجالات البيئية المختلفة.",
        expertsItems: [
          "يترأس فريق العمل استشاري مهندس الأستاذة الدكتورة أسماء سيد حموده، والتي لها خبرة طويلة ومتنوعة في مجال العمل البيئي مع جهاز شئون البيئة ووزارة البيئة وجهات دولية.",
          "خبرات واسعة في مشاريع وطنية ودولية بتمويل من جهات مانحة كبرى.",
          "استشاريو السلامة والأمن ومكافحة الحريق معتمدون من نقابة المهندسين ولهم خبرة طويلة في العمل مع هيئة الحماية المدنية."
        ],
        drAsmaaTitle: "السيرة الذاتية للدكتورة أسماء حمودة",
        drAsmaaBio: [
          "أستاذ الهندسة الكيميائية والهندسة البيئية وهندسة المواد.",
          "رئيس قسم العلوم البيئية والتنمية الصناعية – كلية الدراسات العليا للعلوم المتقدمة – جامعة بني سويف (2017 - حتى الآن).",
          "Director – Department of Environmental Science & Industrial Development (2017-Present).",
          "عضو هيئة تدريس بكلية الدراسات العليا للعلوم المتقدمة بجامعة بني سويف (2013 - حتى الآن).",
          "عضو مجلس إدارة جمعية أصداء الجايكا اليابانية (منذ 2024).",
          "أستاذ زائر بالجامعة الألمانية الدولية (2024–2025).",
          "مستشار وزير البيئة المصري (2012–2013).",
          "مدير إدارة تقييم الأثر البيئي للمشروعات الصناعية بجهاز شئون البيئة المصري (2007-2013).",
          "استشاري معتمد من وزارة البيئة في: إدارة المخلفات الخطرة، إعداد ومراجعة دراسات تقييم الأثر البيئي، ودراسات الحد من التلوث والاصحاح البيئي.",
          "استشاري مهندس من نقابة المهندسين المصرية في مجالات الإدارة البيئية منذ عام 2015.",
          "نائب مدير مشروع إدارة المواد الخطرة (PCBs) الممول من JICA (2005-2007).",
          "منسق ومسئول إعداد خطط التفتيش البيئي لعموم الجمهورية بجهاز شئون البيئة (1999-2005).",
          "أكثر من 28 عامًا خبرة دولية في مجال العمل البيئي وإدارة المخلفات (الولايات المتحدة، كندا، اليابان، الهند، تايلاند، ألمانيا)."
        ],
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
      description: "تستهدف جاردينيا للاستشارات البيئية والعلمية تقديم حلول استشارية متكاملة للصناعة بقطاعاتها المختلفة والمؤسسات والهيئات والجهات الحكومية في مجلات الادارة البيئية والحد من التلوث وادارة المخلفات بجميع انواعها وتقييم الاثر البيئي والاجتماعي.",
      items: [
        {
          title: "دراسات تقييم الأثر البيئي والاجتماعي (ESIA)",
          description: "نقوم بإعداد دراسات تقييم الأثر البيئي والاجتماعي للمشروعات الصناعية والتنموية، بما يضمن توافق المشروع مع القوانين والاشتراطات البيئية المحلية والدولية، ويساعد في الحصول على الموافقات اللازمة قبل الإنشاء أو التشغيل أو التوسعات.",
          iconName: "FileText",
          details: {
            en: "• Preparation of ESIA studies for factories, companies, and various facilities.\n• Ensuring compliance with local and international standards.\n• Facilitating necessary approvals before construction, operation, or expansion.",
            ar: "• إعداد دراسات تقييم الأثر البيئي والاجتماعي للمصانع والشركات والمنشآت المختلفة ESIA.\n• ضمان التوافق مع المعايير المحلية والدولية.\n• تسهيل الحصول على الموافقات اللازمة قبل الإنشاء أو التشغيل أو التوسعات."
          }
        },
        {
          title: "إعداد الملفات البيئية والفنية للمشروعات الصناعية",
          description: "نقدم خدمات إعداد وتحديث الملفات البيئية والفنية للمصانع داخل المناطق الصناعية ، وفقاً لاشتراطات الجهات الرقابية، لضمان تشغيل آمن وقانوني للمشروع والحصول على التراخيص والموافقات المطلوبة.",
          iconName: "FolderOpen",
          details: {
            en: "• Implementation of Industrial Development Authority (IDA) files.\n• Environmental, Technical, and Firefighting files.\n• Ensuring safe and legal operation of the project.",
            ar: "• تنفيذ ملفات هيئة التنمية الصناعية (ملف بيئي – ملف فني – ملف مكافحة الحريق).\n• إعداد وتحديث الملفات البيئية والفنية للمصانع.\n• ضمان التشغيل الآمن والقانوني للمشروع."
          }
        },
        {
          title: "إدارة المخلفات الصلبة والخطرة",
          description: "نساعد المصانع في وضع وتنفيذ أنظمة فعالة لإدارة المخلفات الصلبة والخطرة، تشمل الجمع والفرز والتخزين الآمن وإعادة التدوير أو التخلص الآمن، بما يقلل المخاطر البيئية ويخفض التكاليف التشغيلية.",
          iconName: "Trash2",
          details: {
            en: "• Preparation of studies for solid and hazardous waste management.\n• Strategies for transport, storage, and safe disposal.\n• Reducing environmental risks and operational costs.",
            ar: "• إعداد دراسات لإدارة المخلفات الصلبة والخطرة.\n• وضع استراتيجيات النقل والتخزين والتخلص الآمن.\n• تقليل المخاطر البيئية وخفض التكاليف التشغيلية."
          }
        },
        {
          title: "حساب البصمة الكربونية والاستدامة لـ CBAM",
          description: "نقدم خدمات قياس وتحليل البصمة الكربونية للمنشآت الصناعية والبصمة الكربونية للمنتج وتقارير الاستدامة ومشاريع خفض البصمة الكربونية، ووضع خطط خفض الانبعاثات، لمساعدة المصانع على الاستعداد لتطبيق آلية CBAM والالتزام بمتطلبات التصدير للأسواق الأوروبية.",
          iconName: "Leaf",
          details: {
            en: "• Carbon footprint reports for facilities and products (CFP/CBAM).\n• Sustainability reports and emission reduction projects.\n• Preparation for CBAM compliance and European export requirements.",
            ar: "• تقارير البصمة الكربونية للمنشآت والمنتجات (CFP/CBAM).\n• تقارير الاستدامة ومشاريع خفض الانبعاثات.\n• الاستعداد لتطبيق آلية CBAM ومتطلبات التصدير الأوروبية."
          }
        },
        {
          title: "تطبيق أنظمة الجودة والإدارة (ISO 9001 – ISO 14001 – ISO 45001)",
          description: "نقوم بتصميم وتطبيق أنظمة الإدارة المختلفة مثل: ISO 9001 (إدارة الجودة) ISO 14001 (الإدارة البيئية) ISO 45001 (الصحة والسلامة المهنية) وذلك لتحسين كفاءة الأداء، تقليل المخاطر، ورفع مستوى الامتثال داخل المنشآت الصناعية.",
          iconName: "Award",
          details: {
            en: "• Implementation of ISO 9001, ISO 14001, and ISO 45001 systems.\n• Improving performance efficiency and reducing risks.\n• Enhancing compliance within industrial facilities.",
            ar: "• تطبيق نظم ISO 9001 وISO 14001 وISO 45001.\n• تحسين كفاءة الأداء وتقليل المخاطر.\n• رفع مستوى الامتثال داخل المنشآت الصناعية."
          }
        },
        {
          title: "أنظمة السلامة المهنية ومكافحة الحريق",
          description: "نقدم خدمات تصميم ومراجعة وتنفيذ أنظمة مكافحة الحريق والإنذار، بالإضافة إلى إعداد خطط السلامة والصحة المهنية، وفحص الغلايات، بما يضمن بيئة عمل آمنة متوافقة مع الاشتراطات القانونية.",
          iconName: "ShieldCheck",
          details: {
            en: "• Preparation of Firefighting & Fire Alarm reports.\n• Implementation of fire systems approved by Civil Defense.\n• Boiler inspection and safety specifications.",
            ar: "• إعداد تقارير أنظمة مكافحة وانذار الحريق.\n• تنفيذ أنظمة الحريق المعتمدة من الدفاع المدني.\n• فحص الغلايات ووضع مواصفات السلامة."
          }
        },
        {
          title: "استشارات الاستدامة والاقتصاد الدائري",
          description: "نساعد المؤسسات الصناعية على تبني ممارسات الاستدامة والاقتصاد الدائري من خلال تقليل الهدر، تحسين استخدام الموارد، وإعادة الاستفادة من المخلفات، بما ييدعم التشغيل المستدام على المدى الطويل.",
          iconName: "RefreshCcw",
          details: {
            en: "• Industrial waste recycling and circular economy studies.\n• Cleaner Production and Green Chemistry techniques.\n• Resource optimization and sustainable operation.",
            ar: "• دراسات إعادة تدوير المخلفات الصناعية والاقتصاد الدوار.\n• تطبيق آليات الإنتاج الأنظف والكيمياء الخضراء.\n• تحسين استخدام الموارد والتشغيل المستدام."
          }
        },
        {
          title: "برامج تدريب وتأهيل للكوادر الصناعية",
          description: "نقدم برامج تدريب متخصصة للعاملين والإدارات الفنية داخل المصانع، تشمل اعداد دراسات تقييم الاثر البيئي والاجتماعي. اعداد السجل البيئي وسجل الكزاد والمخلفات الخطرة. ، إدارة المخلفات، أنظمة الجودة، السلامة المهنية، والبصمة الكربونية، لضمان استمرارية تطبيق الأنظمة بكفاءة.",
          iconName: "Users",
          details: {
            en: "• Training on environmental compliance and pollution control.\n• Waste management and quality systems training.\n• Capacity building for engineers and technical teams.",
            ar: "• تدريب على الامتثال البيئي والحد من التلوث.\n• برامج تدريبية في إدارة المخلفات ونظم الجودة.\n• بناء قدرات المهندسين والكوادر الفنية."
          }
        }
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
      title: "خبراتنا ومشاريعنا",
      description: "",
      items: [
        "إدارة المخلفات الصلبة والخطرة (POPs, IWEX)",
        "دراسات تقييم الأثر البيئي والاجتماعي (ESIA)",
        "مشاريع تحويل المخلفات إلى طاقة والاقتصاد الدائري",
        "إعداد ملفات هيئة التنمية الصناعية (البيئية والفنية)",
        "التفتيش البيئي ومراقبة الالتزام"
      ],
      approachTitle: "منهجنا في العمل",
      approachItems: [
        "الفهم العميق لكل نشاط صناعي على حدة",
        "التقييم العلمي الدقيق للمخاطر",
        "تصميم حلول عملية ومستدامة",
        "شراكة استراتيجية مع العملاء والجهات التنظيمية",
        "الالتزام بأفضل الممارسات الدولية"
      ],
      caseStudiesTitle: "نماذج من الحالات الدراسية",
      caseStudies: [
        {
          title: "SUSTAINABLE PERSISTENT ORGANIC POLLUTANTS (POPS) MANAGEMENT PROJECT (SPMP)",
          period: "2017–2020",
          location: "محافظة الجيزة (منطقة الصف) ومحافظة أسيوط",
          objective: "إعداد دراسات متخصصة للتربة والمياه والهواء وتقييم الأثر البيئي والاجتماعي وإعداد دراسات تحليل المخاطر الكمية والنوعية للإدارة المتكاملة والتخلص من المخلفات الخطرة (المبيدات المحظورة والمهجورة) بمواقع مخازن المخلفات.",
          participation: "د. أسماء حمودة، والتي عملت كاستشاري بيئي للمشروع، وقامت بإعداد دراسة تقييم الأثر البيئي والاجتماعي لإعادة تعبئة المبيدات بمحافظة أسيوط.",
          image: "/studies/study-20.png",
          category: "إدارة المخلفات"
        },
        {
          title: "The Industrial Waste Exchange (IWEX) Project",
          period: "2017–2019",
          location: "مدينة 6 أكتوبر الصناعية",
          objective: "مساعدة الصناعات على تبادل وإعادة استخدام المخلفات الصناعية من خلال قاعدة بيانات ومنصة إلكترونية لربط المصانع، مما يقلل النفايات ويعزز الاقتصاد الدائري.",
          participation: "د. أسماء حمودة، والتي عملت كخبير بيئي بالمشروع.",
          image: "/studies/study-4.png",
          details: [
            "زيارات ميدانية وتجميع بيانات لعدد 812 مصنعاً.",
            "إعداد الأدلة الإرشادية لأنواع المخلفات وطرق تدويرها.",
            "تدريب الكوادر في أعمال التدقيق البيئي وإدارة المخلفات.",
            "تصميم قاعدة بيانات لتبادل المخلفات بين القطاعات الصناعية."
          ],
          category: "الاقتصاد الدائري"
        },
        {
          title: "تحويل مخلفات البلاستيك إلى طاقة (Plastic to Fuel - P2F)",
          period: "2016–2018",
          location: "جامعة بني سويف (بتمويل من أكاديمية البحث العلمي والتكنولوجيا)",
          objective: "البحث في التحلل الحفزي النانوي لمخلفات البولي بروبيلين (PP) والبولي إيثيلين (PE) لإنتاج الوقود من خلال عمليات التحلل الحراري والتغويز.",
          participation: "أ.د أسماء حمودة، الباحث الرئيسي للمشروع، قامت بصياغة الفكرة وتطبيق المشروع وعمل نموذج أولي لمفاعل تحويل المخلفات.",
          image: "/studies/study-2.png",
          category: "الابتكار والبحث العلمي"
        }
      ],
      projectLists: [
        {
          categoryTitle: "دراسات تقييم الأثر البيئي والاجتماعي (ESIA)",
          projects: [
            { 
              name: "تقييم الأثر البيئي (ب محددة) لمشروع كومباوند سكني (10 فدان)", 
              client: "جمعية الولاء التعاونية للبناء والإسكان", 
              location: "بني سويف", 
              date: "2025",
              image: "/studies/study-19.png"
            },
            { 
              name: "تقييم الأثر البيئي (ب محددة) لمأخذ بحري لمشروع توسعات ملاحة (رأس غارب)", 
              client: "شركة عمرو إبراهيم الحطاب لتجارة الملح", 
              location: "البحر الأحمر", 
              date: "2021",
              image: "/studies/study-18.png"
            },
            { 
              name: "تقييم الأثر البيئي (ب محددة) لمشروع محرقة مخلفات طبية (مصنع سماد السلام)", 
              client: "مصنع السلام (الهيئة العامة للنظافة)", 
              location: "القاهرة (مدينة السلام)", 
              date: "2019",
              image: "/studies/study-17.png"
            },
            { 
              name: "تقييم الأثر البيئي (ب محددة) لمشروع محرقة مخلفات طبية (منتجع دار المنى)", 
              client: "منتجع دار المنى للتأهيل والخدمات الطبية", 
              location: "الجيزة", 
              date: "2019",
              image: "/studies/study-16.png"
            },
            { 
              name: "تقييم الأثر البيئي (ب محددة) لنقل المخلفات الصلبة والخطرة", 
              client: "مؤسسة نيوفالي للخدمات البيئية", 
              location: "من الجيزة إلى الإسكندرية", 
              date: "2017",
              image: "/studies/study-15.png"
            },
            { 
              name: "تقييم الأثر البيئي (ب محددة) لتشغيل وتطوير مقلب مدينة 6 أكتوبر", 
              client: "مؤسسة نيوفالي للخدمات البيئية", 
              location: "الجيزة", 
              date: "2018",
              image: "/studies/study-14.png"
            },
            { 
              name: "نموذج (ب) لتقييم التأثير البيئي لتصنيع منتجات الكرتون المضلع", 
              client: "شركة سيلدك (Sealed Air)", 
              location: "العاشر من رمضان", 
              date: "2018",
              image: "/studies/study-7.png"
            },
            { 
              name: "تقييم الأثر البيئي والاجتماعي لإعادة تعبئة المبيدات (مخزن الصف)", 
              client: "مشروع إدارة الملوثات العضوية الثابتة (POPs) - EEAA", 
              location: "الجيزة (الصف)", 
              date: "2018",
              image: "/studies/study-21.png"
            },
            { 
              name: "تقييم الأثر البيئي والاجتماعي لإعادة تعبئة المبيدات (مخزن أسيوط)", 
              client: "مشروع إدارة الملوثات العضوية الثابتة (POPs) - EEAA", 
              location: "أسيوط", 
              date: "2018",
              image: "/studies/study-20.png"
            },
            { 
              name: "تقييم الأثر البيئي والاجتماعي (ج) لمشروع إنتاج الكربون الأسود", 
              client: "شركة برج العرب للتنمية والاستثمار", 
              location: "بني سويف (منطقة الصناعات الثقيلة)", 
              date: "2013",
              image: "/studies/study-13.png"
            }
          ]
        },
        {
          categoryTitle: "ملفات هيئة التنمية الصناعية (الملف البيئي والفني)",
          projects: [
            { 
              name: "الدراسة البيئية لصناعة الأسمدة (إضافة نشاط كبريتات ماغنسيوم وبوتاسيوم)", 
              client: "شركة التقنية لصناعة الأسمدة", 
              location: "منطقة بياض العرب الصناعية", 
              date: "2023",
              image: "/studies/study-12.png"
            },
            { 
              name: "الملف البيئي للأغذية الطبية (تعبئة وتجارة مكملات غذائية وألبان أطفال)", 
              client: "شركة نيتراميد إنترناشيونال", 
              location: "العاشر من رمضان", 
              date: "2022",
              image: "/studies/study-11.png"
            },
            { 
              name: "الملف الفني (إنتاج مكملات غذائية وألبان أطفال)", 
              client: "شركة نيترافارم إنترناشيونال", 
              location: "العاشر من رمضان", 
              date: "2020",
              image: "/studies/study-10.png"
            },
            { 
              name: "الدراسة البيئية لمحطة خلط خرسانة جاهزة", 
              client: "شركة كونكريت بلاس للهندسة", 
              location: "مدينة العلمين الجديدة", 
              date: "2020",
              image: "/studies/study-9.png"
            },
            { 
              name: "الملف الفني لمحطة خلط خرسانة جاهزة", 
              client: "شركة كونكريت بلاس للهندسة", 
              location: "مدينة العلمين الجديدة", 
              date: "2020",
              image: "/studies/study-8.png"
            },
            { 
              name: "الملف البيئي لتصنيع منتجات الكرتون المضلع", 
              client: "شركة سيلدك (Sealed Air)", 
              location: "العاشر من رمضان", 
              date: "2018",
              image: "/studies/study-7.png"
            },
            { 
              name: "الملف الفني لتصنيع البويات والصناعات الكيماوية", 
              client: "الشركة الإسلامية الدولية للبويات", 
              location: "العاشر من رمضان", 
              date: "2018",
              image: "/studies/study-6.png"
            }
          ]
        },
        {
          categoryTitle: "تقارير فحص أنظمة الحريق والإنذار",
          projects: [
            { 
              name: "تقرير وصف أنظمة الإنذار ومكافحة الحريق (مخزن السقالات والشدات المعدنية)", 
              client: "شركة بايونيرز للصناعات", 
              location: "السادس من أكتوبر", 
              date: "2020",
              image: "/studies/study-5.png"
            },
            { 
              name: "تقرير وصف أنظمة الإنذار ومكافحة الحريق (مصنع عبوات الفوم والبلاستيك)", 
              client: "شركة مصر الحجاز لصناعات وصلات المواسير", 
              location: "العاشر من رمضان", 
              date: "2020",
              image: "/studies/study-4.png"
            }
          ]
        },
        {
          categoryTitle: "تقارير هندسية لفحص وصلاحية الغلايات",
          projects: [
            { 
              name: "تقرير صلاحية غلاية", 
              client: "مصنع فيدميكس إيجيبت للأعلاف", 
              location: "بني سويف", 
              date: "2018",
              image: "/studies/study-3.png"
            },
            { 
              name: "تقرير صلاحية غلاية", 
              client: "شركة بني سويف للأعلاف الحيوانية", 
              location: "بني سويف", 
              date: "2018",
              image: "/studies/study-2.png"
            },
            { 
              name: "تقرير صلاحية غلاية", 
              client: "مصنع كواليتي باك للأحبار", 
              location: "الفيوم", 
              date: "2018",
              image: "/studies/study-1.png"
            }
          ]
        }
      ],
      summaryTableTitle: "ملخص أبرز المشاريع التي شاركت فيها أ.د أسماء حمودة كاستشاري أو خبير بيئي",
      summaryTable: [
        { project: "SUSTAINABLE PERSISTENT ORGANIC POLLUTANTS (POPS) MANAGEMENT PROJECT (SPMP)", years: "2017-2020", funding: "GEF GRANT NUMBER TF017336" },
        { project: "The Industrial Waste Exchange (IWEX) project", years: "2017-2019", funding: "the African Development Bank (AfDB)" },
        { project: "Waste-to-Energy (India/Egypt) PLASTIC TO FUEL (P2F)", years: "2016-2018", funding: "أكاديمية البحث العلمي" },
        { project: "sound management of hazardous Substances and POPs (monitoring of PCBs)", years: "2006-2008", funding: "JICA funded project" },
        { project: "Center of Excellence for water/Beni-Suef University", years: "2019-2025", funding: "USAID funded Project / AUC" },
        { project: "Regional Environmental Management Implementation Project (REMIP)", years: "2000-2008", funding: "JICA" },
        { project: "Egyptian Environmental Policy Program (EEPP) - Inspection Capacity Building", years: "2000-2008", funding: "USAID funded project" },
        { project: "Environmental Pollution Abatement Programs (EPAP I & II)", years: "2000-2007", funding: "FINNAIDA / Finland" },
        { project: "Organization Support Program (OSP) / EEAA", years: "2000-2002", funding: "The project, funded by Denmark" },
        { project: "The Egyptian Environmental Information System (EEIS) / EEAA", years: "1999-2004", funding: "CIDA funded Project" },
        { project: "Sustainable environmental project (EQA - Palestine)", years: "2011-2012", funding: "UNDP funded project" },
        { project: "Support for Environmental Assessment and Management (SEAM) / EEAA", years: "1999-2005", funding: "funded by the UK (DFID)" },
        { project: "Facility for Financing Environmental Protection in Industry", years: "1997-1999", funding: "KfW بنك التعمير الألماني" }
      ],
      partnersTitle: "العملاء والشركاء",
      partners: {
        government: ["وزارة البيئة", "جهاز شئون البيئة (EEAA)", "هيئة التنمية الصناعية"],
        international: ["البنك الدولي", "GEF", "USAID", "UNDP", "JICA", "DANIDA", "FINNAIDA", "CIDA", "AfDB", "KfW", "DFID"],
        industrial: ["الأسمنت", "الكيماويات", "البترول", "النسيج", "الأغذية", "الطاقة"]
      }
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
      rights: "جميع الحقوق محفوظة جاردينيا للاستشارات البيئية © 2026",
      address: "كمبوند أشجار دارنا - عمارة A5 الدور الأول - المعادي - القاهرة"
    }
  }
};