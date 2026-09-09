export interface Translation {
  lang: string;
  langName: string;
  flag: string;
  dir: "ltr" | "rtl";

  meta: {
    title: string;
    description: string;
  };

  nav: {
    exposition: string;
    education: string;
    prices: string;
    visit: string;
    supportUs: string;
  };

  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    cta: string;
    ctaSecondary: string;
  };

  stats: {
    artifacts: string;
    buildingAge: string;
    programs: string;
    annualGuests: string;
  };

  about: {
    label: string;
    title: string;
    visionTitle: string;
    vision: string;
    missionTitle: string;
    mission: string;
    valuesTitle: string;
    values: string[];
    foundingStory: string;
    invitation: string;
  };

  exposition: {
    meta: { title: string; description: string };
    label: string;
    title: string;
    subtitle: string;
    description: string;
    categories: {
      all: string;
      vintage: string;
      mechanical: string;
      mobile: string;
      modern: string;
    };
    exhibits: {
      title: string;
      description: string;
    }[];
    viewDetails: string;
  };

  building: {
    label: string;
    title: string;
    description: string;
    cardTitle: string;
    cardDescription: string;
    facts: string[];
  };

  education: {
    meta: { title: string; description: string };
    label: string;
    title: string;
    description: string;
    programs: {
      title: string;
      grades: string;
      description: string;
    }[];
  };

  prices: {
    meta: { title: string; description: string };
    label: string;
    title: string;
    description: string;
    tickets: {
      type: string;
      detail: string;
      price: string;
    }[];
    freeTitle: string;
    freeItems: string[];
    paymentNote: string;
  };

  visit: {
    meta: { title: string; description: string };
    title: string;
    subtitle: string;
    addressLabel: string;
    hoursLabel: string;
    hoursText: string;
    contactLabel: string;
    ctaButton: string;
  };

  footer: {
    description: string;
    navTitle: string;
    supportTitle: string;
    volunteer: string;
    donateExhibits: string;
    sponsorship: string;
    statute: string;
    copyright: string;
    contact: string;
    bankName: string;
    bankAccount: string;
    entityCode: string;
    entityCodeLabel: string;
    bankAccountLabel: string;
  };

  parama: {
    meta: { title: string; description: string };
    heading: string;
    description: string;
    volunteerTitle: string;
    volunteerDescription: string;
    donateTitle: string;
    donateDescription: string;
    sponsorTitle: string;
    sponsorDescription: string;
    ctaEmail: string;
    bankTitle: string;
    bankDescription: string;
  };

  statute: {
    meta: { title: string; description: string };
    heading: string;
    downloadPdf: string;
    backToHome: string;
    sections: {
      title: string;
      articles: string[];
    }[];
  };
}
