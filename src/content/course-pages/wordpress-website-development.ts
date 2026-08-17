import type { Course } from "@/content/course-types";

export const wordpressWebsiteDevelopment: Course = {
  id: "course-wordpress",
  slug: "wordpress-website-development",
  title: "WordPress Website Development",
  shortDescription:
    "Build professional WordPress websites with clean structure, SEO foundations, and conversion focus.",
  description:
    "A three-month WordPress program covering setup, themes, pages, plugins, forms, speed, SEO foundations, and a complete student-built website.",
  headline: "Ship client-ready WordPress sites with structure and SEO hygiene.",
  valueProposition:
    "Learn WordPress the way agencies use it: planning, build quality, plugins with restraint, on-page SEO, and a portfolio website you can show.",
  category: "Web",
  level: "Beginner",
  duration: "3 Months",
  classesPerWeek: 3,
  days: "Mon/Wed/Sat",
  classTime: "4:30–6:00",
  classroom: "Room 1",
  trainingMode: "On-Campus",
  location: "DMRUSH, Pattoki",
  certificate: "DMRUSH Course Completion Certificate",
  metaTitle: "WordPress Website Development Course | DMRUSH Learn",
  metaDescription:
    "3-month WordPress Website Development at DMRUSH Learn. Themes, pages, plugins, SEO foundations, and a complete website project. Mon/Wed/Sat, 4:30–6:00.",
  instructor: "Najaf Khan",
  instructorImage: "/images/instructors/najaf-khan.png",
  thumbnail: "/images/courses/visuals/wordpress-hero.jpg",
  thumbnailTone: "sage",
  visualTheme: "wordpress",
  moduleCount: 3,
  lessonCount: 6,
  assignmentCount: 6,
  enrollmentState: "available",
  progress: 0,
  certificateEligible: false,
  passThresholdPercent: 50,
  aboutWhat: "WordPress setup, themes, content, plugins, speed, and SEO foundations.",
  aboutWho: "Beginners, freelancers, and marketers who need to build real websites.",
  aboutPractice: "Weekly site-building labs ending in a complete WordPress site.",
  overview:
    "WordPress Website Development teaches how to plan and ship professional sites: hosting/domain concepts, themes, pages and posts, menus, forms, essential plugins, performance, and on-page SEO — without turning the stack into plugin chaos.",
  whoFor:
    "Students starting web work, freelancers offering site setup, and marketers who need hands-on WordPress.",
  whyPractical:
    "You build toward one complete website. Classroom time is setup, page building, and quality checks — not theory-only.",
  skills: [
    { icon: "🧱", title: "Site setup", description: "Install, themes, and core settings." },
    { icon: "📄", title: "Pages & posts", description: "Clear information architecture." },
    { icon: "🔌", title: "Plugins", description: "Essential tools without bloat." },
    { icon: "🔎", title: "On-page SEO", description: "Titles, headings, and internals." },
    { icon: "⚡", title: "Speed basics", description: "Caching and image hygiene." },
    { icon: "📬", title: "Forms & CTAs", description: "Leads and conversion blocks." },
  ],
  learningOutcomes: [
    "Set up a WordPress site with a clean theme",
    "Build pages, posts, menus, and forms",
    "Choose plugins with a quality checklist",
    "Apply on-page SEO and basic speed work",
    "Deliver a complete WordPress website project",
  ],
  curriculum: [
    {
      periodLabel: "Month 1",
      theme: "Foundation",
      modules: [
        {
          title: "WordPress foundations",
          summary: "How WordPress is structured and how a site gets online.",
          topics: ["CMS basics", "Admin, themes, and settings", "Pages vs posts", "Menus and widgets"],
          assignment: "Classroom practice task",
        },
      ],
    },
    {
      periodLabel: "Month 2",
      theme: "Build",
      modules: [
        {
          title: "Pages, plugins & conversion",
          summary: "Build the customer-facing site with forms and CTAs.",
          topics: ["Page builders / block editor", "Essential plugins", "Contact forms", "Mobile layout checks"],
          assignment: "Classroom practice task",
        },
      ],
    },
    {
      periodLabel: "Month 3",
      theme: "Launch quality",
      modules: [
        {
          title: "SEO, speed & handover",
          summary: "Make the site searchable, fast enough, and client-ready.",
          topics: ["On-page SEO", "Images and caching basics", "Security hygiene", "Handover checklist"],
          assignment: "Complete WordPress website project",
        },
      ],
    },
  ],
  tools: ["WordPress", "A quality theme", "Form plugin", "SEO plugin (concepts)", "Caching (concepts)"],
  buildItIntro: "Each student ships a complete WordPress website as the course project.",
  practicalTraining: ["Theme setup labs", "Page-building sessions", "SEO and speed checklist"],
  miniProjects: ["Service site IA", "Contact + CTA page", "Blog structure"],
  finalProject: {
    title: "Complete WordPress website",
    description: "A branded multi-page site with navigation, forms, and on-page SEO basics.",
  },
  careerOpportunities: ["WordPress freelancer", "Junior web builder", "Agency site-setup associate"],
  relatedCourseSlugs: ["ai-website-building", "global-seo-mastery", "digital-marketing"],
  modules: [
    {
      id: "wp-m1",
      title: "WordPress foundations",
      lessons: [
        { id: "wp-l1", title: "Admin and theme basics", duration: "15 min", type: "notes" },
        { id: "wp-l2", title: "First pages and menu", duration: "20 min", type: "worksheet" },
      ],
    },
    {
      id: "wp-m2",
      title: "Build quality",
      lessons: [
        { id: "wp-l3", title: "Plugins and forms", duration: "15 min", type: "notes" },
        { id: "wp-l4", title: "SEO and speed checklist", duration: "20 min", type: "worksheet" },
      ],
    },
  ],
  faq: [
    {
      question: "Do I need coding experience?",
      answer: "No. We start from the WordPress admin. Helpful computer skills are enough.",
    },
    {
      question: "Will I build a full website?",
      answer: "Yes. The final project is a complete multi-page WordPress site.",
    },
    {
      question: "Are hosting and domain included?",
      answer: "We teach setup workflows. Hosting/domain purchase is separate unless the institute states otherwise.",
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes, after required attendance and project completion.",
    },
  ],
};
