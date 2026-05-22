"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Section from "@/components/Section";

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-brand-sand/50 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`text-xl md:text-2xl font-display font-bold transition-colors ${isOpen ? "text-brand-teal" : "text-gray-900 group-hover:text-brand-teal"}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-brand-teal text-white rotate-180" : "bg-brand-sand/50 text-brand-teal"}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-600 text-lg leading-relaxed max-w-3xl text-pretty">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Why is quality foundational learning important for education system?",
      answer: "Foundational learning is critical as it sets the stage for all future educational endeavors. Establishing a strong base in the early years ensures that children develop essential skills such as literacy and numeracy, which are crucial for their personal and academic growth. It also helps to inculcate values, such as competence and compassion, which are integral to the development of a productive and socially responsible citizenry."
    },
    {
      question: "How does foundational learning in Somalia prepare students for global challenges?",
      answer: "Foundational learning in Somalia is designed to equip students with a broad range of competencies, from critical thinking to adaptability, which are necessary to navigate and succeed in a globalized world. By incorporating innovative teaching methods and addressing local challenges, the education system aims to build resilience and cultural awareness, enabling students to effectively participate in a diverse and interconnected global community."
    },
    {
      question: "How does Hindis address the unique challenges faced by students?",
      answer: "Hindis customizes its educational programs to meet the distinct needs, including the rich linguistic variety, varying levels of access to education, and the constraints of available resources. By doing so, it ensures every child has the chance to thrive academically. Additionally, Hindis seeks to enhance the educational landscape through strategic partnerships with local Governments and international agencies, bolstering the support network for education system."
    },
    {
      question: "Who can partner up with Hindis?",
      answer: `Hindis welcomes partnerships with a wide range of organizations and individuals committed to improving foundational education in Somalia, including:

• Governmental Agencies: Ministries of Education and other departments for policymaking and curriculum development.

• International NGOs and Foundations: Organizations focused on education and child development.

• Local Community Groups: Community-based organizations with deep local insights.

• Educational Institutions: Universities and schools for teacher training and best practices.

• Private Sector Partners: Companies through CSR initiatives.

• UN Agencies: UNICEF, UNESCO, and similar bodies.

• Philanthropic Individuals and Organizations.`

    }
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* --- HERO --- */}
      <section className="pt-40 pb-20 px-6 bg-brand-sand/10 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <span className="inline-block px-4 py-2 bg-brand-teal/10 text-brand-teal rounded-full font-bold text-xs uppercase tracking-widest mb-6">Support & Knowledge</span>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-gray-900 mb-8">
            Frequently Asked <span className="text-brand-teal">Questions</span>
          </h1>
        </motion.div>
      </section>

      {/* --- CONTENT --- */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">General FAQ</h2>
              <div className="w-16 h-1 bg-brand-teal rounded-full" />
            </div>

            <div className="border-t border-brand-sand">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  {...faq}
                  isOpen={openIndex === idx}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                />
              ))}
            </div>
          </motion.div>

          {/* Decorative Side Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-32 hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/core_values.jpg"
                alt="Hindis Educational Impact"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/40 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <p className="text-2xl font-display font-bold leading-tight">
                  Empowering every learner through the foundation of power.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </Section>

    </div>
  );
}
