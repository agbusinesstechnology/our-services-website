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
    setText("#hero-eyebrow", business.heroEyebrow);
    setText("#hero-title", business.heroTitle);
    setText("#hero-intro", business.heroIntroduction);
    setText("#hero-note", business.heroNote);
    setText("#hero-services-action", sectionText.heroActions.services);
    setText("#hero-projects-action", sectionText.heroActions.projects);
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
    setText("#skills-label", sectionText.skillsLabel);
    setText("#skills-title", sectionText.skillsTitle);
    setText("#skills-intro", sectionText.skillsIntroduction);
    setText("#work-label", sectionText.workLabel);
    setText("#work-title", sectionText.workTitle);
    setText("#projects-intro", sectionText.projectsIntroduction);
    setText("#process-label", sectionText.processLabel);
    setText("#process-title", sectionText.processTitle);
    setText("#proof-label", sectionText.proofLabel);
    setText("#proof-title", sectionText.proofTitle);
    setText("#proof-intro", sectionText.proofIntroduction);
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
      return `<article class="team-card reveal">
        <div class="portrait-wrap"><img src="${escapeHTML(member.image)}" alt="${escapeHTML(member.imageAlt)}" width="640" height="720" loading="lazy"></div>
        <div class="team-card-body"><span class="card-number">${String(index + 1).padStart(2, "0")}</span><p class="member-role">${escapeHTML(member.role)}</p><h3>${escapeHTML(member.name)}</h3><p>${escapeHTML(member.bio)}</p>${services}<div class="member-links">${links}</div></div>
      </article>`;
    }).join("");
  }

  function renderServices() {
    $("#services-grid").innerHTML = content.services.map((service, index) => `<article class="service-card reveal">
      <div class="service-top"><span>${String(index + 1).padStart(2, "0")}</span><span aria-hidden="true">↗</span></div>
      <h3>${escapeHTML(service.title)}</h3><p>${escapeHTML(service.description)}</p>
      <ul class="tag-list" aria-label="Related capabilities">${service.tags.map((tag) => `<li>${escapeHTML(tag)}</li>`).join("")}</ul>
    </article>`).join("");
  }

  function renderSkills() {
    $("#skills-list").innerHTML = content.skillGroups.map((group, index) => `<section class="skill-group">
      <div class="skill-group-heading"><span>${String(index + 1).padStart(2, "0")}</span><h3>${escapeHTML(group.title)}</h3></div>
      <ul>${group.skills.map((skill) => `<li>${escapeHTML(skill)}</li>`).join("")}</ul>
    </section>`).join("");
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

  function renderProof() {
    $("#proof-grid").innerHTML = content.proofItems.map((item) => `<article class="proof-card reveal">
      <p class="project-type">${escapeHTML(item.type)}</p><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.description)}</p>
    </article>`).join("");
  }

  function renderContact() {
    const contact = content.contact;
    const emailReady = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email);
    const linkedInReady = Boolean(safeUrl(contact.linkedin));
    const githubReady = Boolean(safeUrl(contact.github));
    const whatsappReady = /^\d{8,15}$/.test(contact.whatsappNumber);
    const items = [
      { label: "Email", icon: "@", href: emailReady ? `mailto:${contact.email}` : "", ready: emailReady },
      { label: "LinkedIn", icon: "in", href: linkedInReady ? contact.linkedin : "", ready: linkedInReady },
      { label: "GitHub", icon: "gh", href: githubReady ? contact.github : "", ready: githubReady },
      { label: "WhatsApp", icon: "wa", href: whatsappReady ? `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}` : "", ready: whatsappReady }
    ];
    $("#contact-actions").innerHTML = items.map((item) => item.ready
      ? `<a href="${escapeHTML(item.href)}" ${item.href.startsWith("http") ? externalAttributes : ""}><span>${escapeHTML(item.icon)}</span>${escapeHTML(item.label)}</a>`
      : `<span class="contact-disabled" title="Add this information in content.js"><span>${escapeHTML(item.icon)}</span>${escapeHTML(item.label)} <small>Not provided</small></span>`).join("");
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
  renderSkills();
  renderProjects();
  renderProcess();
  renderProof();
  renderContact();
  setupProjectDialog();
  setupNavigation();
  setupReveal();
})();
