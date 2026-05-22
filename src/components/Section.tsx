"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  animate?: boolean;
}

export default function Section({
  children,
  className,
  id,
  containerClassName,
  animate = true,
}: SectionProps) {
  const content = (
    <div className={cn("max-w-7xl mx-auto px-6", containerClassName)}>
      {children}
    </div>
  );

  if (!animate) {
    return (
      <section id={id} className={cn("py-20 md:py-32", className)}>
        {content}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("py-20 md:py-32", className)}
    >
      {content}
    </motion.section>
  );
}
