"use client";

// Framer motion
import { staggerContainer, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

// Clerk
import { useSession } from "@clerk/nextjs";

export default function UserDashboard() {
  const { isLoaded: isUserSessionLoaded, session } = useSession();

  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      animate="show"
      transition={{
        delay: 0,
      }}
      viewport={{ once: false, amount: 0.25 }}
      className={`w-[calc(100%-300px)] flex items-start justify-center h-full mt-14 z-10`}
    >
      <motion.p
        variants={textVariant(1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white flex flex-col animate-pulse"
      >
        <span className="font-extrabold">
          Bienvenido de vuelta,{" "}
          {isUserSessionLoaded && session?.publicUserData.firstName}
        </span>
        <span>
          En estos momentos estamos trabajando para brindarte la mejor
          experiencia, tu interfaz personal está en camino!
        </span>
      </motion.p>
    </motion.div>
  );
}
