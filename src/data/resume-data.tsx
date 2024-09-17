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
    "Desenvolvedor Front End",
  summary:
    `
    Com 5 anos de experiência na área de desenvolvimento front end, desenvolvi e mantive projetos e-commerce e aplicações web para aquisição digital de produtos de uma grande instituição financeira.
    Trabalhei para algumas marcas, onde desenvolvi e mantive sites e-commerce responsivos e otimizados para conversão. `,
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
      company: "Avanti",
      link: "https://penseavanti.com.br/ecommerce/",
      badges: ["Remoto"],
      title: "Front-End Developer",
      logo: ClevertechLogo,
      start: "04/2024",
      end: "atualmente",
      description: `- Desenvolvi e mantive sites de e-commerce, com foco em conversão e responsividade.<br/>
      - Tecnologias: HTML5, Sass, JavaScript, ReactJs, Gulp.js, Webpack, VTEX CMS/IO`,
    },
    {
      company: "Red Ventures Brasil",
      link: "https://redventures.com.br/",
      badges: ["Remoto"],
      title: "Programador Web",
      logo: ParabolLogo,
      start: "10/2021",
      end: "07/2023",
      description: `
        - Desenvolvi e mantive o front-end das aplicações, implementando novas features e melhorias de carregamento das páginas.<br/>
        - Tecnologias: HTML5, Sass, JavaScript, ReactJs, GatsbyJs
        `,
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
      description: `- Desenvolvi e mantive temas em Wordpress, criando novas funcionalidades.<br/>
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
    "React",
    "Next.js",
    "GatsbyJs",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Sass",
    "Styled Components",
    "TailwindCSS",
    "Redux",
    "VTEX CMS",
    "Firebase",
  ],
  projects: [
    {
      title: "Jadson Santos",
      techStack: ["Side Project", "Next.js", "TypeScript"],
      description:
        "Site responsivo que apresenta meu portfólio, desenvolvido em Next.js.",
      logo: Minimal,
      link: {
        label: "jadsonsantos.dev.br",
        href: "https://jadsonsantos.dev.br/",
      },
    },
    {
      title: "Harpá",
      techStack: [
        "Side Project",
        "React",
        "TypeScript",
        "Next.js",
        "Styled Components",
      ],
      description:
        "Site da agência de expedição Harpa, desenvolvido em Next.js.",
      logo: ConsultlyLogo,
      link: {
        label: "harpa.me",
        href: "https://harpa.me",
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
        "Portfólio da Thalita Torres, que apresenta suas habilidades em design e experiência do usuário.",
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
        "Ecommerce que apresenta funcionalidades como listar e adicionar produtos ao carrinho.",
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
        "Lista e busca produtos da API do Mercado Livre, oferecendo funcionalidades para adicionar e remover itens ao minicart.",
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
        label: "https://primeflix.jadsonsantos.dev.br",
        href: "https://https://primeflix.jadsonsantos.dev.br/",
      },
    },
  ],
} as const;
