(() => {
  "use strict";

  const content = window.PORTFOLIO_CONTENT;
  if (!content) {
    console.error("Website content could not be loaded. Check ./assets/js/content.js.");
    return;
  }

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const safeUrl = (value = "") => /^(https?:\/\/|mailto:)/i.test(String(value).trim()) ? String(value).trim() : "";
  const safeAssetPath = (value = "") => /^\.\/assets\/[a-z0-9_./-]+$/i.test(String(value).trim()) && !String(value).includes("..") ? String(value).trim() : "";
  const setText = (selector, value) => { const element = $(selector); if (element) element.textContent = value || ""; };
  const createElement = (tagName, className = "", value = "") => {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (value !== "") element.textContent = String(value);
    return element;
  };
  const createList = (items = [], className = "", label = "") => {
    const list = createElement("ul", className);
    if (label) list.setAttribute("aria-label", label);
    items.forEach((item) => list.append(createElement("li", "", item)));
    return list;
  };

  function renderMetadata() {
    const { business } = content;
    document.title = business.websiteTitle;
    const metadata = {
      'meta[name="description"]': business.description,
      'meta[property="og:title"]': business.websiteTitle,
      'meta[property="og:description"]': business.openGraphDescription,
      'meta[name="twitter:title"]': business.websiteTitle,
      'meta[name="twitter:description"]': business.openGraphDescription,
      'meta[property="og:url"]': business.canonicalUrl
    };
    Object.entries(metadata).forEach(([selector, value]) => { const tag = $(selector); if (tag && value) tag.content = value; });
    const canonical = $("#canonical-link");
    if (canonical) {
      if (business.canonicalUrl) canonical.href = business.canonicalUrl;
      else canonical.removeAttribute("href");
    }

    if (business.structuredDataEnabled && business.canonicalUrl) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: business.name,
        url: business.canonicalUrl,
        description: business.description,
        areaServed: "Remote"
      });
      document.head.appendChild(script);
    }
  }

  function renderBaseContent() {
    const { business, sectionText } = content;
    $$('[data-business-name]').forEach((element) => { element.textContent = business.name; });
    $$("[data-nav]").forEach((element) => { element.textContent = sectionText.navigation[element.dataset.nav] || ""; });
    setText("#hero-eyebrow", business.hero.eyebrow);
    setText("#hero-title", business.hero.title);
    setText("#hero-positioning", business.hero.positioning);
    setText("#hero-intro", business.hero.description);
    setText("#hero-note", business.heroNote);
    setText("#hero-services-action", sectionText.heroActions.services);
    setText("#hero-projects-action", sectionText.heroActions.projects);
    setText("#hero-contact-action", sectionText.heroActions.contact);
    setText("#about-label", sectionText.aboutLabel);
    setText("#about-title", sectionText.aboutTitle);
    const aboutBody = $("#about-body");
    aboutBody.replaceChildren(...content.about.map((paragraph) => createElement("p", "", paragraph)));
    setText("#team-label", sectionText.teamLabel);
    setText("#team-title", sectionText.teamTitle);
    setText("#team-intro", sectionText.teamIntroduction);
    setText("#services-label", sectionText.servicesLabel);
    setText("#services-title", sectionText.servicesTitle);
    setText("#services-intro", sectionText.servicesIntroduction);
    setText("#expertise-label", sectionText.expertiseLabel);
    setText("#expertise-title", sectionText.expertiseTitle);
    setText("#expertise-intro", sectionText.expertiseIntroduction);
    setText("#projects-label", sectionText.projectsLabel);
    setText("#projects-title", sectionText.projectsTitle);
    setText("#projects-intro", sectionText.projectsIntroduction);
    setText("#process-label", sectionText.processLabel);
    setText("#process-title", sectionText.processTitle);
    setText("#contact-label", sectionText.contactLabel);
    setText("#contact-title", sectionText.contactTitle);
    setText("#contact-intro", sectionText.contactIntroduction);
    setText("#contact-location", content.contact.location);
    setText("#footer-tagline", business.footerTagline);
    setText("#current-year", new Date().getFullYear());
  }

  function renderTeam() {
    const teamGrid = $("#team-grid");
    teamGrid.replaceChildren();
    content.team.forEach((member, index) => {
      const article = createElement("article", "team-card reveal");
      const portrait = createElement("div", "portrait-wrap");
      const imagePath = safeAssetPath(member.image);
      if (imagePath) {
        const image = createElement("img");
        image.src = imagePath;
        image.alt = member.imageAlt;
        image.width = 640;
        image.height = 720;
        image.loading = "lazy";
        image.decoding = "async";
        portrait.append(image);
      }

      const body = createElement("div", "team-card-body");
      body.append(createElement("span", "card-number", String(index + 1).padStart(2, "0")));
      body.append(createElement("p", "member-role", member.role));
      body.append(createElement("h3", "", member.displayName || member.name));
      if (member.vietnameseName) body.append(createElement("p", "member-local-name", member.vietnameseName));
      if (member.extendedRole) body.append(createElement("p", "member-extended", member.extendedRole));
      body.append(createElement("p", "", member.bio));
      if (member.roleDescription) body.append(createElement("p", "member-role-description", member.roleDescription));
      if (member.services?.length) body.append(createList(member.services, "member-services", "Areas of work"));
      if (member.credentials?.length) {
        const credentials = createElement("div", "member-credentials");
        credentials.append(createElement("h4", "", "Credentials"));
        credentials.append(createList(member.credentials));
        body.append(credentials);
      }
      const links = createElement("div", "member-links");
      [["GitHub", member.github], ["LinkedIn", member.linkedin]].forEach(([label, value]) => {
        const url = safeUrl(value);
        if (!url) return;
        const link = createElement("a", "member-link", `${label} ↗`);
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        links.append(link);
      });
      body.append(links);
      article.append(portrait, body);
      teamGrid.append(article);
    });
  }

  function renderServices() {
    const servicesGrid = $("#services-grid");
    servicesGrid.replaceChildren();
    content.services.forEach((service, index) => {
      const lead = content.team.find((member) => member.name === service.leadName);
      const article = createElement("article", "service-card reveal");
      const top = createElement("div", "service-top");
      const number = createElement("span", "", String(index + 1).padStart(2, "0"));
      const icon = createElement("span", "", service.icon || "↗");
      icon.setAttribute("aria-hidden", "true");
      top.append(number, icon);

      const leadHeader = createElement("div", "service-lead");
      const portraitFrame = createElement("div", "service-portrait-frame");
      const fallback = createElement("span", "service-portrait-fallback", (lead?.name || service.leadName || "?").charAt(0));
      fallback.setAttribute("aria-hidden", "true");
      const imagePath = safeAssetPath(lead?.image);
      if (imagePath) {
        const portraitClass = (lead.displayName || lead.name).toLowerCase().replace(/[^a-z0-9]+/g, "-");
        const image = createElement("img", `service-portrait service-portrait-${portraitClass}`);
        image.src = imagePath;
        image.alt = lead.serviceImageAlt || lead.imageAlt;
        image.loading = "lazy";
        image.decoding = "async";
        image.width = 112;
        image.height = 112;
        fallback.hidden = true;
        image.addEventListener("error", () => { image.remove(); fallback.hidden = false; });
        portraitFrame.append(image, fallback);
      } else {
        portraitFrame.append(fallback);
      }

      const leadCopy = createElement("div", "service-lead-copy");
      leadCopy.append(
        createElement("p", "service-lead-name", lead?.name || service.leadName),
        createElement("p", "service-lead-role", lead?.serviceRole || "Service Lead")
      );
      if (lead?.experience) leadCopy.append(createElement("p", "service-lead-experience", lead.experience));
      leadHeader.append(portraitFrame, leadCopy);

      article.append(top, leadHeader);
      article.append(createElement("p", "service-category", lead?.serviceCategory || "Services"));
      article.append(createElement("h3", "", service.title));
      article.append(createElement("p", "service-description", service.description));

      if (service.expertiseGroups?.length) {
        const groups = createElement("div", "service-expertise-groups");
        service.expertiseGroups.forEach((group) => {
          const groupSection = createElement("section", "service-expertise-group");
          groupSection.append(createElement("h4", "", group.title));
          groupSection.append(createList(group.skills, "tag-list service-skill-tags", `${group.title} skills`));
          groups.append(groupSection);
        });
        article.append(groups);
      } else {
        article.append(createList(service.tags || [], "tag-list", "Related capabilities"));
      }
      servicesGrid.append(article);
    });

    const serviceProfiles = $("#service-profiles");
    serviceProfiles.replaceChildren();
    content.serviceProfiles.forEach((profile) => {
      const profileId = String(profile.id).replace(/[^a-z0-9-]/gi, "-");
      const profileSection = createElement("section", "service-profile reveal");
      profileSection.setAttribute("aria-labelledby", `${profileId}-services-title`);
      const heading = createElement("div", "service-profile-heading");
      const headingCopy = createElement("div");
      headingCopy.append(createElement("p", "eyebrow", profile.eyebrow));
      const title = createElement("h3", "", profile.title);
      title.id = `${profileId}-services-title`;
      headingCopy.append(title);
      heading.append(headingCopy, createElement("p", "", profile.description));

      const accordionGrid = createElement("div", "accordion-grid");
      profile.groups.forEach((group, index) => {
        const panelId = `${profileId}-service-panel-${index}`;
        const buttonId = `${profileId}-service-button-${index}`;
        const card = createElement("article", "accordion-card");
        const accordionIcon = createElement("div", "accordion-icon", group.icon);
        accordionIcon.setAttribute("aria-hidden", "true");
        card.append(accordionIcon, createElement("h4", "", group.title));
        card.append(createElement("p", "", group.description));
        card.append(createList(group.featured, "featured-services", "Featured services"));

        const button = createElement("button", "accordion-toggle");
        button.type = "button";
        button.id = buttonId;
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", panelId);
        button.setAttribute("data-accordion-toggle", "");
        button.append(document.createTextNode(`${content.sectionText.servicesActionLabel} `));
        const symbol = createElement("span", "", "+");
        symbol.setAttribute("aria-hidden", "true");
        button.append(symbol);

        const panel = createElement("div", "accordion-panel");
        panel.id = panelId;
        panel.hidden = true;
        panel.setAttribute("role", "region");
        panel.setAttribute("aria-labelledby", buttonId);
        panel.append(createList(group.services, "", `${group.title} services`));
        if (group.note) panel.append(createElement("p", "service-note", group.note));
        card.append(button, panel);
        accordionGrid.append(card);
      });
      profileSection.append(heading, accordionGrid);
      serviceProfiles.append(profileSection);
    });
  }

  function normalizedProject(project) {
    return {
      ...project,
      category: project.category || "Technology Services",
      deliverables: project.deliverables || project.capabilities || [],
      tools: project.tools || project.technologies || [],
      details: project.details || project.description || ""
    };
  }

  function renderProjectDialog(projectData) {
    const project = normalizedProject(projectData);
    const dialogContent = $("#dialog-content");
    dialogContent.replaceChildren();
    dialogContent.append(createElement("p", "project-type", `${project.category} · ${project.status}`));
    const title = createElement("h2", "", project.title);
    title.id = "dialog-title";
    dialogContent.append(title, createElement("p", "dialog-description", project.details));

    if (project.deliverables.length) {
      dialogContent.append(createElement("h3", "", "Deliverables"));
      dialogContent.append(createList(project.deliverables, "capability-list", "Project deliverables"));
    }
    if (project.tools.length) {
      dialogContent.append(createElement("h3", "", "Tools and technology"));
      dialogContent.append(createList(project.tools, "tag-list dialog-tags", "Project tools and technology"));
    }

    const repositoryUrl = project.showRepository ? safeUrl(project.repositoryUrl) : "";
    if (repositoryUrl) {
      const repository = createElement("a", "button", "View GitHub ↗");
      repository.href = repositoryUrl;
      repository.target = "_blank";
      repository.rel = "noopener noreferrer";
      dialogContent.append(repository);
    }
  }

  function renderProjects() {
    const projectsGrid = $("#projects-grid");
    projectsGrid.replaceChildren();
    content.projects.forEach((projectData, index) => {
      const project = normalizedProject(projectData);
      const article = createElement("article", "project-card reveal");
      const imagePath = safeAssetPath(project.image);
      const media = createElement("div", imagePath ? "project-image" : "project-image project-image-placeholder");
      if (imagePath) {
        const image = createElement("img");
        image.src = imagePath;
        image.alt = project.imageAlt || `${project.title} preview`;
        image.width = 800;
        image.height = 520;
        image.loading = "lazy";
        image.decoding = "async";
        image.addEventListener("error", () => {
          media.classList.add("project-image-placeholder");
          media.replaceChildren(createElement("span", "", "Sample image coming soon"));
        });
        media.append(image);
      } else {
        media.append(createElement("span", "", project.status === "Sample image coming soon" ? project.status : "Sample image coming soon"));
      }

      const body = createElement("div", "project-body");
      const type = createElement("p", "project-type");
      const statusDot = createElement("span", "status-dot");
      statusDot.setAttribute("aria-hidden", "true");
      type.append(statusDot, document.createTextNode(`${project.category} · ${project.status}`));
      body.append(type, createElement("h3", "", project.title), createElement("p", "", project.description));
      if (project.deliverables.length) body.append(createList(project.deliverables.slice(0, 3), "project-highlights", "Main deliverables"));
      if (project.tools.length) body.append(createList(project.tools.slice(0, 5), "tag-list dark-tags", "Tools and technology"));

      const actions = createElement("div", "project-actions");
      const details = createElement("button", "details-button", "View details →");
      details.type = "button";
      details.dataset.projectIndex = String(index);
      actions.append(details);
      const repositoryUrl = project.showRepository ? safeUrl(project.repositoryUrl) : "";
      if (repositoryUrl) {
        const repository = createElement("a", "member-link", "View GitHub ↗");
        repository.href = repositoryUrl;
        repository.target = "_blank";
        repository.rel = "noopener noreferrer";
        actions.append(repository);
      }
      body.append(actions);
      article.append(media, body);
      projectsGrid.append(article);
    });
  }

  function renderProcess() {
    const processGrid = $("#process-grid");
    processGrid.replaceChildren();
    content.process.forEach((step, index) => {
      const item = createElement("li", "reveal");
      item.append(createElement("span", "", String(index + 1).padStart(2, "0")), createElement("strong", "", step));
      processGrid.append(item);
    });
  }

  function renderContact() {
    const contact = content.contact;
    const emails = (contact.emails || []).filter((item) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(item.address));
    const calendlyReady = Boolean(safeUrl(contact.calendlyUrl));
    const linkedInReady = Boolean(safeUrl(contact.linkedin));
    const githubReady = Boolean(safeUrl(contact.github));
    const whatsappReady = /^\d{8,15}$/.test(contact.whatsapp);
    const items = [
      ...emails.map((item) => ({ label: item.label, icon: "@", href: `mailto:${item.address}`, ready: true })),
      { label: "Schedule a Call", icon: "CAL", href: calendlyReady ? contact.calendlyUrl : "", ready: calendlyReady },
      { label: "GitHub", icon: "gh", href: githubReady ? contact.github : "", ready: githubReady },
      { label: "LinkedIn", icon: "in", href: linkedInReady ? contact.linkedin : "", ready: linkedInReady },
      { label: "WhatsApp", icon: "wa", href: whatsappReady ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}` : "", ready: whatsappReady }
    ];
    const contactActions = $("#contact-actions");
    contactActions.replaceChildren();
    items.filter((item) => item.ready).forEach((item) => {
      const link = createElement("a");
      link.href = item.href;
      if (item.href.startsWith("http")) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      const icon = createElement("span", "", item.icon);
      icon.setAttribute("aria-hidden", "true");
      link.append(icon, document.createTextNode(item.label));
      contactActions.append(link);
    });

    const socialLinks = $("#social-links");
    socialLinks.replaceChildren();
    [["GitHub", contact.github, githubReady], ["LinkedIn", contact.linkedin, linkedInReady]].forEach(([label, value, ready]) => {
      if (!ready) return;
      const link = createElement("a", "", `${label} ↗`);
      link.href = value;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      socialLinks.append(link);
    });
  }

  function setupProjectDialog() {
    const dialog = $("#project-dialog");
    $("#projects-grid").addEventListener("click", (event) => {
      const button = event.target.closest("[data-project-index]");
      if (!button) return;
      renderProjectDialog(content.projects[Number(button.dataset.projectIndex)]);
      dialog.showModal();
    });
    $(".dialog-close", dialog).addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  }

  function setupAccordions() {
    $$("[data-accordion-toggle]").forEach((button) => {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      button.addEventListener("click", () => {
        const expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!expanded));
        panel.hidden = expanded;
        $("span", button).textContent = expanded ? "+" : "−";
      });
    });
  }

  function setupNavigation() {
    const button = $(".nav-toggle");
    const menu = $("#nav-menu");
    const closeMenu = () => { button.setAttribute("aria-expanded", "false"); menu.classList.remove("is-open"); document.body.classList.remove("menu-open"); };
    button.addEventListener("click", () => {
      const opening = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(opening));
      menu.classList.toggle("is-open", opening);
      document.body.classList.toggle("menu-open", opening);
    });
    $$("a", menu).forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
  }

  function setupReveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.1 });
    items.forEach((item) => observer.observe(item));
  }

  renderMetadata();
  renderBaseContent();
  renderTeam();
  renderServices();
  renderProjects();
  renderProcess();
  renderContact();
  setupProjectDialog();
  setupAccordions();
  setupNavigation();
  setupReveal();
})();
