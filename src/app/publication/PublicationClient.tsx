"use client";

import React from "react";
import Image from "next/image";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const JournalExcerpt = () => (
  <a
    href="https://sahanjournal.com/education/somali-language-classes-new-curriculum-minnesota/"
    target="_blank"
    rel="noopener noreferrer"
    className="block group"
    aria-label="Read the full Sahan Journal article about the new Somali curriculum"
  >
    <motion.div
      className="grid grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-xl transition-shadow group-hover:shadow-2xl lg:grid-cols-12"
    >
      {/* Image */}
      <div className="relative min-h-[300px] lg:col-span-7">
        <Image
          src="https://i0.wp.com/sahanjournal.com/wp-content/uploads/2026/01/SaidaHassan-4535-scaled.jpg?resize=780%2C520&ssl=1"
          alt="Saida Hassan presenting in a classroom"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-8 md:p-12 lg:col-span-5">
        <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-widest text-brand-blue">
          <span>Featured in</span>
          <span className="text-gray-300">/</span>
          <span className="font-medium normal-case tracking-normal text-gray-500">
            Sahan Journal · February 26, 2026
          </span>
        </div>

        <h3 className="mb-6 text-2xl font-display font-bold leading-tight text-gray-900 transition-colors group-hover:text-brand-blue md:text-3xl">
          New Somali curriculum helps bridge gap for Minnesota schools
        </h3>

        <p className="mb-6 leading-relaxed text-gray-600">
          Hindis founder Saida Hassan developed a first-grade Somali language curriculum aligned with Minnesota standards, making dual-language programs more sustainable for teachers.
        </p>

        <div className="mb-6 h-1 w-12 rounded-full bg-brand-red" />
        <blockquote className="mb-8 text-lg italic leading-relaxed text-gray-800">
          “I’m hoping that this becomes something that is embedded in the education system here. We will produce more confident, more academically rich children who are bilingual.”
        </blockquote>

        <span className="mt-auto inline-flex items-center gap-2 self-start rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white transition-colors group-hover:bg-brand-blue/90">
          Read the article
          <ArrowRight size={16} />
        </span>
      </div>
    </motion.div>
  </a>
);
export default function PublicationClient() {
  return (
    <div className="bg-white min-h-screen">

      {/* --- HERO --- */}
      <PageHero
        title={<>What we have <span className="text-brand-blue">learned</span></>}
        subtitle="We publish what we asked, who we asked, and what the answers mean for teachers and for policy."
      />
      {/* --- JOURNAL EXCERPT --- */}
      <Section className="bg-brand-sand/40">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4 text-pretty">
            In the News
          </h2>
          <p className="text-gray-500 text-lg">Hindis featured in Sahan Journal</p>
        </div>

        <JournalExcerpt />
      </Section>

      {/* --- FEATURED VIDEO: LAUNCH OF HINDIS --- */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4 text-pretty">Official Documentary</h2>
            <p className="text-gray-500">A short film on the programme and the people running it.</p>
          </div>

          <motion.div
            className="relative aspect-video rounded-3xl bg-gray-900 overflow-hidden shadow-2xl group border-8 border-brand-sand/30"
          >
            <video
              src="https://res.cloudinary.com/ddz4fvllb/video/upload/q_auto,f_auto,vc_auto,w_1280,q_70/Hindis_qqiea4.mp4"
              poster="/images/hindis-documentary-poster.jpg"
              controls
              preload="metadata"
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* --- THE LAUNCH OF HINDIS --- */}
      <Section className="bg-white pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4 text-pretty">The Launch of Hindis</h2>
            <p className="text-gray-500">A milestone event celebrating the beginning of our mission.</p>
          </div>

          <motion.div
            className="relative aspect-video rounded-3xl bg-gray-900 overflow-hidden shadow-2xl group border-8 border-brand-sand/30"
          >
            <video
              src="https://res.cloudinary.com/ddz4fvllb/video/upload/q_auto,f_auto,vc_auto,w_1280,q_70/The_launch_of_Hindis_oovrjq.mp4"
              poster="/images/hindis-launch-poster.jpg"
              controls
              preload="metadata"
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Section>



    </div>
  );
}
