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
    websiteTitle: "Leba | Business and Technology Services",
    description: "Business and technology services focused on ERP, custom software, system integration, automation, reporting, and dependable infrastructure.",
    heroEyebrow: "Business and technology services",
    heroTitle: "Business Expertise Meets Technology",
    heroIntroduction: "We build practical digital solutions that connect business operations, software development, automation and data.",
    heroNote: "A focused two-person team for business analysis, system development and long-term technical improvement.",
    footerTagline: "Practical systems for real business operations.",
    canonicalUrl: "", // EDIT HERE: Add the final GitHub Pages or custom-domain URL.
    structuredDataEnabled: false // EDIT HERE: Enable only after the final business name and URL are confirmed.
  },

  sectionText: {
    navigation: { about: "About", team: "Team", services: "Services", skills: "Capabilities", work: "Projects", contact: "Contact" },
    heroActions: { services: "Explore Our Services", projects: "View Projects", contact: "Contact Us" },
    aboutLabel: "About us",
    aboutTitle: "Business understanding, backed by technical delivery.",
    teamLabel: "Our team",
    teamTitle: "Two complementary areas of expertise.",
    teamIntroduction: "We combine software and infrastructure capability with business development and professional services.",
    servicesLabel: "Our services",
    servicesTitle: "Solutions designed around operational requirements.",
    servicesIntroduction: "These are capabilities we can provide. Individual scope, feasibility and delivery approach are confirmed for each engagement.",
    skillsLabel: "Technical capabilities",
    skillsTitle: "Technologies used across systems, data and deployment.",
    skillsIntroduction: "Capabilities are grouped by working area without artificial percentages or proficiency scores.",
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
    "We help translate operational requirements into maintainable digital systems. Our work can cover workflow analysis, ERP customization, APIs, user interfaces, reporting, automation and deployment.",
    "The team is intentionally small and collaborative. We focus on understanding the actual process, defining a suitable technical approach and keeping communication direct throughout development."
  ],

  team: [
    {
      name: "Lê Bá Dũng",
      role: "System Developer, BI & AI Automation Specialist",
      bio: "A system developer focused on ERP platforms, API integration, process automation, BI reporting and Docker-based infrastructure. His work includes Odoo development and customization, frontend applications, REST APIs, PostgreSQL, Linux service deployment and research into AI agents for business reporting.",
      image: "./assets/images/profile-dung-placeholder.jpeg",
      imageAlt: "Placeholder portrait for Lê Bá Dũng — replace with an approved professional photo",
      github: "https://github.com/lebad280324",
      linkedin: "", // EDIT HERE: Add the real LinkedIn URL when available.
      services: ["System development", "BI and reporting", "AI and business automation"]
    },
    {
      name: "Sugar", // EDIT HERE: Add the second member's real name.
      role: "Business Development & Professional Services",
      bio: "Information will be added soon.",
      image: "./assets/images/profile-partner-placeholder.svg",
      imageAlt: "Placeholder portrait for the second team member",
      github: "",
      linkedin: "", // EDIT HERE: Add the real LinkedIn URL when available.
      services: [] // EDIT HERE: Add this member's confirmed services when provided.
    }
  ],

  services: [
    { title: "Custom Software Development", description: "Development of custom web applications and internal business systems designed around real operational requirements.", tags: ["Web applications", "Internal systems", "Responsive UI"] },
    { title: "Odoo ERP Development", description: "Odoo installation, customization, custom module development, API integration and business workflow implementation.", tags: ["Odoo", "Custom modules", "ERP integration"] },
    { title: "Business Process Digitalization", description: "Conversion of manual and paper-based processes into controlled digital workflows with approvals, permissions and status tracking.", tags: ["Workflow", "Approvals", "Access control"] },
    { title: "API and System Integration", description: "Integration between ERP, CRM, websites, databases, government-related services and other business platforms when supported.", tags: ["REST API", "Data exchange", "System integration"] },
    { title: "BI Dashboards and Reporting", description: "Development of management dashboards, business reports, PostgreSQL analytics views and data pipelines.", tags: ["BI dashboards", "PostgreSQL", "Reporting"] },
    { title: "AI and Business Automation", description: "AI agents, automated reporting, internal knowledge assistants and workflow automation using local or cloud-based AI models.", tags: ["AI agents", "Automation", "Local LLM"] },
    { title: "Docker and Linux Deployment", description: "Dockerized deployment of web applications, Odoo, PostgreSQL and supporting services on Linux servers.", tags: ["Docker Compose", "Linux", "Application deployment"] },
    { title: "Cloud and Secure Remote Access", description: "Reverse proxy, Cloudflare Tunnel, Nginx, HTTPS and secure publication of internal business applications.", tags: ["Cloudflare", "Nginx", "HTTPS"] }
  ],

  skillGroups: [
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
    linkedin: "", // EDIT HERE: Add the real LinkedIn URL.
    github: "https://github.com/lebad280324",
    whatsappNumber: "", // EDIT HERE: Digits only, including country code.
    whatsappMessage: "Hello, I would like to discuss a business technology project.",
    location: "Vietnam / Available for remote collaboration"
  }
};
