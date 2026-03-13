import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

/**
 * A simple retro-themed portfolio homepage.
 *
 * Notes:
 * - Content is intentionally static (no backend dependency).
 * - Uses semantic sections + anchor navigation for accessibility.
 */

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState("light");

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const profile = useMemo(
    () => ({
      name: "Your Name",
      role: "Frontend Engineer",
      location: "City, Country",
      email: "you@example.com",
      tagline:
        "I build fast, accessible web experiences. I like clean UI, crisp typography, and a little retro flair.",
      skills: [
        "React",
        "TypeScript",
        "CSS",
        "Accessibility (WCAG)",
        "Performance",
        "Testing",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/" },
        { label: "LinkedIn", href: "https://www.linkedin.com/" },
        { label: "Portfolio PDF", href: "#" },
      ],
      resume: {
        summary:
          "Product-focused engineer with experience delivering responsive UIs, design systems, and customer-facing features.",
        highlights: [
          "Built component libraries and reusable UI patterns",
          "Improved Lighthouse scores and reduced bundle size",
          "Partnered with design and backend teams to ship end-to-end features",
        ],
        education: [
          {
            title: "B.S. in Computer Science",
            org: "University Name",
            time: "2017 — 2021",
            detail: "Focus: web development, systems, HCI.",
          },
        ],
        certifications: [
          {
            title: "Web Accessibility Fundamentals",
            org: "Provider",
            time: "2023",
          },
        ],
      },
      experience: [
        {
          title: "Frontend Engineer",
          company: "RetroByte Studio",
          time: "2024 — Present",
          location: "Remote",
          bullets: [
            "Shipped UI features across landing pages and dashboards using React and modern CSS.",
            "Designed a small component kit (buttons, cards, navigation) to standardize UX.",
            "Improved perceived performance by optimizing critical rendering paths and assets.",
          ],
          tech: ["React", "CSS", "REST", "Web Vitals"],
        },
        {
          title: "Software Engineer",
          company: "Blue Neon Labs",
          time: "2022 — 2024",
          location: "Hybrid",
          bullets: [
            "Delivered new onboarding flow and settings screens with robust form validation.",
            "Collaborated with design to implement accessible, responsive layouts.",
            "Added analytics events and improved error handling for better observability.",
          ],
          tech: ["React", "Testing", "Accessibility", "Analytics"],
        },
      ],
      projects: [
        {
          title: "Pixel Portfolio",
          description:
            "A lightweight personal site with retro styling, built for speed and readability.",
          meta: "React • Vanilla CSS • Responsive",
          href: "#",
        },
        {
          title: "Neon Notes",
          description:
            "A simple notes UI prototype focused on keyboard navigation and accessibility.",
          meta: "React • A11y • UX",
          href: "#",
        },
      ],
    }),
    []
  );

  return (
    <div className="App">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <div className="brand" aria-label="Site brand">
            <span className="brand-mark" aria-hidden="true">
              ▣
            </span>
            <div className="brand-text">
              <div className="brand-name">{profile.name}</div>
              <div className="brand-subtitle">{profile.role}</div>
            </div>
          </div>

          <nav className="nav" aria-label="Primary navigation">
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#resume">
              Resume
            </a>
            <a className="nav-link" href="#experience">
              Experience
            </a>
            <a className="nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
            >
              {theme === "light" ? "Dark mode" : "Light mode"}
            </button>
          </div>
        </div>
      </header>

      <main id="content">
        <section className="hero" id="about" aria-label="About section">
          <div className="container hero-grid">
            <div className="hero-left">
              <p className="kicker">Retro • Light • Clean</p>
              <h1 className="title">
                Building modern UI with <span className="accent">retro energy</span>.
              </h1>
              <p className="subtitle">{profile.tagline}</p>

              <div className="hero-meta" aria-label="Quick details">
                <div className="meta-pill">
                  <span className="meta-label">Location</span>
                  <span className="meta-value">{profile.location}</span>
                </div>
                <div className="meta-pill">
                  <span className="meta-label">Email</span>
                  <a className="meta-link" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="cta-row">
                <a className="btn btn-primary" href="#experience">
                  View experience
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Contact me
                </a>
              </div>

              <div className="link-row" aria-label="External links">
                {profile.links.map((l) => (
                  <a
                    key={l.label}
                    className="text-link"
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <aside className="hero-right" aria-label="Skills panel">
              <div className="panel">
                <div className="panel-header">
                  <h2 className="panel-title">Core skills</h2>
                  <div className="panel-badge" aria-hidden="true">
                    v1.0
                  </div>
                </div>
                <ul className="chip-grid">
                  {profile.skills.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="panel-footer">
                  <div className="scanline" aria-hidden="true" />
                  <p className="panel-footnote">
                    Tip: Use the nav links to jump between sections.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="resume" aria-label="Resume section">
          <div className="container">
            <div className="section-head">
              <h2 className="section-title">Resume</h2>
              <p className="section-desc">
                A compact overview of what I do and what I’m great at.
              </p>
            </div>

            <div className="grid-2">
              <article className="card">
                <h3 className="card-title">Summary</h3>
                <p className="card-text">{profile.resume.summary}</p>

                <h4 className="card-subtitle">Highlights</h4>
                <ul className="list">
                  {profile.resume.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </article>

              <article className="card">
                <h3 className="card-title">Education & Certifications</h3>

                <div className="stack">
                  {profile.resume.education.map((e) => (
                    <div className="mini" key={e.title}>
                      <div className="mini-top">
                        <strong>{e.title}</strong>
                        <span className="muted">{e.time}</span>
                      </div>
                      <div className="mini-mid">{e.org}</div>
                      <div className="mini-bot muted">{e.detail}</div>
                    </div>
                  ))}
                </div>

                <div className="divider" />

                <div className="stack">
                  {profile.resume.certifications.map((c) => (
                    <div className="mini" key={c.title}>
                      <div className="mini-top">
                        <strong>{c.title}</strong>
                        <span className="muted">{c.time}</span>
                      </div>
                      <div className="mini-mid">{c.org}</div>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          className="section"
          id="experience"
          aria-label="Experience section"
        >
          <div className="container">
            <div className="section-head">
              <h2 className="section-title">Experience</h2>
              <p className="section-desc">
                Recent roles with impact, responsibilities, and tech.
              </p>
            </div>

            <div className="timeline" role="list">
              {profile.experience.map((job) => (
                <article className="timeline-item" role="listitem" key={job.title}>
                  <div className="timeline-rail" aria-hidden="true">
                    <div className="dot" />
                    <div className="line" />
                  </div>

                  <div className="timeline-card">
                    <div className="timeline-top">
                      <div>
                        <h3 className="job-title">{job.title}</h3>
                        <div className="job-meta">
                          <span className="job-company">{job.company}</span>
                          <span className="job-sep" aria-hidden="true">
                            •
                          </span>
                          <span className="muted">{job.location}</span>
                        </div>
                      </div>
                      <div className="time-badge">{job.time}</div>
                    </div>

                    <ul className="list">
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>

                    <div className="tag-row" aria-label="Technologies used">
                      {job.tech.map((t) => (
                        <span className="tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects" aria-label="Projects section">
          <div className="container">
            <div className="section-head">
              <h2 className="section-title">Projects</h2>
              <p className="section-desc">A few things I’ve built recently.</p>
            </div>

            <div className="grid-3">
              {profile.projects.map((p) => (
                <a
                  key={p.title}
                  className="card card-link"
                  href={p.href}
                  target={p.href.startsWith("#") ? undefined : "_blank"}
                  rel={p.href.startsWith("#") ? undefined : "noreferrer"}
                >
                  <div className="card-kicker">Featured</div>
                  <h3 className="card-title">{p.title}</h3>
                  <p className="card-text">{p.description}</p>
                  <div className="muted">{p.meta}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact" aria-label="Contact section">
          <div className="container">
            <div className="section-head">
              <h2 className="section-title">Contact</h2>
              <p className="section-desc">
                Want to collaborate or chat? Send an email.
              </p>
            </div>

            <div className="contact-card">
              <div>
                <div className="contact-title">Email</div>
                <a className="contact-link" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>

              <div className="contact-actions">
                <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                  Compose email
                </a>
                <a className="btn btn-ghost" href="#about">
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer" aria-label="Footer">
          <div className="container footer-inner">
            <div className="muted">
              © {new Date().getFullYear()} {profile.name}. Built with React.
            </div>
            <div className="footer-right">
              <span className="muted">Theme:</span>{" "}
              <strong className="mono">{theme}</strong>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
