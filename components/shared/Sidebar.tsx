"use client";

// Framer motion imports
import { motion } from "framer-motion";

// Utils imports
import { sidebarChildrenVariants, sidebarVariants } from "@/utils/motion";

// NextJS imports
import Link from "next/link";

// Clerk imports
import { SignOutButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";

export default function Sidebar() {
  return (
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      whileInView="show"
      className={`y-paddings x-paddings py-8 flex flex-row fixed left-0 border-white h-[70%] border-r-white border-r-[0.5px] border-opacity-50 w-[250px]`}
    >
      <div className="sidebar-gradient" />
      <motion.div
        variants={sidebarChildrenVariants}
        initial="hidden"
        animate="show"
        className={`inner-width flex flex-col items-start justify-start gap-2 w-full text-white`}
      >
        <SignedIn>
          <UserButton
            showName
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: 40,
                  height: 40,
                },
                userButtonBox: {
                  color: "#fff",
                },
              },
            }}
          />
        </SignedIn>
        <div className={`contentSeparator w-full`} />
        <Link href="/">
          <Button color="primary" variant="light" className="text-white">
            Volver al inicio
          </Button>
        </Link>
        {/* <Link href="">Inscripción</Link> */}
        <SignOutButton redirectUrl="/">
          <Button variant="flat" className="bg-danger/5 text-white">
            Cerrar sesión
          </Button>
        </SignOutButton>
      </motion.div>
    </motion.aside>
  );
}
