"use client";

// Framer motion imports
import { motion } from "framer-motion";

// Utils imports
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

// Components imports
import { TitleText, TypingText } from "@/components/custom/CustomTexts";

// NextJS imports
import dynamic from "next/dynamic";

// Components imports
const CustomAboutBentoGrid = dynamic(
  () => import("@/components/custom/CustomAboutBentoGrid"),
  {
    ssr: false,
  }
);

const About = () => (
  <section className={`paddings relative z-10 dark`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`inner-width mx-auto flex-center flex-col`}
    >
      <TypingText title="| Sobre el GDC" textStyles="text-center" />
      <TitleText title={<>¿Qué son los GDC?</>} textStyles="text-center" />

      <motion.img
        variants={fadeIn("left", "tween", 0.3, 1)}
        src="/svg/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full mt-14"
      >
        <CustomAboutBentoGrid />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
