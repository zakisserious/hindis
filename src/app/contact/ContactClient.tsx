"use client";

import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Section from "@/components/Section";
import { motion } from "framer-motion";

const ContactInfo = ({ icon: Icon, title, content }: { icon: any; title: string; content: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-start gap-6 group"
  >
    <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-xl font-display font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 leading-relaxed font-medium">{content}</p>
    </div>
  </motion.div>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export default function ContactClient() {
  return (
    <div className="bg-brand-sand/10 min-h-screen">
      
      {/* --- HERO --- */}
      <section className="pt-40 pb-20 px-6 bg-brand-sand/10 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8">
            Get in <span className="text-brand-sand">Touch</span>
          </h1>
          <p className="text-brand-sand/80 text-xl max-w-2xl leading-relaxed text-pretty">
            We are always open to new partnerships, research collaborations, and community dialogues. Reach out to us and let&apos;s shape the future of education together.
          </p>
        </motion.div>
        {/* Subtle Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* --- CONTACT GRID --- */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-brand-sand/40 p-10 md:p-16 rounded-[3.5rem] border border-white"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-10">Send us a Message</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-2">Full Name</label>
                  <input type="text" placeholder="Your Name" className="w-full bg-white/60 border border-gray-200 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-2">Email Address</label>
                  <input type="email" placeholder="email@example.com" className="w-full bg-white/60 border border-gray-200 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-2">Subject</label>
                <input type="text" placeholder="How can we help?" className="w-full bg-white/60 border border-gray-200 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest pl-2">Message</label>
                <textarea rows={5} placeholder="Tell us more about your inquiry..." className="w-full bg-white/60 border border-gray-200 px-6 py-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all resize-none"></textarea>
              </div>
              <button disabled className="w-full bg-brand-teal text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-brand-teal/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Send Message <Send size={20} />
              </button>
            </form>
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
              <ContactInfo icon={MapPin} title="Our Location" content="Mogadishu, Somalia" />
              <ContactInfo icon={Phone} title="Phone" content="+252 61 XXX XXXX" />
              <ContactInfo icon={Mail} title="Email" content="info@hindis.so" />
            </div>

            <div className="pt-10 border-t border-brand-sand">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">Follow Our Journey</h4>
              <div className="flex gap-6">
                <a href="#" className="w-14 h-14 rounded-2xl bg-brand-sand/50 flex items-center justify-center text-brand-teal hover:bg-brand-teal hover:text-white transition-all shadow-sm">
                  <InstagramIcon />
                </a>
                <a href="#" className="w-14 h-14 rounded-2xl bg-brand-sand/50 flex items-center justify-center text-brand-teal hover:bg-brand-teal hover:text-white transition-all shadow-sm">
                  <TwitterIcon />
                </a>
                <a href="#" className="w-14 h-14 rounded-2xl bg-brand-sand/50 flex items-center justify-center text-brand-teal hover:bg-brand-teal hover:text-white transition-all shadow-sm">
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>

        </div>
      </Section>

    </div>
  );
}
