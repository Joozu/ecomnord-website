import { MetadataRoute } from "next";
import { getAllPostsForSitemap, getAllCasesForSitemap } from "@/lib/wordpress";
import { siteConfig } from "@/site.config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, cases] = await Promise.all([
    getAllPostsForSitemap(),
    getAllCasesForSitemap(),
  ]);

  const staticUrls: MetadataRoute.Sitemap = [
    { url: siteConfig.site_domain, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.site_domain}/cases`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.site_domain}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.site_domain}/priser`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.site_domain}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteConfig.site_domain}/kontakt`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];

  const caseUrls: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${siteConfig.site_domain}/cases/${c.slug}`,
    lastModified: new Date(c.modified),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.site_domain}/blog/${post.slug}`,
    lastModified: new Date(post.modified),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticUrls, ...caseUrls, ...postUrls];
}
