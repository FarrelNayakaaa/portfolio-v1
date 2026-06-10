// src/content.jsx
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaRust } from "react-icons/fa";
import { SiKotlin, SiJavascript, SiHtml5, SiCss3, SiFigma, SiReact, SiJira, SiTrello, SiNotion, SiAndroid, SiPostgresql, SiPostman, SiMongodb } from "react-icons/si";
import { MdDesignServices, MdOutlineIntegrationInstructions } from "react-icons/md";

export const heroDetails = {
  name: "Muhammad Farrel Nayaka",
  roles: [
    "Technical Project Manager",
    "Full-Stack Developer", 
    "Quality Assurance Specialist",
    "Product Strategist"
  ],
  tagline: "Bridging the gap between robust engineering, efficient project management, and high-quality product delivery.",
};

export const aboutDetails = {
  description: "I am a Technical Project Manager and Full-Stack Developer with a strong foundation in Quality Assurance. Currently an Informatics student at Multimedia Nusantara University, I bridge the gap between technical execution and business requirements. Experienced in managing cross-functional teams, building automation workflows, and managing Web3 and enterprise projects, I focus on delivering scalable, high-performance digital solutions.",
  university: "Multimedia Nusantara University",
  gpa: "3.65/4.0",
};

export const skills = [
  { name: "Project Management", icon: <SiJira className="text-blue-600" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Rust", icon: <FaRust className="text-orange-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Jira & Agile", icon: <SiJira className="text-blue-600" /> },
  { name: "Quality Assurance", icon: <MdOutlineIntegrationInstructions className="text-emerald-400" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "Trello", icon: <SiTrello className="text-blue-400" /> },
];

export const projects = [
  {
      title: "Waverly Platform (TEKNOFEST Turkey Web3 Hackathon)",
      description: "Leading the end-to-end development of a Web3 platform tailored for the prestigious TEKNOFEST competition in Turkey. Managing product architecture, setting development milestones, and aligning smart contract integration with frontend systems.",
      tech: ["Project Management", "Web3", "React", "Rust", "Agile"],
      link: "", 
    },
  {
    title: "Virtual Try-On App",
    description: "Designed the end-to-end UX flow for a virtual fitting room app. Created high-fidelity mockups in Figma and conducted usability testing to minimize checkout friction.",
    tech: ["Figma", "Prototyping", "UX Research"],
    link: "https://tryon-nine.vercel.app/", 
  },
  {
    title: "Catch ME! (Survival Game)",
    description: "Designed the Heads-Up Display (HUD) and main menu interfaces for a survival shooter game, prioritizing player immersion and information clarity.",
    tech: ["Game UI", "Itch.io", "Visual Assets"],
    link: "https://farrelnayakaa.itch.io/catch-me-u-idiot-creature",
  },
  {
    title: "Starlight 2025 (Event Platform)",
    description: "Product Designer & Developer for a ticket purchasing website. Mapped user journeys for event discovery and managed content layout for high readability.",
    tech: ["UI Design", "Responsive Web", "User Flow"],
    link: "https://starlightumn2025.com/",
  },
  {
    title: "AntriDok (Clinic Queue)",
    description: "Designed a clean, accessible mobile interface for patients to monitor queue status in real-time, focusing on accessibility for elderly users.",
    tech: ["Mobile Design", "Accessibility", "App UI"],
    link: "https://github.com/FarrelNayakaaa/AntriDokter.git",
  }
];

export const experience = [
  {
    role: "Project Manager",
    company: "Waverly Team",
    period: "Apr 2026 - Present",
    desc: "Spearheading end-to-end project management for a Web3 platform developed for the TEKNOFEST hackathon in Turkey. Defining product scope, orchestrating development milestones, and bridging communication gaps between smart contract engineers and frontend developers to ensure a seamless platform launch under competitive timelines.",
  },
  {
    role: "Quality Assurance Intern",
    company: "PT Global Loyalty Indonesia",
    period: "Jan 2026 - Present",
    desc: "Driving QA operations for the 'My Lawson Revamp' mobile application. Architecting comprehensive test suites using Qase.io and Jira. Conducting backend API testing, validation utilizing Postman, DBeaver, MongoDB, and Redis Insight, and overseeing build distributions through TestFlight.",
  },
  {
    role: "Technical Project Manager",
    company: "Starlight 2025",
    period: "Feb 2025 - Nov 2025",
    desc: "Led product design and development lifecycle, collaborating with stakeholders to define visual requirements and user flows.",
  },
  {
    role: "Operating System Lab Assistant",
    company: "Multimedia Nusantara University",
    period: "Feb 2025 - July 2025",
    desc: "Guided students through technical troubleshooting and fostered a user-first mindset in problem-solving.",
  }
];

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-farrel-87a776278", icon: <FaLinkedin /> },
  { name: "GitHub", url: "https://github.com/FarrelNayakaaa", icon: <FaGithub /> },
  { name: "Instagram", url: "https://www.instagram.com/farrelnayakaa/", icon: <FaInstagram /> },
  { name: "Discord", url: "https://discordapp.com/users/481030811005616150", icon: <FaDiscord /> },
];