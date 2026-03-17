export type Language = 'en' | 'ar';

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
  details?: {
    en?: string;
    ar?: string;
  };
}

export interface ValueItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ContentData {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    partners?: string;
    fireSystems?: string;
    contact: string;
    langLabel: string;
  };
  hero: {
    title: string;
    titleSuffixes?: string[];
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    mainText: string;
    subText: string;
    introText?: string;
    tagline?: string;
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missionText: string;
    policiesTitle?: string;
    policiesItems?: string[];
    specializationsTitle?: string;
    specializationsItems?: string[];
    addedValueTitle?: string;
    addedValueItems?: string[];
    methodologyTitle?: string;
    methodologyText?: string[];
    expertsTitle?: string;
    expertsIntro?: string;
    expertsItems?: string[];
    drAsmaaTitle?: string;
    drAsmaaBio?: string[];
  };
  values: {
    title: string;
    description: string;
    items: ValueItem[];
  };
  services: {
    title: string;
    description: string;
    items: ServiceItem[];
  };
  fireSystems?: {
    hero: {
      tag: string;
      title: string;
      subtitle: string;
    };
    profile: {
      title: string;
      text: string;
    };
    vision: {
      title: string;
      text: string;
    };
    mission: {
      title: string;
      text: string;
    };
    scope: {
      title: string;
      items: Array<{
        title: string;
        description: string;
        iconName: string;
      }>;
    };
    standards: {
      title: string;
      items: string[];
    };
    leadership: {
      title: string;
      name: string;
      role: string;
      summary: string;
    };
    sectors: {
      title: string;
      items: string[];
    };
    why: {
      title: string;
      items: string[];
    };
    cv: {
      title: string;
      contactLabel: string;
      contact: {
        name: string;
        location: string;
        phone: string;
        emails: string[];
      };
      sections: Array<{
        title: string;
        items: string[];
      }>;
    };
  };
  industries: {
    title: string;
    items: string[];
  };
  whyUs: {
    title: string;
    items: string[];
  };
  projects: {
    title: string;
    description: string;
    items: string[];
    approachTitle: string;
    approachItems: string[];
    caseStudiesTitle?: string;
    caseStudies?: Array<{
      title: string;
      period: string;
      location: string;
      objective: string;
      participation: string;
      details?: string[];
      category: string;
      image?: string;
    }>;
    projectLists?: Array<{
      categoryTitle: string;
      projects: Array<{
        name: string;
        client: string;
        location: string;
        date: string;
        image?: string;
      }>;
    }>;
    summaryTableTitle?: string;
    summaryTable?: Array<{
      project: string;
      years: string;
      funding: string;
    }>;
    partnersTitle?: string;
    partners?: {
      government: string[];
      international: string[];
      industrial: string[];
    };
  };
  partners?: {
    title: string;
    government?: string[];
    international?: string[];
    industries?: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    phoneNumbers?: string[];
    emails?: string[];
    address?: string;
    sendButton: string;
    formName: string;
    formEmail: string;
    formMessage: string;
  };
  footer: {
    rights: string;
    address: string;
  };
  social?: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
    whatsapp?: string;
  };
}
