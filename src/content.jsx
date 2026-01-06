// src/content.js
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { SiKotlin, SiJavascript, SiHtml5, SiCss3, SiFigma, SiReact, SiJira, SiTrello, SiNotion, SiAndroid } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

export const heroDetails = {
  name: "Muhammad Farrel Nayaka",
  roles: [
    "UI/UX Designer",
    "Front-End Developer", 
    "Product Designer",
    "Visual Storyteller"
  ],
  tagline: "Bridging the gap between creative design and technical development.",
};

export const aboutDetails = {
  description: "I am a creative UI/UX Designer and Informatics student at Multimedia Nusantara University. I combine a strong eye for visual aesthetics with technical proficiency in front-end technologies to craft intuitive user journeys and interactive prototypes. My goal is to design scalable, user-centric interfaces that solve complex real-world problems.",
  university: "Multimedia Nusantara University",
  gpa: "3.65/4.0",
};

export const skills = [
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "UI/UX", icon: <MdDesignServices className="text-purple-400" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "Kotlin", icon: <SiKotlin className="text-purple-600" /> },
  { name: "Android", icon: <SiAndroid className="text-green-500" /> },
  { name: "Jira", icon: <SiJira className="text-blue-600" /> },
  { name: "Trello", icon: <SiTrello className="text-blue-400" /> },
  { name: "Notion", icon: <SiNotion className="text-white" /> },
];

export const projects = [
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