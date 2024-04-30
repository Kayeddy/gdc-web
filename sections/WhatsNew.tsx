"use client";

import { motion } from "framer-motion";

import { features } from "../constants";

import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "@/components/CustomTexts";
import Features from "@/components/Features";

const commonImgStyles =
  "bg-[#fff]/15 border border-[#fff]/15 rounded-xl w-14 h-14 object-contain p-1";

const WhatsNew = () => (
  <section className={`paddings relative z-10`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`w-inter-width mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Cómo impactamos?" />
        <TitleText
          title={<>¿Cómo te ayudamos a salir adelante en los GDC?</>}
        />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {features.map((feature) => (
            <Features key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 flexCenter flex items-center justify-center`}
      >
        <div className="flex w-full h-[300px] lg:w-[60%] lg:h-[60%] items-center justify-center relative">
          <img
            src="/isologo.webp"
            alt=""
            className="object-cover w-24 h-24 absolute animate-pulse"
          />

          <img
            src="/cambly_sm.png"
            alt=""
            className={`absolute top-0 left-1 ${commonImgStyles}`}
          />

          <img
            src="codecademy_community.webp"
            alt=""
            className={`absolute top-0 right-1 ${commonImgStyles}`}
          />

          <img
            src="globant_sm.png"
            alt=""
            className={`absolute bottom-0 right-1 ${commonImgStyles}`}
          />

          <img
            src="discord.png"
            alt=""
            className={`absolute bottom-0 left-1 ${commonImgStyles}`}
          />

          <img
            src="intelectolegalabogados.png"
            alt=""
            className={`absolute top-0 ${commonImgStyles}`}
          />
          <img
            src="medeo.png"
            alt=""
            className={`absolute bottom-0 ${commonImgStyles}`}
          />
          <img
            src="treetech.png"
            alt=""
            className={`absolute left-0 ${commonImgStyles}`}
          />
          <img
            src="google_cloud_sm.png"
            alt=""
            className={`absolute right-0 ${commonImgStyles}`}
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
