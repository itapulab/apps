import { MetadataRoute } from "next";

export const revalidate = 86400; // 24 hours in seconds

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://itapulab.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
