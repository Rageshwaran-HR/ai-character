"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileSlidebar } from "./mobile-slidebar";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16"
    >
      <div className="flex items-center">
        <MobileSlidebar />
        <Link href="/">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary text-green-600",
              font.className
            )}
          >
            AI-Character
          </motion.h1>
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center gap-x-3"
      >
        <Button variant="premium" size="sm">
          upgrade
          <Sparkles className="h-4 fill-white text-white ml-2" />
        </Button>
        <ModeToggle />
        <UserButton />
      </motion.div>
    </motion.div>
  );
};
