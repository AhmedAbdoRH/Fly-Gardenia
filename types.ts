export type Language = 'en' | 'ar';

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface ContentData {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
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
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
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