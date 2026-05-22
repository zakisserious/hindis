"use client";

import React from "react";
import Image from "next/image";
import Section from "@/components/Section";
import { motion } from "framer-motion";

export default function TeamClient() {
  return (
    <div className="bg-brand-sand/10 min-h-screen">
      
      {/* --- HERO --- */}
      <section className="pt-40 pb-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-gray-900 mb-8">
            Meet the <span className="text-brand-teal">Team</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed text-pretty">
            Hindis members bring diverse expertise and experiences crucial for guiding the organization strategically, ensuring effective governance, managing resources, and providing leadership.
          </p>
        </motion.div>
      </section>

      {/* --- FOUNDER SECTION --- */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-brand-sand/30"
          >
            <Image 
              src="/images/team_saida.jpg" 
              alt="Saida Hassan" 
              fill 
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-brand-teal text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              Founder & CEO
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Saida Hassan</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-pretty">
              <p>
                Saida is a committed professional in the Education field. She is currently pursuing her M.A. at Harvard Graduate School of Education, focusing on Policy and Analysis. 
              </p>
              <p>
                Over the past five years, she has dedicated her efforts to education in Somalia, holding various positions within the Federal Ministry of Education, Culture, and Higher Education. 
              </p>
              <p>
                As the Founder of Hindis, she is actively working to address the challenges within Somalia&apos;s education system by introducing innovative teaching and learning methods.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* --- VISION STATEMENT --- */}
      <Section className="bg-brand-sand/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-4xl font-display font-medium text-gray-800 italic leading-relaxed"
          >
            &quot;Our collective contributions are vital for the organization&apos;s success and impact. Together, we are building a foundation that will empower generations to come.&quot;
          </motion.blockquote>
          <div className="mt-10 w-20 h-1 bg-brand-teal mx-auto rounded-full" />
        </div>
      </Section>

    </div>
  );
}
