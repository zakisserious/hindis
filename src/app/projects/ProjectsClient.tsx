"use client";

import React, { useState } from "react";
import Image from "next/image";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
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
    title: "Somali Language TextBook Curriculum",
    description: "In collaboration with the Federal Ministry of Education, Culture, and Higher Education, Hindis played a pivotal role in designing the first-ever early child and primary Somali language and numeracy curriculum. This milestone represents a systematic step towards establishing standardized, high-quality foundational learning for millions of students.",
    images: ["/images/project_1_0.jpg", "/images/project_1_1.jpg", "/images/project_1_2.jpg", "/images/project_1_3.jpg"]
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-xl border border-brand-sand/50 flex flex-col h-full group hover:shadow-2xl transition-all duration-500"
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
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Overlays */}
        {project.images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition-opacity">
            <button
              type="button"
              onClick={prevImage}
              aria-label="Previous image"
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 focus-visible:bg-white/40 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 focus-visible:bg-white/40 transition-colors"
            >
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
      <PageHero
        title={<>Our <span className="text-brand-blue">programmes</span></>}
        subtitle="Teacher training, classroom books and school support, with figures we can report for each."
      />

      {/* --- PROJECTS GRID --- */}
      <Section className="bg-white" containerClassName="max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
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
                  Together, we delivered 41,000+ targeted books to major urban centers, directly enriching the foundations of literacy and numeracy for tens of thousands of school children.
                </p>
                <div className="pt-8 grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-display font-extrabold text-brand-blue mb-1">41,000+</div>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Resources Delivered</p>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-extrabold text-brand-blue mb-1">100+</div>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Schools Supported</p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              className="order-1 md:order-2 relative aspect-square rounded-3xl bg-brand-sand overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/booksforafrica.jpg"
                alt="Books For Africa Partnership"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Section>



    </div>
  );
}
