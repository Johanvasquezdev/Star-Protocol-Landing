import type { Project } from "@/types";

export const featuredProjects: Project[] = [
  {
    name: "Artemis Banking Pro",
    type: {
      en: "FinTech / Banking Product",
      es: "FinTech / Producto bancario"
    },
    status: { en: "Private Project", es: "Proyecto privado" },
    description: {
      en: "A banking product project focused on clearer account workflows, financial operations, and a polished digital banking experience.",
      es: "Un proyecto bancario enfocado en flujos claros de cuentas, operaciones financieras y una experiencia digital pulida."
    },
    impact: {
      en: "Frames everyday financial actions as a focused product experience with room for secure, maintainable system design.",
      es: "Presenta las acciones financieras diarias como una experiencia enfocada, con espacio para un sistema seguro y mantenible."
    },
    role: { en: "Product concept, interface direction, system architecture", es: "Concepto de producto, direccion de interfaz, arquitectura de sistema" },
    tags: ["FinTech", "Banking", "Product Design"],
    accent: "magenta",
    github: "https://github.com/Johanvasquezdev/ArtemisBankingPro"
  },
  {
    name: "Aeris Flights",
    type: {
      en: "Aviation / Flight Management Platform",
      es: "Aviacion / Plataforma de gestion de vuelos"
    },
    status: { en: "Featured Project", es: "Proyecto destacado" },
    description: {
      en: "A complete flight management platform with flight search, interactive seat selection, reservations, boarding passes, GPS tracking, and airline administration tools.",
      es: "Una plataforma completa de gestion de vuelos con busqueda, seleccion interactiva de asientos, reservas, pases de abordar, rastreo GPS y herramientas administrativas."
    },
    impact: {
      en: "Connects passenger booking flows with airline operations, a desktop admin client, live telemetry, and a production-ready Docker setup.",
      es: "Conecta los flujos de reserva con operaciones de aerolinea, un cliente administrativo de escritorio, telemetria y despliegue con Docker."
    },
    role: { en: "Full-stack architecture, flight workflows, deployment", es: "Arquitectura full-stack, flujos de vuelos, despliegue" },
    tags: ["Next.js", ".NET 8", "Clean Architecture", "Aviation"],
    stack: ["Next.js", "React 19", ".NET 8", "EF Core", "SQL Server", "Docker"],
    accent: "cyan",
    image: { src: "https://opengraph.githubassets.com/1/Johanvasquezdev/Aeris-SIV", alt: { en: "Aeris Flights repository preview", es: "Vista previa del repositorio Aeris Flights" } },
    github: "https://github.com/Johanvasquezdev/Aeris-SIV"
  },
  {
    name: "ETLVentas",
    type: {
      en: "Data Engineering / Data Warehouse",
      es: "Ingenieria de datos / Data Warehouse"
    },
    status: { en: "Featured Project", es: "Proyecto destacado" },
    description: {
      en: "A .NET 9 ETL and data warehouse system that consolidates CSV, REST API, and relational database sources into a star-schema model ready for business intelligence.",
      es: "Un sistema ETL y data warehouse en .NET 9 que consolida fuentes CSV, APIs REST y bases relacionales en un modelo estrella listo para inteligencia de negocio."
    },
    impact: {
      en: "Turns multi-source sales data into traceable dimensions and facts for Power BI analysis and repeatable operational loading.",
      es: "Convierte datos de ventas de multiples fuentes en dimensiones y hechos trazables para analisis en Power BI y cargas operativas repetibles."
    },
    role: { en: "ETL architecture, data modeling, worker pipeline", es: "Arquitectura ETL, modelado de datos, pipeline worker" },
    tags: ["Data Engineering", ".NET 9", "SQL Server", "Power BI"],
    stack: [".NET 9", "EF Core", "SQL Server", "Worker Service", "Power BI"],
    accent: "violet",
    image: { src: "/images/etlventas.jpg", alt: { en: "ETLVentas data warehouse preview", es: "Vista previa del data warehouse ETLVentas" } },
    github: "https://github.com/Johanvasquezdev/ETLVentas-Warehouse"
  },
  {
    name: "MedAgenda",
    type: {
      en: "HealthTech / Medical Appointment Platform",
      es: "HealthTech / Plataforma de citas medicas"
    },
    status: { en: "Featured Project", es: "Proyecto destacado" },
    description: {
      en: "A healthcare scheduling platform shaped around patient-doctor coordination, appointment visibility, and clinic workflow structure.",
      es: "Una plataforma de citas medicas enfocada en coordinacion paciente-doctor, visibilidad de turnos y estructura para flujos de clinica."
    },
    impact: {
      en: "Turns scattered appointment handling into a clearer clinical workflow with role-aware product thinking.",
      es: "Convierte la gestion dispersa de citas en un flujo clinico mas claro con criterio por roles."
    },
    role: { en: "Product architecture, UI flow, backend modeling", es: "Arquitectura de producto, flujo UI, modelado backend" },
    tags: ["HealthTech", "Scheduling", "Full-Stack"],
    stack: ["Next.js", "API design", "Database modeling", "Auth"],
    accent: "cyan",
    image: { src: "/images/projects/medagenda.jpg", alt: { en: "MedAgenda dashboard mockup", es: "Mockup de MedAgenda" } },
    github: "https://github.com/Johanvasquezdev/MedAgenda",
    demo: "https://medagenda.me"
  },
  {
    name: "SupportMind AI",
    type: {
      en: "B2B SaaS / AI Support Assistant",
      es: "B2B SaaS / Asistente de soporte con IA"
    },
    status: { en: "In Progress", es: "En progreso" },
    description: {
      en: "A B2B support assistant concept for turning internal documentation into searchable, AI-assisted answers and support workflows.",
      es: "Un concepto B2B para convertir documentacion interna en respuestas asistidas por IA y flujos de soporte consultables."
    },
    impact: {
      en: "Explores RAG, vector search, analytics, and backend architecture through a practical support automation product.",
      es: "Explora RAG, busqueda vectorial, analitica y arquitectura backend mediante un producto practico de automatizacion."
    },
    role: { en: "SaaS concept, RAG workflow, backend system design", es: "Concepto SaaS, flujo RAG, diseno de sistema backend" },
    tags: ["SaaS", "AI", "RAG"],
    stack: ["LangChain", "Pinecone", "Node.js", "Analytics"],
    accent: "violet",
    image: { src: "/images/projects/supportmind.jpg", alt: { en: "SupportMind AI dashboard mockup", es: "Mockup de SupportMind AI" } },
    github: "https://github.com/Johanvasquezdev/supportmind-ai"
  },
  {
    name: "ImportCost Pro",
    type: {
      en: "Business / Import Cost Calculator",
      es: "Negocios / Calculadora de costos de importacion"
    },
    status: { en: "Featured Project", es: "Proyecto destacado" },
    description: {
      en: "A business calculator for estimating and organizing import costs with structured inputs, clear totals, and decision-ready output.",
      es: "Una calculadora de negocio para estimar y organizar costos de importacion con entradas estructuradas, totales claros y resultados utiles para decidir."
    },
    impact: {
      en: "Makes a messy operational calculation feel guided, auditable, and easier to reuse.",
      es: "Hace que un calculo operativo complejo se sienta guiado, auditable y facil de reutilizar."
    },
    role: { en: "Workflow design, calculation logic, full-stack implementation", es: "Diseno de flujo, logica de calculo, implementacion full-stack" },
    tags: ["Business Tool", "Finance", "Logistics"],
    stack: ["React", "TypeScript", "Forms", "Validation"],
    accent: "magenta",
    image: { src: "/images/projects/importcost.jpg", alt: { en: "ImportCost Pro dashboard mockup", es: "Mockup de ImportCost Pro" } },
    github: "https://github.com/Johanvasquezdev/ImportCost-Pro",
    demo: "https://importcost-pro.onrender.com"
  },
  {
    name: "Real Estate App",
    type: {
      en: "Enterprise / Real Estate Management System",
      es: "Empresarial / Sistema de Gestión Inmobiliaria"
    },
    status: { en: "Featured Project", es: "Proyecto destacado" },
    description: {
      en: "A robust, enterprise-level Real Estate Management System built with .NET 9 and Clean Architecture for property listings, favorites, and offers.",
      es: "Un robusto sistema empresarial de gestión inmobiliaria construido con .NET 9 y Clean Architecture para listados de propiedades, favoritos y ofertas."
    },
    impact: {
      en: "Separates core domain from infrastructure, providing a scalable MVC WebApp and a secure RESTful Web API ready for Docker deployment.",
      es: "Separa el dominio de la infraestructura, proveyendo una WebApp MVC escalable y una API RESTful segura lista para contenedores Docker."
    },
    role: { en: "Backend Architecture, Domain Modeling, Auth", es: "Arquitectura Backend, Modelado de Dominio, Autenticación" },
    tags: ["Real Estate", ".NET 9", "Clean Architecture", "C#"],
    stack: [".NET 9", "EF Core", "SQL Server", "Docker"],
    accent: "violet",
    image: { src: "/images/projects/realestate.jpg", alt: { en: "Real Estate App dashboard mockup", es: "Mockup de Real Estate App" } },
    github: "https://github.com/Johanvasquezdev/RealStateApp",
    demo: "https://realestateapp-bh1u.onrender.com/"
  }
];

export const labProjects: Project[] = [
  {
    name: "ETLVentas-Warehouse",
    type: { en: "Data Engineering / Data Warehouse", es: "Ingeniería de Datos / Data Warehouse" },
    description: {
      en: "An ETL pipeline and data warehouse architecture for sales data.",
      es: "Un pipeline ETL y arquitectura de data warehouse para datos de ventas."
    },
    tags: ["Data Engineering", "SQL Server", "ETL"],
    image: {
      src: "/images/etlventas.jpg",
      alt: { en: "ETLVentas preview", es: "Vista previa ETLVentas" }
    },
    accent: "magenta",
    github: "https://github.com/Johanvasquezdev/ETLVentas-Warehouse"
  },
  {
    name: "HoshiDex",
    type: { en: "Web App / Directory", es: "Web App / Directorio" },
    description: {
      en: "A digital pokedex or directory application showcasing modern frontend data fetching and UI organization.",
      es: "Una pokedex digital o aplicación de directorio que muestra la obtención moderna de datos en frontend y organización de UI."
    },
    tags: ["Frontend", "API", "UI/UX"],
    image: {
      src: "/images/hoshidex.jpg",
      alt: { en: "HoshiDex preview", es: "Vista previa HoshiDex" }
    },
    accent: "cyan",
    github: "https://github.com/Johanvasquezdev/HoshiDex"
  },
  {
    name: "RustyVault",
    type: { en: "Security / Vault System", es: "Seguridad / Sistema de boveda" },
    description: {
      en: "A security-first vault concept focused on secure storage, encryption principles, access control, and data protection.",
      es: "Un concepto de boveda con enfoque security-first para almacenamiento seguro, principios de cifrado, control de acceso y proteccion de datos."
    },
    tags: ["Security", "Encryption", "Access"],
    accent: "magenta"
  },
  {
    name: "AnalyzSales",
    type: { en: "Sales Analytics / Data Platform", es: "Analitica de ventas / Plataforma de datos" },
    description: {
      en: "A sales analytics concept focused on dashboards, KPIs, ETL pipelines, business intelligence, and data-driven insights.",
      es: "Un concepto de analitica de ventas enfocado en dashboards, KPIs, pipelines ETL, inteligencia de negocio e insights basados en datos."
    },
    tags: ["ETL", "BI", "KPIs"],
    accent: "cyan"
  },
  {
    name: "Velora Capital",
    type: { en: "FinTech / Finance Dashboard", es: "FinTech / Dashboard financiero" },
    description: {
      en: "A finance and capital dashboard concept focused on financial metrics, portfolio-style UI, analytics, and modern fintech design.",
      es: "Un concepto de dashboard financiero y de capital enfocado en metricas, UI tipo portafolio, analitica y diseno fintech moderno."
    },
    tags: ["FinTech", "Analytics", "Metrics"],
    accent: "violet"
  }
];
