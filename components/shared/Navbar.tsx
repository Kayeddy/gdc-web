"use client";

// Framer otion imports
import { motion } from "framer-motion";

// Utiils imports
import { navVariants } from "@/utils/motion";

// Clerk imports
import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";

// Link imports
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show" // Or while in view
      className={`x-paddings py-4 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`inner-width mx-auto flex justify-between gap-8`}>
        <div className="flex flex-row gap-2 items-center justify-center">
          <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
            GDC
          </h2>
          <img
            src="/core/gdc_sm_logo.webp"
            alt="stamp"
            className="sm:w-[40px] w-[40px] sm:h-[40px] h-[40px] object-contain"
          />
        </div>
        <SignedIn>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
          >
            <Link
              href="/hub/dashboard"
              className="font-normal text-[16px] text-white"
            >
              Ingresar al portal
            </Link>
          </button>
        </SignedIn>
        <SignedOut>
          <SignUpButton>
            <button
              type="button"
              className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
            >
              <Link
                href="/sign-in"
                className="font-normal text-[16px] text-white"
              >
                Ingresar
              </Link>
            </button>
          </SignUpButton>
        </SignedOut>
      </div>
    </motion.nav>
  );
}
