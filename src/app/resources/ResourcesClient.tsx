"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, Download, Eye, Quote } from "lucide-react";
import Section from "@/components/Section";

const resources = [
// ...
  {
    title: "Regional Education Conference",
    description: "East African Community Regional Education Conference Commemorating the AU Year of Education.",
    file: "/resources/EAST AFRICAN COMMUNITY REGIONAL EDUCATION CONFERENCE COMMEMORATING THE AU YEAR OF EDUCATION.pdf",
  },
  {
    title: "East African Conference Presentation",
    description: "Official presentation materials for the East African Conference on foundational learning.",
    file: "/resources/EAST AFRICAN CONFERENCE PREZ.pdf",
  }
];

export default function ResourcesClient() {
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
            Our <span className="text-brand-blue">Resources</span>
          </h1>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed italic text-pretty">
            These resources are what we&apos;ve done. We believe in sharing our research and findings to foster a collaborative educational landscape.
          </p>
        </motion.div>
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 -skew-x-12 transform origin-top translate-x-20" />
      </section>

      {/* --- RESEARCH SUMMARY (Migrated from Publication) --- */}
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
            <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center text-white mb-8">
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

      {/* --- RESOURCES LIST --- */}
      <Section className="bg-white">
        <div className="space-y-24">
          {resources.map((resource, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1 }}
              className="group"
            >
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Content */}
                <div className="lg:w-1/3">
                  <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-8">
                    <FileText size={32} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">{resource.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {resource.description}
                  </p>
                  <a
                    href={resource.file}
                    download
                    className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-full font-bold hover:bg-brand-blue/90 transition-all shadow-md group"
                  >
                    <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                    Download PDF
                  </a>
                </div>

                {/* PDF Viewer */}
                <div className="lg:w-2/3 w-full bg-gray-50 rounded-[2rem] overflow-hidden border-4 border-brand-sand shadow-xl aspect-[4/5] relative">
                  <iframe
                    src={`${resource.file}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="w-full h-full border-none"
                    title={resource.title}
                  />
                  {/* Subtle Label */}
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold text-gray-500 shadow-sm">
                    <Eye size={14} />
                    Document Preview
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
