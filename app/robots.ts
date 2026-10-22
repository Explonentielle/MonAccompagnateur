import type { MetadataRoute } from "next";
import { defaultConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${defaultConfig.siteUrl}/sitemap.xml`,
  };
}
