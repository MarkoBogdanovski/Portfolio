import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Marko Bogdanovski",
  initials: "MB",
  url: "https://markobogdanovski.com",
  location: "Pančevo, Serbia",
  locationLink: "https://www.google.com/maps/place/belgrade",
  description:
    "Software Engineer. I love building things and helping people.",
  summary:
    "I specialize in building SaaS applications powered OpenAI. My core competency lies in end-to-end complete management of new project development, focusing on custom-tailored apps and services for businesses. I constantly seek new opportunities to leverage my skills and experience to help companies achieve their goals. Whether you're looking to build a new product or improve an existing one, I am dedicated to delivering high-quality solutions that drive results.",
  avatarUrl: "/marko-bogdanovski.jpg",
  skills: [
    "React",
    "NestJS",
    "OpenAI",
    "Typescript",
    "Vue",
    "Tailwind",
    "SQL (Postgres, MySQL, Oracle)",
    "MongoDB",
    "AWS (S3, EC2, Route 53)",
    "Docker",
    "Laravel"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mr.bogdanovski@gmail.com",
    tel: "#",
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
      Resume: {
        name: "Resume",
        url: "/Marko Bogdanovski Resume.pdf",
        icon: Icons.file,

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
      title: "Obba",
      href: "https://www.producthunt.com/new/products/obba-store",
      dates: "Sep 2019 - Aug 2020",
      active: false,
      description:
        "Developed multi vendor e-commerce platform.",
      technologies: [
        "Laravel",
        "NuxtJS",
        "Vuex",
        "Gitlab CI/CD",
        "EC2",
        "S3",
        "Docker",
        "PostgreSQL",
        "Tailwind",
        "Socket.io"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.producthunt.com/new/products/obba-store",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dwl9ar0hz/video/upload/f_webm,vc_vp9,q_auto/v1724614434/w45jzs4k2fvj0pvsesqm",
    },
    {
      title: "Glorious CMS",
      href: "https://glorious.free.nf",
      dates: "February 2016",
      active: true,
      description:
        "Developed back in 2016 for a hackaton for the university scholarship.",
      technologies: [
        "PHP",
        "jQuery",
        "Bootstrap",
        "MySQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://glorious.free.nf",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dwl9ar0hz/video/upload/f_webm,vc_vp9,q_auto/v1724614368/rueqfc4o5jssbmfctcf4",
    },
  ]
} as const;
