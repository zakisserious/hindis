"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import { CheckCircle2, Target, Eye, ShieldCheck, Heart, Zap, Globe, MessageSquare, Lightbulb, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ValueItem = ({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) => (
  <motion.div
    className="flex gap-5 border-t border-brand-sand py-8"
  >
    <Icon size={22} className="mt-1 shrink-0 text-brand-red" />
    <div>
      <h4 className="mb-2 text-xl font-display font-bold text-gray-900">{title}</h4>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  </motion.div>
);

export default function AboutClient() {
  const coreValues = [
    { icon: Target, title: "Competence", description: "Developing skills and knowledge that enable children to excel academically and in life." },
    { icon: Zap, title: "Productivity", description: "Encouraging the ability to contribute effectively, fostering a strong work ethic." },
    { icon: Heart, title: "Compassion", description: "Emphasizing empathy and understanding, promoting a culture of kindness." },
    { icon: Lightbulb, title: "Innovation", description: "Embracing new and creative teaching methods and learning strategies." },
    { icon: Globe, title: "Adaptability", description: "Preparing students to thrive in a rapidly changing global environment." },
    { icon: ShieldCheck, title: "Cultural Awareness", description: "Incorporating local traditions while fostering global citizenship." },
    { icon: Eye, title: "Critical Thinking", description: "Cultivating analytical skills and independent thought from an early age." },
    { icon: MessageSquare, title: "Collaboration", description: "Promoting teamwork and constructive cooperation within the community." },
  ];

  const additionalValues = ["Respect", "Responsibility", "Integrity", "Compassion", "Courage",];

  return (
    <div className="bg-white min-h-screen">

      {/* --- HERO --- */}
      <PageHero
        title={<>How Hindis <span className="text-brand-blue">works</span></>}
        subtitle="Hindis trains teachers, supplies classroom books, and supports Somali-language learning in the earliest grades."
      />

      {/* --- OUR STORY --- */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/about_team.jpg"
              alt="Students working on laptops in a classroom"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-8 text-pretty">
              Enhancing early <span className="accent-underline">foundational learning</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-pretty">
              <p>
                We believe in proposing distinctive and innovative teaching and learning strategies that address students&apos; needs and local educational issues.
              </p>
              <p>
                In partnership with government and international organizations, we strive to provide extraordinary learning and critical thinking opportunities within education systems.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-3 text-brand-blue font-bold mb-2">
                  <CheckCircle2 size={24} />
                  <span>Government Aligned</span>
                </div>
                <div className="flex items-center gap-3 text-brand-blue font-bold">
                  <CheckCircle2 size={24} />
                  <span>Globally Connected</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* --- CORE VALUES GRID --- */}
      <Section containerClassName="max-w-6xl">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4 text-pretty">Our Core Values</h2>
          <p className="text-gray-500 max-w-[60ch]">
            These fundamental principles guide every strategy we develop and every partnership we form.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
          {coreValues.map((value) => (
            <ValueItem key={value.title} {...value} />
          ))}
        </div>
      </Section>

      {/* --- ADDITIONAL VALUES (Banner Style) --- */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-display font-bold text-brand-sand italic">And the values we live by every day...</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-12 md:gap-8">
            {additionalValues.map((val, idx) => (
              <motion.div
                key={idx}
                className={cn(
                  "text-center",
                  idx === 4 ? "col-span-2 md:col-span-1" : "col-span-1"
                )}
              >
                <div className="text-2xl md:text-3xl font-display font-extrabold text-white mb-2">{val}</div>
                <div className="w-8 h-1 bg-brand-red mx-auto rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION (Home Style) --- */}
      <section className="py-32 px-6">
        <motion.div
          className="max-w-5xl mx-auto bg-brand-blue rounded-2xl p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 text-pretty">
              Want to learn more about our impact?
            </h2>
            <p className="text-brand-sand/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Our projects span across borders, from the diaspora to major urban centers.
              Discover how we are making a difference today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/projects"
                className="bg-white text-brand-blue px-10 py-5 rounded-full font-extrabold text-lg hover:bg-brand-sand transition-all shadow-lg"
              >
                See Our Projects
              </Link>
              <Link
                href="/about"
                className="bg-transparent border-2 border-brand-sand/30 text-white px-10 py-5 rounded-full font-extrabold text-lg hover:bg-white/10 transition-all"
              >
                Our Mission
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
