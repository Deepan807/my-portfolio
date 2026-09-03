// All site copy lives here. Edit this file to update content without touching components.
// Anywhere you see a placeholder comment, replace it with your real detail before publishing.

export const profile = {
  name: "Deepan",
  role: "Digital Marketing & SEO Specialist",
  headline: "Turning search data into organic growth.",
  subhead:
    "I'm Deepan — a Digital Marketing professional focused on SEO, website optimization, content strategy, and search performance.",
  bio: "I combine SEO fundamentals with hands-on auditing and industry-standard tools to find opportunities that improve a site's visibility, technical health, content quality, and organic growth.",
  badge: "Open to opportunities",
  photo: "/images/deepan.png",
  // Replace with your real profiles — leave blank to hide from the footer/nav.
  links: {
    linkedin: "",
    email: "",
    github: "",
  },
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export const tools = [
  { name: "Ahrefs", use: "Keyword research, backlink analysis, competitor discovery" },
  { name: "Semrush", use: "Keyword research, competitor analysis, site auditing" },
  { name: "Google Search Console", use: "Search performance, indexing, query-level insight" },
  { name: "Google Analytics 4", use: "Traffic, user behavior, acquisition, performance" },
  { name: "Google Keyword Planner", use: "Keyword discovery and search demand research" },
];

export const skills = [
  {
    number: "01",
    title: "Technical SEO",
    description:
      "Making sure a site can actually be crawled, indexed, and understood before anything else gets optimized.",
    points: ["Crawlability & indexability", "XML sitemaps & robots.txt", "Core Web Vitals & site speed"],
  },
  {
    number: "02",
    title: "On-Page SEO",
    description:
      "Aligning what's on the page with what searchers are actually looking for.",
    points: ["Title tags & meta descriptions", "Heading structure & internal linking", "Keyword placement & search intent"],
  },
  {
    number: "03",
    title: "Content SEO",
    description:
      "Finding the gap between what a site says and what people are searching for — and closing it.",
    points: ["Keyword & topic research", "Content gap analysis", "Keyword mapping & structure"],
  },
  {
    number: "04",
    title: "Off-Page SEO",
    description:
      "Understanding how a site's authority looks from the outside.",
    points: ["Backlink & competitor analysis", "Link quality assessment", "Off-page opportunity mapping"],
  },
];

export const projects = [
  {
    id: "ecommerce",
    title: "E-Commerce SEO Audit",
    category: "Technical SEO · On-Page SEO · Product SEO",
    websiteType: "E-Commerce",
    objective:
      "Evaluate how well product and category pages were set up to be found, crawled, and ranked.",
    process: [
      "Website discovery",
      "Technical analysis",
      "On-page analysis",
      "Content analysis",
      "Off-page analysis",
      "Keyword research",
      "Competitor analysis",
      "Recommendations",
    ],
    findings: [
      { label: "Technical Issue", detail: "Add your finding here." },
      { label: "On-Page Opportunity", detail: "Add your finding here." },
      { label: "Product Page Gap", detail: "Add your finding here." },
      { label: "Keyword Opportunity", detail: "Add your finding here." },
    ],
    recommendations: [
      { priority: "high", text: "Add your recommendation here." },
      { priority: "medium", text: "Add your recommendation here." },
      { priority: "low", text: "Add your recommendation here." },
    ],
    status: "Project data available upon request.",
  },
  {
    id: "blog",
    title: "Blog SEO Audit",
    category: "Content SEO · Keyword Research · On-Page SEO",
    websiteType: "Blog",
    objective:
      "Assess how well existing content matched search intent and where structure was holding it back.",
    process: [
      "Website discovery",
      "Content analysis",
      "Keyword research",
      "On-page analysis",
      "Competitor analysis",
      "Recommendations",
    ],
    findings: [
      { label: "Content Gap", detail: "Add your finding here." },
      { label: "Keyword Opportunity", detail: "Add your finding here." },
      { label: "On-Page Opportunity", detail: "Add your finding here." },
    ],
    recommendations: [
      { priority: "high", text: "Add your recommendation here." },
      { priority: "medium", text: "Add your recommendation here." },
    ],
    status: "Project data available upon request.",
  },
  {
    id: "corporate",
    title: "Corporate Website SEO Audit",
    category: "Technical SEO · On-Page SEO · Content Strategy",
    websiteType: "Corporate",
    objective:
      "Review site architecture and service pages against how prospective clients actually search.",
    process: [
      "Website discovery",
      "Technical analysis",
      "On-page analysis",
      "Content analysis",
      "Keyword research",
      "Recommendations",
    ],
    findings: [
      { label: "Technical Issue", detail: "Add your finding here." },
      { label: "Service Page Gap", detail: "Add your finding here." },
      { label: "Keyword Opportunity", detail: "Add your finding here." },
    ],
    recommendations: [
      { priority: "high", text: "Add your recommendation here." },
      { priority: "medium", text: "Add your recommendation here." },
      { priority: "low", text: "Add your recommendation here." },
    ],
    status: "Project data available upon request.",
  },
];

export const process = [
  { step: "Crawl", description: "Full-site technical crawl and discovery." },
  { step: "Analyze", description: "Technical, on-page, content, and backlink analysis." },
  { step: "Identify", description: "Surface the opportunities and issues that matter." },
  { step: "Prioritize", description: "Rank fixes by impact against effort." },
  { step: "Recommend", description: "Deliver clear, actionable next steps." },
];

export const principles = [
  "I analyze before I optimize.",
  "Every audit starts with search intent.",
  "Data over guesswork.",
  "Small technical fixes often outrank big content bets.",
];

export const learning = ["SEO", "Digital Marketing", "Analytics", "Content Strategy", "Search Trends", "Website Optimization"];

export const insights = [
  // Replace with real posts as you publish them.
  { title: "Coming soon", excerpt: "Write-ups from real audits and SEO experiments will appear here." },
  { title: "Coming soon", excerpt: "Notes on technical SEO, content strategy, and what I'm learning next." },
  { title: "Coming soon", excerpt: "Case studies from ongoing project work." },
];
