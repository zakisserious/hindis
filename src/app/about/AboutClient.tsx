"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import { CheckCircle2, Target, Eye, ShieldCheck, Heart, Zap, Globe, MessageSquare, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ValueCard = ({ icon: Icon, title, description, idx }: { icon: any; title: string; description: string; idx: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={typeof window !== 'undefined' && window.innerWidth > 768 ? { y: -8 } : {}}
    transition={{ type: "spring", stiffness: 500, damping: 20 }}
    className="bg-brand-sand/40 p-8 rounded-2xl border border-white hover:border-brand-blue hover:bg-brand-sand/60 transition-colors duration-200 shadow-sm cursor-default"
  >
    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6">
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

  const additionalValues = ["Respect", "Responsibility", "Integrity", "Compassion", "Courage",];

  return (
    <div className="bg-white min-h-screen">

      {/* --- HERO --- */}
      <section className="pt-40 md:pt-48 pb-24 px-6 bg-brand-sand/50 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-gray-900 mb-8 tracking-tight">
            Pioneering innovations in <span className="text-brand-blue">Education Systems</span>
          </h1>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed italic text-pretty">
            At Hindis, we believe in distinctive and innovative teaching that enhances foundational Literacy and Numeracy for a globally connected world.
          </p>
        </motion.div>
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 -skew-x-12 transform origin-top translate-x-20" />
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4 text-pretty">Our Core Values</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            These fundamental principles guide every strategy we develop and every partnership we form.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, idx) => (
            <ValueCard key={idx} {...value} idx={idx} />
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={cn(
                  "text-center",
                  idx === 4 ? "col-span-2 md:col-span-1" : "col-span-1"
                )}
              >
                <div className="text-2xl md:text-3xl font-display font-extrabold text-white mb-2">{val}</div>
                <div className="w-8 h-1 bg-brand-red mx-auto rounded-full opacity-50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION (Home Style) --- */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto bg-brand-blue rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-sand rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 text-pretty">
              Want to learn more <br />about our impact?
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
