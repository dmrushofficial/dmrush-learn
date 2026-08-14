export type InstructorPlaceholder = {
  id: string;
  name: string;
  role: string;
  courseTaught: string;
  expertise: string;
  photo: string | null;
};

/** Placeholder cards until real instructors are provided. */
export const instructors: InstructorPlaceholder[] = [
  {
    id: "inst-1",
    name: "Instructor to be announced",
    role: "SEO Instructor",
    courseTaught: "Global SEO Mastery",
    expertise: "Technical SEO · Content systems",
    photo: null,
  },
  {
    id: "inst-2",
    name: "Instructor to be announced",
    role: "Local SEO Instructor",
    courseTaught: "Local SEO Mastery",
    expertise: "Maps · GBP · Local pages",
    photo: null,
  },
  {
    id: "inst-3",
    name: "Instructor to be announced",
    role: "AI & Web Instructor",
    courseTaught: "AI Website Building",
    expertise: "AI workflows · Web building",
    photo: null,
  },
  {
    id: "inst-4",
    name: "Instructor to be announced",
    role: "AI Tools Instructor",
    courseTaught: "AI Tools & Prompt Engineering",
    expertise: "Prompt systems · AI tooling",
    photo: null,
  },
  {
    id: "inst-5",
    name: "Instructor to be announced",
    role: "Link Building Instructor",
    courseTaught: "Guest Posting & Link Building",
    expertise: "Outreach · Guest posts · Links",
    photo: null,
  },
  {
    id: "inst-6",
    name: "Instructor to be announced",
    role: "Ecommerce Instructor",
    courseTaught: "Shopify & E-commerce",
    expertise: "Shopify · Conversion · Store SEO",
    photo: null,
  },
];
