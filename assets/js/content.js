/**
 * WEBSITE CONTENT — EDIT THIS FILE TO UPDATE TEXT, LINKS, AND IMAGES.
 * Keep text inside quotes and keep commas between list items.
 * Search for "EDIT HERE" to find information that still needs to be supplied.
 */
window.PORTFOLIO_CONTENT = {
  business: {
    // Public business name used throughout the website.
    name: "Leba",
    shortName: "Leba",
    websiteTitle: "Business Support & Technology Solutions | Gizzle and Andrew",
    description: "Virtual assistance, digital operations, lead generation, web development, automation and AI-driven solutions for growing businesses.",
    hero: {
      eyebrow: "Business and Technology Services",
      title: "Business Support Meets Technology",
      positioning: "Virtual Assistance, Digital Operations & Technology Solutions",
      description: "We help businesses streamline operations, manage digital tasks, generate leads, and build practical technology solutions. From virtual assistance and business support to web development, automation, and AI-driven solutions, we combine reliable human support with technical expertise."
    },
    heroNote: "Two co-founders combining organized business support with dependable technical delivery.",
    footerTagline: "Business support and technology services for practical operations.",
    canonicalUrl: "", // EDIT HERE: Add the final GitHub Pages or custom-domain URL.
    structuredDataEnabled: false // EDIT HERE: Enable only after the final business name and URL are confirmed.
  },

  sectionText: {
    navigation: { home: "Home", about: "About", services: "Services", skills: "Expertise", work: "Projects", contact: "Contact" },
    heroActions: { services: "Explore Our Services", projects: "View Our Work", contact: "Contact Us" },
    aboutLabel: "About us",
    aboutTitle: "Business Expertise Meets Technology",
    teamLabel: "Our team",
    teamTitle: "Two co-founders, two complementary roles.",
    teamIntroduction: "Gizzle leads business development, project coordination and operational support, while Andrew leads software development, system architecture and AI research. Together, they combine reliable business support with technical expertise to deliver practical solutions for growing businesses.",
    servicesLabel: "Our services",
    servicesTitle: "Business Expertise Meets Technology",
    servicesIntroduction: "Gizzle leads business development, project coordination and operational support, while Andrew leads software development, system architecture and AI research. Together, they provide practical business and technology solutions.",
    servicesActionLabel: "View all services",
    gizzleServicesTitle: "Expert Virtual Assistant Services",
    gizzleServicesDescription: "Gizzle provides professional Virtual Assistance, Digital Marketing, CRM Management, Lead Generation, Bookkeeping and Technical Business Support to help businesses improve productivity, organize operations and grow their online presence.",
    skillsLabel: "Core expertise",
    skillsTitle: "Expertise across business support and technical delivery.",
    skillsIntroduction: "Capabilities are grouped by working area without artificial percentages, testimonials or unverified claims.",
    workLabel: "Projects & proof of work",
    workTitle: "Systems developed and currently in progress.",
    projectsIntroduction: "Project status and planned functions are identified clearly. No commercial deployment or client results are implied unless explicitly stated.",
    processLabel: "Development process",
    processTitle: "A clear path from requirements to improvement.",
    proofLabel: "Proof of work",
    proofTitle: "Evidence should be direct and verifiable.",
    proofIntroduction: "Approved screenshots, public repositories and factual technical documentation can be added here. No client logos, testimonials, statistics or certificates are invented.",
    contactLabel: "Contact",
    contactTitle: "Let’s discuss what the business needs.",
    contactIntroduction: "Share the workflow, system challenge or improvement you are considering. We can begin with a practical discussion about requirements and feasibility."
  },

  about: [
    "Gizzle leads business development, project coordination and operational support, while Andrew leads software development, system architecture and AI research. Together, they combine reliable business support with technical expertise to deliver practical solutions for growing businesses.",
    "The team is intentionally small and collaborative. Gizzle helps organize business functions and growth support, while Andrew builds maintainable digital systems for ERP, APIs, reporting, automation and deployment."
  ],

  team: [
    {
      name: "Andrew",
      vietnameseName: "Lê Bá Dũng",
      role: "Technical Lead",
      extendedRole: "Co-Founder & Technical Lead / Web Developer & AI Researcher",
      bio: "Technical lead specializing in web development, ERP systems, APIs, Docker infrastructure, BI reporting and AI-powered business solutions.",
      image: "./assets/images/profile-dung-placeholder.jpeg",
      imageAlt: "Andrew — Technical Lead",
      github: "https://github.com/lebad280324",
      linkedin: "", // EDIT HERE: Add the real LinkedIn URL when available.
      services: ["Odoo ERP development", "Python and FastAPI", "Vue.js, JavaScript and TypeScript", "PostgreSQL and BI reporting", "Docker and Linux deployment", "API integration", "AI agents and business automation"]
    },
    {
      name: "Gizzle",
      role: "Business Development",
      extendedRole: "Co-Founder & Business Development / Project Manager",
      bio: "Business development professional providing virtual assistance, digital marketing, CRM management, lead generation, bookkeeping and technology-driven business support.",
      image: "./assets/images/profile-gizzle.png",
      imageAlt: "Gizzle — Business Development",
      github: "",
      linkedin: "", // EDIT HERE: Add the real LinkedIn URL when available.
      services: ["Virtual Assistance", "Digital Marketing", "CRM Management", "Lead Generation", "Bookkeeping", "Technology-driven business support"]
    }
  ],

  services: [
    { icon: "B", title: "Business Services — Gizzle", description: "Business development, coordination and operational support for daily business needs.", tags: ["Virtual Assistance", "Business Development", "Project Coordination", "Digital Marketing", "CRM Management", "Lead Generation", "Bookkeeping Support", "Research and Data Services"] },
    { icon: "T", title: "Technology Services — Andrew", description: "Software, ERP, reporting, deployment and automation services for business systems.", tags: ["Custom Web Development", "Odoo ERP Development", "API Integration", "BI Dashboards", "Docker and Linux Deployment", "AI Agents and Automation", "Database and Reporting Systems", "Technical Architecture"] }
  ],

  gizzleServiceGroups: [
    { icon: "VA", title: "Virtual Assistant & Business Support", description: "Reliable administrative and operational support that helps businesses stay organized and productive.", featured: ["Executive & Administrative Assistance", "Email & Calendar Management", "Project & Operations Coordination"], services: ["Executive & Administrative Assistance", "Email & Calendar Management", "Data Entry & Database Management", "Web Research", "Document & File Management", "Scheduling & Appointment Management", "Customer Support", "Project & Operations Coordination"] },
    { icon: "DM", title: "Digital Marketing", description: "Practical digital marketing support for content, campaigns, analytics and online visibility.", featured: ["Social Media Management", "Content Planning & Scheduling", "Marketing Performance Reporting"], services: ["Digital Marketing Support", "Social Media Management", "Content Planning & Scheduling", "Email Marketing & Campaign Management", "SEO Support & Keyword Research", "Google Analytics Reporting", "Google Tag Manager", "Website Content Management", "Marketing Performance Reporting"] },
    { icon: "CRM", title: "CRM Management", description: "Organized CRM processes for managing customer information, sales pipelines and follow-up activities.", featured: ["CRM Setup & Organization", "Lead & Pipeline Management", "CRM Reporting & Analytics"], services: ["CRM Setup & Organization", "Customer Database Management", "Lead & Pipeline Management", "Lead Qualification", "Customer Segmentation", "CRM Data Cleaning", "Follow-up Management", "CRM Reporting & Analytics", "Workflow & Automation Support"] },
    { icon: "LG", title: "Lead Generation", description: "Structured prospect research and lead-generation support for B2B and B2C growth.", featured: ["Prospect Research", "Lead List Building", "Appointment Setting"], services: ["B2B & B2C Lead Generation", "Prospect Research", "Lead List Building", "Decision-Maker Research", "LinkedIn Lead Research", "Contact Database Building", "Lead Qualification", "Email List Building", "Prospect Follow-up", "Appointment Setting", "Competitor Research"] },
    { icon: "BK", title: "Bookkeeping & Financial Administration", description: "Accurate support for routine bookkeeping, payment tracking and financial administration.", featured: ["Income & Expense Tracking", "Invoice Management", "Basic Financial Reporting"], services: ["Basic Bookkeeping", "Income & Expense Tracking", "Invoice Management", "Accounts Receivable Support", "Accounts Payable Support", "Expense Categorization", "Payment Tracking", "Payroll Data Preparation", "Financial Spreadsheet Management", "Basic Financial Reporting"], note: "Administrative bookkeeping support only. This does not represent licensed accounting, tax or financial advisory services." },
    { icon: "WS", title: "Technical & Website Support", description: "Day-to-day website, analytics and technical support for business operations.", featured: ["WordPress Management", "Website Content Updates", "Google Analytics"], services: ["WordPress Management", "Website Content Updates", "Basic HTML & CSS", "Website Testing", "Landing Page Management", "Google Analytics", "Google Tag Manager", "Basic SEO Implementation", "Technical Documentation", "Database & Data Management"] },
    { icon: "AI", title: "AI & Business Automation", description: "AI-assisted workflows and automation designed to reduce repetitive work and improve business processes.", featured: ["Prompt Engineering", "CRM Automation", "Workflow Automation"], services: ["AI-Assisted Business Operations", "AI Research & Content Support", "Prompt Engineering", "CRM Automation", "Email & Lead Follow-up Automation", "Data Processing", "Workflow Automation", "Business Process Optimization"] },
    { icon: "RD", title: "Research & Data Services", description: "Structured research and data support for informed business decisions.", featured: ["Market Research", "Competitor Analysis", "Data Cleaning & Validation"], services: ["Market Research", "Competitor Analysis", "Web Research", "Data Collection", "Data Cleaning & Validation", "Spreadsheet Management", "Database Management", "Business Research Reports"] }
  ],

  whyGizzle: {
    heading: "Why Work With Gizzle?",
    subheading: "One professional. Multiple business functions.",
    body: "Gizzle combines Virtual Assistance, Digital Marketing, CRM Management, Lead Generation, Bookkeeping and technical skills to provide businesses with reliable, organized and technology-driven support.",
    goal: "Her goal is to help clients save time, organize their businesses, generate opportunities and focus on sustainable growth."
  },

  skillGroups: [
    { title: "Business Services — Gizzle", skills: ["Virtual Assistance", "Digital Marketing", "CRM Management", "Lead Generation", "Bookkeeping", "WordPress", "SEO", "Data Management", "Customer Support", "AI Automation", "Business Research", "Technical Support"] },
    { title: "Technology Services — Andrew", skills: ["Custom Web Development", "Odoo ERP Development", "API Integration", "BI Dashboards", "Docker and Linux Deployment", "AI Agents and Automation", "Database and Reporting Systems", "Technical Architecture"] },
    { title: "ERP and business systems", skills: ["Odoo ERP development and customization", "Odoo custom modules", "Business workflow digitalization", "Booking and resource management", "Accounting and operational integrations", "Role-based access control", "Email and notification workflows"] },
    { title: "Backend and API", skills: ["Python", "FastAPI", "REST API design and integration", "Odoo API development", "Authentication and access control", "Data serialization and validation", "Business reporting APIs"] },
    { title: "Frontend development", skills: ["Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Vite", "Responsive web interface", "Dashboard development"] },
    { title: "Database and reporting", skills: ["PostgreSQL", "SQL", "Database views", "Data analytics schemas", "BI dashboard preparation", "Revenue and operational reporting", "Demo data generation", "Data standardization"] },
    { title: "DevOps and infrastructure", skills: ["Docker", "Docker Compose", "Linux and Ubuntu Server", "Nginx", "Nginx Proxy Manager", "Cloudflare Tunnel", "Portainer", "Git and GitHub", "Application deployment", "PostgreSQL container deployment", "Development and production environments"] },
    { title: "AI and automation", skills: ["AI agent development", "Local LLM integration with Ollama", "Natural-language business reporting", "Retrieval and document question answering", "Workflow automation", "AI-assisted software development", "FastAPI-based AI services"] }
  ],

  projects: [
    {
      title: "LEBA Medical ERP",
      status: "In Development",
      description: "A custom ERP platform designed for dental clinics and medical business operations, combining Odoo 19 as the ERP foundation, PostgreSQL as the database and a Vue.js frontend.",
      capabilities: ["Patient and customer management", "Appointment management", "Accounting and revenue reporting", "Inventory and business operations", "Statistical dashboards", "REST APIs", "Role-based access control", "Demo database and reporting data", "Future mobile application integration"],
      technologies: ["Odoo 19", "Python", "PostgreSQL 17", "Vue.js", "TypeScript", "Vite", "Docker Compose"],
      image: "./assets/images/projects/leba-medical-erp-placeholder.svg",
      imageAlt: "Placeholder for an approved LEBA Medical ERP screenshot",
      repositoryUrl: "https://github.com/lebad280324/erp_leba_medical",
      showRepository: false // EDIT HERE: Change to true only after confirming the repository is public.
    },
    {
      title: "AI Reporting Agent for ERP",
      status: "Prototype / In Development",
      description: "An AI reporting assistant for natural-language business questions. It is designed to connect to controlled analytics views rather than expose unrestricted database access and is not presented as production-ready.",
      capabilities: ["FastAPI service", "PostgreSQL analytics schema", "Read-only reporting account", "Natural-language reporting", "Local LLM through Ollama", "SQL validation and controlled database access", "ERP dashboard integration preparation"],
      technologies: ["Python", "FastAPI", "PostgreSQL", "Psycopg", "SQLGlot", "Ollama", "Qwen", "Docker Compose"],
      image: "./assets/images/projects/ai-reporting-agent-placeholder.svg",
      imageAlt: "Placeholder diagram for the AI Reporting Agent prototype",
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Odoo Resource Booking System",
      status: "Developed for Internal Operations",
      description: "A resource booking workflow for managing meeting rooms and company vehicles in Odoo, including booking requests, approval states, notifications, email processing and permission groups.",
      capabilities: ["Meeting room booking", "Vehicle booking", "Approval workflow", "Dynamic approver notifications", "User and manager permission groups", "Email queue and scheduled notifications", "Resource calendar integration"],
      technologies: ["Odoo", "Python", "XML", "PostgreSQL", "Odoo mail framework"],
      image: "./assets/images/projects/odoo-booking-placeholder.svg",
      imageAlt: "Placeholder for an approved Odoo resource booking screenshot",
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Employee Meal Registration Module",
      status: "Developed / Internal Workflow",
      description: "An Odoo module designed to help kitchen and HR teams manage employee meal registration and allowance-related information.",
      capabilities: ["Regular and non-regular meal workflows", "Default registration rules", "Employee cancellation and registration", "Summary and payment permission groups", "Daily meal quantity support", "Role-based access control"],
      technologies: ["Odoo", "Python", "XML", "PostgreSQL"],
      image: "./assets/images/projects/employee-meal-placeholder.svg",
      imageAlt: "Placeholder for an approved employee meal registration module screenshot",
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Document and ISO Workflow Digitalization",
      status: "Workflow Design and Development",
      description: "Digitalization of internal document and ISO-related processes. This work concerns workflow management only and does not represent or imply ISO certification.",
      capabilities: ["Electronic forms", "Multi-step approval processes", "Conditional workflow steps", "Document status tracking", "Role-based execution", "Review and compliance checklists", "Document storage structure preparation"],
      technologies: ["Odoo", "Python", "XML", "Workflow analysis", "Nextcloud-related organization"],
      image: "./assets/images/projects/document-workflow-placeholder.svg",
      imageAlt: "Placeholder diagram for document and ISO workflow digitalization",
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Dockerized Business Application Infrastructure",
      status: "Implemented Development Infrastructure",
      description: "A Docker Compose architecture used to run an ERP platform with isolated application, frontend and database services.",
      capabilities: ["Odoo container", "PostgreSQL container", "Vue and Vite frontend container", "Internal Docker network", "Persistent volumes", "Environment-based configuration", "Cloudflare Tunnel connectivity", "Development and production deployment preparation"],
      technologies: ["Docker", "Docker Compose", "Ubuntu/Linux", "PostgreSQL", "Odoo", "Vue.js", "Cloudflare Tunnel", "Nginx"],
      image: "./assets/images/projects/infrastructure-placeholder.svg",
      imageAlt: "Placeholder diagram for Dockerized business application infrastructure",
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Internal Knowledge AI Assistant",
      status: "Research and Prototype",
      description: "A FastAPI-based concept for an internal policy and document assistant. Retrieval components and planned functions remain under development and are not presented as completed.",
      capabilities: ["Planned document upload and ingestion", "Planned text chunking", "Planned vector search with FAISS or Chroma", "Planned relevant-section retrieval", "Planned local LLM response generation", "FastAPI endpoint design"],
      technologies: ["Python", "FastAPI", "Ollama", "FAISS or Chroma", "Retrieval-Augmented Generation"],
      image: "./assets/images/projects/knowledge-ai-placeholder.svg",
      imageAlt: "Placeholder diagram for the Internal Knowledge AI Assistant research prototype",
      repositoryUrl: "",
      showRepository: false
    }
  ],

  process: [
    "Understand the business requirements",
    "Analyze the workflow",
    "Design the solution",
    "Develop and integrate",
    "Test and document",
    "Deploy and improve"
  ],

  proofItems: [
    { title: "Approved project screenshots", description: "Replace project placeholders with sanitized, approved screenshots when they are available.", type: "Image evidence" },
    { title: "Public source repositories", description: "Repository buttons are shown only when their public availability has been confirmed in content.js.", type: "Technical evidence" },
    { title: "Technical documentation", description: "Architecture notes, API references and implementation documentation can provide factual proof without exposing confidential data.", type: "Documentation" }
  ],

  contact: {
    email: "", // EDIT HERE: Add the real public email address.
    whatsapp: "", // EDIT HERE: Add digits only, including country code.
    linkedin: "", // EDIT HERE: Add the real LinkedIn URL.
    github: "https://github.com/lebad280324",
    whatsappMessage: "Hello, I would like to discuss a business technology project.",
    location: "Vietnam / Available for remote collaboration"
  }
};
