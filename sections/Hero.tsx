"use client";

import { motion } from "framer-motion";

import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
} from "../utils/motion";

const Hero = () => (
  <section className={`yPaddings paddings sm:pl-16 pl-6 lg:min-h-screen`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      animate="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`innerWidth mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className={`font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white`}
        >
          GLOBAL
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center relative"
        >
          <div
            className={`md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px] relative`}
          />

          <h1
            className={`font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white`}
          >
            EVELOPER
          </h1>
        </motion.div>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1
            className={`font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white`}
          >
            CLUBS
          </h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full mt-14"
      >
        {/* <div className="absolute w-[90%] h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src="/cover.png"
          alt="hero_cover"
          className="w-[90%] sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/isologo.webp"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a> */}

        <motion.p
          variants={textVariant(1.2)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white flex flex-col"
        >
          <span className="font-extrabold text-white">
            Porque aquellos que quieren cambiar al mundo, son los que lo hacen
          </span>
          <span>
            Desarrolla habilidades del mundo real, conéctate con compañeros de
            tu Universidad, con mentores de la industria y haz que tu esa idea
            que tienes en la cabeza despegue
          </span>
        </motion.p>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
