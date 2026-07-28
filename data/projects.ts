import type { Project } from "@/types";

export const featuredProjects: Project[] = [
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
