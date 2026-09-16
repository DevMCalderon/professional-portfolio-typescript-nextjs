import { BsJavascript, BsTypescript } from "react-icons/bs";
import {
  FaApple,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaLinux,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaVuejs,
  FaWindows,
  FaWordpress,
} from "react-icons/fa";

import {
  SiBootstrap,
  SiElectron,
  SiFigma,
  SiGithubactions,
  SiLaravel,
  SiLivewire,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";
import { TbBrandAdobeXd } from "react-icons/tb";

export const skills = [
  // Main skills
  {
    translationKey: "nextjs",
    icon: SiNextdotjs,
    color: "#909090",
    group: "mainSkills",
  },
  {
    translationKey: "typescript",
    icon: BsTypescript,
    color: "#3178C6",
    group: "mainSkills",
  },
  {
    translationKey: "react",
    icon: FaReact,
    color: "#61DAFB",
    group: "mainSkills",
  },
  {
    translationKey: "laravel",
    icon: SiLaravel,
    color: "#FF2D20",
    group: "mainSkills",
  },

  // Frontend / UI
  {
    translationKey: "shadcn",
    color: "#909090",
    group: "frontend",
  },
  {
    translationKey: "javascript",
    icon: BsJavascript,
    color: "#F7DF1E",
    group: "frontend",
  },
  {
    translationKey: "vue",
    icon: FaVuejs,
    color: "#42B883",
    group: "frontend",
  },
  {
    translationKey: "html",
    icon: FaHtml5,
    color: "#E34F26",
    group: "frontend",
  },
  {
    translationKey: "css",
    icon: FaCss3Alt,
    color: "#1572B6",
    group: "frontend",
  },
  {
    translationKey: "tailwind",
    icon: SiTailwindcss,
    color: "#06B6D4",
    group: "frontend",
  },
  {
    translationKey: "bootstrap",
    icon: SiBootstrap,
    color: "#7952B3",
    group: "frontend",
  },
  {
    translationKey: "livewire",
    icon: SiLivewire,
    color: "#FB70A9",
    group: "frontend",
  },

  // Backend
  {
    translationKey: "php",
    icon: FaPhp,
    color: "#777BB4",
    group: "backend",
  },
  {
    translationKey: "nodejs",
    icon: FaNodeJs,
    color: "#339933",
    group: "backend",
  },
  {
    translationKey: "restApi",
    color: "#009688",
    group: "backend",
  },

  // Databases
  {
    translationKey: "databaseDesign",
    color: "#336791",
    group: "databases",
  },
  {
    translationKey: "postgresql",
    icon: SiPostgresql,
    color: "#4169E1",
    group: "databases",
  },
  {
    translationKey: "mongodb",
    icon: SiMongodb,
    color: "#47A248",
    group: "databases",
  },
  {
    translationKey: "mysql",
    icon: SiMysql,
    color: "#4479A1",
    group: "databases",
  },

  // UI/UX
  {
    translationKey: "figma",
    icon: SiFigma,
    color: "#F24E1E",
    group: "uiUx",
  },
  {
    translationKey: "adobeXd",
    icon: TbBrandAdobeXd,
    color: "#FF61F6",
    group: "uiUx",
  },

  // Testing
  {
    translationKey: "phpunit",
    color: "#3C9CD7",
    group: "testing",
  },
  {
    translationKey: "pest",
    color: "#F46623",
    group: "testing",
  },

  // DevOps / CI-CD
  {
    translationKey: "docker",
    icon: FaDocker,
    color: "#2496ED",
    group: "devOps",
  },
  {
    translationKey: "githubActions",
    icon: SiGithubactions,
    color: "#2088FF",
    group: "devOps",
  },
  {
    translationKey: "ciCd",
    color: "#6E56CF",
    group: "devOps",
  },

  // Tools
  {
    translationKey: "spreadsheets",
    color: "#217346",
    group: "tools",
  },
  {
    translationKey: "git",
    icon: FaGitAlt,
    color: "#F05032",
    group: "tools",
  },
  {
    translationKey: "postman",
    icon: SiPostman,
    color: "#FF6C37",
    group: "tools",
  },
  {
    translationKey: "electron",
    icon: SiElectron,
    color: "#47848F",
    group: "tools",
  },

  // CMS
  {
    translationKey: "wordpress",
    icon: FaWordpress,
    color: "#21759B",
    group: "tools",
  },

  // ORM / Tools
  {
    translationKey: "prisma",
    icon: SiPrisma,
    color: "#909090",
    group: "tools",
  },

  // Other
  {
    translationKey: "deviceMaintenance",
    color: "#909090",
    group: "other",
  },
  {
    translationKey: "scrum",
    color: "#3B82F6",
    group: "other",
  },
  {
    translationKey: "linux",
    icon: FaLinux,
    color: "#FCC624",
    group: "other",
  },
  {
    translationKey: "windows",
    icon: FaWindows,
    color: "#0078D4",
    group: "other",
  },
  {
    translationKey: "macos",
    icon: FaApple,
    color: "#A2AAAD",
    group: "other",
  },
];
