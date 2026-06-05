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
    className="p-8 bg-white rounded-3xl shadow-sm border border-brand-sand/50 hover:border-brand-blue transition-all group"
  >
    <div className="w-12 h-12 rounded-xl bg-brand-sand/50 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
      <FileText size={24} />
    </div>
    <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">{type}</span>
    <h3 className="text-xl font-display font-bold text-gray-900 mt-2 mb-4 group-hover:text-brand-blue transition-colors">{title}</h3>
    <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-sand">
      <span className="text-gray-400 text-sm">{date}</span>
      <button className="flex items-center gap-2 text-brand-blue font-bold text-sm hover:underline">
        Download <Download size={16} />
      </button>
    </div>
  </motion.div>
);

export default function PublicationClient() {
  return (
    <div className="bg-white min-h-screen">

      {/* --- HERO --- */}
      <section className="pt-48 pb-24 px-6 bg-brand-sand/50 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-gray-900 mb-8 tracking-tight">
            Knowledge for <span className="text-brand-blue">Transformation</span>
          </h1>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed italic text-pretty">
            We believe in an evidence-based approach to education. Our publications reflect our deep commitment to research, policy analysis, and practical innovation.
          </p>
        </motion.div>
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 -skew-x-12 transform origin-top translate-x-20" />
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
            className="relative aspect-video rounded-[3rem] bg-gray-900 overflow-hidden shadow-2xl group border-8 border-brand-sand/30"
          >
            <video
              src="https://res.cloudinary.com/ddz4fvllb/video/upload/q_auto,f_auto,vc_auto,w_1280,q_70/Hindis_qqiea4.mp4"
              controls
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* --- THE LAUNCH OF HINDIS --- */}
      <Section className="bg-white pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">The Launch of Hindis</h2>
            <p className="text-gray-500">A milestone event celebrating the beginning of our mission in Somalia.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-video rounded-[3rem] bg-gray-900 overflow-hidden shadow-2xl group border-8 border-brand-sand/30"
          >
            <video
              src="https://res.cloudinary.com/ddz4fvllb/video/upload/q_auto,f_auto,vc_auto,w_1280,q_70/The_launch_of_Hindis_oovrjq.mp4"
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
