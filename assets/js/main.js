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
      'meta[property="og:title"]': business.openGraphTitle || business.websiteTitle,
      'meta[property="og:description"]': business.openGraphDescription,
      'meta[name="twitter:title"]': business.openGraphTitle || business.websiteTitle,
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
    const heroTitle = $("#hero-title");
    heroTitle.replaceChildren(...business.hero.titleLines.map((line) => createElement("span", "hero-title-line", line)));
    setText("#hero-intro", business.hero.description);
    [
      ["#hero-primary-action", business.hero.primaryAction],
      ["#hero-secondary-action", business.hero.secondaryAction]
    ].forEach(([selector, action]) => {
      const link = $(selector);
      if (!link || !action || !/^#[a-z0-9-]+$/i.test(action.target)) return;
      link.href = action.target;
      $("span", link).textContent = action.label;
    });
    setText("#value-business-support", business.valueProposition.businessSupport);
    setText("#value-digital-marketing", business.valueProposition.digitalMarketing);
    setText("#value-technology", business.valueProposition.technology);
    setText("#value-project-management", business.valueProposition.projectManagement);
    setText("#value-support", business.valueProposition.supportingText);
    setText("#audience-label", sectionText.audienceLabel);
    setText("#audience-title", sectionText.audienceTitle);
    setText("#audience-intro", sectionText.audienceIntroduction);
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
    setText("#why-label", sectionText.whyChooseLabel);
    setText("#why-title", sectionText.whyChooseTitle);
    setText("#why-intro", sectionText.whyChooseIntroduction);
    setText("#expertise-label", sectionText.expertiseLabel);
    setText("#expertise-title", sectionText.expertiseTitle);
    setText("#expertise-intro", sectionText.expertiseIntroduction);
    setText("#expertise-details-label", sectionText.expertiseDetailsLabel);
    setText("#projects-label", sectionText.projectsLabel);
    setText("#projects-title", sectionText.projectsTitle);
    setText("#projects-intro", sectionText.projectsIntroduction);
    setText("#process-label", sectionText.processLabel);
    setText("#process-title", sectionText.processTitle);
    setText("#process-intro", sectionText.processIntroduction);
    setText("#final-cta-title", sectionText.finalCtaTitle);
    setText("#final-cta-intro", sectionText.finalCtaIntroduction);
    const finalAction = $("#final-cta-action span");
    if (finalAction) finalAction.textContent = sectionText.finalCtaAction;
    setText("#contact-label", sectionText.contactLabel);
    setText("#contact-title", sectionText.contactTitle);
    setText("#contact-intro", sectionText.contactIntroduction);
    setText("#contact-location", content.contact.location);
    setText("#footer-tagline", business.footerTagline);
    setText("#current-year", new Date().getFullYear());
  }

  function renderExpertiseOverview() {
    const overview = $("#expertise-overview");
    overview.replaceChildren();
    Object.values(content.expertise).forEach((area) => {
      const article = createElement("article", "expertise-card reveal");
      article.append(createElement("h3", "", area.title));
      article.append(createList(area.items, "expertise-list", `${area.title} expertise`));
      if (area.details?.length) {
        const disclosure = createElement("details", "expertise-disclosure");
        disclosure.append(createElement("summary", "", "Explore technology capabilities"));
        const groups = createElement("div", "expertise-detail-groups");
        area.details.forEach((group) => {
          const section = createElement("section", "expertise-detail-group");
          section.append(createElement("h4", "", group.title));
          section.append(createList(group.items, "tag-list", `${group.title} technologies`));
          groups.append(section);
        });
        disclosure.append(groups);
        article.append(disclosure);
      }
      article.append(createElement("p", "expertise-responsible", area.responsible));
      overview.append(article);
    });
  }

  function renderAudience() {
    const audienceList = $("#audience-list");
    audienceList.replaceChildren();
    content.audiences.forEach((audience, index) => {
      const item = createElement("li", "reveal");
      const number = createElement("span", "", String(index + 1).padStart(2, "0"));
      number.setAttribute("aria-hidden", "true");
      item.append(number, document.createTextNode(audience));
      audienceList.append(item);
    });
  }

  function renderWhyChoose() {
    const whyGrid = $("#why-grid");
    whyGrid.replaceChildren();
    content.whyChoose.forEach((reason, index) => {
      const article = createElement("article", "why-card reveal");
      const number = createElement("span", "why-number", String(index + 1).padStart(2, "0"));
      number.setAttribute("aria-hidden", "true");
      article.append(number, createElement("h3", "", reason.title), createElement("p", "", reason.description));
      whyGrid.append(article);
    });
  }

  function createProfessionalProfile(profile, memberName) {
    const disclosure = createElement("details", "member-profile");
    disclosure.append(createElement("summary", "", profile.summaryLabel || "View Professional Profile"));
    const profileBody = createElement("div", "member-profile-body");

    (profile.introduction || []).forEach((paragraph) => profileBody.append(createElement("p", "member-profile-intro", paragraph)));

    if (profile.expertiseGroups?.length) {
      const expertiseSection = createElement("section", "member-profile-section");
      expertiseSection.append(createElement("h4", "", "Core Expertise"));
      const expertiseGrid = createElement("div", "member-profile-expertise");
      profile.expertiseGroups.forEach((group) => {
        const groupSection = createElement("section", "member-profile-group");
        groupSection.append(createElement("h5", "", group.title));
        groupSection.append(createList(group.items, "", `${group.title} capabilities`));
        expertiseGrid.append(groupSection);
      });
      expertiseSection.append(expertiseGrid);
      profileBody.append(expertiseSection);
    }

    if (profile.roles?.length) {
      const rolesSection = createElement("section", "member-profile-section");
      rolesSection.append(createElement("h4", "", "Professional Roles"));
      const roles = createElement("dl", "member-profile-roles");
      profile.roles.forEach((role) => roles.append(createElement("dt", "", role.title), createElement("dd", "", role.description)));
      rolesSection.append(roles);
      profileBody.append(rolesSection);
    }

    if (profile.industries?.length) {
      const industriesSection = createElement("section", "member-profile-section");
      industriesSection.append(createElement("h4", "", "Industries I Can Support"));
      industriesSection.append(createList(profile.industries, "member-profile-industries", `${memberName} supported industries`));
      profileBody.append(industriesSection);
    }

    if (profile.valueHeading || profile.valueDescription || profile.approach || profile.valueProposition) {
      const valueSection = createElement("section", "member-profile-section member-profile-value");
      valueSection.append(createElement("h4", "", "What I Bring to a Business"));
      if (profile.valueHeading) valueSection.append(createElement("p", "member-profile-value-heading", profile.valueHeading));
      if (profile.valueDescription) valueSection.append(createElement("p", "", profile.valueDescription));
      if (profile.approach) valueSection.append(createElement("p", "member-profile-approach", profile.approach));
      if (profile.valueProposition) valueSection.append(createElement("blockquote", "member-profile-quote", profile.valueProposition));
      profileBody.append(valueSection);
    }

    if (profile.closing) profileBody.append(createElement("p", "member-profile-closing", profile.closing));
    disclosure.append(profileBody);
    return disclosure;
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
      if (member.professionalProfile) body.append(createProfessionalProfile(member.professionalProfile, member.displayName || member.name));
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
      const leads = (service.leadNames || [service.leadName]).map((name) => content.team.find((member) => member.name === name)).filter(Boolean);
      const article = createElement("article", "service-card reveal");
      const top = createElement("div", "service-top");
      const number = createElement("span", "", String(index + 1).padStart(2, "0"));
      const icon = createElement("span", "", service.icon || "↗");
      icon.setAttribute("aria-hidden", "true");
      top.append(number, icon);

      article.append(top, createElement("h3", "", service.title), createElement("p", "service-description", service.description));
      article.append(createList(service.featured || [], "tag-list service-featured", `${service.title} featured services`));

      const panelId = `service-panel-${index}`;
      const buttonId = `service-button-${index}`;
      const disclosureButton = createElement("button", "service-action service-disclosure-toggle");
      disclosureButton.type = "button";
      disclosureButton.id = buttonId;
      disclosureButton.setAttribute("aria-expanded", "false");
      disclosureButton.setAttribute("aria-controls", panelId);
      disclosureButton.setAttribute("data-accordion-toggle", "");
      disclosureButton.append(document.createTextNode(`${content.sectionText.servicesActionLabel} `));
      const disclosureSymbol = createElement("span", "", "+");
      disclosureSymbol.setAttribute("aria-hidden", "true");
      disclosureButton.append(disclosureSymbol);

      const disclosurePanel = createElement("div", "service-details");
      disclosurePanel.id = panelId;
      disclosurePanel.hidden = true;
      disclosurePanel.setAttribute("role", "region");
      disclosurePanel.setAttribute("aria-labelledby", buttonId);
      disclosurePanel.append(createList(service.services || [], "service-full-list", `${service.title} services`));
      if (service.note) disclosurePanel.append(createElement("p", "service-note", service.note));
      article.append(disclosureButton, disclosurePanel);

      const responsible = createElement("div", "service-lead service-responsible");
      const avatars = createElement("div", "service-avatars");
      leads.forEach((lead) => {
        const portraitFrame = createElement("div", "service-portrait-frame");
        const fallback = createElement("span", "service-portrait-fallback", (lead.displayName || lead.name).charAt(0));
        fallback.setAttribute("aria-hidden", "true");
        const imagePath = safeAssetPath(lead.image);
        if (imagePath) {
          const portraitClass = (lead.displayName || lead.name).toLowerCase().replace(/[^a-z0-9]+/g, "-");
          const image = createElement("img", `service-portrait service-portrait-${portraitClass}`);
          image.src = imagePath;
          image.alt = lead.serviceImageAlt || lead.imageAlt;
          image.loading = "lazy";
          image.decoding = "async";
          image.width = 88;
          image.height = 88;
          fallback.hidden = true;
          image.addEventListener("error", () => { image.remove(); fallback.hidden = false; });
          portraitFrame.append(image, fallback);
        } else {
          portraitFrame.append(fallback);
        }
        avatars.append(portraitFrame);
      });
      const leadCopy = createElement("div", "service-lead-copy");
      leadCopy.append(createElement("p", "service-category", "Responsible team member"), createElement("p", "service-lead-role", service.responsible));
      responsible.append(avatars, leadCopy);
      article.append(responsible);

      servicesGrid.append(article);
    });
  }

  function normalizedProject(project) {
    const status = project.status || "In Development";
    const outcomeLabel = status === "Demonstration"
      ? "Demonstrated Outcome"
      : /development|prototype|research/i.test(status) ? "Current Outcome" : "Result";
    return {
      ...project,
      category: project.category || "Technology Services",
      status,
      problem: project.problem || project.description || "",
      solution: project.solution || project.details || "",
      tools: project.tools || project.technologies || [],
      outcome: project.outcome || "",
      outcomeLabel
    };
  }

  function renderProjectDialog(projectData) {
    const project = normalizedProject(projectData);
    const dialogContent = $("#dialog-content");
    dialogContent.replaceChildren();
    dialogContent.append(createElement("p", "project-type", `${project.category} · ${project.status}`));
    const title = createElement("h2", "", project.title);
    title.id = "dialog-title";
    dialogContent.append(title);
    [["Problem", project.problem], ["Solution", project.solution]].forEach(([label, value]) => {
      dialogContent.append(createElement("h3", "", label), createElement("p", "dialog-description", value));
    });
    if (project.tools.length) {
      dialogContent.append(createElement("h3", "", "Technology"));
      dialogContent.append(createList(project.tools, "tag-list dialog-tags", "Project tools and technology"));
    }
    dialogContent.append(createElement("h3", "", project.outcomeLabel), createElement("p", "dialog-description", project.outcome));

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
      const body = createElement("div", "project-body");
      const type = createElement("p", "project-type");
      const statusDot = createElement("span", "status-dot");
      statusDot.setAttribute("aria-hidden", "true");
      type.append(statusDot, document.createTextNode(`${project.category} · ${project.status}`));
      body.append(type, createElement("h3", "", project.title));
      const caseStudy = createElement("dl", "project-case-study");
      [["Problem", project.problem], ["Solution", project.solution]].forEach(([label, value]) => {
        caseStudy.append(createElement("dt", "", label), createElement("dd", "", value));
      });
      if (project.tools.length) {
        caseStudy.append(createElement("dt", "", "Technology"));
        const technology = createElement("dd");
        technology.append(createList(project.tools, "tag-list dark-tags", "Project technology"));
        caseStudy.append(technology);
      }
      caseStudy.append(createElement("dt", "", project.outcomeLabel), createElement("dd", "", project.outcome));
      body.append(caseStudy);

      const actions = createElement("div", "project-actions");
      const details = createElement("button", "details-button", "View Case Study →");
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
      article.append(body);
      projectsGrid.append(article);
    });
  }

  function renderProcess() {
    const processGrid = $("#process-grid");
    processGrid.replaceChildren();
    content.process.forEach((step, index) => {
      const item = createElement("li", "reveal");
      item.append(
        createElement("span", "", step.number || String(index + 1).padStart(2, "0")),
        createElement("strong", "", step.title),
        createElement("p", "", step.description)
      );
      processGrid.append(item);
    });
  }

  function renderContact() {
    const contact = content.contact;
    const emails = (contact.emails || []).filter((item) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(item.address));
    const calendlyReady = Boolean(safeUrl(contact.calendlyUrl));
    const linkedInReady = Boolean(safeUrl(contact.linkedin));
    const whatsappReady = /^\d{8,15}$/.test(contact.whatsapp);
    const items = [
      ...emails.map((item) => ({ label: item.label, icon: "@", href: `mailto:${item.address}`, ready: true })),
      { label: "Schedule a Call", icon: "CAL", href: calendlyReady ? contact.calendlyUrl : "", ready: calendlyReady },
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

    const footerContact = $("#footer-contact");
    footerContact.replaceChildren();
    emails.forEach((item) => {
      const row = createElement("div", "footer-contact-row");
      row.append(createElement("p", "footer-contact-label", item.department || item.label));
      const link = createElement("a", "", item.address);
      link.href = `mailto:${item.address}`;
      row.append(link);
      footerContact.append(row);
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
    const label = $(".sr-only", button);
    const setMenuState = (open) => {
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
      label.textContent = open ? "Close navigation menu" : "Open navigation menu";
      menu.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
    };
    const closeMenu = () => setMenuState(false);
    button.addEventListener("click", () => {
      const opening = button.getAttribute("aria-expanded") !== "true";
      setMenuState(opening);
    });
    $$("a", menu).forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });

    const navigationLinks = $$("a[href^='#']", menu);
    const navigationSections = navigationLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
    let scheduled = false;
    const updateCurrentLink = () => {
      const current = [...navigationSections].reverse().find((section) => section.getBoundingClientRect().top <= 150) || navigationSections[0];
      navigationLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${current.id}`) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
      scheduled = false;
    };
    window.addEventListener("scroll", () => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(updateCurrentLink);
    }, { passive: true });
    updateCurrentLink();
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
  renderExpertiseOverview();
  renderAudience();
  renderWhyChoose();
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
