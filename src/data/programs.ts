export interface Program {
  title: string;
  grades: string;
  description: string;
  icon: string;
}

export const programs: Program[] = [
  {
    title: "Turn Back the Time Machine",
    grades: "Grades 5–8",
    description:
      "Broadens students' cultural knowledge, develops creative skills and critical thinking through the history of telephony.",
    icon: "history",
  },
  {
    title: "Photography in a Mobile Phone",
    grades: "Grades 3–6",
    description:
      "Develops artistic skills necessary for practical life and inspires respect for artistic culture.",
    icon: "camera",
  },
  {
    title: "Cloud Telephony & VoIP",
    grades: "Grades 9–12",
    description:
      "Nurtures values, develops technological competencies, and introduces the most advanced 21st-century communication technology.",
    icon: "globe",
  },
  {
    title: "Modern Phone & Health Apps",
    grades: "Grades 3–6",
    description:
      "Develops literacy skills in health, nutrition, and healthy lifestyles through modern mobile technology.",
    icon: "heart",
  },
  {
    title: "Defective Phone",
    grades: "Grades 5–8",
    description:
      "Promotes the values of telephony technology through personal experience and artistic abilities using experiential education.",
    icon: "zap",
  },
  {
    title: "The Old Treasury of Šiauliai",
    grades: "Grades 5–8",
    description:
      "Expands historical and cultural views by exploring the former city treasury and valuable cultural heritage objects.",
    icon: "building",
  },
  {
    title: "Treasury House for Young Explorers",
    grades: "Grades 1–4",
    description:
      "Introduces young students to the historical and cultural significance of the former city treasury building.",
    icon: "star",
  },
  {
    title: "The Telegraph",
    grades: "Grades 1–4",
    description:
      "Introduces signal transmission diversity and the innovative 19th-century invention — the electric telegraph.",
    icon: "signal",
  },
];
