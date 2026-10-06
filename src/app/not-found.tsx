import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-brand-sand/30 min-h-[70vh] flex items-center px-6 py-32">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-20 h-20 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mx-auto mb-10">
          <Compass size={40} />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-gray-900 mb-8 text-pretty">
          This page could not be found
        </h1>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12 text-pretty">
          The page you are looking for may have moved, or the link may be out of date.
          Let us point you back towards our work.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:bg-brand-blue/90 transition-all shadow-lg hover:-translate-y-0.5"
          >
            Back to home
          </Link>
          <Link
            href="/resources"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all shadow-sm"
          >
            Browse our research
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
