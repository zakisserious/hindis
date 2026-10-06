import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-sand border-t pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block group mb-6">
              <div className="relative w-44 h-16 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/logo.png"
                  alt="Hindis Logo"
                  fill
                  sizes="224px"
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Hindis trains teachers and supplies books so children learn to read, write and count in their own language.
            </p>
            <SocialLinks linkClassName="w-10 h-10 rounded-full bg-brand-sand flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-sm" />
          </div>

          {/* Quick Links */}
          <div className="md:pl-8">
            <h4 className="font-display text-gray-900 mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-600 hover:text-brand-blue text-sm transition-colors font-bold">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-brand-blue text-sm transition-colors font-bold">About Us</Link></li>
              <li><Link href="/team" className="text-gray-600 hover:text-brand-blue text-sm transition-colors font-bold">Our Team</Link></li>
              <li><Link href="/projects" className="text-gray-600 hover:text-brand-blue text-sm transition-colors font-bold">Our Projects</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-brand-blue text-sm transition-colors font-bold">Services</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-brand-blue text-sm transition-colors font-bold">FAQ</Link></li>
              <li><Link href="/publication" className="text-gray-600 hover:text-brand-blue text-sm transition-colors font-bold">Publication</Link></li>
              <li><Link href="/resources" className="text-gray-600 hover:text-brand-blue text-sm transition-colors font-bold">Resources</Link></li>
            </ul>

          </div>


          {/* Contact Col */}
          <div>
            <h4 className="font-display text-gray-900 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-blue shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  Mogadishu, Somalia
                  <br />
                  Minnesota, USA
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-blue shrink-0" />
                <a href="tel:+252617255936" className="text-gray-600 text-sm hover:text-brand-blue transition-colors">+252 617 255 936</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-blue shrink-0" />
                <span className="text-gray-600 text-sm">info@hindis.so</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} Hindis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
