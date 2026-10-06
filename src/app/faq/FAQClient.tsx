"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";

const AccordionItem = ({ id, question, answer, isOpen, onClick }: { id: number; question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-brand-sand/50 last:border-0">
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
        id={`faq-button-${id}`}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`text-xl md:text-2xl font-display font-bold transition-colors ${isOpen ? "text-brand-blue" : "text-gray-900 group-hover:text-brand-blue"}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-brand-blue text-white rotate-180" : "bg-brand-sand/50 text-brand-blue"}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-panel-${id}`}
            role="region"
            aria-labelledby={`faq-button-${id}`}
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
      question: "How does foundational learning prepare students for global challenges?",
      answer: "Foundational learning is designed to equip students with a broad range of competencies, from critical thinking to adaptability, which are necessary to navigate and succeed in a globalized world. By incorporating innovative teaching methods and addressing local challenges, the education system aims to build resilience and cultural awareness, enabling students to effectively participate in a diverse and interconnected global community."
    },
    {
      question: "How does Hindis address the unique challenges faced by students?",
      answer: "Hindis customizes its educational programs to meet the distinct needs, including the rich linguistic variety, varying levels of access to education, and the constraints of available resources. By doing so, it ensures every child has the chance to thrive academically. Additionally, Hindis seeks to enhance the educational landscape through strategic partnerships with local Governments and international agencies, bolstering the support network for education system."
    },
    {
      question: "Who can partner up with Hindis?",
      answer: `Hindis welcomes partnerships with a wide range of organizations and individuals committed to improving foundational education, including:

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
      <PageHero
        title={<>Frequently Asked <span className="text-brand-blue">Questions</span></>}
        subtitle="Answers about our teacher training, our partnerships, and how the work is funded."
      />

      {/* --- CONTENT --- */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          <motion.div
            className="space-y-4"
          >
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">General FAQ</h2>
              <div className="w-16 h-1 bg-brand-blue rounded-full" />
            </div>

            <div className="border-t border-brand-sand">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  id={idx}
                  {...faq}
                  isOpen={openIndex === idx}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                />
              ))}
            </div>
          </motion.div>

          {/* Decorative Side Image */}
          <motion.div
            className="sticky top-32 hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/core_values.jpg"
                alt="Hindis Educational Impact"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <p className="text-2xl font-display font-bold leading-tight">
                  Empowering every learner with a strong foundation.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </Section>

    </div>
  );
}
