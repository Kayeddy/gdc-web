"use client";

// Framer motion imports
import { motion } from "framer-motion";

// Utils imports
import { fadeIn, staggerContainer } from "../../utils/motion";

// Components imports
import { TitleText, TypingText } from "@/components/custom/CustomTexts";

const World = () => (
  <section className={`paddings relative z-10`}>
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`innerWidth mx-auto flex flex-col`}
    >
      <TypingText
        title="| Unite a personas alrededor del mundo"
        textStyles="text-center"
      />
      <TitleText
        title={
          <>
            Conéctate con clubbers alrededor de Latinoamérica. Haz parte de una
            comunidad única en el planeta
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/other/map.webp"
          alt="map_icon"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img
            src="/other/people-01.webp"
            alt="people_icon_1"
            className="w-full h-full"
          />
          <img src="/svg/chile_flag.svg" alt="flag_of_chile_icon" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img
            src="/other/people-02.webp"
            alt="people_icon_2"
            className="w-full h-full"
          />
          <img src="/svg/mexico_flag.svg" alt="flag_of_mexico_icon" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img
            src="/other/people-03.webp"
            alt="people_icon_3"
            className="w-full h-full"
          />
          <img src="/svg/colombia_flag.svg" alt="flag_of_colombia_icon" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
