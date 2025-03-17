import Celebration from "@/components/body/celebration";
import Content from "@/components/body/content";
import Heading from "@/components/body/heading";
import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Profile from "@/components/pages/home/profile";
import ProjectItem from "@/components/pages/project/main";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import PAGES from "@/config/seo";
import { getBaseUrl } from "@/lib/utils";
import { ProjectType } from "@/types";
import { allProjects } from "content-collections";
import { Metadata } from "next";
import { Fragment } from "react";

const PAGE = "home";

// SEO Configuration
const seo = PAGES.find((page) => page.name === PAGE);

if (!seo) {
  throw new Error(`SEO configuration for '${PAGE}' page not found`);
}

// Metadata Configuration
export const metadata: Metadata = {
  title: seo?.title || "Looking for the Best Frontend Developer? | Hire Tim",
  description:
    seo?.description ||
    "Hire Tim – A Skilled Frontend Developer for Fast, Reliable, and High-Performing Web Applications!",
  alternates: {
    canonical: getBaseUrl(),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function HomePage() {
  const projects: ProjectType[] = allProjects
    .filter((project) => project.featured === true)
    .sort((a, b) => a.order - b.order);

  return (
    <Fragment>
      <Header />
      <Celebration />
      <Heading type="home">
        <Profile className="z-10 mt-8 mb-14" />
      </Heading>
      <Content>
        <div className="relative mx-auto -mt-12 max-w-3xl px-4 sm:px-6 lg:px-8">
          {projects.map((project, index) => (
            <div key={index} className="mb-8">
              <ProjectItem project={project} />
            </div>
          ))}
        </div>
      </Content>
      <Footer />
      <ScrollToTopButton />
    </Fragment>
  );
}
