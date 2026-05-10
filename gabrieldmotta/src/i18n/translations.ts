export type Locale = "pt" | "en" | "es";

export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
};

export const defaultLocale: Locale = "pt";

export const translations: Record<Locale, Record<string, unknown>> = {
  pt: {
    home: {
      name: "GABRIEL D. MOURA",
      brand: "MOURIVS",
      role: "<fullstack dev/>",
      portfolio: "PORTFÓLIO",
    },
    moreThanDev: {
      title: "MAIS QUE DEV",
      description:
        "Criei conteúdo para canais no YouTube, incluindo vídeos animados, edições com VFX, corte e edição de vídeos, conteúdo cômico e vídeos de branding, com foco em visuais de alta qualidade, narrativa envolvente e forte retenção de público.",
      videoLabel: "VÍDEO YOUTUBE EDITADO POR MOURIVS",
    },
    bio: {
      sectionLabel: "BIO",
      heading:
        "Atualmente baseado em Maringá, Paraná, Brasil, estou concluindo minha graduação em Análise e Desenvolvimento de Sistemas. Tenho 20 anos e sou profundamente apaixonado por desenvolvimento front-end, com forte foco na construção de interfaces modernas, intuitivas e visualmente envolventes.",
      approachLabel: "MINHA ABORDAGEM",
      approachText:
        "Minha abordagem de desenvolvimento é impulsionada pela paixão por criar experiências de usuário limpas, modernas e altamente intuitivas. Foco na construção de interfaces responsivas e eficientes, combinando forte design visual com desempenho sólido. Busco entregar soluções que não sejam apenas funcionais, mas também envolventes, escaláveis e impactantes, sempre me desafiando a melhorar a qualidade e a criatividade de cada projeto que construo.",
      floatingLabel: "Front-end",
      floatingSublabel: "UI / Motion / Código",
    },
    skills: {
      label: "STACK TECNOLÓGICO",
      title: "LINGUAGENS & TECNOLOGIAS",
      description:
        "Um ecossistema técnico refinado construído em torno de desempenho, escalabilidade, qualidade de interface e padrões modernos de engenharia.",
      items: [
        {
          title: "HTML, CSS & JavaScript",
          description:
            "Tecnologias front-end essenciais usadas para construir interfaces estruturadas, responsivas e altamente adaptáveis.",
        },
        {
          title: "React, Angular & Next.js",
          description:
            "Frameworks e bibliotecas modernas para aplicações dinâmicas, renderização fluida e arquitetura front-end otimizada.",
        },
        {
          title: "Node.js & Engenharia de API",
          description:
            "Desenvolvimento back-end rápido e escalável focado em integrações seguras, serviços e sistemas de alta performance.",
        },
        {
          title: "Flutter & Sistemas Mobile",
          description:
            "Aplicações móveis multiplataforma projetadas para desempenho fluido e experiências consistentes em diferentes dispositivos.",
        },
        {
          title: "Fundamentos C / C++",
          description:
            "Sólida base em resolução de problemas com ênfase em lógica, estruturas de dados, algoritmos e pensamento computacional.",
        },
        {
          title: "Automação, Bots & Workflows",
          description:
            "Automações personalizadas, integrações de serviços, bots e engenharia de workflows para operações digitais e escala.",
        },
        {
          title: "Sistemas de IA & Design de Prompts",
          description:
            "Fluxos inteligentes, engenharia de prompts e sistemas assistidos por IA projetados para melhorar velocidade, resultado e eficiência.",
        },
        {
          title: "Soluções Digitais Multi-Stack",
          description:
            "Ecossistemas completos combinando web, mobile, automação e sistemas inteligentes em uma única visão de produto.",
        },
      ],
    },
    work: {
      label: "TRABALHOS SELECIONADOS",
      title: "MEU TRABALHO",
      description:
        "Uma seleção de projetos focados em design de interface, sistemas digitais, edição cinematográfica e experiências orientadas por marca.",
      projects: [
        {
          year: "2026",
          title: "Zastek Control Dashboard",
          description:
            "Um ambiente de controle estratégico projetado para organizar projetos, prazos, fluxos internos e desempenho com clareza e precisão.",
          type: "Plataforma Web",
        },
        {
          year: "2026",
          title: "Access Platform",
          description:
            "Uma experiência de acesso segura e moderna construída para centralizar autenticação e fornecer um ponto de entrada limpo ao sistema.",
          type: "Autenticação",
        },
        {
          year: "2025",
          title: "Login Page",
          description:
            "Uma interface de login escalável projetada para se adaptar a diferentes marcas, preservando consistência, usabilidade e qualidade visual.",
          type: "Sistema de UI",
        },
        {
          year: "2024",
          title: "EzCode",
          description:
            "Um gerador de QR Code prático construído para velocidade, acessibilidade e experiências limpas de compartilhamento digital.",
          type: "Ferramenta Utilitária",
        },
        {
          year: "2026",
          title: "Subliminal Gameplay Video",
          description:
            "Uma edição cinematográfica com VFX combinando atmosfera, movimento, tensão e pós-produção estilizada em uma experiência imersiva e sombria.",
          type: "Edição de Vídeo",
        },
        {
          year: "2025",
          title: "Medic Website",
          description:
            "Um site médico projetado para comunicar confiança, profissionalismo e acesso fluido a informações e serviços.",
          type: "Website",
        },
      ],
    },
    services: {
      label: "SERVIÇOS",
      title: "SERVIÇOS",
      items: [
        {
          title: "DESENVOLVIMENTO WEB FULL STACK",
          description:
            "Aplicações web modernas, escaláveis e de alta performance construídas com forte arquitetura front-end e back-end.",
        },
        {
          title: "FUNDAMENTOS DE PROGRAMAÇÃO & LÓGICA DE SISTEMAS",
          description:
            "Sólidas habilidades de resolução de problemas, pensamento algorítmico e lógica de desenvolvimento estruturada em sistemas complexos.",
        },
        {
          title: "ENGENHARIA FRONTEND & DESENVOLVIMENTO DE UI",
          description:
            "Interfaces responsivas, visualmente refinadas e orientadas por desempenho focadas em usabilidade e experiência moderna.",
        },
        {
          title: "AUTOMAÇÃO & ENGENHARIA DE WORKFLOWS",
          description:
            "Bots, automação de processos e workflows integrados projetados para otimizar operações digitais e velocidade de execução.",
        },
        {
          title: "DESENVOLVIMENTO BACKEND & ARQUITETURA DE API",
          description:
            "Sistemas server-side seguros, eficientes e escaláveis com design de API limpo e integrações robustas.",
        },
        {
          title: "INTELIGÊNCIA ARTIFICIAL & ENGENHARIA DE PROMPTS",
          description:
            "Sistemas alimentados por IA, workflows de prompts e automações inteligentes projetados para alavancagem digital real.",
        },
        {
          title: "DESENVOLVIMENTO MOBILE MULTIPLATAFORMA",
          description:
            "Experiências móveis construídas com tecnologias multiplataforma modernas para consistência, velocidade e usabilidade.",
        },
        {
          title: "SOLUÇÕES DIGITAIS MULTI-STACK",
          description:
            "Ecossistemas digitais completos conectando web, mobile, automação e camadas inteligentes em uma estrutura coesa.",
        },
      ],
    },
    partners: {
      label: "PARCEIROS",
      subtitle: "do mourivs",
    },
  },

  en: {
    home: {
      name: "GABRIEL D. MOURA",
      brand: "MOURIVS",
      role: "<fullstack dev/>",
      portfolio: "PORTFOLIO",
    },
    moreThanDev: {
      title: "MORE THAN DEV",
      description:
        "I have created content for YouTube channels, including animated videos, VFX-driven edits, video cutting and editing, comedic content, and branding videos, focusing on high-quality visuals, engaging storytelling, and strong audience retention.",
      videoLabel: "VIDEO YOUTUBE EDITED BY MOURIVS",
    },
    bio: {
      sectionLabel: "BIO",
      heading:
        "Currently based in Maringá, Paraná, Brazil, I am completing my degree in Analysis and Systems Development. I am 20 years old and deeply passionate about front-end development, with a strong focus on building modern, intuitive, and visually engaging user interfaces.",
      approachLabel: "MY APPROACH",
      approachText:
        "My approach to development is driven by a passion for creating clean, modern, and highly intuitive user experiences. I focus on building responsive and efficient interfaces, combining strong visual design with solid performance. I aim to deliver solutions that are not only functional, but also engaging, scalable, and impactful, always pushing myself to improve the quality and creativity of every project I build.",
      floatingLabel: "Front-end",
      floatingSublabel: "UI / Motion / Code",
    },
    skills: {
      label: "TECH STACK",
      title: "LANGUAGES & TECHNOLOGIES",
      description:
        "A refined technical ecosystem built around performance, scalability, interface quality and modern engineering standards.",
      items: [
        {
          title: "HTML, CSS & JavaScript",
          description:
            "Core front-end technologies used to build structured, responsive and highly adaptable user interfaces.",
        },
        {
          title: "React, Angular & Next.js",
          description:
            "Modern frameworks and libraries for dynamic applications, smooth rendering and optimized front-end architecture.",
        },
        {
          title: "Node.js & API Engineering",
          description:
            "Fast and scalable back-end development focused on secure integrations, services and high-performance systems.",
        },
        {
          title: "Flutter & Mobile Systems",
          description:
            "Cross-platform mobile applications designed for fluid performance and consistent experiences across devices.",
        },
        {
          title: "C / C++ Foundations",
          description:
            "Strong problem-solving background with emphasis on logic, data structures, algorithms and computational thinking.",
        },
        {
          title: "Automation, Bots & Workflows",
          description:
            "Custom automations, service integrations, bots and workflow engineering for digital operations and scale.",
        },
        {
          title: "AI Systems & Prompt Design",
          description:
            "Intelligent flows, prompt engineering and AI-assisted systems designed to improve speed, output and efficiency.",
        },
        {
          title: "Multi-Stack Digital Solutions",
          description:
            "Complete ecosystems combining web, mobile, automation and intelligent systems into a single product vision.",
        },
      ],
    },
    work: {
      label: "SELECTED WORK",
      title: "MY WORK",
      description:
        "A selection of projects focused on interface design, digital systems, cinematic editing and brand-driven experiences.",
      projects: [
        {
          year: "2026",
          title: "Zastek Control Dashboard",
          description:
            "A strategic control environment designed to organize projects, deadlines, internal workflows and performance with clarity and precision.",
          type: "Web Platform",
        },
        {
          year: "2026",
          title: "Access Platform",
          description:
            "A secure and modern access experience built to centralize authentication and provide a clean system entry point.",
          type: "Authentication",
        },
        {
          year: "2025",
          title: "Login Page",
          description:
            "A scalable login interface designed to adapt across different brands while preserving consistency, usability and visual quality.",
          type: "UI System",
        },
        {
          year: "2024",
          title: "EzCode",
          description:
            "A practical QR code generator built for speed, accessibility and clean digital sharing experiences.",
          type: "Utility Tool",
        },
        {
          year: "2026",
          title: "Subliminal Gameplay Video",
          description:
            "A cinematic VFX-driven edit combining atmosphere, motion, tension and stylized post-production into a dark immersive experience.",
          type: "Video Editing",
        },
        {
          year: "2025",
          title: "Medic Website",
          description:
            "A medical website designed to communicate trust, professionalism and smooth access to information and services.",
          type: "Website",
        },
      ],
    },
    services: {
      label: "SERVICES",
      title: "SERVICES",
      items: [
        {
          title: "FULL STACK WEB DEVELOPMENT",
          description:
            "Modern, scalable and high-performance web applications built with strong front-end and back-end architecture.",
        },
        {
          title: "PROGRAMMING FOUNDATIONS & SYSTEM LOGIC",
          description:
            "Strong problem-solving skills, algorithmic thinking and structured development logic across complex systems.",
        },
        {
          title: "FRONTEND ENGINEERING & UI DEVELOPMENT",
          description:
            "Responsive, visually refined and performance-driven interfaces focused on usability and modern experience.",
        },
        {
          title: "AUTOMATION & WORKFLOW ENGINEERING",
          description:
            "Bots, process automation and integrated workflows designed to optimize digital operations and execution speed.",
        },
        {
          title: "BACKEND DEVELOPMENT & API ARCHITECTURE",
          description:
            "Secure, efficient and scalable server-side systems with clean API design and robust integrations.",
        },
        {
          title: "ARTIFICIAL INTELLIGENCE & PROMPT ENGINEERING",
          description:
            "AI-powered systems, prompt workflows and intelligent automations designed for real digital leverage.",
        },
        {
          title: "CROSS-PLATFORM MOBILE DEVELOPMENT",
          description:
            "Mobile experiences built with modern cross-platform technologies for consistency, speed and usability.",
        },
        {
          title: "MULTI-STACK DIGITAL SOLUTIONS",
          description:
            "Complete digital ecosystems connecting web, mobile, automation and intelligent layers into one cohesive structure.",
        },
      ],
    },
    partners: {
      label: "PARTNERS",
      subtitle: "of mourivs",
    },
  },

  es: {
    home: {
      name: "GABRIEL D. MOURA",
      brand: "MOURIVS",
      role: "<fullstack dev/>",
      portfolio: "PORTAFOLIO",
    },
    moreThanDev: {
      title: "MÁS QUE DEV",
      description:
        "He creado contenido para canales de YouTube, incluyendo videos animados, ediciones con VFX, corte y edición de videos, contenido cómico y videos de branding, con enfoque en visuales de alta calidad, narrativa envolvente y fuerte retención de audiencia.",
      videoLabel: "VIDEO YOUTUBE EDITADO POR MOURIVS",
    },
    bio: {
      sectionLabel: "BIO",
      heading:
        "Actualmente basado en Maringá, Paraná, Brasil, estoy completando mi licenciatura en Análisis y Desarrollo de Sistemas. Tengo 20 años y una profunda pasión por el desarrollo front-end, con un fuerte enfoque en la construcción de interfaces modernas, intuitivas y visualmente atractivas.",
      approachLabel: "MI ENFOQUE",
      approachText:
        "Mi enfoque de desarrollo está impulsado por la pasión de crear experiencias de usuario limpias, modernas y altamente intuitivas. Me enfoco en construir interfaces responsivas y eficientes, combinando un fuerte diseño visual con un desempeño sólido. Busco entregar soluciones que no solo sean funcionales, sino también atractivas, escalables e impactantes, siempre desafiándome a mejorar la calidad y creatividad de cada proyecto que construyo.",
      floatingLabel: "Front-end",
      floatingSublabel: "UI / Motion / Código",
    },
    skills: {
      label: "STACK TECNOLÓGICO",
      title: "LENGUAJES & TECNOLOGÍAS",
      description:
        "Un ecosistema técnico refinado construido en torno al rendimiento, escalabilidad, calidad de interfaz y estándares modernos de ingeniería.",
      items: [
        {
          title: "HTML, CSS & JavaScript",
          description:
            "Tecnologías front-end esenciales utilizadas para construir interfaces estructuradas, responsivas y altamente adaptables.",
        },
        {
          title: "React, Angular & Next.js",
          description:
            "Frameworks y bibliotecas modernas para aplicaciones dinámicas, renderizado fluido y arquitectura front-end optimizada.",
        },
        {
          title: "Node.js & Ingeniería de API",
          description:
            "Desarrollo back-end rápido y escalable enfocado en integraciones seguras, servicios y sistemas de alto rendimiento.",
        },
        {
          title: "Flutter & Sistemas Móviles",
          description:
            "Aplicaciones móviles multiplataforma diseñadas para un rendimiento fluido y experiencias consistentes en diferentes dispositivos.",
        },
        {
          title: "Fundamentos C / C++",
          description:
            "Sólida base en resolución de problemas con énfasis en lógica, estructuras de datos, algoritmos y pensamiento computacional.",
        },
        {
          title: "Automatización, Bots & Workflows",
          description:
            "Automatizaciones personalizadas, integraciones de servicios, bots e ingeniería de workflows para operaciones digitales y escala.",
        },
        {
          title: "Sistemas de IA & Diseño de Prompts",
          description:
            "Flujos inteligentes, ingeniería de prompts y sistemas asistidos por IA diseñados para mejorar velocidad, resultado y eficiencia.",
        },
        {
          title: "Soluciones Digitales Multi-Stack",
          description:
            "Ecosistemas completos que combinan web, móvil, automatización e sistemas inteligentes en una sola visión de producto.",
        },
      ],
    },
    work: {
      label: "TRABAJOS SELECCIONADOS",
      title: "MI TRABAJO",
      description:
        "Una selección de proyectos enfocados en diseño de interfaz, sistemas digitales, edición cinematográfica y experiencias impulsadas por marca.",
      projects: [
        {
          year: "2026",
          title: "Zastek Control Dashboard",
          description:
            "Un entorno de control estratégico diseñado para organizar proyectos, plazos, flujos internos y desempeño con claridad y precisión.",
          type: "Plataforma Web",
        },
        {
          year: "2026",
          title: "Access Platform",
          description:
            "Una experiencia de acceso segura y moderna construida para centralizar la autenticación y proporcionar un punto de entrada limpio al sistema.",
          type: "Autenticación",
        },
        {
          year: "2025",
          title: "Login Page",
          description:
            "Una interfaz de inicio de sesión escalable diseñada para adaptarse a diferentes marcas preservando consistencia, usabilidad y calidad visual.",
          type: "Sistema de UI",
        },
        {
          year: "2024",
          title: "EzCode",
          description:
            "Un generador de QR práctico construido para velocidad, accesibilidad y experiencias limpias de compartición digital.",
          type: "Herramienta Utilitaria",
        },
        {
          year: "2026",
          title: "Subliminal Gameplay Video",
          description:
            "Una edición cinematográfica con VFX que combina atmósfera, movimiento, tensión y posproducción estilizada en una experiencia inmersiva y oscura.",
          type: "Edición de Video",
        },
        {
          year: "2025",
          title: "Medic Website",
          description:
            "Un sitio médico diseñado para comunicar confianza, profesionalismo y acceso fluido a información y servicios.",
          type: "Sitio Web",
        },
      ],
    },
    services: {
      label: "SERVICIOS",
      title: "SERVICIOS",
      items: [
        {
          title: "DESARROLLO WEB FULL STACK",
          description:
            "Aplicaciones web modernas, escalables y de alto rendimiento construidas con fuerte arquitectura front-end y back-end.",
        },
        {
          title: "FUNDAMENTOS DE PROGRAMACIÓN & LÓGICA DE SISTEMAS",
          description:
            "Sólidas habilidades de resolución de problemas, pensamiento algorítmico y lógica de desarrollo estructurada en sistemas complejos.",
        },
        {
          title: "INGENIERÍA FRONTEND & DESARROLLO DE UI",
          description:
            "Interfaces responsivas, visualmente refinadas y orientadas al rendimiento enfocadas en usabilidad y experiencia moderna.",
        },
        {
          title: "AUTOMATIZACIÓN & INGENIERÍA DE WORKFLOWS",
          description:
            "Bots, automatización de procesos y workflows integrados diseñados para optimizar operaciones digitales y velocidad de ejecución.",
        },
        {
          title: "DESARROLLO BACKEND & ARQUITECTURA DE API",
          description:
            "Sistemas del lado del servidor seguros, eficientes y escalables con diseño de API limpio e integraciones robustas.",
        },
        {
          title: "INTELIGENCIA ARTIFICIAL & INGENIERÍA DE PROMPTS",
          description:
            "Sistemas impulsados por IA, workflows de prompts y automatizaciones inteligentes diseñados para apalancamiento digital real.",
        },
        {
          title: "DESARROLLO MÓVIL MULTIPLATAFORMA",
          description:
            "Experiencias móviles construidas con tecnologías multiplataforma modernas para consistencia, velocidad y usabilidad.",
        },
        {
          title: "SOLUCIONES DIGITALES MULTI-STACK",
          description:
            "Ecosistemas digitales completos conectando web, móvil, automatización y capas inteligentes en una estructura cohesiva.",
        },
      ],
    },
    partners: {
      label: "SOCIOS",
      subtitle: "de mourivs",
    },
  },
};
