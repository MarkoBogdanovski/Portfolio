import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Marko Bogdanovski",
  initials: "MB",
  url: "https://dillion.io",
  location: "Pančevo, Serbia",
  locationLink: "https://www.google.com/maps/place/belgrade",
  description:
    "Software Engineer. I love building things and helping people.",
  summary:
    "I specialize in building SaaS applications powered by Blockchain and AI technologies. My core competency lies in end-to-end complete management of new project development, focusing on custom-tailored apps and services for businesses. I constantly seek new opportunities to leverage my skills and experience to help companies achieve their goals. Whether you're looking to build a new product or improve an existing one, I am dedicated to delivering high-quality solutions that drive results.",
  avatarUrl: "/marko-bogdanovski.jpeg",
  skills: [
    "React",
    "Next.js",
    "Vue",
    "Nuxt.js",
    "NestJS",
    "Node.js",
    "Typescript",
    "Laravel",
    "Inertia.js",
    "Go",
    ".NET (C#)",
    "Postgres",
    "MongoDB",
    "AWS",
    "Docker"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mr.bogdanovski@gmail.com",
    tel: "+381603456468",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/markobogdanovski/",
        icon: Icons.linkedin,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/markobogdanovski",
        icon: Icons.github,

        navbar: true,
      },
      Behance: {
        name: "Behance",
        url: "https://www.behance.net/MarkoBogdanovski",
        icon: Icons.github,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ledger Leopard",
      href: "https://ledgerleopard.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/ledger_leopard_logo.jpeg",
      start: "August 2023",
      end: "July 2024",
      description:
        "I did a deep analysis of the platform and made improvements to the potential bottlenecks, optimizing code and the overall workflow of the product. I also developed new features around OpenAi and other Azure Services.",
    },
    {
      company: "Elemental",
      badges: [],
      href: "https://sendelemental.com",
      location: "Remote",
      title: "Frontend Lead & Team Lead",
      logoUrl: "/sendelemental_logo.jpeg",
      start: "January 2021",
      end: "Jul 2023",
      description:
        "Architected and wrote the entire MVP of the product for the frontned using Next, Redux, TypeScript. Worked closely with the CTO to define and align objectives with the company's strategic vision. I have effectively conveyed the company's vision to the Design Team, fostering a shared understanding of the product roadmap. I also coordinated a team of 8 people.",
    },
    {
      company: "Serbia BroadBand",
      href: "https://sbb.rs/",
      badges: [],
      location: "Belgrade, Serbia",
      title: "Software Engineer",
      logoUrl: "/sbb_serbia_broadband_logo.jpeg",
      start: "August 2016",
      end: "December 2020",
      description:
        "Played a key role in developing proprietary features and services, expanding the ecosystem by adding instances for new regions. Conducted thorough testing and implemented robust solutions for reliable updates meeting user requirements. Implemented a 3D secure payment gateway for cross-platform services and acquired expertise in cross-domain session handling, ensuring smooth and secure user experiences.",
    },
  ],
  education: [
    {
      school: "Electrical Engineering High School ”Nikola Tesla”",
      href: "http://www.teslabg.edu.rs/",
      degree: "High School Diploma, Information Technology",
      logoUrl: "/tesla.jpeg",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
