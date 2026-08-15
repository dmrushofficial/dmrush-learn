import type { Course } from "@/content/course-types";

export const digitalMarketing: Course = {
  id: "course-digital-marketing",
  slug: "digital-marketing",
  title: "Digital Marketing",
  shortDescription:
    "Plan and run digital marketing across search, social, content, and paid channels.",
  description:
    "A two-month digital marketing program covering strategy, content, social, SEO collaboration, analytics, and introductory paid ads — with campaign-style classroom practice.",
  headline: "Connect channels into one practical marketing system.",
  valueProposition:
    "Learn how search, social, content, and ads work together so you can plan campaigns, measure them, and improve — not just post randomly.",
  category: "Marketing",
  level: "Beginner",
  duration: "2 Months",
  classesPerWeek: 3,
  days: "Tue/Thu/Sun",
  classTime: "3:00–4:30",
  classroom: "Room 2",
  trainingMode: "On-Campus",
  location: "DMRUSH, Pattoki",
  certificate: "DMRUSH Course Completion Certificate",
  metaTitle: "Digital Marketing Course | DMRUSH Learn",
  metaDescription:
    "2-month Digital Marketing at DMRUSH Learn. Content, social, analytics, and intro paid ads. Tue/Thu/Sun, 3:00–4:30.",
  instructor: "Najaf Khan",
  instructorImage: "/images/instructors/najaf-khan.png",
  thumbnail: "/images/courses/visuals/digital-marketing-hero.jpg",
  thumbnailTone: "forest",
  visualTheme: "digital-marketing",
  moduleCount: 2,
  lessonCount: 4,
  assignmentCount: 5,
  enrollmentState: "available",
  progress: 0,
  certificateEligible: false,
  passThresholdPercent: 50,
  aboutWhat: "Channel planning, content, social, measurement, and intro ads.",
  aboutWho: "Beginners entering marketing and business owners who need a practical map.",
  aboutPractice: "Campaign briefs and weekly channel exercises.",
  overview:
    "Digital Marketing covers how demand is created and measured: positioning, content, social, working with SEO, analytics basics, and an introduction to Meta/Google ads — with classroom campaigns you can put in a portfolio.",
  whoFor:
    "Students starting a marketing path, small-business operators, and anyone who needs a channel system rather than isolated tips.",
  whyPractical:
    "You plan and critique real campaign pieces every week — briefs, calendars, and measurement notes.",
  skills: [
    { icon: "🎯", title: "Strategy", description: "Audience, offer, and channel fit." },
    { icon: "📝", title: "Content", description: "Calendars and message systems." },
    { icon: "📱", title: "Social", description: "Organic social with a purpose." },
    { icon: "📊", title: "Analytics", description: "Read basic performance signals." },
    { icon: "📣", title: "Paid intro", description: "Meta and Google ads fundamentals." },
  ],
  learningOutcomes: [
    "Write a simple marketing strategy for a local or online offer",
    "Plan content and social with measurement",
    "Understand how SEO and ads support the same goal",
    "Introduce paid campaigns without overclaiming",
  ],
  curriculum: [
    {
      periodLabel: "Month 1",
      theme: "Foundations",
      modules: [
        {
          title: "Strategy, content & social",
          summary: "Who you are talking to and what you publish.",
          topics: ["Positioning", "Content systems", "Organic social", "Landing page collaboration"],
          assignment: "Classroom practice task",
        },
      ],
    },
    {
      periodLabel: "Month 2",
      theme: "Measure & paid intro",
      modules: [
        {
          title: "Analytics and ads fundamentals",
          summary: "See what worked and introduce paid media safely.",
          topics: ["Analytics basics", "UTMs and reporting", "Meta Ads intro", "Google Ads intro"],
          assignment: "Mini campaign pack",
        },
      ],
    },
  ],
  tools: ["Analytics (concepts)", "Social platforms", "Meta Ads (intro)", "Google Ads (intro)"],
  buildItIntro: "Finish with a campaign pack: audience, content, and measurement notes.",
  practicalTraining: ["Brief writing", "Content calendar labs", "Ads walkthroughs"],
  miniProjects: ["Offer + audience brief", "Two-week content plan", "Ads account tour notes"],
  finalProject: {
    title: "Digital marketing campaign pack",
    description: "Strategy, content plan, and a measurement sheet for one offer.",
  },
  careerOpportunities: ["Junior digital marketer", "Social/content associate", "Small-business marketing ops"],
  relatedCourseSlugs: ["global-seo-mastery", "saas-ai-tools", "shopify-ecommerce"],
  modules: [
    {
      id: "dm-m1",
      title: "Marketing foundations",
      lessons: [
        { id: "dm-l1", title: "Strategy and channels", duration: "15 min", type: "notes" },
        { id: "dm-l2", title: "Content calendar practice", duration: "20 min", type: "worksheet" },
      ],
    },
    {
      id: "dm-m2",
      title: "Measurement & ads intro",
      lessons: [
        { id: "dm-l3", title: "Analytics basics", duration: "14 min", type: "notes" },
        { id: "dm-l4", title: "Paid media fundamentals", duration: "18 min", type: "worksheet" },
      ],
    },
  ],
  faq: [
    {
      question: "Is this an SEO course?",
      answer: "SEO is covered as a collaborating channel. Deep SEO is in Global SEO Mastery and Local SEO Mastery.",
    },
    {
      question: "Will we run live ad spend?",
      answer: "We teach account and campaign fundamentals. Live spend is optional and not included in fees.",
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes, after required attendance and the campaign pack.",
    },
  ],
};
