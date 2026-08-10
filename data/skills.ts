import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: { en: "Product interface systems", es: "Sistemas de interfaz" },
    description: {
      en: "Responsive, accessible interfaces with component structure, animation restraint, and polished interaction states.",
      es: "Interfaces responsive y accesibles con componentes claros, animacion medida y estados de interaccion pulidos."
    },
    focus: "01",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "shadcn/ui", "Responsive UX"]
  },
  {
    title: { en: "Backend and API architecture", es: "Backend y arquitectura API" },
    description: {
      en: "Service boundaries, validation, authentication, authorization, and maintainable business logic for product workflows.",
      es: "Limites de servicio, validacion, autenticacion, autorizacion y logica de negocio mantenible para flujos de producto."
    },
    focus: "02",
    items: ["Node.js", "Express", ".NET 9", "Spring Boot", "REST APIs", "System Design", "Clean Architecture", "Modular backend"]
  },
  {
    title: { en: "Data, AI, and automation", es: "Datos, IA y automatizacion" },
    description: {
      en: "Data models, AI-assisted workflows, RAG patterns, vector search, dashboards, and automation pipelines.",
      es: "Modelos de datos, flujos asistidos por IA, patrones RAG, busqueda vectorial, dashboards y automatizaciones."
    },
    focus: "03",
    items: ["PostgreSQL", "SQL Server", "MySQL", "Firebase", "Supabase", "EF Core", "Sequelize", "OpenAI APIs", "LLMs", "RAG", "ETL basics"]
  },
  {
    title: { en: "Delivery, quality, and infrastructure", es: "Entrega, calidad e infraestructura" },
    description: {
      en: "Cloud deployment, CI/CD habits, networking foundations, and product-minded release discipline.",
      es: "Despliegue cloud, habitos CI/CD, bases de redes y disciplina de lanzamiento orientada a producto."
    },
    focus: "04",
    items: ["Docker", "GitHub Actions", "CI/CD", "AWS", "Azure", "Linux", "Cisco CCNA", "Networking"]
  },
  {
    title: { en: "Engineering fundamentals", es: "Fundamentos de ingenieria" },
    description: {
      en: "Language range and architectural foundations used to reason about maintainable systems.",
      es: "Lenguajes y bases de arquitectura para razonar sobre sistemas mantenibles."
    },
    focus: "05",
    items: ["JavaScript", "TypeScript", "C#", "Java", "PHP", "SQL", "OOP", "Clean Architecture"]
  }
];
