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
  about: "Desenvolvedor Front-End",
  summary: `
    Com 5 anos de experiência em desenvolvimento web, trabalhei com importantes marcas e instituições financeiras, onde desenvolvi e mantive projetos e-commerce e aplicações web para aquisição de produtos digitais. Atualmente, estou focado em desenvolvimento digital de produtos focados em usabilidade e otimização de conversão.`,
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
      title: "Desenvolvedor Front-End",
      logo: ClevertechLogo,
      start: "04/2024",
      end: "atualmente",
      description: `° Desenvolvi e mantive sites de e-commerce de alto tráfego, focando em usabildade e otimização de conversão.<br/>
      ° Desenvolvi componentes reutilizáveis e otimizados para o front-end.<br/>
      ° Contribuí para melhorar a qualidade do código através de otimizações e refatorações.<br/>
      ° Tecnologias: HTML5, Sass, JavaScript, ReactJs, Gulp.js, Webpack, VTEX CMS/IO`,
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
        ° Otimizei o desempenho das páginas, reduzindo significativamente o tempo de carregamento e aumentando a pontuação no PageSpeed.<br/>
        ° Contribuí para melhorar a qualidade do código através de revisões via pull resquests.<br/>
        ° Colaborei em times ágeis, utilizando metodologias ágeis como SCRUM.<br/>
        ° Tecnologias: HTML5, Sass, JavaScript, ReactJs, GatsbyJs
        `,
    },
    {
      company: "Commerce Growth",
      link: "https://commercegrowth.ag/",
      badges: ["Rio de Janeiro"],
      title: "Desenvolvedor Front-End",
      logo: ClevertechLogo,
      start: "05/2019",
      end: "10/2021",
      description: `° Desenvolvi e mantive sites de e-commerce utilizando VTEX CMS, garantindo experiências de usuário otimizadas e responsivas.<br/>
      ° Implementei e mantive tags de rastreamento avançadas através do Google Tag Manager (GTM), incluindo Google Analytics, Google Ads e Facebook Pixel. Isso permitiu análises precisas e estratégias de marketing eficazes para os clientes.
      <br/>
      ° Tecnologias: HTML5, Pugjs, Sass, JavaScript, jQuery, Gulp.js, Grunt, VTEX CMS`,
    },
    {
      company: "Nasajon",
      link: "https://nasajon.com.br/",
      badges: ["Rio de Janeiro"],
      title: "Desenvolvedor Front-End",
      logo: JojoMobileLogo,
      start: "07/2017",
      end: "10/2018",
      description: `Meu papel principal foi desenvolver e manter temas em WordPress, criando novas funcionalidades para melhorar a experiência do usuário.<br/> Utilizei tecnologias como HTML5, CSS3 e jQuery para construir soluções dinâmicas e interativas, resultando em plataformas eficientes para nossos clientes.<br/>
      `,
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
    "Redux",
    "Sass",
    "Styled Components",
    "TailwindCSS",
    "VTEX",
    "Metodologias Ágeis",
  ],
  projects: [
    {
      title: "Jadson Santos",
      techStack: ["React", "Next.js", "TypeScript", "SCSS Modules", "Sass"],
      description:
        "Portfólio responsivo, desenvolvido em Next.js com componentes reutilizáveis e estilizados usando SCSS Modules e Sass. A arquitetura modular garante facilidade na manutenção e atualização do conteúdo.",
      logo: Minimal,
      link: {
        label: "jadsonsantos.dev.br",
        href: "https://jadsonsantos.dev.br/",
      },
    },
    {
      title: "Harpá",
      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Styled Components",
        "SwiperJS",
      ],
      description:
        "Site da agência de expedição Harpá, desenvolvido em Next.js. Implementado com componentes reutilizáveis e estilizados usando Styled Components. Incorpora funcionalidades avançadas como galerias dinâmicas com SwiperJS. Conta com uma estrutura modular, separando claramente as responsabilidades, facilitando a manutenção e escalabilidade do site.",
      logo: ConsultlyLogo,
      link: {
        label: "harpa.me",
        href: "https://harpa.me",
      },
    },
    {
      title: "Thalita Torres",
      techStack: [
        "React",
        "Next.js",
        "JavaScript",
        "Sass",
        "SCSS Modules",
        "EmailJS",
      ],
      description:
        "Este portfólio é uma plataforma robusta desenvolvida em Next.js e React, exibindo habilidades em design e experiência do usuário. Implementado com JavaScript e estilizado usando Sass e SCSS Modules, oferece uma interface visual atraente e responsiva. A plataforma incorpora funcionalidades avançadas como envio de formulários via EmailJS, permitindo interação direta com o usuário.",
      logo: ConsultlyLogo,
      link: {
        label: "thalitatorres.com.br",
        href: "https://www.thalitatorres.com.br/",
      },
    },
  ],
} as const;
