"use client";

// Framer motion imports
import { motion } from "framer-motion";

// Constants imports
import { startingFeatures } from "../../constants";

// Utils imports
import { staggerContainer, fadeIn, planetVariants } from "../../utils/motion";

// Components imports
import { TitleText, TypingText } from "@/components/custom/CustomTexts";
import StartSteps from "@/components/home/StartSteps";

const GetStarted = () => (
  <section className={`paddings relative z-10`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`inner-width mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 flex-center`}
      >
        <img
          src="/other/toolbox.webp"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Cómo funciona" />
        <TitleText
          title={
            <>
              ¿Estás listo para dar el siguiente paso en tu carrera tecnológica?
            </>
          }
        />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
