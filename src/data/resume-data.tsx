import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jadson Santos",
  initials: "JS",
  location: "Rio de Janeiro, RJ, Brazil",
  locationLink: "https://www.google.com/maps/place/Rio+de+Janeiro,+RJ",
  about:
    "Front-End Developer passionate about crafting exceptional, fast, and responsive web experiences",
  summary:
    "With 4 years of experience as a Front-End Developer, my expertise in ReactJS and NextJS enables me to create responsive and optimized web pages for multiple devices. I stand out by significantly enhancing performance through refactoring strategies and implementing script automations via Google Tag Manager. I am committed to code reviews, ensuring excellence and adherence to best practices.",
  avatarUrl: "https://avatars.githubusercontent.com/u/8013223?v=4",
  personalWebsiteUrl: "https://jadsonsantos.dev.br/",
  contact: {
    email: "jadsondossantos5@gmail.com",
    tel: "+5521999577807",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jadsonsantos",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jadsonsantos/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "State University of Rio de Janeiro",
      degree: "Bachelor's Degree in Computer Science",
      start: "2011",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Red Ventures Brasil",
      link: "https://redventures.com.br/",
      badges: ["Remote"],
      title: "Web Programmer",
      logo: ParabolLogo,
      start: "2021",
      end: "2023",
      description:
        "Implemented new features, worked on improving the apps performance, developed and maintained the front-end of web applications. Technologies: React, JavaScript, GatsbyJS",
    },
    {
      company: "Commerce Growth",
      link: "https://commercegrowth.ag/",
      badges: ["Rio de Janeiro"],
      title: "Front-End Development Trainee → Jr Front-End Developer",
      logo: ClevertechLogo,
      start: "2019",
      end: "2021",
      description:
        "Developed and maintained high-performance e-commerce sites. Documented and implemented tracking tags (Google Analytics, Google Ads, Facebook Pixel) via GTM. Technologies: VTEX CMS, JavaScript, Sass, Pugjs, Gulpjs",
    },
    {
      company: "Nasajon",
      link: "https://nasajon.com.br/",
      badges: ["Rio de Janeiro"],
      title: "Front-End Development Intern",
      logo: JojoMobileLogo,
      start: "2017",
      end: "2018",
      description:
        "Collaborated with WordPress, implementing custom features and themes",
    },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: [],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description: "Creating and testing software for LTE base stations",
    // },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "HTML5",
    "CSS3",
    "Sass",
    "VTEX CMS",
  ],
  projects: [
    {
      title: "Thalita Torres",
      techStack: [
        "Side Project",
        "JavaScript",
        "Next.js",
        "CSS3",
        "Sass Modules",
        "EmailJS",
      ],
      description:
        "Thalita Torres's portfolio, showcasing her skills in design, usability, and user experience",
      logo: ConsultlyLogo,
      link: {
        label: "thalitatorres.com.br",
        href: "https://www.thalitatorres.com.br/",
      },
    },
    {
      title: "Shopping Cart",
      techStack: ["Side Project", "JavaScript", "Reactjs", "API"],
      description:
        "Lists, searches, and manages products from the Mercado Livre API, featuring functionalities to add and remove items",
      logo: MonitoLogo,
      link: {
        label: "shopping-cart-nine-mu.vercel.app",
        href: "https://shopping-cart-nine-mu.vercel.app/",
      },
    },
    {
      title: "Primeflix",
      techStack: ["Side Project", "Sass", "JavaScript", "Reactjs", "API"],
      description:
        "Project that lists movies from The Movie DB API, allowing users to add and remove favorites",
      logo: JarockiMeLogo,
      link: {
        label: "primeflix-psi.vercel.app",
        href: "https://primeflix-psi.vercel.app/",
      },
    },
    // {
    //   title: "Minimal",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Minimalist calendars, habit trackers and planners generator",
    //   logo: Minimal,
    //   link: {
    //     label: "useminimal.com",
    //     href: "https://useminimal.com/",
    //   },
    // },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/",
    //   },
    // },
    // {
    //   title: "Evercast",
    //   techStack: [
    //     "Lead Frontend Developer",

    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Creative collaboration platform that combines video conferencing and HD media streaming",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Howdy is a place for you to join communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
