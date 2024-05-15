"use client";
// Framer motion imports
import { motion } from "framer-motion";

// Constants imports
import { socials } from "@/constants";

// Utils imports
import { footerVariants } from "@/utils/motion";

// NextJS imports
import Link from "next/link";

// Clerk imports
import { SignedOut } from "@clerk/nextjs";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`x-paddings py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`inner-width mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Global Developer Clubs
        </h4>
        <SignedOut>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
          >
            <img
              src="/core/gdc_sm_logo.webp"
              alt="global_developers_club_small_logo"
              className="w-[30px] h-[30px] object-contain"
            />
            <Link
              href="/sign-in"
              className="font-normal text-[16px] text-white"
            >
              Únete al GDC
            </Link>
          </button>
        </SignedOut>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">GDC</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2024 Global Developer Clubs.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <Link key={social.name} href={social.url} target="_blank">
                <img
                  src={social.image}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
