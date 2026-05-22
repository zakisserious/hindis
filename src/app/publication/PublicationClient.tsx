"use client";

import React from "react";
import Image from "next/image";
import Section from "@/components/Section";
import { BookOpen, FileText, Download, PlayCircle, Quote, Layout } from "lucide-react";
import { motion } from "framer-motion";

const PublicationCard = ({ title, type, date }: { title: string; type: string; date: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 bg-white rounded-3xl shadow-sm border border-brand-sand/50 hover:border-brand-teal transition-all group"
  >
    <div className="w-12 h-12 rounded-xl bg-brand-sand/50 flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 transition-transform">
      <FileText size={24} />
    </div>
    <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">{type}</span>
    <h3 className="text-xl font-display font-bold text-gray-900 mt-2 mb-4 group-hover:text-brand-teal transition-colors">{title}</h3>
    <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-sand">
      <span className="text-gray-400 text-sm">{date}</span>
      <button className="flex items-center gap-2 text-brand-teal font-bold text-sm hover:underline">
        Download <Download size={16} />
      </button>
    </div>
  </motion.div>
);

export default function PublicationClient() {
  return (
    <div className="bg-brand-sand/20 min-h-screen">
      
      {/* --- HERO --- */}
      <section className="pt-40 pb-20 px-6 bg-white border-b">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-teal/10 rounded-full text-brand-teal font-bold text-xs mb-8">
             <BookOpen size={16} />
             Research & Evidence
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-gray-900 mb-8 leading-tight">
            Knowledge <br />for <span className="text-brand-teal">Transformation</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed text-pretty">
            We believe in an evidence-based approach to education. Our publications reflect our deep commitment to research, policy analysis, and practical innovation.
          </p>
        </motion.div>
      </section>

      {/* --- FEATURED VIDEO: LAUNCH OF HINDIS --- */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">Official Documentary</h2>
            <p className="text-gray-500">Witness the journey and impact of our initiatives.</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-video rounded-[3rem] bg-gray-900 overflow-hidden shadow-2xl group"
          >
            <iframe 
              src="https://www.youtube.com/embed/K9BbpAaBbKs" 
              title="The Launch of Hindis"
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      </Section>

      {/* --- RESEARCH SUMMARY --- */}
      <Section className="bg-brand-sand/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/project_0_4.jpg" 
              alt="Research and Policy" 
              fill 
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-brand-teal rounded-2xl flex items-center justify-center text-white mb-8">
              <Quote size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8 leading-tight">Evidence-Based <br />Policy Analysis</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-pretty">
              <p>
                Hindis is dedicated to research focused on foundational learning (literacy and numeracy), particularly in early child and primary education.
              </p>
              <p>
                Our team meticulously analyzes every pedagogical strategy to ensure they are engaging, culturally relevant, and responsive to the unique challenges of the Somali education system.
              </p>
              <p>
                By collaborating with international researchers and local stakeholders, we produce insights that drive systemic change and improve learning outcomes for millions of children.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* --- PUBLICATION GRID --- */}
      <Section containerClassName="max-w-7xl">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-900">Recent Resources</h2>
          <button className="text-brand-teal font-bold flex items-center gap-2 hover:underline">
            View All <Layout size={18} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PublicationCard title="Foundational Literacy in Post-Conflict Settings" type="Policy Brief" date="May 2024" />
          <PublicationCard title="Digital Inclusion & Numeracy: A Somali Case Study" type="Research Paper" date="March 2024" />
          <PublicationCard title="AI-Driven Monitoring in Early Education" type="Technical Report" date="Jan 2024" />
        </div>
      </Section>

    </div>
  );
}
