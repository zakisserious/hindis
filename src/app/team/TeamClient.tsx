"use client";

import React from "react";
import Image from "next/image";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";

export default function TeamClient() {
  return (
    <div className="bg-white min-h-screen">

      {/* --- HERO --- */}
      <PageHero
        title={<>Meet the <span className="text-brand-blue">Team</span></>}
        subtitle="Hindis members bring diverse expertise and experiences crucial for guiding the organization strategically, ensuring effective governance, managing resources, and providing leadership."
      />

      {/* --- FOUNDER & CEO --- */}
      <Section className="bg-white pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-brand-sand/30"
          >
            <Image
              src="/images/team_saida.jpg"
              alt="Saida Hassan"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </motion.div>
          <motion.div
          >
            <div className="inline-block bg-brand-blue text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              Founder & CEO
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Saida Hassan</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-pretty">
              <p>
                Saida Hassan is an education and social development professional and the Founder and Executive Director of Hindis Global Education Enterprise. She has extensive experience strengthening education systems, developing curricula, advancing literacy initiatives, and supporting community-centered learning across the Horn of Africa, with a focus on equitable and culturally grounded education.
              </p>
              <p>
                Her work spans curriculum development, teacher support, Somali-language educational materials, and strategic partnerships with government institutions, development organizations, and local communities. She has contributed to initiatives in foundational literacy, girls’ education, youth empowerment, climate change education, and inclusive learning while helping expand access to quality education across the region.
              </p>
              <p>
                Through Hindis, Saida leads stakeholder engagement, curriculum reviews, training workshops, and collaborative education programs that promote sustainability, local ownership, and innovation. She is committed to preserving Somali language and culture while creating opportunities that empower children, youth, and communities and strengthen long-term educational outcomes.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* --- COO SECTION --- */}
      <Section className="bg-white pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-brand-sand/30 order-1 md:order-2"
          >
            <Image
              src="/images/lucky_team.jpg"
              alt="Lucky Omaar"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </motion.div>
          <motion.div
            className="order-2 md:order-1"
          >
            <div className="inline-block bg-brand-blue text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              COO
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Lucky Omaar</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-pretty">
              <p>
                Lucky Omaar is a humanitarian and development strategist with over a decade of experience designing and supporting programmes across the Horn of Africa. Her expertise includes gender equality, education, livelihoods, governance, institutional strengthening, participatory action research, and social transformation in fragile and conflict-affected settings.
              </p>
              <p>
                She has worked with governments, international organizations, civil society, and local communities to develop evidence-based programmes that strengthen resilience and expand opportunities for women and youth. Her experience spans programme design, strategic planning, research, monitoring and evaluation, stakeholder engagement, and partnership development. Lucky holds a Master’s degree with Distinction in Education, Gender and International Development from University College London Institute of Education, a Bachelor’s degree in Psychology and English from the University of Minnesota, and is a Fulbright Scholar.
              </p>
              <p>
                At Hindis, Lucky leads programme design and strategic planning while supporting research, partnerships, and technical advisory work across education, gender equality, governance, and social development initiatives. She is committed to locally led, evidence-informed approaches that strengthen institutions and create sustainable, community-driven change across the Horn of Africa.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* --- VISION STATEMENT --- */}
      <Section className="bg-brand-sand/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            className="text-2xl md:text-4xl font-display font-medium text-gray-800 italic leading-relaxed"
          >
            &quot;Our collective contributions are vital for the organization&apos;s success and impact. Together, we are building a foundation that will empower generations to come.&quot;
          </motion.blockquote>
          <div className="mt-10 w-20 h-1 bg-brand-blue mx-auto rounded-full" />
        </div>
      </Section>

    </div>
  );
}
