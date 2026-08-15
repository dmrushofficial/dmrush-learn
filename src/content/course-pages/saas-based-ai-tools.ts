import type { Course } from "@/content/course-types";

export const saasBasedAiTools: Course = {
  id: "course-saas-ai",
  slug: "saas-ai-tools",
  title: "SaaS-Based AI Tools",
  shortDescription:
    "Apply SaaS AI platforms for research, content, automation, and team workflows.",
  description:
    "A one-month practical course on selecting and using SaaS AI products — research, content, automation, and quality control — so you can run real work across multiple apps.",
  headline: "Use AI SaaS tools as a connected production stack, not random apps.",
  valueProposition:
    "Learn which AI SaaS tools fit research, writing, design, and automation jobs — then connect them into simple workflows you can repeat at work.",
  category: "AI",
  level: "Beginner",
  duration: "1 Month",
  classesPerWeek: 3,
  days: "Tue/Thu/Sun",
  classTime: "1:30–3:00",
  classroom: "Room 2",
  trainingMode: "On-Campus",
  location: "DMRUSH, Pattoki",
  certificate: "DMRUSH Course Completion Certificate",
  metaTitle: "SaaS-Based AI Tools Course | DMRUSH Learn",
  metaDescription:
    "1-month SaaS-Based AI Tools at DMRUSH Learn. Research, content, automation, and workflow practice. Tue/Thu/Sun, 1:30–3:00.",
  instructor: "Tayyab Hanif",
  instructorImage: "/images/instructors/tayyab-hanif.png",
  thumbnail: "/images/courses/visuals/saas-ai-hero.jpg",
  thumbnailTone: "olive",
  visualTheme: "saas-ai",
  moduleCount: 1,
  lessonCount: 2,
  assignmentCount: 3,
  enrollmentState: "available",
  progress: 0,
  certificateEligible: false,
  passThresholdPercent: 50,
  aboutWhat: "SaaS AI products for research, content, and light automation.",
  aboutWho: "Marketers, operators, and students who will use many AI apps at work.",
  aboutPractice: "Tool labs and a personal SaaS AI workflow map.",
  overview:
    "SaaS-Based AI Tools is a short, hands-on program: evaluate AI products, run research and content jobs, automate repetitive steps where it is safe, and keep a quality bar so outputs are usable.",
  whoFor:
    "Professionals and students who already tried ChatGPT and now need a broader SaaS AI toolkit.",
  whyPractical:
    "Class time is product practice and workflow building — not vendor marketing slides.",
  skills: [
    { icon: "🧰", title: "Tool selection", description: "Pick the right SaaS AI for the job." },
    { icon: "🔍", title: "Research", description: "Faster briefing with source checks." },
    { icon: "✍️", title: "Content ops", description: "Draft, edit, and brand-safe reuse." },
    { icon: "🔗", title: "Light automation", description: "Connect steps without breaking quality." },
  ],
  learningOutcomes: [
    "Map common SaaS AI categories to real tasks",
    "Run research and content workflows with QA",
    "Document a personal AI SaaS stack",
  ],
  curriculum: [
    {
      periodLabel: "Month 1",
      theme: "Stack & workflows",
      modules: [
        {
          title: "SaaS AI landscape",
          summary: "Categories, evaluation, and when not to use a tool.",
          topics: ["Research tools", "Writing/design assistants", "Automation basics", "Privacy and quality"],
          assignment: "Classroom practice task",
        },
        {
          title: "Connected workflows",
          summary: "String tools into a repeatable production path.",
          topics: ["Brief → draft → edit", "Asset generation with checks", "Handoff to WordPress/Shopify/SEO work"],
          assignment: "Personal SaaS AI workflow map",
        },
      ],
    },
  ],
  tools: ["Major AI assistants", "Research SaaS", "Content SaaS", "Light automation (concepts)"],
  buildItIntro: "Leave with a documented SaaS AI stack you can run after class.",
  practicalTraining: ["Tool comparison labs", "Workflow mapping", "Output critique"],
  miniProjects: ["Research brief pack", "Content batch with QA", "Automation sketch"],
  finalProject: {
    title: "SaaS AI workflow pack",
    description: "A written stack + 3 repeatable workflows with quality checks.",
  },
  careerOpportunities: ["Marketing ops", "AI-assisted producer", "Agency workflow associate"],
  relatedCourseSlugs: ["ai-tools-prompt-engineering", "digital-marketing", "ai-website-building"],
  modules: [
    {
      id: "saas-m1",
      title: "SaaS AI practice",
      lessons: [
        { id: "saas-l1", title: "Tool categories and evaluation", duration: "14 min", type: "notes" },
        { id: "saas-l2", title: "Build one connected workflow", duration: "22 min", type: "worksheet" },
      ],
    },
  ],
  faq: [
    {
      question: "Is this the same as AI Tools & Prompt Engineering?",
      answer:
        "No. Prompt Engineering goes deep on prompting systems. This course is a shorter pass across SaaS AI products and how they connect.",
    },
    {
      question: "Do I need paid subscriptions?",
      answer: "We teach with free/trial options where possible. Paid plans are not included unless stated.",
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes, after required attendance and the workflow pack.",
    },
  ],
};
