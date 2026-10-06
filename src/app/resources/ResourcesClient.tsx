"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import { publicationsByDate } from "@/lib/publications";

export default function ResourcesClient() {
  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title={<>Our <span className="text-brand-blue">Research</span></>}
        subtitle="Research, papers and reports produced by Hindis and our partners. We believe in sharing our findings to foster a collaborative educational landscape."
      />

      {/* --- RESEARCH SUMMARY --- */}
      <Section className="bg-brand-sand/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/project_0_4.jpg"
              alt="Research and Policy"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
          >
            <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center text-white mb-8">
              <Quote size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-8 leading-tight text-pretty">
              Evidence-based{" "}
              <span className="accent-underline">policy analysis</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-pretty">
              <p>
                Hindis is dedicated to research focused on foundational learning (literacy and numeracy), particularly in early child and primary education.
              </p>
              <p>
                Our team meticulously analyzes every pedagogical strategy to ensure they are engaging, culturally relevant, and responsive to the challenges facing education systems.
              </p>
              <p>
                By collaborating with international researchers and local stakeholders, we produce insights that drive systemic change and improve learning outcomes for millions of children.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* --- PUBLICATIONS --- */}
      <Section className="bg-white">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 text-pretty">
            Publications
          </h2>
          <p className="text-gray-600 text-lg max-w-[60ch]">
            Every paper has its own page, with the findings, recommendations and the full document to read or download.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {publicationsByDate.map((publication) => (
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
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest mb-4">
                    <span className="text-brand-blue">{publication.type}</span>
                    <span className="text-gray-400 font-medium">{publication.dateLabel}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-4 leading-snug group-hover:text-brand-blue transition-colors text-pretty">
                    {publication.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                    {publication.summary}
                  </p>
                  <div className="mt-6 pt-6 border-t border-brand-sand flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      {publication.partner}
                    </span>
                    <span className="shrink-0 ml-4 flex items-center gap-2 text-brand-blue font-bold text-sm group-hover:gap-3 transition-all">
                      Read
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
