"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "@/components/CustomTexts";

const About = () => (
  <section className={`paddings relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`innerWidth mx-auto flexCenter flex-col`}
    >
      <TypingText title="| Sobre el GDC" textStyles="text-center" />
      <TitleText title={<>¿Qué son los GDC?</>} textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        los{" "}
        <span className="font-extrabold text-white">
          Global Developer Clubs
        </span>{" "}
        son una iniciativa que busca unir a todas las universidades (por ahora
        en Latinoamérica y para países hispanohablantes) bajo una modalidad de
        clubes universitarios para trabajar como uno solo. Nuestro objetivo es{" "}
        <span className="font-extrabold text-white">
          cultivar habilidades del mundo real
        </span>
        , cerrar la brecha entre la industria y la academia, y brindar un
        espacio donde los estudiantes se conecten, sean guiados por mentores
        experimentados y{" "}
        <span className="font-extrabold text-white">
          desarrollen sus ideas en un entorno laboral real
        </span>
        . Ya sea que quieras conseguir un empleo o convertir tu proyecto en la
        próxima gran startup, los GDC te{" "}
        <span className="font-extrabold text-white">
          prepararán para el éxito
        </span>
        .
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
