export interface Exhibit {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export const categories = ["all", "vintage", "mechanical", "mobile", "modern"] as const;

export const categoryLabels: Record<string, string> = {
  all: "All",
  vintage: "Vintage",
  mechanical: "Mechanical",
  mobile: "Mobile",
  modern: "Modern",
};

export const exhibits: Exhibit[] = [
  {
    id: "bell-era",
    title: "The Bell Era",
    description:
      "Original 19th-century wooden wall-mount telephones and liquid transmitters from the dawn of voice communication.",
    category: "vintage",
    image: "vintage-bell",
  },
  {
    id: "switchboard-era",
    title: "The Switchboard Era",
    description:
      "Massive manual exchanges where operators connected the world, from Vilnius's first telephone exchange in 1896.",
    category: "mechanical",
    image: "switchboard",
  },
  {
    id: "mobile-revolution",
    title: "Mobile Revolution",
    description:
      "From 1kg Motorola DynaTAC brick phones of 1973 to the first SMS-capable handsets of the digital age.",
    category: "mobile",
    image: "mobile-revolution",
  },
  {
    id: "cloud-telephony",
    title: "Cloud Telephony",
    description:
      "VoIP and the invisible infrastructure of the 21st century — real-time global communication powered by DIDWW.",
    category: "modern",
    image: "cloud-telephony",
  },
];
