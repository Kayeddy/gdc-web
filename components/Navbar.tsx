"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    animate="show" // Or while in view
    className={`${styles.xPaddings} py-4 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <div className="flex flex-row gap-2 items-center justify-center">
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          GDC
        </h2>
        <img
          src="/isologo.webp"
          alt="stamp"
          className="sm:w-[40px] w-[40px] sm:h-[40px] h-[40px] object-contain"
        />
      </div>
      {/* <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      /> */}
    </div>
  </motion.nav>
);

export default Navbar;
