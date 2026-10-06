const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

export const siteConfig = {
  name: "Hindis",
  title: "Hindis | Foundational Learning",
  description:
    "Hindis trains teachers and supplies books so children learn to read, write and count in their own language.",
  email: "info@hindis.so",
  phone: "+252 617 255 936",
  social: {
    instagram: "https://www.instagram.com/hindis__/",
    tiktok: "https://www.tiktok.com/@hindisedu",
    facebook: "https://www.facebook.com/people/Hindis/61556807271051/",
    linkedin: "https://www.linkedin.com/company/hindis",
  },
};
