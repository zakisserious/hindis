import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { publications } from "@/lib/publications";

const routes = [
  "",
  "/about",
  "/team",
  "/projects",
  "/services",
  "/faq",
  "/publication",
  "/resources",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const publicationPages: MetadataRoute.Sitemap = publications.map((publication) => ({
    url: `${siteUrl}/publications/${publication.slug}`,
    lastModified: new Date(publication.date),
    changeFrequency: "yearly",
    priority: 0.9,
  }));

  return [...pages, ...publicationPages];
}
