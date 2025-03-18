import Content from "@/components/body/content";
import Heading from "@/components/body/heading";
import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import ProjectItem from "@/components/pages/project/main";
import MainTitle from "@/components/ui/main-title";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import PAGES from "@/config/seo";
import { getBaseUrlWithSlug } from "@/lib/utils";
import { ProjectType } from "@/types";
import { allProjects } from "content-collections";
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
        url: seo?.openGraphImageUrl,
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
        url: seo?.twitterImageUrl,
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
  const projects: ProjectType[] = allProjects.sort((a, b) => a.order - b.order);

  return (
    <Fragment>
      <Header />
      <Heading type="default">
        <MainTitle
          title={seo?.name || "Default Title"}
          description={seo?.description}
          className="mx-auto mt-6 mb-14 max-w-3xl px-4 sm:px-6 lg:px-8"
        />
      </Heading>
      <Content>
        <div className="relative mx-auto -mt-12 max-w-3xl px-4 sm:px-6 lg:px-8">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} className="mb-8" />
          ))}
        </div>
      </Content>
      <Footer />
      <ScrollToTopButton />
    </Fragment>
  );
}
