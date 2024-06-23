"use client";

import Image from "next/image";
import React from "react";
import { Row, Col } from 'react-bootstrap';
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./avatar/components/experience";
import styled from "styled-components";
import AnimatedText from "./animatedText";

const Sec1 = styled.div`
  width: 50%;
`;

const SecCanvas = styled.div`
  width: 50%;
 

`;

const canvasStyle = {
  borderRadius: "50%",
};

export default function Intro() {
  const { ref } = useSectionInView("Início", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="início"
      className="flex mb-28 max-w-[100rem] max-h-[100rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <Sec1>
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 1.0,
              }}
            >
              <Image
                src="./retrato.jpg"
                alt="retrato de Anthony Thomas"
                width="250"
                height="250"
                quality={100}
                priority={true}
                className="rounded-full w-123 object-cover shadow-2xl border-white"
              />
            </motion.div>
          </div>
        </div>

        <motion.h1
          className="mb-10 mt-4 px-4 text-3xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Row>
            <Col xs={12} md={6} xl={10}>
              <AnimatedText />
            </Col>
          </Row>
          <br />

          <span className="text-2xl">
            Desenvolvedor Full Stack Júnior apaixonado por interfaces interativas.
          </span>{" "}
          <span className="text-2xl">
            Os projetos incluem criação e consumo de APIs, Javascript, Node.js, React, consultas a bancos de dados e muito mais.
          </span>
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contato"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contato");
              setTimeOfLastClick(Date.now());
            }}
          >
            Me chame!{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/CV_Anthony_Thomas.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/anthonythomasmm/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover: flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/DevT0nis"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </Sec1>

      <SecCanvas >



        
        <Canvas
       shadows
       camera={{ position: [1, 1, 3], fov: 40 }}
       style={canvasStyle}
     
     >
          <Experience />
        </Canvas>
      </SecCanvas>
    </section>
  );
}
