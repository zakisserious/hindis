"use client";

import React from "react";
import Image from "next/image";
import Section from "@/components/Section";
import { Microscope, GraduationCap, BarChart, Settings, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const ServiceBlock = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  imageSrc, 
  reversed = false 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  features: string[]; 
  imageSrc: string;
  reversed?: boolean;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    className="py-16 md:py-24"
  >
    <div className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} gap-16 md:gap-24 items-center`}>
      <div className="flex-1">
        <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-8 shadow-sm">
          <Icon size={32} />
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">{title}</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-10 text-pretty">
          {description}
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-800 font-medium">
              <div className="w-6 h-6 rounded-lg bg-brand-blue flex items-center justify-center text-white shrink-0">
                <Settings size={12} />
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 w-full aspect-[4/3] rounded-[3rem] bg-brand-sand/50 overflow-hidden relative shadow-2xl">
         <Image src={imageSrc} alt={title} fill className="object-cover" /> 
      </div>
    </div>
  </motion.div>
);

export default function ServicesClient() {
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
            Our <span className="text-brand-blue">Services</span>
          </h1>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed italic text-pretty">
            Driving system-level change through innovative, student-centered strategies that are engaging, culturally relevant, and responsive to today&apos;s world.
          </p>
        </motion.div>
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 -skew-x-12 transform origin-top translate-x-20" />
      </section>

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
          description="Our hands-on, tailor-made workshops equip educators with cutting-edge techniques and tools to transform their classrooms into hubs of critical thinking."
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
          title="Empowering through AI"
          description="We leverage the power of Artificial Intelligence to revolutionize educational data collection, monitoring, and evaluation, and learning about AI"
          features={[
            "Data Collection",
            "Program Monitoring",
            "Outcome Evaluation",
            "Personalized Platforms"
          ]}
          imageSrc="/images/project_0_3.jpg"
        />

      </div>

      {/* --- FOOTER CTA --- */}
      <Section className="bg-brand-blue text-white mt-12 mb-0 py-24 rounded-t-[5rem]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <Cpu className="mx-auto mb-8 text-brand-sand opacity-50" size={64} />
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-pretty">Ready to elevate your institution?</h2>
          <p className="text-brand-sand/80 text-lg md:text-xl mb-12">
            Let's discuss how our services can be tailored to meet your unique educational challenges.
          </p>
          <a href="/contact" className="bg-white text-brand-blue px-12 py-5 rounded-full font-extrabold text-lg shadow-xl hover:bg-brand-sand transition-all inline-block">
            Get in Touch
          </a>
        </motion.div>
      </Section>

    </div>
  );
}
