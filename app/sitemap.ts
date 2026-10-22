import type { MetadataRoute } from "next";
import { defaultConfig } from "@/lib/site-config";

const routes: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/partenaires", priority: 0.7, changeFrequency: "monthly" },
  { path: "/devenir-accompagnateur", priority: 0.7, changeFrequency: "monthly" },
  { path: "/mentions-legales", priority: 0.2, changeFrequency: "yearly" },
  { path: "/confidentialite", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${defaultConfig.siteUrl}${path}`,
    changeFrequency,
    priority,
  }));
}
