"use client"; // => Client side rendered layout

// Framer motion imports
import { staggerContainer } from "@/utils/motion";

// Framer motion imports
import { motion } from "framer-motion";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      animate="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`innerWidth mx-auto flex flex-col yPaddings paddings sm:pl-16 pl-6 absolute z-50 justify-center items-center h-screen w-screen bg-primary-black overflow-hidden`}
    >
      <div className="z-0 gradient-03" />
      <div className="z-10">{children}</div>
      <div className="z-0 gradient-04" />
    </motion.div>
  );
}
