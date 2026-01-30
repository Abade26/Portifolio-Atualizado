import React, { createContext, useContext, useState, useCallback } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navigation
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    // Hero
    "hero.greeting": "Olá, eu sou",
    "hero.title": "Desenvolvedor .NET",
    "hero.tagline": "Transformando ideias em soluções escaláveis e eficientes",
    "hero.downloadCV": "Baixar CV",
    "hero.contact": "Entrar em Contato",

    // About
    "about.title": "Sobre Mim",
     "about.description": "Sou Desenvolvedor .NET com experiência no desenvolvimento e evolução de sistemas, atuando principalmente no back-end. Trabalho com .NET Core, criação de serviços em background (Worker Services) e Entity Framework Core para acesso e manipulação de dados. Tenho foco em código limpo, boas práticas de arquitetura e soluções que automatizam processos e aumentam a eficiência dos sistemas.",

    // Skills
    "skills.title": "Habilidades Técnicas",
    "skills.backend": "Back-end",
    "skills.database": "Banco de Dados",
    "skills.other": "Outras Habilidades",
    "skills.pratices": "Práticas de desenvolvimento", 

    // Experience
    "experience.title": "Experiência Profissional",
    "experience.role": "Desenvolvedor .NET",
    "experience.company": "Ministério Público",
    "experience.period": "02/2024 - 12/2025",
    "experience.description": "Atuação no desenvolvimento e evolução de sistemas institucionais.",
    "experience.activity1": "Desenvolvimento e manutenção de sistemas internos",
    "experience.activity2": "Implementação de novas funcionalidades baseadas em regras de negócio",
    "experience.activity3": "Correções de bugs e melhoria de performance",
    "experience.activity4": "Criação de serviços automatizados",
    "experience.activity5": "Participação no projeto de desativação automática de estagiários e voluntários",

    // Projects
    "projects.title": "Projetos",
    "projects.project1.title": "Serviço de Desativação Automática",
    "projects.project1.description": "Sistema automatizado responsável por desativar registros de estagiários e voluntários com base em regras administrativas, reduzindo trabalho manual e falhas operacionais.",
    "projects.project2.title": "Manutenção e Evolução de Sistemas Institucionais",
    "projects.project2.description": "Atuação contínua na melhoria de sistemas internos, implementando novas funcionalidades, correções e otimizações.",
    "projects.tags.automation": "Automação",
    "projects.tags.backgroundService": "Serviço em Background",
    "projects.tags.dotnet": ".NET",
    "projects.tags.sqlServer": "SQL Server",
    "projects.tags.maintenance": "Manutenção",
    "projects.tags.optimization": "Otimização",

    // Contact
    "contact.title": "Entre em Contato",
    "contact.subtitle": "Vamos conversar sobre seu próximo projeto",
    "contact.email": "E-mail",
    "contact.linkedin": "LinkedIn",
    "contact.whatsapp": "WhatsApp",

    // Footer
    "footer.rights": "Todos os direitos reservados",
    "footer.builtWith": "Desenvolvido com",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hello, I'm",
    "hero.title": ".NET Developer",
    "hero.tagline": "Transforming ideas into scalable and efficient solutions",
    "hero.downloadCV": "Download CV",
    "hero.contact": "Get in Touch",

    // About
    "about.title": "About Me",
    "about.description": "I am a .NET Developer with experience in the development and evolution of systems, working primarily on the back end. I work with .NET Core, building background services (Worker Services), and using Entity Framework Core for data access and manipulation. I focus on clean code, good architectural practices, and solutions that automate processes and improve system efficiency.",

    // Skills
    "skills.title": "Technical Skills",
    "skills.backend": "Back-end",
    "skills.database": "Database",
    "skills.other": "Other Skills",
    "skills.pratices": "Dev Practices", 

    // Experience
    "experience.title": "Professional Experience",
    "experience.role": ".NET Developer",
    "experience.company": "Public Prosecutor's Office",
    "experience.period": "Current",
    "experience.description": "Working on the development and evolution of institutional systems.",
    "experience.activity1": "Development and maintenance of internal systems",
    "experience.activity2": "Implementation of new features based on business rules",
    "experience.activity3": "Bug fixes and performance improvements",
    "experience.activity4": "Creation of automated services",
    "experience.activity5": "Participation in the automatic deactivation project for interns and volunteers",

    // Projects
    "projects.title": "Projects",
    "projects.project1.title": "Automatic Deactivation Service",
    "projects.project1.description": "Automated system responsible for deactivating intern and volunteer records based on administrative rules, reducing manual work and operational failures.",
    "projects.project2.title": "Maintenance and Evolution of Institutional Systems",
    "projects.project2.description": "Continuous work on improving internal systems, implementing new features, fixes and optimizations.",
    "projects.tags.automation": "Automation",
    "projects.tags.backgroundService": "Background Service",
    "projects.tags.dotnet": ".NET",
    "projects.tags.sqlServer": "SQL Server",
    "projects.tags.maintenance": "Maintenance",
    "projects.tags.optimization": "Optimization",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Let's talk about your next project",
    "contact.email": "E-mail",
    "contact.linkedin": "LinkedIn",
    "contact.whatsapp": "WhatsApp",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.builtWith": "Built with",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language][key] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
