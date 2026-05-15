import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import {
  ClevertechLogo,
  ConsultlyLogo,
  Minimal,
  ParabolLogo,
} from "@/images/logos";

export const RESUME_DATA = {
  name: "Jadson Santos",
  initials: "JS",
  location: "Rio de Janeiro, RJ",
  locationLink: "https://www.google.com/maps/place/Rio+de+Janeiro,+RJ",
  about: "Desenvolvedor Front-End React · Produtos Digitais & E-commerce",
  summary: `Desenvolvedor Front-End com 6 anos de experiência em aplicações web, produtos digitais e e-commerce de alto tráfego. Atuação focada em React, performance, componentização, usabilidade e construção de interfaces escaláveis. Experiência colaborando com times multidisciplinares, code review, integração com APIs REST e entregas contínuas em ambientes ágeis.`,
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
      company: "Lumis XP",
      link: "https://www.lumis.com.br/",
      badges: ["Remoto"],
      title: "Desenvolvedor Front-End",
      logo: Minimal,
      start: "01/2026",
      end: "atualmente",
      description: `° Desenvolvimento e manutenção de componentes e interfaces para portal corporativo na plataforma LumisXP, com foco em estabilidade, usabilidade e evolução contínua do front-end.<br/>
        ° Integração com APIs REST e consumo de dados no front-end para páginas e seções do portal.<br/>
        ° Tecnologias: JavaScript, jQuery, HTML5, CSS3, APIs REST, LumisXP CMS, Scrum`,
    },
    {
      company: "Avanti",
      link: "https://penseavanti.com.br/ecommerce/",
      badges: ["Remoto"],
      title: "Desenvolvedor Front-End",
      logo: ClevertechLogo,
      start: "04/2024",
      end: "01/2026",
      description: `° Atuei em e-commerce de alto tráfego em VTEX IO, priorizando usabilidade, consistência visual e otimização de conversão.<br/>
      ° Evoluí biblioteca de componentes reutilizáveis e padrões de implementação no front-end.<br/>
      ° Elevei a manutenibilidade do código com refatorações, performance e revisões técnicas contínuas.<br/>
      ° Tecnologias: React, TypeScript, JavaScript, Sass, Tailwind CSS, VTEX IO, Code Review`,
    },
    {
      company: "Freelance",
      link: "https://jadsonsantos.dev.br/",
      badges: ["Remoto"],
      title: "Desenvolvedor Front-End",
      logo: Minimal,
      start: "08/2023",
      end: "03/2024",
      description: `° Desenvolvimento front-end em projeto fechado para cliente, com entregas iterativas e alinhamento direto de escopo.<br/>
      ° Implementação de interfaces responsivas, ajustes de UX e integrações conforme demanda do projeto.<br/>
      ° Tecnologias: React, TypeScript, Next.js, JavaScript, Sass, Styled Components`,
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
        ° Melhorei métricas de performance (tempo de carregamento e pontuações no PageSpeed Insights) em páginas de alto consumo.<br/>
        ° Fortaleci a qualidade do código com revisões consistentes em pull requests e feedback entre pares.<br/>
        ° Trabalhei em squad ágil com Scrum para discovery e entregas iterativas.<br/>
        ° Tecnologias: React, Gatsby.js, JavaScript, Cypress, Code Review, Scrum
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
      description: `° Desenvolvimento e sustentação de lojas em VTEX CMS com foco em experiência responsiva, performance e consistência de marca.<br/>
      ° Configurei e mantive camadas de medição no Google Tag Manager (Google Analytics, Google Ads, Facebook Pixel) para orientar squads de growth e produto.<br/>
      ° Tecnologias: JavaScript, Sass, VTEX CMS, HTML5, Pug.js, jQuery`,
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
    "Gatsby.js",
    "TypeScript",
    "JavaScript",
    "APIs REST",
    "Redux",
    "Sass",
    "Styled Components",
    "Tailwind CSS",
    "Webpack",
    "Git",
    "GitHub",
    "Google Tag Manager",
    "VTEX IO",
    "Cypress",
    "Clean Code",
    "Code Review",
    "Metodologias ágeis (Scrum, Kanban)",
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
        "Site da agência de expedição Harpá, desenvolvido em Next.js. Implementado com componentes reutilizáveis e estilizados usando Styled Components. Incorpora funcionalidades como galerias dinâmicas com SwiperJS. Conta com uma estrutura modular, separando claramente as responsabilidades, facilitando a manutenção e escalabilidade do site.",
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
        "Portfólio desenvolvido em Next.js e React, exibindo habilidades em design e experiência do usuário. Implementado com JavaScript e estilizado usando Sass e SCSS Modules, oferece uma interface visual atraente e responsiva. Incorpora funcionalidades como envio de formulários via EmailJS, permitindo interação direta com o usuário.",
      logo: ConsultlyLogo,
      link: {
        label: "thalitatorres.com.br",
        href: "https://www.thalitatorres.com.br/",
      },
    },
  ],
} as const;
