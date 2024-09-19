import project from "../assets/projects/project.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";

export const HERO_CONTENT = `Decidi me tornar um desenvolvedor Back-End após cursar Desenvolvimento de Sistemas, procuro me aprimorar e me desenvolver na área, Tenho experiência com controle de versão utilizando Git e no desenvolvimento web, com forte atuação em bibliotecas e frameworks JavaScript, como Express, Dotenv, JWT, entre outros. Busco continuamente me aprimorar, tanto tecnicamente quanto profissionalmente.`;

export const ABOUT_TEXT = `Tive muito interesse por desenvolvimento Back-End desde o início dos meus estudos e busco me tornar um profissional competente e responsável, construindo assim uma carreira próspera na área, buscando sempre aprender novas habilidades e aplicar as melhores práticas. Meu objetivo é contribuir com soluções eficientes, agregando valor às empresas e projetos que trabalho.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Desenvolvedor de API",
    company: "Technic Connect",
    description: `Fui responsável pelo procedimento e desenvolvimento de uma APIResful, usando mongoDB e Firebase como banco de dados, para o website Technic Connect.`,
    technologies: ["Javascript", "Nodemailer", "ExpressJS", "mongoDB", "Firebase"],
  }
];

export const PROJECTS = [
  {
    title: "Website de Portfólio",
    image: project,
    description:
      "Um site de portfólio pessoal exibindo projetos, habilidades e informações de contato.",
    technologies: ["React", "TailwindCSS", "NodeJS"],
  },
  {
    title: "Java OS",
    image: project2,
    description:
      "Software pensado para gestores ou administradores que buscam controle e gestão de ordem de serviços ou orçamentos.",
    technologies: ["Java", "MySQL", "rs2xml", "itextpdf"],
  },
  {
    title: "API NodeJS",
    image: project3,
    description:
      "Uma API REST, feita com o nodejs, usando as bibliotecas express e sequelize, com upload para firebase",
    technologies: ["JavaScript", "MySQL", "Express", "Sequelize", "FireBase"],
  }
];

export const CONTACT = {
  phoneNo: "(11) 98385-4199 ",
  email: "clonederobson@gmail.com",
};
