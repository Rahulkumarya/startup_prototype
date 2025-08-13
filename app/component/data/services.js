export const serviceTypes = [
  {
    key: "web",
    title: "Web Development",
    description:
      "Responsive, SEO-friendly websites built with Next.js, React, and modern tooling.",
    icon: "🌐",
  },
  {
    key: "mobile",
    title: "Mobile Apps",
    description:
      "Cross‑platform iOS & Android apps using React Native and Flutter.",
    icon: "📱",
  },
  {
    key: "ai",
    title: "AI / ML",
    description:
      "Custom AI models, LLM integrations, and smart automation for your product.",
    icon: "🧠",
  },
  {
    key: "devops",
    title: "DevOps & Cloud",
    description:
      "CI/CD pipelines, Docker, Kubernetes, and cloud deployments on AWS/Azure/GCP.",
    icon: "☁️",
  },
  {
    key: "uiux",
    title: "UI / UX Design",
    description:
      "User‑centered design systems, wireframes, and polished interfaces.",
    icon: "🎨",
  },
  {
    key: "ecommerce",
    title: "E‑commerce",
    description:
      "Scalable storefronts with secure payments and robust product catalogs.",
    icon: "🛒",
  },
];

export const packagesByType = {
  web: [
    {
      tier: "Basic",
      priceMonthly: 199,
      subtitle: "Landing page or portfolio",
      features: [
        "1‑3 pages",
        "Responsive layout",
        "Basic SEO",
        "Contact form",
      ],
      cta: "Start Web Basic",
    },
    {
      tier: "Standard",
      priceMonthly: 599,
      subtitle: "Business website",
      features: [
        "Up to 10 pages",
        "Blog & CMS",
        "On‑page SEO",
        "Analytics setup",
      ],
      highlighted: true,
      cta: "Start Web Standard",
    },
    {
      tier: "Advanced",
      priceMonthly: 1299,
      subtitle: "Custom app / integrations",
      features: [
        "Custom components",
        "API integration",
        "Performance audit",
        "Priority support",
      ],
      cta: "Start Web Advanced",
    },
  ],
  mobile: [
    {
      tier: "Basic",
      priceMonthly: 399,
      subtitle: "MVP prototype",
      features: ["Single platform", "Auth", "Core screens", "Store setup"],
      cta: "Start Mobile Basic",
    },
    {
      tier: "Standard",
      priceMonthly: 899,
      subtitle: "Cross‑platform app",
      features: [
        "iOS & Android",
        "Offline support",
        "Push notifications",
        "Crash analytics",
      ],
      highlighted: true,
      cta: "Start Mobile Standard",
    },
    {
      tier: "Advanced",
      priceMonthly: 1799,
      subtitle: "Scale & performance",
      features: [
        "Custom native modules",
        "CI/CD for apps",
        "A/B testing",
        "Monitoring & SLOs",
      ],
      cta: "Start Mobile Advanced",
    },
  ],
  ai: [
    {
      tier: "Basic",
      priceMonthly: 499,
      subtitle: "LLM assistant",
      features: ["Chatbot", "Embeddings search", "Guardrails", "Logging"],
      cta: "Start AI Basic",
    },
    {
      tier: "Standard",
      priceMonthly: 1199,
      subtitle: "Fine‑tuning & workflows",
      features: [
        "RAG pipeline",
        "Fine‑tuning",
        "Vector DB",
        "Evaluation suite",
      ],
      highlighted: true,
      cta: "Start AI Standard",
    },
    {
      tier: "Advanced",
      priceMonthly: 2499,
      subtitle: "Production AI",
      features: [
        "Latency optimization",
        "Cost controls",
        "Observability",
        "Safety reviews",
      ],
      cta: "Start AI Advanced",
    },
  ],
  devops: [
    {
      tier: "Basic",
      priceMonthly: 299,
      subtitle: "Starter CI/CD",
      features: ["GitHub Actions", "Docker", "Staging env", "Backups"],
      cta: "Start DevOps Basic",
    },
    {
      tier: "Standard",
      priceMonthly: 799,
      subtitle: "Kubernetes & scaling",
      features: [
        "K8s cluster",
        "Autoscaling",
        "Monitoring",
        "Alerting",
      ],
      highlighted: true,
      cta: "Start DevOps Standard",
    },
    {
      tier: "Advanced",
      priceMonthly: 1799,
      subtitle: "Multi‑cloud & SRE",
      features: [
        "Multi‑region",
        "Disaster recovery",
        "SLO/SLI setup",
        "Security hardening",
      ],
      cta: "Start DevOps Advanced",
    },
  ],
  uiux: [
    {
      tier: "Basic",
      priceMonthly: 149,
      subtitle: "Wireframes",
      features: ["Lo‑fi wireframes", "User flows", "Style guide", "Handoff"],
      cta: "Start Design Basic",
    },
    {
      tier: "Standard",
      priceMonthly: 499,
      subtitle: "Design system",
      features: [
        "Hi‑fi mockups",
        "Component library",
        "Prototyping",
        "Design tokens",
      ],
      highlighted: true,
      cta: "Start Design Standard",
    },
    {
      tier: "Advanced",
      priceMonthly: 999,
      subtitle: "UX research",
      features: [
        "User interviews",
        "Usability tests",
        "Analytics review",
        "Conversion audit",
      ],
      cta: "Start Design Advanced",
    },
  ],
  ecommerce: [
    {
      tier: "Basic",
      priceMonthly: 299,
      subtitle: "Starter store",
      features: ["Product catalog", "Checkout", "Email receipts", "SEO"],
      cta: "Start Store Basic",
    },
    {
      tier: "Standard",
      priceMonthly: 899,
      subtitle: "Growth storefront",
      features: [
        "Inventory",
        "Coupons",
        "Analytics",
        "Multi‑currency",
      ],
      highlighted: true,
      cta: "Start Store Standard",
    },
    {
      tier: "Advanced",
      priceMonthly: 1999,
      subtitle: "Enterprise commerce",
      features: [
        "Headless API",
        "OMS integration",
        "Personalization",
        "Loyalty program",
      ],
      cta: "Start Store Advanced",
    },
  ],
};

export function getPackagesFor(typeKey) {
  return packagesByType[typeKey] || [];
}