"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./design/canvas-reveal-effect";
import { fadeIn } from "../utils/motion";

const CanvasRevealCard = ({
  title,
  description,
  cardBorderBackground,
  index,
  children,
}: {
  title: string;
  description?: string;
  cardBorderBackground: string;
  index: number;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 0.75)}
      className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] overflow-hidden h-[20rem] w-[20rem] z-50"
      style={{
        backgroundImage: `url(${cardBorderBackground})`,
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group/canvas-card flex items-center justify-center w-full mx-auto p-4 h-full relative overflow-hidden"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0 overflow-hidden rounded-tl-[25px] rounded-tr-[20px] rounded-b-[25px]"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-20">
          <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex flex-col items-center justify-center">
            <h1 className="font-semibold sm:text-[26px] text-[18px] text-white">
              {title}
            </h1>
            <h2 className="mt-[8px] font-normal sm:text-[16px] text-[20px] text-center text-secondary-white">
              Toca para ver más
            </h2>
          </div>
          <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {title}
          </h2>
          <p className="dark:text-white text-lg opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CanvasRevealCard;
