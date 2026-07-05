import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.baseUrl;
  const now = new Date();
  const routes = [
    "",
    "/hakkimizda",
    "/sss",
    "/iletisim",
    "/gizlilik-politikasi",
    "/kvkk",
    "/kullanim-sartlari",
  ];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.6,
  }));
}
