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
  location: "Rio de Janeiro, RJ",
  locationLink: "https://www.google.com/maps/place/Rio+de+Janeiro,+RJ",
  about:
    "Desenvolvedor Front-End apaixonado por criar experiências web rápidas e responsivas.",
  summary:
    "Como Desenvolvedor Front-End, estou focado na especialização em React e Next.js, com o objetivo de desenvolver páginas web responsivas e otimizadas para diferentes dispositivos. Minha abordagem é centrada na busca constante por estratégias de refatoração eficazes para maximizar o desempenho das aplicações. Estou comprometido com revisões de código, buscando aprimorar a qualidade do código e adotar as melhores práticas do setor.",
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
      school: "Universidade do Estado Rio de Janeiro",
      degree: "Bacharel em Ciência da Computação",
      start: "2011",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Red Ventures Brasil",
      link: "https://redventures.com.br/",
      badges: ["Remoto"],
      title: "Web Programmer",
      logo: ParabolLogo,
      start: "10/2021",
      end: "07/2023",
      description:
        "Implementei novas features, trabalhei na melhoria do desempenho das aplicações, desenvolvi e mantive o front-end de aplicações web. Tecnologias: HTML5, Sass, JavaScript, React, GatsbyJs, Cypress, New Relic",
    },
    {
      company: "Commerce Growth",
      link: "https://commercegrowth.ag/",
      badges: ["Rio de Janeiro"],
      title: "Front-End Development Trainee → Jr Front-End Developer",
      logo: ClevertechLogo,
      start: "05/2019",
      end: "10/2021",
      description:
        "Desenvolvi e mantive sites de e-commerce. Documentei e implementei tags de rastreamento (Google Analytics, Google Ads, Facebook Pixel) via GTM. Tecnologias: HTML5, Pugjs, Sass, JavaScript, jQuery, Gulp.js, Grunt, VTEX CMS",
    },
    {
      company: "Nasajon",
      link: "https://nasajon.com.br/",
      badges: ["Rio de Janeiro"],
      title: "Front-End Development Intern",
      logo: JojoMobileLogo,
      start: "07/2017",
      end: "10/2018",
      description:
        "Implementei features e temas personalizados em Wordpress. Tecnologias: HTML5, CSS3, jQuery, Wordpress",
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
    "HTML5",
    "CSS3",
    "Sass",
    "Styled Components",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "VTEX CMS",
    "Firebase",
  ],
  projects: [
    {
      title: "Jadson Santos",
      techStack: ["Side Project", "Next.js", "TypeScript"],
      description:
        "Meu portfólio contendo meus projetos e principais conhecimentos técnicos",
      logo: Minimal,
      link: {
        label: "jadsonsantos.dev.br",
        href: "https://jadsonsantos.dev.br/",
      },
    },
    {
      title: "Thalita Torres",
      techStack: [
        "Side Project",
        "JavaScript",
        "Next.js",
        "Sass",
        "SCSS Modules",
        "EmailJS",
      ],
      description:
        "Portfólio da Thalita Torres, mostrando suas habilidades em design, usabilidade e experiência do usuário",
      logo: ConsultlyLogo,
      link: {
        label: "thalitatorres.com.br",
        href: "https://www.thalitatorres.com.br/",
      },
    },
    {
      title: "Club Ecommerce",
      techStack: [
        "Side Project",
        "React.js",
        "TypeScript",
        "Redux",
        "Styled Components",
        "Firebase",
      ],
      description:
        "Projeto de ecommerce que oferece uma plataforma intuitiva e fácil de usar para listar e adicionar produtos ao carrinho.",
      logo: BarepapersLogo,
      link: {
        label: "clubecommerce.jadsonsantos.dev.br",
        href: "https://clubecommerce.jadsonsantos.dev.br/",
      },
    },
    {
      title: "Shopping Cart",
      techStack: ["Side Project", "JavaScript", "React", "API"],
      description:
        "Lista, busca e gerencia produtos da API do Mercado Livre, oferecendo funcionalidades para adicionar e remover itens",
      logo: MonitoLogo,
      link: {
        label: "mercadolivre.jadsonsantos.dev.br",
        href: "https://mercadolivre.jadsonsantos.dev.br/",
      },
    },
    {
      title: "Primeflix",
      techStack: ["Side Project", "Sass", "TypeScript", "React", "API"],
      description:
        "Projeto que lista filmes da API The Movie DB, permitindo aos usuários adicionar e remover favoritos",
      logo: JarockiMeLogo,
      link: {
        label: "primeflix-psi.vercel.app",
        href: "https://primeflix-psi.vercel.app/",
      },
    },
  ],
} as const;
