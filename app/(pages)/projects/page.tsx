import ProjectItem from "@/components/project/main";
import HandDrawnArrow from "@/components/ui/hand-drawn-arrow";
import MainTitle from "@/components/ui/main-title";
import PAGES from "@/config/seo";
import { getAllProjectsFilteredByOrder } from "@/lib/mdx";
import { getBaseUrlWithSlug } from "@/lib/utils";
import { ProjectType } from "@/types";
import { Metadata } from "next";
import React, { Fragment } from "react";

const PAGE = "projects";

// SEO Configuration
const seo = PAGES.find((page) => page.name === PAGE);

if (!seo) {
  throw new Error(`SEO configuration for '${PAGE}' page not found`);
}

// Metadata Configuration
export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: {
    canonical: getBaseUrlWithSlug(PAGE),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: getBaseUrlWithSlug(PAGE),
    title: seo?.title,
    description: seo?.description,
    images: [
      {
        url: seo?.openGraphImageUrl || "Default Open Graph Image URL",
        width: 1200,
        height: 630,
        alt: seo?.title,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo?.title,
    description: seo?.description,
    site: seo?.author?.twitterAddress,
    images: [
      {
        url: seo?.twitterImageUrl || "Default Twitter Image URL",
        width: 1200,
        height: 675,
        alt: seo?.title,
        type: "image/png",
      },
    ],
    creator: seo?.author?.twitterAddress,
  },
};

export default async function ProjectPage() {
  const projects: ProjectType[] = await getAllProjectsFilteredByOrder({
    featured: false,
  });
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <MainTitle
        title={seo?.name || "Default Title"}
        description={seo?.description}
      />
      {projects.map((project, index) => (
        <Fragment key={index}>
          <ProjectItem project={project} />
          {index !== projects.length - 1 && (
            <HandDrawnArrow className="mx-auto size-20 text-center text-gray-300 dark:text-zinc-600" />
          )}
        </Fragment>
      ))}
    </div>
  );
}
