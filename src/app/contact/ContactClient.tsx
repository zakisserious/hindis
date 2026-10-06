"use client";

import React from "react";
import { Mail, Phone, MapPin, type LucideIcon } from "lucide-react";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import SocialLinks from "@/components/SocialLinks";
import { motion } from "framer-motion";

const ContactInfo = ({ icon: Icon, title, content }: { icon: LucideIcon; title: string; content: React.ReactNode }) => (
  <motion.div
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

export default function ContactClient() {
  return (
    <div className="bg-white min-h-screen">

      {/* --- HERO --- */}
      <PageHero
        title={<>Get in <span className="text-brand-blue">Touch</span></>}
        subtitle="We are always open to new partnerships, research collaborations, and community dialogues. Reach out and let's shape the future of education together."
      />

      {/* --- CONTACT GRID --- */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">

          {/* Direct Connect Card */}
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-brand-blue p-10 text-white md:p-16"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Direct Inquiries</h2>
              <p className="text-brand-sand/90 text-lg mb-10 leading-relaxed max-w-md">
                For partnerships, professional inquiries, or research collaborations, please reach out directly via email. Our team is ready to connect.
              </p>
              
              <a 
                href="mailto:info@hindis.so" 
                className="group inline-flex items-center gap-4 rounded-full bg-white px-10 py-5 text-lg font-bold text-brand-blue shadow-xl transition-all hover:-translate-y-1 hover:bg-brand-sand"
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
              <h4 className="font-display text-lg text-gray-900 mb-8">Follow Hindis</h4>
              <SocialLinks
                size={24}
                containerClassName="flex gap-6"
                linkClassName="w-14 h-14 rounded-full bg-brand-sand/50 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-sm"
              />
            </div>
          </div>

        </div>
      </Section>

    </div>
  );
}
