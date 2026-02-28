import type { Translation } from "./types";

export const en: Translation = {
  lang: "en",
  langName: "English",
  flag: "🇬🇧",
  dir: "ltr",

  meta: {
    title: "Telephony Museum — The History You Can Touch",
    description:
      "Explore the evolution of human connection — from drum signals to cloud telephony — in a historic 1907 treasury building in Šiauliai, Lithuania.",
  },

  nav: {
    exposition: "Exposition",
    education: "Education",
    prices: "Prices",
    visit: "Contact",
    supportUs: "Support Us",
  },

  hero: {
    badge: "Founded in Šiauliai",
    titleLine1: "The History",
    titleLine2: "You Can Touch.",
    description:
      "From the first mechanical drum signals to the invisible cloud infrastructure of today. Explore the evolution of human connection in a 1907 historic treasury. We invite you to visit the museum where you will spend time meaningfully and interestingly.",
    cta: "Start the Journey",
    ctaSecondary: "Plan Your Visit",
  },

  stats: {
    artifacts: "Artifacts",
    buildingAge: "Building Age",
    programs: "Programs",
    annualGuests: "Annual Guests",
  },

  about: {
    label: "About Us",
    title: "Our Mission & Values",
    visionTitle: "Vision",
    vision:
      "To preserve and promote the values of telephony technology, and to foster the identity and uniqueness of the cultural heritage site.",
    missionTitle: "Mission",
    mission:
      "To collect, preserve, and present telecommunication devices to the public, introduce the history of telephony, conduct educational excursions for tourists, and organise educational activities for children and youth.",
    valuesTitle: "Values",
    values: [
      "Being interesting and useful to society",
      "Communication and cooperation with city educational institutions and museums",
      "Respect for museum visitors",
      "Continuous improvement",
    ],
    foundingStory:
      "In 2019, the international telecommunications company DIDWW opened one of the few innovative, modern, and historic Telephony Museums in Lithuania.",
    invitation:
      "We invite you to visit the museum where you will spend time meaningfully and interestingly.",
  },

  exposition: {
    meta: {
      title: "Exposition — Telephony Museum",
      description:
        "From drum signals to cloud telephony — explore 1,200+ artifacts tracing the evolution of telecommunications at the Telephony Museum in Šiauliai.",
    },
    label: "The Collection",
    title: "From Drum to Cloud",
    subtitle: "The history you can touch…",
    description:
      "The museum exhibition tells the story of the oldest means of transmitting information — whistling, gongs, bells, drums, fire signals, smoke, messengers, and carrier pigeons. The invention of the telephone is attributed to Alexander Graham Bell (1876). In March 1896, a telephone station began operating in Vilnius. In 1935, a 3,000-number automatic telephone exchange was launched in Klaipėda. Before World War II, Lithuania had 26,000 telephone subscribers. Today we use VoIP systems and cloud telephony — these quality services are successfully developed and provided in Lithuania by the international telecommunications company DIDWW.",
    categories: {
      all: "All",
      vintage: "Vintage",
      mechanical: "Mechanical",
      mobile: "Mobile",
      modern: "Modern",
    },
    exhibits: [
      {
        title: "The Bell Era",
        description:
          "Original 19th-century wooden wall-mount telephones and liquid transmitters from the dawn of voice communication.",
      },
      {
        title: "The Switchboard Era",
        description:
          "Massive manual exchanges where operators connected the world, from Vilnius's first telephone exchange in 1896.",
      },
      {
        title: "Mobile Revolution",
        description:
          "From 1kg Motorola DynaTAC brick phones of 1973 to the first SMS-capable handsets of the digital age.",
      },
      {
        title: "Cloud Telephony",
        description:
          "VoIP and the invisible infrastructure of the 21st century — real-time global communication powered by DIDWW.",
      },
    ],
    viewDetails: "View Details",
  },

  building: {
    label: "Architecture",
    title: "Heritage\nMeets Innovation",
    description:
      "Experience the physical weight of history. The thick brick walls that once guarded gold and currency now house the gold of communication history.",
    cardTitle: "The Treasury House",
    cardDescription:
      "The building is located in the very centre of Šiauliai, in its historical part. It is one of the few surviving historical buildings in Šiauliai. The architect of this building was Stanislovas Kačkovskis. It was built in 1907–1908 and is an early 20th-century historicism structure. Initially, the city treasury — the \"Treasury Vault\" — operated here, a special place where state assets were kept. In 1919, the Šiauliai County Workers' Deputies Council Executive Committee was established in the building; during the interwar period, the Bank of Lithuania Šiauliai branch moved in. From 1998, the independent Lithuanian Savings Bank operated here. In 2008, the building was included in the Cultural Property Register of the Republic of Lithuania. In 2019, the international telecommunications company DIDWW opened the Telephony Museum here.",
    facts: [
      "Early 20th century historicism architecture style",
      "Architect Stanislovas Kačkovskis",
      "Cultural Property Register status since 2008",
      "Located in the historical heart of Šiauliai",
      "Originally functioned as the city treasury — \"Treasury Vault\"",
      "Original vault doors still intact",
    ],
  },

  education: {
    meta: {
      title: "Educational Programs — Telephony Museum",
      description:
        "Discover 12 educational programs for grades 1–12 covering telephony history, mobile photography, cloud technology, and cultural heritage.",
    },
    label: "Education",
    title: "Educational Programs",
    description:
      "Our programs spark curiosity, critical thinking, and a profound appreciation for the technological leaps of the last 150 years. Designed for students of all ages.",
    programs: [
      {
        title: "Telephony History: Turn Back the Time Machine…",
        grades: "Grades 5–8",
        description:
          "Broadens students' cultural horizons, develops creative skills and critical thinking through the history of telephony.",
      },
      {
        title: "Photography in a Mobile Phone",
        grades: "Grades 3–6",
        description:
          "Develops artistic skills necessary for practical life and inspires respect for artistic culture.",
      },
      {
        title: "Cloud Telephony",
        grades: "High school students",
        description:
          "Nurtures students' values, develops general and technological competencies, and introduces the most advanced 21st-century VoIP technology.",
      },
      {
        title: "Modern Phone & Health Diagnostic Apps",
        grades: "Grades 3–6",
        description:
          "Development of students' health literacy, nutrition, and healthy lifestyle skills.",
      },
      {
        title: "Defective Phone",
        grades: "Grades 1–4",
        description:
          "Promotes the values of telephony technology through students' personal experience, artistic abilities, using experiential education activities.",
      },
      {
        title: "Cultural Heritage Building – The Old Treasury of Šiauliai",
        grades: "Grades 5–8",
        description:
          "Broadens students' historical and cultural horizons by presenting the former city treasury and the valuable cultural heritage objects nearby.",
      },
      {
        title: "The Old \"Treasury Vault\" of Šiauliai",
        grades: "Grades 1–4",
        description:
          "Broadens students' historical and cultural horizons by presenting the former city treasury.",
      },
      {
        title: "Telegraph – 19th Century Electrical Communication System",
        grades: "Grades 1–4",
        description:
          "Introduces students to signal transmission diversity and the innovative 19th-century invention — the telegraph.",
      },
      {
        title: "In the Old Šiauliai Treasury: From Ostruble to Euro",
        grades: "High school students",
        description:
          "Introduces Lithuanian currency history from the ostruble to the euro, exploring the old city treasury and its vault.",
      },
      {
        title: "The Phone Rang…",
        grades: "Ages 1–4",
        description:
          "A playful introduction to the world of telephony for the youngest visitors — sounds, shapes, and colours through sensory experience.",
      },
      {
        title: "Remote Educational Program – Defective Phone",
        grades: "Grades 1–4 (remote)",
        description:
          "Remote \"Defective Phone\" program via Zoom — promotes the values of telephony technology through students' personal experience.",
      },
      {
        title: "Remote Cultural Pass Education – Šiauliai City Treasury/Bank",
        grades: "Grades 1–5 (remote)",
        description:
          "Remote Cultural Pass education via Zoom — introduces the Šiauliai city treasury and banking history.",
      },
    ],
  },

  prices: {
    meta: {
      title: "Ticket Prices — Telephony Museum",
      description:
        "Museum admission from 6 EUR. View ticket prices for adults, students, and Cultural Pass groups at the Telephony Museum in Šiauliai.",
    },
    label: "Pricing",
    title: "Ticket Prices",
    description:
      "Visits to the museum and educational activities must be arranged in advance.",
    tickets: [
      {
        type: "Adult",
        detail: "With guide service",
        price: "10",
      },
      {
        type: "Reduced",
        detail: "For a child, pupil, student, senior, or person with a disability, with guide service",
        price: "6",
      },
      {
        type: "Cultural Pass",
        detail:
          "Cultural Pass funded educational program price per pupil (ordered only for pupil groups in the Cultural Education System)",
        price: "4–6",
      },
    ],
    freeTitle: "Free museum admission for:",
    freeItems: [
      "Guides, teachers and their assistants accompanying excursion groups",
      "Children under 2 years of age",
    ],
    paymentNote:
      "At the museum, tickets can be paid for in cash or by bank transfer to the museum's account.",
  },

  visit: {
    meta: {
      title: "Contact & Visit — Telephony Museum",
      description:
        "Plan your visit to the Telephony Museum at Dvaro g. 85-5, Šiauliai. Opening hours, directions, and group visit booking.",
    },
    title: "Contact Us",
    subtitle: "Plan your trip to the centre of Šiauliai.",
    addressLabel: "Address",
    hoursLabel: "Working Hours",
    hoursText:
      "Visits to the museum and educational activities must be arranged in advance.",
    contactLabel: "Email & Phone",
    ctaButton: "Schedule a Group Visit",
  },

  footer: {
    description:
      "Dedicated to preserving the story of communication innovation. A project supported by DIDWW, bringing the history of telephony to the next generation.",
    navTitle: "Navigation",
    supportTitle: "Support",
    volunteer: "Volunteer",
    donateExhibits: "Donate Exhibits",
    sponsorship: "Sponsorship",
    statute: "Statute",
    copyright: "Telephony Museum Šiauliai. Supported by DIDWW.",
    contact: "Contact",
    bankAccountLabel: "Bank account",
    bankName: "Šiaulių bankas",
    bankAccount: "LT477180000007700366",
    entityCodeLabel: "Entity code",
    entityCode: "305196456",
  },

  parama: {
    meta: {
      title: "Support Us — Telephony Museum",
      description:
        "Support the Telephony Museum in Šiauliai — volunteer, donate exhibits, become a sponsor, or make a direct donation.",
    },
    heading: "Support the Museum",
    description:
      "The Telephony Museum preserves the story of human connection — from the first drum signals to cloud telephony. Your support helps us maintain over 1,200 exhibits, run educational programs, and keep this 1907 heritage building alive for future generations.",
    volunteerTitle: "Volunteer",
    volunteerDescription:
      "Help with guided tours, events, and exhibit preservation. Share your passion for history and technology with museum visitors.",
    donateTitle: "Donate Exhibits",
    donateDescription:
      "Own a vintage phone, switchboard, or telecom artifact? Your donation enriches our collection and keeps the history alive.",
    sponsorTitle: "Sponsorship",
    sponsorDescription:
      "Partner with us on exhibitions, educational programs, or cultural events. Gain visibility while supporting Lithuania's telecom heritage.",
    ctaEmail: "Get in Touch",
    bankTitle: "Make a Donation",
    bankDescription:
      "Transfer directly to the museum account:",
  },

  statute: {
    meta: {
      title: "Statute — Public Institution Telephony Museum",
      description:
        "Official bylaws of Public Institution Telephony Museum (Viešoji įstaiga Telefonijos muziejus).",
    },
    heading: "Statute of the Public Institution Telephony Museum",
    downloadPdf: "Download PDF",
    backToHome: "Back to Home",
    sections: [
      {
        title: "I. General Provisions",
        articles: [
          "1. The Public Institution Telephony Museum (hereinafter referred to as the Institution) is a public legal entity of limited civil liability, which in its activities is governed by these articles of association, the Civil Code of the Republic of Lithuania, the Law on Public Institutions of the Republic of Lithuania (hereinafter referred to as the Law on Public Institutions), other laws of the Republic of Lithuania, and other legal acts.",
          "2. The legal form of the Institution is a public institution.",
          "3. The period of activity of the Institution is unlimited.",
          "4. The financial year of the Institution is 01-01 to 12-31.",
        ],
      },
      {
        title: "II. Goals of the Institution's Activities",
        articles: [
          "5. The goals of the Institution's activities:\n- to promote museum values — to collect, preserve, and present telecommunication devices to the public, to introduce the history of telephony, to conduct educational excursions for tourists and museum visitors, to organise educational activities for children and youth;\n- to popularise telephony;\n- to present to the public the historic building of the Telephony Museum (the former city treasury), a cultural heritage site;\n- to organise changing exhibitions and cultural events;\n- to participate in various regional and national museum programmes.\n5.1. In implementing its main objective, the Institution carries out the following activities:\n- collects and accumulates exhibits of museum value and carries out cultural exchanges;\n- forms collections of exhibits, maintains their records, and ensures proper storage conditions;\n- conducts research and educational work, prepares expositions, exhibitions, cultural events, publications, excursions, lectures, and carries out educational activities;\n- organises creative leisure and cultural events;\n- submits educational programme applications to the Student Cultural Passport selection competition;\n- submits educational programme applications to receive the student basket funding;\n- maintains relations with similar organisations in the Republic of Lithuania and other countries.\n5.2. Areas of activity: activities of other membership organisations not elsewhere classified (94.99); operation of historical sites and buildings and similar visitor attractions (91.03); museum activities (91.02); creative, arts, and entertainment activities (90.0); cultural education (85.52); other education not elsewhere classified (85.59); organisation of conventions and trade shows (82.30); tour operator activities (79.12); other reservation service and related activities (79.9); advertising agency activities (73.11); motion picture projection activities (59.14); retail sale of books in specialised stores (47.61); retail sale of music and video recordings in specialised stores (47.63); other retail sale of new goods in specialised stores (47.78); specialised retail sale of souvenirs, craftwork, and religious articles (47.78).\n5.3. The Institution has the right to engage in other economic-commercial activities not mentioned herein and not prohibited by law, which is inseparably related to its activity goals.\n5.4. The Institution carries out its activities in Lithuania and, in accordance with the procedure established by law, abroad. Activities for which a licence (permit) is required by law may be carried out by the Institution only after obtaining the relevant licence (permit).",
        ],
      },
      {
        title: "III. Procedure for Admission of New Shareholders",
        articles: [
          "6. New shareholders are admitted by a resolution of the general meeting of shareholders. The resolution of the general meeting of shareholders shall also specify the minimum amount of the contribution to the shareholders' capital of the Institution by the person wishing to become a shareholder — the amount (if the contribution is monetary) or the value (if the contribution is tangible or intangible property, as well as tangible or intangible property and money).",
          "7. A person wishing to become a new shareholder of the Institution shall submit an application to the head of the Institution.",
          "8. The person's application must contain information about the person (for a natural person: name, surname, personal identification number, place of residence or correspondence address; for a legal entity: name, legal form, code, registered office, representative's name and surname), an expressed approval of the Institution's activity goals, and the amount of the person's intended contribution to the shareholders' capital of the Institution, which may not be less than the amount established by the general meeting of shareholders.",
          "9. If the person's contribution to the shareholders' capital is to be made in tangible or intangible property, a valuation report of such property shall be submitted together with the application.",
          "10. Once the general meeting of shareholders adopts a resolution to admit a new shareholder, the person who wished to become a shareholder becomes one upon transferring the contribution specified in their application to the Institution.",
        ],
      },
      {
        title: "IV. Procedure for Transfer of Shareholder Rights to Other Persons",
        articles: [
          "11. A person who has acquired shareholder rights shall submit a document confirming the acquisition of the Institution's shareholder rights to the head of the Institution.",
          "12. Upon receiving a document confirming the acquisition of the Institution's shareholder rights, the head of the Institution shall register the new shareholder and the value of their contribution in the Institution's documents.",
          "13. A person who has acquired shareholder rights becomes a shareholder of the Institution from the moment specified in the document confirming the acquisition of shareholder rights.",
          "14. The number of votes of the new shareholder in exercising their right to vote at the general meeting of shareholders corresponds to the number of votes held by the shareholder who transferred their shareholder rights.",
        ],
      },
      {
        title: "V. Procedure for Transfer of Shareholder Contributions to the Institution",
        articles: [
          "15. Shareholder contributions are transferred to the Institution in the following manner:\n15.1. Money is deposited into the Institution's account.\n15.2. Tangible and intangible property is transferred to the Institution by drawing up an asset transfer act. The act is signed by the person transferring the property (founder, shareholder, or person wishing to become a shareholder) and the head of the Institution. A valuation report of the property shall be submitted together with the transferred property. The property valuation is carried out at the shareholder's expense.",
        ],
      },
      {
        title: "VI. Bodies of the Institution",
        articles: [
          "16. The bodies of the Institution are the general meeting of shareholders and the sole management body — the head of the Institution.",
          "17. The competence of the general meeting of shareholders, as well as the procedure for appointment and dismissal of the head of the Institution and their competence, do not differ from those specified in the Law on Public Institutions.",
          "18. The general meeting of shareholders shall be convened at least once a year. The head of the Institution is responsible for convening the general meeting of shareholders. The head of the Institution shall notify each shareholder of the convening of the general meeting of shareholders no later than 20 days before the date of the meeting by sending a registered letter to the address indicated by the shareholder to the Institution, by delivering the notice against signature, or by electronic means of communication. The general meeting of shareholders may be convened without observing this deadline if all shareholders consent to this in writing.",
          "19. At the general meeting of shareholders, each shareholder has one vote.",
          "20. Resolutions of the general meeting of shareholders are adopted by a simple majority of votes of the shareholders present at the meeting, except for the following resolutions, which are adopted by no less than 2/3 of the votes of all shareholders present at the meeting:\n20.1. a resolution on the reorganisation of the Institution and the approval of the reorganisation conditions;\n20.2. a resolution to convert the Institution;\n20.3. a resolution to liquidate the Institution or to revoke its liquidation;\n20.4. a resolution on the transfer, lease, lending under a loan-for-use agreement, or pledging of long-term assets owned by the Institution.",
          "21. If the Institution has only one shareholder, that shareholder is called the owner of the Institution and their written decisions are equivalent to the resolutions of the general meeting of shareholders.",
        ],
      },
      {
        title: "VII. Procedure for Establishing Branches and Representative Offices and Terminating Their Activities",
        articles: [
          "22. Decisions to establish branches and representative offices of the Institution, to terminate their activities, as well as to approve the regulations of branches and representative offices, are made by the head of the Institution.",
        ],
      },
      {
        title: "VIII. Procedure for Providing Documents and Other Information About the Institution's Activities to Shareholders",
        articles: [
          "23. At the written request of a shareholder, no later than within 7 days from the date of receipt of the request, the Institution's documents shall be made available for review to the shareholder during the Institution's working hours at its registered office or at another location designated by the head of the Institution where the documents are kept. Copies of these documents may be sent to the shareholder by registered letter to the address indicated by the shareholder to the Institution, or delivered against signature or by electronic means of communication.",
          "24. The Institution's documents, their copies, or other information is provided to shareholders free of charge.",
        ],
      },
      {
        title: "IX. Procedure for Publication of Notices and Announcements",
        articles: [
          "25. When the Institution's notices must be published publicly, they shall be published in the electronic publication \"Public Notices of Legal Entities\" issued by the State Enterprise Centre of Registers.",
          "26. Other notices of the Institution to shareholders and other persons shall be sent by registered letter or delivered against signature or by electronic means of communication. When notices are sent to a shareholder by registered letter, they shall be sent to the address indicated by the shareholder to the Institution. Urgent notices may be transmitted by electronic means of communication, with the originals sent to the addressee by registered letter or delivered against signature on the same day.",
          "27. The head of the Institution is responsible for the timely dispatch of notices or their delivery against signature.",
        ],
      },
      {
        title: "X. Procedure for Providing Information About the Institution's Activities to the Public",
        articles: [
          "28. The Institution's activity report, as well as other information to be provided to the public as determined by the general meeting of shareholders, shall be published on the Institution's website. If the Institution does not have a website, the Institution's activity report and information shall be made available at the Institution's registered office during working hours.",
        ],
      },
      {
        title: "XI. Procedure for Amendment of the Statute",
        articles: [
          "29. The procedure for amending the statute does not differ from that specified in the Law on Public Institutions.",
          "30. If it becomes apparent that the statute contains provisions that contradict the Law on Public Institutions and other laws, the statute must be amended.",
        ],
      },
    ],
  },
};
