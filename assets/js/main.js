(() => {
  "use strict";

  const content = window.PORTFOLIO_CONTENT;
  if (!content) {
    console.error("Website content could not be loaded. Check ./assets/js/content.js.");
    return;
  }

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escapeHTML = (value = "") => String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
  const safeUrl = (value = "") => /^(https?:\/\/|mailto:)/i.test(String(value).trim()) ? String(value).trim() : "";
  const setText = (selector, value) => { const element = $(selector); if (element) element.textContent = value || ""; };
  const externalAttributes = 'target="_blank" rel="noopener noreferrer"';

  function renderMetadata() {
    const { business } = content;
    document.title = business.websiteTitle;
    const metadata = {
      'meta[name="description"]': business.description,
      'meta[property="og:title"]': business.websiteTitle,
      'meta[property="og:description"]': business.description,
      'meta[name="twitter:title"]': business.websiteTitle,
      'meta[name="twitter:description"]': business.description,
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
    setText("#hero-portfolio-action", sectionText.heroActions.portfolio);
    setText("#hero-contact-action", sectionText.heroActions.contact);
    setText("#about-label", sectionText.aboutLabel);
    setText("#about-title", sectionText.aboutTitle);
    $("#about-body").innerHTML = content.about.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("");
    setText("#team-label", sectionText.teamLabel);
    setText("#team-title", sectionText.teamTitle);
    setText("#team-intro", sectionText.teamIntroduction);
    setText("#services-label", sectionText.servicesLabel);
    setText("#services-title", sectionText.servicesTitle);
    setText("#services-intro", sectionText.servicesIntroduction);
    setText("#portfolio-label", sectionText.portfolioLabel);
    setText("#portfolio-title", sectionText.portfolioTitle);
    setText("#portfolio-intro", sectionText.portfolioIntroduction);
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
    $("#team-grid").innerHTML = content.team.map((member, index) => {
      const links = [
        safeUrl(member.github) ? `<a class="member-link" href="${escapeHTML(member.github)}" ${externalAttributes}>GitHub <span aria-hidden="true">↗</span></a>` : "",
        safeUrl(member.linkedin) ? `<a class="member-link" href="${escapeHTML(member.linkedin)}" ${externalAttributes}>LinkedIn <span aria-hidden="true">↗</span></a>` : ""
      ].filter(Boolean).join("");
      const services = member.services && member.services.length
        ? `<ul class="member-services" aria-label="Areas of work">${member.services.map((service) => `<li>${escapeHTML(service)}</li>`).join("")}</ul>`
        : '<p class="member-pending">Services to be confirmed.</p>';
      const credentials = member.credentials && member.credentials.length
        ? `<div class="member-credentials"><h4>Credentials</h4><ul>${member.credentials.map((credential) => `<li>${escapeHTML(credential)}</li>`).join("")}</ul></div>`
        : "";
      const roleDescription = member.roleDescription ? `<p class="member-role-description">${escapeHTML(member.roleDescription)}</p>` : "";
      const extendedRole = member.extendedRole ? `<p class="member-extended">${escapeHTML(member.extendedRole)}</p>` : "";
      const vietnameseName = member.vietnameseName ? `<p class="member-local-name">${escapeHTML(member.vietnameseName)}</p>` : "";
      return `<article class="team-card reveal">
        <div class="portrait-wrap"><img src="${escapeHTML(member.image)}" alt="${escapeHTML(member.imageAlt)}" width="640" height="720" loading="lazy"></div>
        <div class="team-card-body"><span class="card-number">${String(index + 1).padStart(2, "0")}</span><p class="member-role">${escapeHTML(member.role)}</p><h3>${escapeHTML(member.name)}</h3>${vietnameseName}${extendedRole}<p>${escapeHTML(member.bio)}</p>${roleDescription}${services}${credentials}<div class="member-links">${links}</div></div>
      </article>`;
    }).join("");
  }

  function renderServices() {
    const createElement = (tagName, className = "", text = "") => {
      const element = document.createElement(tagName);
      if (className) element.className = className;
      if (text) element.textContent = text;
      return element;
    };
    const createList = (items, className, label) => {
      const list = createElement("ul", className);
      if (label) list.setAttribute("aria-label", label);
      items.forEach((item) => list.append(createElement("li", "", item)));
      return list;
    };

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
      if (lead?.image) {
        const image = createElement("img", `service-portrait service-portrait-${lead.name.toLowerCase()}`);
        image.src = lead.image;
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

  function projectDialogMarkup(project) {
    const repository = project.showRepository && safeUrl(project.repositoryUrl)
      ? `<a class="button" href="${escapeHTML(project.repositoryUrl)}" ${externalAttributes}>View GitHub <span aria-hidden="true">↗</span></a>` : "";
    return `<p class="project-type">${escapeHTML(project.status)}</p><h2 id="dialog-title">${escapeHTML(project.title)}</h2>
      <p class="dialog-description">${escapeHTML(project.description)}</p>
      <h3>Main capabilities</h3><ul class="capability-list">${project.capabilities.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
      <h3>Technology</h3><ul class="tag-list dialog-tags">${project.technologies.map((technology) => `<li>${escapeHTML(technology)}</li>`).join("")}</ul>${repository}`;
  }

  function renderProjects() {
    $("#projects-grid").innerHTML = content.projects.map((project, index) => {
      const repository = project.showRepository && safeUrl(project.repositoryUrl)
        ? `<a class="member-link" href="${escapeHTML(project.repositoryUrl)}" ${externalAttributes}>View GitHub <span aria-hidden="true">↗</span></a>` : "";
      return `<article class="project-card reveal">
        <div class="project-image"><img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.imageAlt)}" width="800" height="520" loading="lazy"></div>
        <div class="project-body"><p class="project-type"><span class="status-dot" aria-hidden="true"></span>${escapeHTML(project.status)}</p><h3>${escapeHTML(project.title)}</h3><p>${escapeHTML(project.description)}</p>
        <ul class="project-highlights" aria-label="Main capabilities">${project.capabilities.slice(0, 3).map((capability) => `<li>${escapeHTML(capability)}</li>`).join("")}</ul>
        <ul class="tag-list dark-tags" aria-label="Project technologies">${project.technologies.slice(0, 5).map((technology) => `<li>${escapeHTML(technology)}</li>`).join("")}</ul>
        <div class="project-actions"><button class="details-button" type="button" data-project-index="${index}">View details <span aria-hidden="true">→</span></button>${repository}</div></div>
      </article>`;
    }).join("");
  }

  function renderProcess() {
    $("#process-grid").innerHTML = content.process.map((step, index) => `<li class="reveal"><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHTML(step)}</strong></li>`).join("");
  }

  function renderContact() {
    const contact = content.contact;
    const emailReady = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email);
    const linkedInReady = Boolean(safeUrl(contact.linkedin));
    const githubReady = Boolean(safeUrl(contact.github));
    const whatsappReady = /^\d{8,15}$/.test(contact.whatsapp);
    const items = [
      { label: "Email", icon: "@", href: emailReady ? `mailto:${contact.email}` : "", ready: emailReady },
      { label: "LinkedIn", icon: "in", href: linkedInReady ? contact.linkedin : "", ready: linkedInReady },
      { label: "GitHub", icon: "gh", href: githubReady ? contact.github : "", ready: githubReady },
      { label: "WhatsApp", icon: "wa", href: whatsappReady ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}` : "", ready: whatsappReady }
    ];
    $("#contact-actions").innerHTML = items.filter((item) => item.ready).map((item) => `<a href="${escapeHTML(item.href)}" ${item.href.startsWith("http") ? externalAttributes : ""}><span>${escapeHTML(item.icon)}</span>${escapeHTML(item.label)}</a>`).join("");
    $("#social-links").innerHTML = [
      githubReady ? `<a href="${escapeHTML(contact.github)}" ${externalAttributes}>GitHub <span aria-hidden="true">↗</span></a>` : "",
      linkedInReady ? `<a href="${escapeHTML(contact.linkedin)}" ${externalAttributes}>LinkedIn <span aria-hidden="true">↗</span></a>` : ""
    ].filter(Boolean).join("");
  }

  function setupProjectDialog() {
    const dialog = $("#project-dialog");
    const dialogContent = $("#dialog-content");
    $("#projects-grid").addEventListener("click", (event) => {
      const button = event.target.closest("[data-project-index]");
      if (!button) return;
      dialogContent.innerHTML = projectDialogMarkup(content.projects[Number(button.dataset.projectIndex)]);
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
