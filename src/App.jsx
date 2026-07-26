import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import {
  FaArrowRight,
  FaBars,
  FaDownload,
  FaExternalLinkAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import { FiCheckCircle, FiCompass, FiMail, FiUsers } from "react-icons/fi";
import { experience, projects, skillGroups, socialLinks } from "./content";
import mascot from "./assets/quest/mascot.webp";
import inviteMascot from "./assets/quest/mascot-invite.webp";
import sidePeekMascot from "./assets/quest/mascot-side-peek-tight.webp";
import pointingMascot from "./assets/quest/mascot-pointing.webp";
import profilePic from "./assets/quest/farrel-profile.webp";

const navLinks = [
  ["Profile", "profile"],
  ["Quests", "projects"],
  ["Journey", "experience"],
  ["Toolkit", "skills"],
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Farrel Quest, home">
        <span className="brand-mark">FQ</span>
        <span>Farrel Quest</span>
      </a>
      <button
        className="menu-button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
        {navLinks.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Start a quest
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [showProfile, setShowProfile] = useState(false);

  const moveMascot = (event) => {
    if (reduceMotion || window.innerWidth < 768) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 12,
      y: ((event.clientY - bounds.top) / bounds.height - 0.5) * -12,
    });
  };

  return (
    <section id="home" className="hero" onMouseMove={moveMascot} onMouseLeave={() => setTilt({ x: 0, y: 0 })}>
      <div className="hero-grid">
        <Motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="eyebrow"><span className="status-dot" /> Available for new quests</div>
          <p className="chapter-label">CHAPTER 01 · MEET THE QUEST LEAD</p>
          <h1>I turn complex ideas into <span>shipped products.</span></h1>
          <p className="hero-lead">
            I’m Muhammad Farrel Nayaka, a Technical Project Manager who connects people,
            product, and engineering to keep ambitious digital projects moving.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my quests <FaArrowRight /></a>
            <a className="button button-secondary" href="/Muhammad-Farrel-Nayaka-CV.pdf" download>
              <FaDownload /> Download CV
            </a>
          </div>
          <dl className="hero-stats">
            <div><dt>7</dt><dd>people led</dd></div>
            <div><dt>200+</dt><dd>ticket transactions</dd></div>
            <div><dt>50+</dt><dd>bugs identified</dd></div>
          </dl>
        </Motion.div>

        <Motion.div
          className="mascot-stage"
          animate={reduceMotion ? {} : { y: [0, -10, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <Motion.div
            className="hero-character"
            drag={reduceMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(_, info) => {
              if (Math.abs(info.offset.x) > 35) setShowProfile((current) => !current);
            }}
            onClick={() => setShowProfile((current) => !current)}
            animate={{ rotateX: tilt.y, rotateY: showProfile ? 180 + tilt.x : tilt.x }}
            transition={{ type: "spring", stiffness: 190, damping: 22 }}
            role="button"
            tabIndex="0"
            aria-label={showProfile ? "Rotate to show Navi mascot" : "Rotate to show Farrel's portrait"}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") setShowProfile((current) => !current);
            }}
          >
            <div className="character-face character-front">
              <img
                src={mascot}
                alt="Navi, an original project manager adventure mascot holding a task board"
                width="900"
                height="900"
              />
            </div>
            <div className="character-face character-back">
              <div className="portrait-frame">
                <img src={profilePic} alt="Muhammad Farrel Nayaka" width="734" height="648" />
                <div><span>QUEST LEAD</span><strong>Muhammad Farrel Nayaka</strong></div>
              </div>
            </div>
          </Motion.div>
          <div className="mascot-card card-top">
            <FiCheckCircle /><span><strong>Milestone</strong>On track</span>
          </div>
          <div className="mascot-card card-bottom">
            <FiUsers /><span><strong>Party sync</strong>7 collaborators</span>
          </div>
          <button className="rotate-hint" type="button" onClick={() => setShowProfile((current) => !current)}>
            <span>↔</span> Drag or tap to rotate
          </button>
        </Motion.div>
      </div>
      <a className="scroll-cue" href="#profile">Scroll to begin <span>↓</span></a>
    </section>
  );
}

function Profile() {
  return (
    <section id="profile" className="section profile-section">
      <div className="section-heading">
        <p>TRAINER PROFILE · #001</p>
        <h2>A technical lead who speaks <span>human.</span></h2>
      </div>
      <div className="profile-grid">
        <article className="profile-card">
          <div className="profile-mascot" aria-hidden="true">
            <img src={mascot} alt="" width="900" height="900" />
            <span>Hi!</span>
          </div>
          <div className="profile-avatar"><span>FN</span></div>
          <div>
            <p className="mini-label">PRIMARY CLASS</p>
            <h3>Technical Project Manager</h3>
            <p>Product-minded · Engineering-aware · Quality-driven</p>
          </div>
          <div className="level-badge">LV. 73</div>
          <div className="profile-card-stats">
            <span><small>BASE</small>Tangerang, ID</span>
            <span><small>ACADEMY</small>UMN Informatics</span>
            <span><small>STATUS</small><i /> Open to quests</span>
          </div>
        </article>
        <div className="profile-copy">
          <p>
            I lead cross-functional teams from uncertain requirements to reliable delivery.
            My background in full-stack development and quality assurance lets me translate
            technical risk, unblock teams, and keep stakeholder goals grounded in reality.
          </p>
          <div className="trait-grid">
            <div><FiCompass /><span><strong>Direction</strong>Scope, milestones, priorities</span></div>
            <div><FiUsers /><span><strong>Alignment</strong>Teams and stakeholders</span></div>
            <div><FiCheckCircle /><span><strong>Delivery</strong>Quality without losing pace</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="section quests-section">
      <div className="section-heading split-heading">
        <div><p>SELECTED QUESTS</p><h2>Proof, not just <span>promises.</span></h2></div>
        <p>Every quest shows the challenge, my move, and the outcome.</p>
      </div>
      <div className="quest-grid">
        {projects.map((project, index) => (
          <Motion.article
            className={`quest-card quest-${project.type}`}
            key={project.title}
            role="button"
            tabIndex="0"
            onClick={() => setSelectedProject(project)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") setSelectedProject(project);
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.06 }}
          >
            <div className="quest-topline">
              <span>QUEST {String(index + 1).padStart(2, "0")}</span>
              <span className="quest-type">{project.typeLabel}</span>
            </div>
            <h3>{project.title}</h3>
            <p className="quest-role">{project.role}</p>
            <p>{project.summary}</p>
            <dl className="result-strip">
              {project.metrics.map((metric) => (
                <div key={metric.label}><dt>{metric.value}</dt><dd>{metric.label}</dd></div>
              ))}
            </dl>
            <div className="tag-list">{project.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            <div className="quest-actions">
              <span className="case-file-link">Open case file <FaArrowRight /></span>
              {project.link ? (
                <a className="text-link" href={project.link} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>
                  Live project <FaExternalLinkAlt />
                </a>
              ) : <span className="in-progress"><i /> Active</span>}
            </div>
          </Motion.article>
        ))}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <Motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedProject(null);
            }}
          >
            <Motion.article
              className={`project-modal quest-${selectedProject.type}`}
              initial={{ opacity: 0, scale: .92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: .95, y: 18 }}
              transition={{ type: "spring", stiffness: 190, damping: 22 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              <button className="project-modal-close" type="button" onClick={() => setSelectedProject(null)} aria-label="Close project details"><FaTimes /></button>
              <div className="project-peek-guide">
                <Motion.img
                  src={sidePeekMascot}
                  alt=""
                  aria-hidden="true"
                  initial={{ opacity: 0, x: 150, rotate: -2 }}
                  animate={{ opacity: 1, x: 0, rotate: [0, -1.5, 0] }}
                  transition={{
                    opacity: { duration: .35, delay: .35 },
                    x: { duration: .85, delay: .3, ease: [0.2, 0.9, 0.25, 1] },
                    rotate: { duration: 3.8, delay: 1.15, repeat: Infinity, ease: "easeInOut" },
                  }}
                />
              </div>
              <div className="project-modal-header">
                <div>
                  <span className="project-file-label">CASE FILE · {selectedProject.typeLabel}</span>
                  <h3 id="project-modal-title">{selectedProject.title}</h3>
                  <p>{selectedProject.role}</p>
                </div>
                <dl>
                  {selectedProject.metrics.map((metric) => <div key={metric.label}><dt>{metric.value}</dt><dd>{metric.label}</dd></div>)}
                </dl>
              </div>
              <div className="project-story-flow">
                <div className="story-step">
                  <span>01</span><i>?</i><small>CHALLENGE</small><p>{selectedProject.challenge}</p>
                </div>
                <div className="flow-connector"><b /><b /><b /></div>
                <div className="story-step story-moves">
                  <span>02</span><i>⚡</i><small>MY MOVES</small>
                  <ul>{selectedProject.moves.map((move) => <li key={move}>{move}</li>)}</ul>
                </div>
                <div className="flow-connector"><b /><b /><b /></div>
                <div className="story-step">
                  <span>03</span><i>✓</i><small>OUTCOME</small><p>{selectedProject.outcome}</p>
                </div>
              </div>
              <div className="project-modal-footer">
                <div className="tag-list">{selectedProject.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                {selectedProject.link && <a href={selectedProject.link} target="_blank" rel="noreferrer">Launch project <FaExternalLinkAlt /></a>}
              </div>
            </Motion.article>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Journey() {
  return (
    <section id="experience" className="section journey-section">
      <div className="section-heading"><p>JOURNEY MAP</p><h2>Experience earned <span>in the field.</span></h2></div>
      <div className="journey-list">
        {experience.map((item, index) => (
          <article key={`${item.company}-${item.role}`}>
            <div className="journey-node"><span>{index + 1}</span></div>
            <div className="journey-date">{item.period}</div>
            <div className="journey-copy">
              <p>{item.company}</p><h3>{item.role}</h3><p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    if (!selectedGroup) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedGroup(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedGroup]);

  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading"><p>FIELD TOOLKIT</p><h2>Skills collected along <span>the way.</span></h2></div>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <Motion.button
            type="button"
            className="skill-group-card"
            key={group.title}
            layoutId={`skill-${group.title}`}
            onClick={() => setSelectedGroup(group)}
            whileTap={{ scale: .985 }}
            aria-label={`Open ${group.title} skill details`}
          >
            <span className="skill-icon">{group.icon}</span>
            <div><p>{group.kicker}</p><h3>{group.title}</h3>
              <div className="tag-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </div>
            <span className="skill-open" aria-hidden="true">↗</span>
          </Motion.button>
        ))}
      </div>
      <AnimatePresence>
        {selectedGroup && (
          <Motion.div
            className="skill-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedGroup(null);
            }}
          >
            <Motion.div
              className="skill-modal"
              layoutId={`skill-${selectedGroup.title}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="skill-modal-title"
            >
              <button className="skill-modal-close" type="button" onClick={() => setSelectedGroup(null)} aria-label="Close skill details">
                <FaTimes />
              </button>
              <Motion.div
                className="skill-guide-zone"
                initial={{ opacity: 0, x: -80, y: 24 }}
                animate={{ opacity: 1, x: 0, y: [0, -9, 0], rotate: [-1, 1, -1] }}
                transition={{
                  opacity: { duration: .45, delay: .2 },
                  x: { duration: .7, delay: .15, ease: "easeOut" },
                  y: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <img className="skill-guide skill-guide-pointing" src={pointingMascot} alt="" />
                <img className="skill-guide skill-guide-invite" src={inviteMascot} alt="" />
                <div className="skill-guide-bubble skill-guide-intro">
                  Here’s how I power up<br />every project.
                </div>
                <div className="skill-guide-bubble skill-guide-cta">
                  <strong>What are you waiting for?</strong>
                  <span>Let’s start a quest together.</span>
                  <a href="#contact" onClick={() => setSelectedGroup(null)}>
                    Start a quest <FaArrowRight />
                  </a>
                </div>
              </Motion.div>
              <div className="skill-constellation" aria-hidden="true">
                <div className="constellation-core">{selectedGroup.icon}</div>
                <div className="constellation-ring ring-a" />
                <div className="constellation-ring ring-b" />
                {selectedGroup.skills.slice(0, 5).map((skill, index) => (
                  <span key={skill} className={`skill-node node-${index + 1}`}>{skill.slice(0, 2).toUpperCase()}</span>
                ))}
              </div>
              <div className="skill-modal-copy">
                <p>{selectedGroup.kicker}</p>
                <h3 id="skill-modal-title">{selectedGroup.title}</h3>
                <div className="mastery-list">
                  {selectedGroup.skills.map((skill, index) => (
                    <div key={skill}>
                      <span>{skill}</span>
                      <i><b style={{ width: `${92 - index * 6}%` }} /></i>
                    </div>
                  ))}
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-ambient" aria-hidden="true">
        <div className="contact-orbit contact-orbit-one" />
        <div className="contact-orbit contact-orbit-two" />
        <Motion.img
          src={mascot}
          alt=""
          animate={{
            x: [0, -14, 0, 9, 0],
            y: [0, -20, -5, -14, 0],
            rotate: [-2, 1, -1, 2, -2],
          }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <i className="spark spark-one" /><i className="spark spark-two" /><i className="spark spark-three" />
      </div>
      <div className="contact-content">
        <p>NEXT QUEST?</p>
        <h2>Let’s build something<br /><span>worth shipping.</span></h2>
        <p>I’m open to project management, product, and technical collaboration opportunities.</p>
        <a className="button button-light" href="mailto:farrel2075@gmail.com"><FiMail /> Send a message</a>
        <div className="socials">
          {socialLinks.map((social) => {
            const Icon = { LinkedIn: FaLinkedin, GitHub: FaGithub, Instagram: FaInstagram }[social.name];
            return Icon ? <a key={social.name} href={social.url} target="_blank" rel="noreferrer" aria-label={social.name}><Icon /></a> : null;
          })}
        </div>
      </div>
    </section>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    return () => document.documentElement.classList.remove("js");
  }, []);

  return (
    <>
      <Navbar />
      <main><Hero /><Profile /><Projects /><Journey /><Skills /><Contact /></main>
      <footer className="site-footer"><span>© 2026 Muhammad Farrel Nayaka</span><span>Designed as an original product adventure.</span></footer>
    </>
  );
}

export default App;
