export type Instructor = {
  id: string;
  name: string;
  role: string;
  coursesTaught: string[];
  courseIds: string[];
  expertise: string;
  photo: string;
};

export const instructors: Instructor[] = [
  {
    id: "inst-najaf",
    name: "Najaf Khan",
    role: "SEO & Digital Marketing Instructor",
    coursesTaught: ["Global SEO Mastery", "Local SEO Mastery", "Digital Marketing"],
    courseIds: ["course-global-seo", "course-local-seo", "course-digital-marketing"],
    expertise: "SEO · Local search · Digital marketing",
    photo: "/images/instructors/najaf-khan.png",
  },
  {
    id: "inst-usman",
    name: "Usman Raza",
    role: "Web & Ecommerce Instructor",
    coursesTaught: ["Shopify & E-Commerce", "WordPress Website Development", "AI Website Building"],
    courseIds: ["course-shopify", "course-wordpress", "course-ai-website"],
    expertise: "Shopify · WordPress · AI websites",
    photo: "/images/instructors/usman-raza.png",
  },
  {
    id: "inst-tayyab",
    name: "Tayyab Hanif",
    role: "AI Tools Instructor",
    coursesTaught: ["AI Tools & Prompt Engineering", "SaaS-Based AI Tools"],
    courseIds: ["course-ai-tools", "course-saas-ai"],
    expertise: "Prompt systems · SaaS AI · Workflows",
    photo: "/images/instructors/tayyab-hanif.png",
  },
];

export function getInstructorByName(name: string): Instructor | undefined {
  return instructors.find((person) => person.name === name);
}

export function getInstructorByCourseId(courseId: string): Instructor | undefined {
  return instructors.find((person) => person.courseIds.includes(courseId));
}
