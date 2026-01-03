"use client";

// Utils imports
import { cn } from "@/utils/cn";

// React imports
import React from "react";
import ReactPlayer from "react-player";

// Components imports
import { BentoGrid, BentoGridItem } from "../design/bento-grid";

// Icons imports
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

// Framer motion imports
import { motion } from "framer-motion";

// NextJS imports
import Image from "next/image";

/**
 * Renders a video player using the ReactPlayer library. The player is set to cover its
 * container fully, autoplay, loop, and is muted by default.
 *
 * @param {object} props - Component props.
 * @param {string} props.url - The URL of the video to play.
 * @returns {React.ReactElement} A div wrapping the ReactPlayer component.
 */

const VideoPlayer = ({ url }: { url: string }) => {
  return (
    <div className="h-full w-full">
      <ReactPlayer
        url={url}
        className="object-cover w-full h-full"
        width="100%"
        height="100%"
        controls={false}
        muted={true}
        playing={true}
        loop={true}
      />
    </div>
  );
};

/**
 * Displays a grid (BentoGrid) of items where each grid item (BentoGridItem) can show an icon,
 * title, description, and custom header content. This component is used to present various
 * information blocks creatively.
 *
 * @returns {React.ReactElement} A BentoGrid component populated with BentoGridItems.
 */
export default function CustomAboutBentoGrid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[400px]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

/**
 * Displays a dynamic placeholder with animated elements to represent loading state for
 * content that includes user avatars and text. This component utilizes motion divs
 * to create movement effects.
 *
 * @returns {React.ReactElement} A div with animated elements representing user content.
 */
const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};

/**
 * Similar to SkeletonOne, this component creates a series of animated bars to simulate
 * the loading of textual content, using width animations to enhance the effect.
 *
 * @returns {React.ReactElement} A flex container with multiple motion divs representing
 * text content placeholders.
 */
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      suppressHydrationWarning
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};

/**
 * Uses a gradient background animation to create a visually engaging loading placeholder.
 * The animation simulates a dynamic color shift across the component.
 *
 * @returns {React.ReactElement} A div with a gradient animation indicating loading.
 */
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg relative flex items-center justify-center">
        <img
          src="/core/gdc_lg_logo.png"
          alt=""
          className="object-cover inset-x-0 mx-auto top-0 w-44 h-44"
        />
      </motion.div>
    </motion.div>
  );
};

/**
 * Displays a row of three placeholder blocks that animate on hover. Each block represents
 * potential user profiles or testimonials, mimicking the entry of such content into the viewport.
 *
 * @returns {React.ReactElement} A row of animated placeholder blocks.
 */
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/team/edwardbowie.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          "¡Innovar es creer, crear, crecer!"
        </p>
        <p className="border border-[#CC50B8] bg-red-100 dark:bg-red-900/20 text-[#CC50B8] text-xs rounded-full px-2 py-0.5 mt-4">
          Inspirador
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/team/juanjosearanzales.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          "Tu potencial es ilimitado, ¡explota cada bit de él!"
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Motivador
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/team/joancifuentes.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          "Transforma tu curiosidad en tu carrera."
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Transformador
        </p>
      </motion.div>
    </motion.div>
  );
};

/**
 * Wraps the VideoPlayer component in a skeleton placeholder, allowing for dynamic loading
 * visual feedback while video content is being loaded.
 *
 * @returns {React.ReactElement} A placeholder that includes a video player.
 */
const SkeletonFive = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-fit md:min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <VideoPlayer url="https://pub-6968c60899e34bf18babaee3b22c56f3.r2.dev/launch_video.mp4" />
    </motion.div>
  );
};

const items = [
  {
    title: "Nuestra Misión",
    description: (
      <span className="text-sm">
        Impulsar la conexión entre academia e industria, preparando a
        estudiantes para desafíos profesionales a través de clubes
        universitarios unificados.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Nuestra Historia",
    description: (
      <span className="text-sm">
        Iniciada en 2024, nuestra red ha crecido para incluir universidades en
        toda Latinoamérica, fomentando un ecosistema de aprendizaje colaborativo
        y desarrollo profesional.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Nuestros Valores",
    description: (
      <span className="text-sm">
        Compromiso con la excelencia, innovación en educación, y un fuerte
        enfoque en el desarrollo de habilidades prácticas y liderazgo
        estudiantil.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Únete a Nosotros",
    description: (
      <span className="text-sm">
        Forma parte de una comunidad llena de futuros líderes y innovadores.
        Explora cómo puedes contribuir y beneficiarte de nuestras iniciativas.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "",
    description: "",
    header: <SkeletonFive />,
    className: "",
    icon: "",
  },
];
