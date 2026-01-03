// Import statements remain the same
"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../../utils/motion";
import { ReactNode } from "react";

interface TypingTextProps {
  title: string;
  textStyles?: string;
}

interface TitleTextProps {
  title: string | ReactNode;
  textStyles?: string;
}

/**
 * Renders a paragraph where each letter of the `title` prop is animated to mimic typing.
 * The component uses `framer-motion` to animate each letter individually.
 *
 * @param {TypingTextProps} props - Component properties.
 * @param {string} props.title - The text content to display and animate.
 * @param {string} [props.textStyles] - Optional custom CSS classes to style the paragraph element.
 * @returns {React.ReactElement} A paragraph with individually animated letters.
 */
export const TypingText: React.FC<TypingTextProps> = ({
  title,
  textStyles,
}) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

/**
 * Renders a large, animated title using `framer-motion` to visually emphasize the text.
 * This component is particularly useful for headings or sections where prominence is required.
 *
 * @param {TitleTextProps} props - Component properties.
 * @param {string | ReactNode} props.title - The content of the title, which can be a string or any ReactNode for custom content.
 * @param {string} [props.textStyles] - Optional custom CSS classes to apply additional styling to the title.
 * @returns {React.ReactElement} An animated heading element.
 */
export const TitleText: React.FC<TitleTextProps> = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
