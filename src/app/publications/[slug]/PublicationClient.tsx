"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import {
  ArrowLeft,
  Download,
  Eye,
  Quote as QuoteIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Publication } from "@/lib/publications";

const DownloadButton = ({
  href,
  label,
  primary = false,
}: {
  href: string;
  label: string;
  primary?: boolean;
}) => (
  <a
    href={href}
    download
    className={
      primary
        ? "inline-flex items-center gap-3 bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:bg-brand-blue/90 transition-all shadow-lg hover:-translate-y-0.5"
        : "inline-flex items-center gap-3 bg-white text-brand-blue border border-brand-blue/20 px-8 py-4 rounded-full font-bold hover:bg-brand-sand transition-all shadow-sm hover:-translate-y-0.5"
    }
  >
    <Download size={20} />
    {label}
  </a>
);

const EditorialRows = ({ items }: { items: { title: string; body: string }[] }) => (
  <div className="divide-y divide-brand-sand border-t border-brand-sand">
    {items.map((item) => (
      <motion.div
        key={item.title}
        className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-2 py-8"
      >
        <h3 className="md:col-span-5 text-lg font-display font-bold text-gray-900 text-pretty">
          {item.title}
        </h3>
        <p className="md:col-span-7 text-gray-600 leading-relaxed">{item.body}</p>
      </motion.div>
    ))}
  </div>
);

const ItemGrid = ({ items }: { items: { title: string; body: string }[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
    {items.map((item) => (
      <motion.div
        key={item.title}
      >
        <h3 className="text-lg font-display font-bold text-gray-900 mb-2 text-pretty">
          {item.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm max-w-[60ch]">{item.body}</p>
      </motion.div>
    ))}
  </div>
);

const RecommendationColumns = ({
  groups,
}: {
  groups: { heading: string; items: { title: string; body: string }[] }[];
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
    {groups.map((group) => (
      <div key={group.heading}>
        <h3 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-6 pb-3 border-b border-brand-sand">
          {group.heading}
        </h3>
        <ol className="space-y-7">
          {group.items.map((item, idx) => (
            <motion.li
              key={item.title}
              className="flex gap-4"
            >
              <span className="text-sm font-display font-extrabold text-brand-blue/30 pt-0.5 tabular-nums">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="font-display font-bold text-gray-900 mb-1.5 leading-snug text-pretty">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    ))}
  </div>
);

export default function PublicationClient({
  publication,
}: {
  publication: Publication;
}) {
  const { files, stats, overview, quote, sections, gallery } = publication;
  const preview = files[0];
  const findings = sections.filter((section) => section.kind === "findings");
  const recommendations = sections.filter(
    (section) => section.kind === "recommendations"
  );

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO --- */}
      <section className="pt-32 md:pt-40 pb-16 px-6 bg-brand-sand/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 -skew-x-12 transform origin-top translate-x-20" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft size={16} />
            All research and resources
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-brand-blue text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                {publication.type}
              </span>
              <span className="text-sm text-gray-500">{publication.dateLabel}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-6 leading-tight text-pretty">
              {publication.title}
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-pretty mb-8">
              {publication.subtitle}
            </p>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
              {publication.partner}
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- COVER --- */}
      <div className="max-w-6xl mx-auto px-6 -mt-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src={publication.cover}
            alt={publication.coverAlt}
            fill
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* --- STATS --- */}
      <section className="py-20 bg-brand-blue relative overflow-hidden mt-20">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-extrabold text-white mb-3">
                  {stat.value}
                </div>
                <p className="text-brand-sand/80 text-xs font-bold uppercase tracking-widest leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OVERVIEW --- */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-10 text-pretty">
            Overview
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-pretty">
            {overview.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {quote && (
            <motion.blockquote
              className="mt-14 p-8 md:p-10 bg-brand-sand/50 rounded-2xl"
            >
              <QuoteIcon size={28} className="text-brand-blue/30 mb-4" />
              <p className="text-xl md:text-2xl font-display italic text-gray-800 leading-relaxed mb-4">
                &ldquo;{quote.text}&rdquo;
              </p>
              <footer className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                {quote.attribution}
              </footer>
            </motion.blockquote>
          )}
        </div>
      </Section>

      {/* --- GALLERY --- */}
      {gallery && gallery.length > 0 && (
        <Section className="bg-white pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gallery.map((image) => (
              <motion.figure
                key={image.src}
                className="group"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <figcaption className="mt-4 text-sm text-gray-500 leading-relaxed">
                  {image.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </Section>
      )}

      {/* --- FINDINGS --- */}
      {findings.map((section, sIdx) => {
        // Alternate the treatment so two findings sections never share a layout.
        const asGrid = sIdx % 2 === 1;
        return (
          <Section
            key={section.heading}
            className={asGrid ? "bg-brand-sand/40" : "bg-white"}
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4 text-pretty">
                {section.heading}
              </h2>
              {section.intro && (
                <p className="text-gray-500 text-lg mb-12 max-w-[65ch]">
                  {section.intro}
                </p>
              )}
              {asGrid ? (
                <ItemGrid items={section.items} />
              ) : (
                <EditorialRows items={section.items} />
              )}
            </div>
          </Section>
        );
      })}

      {/* --- RECOMMENDATIONS --- */}
      {recommendations.length > 0 && (
        <Section className="bg-white">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4 text-pretty">
              Recommendations
            </h2>
            <p className="text-gray-500 text-lg max-w-[65ch]">
              {recommendations.length > 1
                ? "Strengthening Somalia's teaching profession requires coordinated action across institutions, not action by the faculty alone."
                : recommendations[0].intro}
            </p>
          </div>

          {recommendations.length === 1 ? (
            <div className="max-w-5xl">
              <EditorialRows items={recommendations[0].items} />
            </div>
          ) : (
            <RecommendationColumns groups={recommendations} />
          )}
        </Section>
      )}

      {/* --- READ THE DOCUMENT --- */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4 text-pretty">
              Read the document
            </h2>
            <p className="text-gray-500 text-lg">
              Download the full publication or read it inline.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {files.map((file, idx) => (
              <DownloadButton
                key={file.file}
                href={file.file}
                label={file.label}
                primary={idx === 0}
              />
            ))}
          </div>

          <div className="bg-gray-50 rounded-3xl overflow-hidden border-4 border-brand-sand shadow-xl aspect-[4/5] md:aspect-[4/3] relative">
            <iframe
              src={`${preview.file}#toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-full border-none"
              title={publication.title}
            />
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold text-gray-500 shadow-sm">
              <Eye size={14} />
              Document Preview
            </div>
          </div>
        </div>
      </Section>

      {/* --- BACK TO HUB --- */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="/resources"
            className="inline-flex items-center gap-3 text-brand-blue font-bold hover:gap-4 transition-all"
          >
            <ArrowLeft size={18} />
            Back to all research and resources
          </Link>
        </div>
      </section>
    </div>
  );
}
