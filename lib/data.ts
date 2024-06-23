import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaJava, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import studioantropocenoImg from "@/public/studioantropoceno.png";
import djeliImg from "@/public/djeli.png";
import afroglowImg from "@/public/afroglow1.png";


export const links = [
  {
    name: "Início",
    hash: "#início",
  },
  {
    name: "Sobre",
    hash: "#sobre",
  },
  {
    name: "Projetos",
    hash: "#projetos",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experiência",
  },
  {
    name: "Contato",
    hash: "#contato",
  },
] as const;

export const experiencesData = [
  {
    title: "Bootcamp de Web Desenvolvimento",
    location: "Resilia Educação",
    description:
      "Me formei após 6 meses de estudo como desenvolvoder full-stack com solidos conhecimentos em HTML/CSS, JavaScript, React, Node.js, MySQL, MongoDB.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  {
    title: "Desenvolvedor Java Web",
    location: "Instituto PROA / Senac",
    description:
      "Curso Técnico: 6 meses de estudos como Desenvolvoder Full-Stack com sólidos conhecimentos em HTML/CSS, JavaScript, React, Java, MySQL, AWS. ",
    icon: React.createElement(FaJava),
    date: "2023 - 2023",
  },{
    title: "Estagiário",
    location: "Itaú Unibanco",
    description:
      "Estagio em engenharia de software.",
    icon: React.createElement(FaReact),
    date: "2024 - até o momento",
  },
] as const;

export const projectsData = [
  {
    title: "AfroGlow",
   
    description:
      "A AfroGlow é uma plataforma dedicada a promover a autoestima de crianças com cabelos cacheados, crespos e ondulados desde tenra idade, visando capacitá-las a enfrentar o preconceito e o racismo. 🏆O projeto foi premiado como o melhor entre 25 projetos participantes no curso do Instituto PROA, destacando-se pelo impacto positivo que tem na vida das crianças com cabelos afro. ",
    tags: ["React", "Bootstrap", "Java", "Spring Boot", "Spring Security", "PostgreSQL"],
    imageUrl: afroglowImg,
  },
  {
    title: "Djeli",
   
    description:
      "A Djeli é uma uma startup focada em elevar a autoestima de mulheres em transição capilar, visando apoia-las a enfrentar o preconceito e o racismo. 🏆O projeto foi desenvolvido durante a 11ª edição do Hackathon e foi premiado pela FIESP como o melhor entre 25 projetos das equipes participantes, destacando-se pela inovação e impacto positivo que tem na vida das mulheres com cabelos afro.",
    tags: ["React", "Node", "Express", "MongoDB", "Express", "AWS"],
    imageUrl: djeliImg,
  },

  {
    title: "Studio Antropoceno",
    description:
      "O Studio Antropoceno é uma empresa de arquitetura especializada em projetos de render, isométricas, diagramas, representação. Seus trabalhos são marcados por um design moderno e inovador, que valoriza as necessidades.",
    tags: ["React", "Next.js", "MongoDB", "Styled-Components"],
    imageUrl: studioantropocenoImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "MySQL",
  "Java",
  "Express",
  "PostgreSQL",
  "Spring Boot",
  "Spring Security",
  "UX/UI",
] as const;
