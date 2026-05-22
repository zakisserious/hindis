"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import { CheckCircle2, Target, Eye, ShieldCheck, Heart, Zap, Globe, MessageSquare, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const ValueCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-brand-sand/50 hover:border-brand-teal transition-colors"
  >
    <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6">
      <Icon size={24} />
    </div>
    <h4 className="text-xl font-display font-bold text-gray-900 mb-3">{title}</h4>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
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

  const additionalValues = ["Respect", "Responsibility", "Integrity", "Compassion", "Courage"];

  return (
    <div className="bg-brand-sand/20 min-h-screen">
      
      {/* --- HERO --- */}
      <section className="pt-32 pb-20 px-6 bg-brand-teal relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Pioneering Innovation in <br />Somali Education
          </h1>
          <p className="text-brand-sand/80 text-lg md:text-xl max-w-2xl leading-relaxed text-pretty">
            At Hindis, we believe in distinctive and innovative teaching that enhances foundational Literacy and Numeracy for a globally connected world.
          </p>
        </motion.div>
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center text-8xl font-display font-extrabold text-white/20 whitespace-nowrap overflow-hidden">
          HINDIS EDUCATION • INNOVATION • SOMALIA • RESEARCH • TECHNOLOGY • GROWTH
        </div>
      </section>

      {/* --- OUR STORY --- */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg"
          >
            <Image 
              src="/images/about_team.jpg" 
              alt="Hindis Team" 
              fill 
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
              Enhancing Early Foundational Learning
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-pretty">
              <p>
                We believe in proposing distinctive and innovative teaching and learning strategies that address students&apos; needs and local educational issues in Somalia. 
              </p>
              <p>
                In partnership with government and international organizations, we strive to provide students with extraordinary learning and critical thinking opportunities. Our goal is to prepare them for the complexities of a globally connected world through innovative approaches.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-3 text-brand-teal font-bold mb-2">
                  <CheckCircle2 size={24} />
                  <span>Government Aligned</span>
                </div>
                <div className="flex items-center gap-3 text-brand-teal font-bold">
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4 text-pretty">Our Core Values</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            These fundamental principles guide every strategy we develop and every partnership we form.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, idx) => (
            <ValueCard key={idx} {...value} />
          ))}
        </div>
      </Section>

      {/* --- ADDITIONAL VALUES --- */}
      <Section className="bg-brand-teal/5">
        <div className="text-center">
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 italic">And the values we live by every day...</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            {additionalValues.map((val, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white px-8 py-4 rounded-full shadow-sm text-brand-teal font-display font-bold text-lg md:text-xl"
              >
                {val}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* --- CALL TO ACTION --- */}
      <Section className="bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-brand-sand/40 p-12 md:p-20 rounded-[3rem] text-center border border-white"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 text-pretty">Want to learn more about our impact?</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg text-pretty">
            Our projects span across borders, from the Somali diaspora to the streets of Mogadishu. 
            Discover how we are making a difference today.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/projects" className="bg-brand-teal text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all">
              See Our Projects
            </Link>
          </div>
        </motion.div>
      </Section>

    </div>
  );
}
