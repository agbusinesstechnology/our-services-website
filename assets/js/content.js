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
    websiteTitle: "Leba | Business Support & Technology Solutions",
    description: "Virtual assistance, business services, lead generation, web development, ERP, automation and AI-powered technology solutions by Leba.",
    openGraphDescription: "Virtual assistance, business services and practical technology solutions for businesses.",
    hero: {
      eyebrow: "BUSINESS AND TECHNOLOGY SERVICES",
      title: "Business Support Meets Technology",
      positioning: "Virtual Assistance, Digital Operations & Technology Solutions",
      description: "We help businesses streamline operations, manage digital tasks, generate leads, and build practical technology solutions. From virtual assistance and business support to web development, automation, and AI-driven solutions, we combine reliable human support with technical expertise."
    },
    heroNote: "Business understanding + technical execution.",
    footerTagline: "Business Support & Technology Solutions",
    canonicalUrl: "https://lebad280324.github.io/our-services-website/",
    structuredDataEnabled: true
  },

  sectionText: {
    navigation: { home: "Home", about: "About", services: "Services", expertise: "Expertise", projects: "Projects", contact: "Contact" },
    heroActions: { services: "Explore Our Services", projects: "View Our Work", contact: "Contact Us" },
    aboutLabel: "About Leba",
    aboutTitle: "Business expertise meets technology.",
    teamLabel: "Our team",
    teamTitle: "Founders with complementary expertise.",
    teamIntroduction: "Gizzle leads business services, client coordination and operational support, while Andrew leads software development, system architecture and AI-powered solutions. Together, they combine reliable human support with technical expertise to deliver practical solutions for businesses.",
    servicesLabel: "Our services",
    servicesTitle: "Business services and technology solutions.",
    servicesIntroduction: "Choose focused business support, practical technology delivery, or a coordinated combination of both.",
    servicesActionLabel: "View all services",
    expertiseLabel: "Expertise",
    expertiseTitle: "Focused support across business and technology.",
    expertiseIntroduction: "Detailed capabilities are grouped by the team member responsible for delivery.",
    projectsLabel: "Projects & samples",
    projectsTitle: "Selected Work & Service Samples",
    projectsIntroduction: "Each item is labeled by its current status. Images remain hidden until approved materials are available.",
    processLabel: "How we work",
    processTitle: "A clear path from business need to practical delivery.",
    contactLabel: "Contact",
    contactTitle: "Let’s Work Together",
    contactIntroduction: "Share the business support, workflow or technology need you would like to discuss."
  },

  about: [
    "Leba brings together business services and technology solutions for organizations that need dependable operational support and practical digital delivery.",
    "Gizzle leads business services, client coordination and operational support, while Andrew leads software development, system architecture and AI-powered solutions. Together, they combine reliable human support with technical expertise to deliver practical solutions for businesses."
  ],

  team: [
    {
      name: "Gizzle Montemayor",
      displayName: "Gizzle",
      role: "Founder & Business Services Lead",
      experience: "Since 2017",
      extendedRole: "Since 2017",
      bio: "Business services professional with experience since 2017, providing virtual assistance, digital marketing, CRM management, lead generation, bookkeeping support and technology-driven business operations.",
      image: "./assets/images/profile-gizzle.png",
      imageAlt: "Gizzle Montemayor — Founder and Business Services Lead",
      serviceRole: "Founder & Business Services Lead",
      serviceCategory: "Business Services",
      serviceImageAlt: "Gizzle Montemayor — Founder and Business Services Lead",
      github: "",
      linkedin: "", // EDIT HERE: Add the real LinkedIn URL when available.
      services: ["Virtual Assistance", "Digital Marketing", "CRM Management", "Lead Generation", "Bookkeeping Support", "Project Coordination", "Research & Data Services", "Technology-driven Business Support"],
      credentials: ["TESOL Certified", "EFL Certified", "Bachelor of Science in Computer Science", "QuickBooks Bookkeeping Trainer", "Virtual Assistant since 2017"]
    },
    {
      name: "Andrew",
      vietnameseName: "Lê Bá Dũng",
      role: "Co-Founder & Technology Lead",
      extendedRole: "Web Developer | Programmer | AI Researcher | Technology Specialist",
      bio: "Andrew leads software development, ERP implementation, system architecture, reporting, deployment and AI-powered automation solutions.",
      roleDescription: "As Co-Founder & Technology Lead, Andrew translates business requirements into practical, reliable and user-focused technology solutions.",
      image: "./assets/images/profile-dung-placeholder.jpeg",
      imageAlt: "Andrew — Co-Founder and Technology Lead",
      serviceRole: "Co-Founder & Technology Lead",
      serviceCategory: "Technology Services",
      serviceImageAlt: "Andrew — Co-Founder and Technology Lead",
      github: "https://github.com/lebad280324",
      linkedin: "", // EDIT HERE: Add the real LinkedIn URL when available.
      services: ["Web Development", "Software Solutions", "AI & Technology"]
    }
  ],

  services: [
    { icon: "B", leadName: "Gizzle Montemayor", title: "Business Services — Gizzle", description: "Business development, project coordination and operational support for daily business needs.", tags: ["Virtual Assistance", "Digital Marketing", "CRM Management", "Lead Generation", "Bookkeeping Support", "Project Coordination", "Research & Data Services", "Technology-driven Business Support"] },
    { icon: "T", leadName: "Andrew", title: "Technology Services — Andrew", description: "Software, ERP, reporting, deployment and automation services for business systems.", expertiseGroups: [
      { title: "Web & Software", skills: ["Custom Web Development", "Business Web Applications", "API Integration", "Database Systems"] },
      { title: "Business Technology", skills: ["Odoo ERP Development", "BI Dashboards", "Reporting Systems", "Business Automation"] },
      { title: "Advanced Technology", skills: ["AI Agents & Automation", "System Architecture", "Cloud/Server Deployment"] }
    ] }
  ],

  serviceProfiles: [
    {
      id: "gizzle",
      eyebrow: "Gizzle — Founder & Business Services Lead",
      title: "Virtual Assistance • Digital Marketing • CRM • Lead Generation • Bookkeeping Support",
      description: "Business services professional with experience since 2017, providing organized, technology-driven operational support.",
      groups: [
        { icon: "VA", title: "Executive Virtual Assistance", description: "Dependable executive and administrative support for organized day-to-day operations.", featured: ["Executive & administrative support", "Email and calendar management", "Task and project coordination"], services: ["Executive & administrative support", "Email and calendar management", "Research and data management", "Client communication", "Document and file management", "Travel and meeting coordination", "Task and project coordination"] },
        { icon: "DO", title: "Business & Digital Operations", description: "Structured support for customer workflows, marketing activity and coordinated business operations.", featured: ["CRM management", "Lead generation", "Digital marketing support"], services: ["CRM management", "Lead generation", "Digital marketing support", "Social media management", "Email marketing", "Business research", "Project coordination"] },
        { icon: "QB", title: "Bookkeeping", description: "QuickBooks-focused bookkeeping and financial data administration for routine business operations.", featured: ["QuickBooks bookkeeping", "Expense and invoice management", "QuickBooks Bookkeeping Training"], services: ["QuickBooks bookkeeping", "Expense and invoice management", "Financial data organization", "Bookkeeping administration", "QuickBooks Bookkeeping Training"], note: "Administrative bookkeeping support and training only. This does not represent licensed accounting, tax or financial advisory services." },
        { icon: "ED", title: "Training & Education", description: "Practical online instruction for language learning, virtual assistance and digital productivity.", featured: ["Online English teaching", "Virtual Assistant training", "Digital tools training"], services: ["Online English teaching", "TESOL / EFL instruction", "Virtual Assistant training", "Master Class facilitation", "Digital tools training", "Business productivity training"] }
      ]
    },
    {
      id: "andrew",
      eyebrow: "Andrew — Co-Founder & Technology Lead",
      title: "Web Development • Software • ERP • Automation • AI",
      description: "Andrew leads software development, ERP implementation, system architecture, reporting, deployment and AI-powered automation solutions.",
      groups: [
        { icon: "WEB", title: "Web Development", description: "Responsive, maintainable web experiences built around business goals and real users.", featured: ["Business websites", "Responsive websites", "Web applications"], services: ["Business websites", "Responsive websites", "Responsive Web Design", "Landing pages", "Web applications", "Front-End Development", "HTML, CSS & JavaScript", "Website Maintenance", "Website maintenance and optimization"] },
        { icon: "DEV", title: "Programming & Software", description: "Application and system development covering data, integrations, implementation and ongoing maintenance.", featured: ["Application development", "Database-driven systems", "API integration"], services: ["Application development", "Software Development", "Back-End Development", "Database Development & Management", "Database-driven systems", "API Integration", "Software architecture and implementation", "Problem solving and debugging", "Programming & Debugging", "Git & Version Control"] },
        { icon: "AI", title: "AI & Emerging Technology", description: "Research and experimentation focused on useful automation and future-ready business technology.", featured: ["AI research", "AI-assisted solutions", "Business process automation"], services: ["AI research", "AI & Technology Research", "AI-assisted solutions", "Technology experimentation", "Business process automation", "Automation & Digital Solutions", "Emerging web technologies"] }
      ]
    }
  ],

  projects: [
    {
      title: "CRM Pipeline Management",
      category: "Business Services",
      status: "Sample image coming soon",
      image: "",
      imageAlt: "",
      description: "A service sample for organizing CRM stages, lead information and follow-up activity.",
      details: "An example of a structured CRM workflow that keeps pipeline stages, lead records and follow-up activity organized.",
      deliverables: ["Pipeline structure", "Lead organization", "Follow-up workflow"],
      tools: ["CRM", "Spreadsheets"],
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Lead Generation Research",
      category: "Business Services",
      status: "Sample image coming soon",
      image: "",
      imageAlt: "",
      description: "A service sample for structured prospect research and organized lead information.",
      details: "An example of a repeatable research process for collecting, reviewing and organizing relevant prospect information.",
      deliverables: ["Prospect research", "Lead list organization", "Research notes"],
      tools: ["Web research", "Spreadsheets"],
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Virtual Assistance Workflow",
      category: "Business Services",
      status: "Sample image coming soon",
      image: "",
      imageAlt: "",
      description: "A service sample showing how recurring administrative tasks can be organized and tracked.",
      details: "An example of a practical administrative workflow for recurring tasks, priorities and progress visibility.",
      deliverables: ["Task workflow", "Administrative checklist", "Progress tracker"],
      tools: ["Task management", "Documents"],
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Marketing Performance Report",
      category: "Business Services",
      status: "Sample image coming soon",
      image: "",
      imageAlt: "",
      description: "A service sample for organizing campaign activity and marketing performance information.",
      details: "An example report structure that brings campaign activity and performance information into a clear review format.",
      deliverables: ["Performance summary", "Campaign tracker", "Reporting format"],
      tools: ["Analytics", "Spreadsheets"],
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Operations and Project Tracker",
      category: "Business Services",
      status: "Sample image coming soon",
      image: "",
      imageAlt: "",
      description: "A service sample for coordinating tasks, owners, due dates and project progress.",
      details: "An example tracker for coordinating responsibilities, deadlines and status updates across business operations.",
      deliverables: ["Operations tracker", "Task ownership", "Status overview"],
      tools: ["Project management", "Spreadsheets"],
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Bookkeeping Administration Sample",
      category: "Business Services",
      status: "Sample image coming soon",
      image: "",
      imageAlt: "",
      description: "A service sample for routine bookkeeping administration and financial data organization.",
      details: "An example workflow for organizing routine expense, invoice and financial record administration.",
      deliverables: ["Expense organization", "Invoice tracking", "Financial data filing"],
      tools: ["QuickBooks", "Spreadsheets"],
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Leba Medical ERP",
      category: "Technology Services",
      status: "In Development",
      description: "A custom ERP platform designed for dental clinics and medical business operations, combining Odoo 19 as the ERP foundation, PostgreSQL as the database and a Vue.js frontend.",
      details: "A custom ERP platform in active development for dental clinics and medical business operations, with a separate frontend and structured reporting capabilities.",
      deliverables: ["Patient and customer management", "Appointment management", "Accounting and revenue reporting", "Inventory and business operations", "Statistical dashboards", "REST APIs", "Role-based access control", "Demo database and reporting data", "Future mobile application integration"],
      tools: ["Odoo 19", "Python", "PostgreSQL 17", "Vue.js", "TypeScript", "Vite", "Docker Compose"],
      image: "",
      imageAlt: "",
      repositoryUrl: "https://github.com/lebad280324/erp_leba_medical",
      showRepository: false // EDIT HERE: Change to true only after confirming the repository is public.
    },
    {
      title: "AI Reporting Agent for ERP",
      category: "Technology Services",
      status: "Prototype / In Development",
      description: "An AI reporting assistant for natural-language business questions. It is designed to connect to controlled analytics views rather than expose unrestricted database access and is not presented as production-ready.",
      details: "A research prototype for controlled natural-language reporting over business analytics views, with safeguards around generated SQL and database access.",
      deliverables: ["FastAPI service", "PostgreSQL analytics schema", "Read-only reporting account", "Natural-language reporting", "Local LLM through Ollama", "SQL validation and controlled database access", "ERP dashboard integration preparation"],
      tools: ["Python", "FastAPI", "PostgreSQL", "Psycopg", "SQLGlot", "Ollama", "Qwen", "Docker Compose"],
      image: "",
      imageAlt: "",
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Odoo Resource Booking System",
      category: "Technology Services",
      status: "Developed for Internal Operations",
      description: "A resource booking workflow for managing meeting rooms and company vehicles in Odoo, including booking requests, approval states, notifications, email processing and permission groups.",
      details: "An internal Odoo workflow that coordinates resource requests, approvals, permissions and notifications for meeting rooms and company vehicles.",
      deliverables: ["Meeting room booking", "Vehicle booking", "Approval workflow", "Dynamic approver notifications", "User and manager permission groups", "Email queue and scheduled notifications", "Resource calendar integration"],
      tools: ["Odoo", "Python", "XML", "PostgreSQL", "Odoo mail framework"],
      image: "",
      imageAlt: "",
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Employee Meal Registration Module",
      category: "Technology Services",
      status: "Developed / Internal Workflow",
      description: "An Odoo module designed to help kitchen and HR teams manage employee meal registration and allowance-related information.",
      details: "An internal workflow module for managing employee meal registration, daily quantities, role permissions and allowance-related information.",
      deliverables: ["Regular and non-regular meal workflows", "Default registration rules", "Employee cancellation and registration", "Summary and payment permission groups", "Daily meal quantity support", "Role-based access control"],
      tools: ["Odoo", "Python", "XML", "PostgreSQL"],
      image: "",
      imageAlt: "",
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Document and ISO Workflow Digitalization",
      category: "Technology Services",
      status: "Workflow Design and Development",
      description: "Digitalization of internal document and ISO-related processes. This work concerns workflow management only and does not represent or imply ISO certification.",
      details: "Workflow design and development for internal forms, reviews and document status management; it does not represent or imply ISO certification.",
      deliverables: ["Electronic forms", "Multi-step approval processes", "Conditional workflow steps", "Document status tracking", "Role-based execution", "Review and compliance checklists", "Document storage structure preparation"],
      tools: ["Odoo", "Python", "XML", "Workflow analysis", "Nextcloud-related organization"],
      image: "",
      imageAlt: "",
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Dockerized Business Application Infrastructure",
      category: "Technology Services",
      status: "Implemented Development Infrastructure",
      description: "A Docker Compose architecture used to run an ERP platform with isolated application, frontend and database services.",
      details: "A containerized application environment with isolated ERP, frontend and database services, persistent storage and deployment-oriented configuration.",
      deliverables: ["Odoo container", "PostgreSQL container", "Vue and Vite frontend container", "Internal Docker network", "Persistent volumes", "Environment-based configuration", "Cloudflare Tunnel connectivity", "Development and production deployment preparation"],
      tools: ["Docker", "Docker Compose", "Ubuntu/Linux", "PostgreSQL", "Odoo", "Vue.js", "Cloudflare Tunnel", "Nginx"],
      image: "",
      imageAlt: "",
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Internal Knowledge AI Assistant",
      category: "Technology Services",
      status: "Research and Prototype",
      description: "A FastAPI-based concept for an internal policy and document assistant. Retrieval components and planned functions remain under development and are not presented as completed.",
      details: "A research concept for an internal policy and document assistant; retrieval functions remain planned or under development and are not presented as complete.",
      deliverables: ["Planned document upload and ingestion", "Planned text chunking", "Planned vector search with FAISS or Chroma", "Planned relevant-section retrieval", "Planned local LLM response generation", "FastAPI endpoint design"],
      tools: ["Python", "FastAPI", "Ollama", "FAISS or Chroma", "Retrieval-Augmented Generation"],
      image: "",
      imageAlt: "",
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
    email: "gizzlesy@gmail.com",
    calendlyUrl: "", // EDIT HERE: Add Gizzle's real Calendly URL when available.
    whatsapp: "", // EDIT HERE: Add digits only, including country code.
    linkedin: "", // EDIT HERE: Add the real LinkedIn URL.
    github: "https://github.com/lebad280324",
    whatsappMessage: "Hello, I would like to discuss a business technology project.",
    location: "Vietnam / Available for remote collaboration"
  }
};
