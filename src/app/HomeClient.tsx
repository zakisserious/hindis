"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Cpu, Users, Heart, Target, Zap, CheckCircle2 } from "lucide-react";
import Section from "@/components/Section";
import { cn } from "@/lib/utils";

const StatCard = ({ number, label, suffix = "+" }: { number: string; label: string; suffix?: string }) => (
  <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-brand-sand/50">
    <span className="text-4xl md:text-5xl font-display font-extrabold text-brand-blue mb-2">
      {number}{suffix}
    </span>
    <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">{label}</span>
  </div>
);

const ValueCard = ({ icon: Icon, title, description, colorClass }: { icon: any; title: string; description: string; colorClass: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-brand-sand group"
  >
    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", colorClass)}>
      <Icon className="text-white" size={28} />
    </div>
    <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

export default function HomeClient() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-brand-sand/30">

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center pt-20 px-6">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent z-10 md:via-white/95" />
          <div className="absolute inset-0">
            <Image
              src="/images/hero_classroom.jpg"
              alt="Children learning"
              fill
              className="object-cover object-[80%_center] md:object-center opacity-70 md:opacity-100 translate-x-10 md:translate-x-0"
              priority
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-8xl font-display font-extrabold text-gray-900 leading-[1.05] mb-8 text-pretty">
              <span className="text-brand-blue">Educate</span> <br />Inspire <br />
              <span className="text-brand-blue">Innovate</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl text-pretty">
              Your partner in pioneering quality foundational learning. We collaborate with local communities and government to elevate early education, addressing unique student needs for a global future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-blue/90 transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                Explore Projects <ArrowRight size={20} />
              </Link>
              <Link
                href="/about"
                className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-all shadow-sm"
              >
                Our Mission
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            The Pillars of Our Approach
          </h2>
          <p className="text-gray-600 text-lg">
            We foster a holistic educational ecosystem where every child is equipped with the tools to excel and contribute.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard
            icon={Target}
            title="Competence"
            colorClass="bg-brand-blue"
            description="Prioritizing essential skills and knowledge that enable children to excel academically and thrive in practical life."
          />
          <ValueCard
            icon={Zap}
            title="Productivity"
            colorClass="bg-brand-red"
            description="Cultivating the ability to contribute effectively to society, fostering a strong work ethic and the capacity for meaningful outcomes."
          />
          <ValueCard
            icon={Heart}
            title="Compassion"
            colorClass="bg-brand-blue/80"
            description="Deepening empathy and understanding, promoting a culture of kindness and social responsibility from the earliest years."
          />
        </div>
      </Section>

      {/* --- MISSION SPLIT --- */}
      <Section className="relative overflow-hidden bg-brand-sand/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/mission_impact.jpg"
              alt="Students in classroom"
              fill
              className="object-cover"
            />
          </motion.div>
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">
              A Vision for Resilience <br />& Global Readiness
            </h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-gray-600 leading-relaxed">
                    To foster competence, productivity, and compassion through quality foundational learning, enriching education system with innovative strategies.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-600 leading-relaxed">
                    To pioneer resilient education systems that empower the next generation with the foundational mastery and global mindset to lead, innovate, and thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --- STATS SECTION --- */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-display font-extrabold text-white mb-2">41k+</div>
              <p className="text-brand-sand/80 text-sm font-bold uppercase tracking-widest">Books Delivered</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-display font-extrabold text-white mb-2">Impactful</div>
              <p className="text-brand-sand/80 text-sm font-bold uppercase tracking-widest">Global Partnerships</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-display font-extrabold text-white mb-2">1st</div>
              <p className="text-brand-sand/80 text-sm font-bold uppercase tracking-widest">Language Curriculum</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-display font-extrabold text-white mb-2">∞</div>
              <p className="text-brand-sand/80 text-sm font-bold uppercase tracking-widest">Boundless Potential</p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* --- CTA SECTION --- */}
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
              Shape a Foundation <br />of Excellence
            </h2>
            <p className="text-brand-sand/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Join Hindis in pioneering a new era for education systems. Together, we can transform early learning into a bridge to the future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/about"
                className="bg-white text-brand-blue px-10 py-5 rounded-full font-extrabold text-lg hover:bg-brand-sand transition-all shadow-lg"
              >
                Our Mission
              </Link>
              <Link
                href="/projects"
                className="bg-transparent border-2 border-brand-sand/30 text-white px-10 py-5 rounded-full font-extrabold text-lg hover:bg-white/10 transition-all"
              >
                View Our Impact
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
