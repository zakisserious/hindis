"use client";

import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Section from "@/components/Section";
import { motion } from "framer-motion";

const ContactInfo = ({ icon: Icon, title, content }: { icon: any; title: string; content: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-start gap-6 group"
  >
    <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-xl font-display font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 leading-relaxed font-medium">{content}</p>
    </div>
  </motion.div>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function ContactClient() {
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
            Get in <span className="text-brand-blue">Touch</span>
          </h1>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed italic text-pretty">
            We are always open to new partnerships, research collaborations, and community dialogues. Reach out and let&apos;s shape the future of education together.
          </p>
        </motion.div>
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 -skew-x-12 transform origin-top translate-x-20" />
      </section>

      {/* --- CONTACT GRID --- */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">

          {/* Direct Connect Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-brand-blue rounded-[3.5rem] p-10 md:p-16 text-white relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-sand rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Direct Inquiries</h2>
              <p className="text-brand-sand/90 text-lg mb-10 leading-relaxed max-w-md">
                For partnerships, professional inquiries, or research collaborations, please reach out directly via email. Our team is ready to connect.
              </p>
              
              <a 
                href="mailto:info@hindis.so" 
                className="inline-flex items-center gap-4 bg-white text-brand-blue px-10 py-5 rounded-2xl font-extrabold text-lg hover:bg-brand-sand hover:-translate-y-1 transition-all shadow-xl group"
              >
                Send an Email <Mail size={24} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <p className="mt-8 text-sm text-brand-sand/60 font-medium tracking-wide italic">
                Typical response time: Within 48 hours
              </p>
            </div>
          </motion.div>

          {/* Info */}
          <div className="flex flex-col justify-center gap-12">
            <div className="mb-4">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-500 text-lg leading-relaxed text-pretty">
                Connect with our team across our mission centers. We aim to respond to all inquiries within 48 hours.
              </p>
            </div>

            <div className="space-y-10">
              <ContactInfo
                icon={MapPin}
                title="Our Location"
                content={
                  <>
                    Mogadishu, Somalia<br />
                    Minnesota, USA
                  </>
                }
              />
              <ContactInfo icon={Phone} title="Phone" content="+252 617 255 936" />
              <ContactInfo icon={Mail} title="Email" content="info@hindis.so" />
            </div>

            <div className="pt-10 border-t border-brand-sand">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">Follow Our Journey</h4>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/hindis__/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-brand-sand/50 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-sm">
                  <InstagramIcon />
                </a>
                <a href="https://www.tiktok.com/@hindisedu" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-brand-sand/50 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-sm">
                  <TikTokIcon />
                </a>
                <a href="https://www.facebook.com/people/Hindis/61556807271051/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-brand-sand/50 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-sm">
                  <FacebookIcon />
                </a>
                <a href="https://www.linkedin.com/company/hindis" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-brand-sand/50 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-sm">
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

        </div>
      </Section>

    </div>
  );
}
