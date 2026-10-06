"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: React.ReactNode;
  subtitle: string;
  className?: string;
}

/*
 * The shared page hero. One band for every subpage, so it stays restrained: the
 * heading does the work and a hairline closes the band. The diagonal wash that
 * used to sit here was pure geometry with no content behind it.
 */
const PageHero = ({ title, subtitle, className }: PageHeroProps) => (
  <section
    className={cn(
      "pt-28 md:pt-32 pb-14 md:pb-16 px-6 bg-brand-sand/60 border-b border-brand-blue/10",
      className
    )}
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-7xl mx-auto"
    >
      <h1 className="max-w-5xl text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-gray-900 mb-6 leading-[1.05] text-pretty">
        {title}
      </h1>
      <p className="text-gray-600 text-lg md:text-xl max-w-[58ch] leading-relaxed text-pretty">
        {subtitle}
      </p>
    </motion.div>
  </section>
);

export default PageHero;
