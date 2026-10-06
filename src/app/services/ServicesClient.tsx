"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Microscope, GraduationCap, BarChart, Settings, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

const ServiceBlock = ({
  icon: Icon,
  title,
  description,
  features,
  imageSrc,
  reversed = false,
  variant = "split",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  reversed?: boolean;
  variant?: "split" | "stack";
}) => (
  <motion.div
    className="py-16 md:py-24"
  >
    {variant === "stack" ? (
      // Wide media band + asymmetric text split, so the third service
      // does not repeat the two zig-zag blocks above it.
      <div>
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl bg-brand-sand/50 overflow-hidden shadow-2xl mb-10">
          <Image src={imageSrc} alt={title} fill sizes="100vw" className="object-cover" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-6">
          <div className="md:col-span-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                <Icon size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight text-pretty">
                {title}
              </h2>
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-[60ch] text-pretty">
              {description}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-800 font-medium">
                  <div className="w-6 h-6 rounded-lg bg-brand-blue flex items-center justify-center text-white shrink-0">
                    <Settings size={12} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ) : (
      <div className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} gap-16 md:gap-24 items-center`}>
        <div className="flex-1">
          <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6">
            <Icon size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight text-pretty">{title}</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-[60ch] text-pretty">
            {description}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-gray-800 font-medium">
                <div className="w-6 h-6 rounded-lg bg-brand-blue flex items-center justify-center text-white shrink-0">
                  <Settings size={12} />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 w-full aspect-[4/3] rounded-3xl bg-brand-sand/50 overflow-hidden relative shadow-2xl">
          <Image src={imageSrc} alt={title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>
    )}
  </motion.div>
);

export default function ServicesClient() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* --- HERO --- */}
      <PageHero
        title={<>Our <span className="text-brand-blue">Services</span></>}
        subtitle="Driving system-level change through innovative, student-centered strategies that are engaging, culturally relevant, and responsive to today's world."
      />

      {/* --- SERVICES LIST --- */}
      <div className="max-w-7xl mx-auto px-6">
        
        <ServiceBlock 
          icon={Microscope}
          title="Holistic Institution Support"
          description="We provide comprehensive support for schools and education departments to create thriving environments for both students and teachers."
          features={[
            "Curriculum Development",
            "Professional Learning",
            "Smart Tech Integration",
            "Institutional Assessment"
          ]}
          imageSrc="/images/project_1_3.jpg"
        />

        <ServiceBlock 
          reversed
          icon={GraduationCap}
          title="Teacher Workshops"
          description="Our hands-on workshops train teachers in structured reading and maths lessons they can use the next morning."
          features={[
            "Pedagogical Training",
            "Digital Literacy",
            "Classroom Management",
            "Inclusive Teaching"
          ]}
          imageSrc="/images/project_0_1.jpg"
        />

        <ServiceBlock
          icon={BarChart}
          variant="stack"
          title="Empowering through AI"
          description="We use simple data tools to record how many children are actually learning, so teaching can be adjusted when it is not working."
          features={[
            "Data Collection",
            "Program Monitoring",
            "Outcome Evaluation",
            "Personalized Platforms"
          ]}
          imageSrc="/images/project_0_3.jpg"
        />

      </div>

      {/* --- CTA --- */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto bg-brand-blue text-white rounded-2xl p-12 md:p-24 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-pretty">Ready to work with us?</h2>
          <p className="text-brand-sand/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss how our services can be tailored to meet your unique educational challenges.
          </p>
          <Link href="/contact" className="bg-white text-brand-blue px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:bg-brand-sand transition-all inline-block">
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  );
}
