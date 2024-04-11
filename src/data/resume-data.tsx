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
    "Como Desenvolvedor Front-End, estou me especializando em React e Next.js, com foco na criação de experiências web rápidas, responsivas e otimizadas para diferentes dispositivos. Minha abordagem é centrada na busca constante por estratégias de refatoração eficazes para maximizar o desempenho das aplicações. Comprometido com com a refatoração eficaz e a adoção de melhores práticas para maximizar o desempenho das aplicações.",
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
        url: "https://www.linkedin.com/in/jadsonsantos",
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
      title: "Programador Web",
      logo: ParabolLogo,
      start: "10/2021",
      end: "07/2023",
      description: `- Implementei novas features e melhoras de desempenho em aplicações web, utilizando React e GatsbyJs.<br/> 
        - Desenvolvi e mantive o front-end das aplicações, com foco em responsividade e otimização das telas.<br/> 
        - Utilizei Cypress para testes automatizados, e New Relic para monitoramento de desempenho, contribuindo para a melhoria contínua da experiência do usuário.`,
    },
    {
      company: "Commerce Growth",
      link: "https://commercegrowth.ag/",
      badges: ["Rio de Janeiro"],
      title: "Front-End Developer",
      logo: ClevertechLogo,
      start: "05/2019",
      end: "10/2021",
      description: `- Desenvolvi e mantive sites de e-commerce utilizando VTEX CMS, focado em usabilidade e performance.<br/> 
      - Implementei tags de rastreamento como o Google Analytics, Google Ads, Facebook Pixel utilizando o Google Tag Manager. Isso otimizou a análise de dados e a gestão de campanhas pelo time de marketing. <br/>
      - Tecnologias: HTML5, Pugjs, Sass, JavaScript, jQuery, Gulp.js, Grunt, VTEX CMS`,
    },
    {
      company: "Nasajon",
      link: "https://nasajon.com.br/",
      badges: ["Rio de Janeiro"],
      title: "Desenvolvedor Front-End",
      logo: JojoMobileLogo,
      start: "07/2017",
      end: "10/2018",
      description: `- Desenvolvi e mantive temas em Wordpress, aprimorando a experiência do usuário e eficiência do site.<br/>
      - Colaborei na implementação de tags de rastreamento e na integração de ferramentas, como o RD Station, otimizando as estratégias de marketing e melhorando a visibilidade e eficácia das campanhas.<br/>
      - Tecnologias: HTML5, CSS3, jQuery, Wordpress`,
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
        "Desenvolvi um site responsivo para apresentar meu portfólio, utilizando React e Next.js.",
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
        "Portfólio da Thalita Torres, mostrando suas habilidades em design, usabilidade e experiência do usuário.",
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
        "Lista, busca e gerencia produtos da API do Mercado Livre, oferecendo funcionalidades para adicionar e remover itens.",
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
        "Projeto que lista filmes da API The Movie DB, permitindo aos usuários adicionar e remover favoritos.",
      logo: JarockiMeLogo,
      link: {
        label: "primeflix-psi.vercel.app",
        href: "https://primeflix-psi.vercel.app/",
      },
    },
  ],
} as const;
