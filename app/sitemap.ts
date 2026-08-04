import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sakshi-portfolio-beryl.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://sakshi-portfolio-beryl.vercel.app/work/aurra",
      lastModified: new Date(),
    },
  ];
}