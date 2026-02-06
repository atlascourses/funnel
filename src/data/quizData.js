export const PROFILES = {
  SKILL: {
    id: "SKILL",
    title: "Skill-Based Service Builder",
    businessId: "Bespoke freelance services agency (e.g., web design or copy)",
    whyItFits: "You prefer working directly with clients to solve specific problems using your existing expertise. This model allows for high-ticket services and strong professional relationships.",
    hustle1: "Freelance micro-gigs (Upwork, Fiverr)",
    hustle2: "Consulting sessions",
    steps: [
      "Define your specific high-value skill and target niche.",
      "Build a simple portfolio or case study document.",
      "Reach out to 5 potential clients or join specialized platforms."
    ]
  },
  CONTENT: {
    id: "CONTENT",
    title: "Content & Audience Creator",
    businessId: "Niche YouTube/Instagram business with monetization",
    whyItFits: "You enjoy building long-term assets, storytelling, and connecting with a community. Your strength lies in creating value through media and influence.",
    hustle1: "Paid newsletter",
    hustle2: "Affiliate micro-content",
    steps: [
      "Identify a topic you enjoy and that has high audience demand.",
      "Commit to a 30-day consistent posting schedule on one platform.",
      "Engage with existing communities to build your initial following."
    ]
  },
  LOCAL: {
    id: "LOCAL",
    title: "Low-Risk Local Service",
    businessId: "Neighborhood service business (dog walking + errands)",
    whyItFits: "You prefer active, physical work with fast returns. This is perfect for someone who wants to avoid high setup costs and start earning immediately.",
    hustle1: "Task app work (TaskRabbit)",
    hustle2: "Event assistant work",
    steps: [
      "Identify 2-3 common needs in your local neighborhood.",
      "Print simple flyers or post on local community groups (Nextdoor/Facebook).",
      "Focus on providing exceptional service to get your first referrals."
    ]
  },
  SELL_SCALE: {
    id: "SELL_SCALE",
    title: "Sell + Scale Product",
    businessId: "Ecommerce micro-brand (print-on-demand)",
    whyItFits: "You are market-oriented and enjoy spotting trends. You prefer a model where you sell products to buyers rather than trading time for money.",
    hustle1: "Reselling used goods online",
    hustle2: "Dropshipping test store",
    steps: [
      "Research a trending niche with low competition on Amazon/Etsy.",
      "Create 5 unique designs or sourcing products for your initial store.",
      "Set up a Shopify or Etsy storefront and run small test ads."
    ]
  },
  CREATIVE: {
    id: "CREATIVE",
    title: "Creative/Artistic Entrepreneur",
    businessId: "Digital product store (printables, presets)",
    whyItFits: "You value creative flow and unique expression. Your best path is creating artistic assets once and selling them multiple times.",
    hustle1: "Commissioned artwork",
    hustle2: "Template packs",
    steps: [
      "Select your most popular creative style or asset type.",
      "Create a bundle of 5-10 digital products (presets/templates).",
      "Launch an Instagram/TikTok showcasing the behind-the-scenes creation."
    ]
  },
  TECH: {
    id: "TECH",
    title: "Tech / Automation Opportunity",
    businessId: "Automation consulting + simple SaaS tooling",
    whyItFits: "You are a logical optimizer who enjoys building systems. You thrive on technical leverage and creating value through automation.",
    hustle1: "No-code builds for clients",
    hustle2: "Chatbot/automation setup services",
    steps: [
      "Master a no-code tool like Make.com, Zapier, or Softr.",
      "Identify a common repetitive task in small businesses.",
      "Create a demo automation that solves this task and pitch it to owners."
    ]
  }
};

export const QUESTIONS = [
  {
    text: "How do you prefer to work?",
    options: [
      { text: "Selling products online", profile: "SELL_SCALE" },
      { text: "With clients, solving problems", profile: "SKILL" },
      { text: "Building tools/systems", profile: "TECH" },
      { text: "Creating content + building an audience", profile: "CONTENT" },
      { text: "In person, local tasks", profile: "LOCAL" },
      { text: "Making unique/creative work", profile: "CREATIVE" }
    ]
  },
  {
    text: "What matters most to you in a side income?",
    options: [
      { text: "Expression/creativity", profile: "CREATIVE" },
      { text: "Use skills I already have", profile: "SKILL" },
      { text: "Technical leverage", profile: "TECH" },
      { text: "Fast & local", profile: "LOCAL" },
      { text: "Build a brand/following", profile: "CONTENT" },
      { text: "Scalability", profile: "SELL_SCALE" }
    ]
  },
  {
    text: "How much startup cash do you have?",
    options: [
      { text: "Very little", profile: "LOCAL" },
      { text: "$50–$200", profile: "CREATIVE" },
      { text: "$200–$500", profile: "SELL_SCALE" },
      { text: "$500+", profile: "TECH" },
      { text: "I’d rather use skills than money", profile: "SKILL" },
      { text: "I’d rather build something long term", profile: "CONTENT" }
    ]
  },
  {
    text: "How much time can you commit weekly?",
    options: [
      { text: "5–10 hrs", profile: "LOCAL" },
      { text: "10–15 hrs", profile: "CREATIVE" },
      { text: "15–20 hrs", profile: "SKILL" },
      { text: "20+ hrs", profile: "CONTENT" },
      { text: "Flexible but structured", profile: "SELL_SCALE" },
      { text: "I like building systems", profile: "TECH" }
    ]
  },
  {
    text: "Which sounds most like you?",
    options: [
      { text: "I like logic puzzles", profile: "TECH" },
      { text: "I enjoy artistic exploration", profile: "CREATIVE" },
      { text: "I like physical, active work", profile: "LOCAL" },
      { text: "I love drama-free creative flow", profile: "CONTENT" },
      { text: "I’m good at spotting trends", profile: "SELL_SCALE" },
      { text: "I like solving real problems for people", profile: "SKILL" }
    ]
  },
  {
    text: "What’s your risk tolerance?",
    options: [
      { text: "Low", profile: "LOCAL" },
      { text: "Moderate", profile: "SKILL" },
      { text: "High", profile: "SELL_SCALE" },
      { text: "I don’t mind long development", profile: "TECH" },
      { text: "Depends on vision", profile: "CONTENT" },
      { text: "Creative risk is fun", profile: "CREATIVE" }
    ]
  },
  {
    text: "How fast do you want income?",
    options: [
      { text: "Very fast", profile: "LOCAL" },
      { text: "Within a month", profile: "SKILL" },
      { text: "1–3 months", profile: "SELL_SCALE" },
      { text: "Long-term, compounding", profile: "CONTENT" },
      { text: "Project-by-project", profile: "CREATIVE" },
      { text: "Depends on results", profile: "TECH" }
    ]
  },
  {
    text: "Pick the best phrase:",
    options: [
      { text: "“Make things that feel unique”", profile: "CREATIVE" },
      { text: "“Solve tasks for others”", profile: "LOCAL" },
      { text: "“Help people with what I know”", profile: "SKILL" },
      { text: "“Sell products to buyers”", profile: "SELL_SCALE" },
      { text: "“Build tools that help growth”", profile: "TECH" },
      { text: "“Tell my story, connect”", profile: "CONTENT" }
    ]
  },
  {
    text: "What’s your strongest skill?",
    options: [
      { text: "Art/design", profile: "CREATIVE" },
      { text: "Trend spotting/marketing", profile: "SELL_SCALE" },
      { text: "Tech/automation", profile: "TECH" },
      { text: "Physical tasks/people", profile: "LOCAL" },
      { text: "Communication/consulting", profile: "SKILL" },
      { text: "Content creation", profile: "CONTENT" }
    ]
  },
  {
    text: "I’d rather…",
    options: [
      { text: "Work with clients directly", profile: "SKILL" },
      { text: "Grow an audience", profile: "CONTENT" },
      { text: "Build systems", profile: "TECH" },
      { text: "Analyze markets", profile: "SELL_SCALE" },
      { text: "Make art", profile: "CREATIVE" },
      { text: "Be outside/active", profile: "LOCAL" }
    ]
  },
  {
    text: "Your dream output is…",
    options: [
      { text: "Unique creations", profile: "CREATIVE" },
      { text: "Happy paying clients", profile: "SKILL" },
      { text: "Automated value streams", profile: "TECH" },
      { text: "Reliable local gigs", profile: "LOCAL" },
      { text: "A product people buy", profile: "SELL_SCALE" },
      { text: "A community of followers", profile: "CONTENT" }
    ]
  },
  {
    text: "Which describes you best?",
    options: [
      { text: "Curious storyteller", profile: "CONTENT" },
      { text: "Expressive thinker", profile: "CREATIVE" },
      { text: "Practical & reliable", profile: "LOCAL" },
      { text: "Logical optimizer", profile: "TECH" },
      { text: "Ambitious with clarity", profile: "SKILL" },
      { text: "Market-oriented", profile: "SELL_SCALE" }
    ]
  },
  {
    text: "If you had to choose one, which constraint matters most right now?",
    options: [
      { text: "I want creative freedom", profile: "CREATIVE" },
      { text: "I want leverage & automation", profile: "TECH" },
      { text: "I want scalable revenue", profile: "SELL_SCALE" },
      { text: "I want predictable income", profile: "SKILL" },
      { text: "I want long-term upside", profile: "CONTENT" },
      { text: "I need money fast", profile: "LOCAL" }
    ]
  }

];
