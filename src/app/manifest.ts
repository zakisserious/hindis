import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#EDF6F9",
    theme_color: "#183557",
    icons: [
      {
        src: "/images/hindis-favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],
  };
}
