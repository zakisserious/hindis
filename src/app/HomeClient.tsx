"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Heart, Target, Zap } from "lucide-react";
import Section from "@/components/Section";
import { publicationsByDate } from "@/lib/publications";

// The only figure below that Hindis can claim as its own delivery. The national
// figures are drawn from our published research (SNU/Hindis 2026 and the EAC
// conference paper, 2024) and describe the conditions we work in, not results
// we measured, so the page labels them separately.
const ourDelivery = {
  value: "41,000+",
  label: "Books delivered to schools",
};

const nationalContext = [
  { value: "37%", label: "National literacy rate" },
  { value: "24%", label: "Of students have access to schools" },
  { value: "9.6%", label: "Of MoECHE hires hold an education degree" },
];

const pillars = [
  {
    icon: Target,
    title: "Competence",
    description:
      "Prioritizing essential skills and knowledge that enable children to excel academically and thrive in practical life.",
  },
  {
    icon: Zap,
    title: "Productivity",
    description:
      "Cultivating the ability to contribute effectively to society, fostering a strong work ethic and the capacity for meaningful outcomes.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description:
      "Deepening empathy and understanding, promoting a culture of kindness and social responsibility from the earliest years.",
  },
];

export default function HomeClient() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-brand-sand/30">

      {/* --- HERO SECTION ---
          Mission-led: say what Hindis does in the first line, then support it.
          The photo is editorial context, not a backdrop, so it sits in its own
          frame with a real caption rather than washing behind the text. */}
      <section className="relative bg-brand-sand/40 pt-10 pb-14 md:pt-14 md:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            <div className="lg:col-span-7">
              <p className="mb-5 font-display text-3xl leading-[1.05] text-brand-blue md:text-5xl lg:text-[4rem] xl:text-[4.5rem]">
                Educate. Inspire. Innovate.
              </p>
              <h1 className="mb-8 font-display text-2xl leading-[1.15] text-gray-900 md:text-3xl lg:text-[2.75rem] xl:text-[3rem]">
                Every child deserves to{" "}
                <span className="accent-underline">read, write and count.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-9 max-w-[54ch] text-pretty">
                Hindis works with teachers, families and the Ministry of Education
                to teach foundational reading and maths in the earliest years,
                when learning takes hold.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/projects"
                  className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-blue/90 transition-all hover:shadow-2xl hover:-translate-y-1"
                >
                  See our work <ArrowRight size={20} />
                </Link>
                <Link
                  href="/about"
                  className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-all shadow-sm"
                >
                  Our Mission
                </Link>
              </div>
            </div>

            <figure className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-student.jpg"
                  alt="A pupil in a yellow headscarf smiling during a lesson"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="mt-4 text-sm text-gray-500 max-w-[40ch]">
                Foundational learning works best when it starts early and is
                taught by a trained teacher in the child&apos;s own language.
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <Section className="bg-white">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 text-pretty">
            The Pillars of Our Approach
          </h2>
          <p className="text-gray-600 text-lg max-w-[65ch]">
            We foster a holistic educational ecosystem where every child is equipped with the tools to excel and contribute.
          </p>
        </div>

        <div className="divide-y divide-brand-sand">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-4 py-10 items-start"
              >
                <div className="md:col-span-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900">
                    {pillar.title}
                  </h3>
                </div>
                <p className="md:col-span-8 text-gray-600 leading-relaxed max-w-[65ch]">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* --- MISSION SPLIT --- */}
      <Section className="relative overflow-hidden bg-brand-sand/30">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <motion.div
            className="md:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/mission_impact.jpg"
              alt="A teacher writing on a board while pupils follow along in their exercise books"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
            />
          </motion.div>
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-5xl font-display text-gray-900 mb-10 leading-[1.1]">
              What we are working toward, and how
            </h2>
            <div className="space-y-8">
              <div className="flex gap-5 border-t border-brand-blue/10 pt-8">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-gray-900 mb-2">Our mission</h4>
                  <p className="text-gray-600 leading-relaxed max-w-[65ch]">
                    Train teachers and supply the books, so that every child
                    learns to read, write and count in their own language.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 border-t border-brand-blue/10 pt-8">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-gray-900 mb-2">Our vision</h4>
                  <p className="text-gray-600 leading-relaxed max-w-[65ch]">
                    A generation of children who read fluently, think
                    confidently and arrive at secondary school ready to learn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --- STATS SECTION --- */}
      {/* --- STATS --- */}
      {/* One figure is Hindis' own delivery. The other three are national
          conditions drawn from our published research and MoECHE data, so they
          are labelled as context rather than presented as results of ours. */}
      <section className="py-20 md:py-28 bg-brand-blue relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              className="lg:col-span-5"
            >
              <div className="w-12 h-1 rounded-full bg-brand-red mb-6" />
              <div className="text-6xl md:text-7xl font-display text-white mb-4 tabular-nums">
                {ourDelivery.value}
              </div>
              <p className="text-brand-sand text-lg md:text-xl leading-snug max-w-[22ch]">
                {ourDelivery.label}
              </p>
            </motion.div>

            <div className="lg:col-span-7 lg:border-l lg:border-white/15 lg:pl-16">
              <h3 className="text-brand-sand font-display text-2xl md:text-3xl mb-8">
                The conditions we work in
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {nationalContext.map((stat) => (
                  <motion.div
                    key={stat.label}
                  >
                    <div className="text-3xl md:text-4xl font-display text-white mb-2 tabular-nums">
                      {stat.value}
                    </div>
                    <p className="text-brand-sand/70 text-sm leading-relaxed">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
              <p className="text-brand-sand/50 text-xs mt-10">
                National figures are drawn from our{" "}
                <Link
                  href="/resources"
                  className="underline underline-offset-4 hover:text-brand-sand/80 transition-colors"
                >
                  published research
                </Link>
                , not measured by Hindis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- RECENT RESEARCH --- */}
      <Section className="bg-brand-sand/30">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Recent research
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl text-pretty">
              Our latest studies, papers and reports, with the findings and recommendations inside.
            </p>
          </div>
          <Link
            href="/resources"
            className="shrink-0 inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all"
          >
            All research
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {publicationsByDate.slice(0, 2).map((publication) => (
            <motion.div
              key={publication.slug}
            >
              <Link
                href={`/publications/${publication.slug}`}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-brand-sand/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={publication.cover}
                    alt={publication.coverAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-4">
                    {publication.type}
                    <span className="text-gray-300 px-2">/</span>
                    <span className="text-gray-400 font-medium">{publication.dateLabel}</span>
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-4 leading-snug group-hover:text-brand-blue transition-colors text-pretty">
                    {publication.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                    {publication.summary}
                  </p>
                  <span className="mt-6 pt-6 border-t border-brand-sand flex items-center gap-2 text-brand-blue font-bold text-sm group-hover:gap-3 transition-all">
                    Read the research
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>


      {/* --- CTA SECTION --- */}
      <section className="py-32 px-6">
        <motion.div
          className="max-w-5xl mx-auto bg-brand-blue rounded-2xl p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 text-pretty">
              Help a child read
            </h2>
            <p className="text-brand-sand/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Join us in funding teacher training and classroom books for children who are learning to read right now.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/resources"
                className="bg-white text-brand-blue px-10 py-5 rounded-full font-extrabold text-lg hover:bg-brand-sand transition-all shadow-lg"
              >
                Read our research
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-brand-sand/30 text-white px-10 py-5 rounded-full font-extrabold text-lg hover:bg-white/10 transition-all"
              >
                Contact us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
