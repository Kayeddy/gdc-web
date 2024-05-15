"use client";

// Framer motion imports
import { motion } from "framer-motion";

// Utils imports
import { slideIn, staggerContainer, textVariant } from "../../utils/motion";

const Hero = () => (
  <section className={`paddings lg:h-screen z-0`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      animate="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`inner-width mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={`hero-heading`}>
          GLOBAL
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center relative px-4"
        >
          {/* <div className={`hero-d-text`} /> */}

          <h1 className={`hero-heading`}>DEVELOPERS</h1>
        </motion.div>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={`hero-heading`}>CLUB</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full mt-14"
      >
        <motion.p
          variants={textVariant(1.2)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white flex flex-col"
        >
          <span className="font-extrabold text-white">
            Porque aquellos que quieren cambiar al mundo, son los que lo hacen
          </span>
          <span>
            Desarrolla habilidades del mundo real, conéctate con compañeros de
            tu universidad, con mentores de la industria y haz que esa idea que
            tienes en la cabeza despegue!
          </span>
        </motion.p>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
