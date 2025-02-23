import { getUrl } from "@/utils/helpers";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/private/",
      },
    ],
    sitemap: getUrl("sitemap.xml"),
  };
}
