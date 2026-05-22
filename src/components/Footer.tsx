import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block group mb-6">
              <div className="relative w-56 h-32 group-hover:scale-105 transition-transform">
                <Image 
                  src="/images/logo.png" 
                  alt="Hindis Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Pioneering quality foundational learning in Somalia. Together, we are building a future of competence, productivity, and compassion.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-brand-sand flex items-center justify-center text-brand-teal hover:bg-brand-teal hover:text-white transition-all shadow-sm">
                <InstagramIcon />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-brand-sand flex items-center justify-center text-brand-teal hover:bg-brand-teal hover:text-white transition-all shadow-sm">
                <TwitterIcon />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-brand-sand flex items-center justify-center text-brand-teal hover:bg-brand-teal hover:text-white transition-all shadow-sm">
                <FacebookIcon />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-8">
            <h4 className="font-display font-bold text-gray-900 mb-6 font-bold">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">About Us</Link></li>
              <li><Link href="/team" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Our Team</Link></li>
              <li><Link href="/projects" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Our Projects</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Services</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">FAQ</Link></li>
              <li><Link href="/publication" className="text-gray-600 hover:text-brand-teal text-sm transition-colors">Publication</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-display font-bold text-gray-900 mb-6 font-bold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-teal shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">Mogadishu, Somalia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-teal shrink-0" />
                <span className="text-gray-600 text-sm">+252 615 XXX XXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-teal shrink-0" />
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
