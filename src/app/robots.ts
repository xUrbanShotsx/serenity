import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://thecoastal.com.au/sitemap.xml",
    host: "https://thecoastal.com.au",
  };
}
