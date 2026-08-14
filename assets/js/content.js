/**
 * WEBSITE CONTENT — EDIT THIS FILE TO UPDATE TEXT, LINKS, AND IMAGES.
 * Keep text inside quotes and keep commas between list items.
 * Search for "EDIT HERE" to find information that still needs to be supplied.
 */
window.PORTFOLIO_CONTENT = {
  business: {
    // Public business name used throughout the website.
    name: "A&G Business & Technology",
    shortName: "A&G",
    websiteTitle: "A&G Business & Technology | Business Support & Technology Solutions",
    description: "A&G provides virtual business support, digital marketing, web and software development, automation, AI solutions, and practical business technology services.",
    openGraphTitle: "A&G Business & Technology",
    openGraphDescription: "Business support and practical technology solutions for smarter operations.",
    hero: {
      eyebrow: "DIGITAL BUSINESS & TECHNOLOGY SOLUTIONS",
      titleLines: ["Business Support.", "Technology.", "Results."],
      description: "Virtual assistance, digital operations, marketing, automation, web development, and AI solutions for growing businesses.",
      primaryAction: { label: "Let's Work Together", target: "#contact" },
      secondaryAction: { label: "View Our Services", target: "#services" },
      projectAction: { label: "View Our Projects", target: "#projects" }
    },
    valueProposition: {
      business: "Business Thinking",
      technology: "Technical Delivery",
      supportingText: "Human expertise combined with practical technology."
    },
    footerTagline: "Business Support & Technology Solutions",
    canonicalUrl: "https://agbusinesstechnology.github.io/our-services-website/",
    structuredDataEnabled: true
  },

  sectionText: {
    navigation: { home: "Home", about: "About", services: "Services", expertise: "Expertise", projects: "Projects", contact: "Contact" },
    audienceLabel: "Who we help",
    audienceTitle: "Who We Help",
    audienceIntroduction: "Flexible business and technology support for organizations at different stages of growth.",
    aboutLabel: "About A&G",
    aboutTitle: "Business expertise meets technology.",
    teamLabel: "Our team",
    teamTitle: "Founders with complementary expertise.",
    teamIntroduction: "Gizzle leads business services, client coordination and operational support, while Andrew leads software development, system architecture, automation and technical implementation. Together, they combine reliable human support with practical technology expertise.",
    servicesLabel: "Our Services",
    servicesTitle: "Business support and technology solutions built around real operational needs.",
    servicesIntroduction: "From daily business support to web development, automation and digital transformation, A&G provides practical services that help organizations work more efficiently.",
    servicesActionLabel: "View all services",
    whyChooseLabel: "WHY CHOOSE A&G?",
    whyChooseTitle: "Why Businesses Work With Us",
    whyChooseIntroduction: "A&G brings business understanding and technical execution together to provide flexible, practical and reliable support.",
    expertiseLabel: "OUR EXPERTISE",
    expertiseTitle: "Business capability and technical delivery in one team.",
    expertiseIntroduction: "A&G combines the operational expertise businesses need with the technology required to build, automate and improve their systems.",
    expertiseDetailsLabel: "Detailed capabilities",
    projectsLabel: "Projects",
    projectsTitle: "Selected Work & Service Samples",
    projectsIntroduction: "Case studies showing the business need, practical solution, technology and current outcome.",
    processLabel: "How We Work",
    processTitle: "How We Work",
    processIntroduction: "A clear process from business need to practical delivery.",
    finalCtaTitle: "Ready to improve your business operations?",
    finalCtaIntroduction: "Tell us what you need to organize, improve, automate, or build.",
    finalCtaAction: "Let's Work Together",
    contactLabel: "Contact",
    contactTitle: "Let’s Work Together",
    contactIntroduction: "Share the business support, workflow, or technology solution you would like to discuss."
  },

  about: [
    "A&G Business & Technology combines practical business support with technical delivery. We help organizations improve daily operations, strengthen their digital presence, automate repetitive work, and build maintainable technology solutions.",
    "Gizzle leads business services, client coordination and operational support, while Andrew leads software development, system architecture, automation and technical implementation."
  ],

  audiences: [
    "Startups",
    "Small Businesses",
    "Entrepreneurs",
    "Online Businesses",
    "Professional Service Providers",
    "E-commerce Businesses",
    "International Clients",
    "Organizations Needing Digital Support"
  ],

  whyChoose: [
    { title: "Business Understanding", description: "We understand business operations—not just technology." },
    { title: "Technical Expertise", description: "We combine business support with web, software, automation, and AI capabilities." },
    { title: "Flexible Support", description: "From individual tasks to ongoing operational support." },
    { title: "Practical Solutions", description: "We focus on solutions that businesses can actually use." },
    { title: "International Collaboration", description: "Built to work with businesses and clients across different markets." }
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
      name: "Andrew Leba",
      displayName: "Andrew Leba",
      vietnameseName: "Lê Bá Dũng",
      role: "Co-Founder & Technology Lead",
      extendedRole: "Full-Stack Developer | Programmer | AI Researcher | Technology Specialist",
      bio: "Andrew Leba leads full-stack software development, system architecture, API integration, database design, deployment and AI-assisted automation. He works across existing and new codebases to build, troubleshoot and deliver practical business systems.",
      roleDescription: "As Co-Founder & Technology Lead, Andrew Leba combines technical implementation with clear communication, documentation and responsible project delivery across new projects and existing systems.",
      image: "./assets/images/profile-dung-placeholder.jpeg",
      imageAlt: "Andrew Leba — Co-Founder and Technology Lead",
      serviceRole: "Co-Founder & Technology Lead",
      serviceCategory: "Technology Services",
      serviceImageAlt: "Andrew Leba — Co-Founder and Technology Lead",
      github: "https://github.com/lebad280324",
      linkedin: "", // EDIT HERE: Add the real LinkedIn URL when available.
      services: ["Full-Stack Development", "API & System Integration", "Database Systems", "Deployment & Infrastructure", "AI & Automation"]
    }
  ],

  services: [
    { icon: "VA", title: "Virtual Business Support", description: "Reliable administrative and operational assistance that helps businesses stay organized, responsive and focused.", featured: ["Administrative Assistance", "Calendar & Email Management", "Data Entry", "Document Management", "Customer Support", "Bookkeeping Support"], leadNames: ["Gizzle Montemayor"], responsible: "Gizzle — Founder & Business Services Lead" },
    { icon: "DM", title: "Digital Marketing", description: "Organized digital marketing support designed to improve visibility, lead management and customer communication.", featured: ["Social Media Management", "Lead Generation", "CRM Management", "Email Marketing", "Market Research", "Content Support"], leadNames: ["Gizzle Montemayor"], responsible: "Gizzle — Founder & Business Services Lead" },
    { icon: "DEV", title: "Web & Software Development", description: "Responsive websites and practical software solutions designed around business requirements and maintainable technology.", featured: ["Business Websites", "Landing Pages", "Front-End Development", "Full-Stack Applications", "Business Portals", "CRM and ERP Systems", "Website Maintenance", "API and Database Development"], leadNames: ["Andrew Leba"], responsible: "Andrew — Co-Founder & Technology Lead", actionLabel: "View Capabilities", actionHref: "#expertise" },
    { icon: "AI", title: "Automation & AI", description: "Practical automation and AI-assisted solutions that reduce repetitive work, improve data processing and support better business decisions.", featured: ["Business Process Automation", "AI-Assisted Workflows", "CRM Automation", "Data Processing", "AI Reporting Assistants", "Document Processing", "AI Business Solutions"], leadNames: ["Gizzle Montemayor", "Andrew Leba"], responsible: "Gizzle & Andrew" },
    { icon: "BT", title: "Business Technology", description: "Technology planning, systems and support focused on improving operations, scalability and long-term digital capability.", featured: ["Digital Transformation", "Technology Consulting", "Process Optimization", "Business Systems", "System Integration", "Cloud Deployment", "Technical Support"], leadNames: ["Andrew Leba"], responsible: "Andrew — Co-Founder & Technology Lead" }
  ],

  expertise: {
    business: {
      title: "Business",
      responsible: "Gizzle — Founder & Business Services Lead",
      items: ["Virtual Assistance", "Digital Operations", "CRM & Lead Generation", "Digital Marketing", "Bookkeeping Support", "Project Management"]
    },
    technology: {
      title: "Technology",
      responsible: "Andrew — Co-Founder & Technology Lead",
      items: ["Web Development", "Software Development", "Automation", "AI Solutions", "Data & Systems", "Technical Consulting"],
      details: [
        { title: "Web Development", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Vue.js", "React", "Next.js", "Responsive Web Design"] },
        { title: "Software Development", items: ["Python", "FastAPI", "Node.js", "REST APIs", "Odoo ERP", "CRM and ERP Systems", "Business Portals", "Booking Systems"] },
        { title: "Automation", items: ["Workflow Automation", "CRM Automation", "Email Automation", "Data Processing", "Business Process Automation", "API Integration"] },
        { title: "AI Solutions", items: ["AI Agents", "Large Language Models", "Retrieval-Augmented Generation", "AI Reporting Assistants", "Document Processing", "Customer Support Chatbots"] },
        { title: "Data & Systems", items: ["PostgreSQL", "SQL", "MySQL", "Database Design", "Business Intelligence", "Reporting Systems", "Dashboards", "Data Integration"] },
        { title: "Technical Consulting", items: ["System Architecture", "Existing Codebase Analysis", "Docker", "Linux", "Nginx", "Cloudflare", "Deployment", "CI/CD", "Monitoring", "Backup Planning"] }
      ]
    }
  },

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
      eyebrow: "Andrew Leba — Co-Founder & Technology Lead",
      title: "Full-Stack Engineering Capabilities",
      description: "We provide end-to-end full-stack development, covering user interfaces, backend services, databases, API integrations, deployment and ongoing technical support. Our approach focuses on building maintainable, secure and practical systems that support real business operations.",
      groups: [
        { icon: "FE", title: "Frontend Development", description: "Responsive and maintainable interfaces for websites, dashboards, portals and business applications.", featured: ["JavaScript & TypeScript", "Vue.js, React & Next.js", "Responsive and accessible interfaces"], services: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Responsive Web Design", "Vue.js", "React", "Next.js", "Component-Based User Interfaces", "Mobile-Friendly Interfaces", "Accessible Web Interfaces", "Dashboard and Portal Development"] },
        { icon: "BE", title: "Backend Development", description: "Backend services designed to manage business logic, users, permissions, records, workflows and integrations securely.", featured: ["Node.js & Python", "FastAPI", "Authentication and authorization"], services: ["Node.js", "Python", "FastAPI", "Authentication and Authorization", "Business Logic Development", "Background Processing", "File and Document Management", "Reporting Services", "Server-Side Validation", "PHP (supporting technology)", "Laravel (supporting technology)"], note: "PHP and Laravel are available as supporting technology options and are not presented as completed client implementations." },
        { icon: "API", title: "API & System Integration", description: "APIs and integrations that connect websites, business applications, CRM platforms, ERP systems and external services.", featured: ["REST API development", "CRM and ERP integration", "Third-party integrations"], services: ["REST API Development", "REST API Integration", "Third-Party API Integration", "CRM and ERP Integration", "Email and Notification Integration", "Payment and Booking Integration", "Data Synchronization", "Webhooks", "Import and Export Workflows", "Legacy System Integration"] },
        { icon: "DB", title: "Database Capabilities", description: "Structured and scalable data management for operational systems, reporting platforms and customer-facing applications.", featured: ["PostgreSQL & SQL", "Relational database design", "Data migration and reporting"], services: ["PostgreSQL", "MySQL", "SQL", "Relational Database Design", "Database Schema Design", "Data Migration", "Data Cleaning", "Record Management", "Query Optimization", "Reporting Databases", "Backup and Recovery Planning", "Supabase (available technology option)", "MongoDB (available technology option)"], note: "Supabase and MongoDB are available technology options and are not presented as completed client deployments." },
        { icon: "GIT", title: "Version Control & Collaboration", description: "Organized development workflows using Git and GitHub, with clear documentation and controlled code changes.", featured: ["Git & GitHub", "Branch-based development", "Code review and documentation"], services: ["Git", "GitHub", "Branch-Based Development", "Code Review", "Issue Tracking", "Existing Codebase Analysis", "Technical Documentation", "Deployment Documentation", "Change Management"] },
        { icon: "OPS", title: "Deployment, Cloud & Infrastructure", description: "Application deployment and infrastructure support for secure, stable and maintainable business systems.", featured: ["Docker & Docker Compose", "Linux servers & Nginx", "Cloud deployment and CI/CD"], services: ["Docker", "Docker Compose", "Linux Servers", "Nginx", "Cloudflare", "Cloud Deployment", "Secure Remote Access", "Environment Configuration", "CI/CD", "Automated Deployment", "Monitoring", "Backup Management", "Application Troubleshooting"] },
        { icon: "FIX", title: "Debugging & Technical Support", description: "Systematic troubleshooting across frontend, backend, databases, APIs and deployment environments.", featured: ["Frontend and backend debugging", "API and database troubleshooting", "Deployment issue resolution"], services: ["Debugging frontend and backend issues", "Reading and understanding existing codebases", "API troubleshooting", "Database troubleshooting", "Deployment issue resolution", "Performance investigation", "Error logging and monitoring", "Code maintenance and refactoring", "Technical documentation", "Independent problem solving"] },
        { icon: "AI", title: "AI-Assisted Development & Automation", description: "Practical use of AI and automation to accelerate business workflows, reporting, document processing and customer support.", featured: ["AI-assisted software development", "AI agents and reporting assistants", "Workflow automation"], services: ["AI-Assisted Software Development", "AI Agents", "Large Language Models", "Retrieval-Augmented Generation", "Prompt Engineering", "Workflow Automation", "AI Reporting Assistants", "Document Processing", "Data Extraction", "Customer Support Chatbots", "CRM and Email Automation", "Email and Lead Follow-Up Automation", "AI Integration with Existing Systems"] },
        { icon: "DEL", title: "Professional Delivery", description: "We combine technical implementation with clear communication, documentation and responsible project delivery. We can work with both new projects and existing codebases, investigate technical problems and recommend maintainable solutions.", featured: ["Clear communication", "Responsible project delivery", "Post-delivery technical support"], services: ["Clear Communication", "Technical Documentation", "Responsible Project Delivery", "Deadline Awareness", "Structured Problem Solving", "Ability to Work with Existing Systems", "Continuous Learning", "Maintainable Implementation", "Post-Delivery Technical Support"] }
      ]
    }
  ],

  projects: [
    {
      title: "CRM Pipeline Management",
      category: "Business Services",
      status: "Demonstration",
      image: "",
      imageAlt: "",
      description: "A service sample for organizing CRM stages, lead information and follow-up activity.",
      details: "An example of a structured CRM workflow that keeps pipeline stages, lead records and follow-up activity organized.",
      problem: "Lead records and follow-up activities can become difficult to track without a clear pipeline structure.",
      solution: "A structured CRM workflow for organizing pipeline stages, lead information and follow-up activity.",
      outcome: "Demonstrates an organized pipeline, consistent lead records and a repeatable follow-up workflow.",
      deliverables: ["Pipeline structure", "Lead organization", "Follow-up workflow"],
      tools: ["CRM", "Spreadsheets"],
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Lead Generation Research",
      category: "Business Services",
      status: "Demonstration",
      image: "",
      imageAlt: "",
      description: "A service sample for structured prospect research and organized lead information.",
      details: "An example of a repeatable research process for collecting, reviewing and organizing relevant prospect information.",
      problem: "Prospect research needs a consistent method for collecting relevant information and retaining useful context.",
      solution: "A repeatable research process with an organized lead list and supporting research notes.",
      outcome: "Demonstrates structured prospect research and lead information prepared for review and follow-up.",
      deliverables: ["Prospect research", "Lead list organization", "Research notes"],
      tools: ["Web research", "Spreadsheets"],
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Virtual Assistance Workflow",
      category: "Business Services",
      status: "Demonstration",
      image: "",
      imageAlt: "",
      description: "A service sample showing how recurring administrative tasks can be organized and tracked.",
      details: "An example of a practical administrative workflow for recurring tasks, priorities and progress visibility.",
      problem: "Recurring administrative tasks need clear priorities, ownership and progress visibility.",
      solution: "A practical workflow combining an administrative checklist, task tracking and progress updates.",
      outcome: "Demonstrates a repeatable way to organize and monitor recurring virtual assistance tasks.",
      deliverables: ["Task workflow", "Administrative checklist", "Progress tracker"],
      tools: ["Task management", "Documents"],
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Marketing Performance Report",
      category: "Business Services",
      status: "Demonstration",
      image: "",
      imageAlt: "",
      description: "A service sample for organizing campaign activity and marketing performance information.",
      details: "An example report structure that brings campaign activity and performance information into a clear review format.",
      problem: "Marketing activity and performance data can be difficult to review when they are stored across separate sources.",
      solution: "A structured reporting format that organizes campaign activity, tracking information and performance summaries.",
      outcome: "Demonstrates a clear format for reviewing marketing activity and performance information.",
      deliverables: ["Performance summary", "Campaign tracker", "Reporting format"],
      tools: ["Analytics", "Spreadsheets"],
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Operations and Project Tracker",
      category: "Business Services",
      status: "Demonstration",
      image: "",
      imageAlt: "",
      description: "A service sample for coordinating tasks, owners, due dates and project progress.",
      details: "An example tracker for coordinating responsibilities, deadlines and status updates across business operations.",
      problem: "Teams need a shared view of tasks, owners, deadlines and project status.",
      solution: "An operations tracker that coordinates task ownership, due dates and progress updates.",
      outcome: "Demonstrates a consistent operational view for coordinating work and monitoring project progress.",
      deliverables: ["Operations tracker", "Task ownership", "Status overview"],
      tools: ["Project management", "Spreadsheets"],
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Bookkeeping Administration Sample",
      category: "Business Services",
      status: "Demonstration",
      image: "",
      imageAlt: "",
      description: "A service sample for routine bookkeeping administration and financial data organization.",
      details: "An example workflow for organizing routine expense, invoice and financial record administration.",
      problem: "Routine expenses, invoices and financial records need consistent organization for administrative review.",
      solution: "A bookkeeping administration workflow for expense organization, invoice tracking and record filing.",
      outcome: "Demonstrates an organized approach to routine bookkeeping administration and financial data filing.",
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
      problem: "Dental clinic and medical operations require coordinated patient, appointment, inventory and reporting workflows.",
      solution: "An ERP platform in active development using Odoo as the operational foundation, PostgreSQL for data and Vue.js for the frontend.",
      outcome: "Core ERP architecture, demo data, role-based access and reporting capabilities are being developed; future mobile integration remains planned.",
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
      problem: "Business users need a simpler way to ask reporting questions without unrestricted access to operational databases.",
      solution: "A controlled natural-language reporting prototype connected to read-only analytics views with SQL validation safeguards.",
      outcome: "The prototype establishes a FastAPI service, analytics schema and controlled reporting workflow; ERP dashboard integration remains in preparation.",
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
      status: "Internal Project",
      description: "A resource booking workflow for managing meeting rooms and company vehicles in Odoo, including booking requests, approval states, notifications, email processing and permission groups.",
      details: "An internal Odoo workflow that coordinates resource requests, approvals, permissions and notifications for meeting rooms and company vehicles.",
      problem: "Internal meeting room and vehicle requests require clear availability, approval and notification workflows.",
      solution: "An Odoo booking workflow with request states, approver notifications, permission groups and calendar integration.",
      outcome: "A coordinated internal process for booking resources, managing approvals and sending scheduled notifications.",
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
      status: "Internal Project",
      description: "An Odoo module designed to help kitchen and HR teams manage employee meal registration and allowance-related information.",
      details: "An internal workflow module for managing employee meal registration, daily quantities, role permissions and allowance-related information.",
      problem: "Kitchen and HR teams need a consistent way to manage meal registration, daily quantities and allowance-related records.",
      solution: "An Odoo module with regular and non-regular meal workflows, employee actions, summaries and role-based permissions.",
      outcome: "An internal workflow for coordinating registrations, quantities, summaries and controlled access.",
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
      status: "In Development",
      description: "Digitalization of internal document and ISO-related processes. This work concerns workflow management only and does not represent or imply ISO certification.",
      details: "Workflow design and development for internal forms, reviews and document status management; it does not represent or imply ISO certification.",
      problem: "Internal forms, document reviews and approval steps need traceable status and role-based execution.",
      solution: "A digital workflow design covering electronic forms, conditional approvals, review checklists and document status tracking.",
      outcome: "Workflow structures and document organization are being prepared; this work does not represent or imply ISO certification.",
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
      status: "Internal Project",
      description: "A Docker Compose architecture used to run an ERP platform with isolated application, frontend and database services.",
      details: "A containerized application environment with isolated ERP, frontend and database services, persistent storage and deployment-oriented configuration.",
      problem: "An ERP application, frontend and database need isolated services and repeatable environment configuration.",
      solution: "A Docker Compose architecture with persistent volumes, an internal network, environment configuration and Cloudflare connectivity.",
      outcome: "A repeatable development infrastructure that separates application, frontend and database services and supports deployment preparation.",
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
      status: "Research Concept",
      description: "A FastAPI-based concept for an internal policy and document assistant. Retrieval components and planned functions remain under development and are not presented as completed.",
      details: "A research concept for an internal policy and document assistant; retrieval functions remain planned or under development and are not presented as complete.",
      problem: "Internal policy and document information can be difficult to retrieve quickly from a growing knowledge base.",
      solution: "A FastAPI-based research concept for document ingestion, retrieval and locally generated responses.",
      outcome: "Endpoint design is established while ingestion, vector search and retrieval functions remain planned or under development.",
      deliverables: ["Planned document upload and ingestion", "Planned text chunking", "Planned vector search with FAISS or Chroma", "Planned relevant-section retrieval", "Planned local LLM response generation", "FastAPI endpoint design"],
      tools: ["Python", "FastAPI", "Ollama", "FAISS or Chroma", "Retrieval-Augmented Generation"],
      image: "",
      imageAlt: "",
      repositoryUrl: "",
      showRepository: false
    },
    {
      title: "Business Website Development",
      category: "Technology Services",
      status: "Internal Project",
      problem: "The business needed a professional online presence that clearly communicated its services and made it easier for potential customers to get in touch.",
      solution: "A responsive business website with structured service information, clear calls to action, portfolio content, and mobile-friendly navigation.",
      outcome: "A professional digital presence with clear service positioning and lead-generation capability.",
      tools: ["HTML5", "CSS3", "JavaScript"],
      image: "",
      imageAlt: "",
      repositoryUrl: "",
      showRepository: false
    }
  ],

  process: [
    { number: "01", title: "Discover", description: "Understand your business and requirements." },
    { number: "02", title: "Plan", description: "Identify the right workflow, tools, and technology." },
    { number: "03", title: "Build", description: "Implement the solution or provide the required business support." },
    { number: "04", title: "Optimize", description: "Improve processes and measure results." }
  ],

  footerLinks: [
    { label: "Services", target: "#services" },
    { label: "Expertise", target: "#expertise" },
    { label: "Projects", target: "#projects" },
    { label: "Contact", target: "#contact" }
  ],

  contact: {
    emails: [
      { label: "Email Gizzle", address: "gizzle@agbusinesstechnology.com" },
      { label: "Email Andrew Leba", address: "andrewleba@agbusinesstechnology.com" }
    ],
    calendlyUrl: "", // EDIT HERE: Add Gizzle's real Calendly URL when available.
    whatsapp: "", // EDIT HERE: Add digits only, including country code.
    linkedin: "", // EDIT HERE: Add the real LinkedIn URL.
    github: "https://github.com/lebad280324",
    whatsappMessage: "Hello, I would like to discuss a business technology project.",
    location: "Vietnam / Available for remote collaboration"
  }
};
