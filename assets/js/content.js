/**
 * WEBSITE CONTENT — EDIT THIS FILE TO UPDATE TEXT, LINKS, AND IMAGES.
 * Keep text inside quotes and keep commas between list items.
 * Search for "EDIT HERE" to find information that still needs to be supplied.
 */
window.PORTFOLIO_CONTENT = {
  business: {
    // Public business name used throughout the website.
    name: "LEBA",
    shortName: "LEBA",
    websiteTitle: "Business Support & Technology Solutions | Gizzle and Andrew",
    description: "Virtual assistance, digital operations, lead generation, web development, automation and AI-driven solutions for growing businesses.",
    hero: {
      eyebrow: "LEBA",
      title: "Business Services & Technology Solutions",
      positioning: "Executive Support, Digital Operations, Training & Technology",
      description: "We help businesses streamline operations, manage digital tasks, generate leads, and build practical technology solutions. From virtual assistance and business support to web development, automation, and AI-driven solutions, we combine reliable human support with technical expertise."
    },
    heroNote: "A complementary team combining founder-led business services with practical technology delivery.",
    footerTagline: "Business Services & Technology Solutions",
    canonicalUrl: "", // EDIT HERE: Add the final GitHub Pages or custom-domain URL.
    structuredDataEnabled: false // EDIT HERE: Enable only after the final business name and URL are confirmed.
  },

  sectionText: {
    navigation: { home: "Home", about: "About", services: "Services", portfolio: "Portfolio", team: "Our Team", process: "How We Work", contact: "Contact" },
    heroActions: { services: "Explore Our Services", portfolio: "View Our Work", contact: "Contact Us" },
    aboutLabel: "About LEBA",
    aboutTitle: "Business support and technology, working together.",
    teamLabel: "Our team",
    teamTitle: "Founders with complementary expertise.",
    teamIntroduction: "Gizzle leads business services, executive support and training. Andrew leads web development, software solutions and AI research. Together, they connect client needs with organized support and practical technology.",
    servicesLabel: "Our services",
    servicesTitle: "Business services and technology solutions.",
    servicesIntroduction: "Choose focused business support, practical technology delivery, or a coordinated combination of both.",
    servicesActionLabel: "View all services",
    portfolioLabel: "Portfolio",
    portfolioTitle: "Selected technology work.",
    portfolioIntroduction: "Project status and planned functions are identified clearly. No commercial deployment or client results are implied unless explicitly stated.",
    processLabel: "How we work",
    processTitle: "A clear path from business need to practical delivery.",
    contactLabel: "Contact",
    contactTitle: "Let’s discuss what the business needs.",
    contactIntroduction: "Share the workflow, system challenge or improvement you are considering. We can begin with a practical discussion about requirements and feasibility."
  },

  about: [
    "LEBA brings together business services and technology solutions for organizations that need dependable operational support and practical digital delivery.",
    "Gizzle, Founder & Business Services Lead, supports executive operations, digital workflows, bookkeeping administration and training. Andrew, Co-Founder & Technology Lead, develops websites, software systems, integrations, automation and AI-assisted solutions."
  ],

  team: [
    {
      name: "Gizzle",
      role: "Founder & Business Services Lead",
      extendedRole: "Virtual Assistant since 2017 | Online Educator | Computer Science Professional.",
      bio: "Helping businesses stay organized, productive, and digitally empowered through executive virtual assistance, business support, training, and technology-driven solutions.",
      image: "./assets/images/profile-gizzle.png",
      imageAlt: "Gizzle — Founder and Business Services Lead",
      serviceRole: "Founder Business Solutions Expert",
      serviceCategory: "Business Solutions",
      serviceImageAlt: "Gizzle — Business Development and Operations",
      github: "",
      linkedin: "", // EDIT HERE: Add the real LinkedIn URL when available.
      services: ["Business Support", "Executive VA", "Digital Operations", "Training"],
      credentials: ["TESOL Certified", "EFL Certified", "Bachelor of Science in Computer Science", "QuickBooks Bookkeeping Trainer", "Virtual Assistant since 2017"]
    },
    {
      name: "Andrew",
      vietnameseName: "Lê Bá Dũng",
      role: "Co-Founder & Technology Lead",
      extendedRole: "Web Developer | Programmer | AI Researcher | Technology Specialist",
      bio: "Andrew is a technology-focused developer specializing in programming, web development, and digital solutions. As Co-Founder and Technology Lead of LEBA, he is responsible for transforming business requirements into practical, reliable, and user-focused technology solutions.",
      roleDescription: "As Co-Founder & Technology Lead, Andrew works closely with Gizzle to translate client needs into effective digital solutions—from business websites and web applications to technology-driven improvements and future AI solutions.",
      image: "./assets/images/profile-dung-placeholder.jpeg",
      imageAlt: "Andrew — Co-Founder and Technology Lead",
      serviceRole: "Technology Solutions Expert",
      serviceCategory: "Technology Solutions",
      serviceImageAlt: "Andrew — Technical Lead",
      github: "https://github.com/lebad280324",
      linkedin: "", // EDIT HERE: Add the real LinkedIn URL when available.
      services: ["Web Development", "Software Solutions", "AI & Technology"]
    }
  ],

  services: [
    { icon: "B", leadName: "Gizzle", title: "Business Solutions — Gizzle", description: "Business development, project coordination and operational support for daily business needs.", tags: ["Business Development", "Executive VA", "Operations", "Digital Marketing", "Training"] },
    { icon: "T", leadName: "Andrew", title: "Technology Solutions — Andrew", description: "Web development, business systems, automation and technology solutions designed around your operational needs.", expertiseGroups: [
      { title: "Web & Software", skills: ["Custom Web Development", "Business Web Applications", "API Integration", "Database Systems"] },
      { title: "Business Technology", skills: ["Odoo ERP Development", "BI Dashboards", "Reporting Systems", "Business Automation"] },
      { title: "Advanced Technology", skills: ["AI Agents & Automation", "System Architecture", "Cloud/Server Deployment"] }
    ] }
  ],

  serviceProfiles: [
    {
      id: "gizzle",
      eyebrow: "Gizzle — Founder Business Solutions Expert",
      title: "Business Development • Executive VA • Operations • Digital Marketing • Training",
      description: "Helping businesses stay organized, productive, and digitally empowered through executive virtual assistance, business support, training, and technology-driven solutions.",
      groups: [
        { icon: "VA", title: "Executive Virtual Assistance", description: "Dependable executive and administrative support for organized day-to-day operations.", featured: ["Executive & administrative support", "Email and calendar management", "Task and project coordination"], services: ["Executive & administrative support", "Email and calendar management", "Research and data management", "Client communication", "Document and file management", "Travel and meeting coordination", "Task and project coordination"] },
        { icon: "DO", title: "Business & Digital Operations", description: "Structured support for customer workflows, marketing activity and coordinated business operations.", featured: ["CRM management", "Lead generation", "Digital marketing support"], services: ["CRM management", "Lead generation", "Digital marketing support", "Social media management", "Email marketing", "Business research", "Project coordination"] },
        { icon: "QB", title: "Bookkeeping", description: "QuickBooks-focused bookkeeping and financial data administration for routine business operations.", featured: ["QuickBooks bookkeeping", "Expense and invoice management", "QuickBooks Bookkeeping Training"], services: ["QuickBooks bookkeeping", "Expense and invoice management", "Financial data organization", "Bookkeeping administration", "QuickBooks Bookkeeping Training"], note: "Administrative bookkeeping support and training only. This does not represent licensed accounting, tax or financial advisory services." },
        { icon: "ED", title: "Training & Education", description: "Practical online instruction for language learning, virtual assistance and digital productivity.", featured: ["Online English teaching", "Virtual Assistant training", "Digital tools training"], services: ["Online English teaching", "TESOL / EFL instruction", "Virtual Assistant training", "Master Class facilitation", "Digital tools training", "Business productivity training"] }
      ]
    },
    {
      id: "andrew",
      eyebrow: "Andrew — Technology Solutions Expert",
      title: "Web Development • Software • ERP • Automation • AI • Technology",
      description: "Andrew transforms business requirements into practical, reliable and user-focused websites, software systems, integrations, automation and emerging technology solutions.",
      groups: [
        { icon: "WEB", title: "Web Development", description: "Responsive, maintainable web experiences built around business goals and real users.", featured: ["Business websites", "Responsive websites", "Web applications"], services: ["Business websites", "Responsive websites", "Responsive Web Design", "Landing pages", "Web applications", "Front-End Development", "HTML, CSS & JavaScript", "Website Maintenance", "Website maintenance and optimization"] },
        { icon: "DEV", title: "Programming & Software", description: "Application and system development covering data, integrations, implementation and ongoing maintenance.", featured: ["Application development", "Database-driven systems", "API integration"], services: ["Application development", "Software Development", "Back-End Development", "Database Development & Management", "Database-driven systems", "API Integration", "Software architecture and implementation", "Problem solving and debugging", "Programming & Debugging", "Git & Version Control"] },
        { icon: "AI", title: "AI & Emerging Technology", description: "Research and experimentation focused on useful automation and future-ready business technology.", featured: ["AI research", "AI-assisted solutions", "Business process automation"], services: ["AI research", "AI & Technology Research", "AI-assisted solutions", "Technology experimentation", "Business process automation", "Automation & Digital Solutions", "Emerging web technologies"] }
      ]
    }
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

  contact: {
    email: "", // EDIT HERE: Add the real public email address.
    whatsapp: "", // EDIT HERE: Add digits only, including country code.
    linkedin: "", // EDIT HERE: Add the real LinkedIn URL.
    github: "https://github.com/lebad280324",
    whatsappMessage: "Hello, I would like to discuss a business technology project.",
    location: "Vietnam / Available for remote collaboration"
  }
};
