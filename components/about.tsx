"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem]  text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="sobre"
    >
      <SectionHeading>Sobre Mim</SectionHeading>
      <p className="mb-3">
        Olá! Me chamo <span className="font-medium">Anthony Thomas</span>, e sou
        um <span className="font-medium">Desenvolvedor Web Full-Stack</span>{" "}
        experiente com mais de um ano de experiência no mercado de trabalho.
        Comecei minha carreira como{" "}
        <span className="italic">Desenvolvedor júnior</span> em uma startup de
        tecnologia, onde tive a oportunidade de trabalhar em projetos
        desafiadores e aprender com profissionais experientes. {<br />}
        {<br />}
       Em 2023, conquistei <span className="font-medium">
          quatro prêmios{" "}
        </span>{" "}
        por dois projetos que tive a honra de participar. Os projetos foram um
        sucesso por sua relevância e impacto positivo na vida de pessoas com
        cabelos afro.{<br />}
        Sou um desenvolvedor qualificado e com um grande potencial. Tenho um
        conhecimento sólido de muitas tecnologias e frameworks, incluindo{" "}
        <span className="font-medium">
          React, TypeScript, Node, Express, JWT, MySQL, MongoDB, Java, Spring
          Boot e AWS.
        </span>{" "}</p>
       
      
    </motion.section>
  );
}
