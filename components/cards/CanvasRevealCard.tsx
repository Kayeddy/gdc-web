"use client";

// React imports
import React, { useState } from "react";

// Framer motion imports
import { AnimatePresence, motion } from "framer-motion";

// Utils imports
import { fadeIn } from "@/utils/motion";

interface CanvasRevealCardProps {
  title: string;
  description?: string;
  cardBorderBackground: string;
  index: number;
  children?: React.ReactNode;
}

/**
 * A card component that reveals more content on hover. This component uses animations
 * from framer-motion to handle the reveal and employs a visually distinct border
 * background that can be customized per card.
 *
 * @param {CanvasRevealCardProps} props - The props for the card component.
 * @returns {React.ReactElement} The CanvasRevealCard component.
 */
const CanvasRevealCard: React.FC<CanvasRevealCardProps> = ({
  title,
  description,
  cardBorderBackground,
  index,
  children,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 0.75)}
      className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] overflow-hidden h-[20rem] w-[20rem] z-50"
      style={{ backgroundImage: `url(${cardBorderBackground})` }}
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
          <div className="text-center transition duration-200 w-full mx-auto flex flex-col items-center justify-center group-hover/opacity-0 group-hover/translate-y-4">
            <h1 className="font-semibold text-white text-[18px] sm:text-[26px]">
              {title}
            </h1>
            <p className="mt-[8px] font-normal text-secondary-white text-[20px] sm:text-[16px] text-center">
              Toca para ver más
            </p>
          </div>
          {description && (
            <p className="text-lg dark:text-white text-black mt-4 font-bold opacity-0 group-hover/opacity-100 group-hover/text-white group-hover/translate-y-2 transition duration-200">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CanvasRevealCard;
