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
    role: "SEO, Marketing & Web Instructor",
    coursesTaught: [
      "Global SEO Mastery",
      "Shopify & E-Commerce",
      "WordPress Website Development",
      "Digital Marketing",
    ],
    courseIds: ["course-global-seo", "course-shopify", "course-wordpress", "course-digital-marketing"],
    expertise: "Global SEO · Shopify · WordPress · Digital marketing",
    photo: "/images/instructors/najaf-khan.png",
  },
  {
    id: "inst-usman",
    name: "Usman Raza",
    role: "AI & Local SEO Instructor",
    coursesTaught: [
      "Local SEO Mastery",
      "AI Tools & Prompt Engineering",
      "SaaS-Based AI Tools",
      "AI Website Building",
    ],
    courseIds: ["course-local-seo", "course-ai-tools", "course-saas-ai", "course-ai-website"],
    expertise: "Local SEO · AI tools · SaaS · AI websites",
    photo: "/images/instructors/usman-raza.png",
  },
];

export function getInstructorByName(name: string): Instructor | undefined {
  return instructors.find((person) => person.name === name);
}

export function getInstructorByCourseId(courseId: string): Instructor | undefined {
  return instructors.find((person) => person.courseIds.includes(courseId));
}
