"use client";

// Framer motion imports
import { motion } from "framer-motion";

// Constants imports
import { alliedPlatforms, features } from "../../constants";

// Utils imports
import { planetVariants, staggerContainer, fadeIn } from "../../utils/motion";

// Components imports
import { TitleText, TypingText } from "@/components/custom/CustomTexts";
import Features from "@/components/home/Features";

// NextJS imports
import Link from "next/link";

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
        className={`flex-1 flex-center`}
      >
        <div className="flex w-full h-[300px] lg:w-[60%] lg:h-[60%] items-center justify-center relative">
          <img
            src="/core/gdc_sm_logo.webp"
            alt=""
            className="object-cover w-24 h-24 absolute animate-pulse"
          />

          {alliedPlatforms.map((ally) => (
            <Link
              key={ally.title}
              href={ally.platformRedirectionLink}
              target="_blank"
              className={ally.optionalContainerStyles}
            >
              <img
                src={ally.icon}
                alt={ally.title + "_logo_redirect"}
                className="bg-[#fff]/40 border border-[#fff]/15 rounded-xl w-14 h-14 object-contain p-1"
              />
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
