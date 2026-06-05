"use client";

import React, { useState } from "react";
import Image from "next/image";
import Section from "@/components/Section";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: "diaspora-dialogue",
    title: "Diaspora Dialogue",
    description: "In the project Diaspora Dialogue, Hindis collaborates with the Somali diaspora educational professionals, focusing on curriculum and pedagogical innovations. This initiative aims to adapt teaching methods and tools to better address foundational learning issues and foster early child resilience across borders.",
    images: ["/images/project_0_0.jpg", "/images/project_0_1.jpg", "/images/project_0_3.jpg", "/images/project_0_4.jpg", "/images/project_0_5.jpg"]
  },
  {
    id: "somali-curriculum",
    title: "Somali Language Curriculum",
    description: "In collaboration with the Federal Ministry of Education, Culture, and Higher Education, Saida played a pivotal role in designing the first-ever early child and primary Somali language and numeracy curriculum. This milestone represents a systematic step towards establishing standardized, high-quality foundational learning for millions of students.",
    images: ["/images/project_1_0.jpg", "/images/project_1_1.jpg", "/images/project_1_2.jpg", "/images/project_1_3.jpg"]
  }
];

const ProjectCard = ({ project, idx }: { project: Project; idx: number }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-brand-sand/50 flex flex-col h-full group hover:shadow-2xl transition-all duration-500"
    >
      {/* Slideshow Area */}
      <div className="relative aspect-[4/3] bg-gray-900 group-hover:scale-[1.02] transition-transform duration-700">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={project.images[currentImage]}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Overlays */}
        {project.images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={prevImage} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextImage} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-sm">
          {project.images.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentImage ? "bg-white w-4" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>

      <div className="p-8 md:p-10 flex flex-col flex-grow">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">{project.title}</h3>
        <p className="text-gray-600 leading-relaxed text-pretty flex-grow">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function ProjectsClient() {
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
            Impact & <span className="text-brand-blue">Innovation</span>
          </h1>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed italic text-pretty">
            Our initiatives are designed to revolutionize foundational learning in Somalia, combining local cultural roots with global educational standards.
          </p>
        </motion.div>
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 -skew-x-12 transform origin-top translate-x-20" />
      </section>

      {/* --- PROJECTS GRID --- */}
      <Section className="bg-white" containerClassName="max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </Section>

      {/* --- REFACTORED IMPACT STORY: BOOKS FOR AFRICA --- */}
      <Section className="bg-white border-y border-brand-sand">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8 tracking-tight">Books For Africa</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-pretty">
                <p>
                  In a major breakthrough for literacy, Hindis successfully partnered with the non-profit organization &quot;Books For Africa&quot; to bring educational resources to the heart of the capital.
                </p>
                <p className="font-medium text-gray-900">
                  Together, we delivered 41,000+ targeted books to Mogadishu, directly enriching the foundations of literacy and numeracy for tens of thousands of school children.
                </p>
                <div className="pt-8 grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-display font-extrabold text-brand-blue mb-1">41,000+</div>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Resource Delivered</p>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-extrabold text-brand-blue mb-1">100+</div>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Schools Supported</p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 md:order-2 relative aspect-square rounded-[3.5rem] bg-brand-sand overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/booksforafrica.jpg"
                alt="Books For Africa Partnership"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Section>



    </div>
  );
}
