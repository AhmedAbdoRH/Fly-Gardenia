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
    contact: string;
    langLabel: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    mainText: string;
    subText: string;
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missionText: string;
    methodologyTitle?: string;
    methodologyText?: string;
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
    list?: Array<{
      title: string;
      period?: string;
      location?: string;
      client?: string;
      description?: string;
      category?: string;
    }>;
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
  }
}