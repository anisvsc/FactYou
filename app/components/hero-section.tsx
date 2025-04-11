"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <motion.div className="mx-auto text-center" variants={containerVariants} initial="hidden" animate="visible">
        {/* App Name */}
        <motion.h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight" variants={itemVariants}>
          FactYou
        </motion.h1>

        {/* Tagline */}
        <motion.h2 className="mt-2 text-2xl md:text-4xl text-blue-400 font-medium opacity-90" variants={itemVariants}>
          Truth in Seconds
        </motion.h2>

        {/* Description */}
        <motion.p className="mt-4 max-w-2xl mx-auto text-xs lg:text-base text-foreground/60 opacity-80 leading-relaxed" variants={itemVariants}>
          Instantly verify news and social media posts with AI-powered analysis. Get clear, reliable results in real time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="mt-10 flex justify-center gap-4" variants={itemVariants}>
          <Button asChild>
            <Link href="/analyze">Analyze Now</Link>
          </Button>
          <Button asChild variant={"outline"}>
            <Link href="/learn-more">Learn More</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
