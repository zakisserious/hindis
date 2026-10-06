import { Metadata } from "next";
import { notFound } from "next/navigation";
import PublicationClient from "./PublicationClient";
import { getPublication, publications } from "@/lib/publications";

export function generateStaticParams() {
  return publications.map((publication) => ({ slug: publication.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const publication = getPublication(slug);

  if (!publication) {
    return { title: "Publication not found" };
  }

  return {
    title: publication.title,
    description: publication.summary,
    openGraph: {
      title: publication.title,
      description: publication.summary,
      type: "article",
      images: [{ url: publication.cover }],
    },
  };
}

export default async function PublicationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const publication = getPublication(slug);

  if (!publication) {
    notFound();
  }

  return <PublicationClient publication={publication} />;
}
