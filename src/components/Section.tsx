import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

/*
 * Sections are static. Reveal motion is reserved for the hero's page-load
 * sequence: one authored moment rather than the same fade-up on every section,
 * which is the tell the craft floor bans.
 */
export default function Section({
  children,
  className,
  id,
  containerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-14 md:py-20", className)}>
      <div className={cn("max-w-7xl mx-auto px-6", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
