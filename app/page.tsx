import Profile from "@/components/pages/home/profile";
import ProjectItem from "@/components/pages/project/main";
import HandDrawnArrow from "@/components/ui/hand-drawn-arrow";
import Section from "@/components/ui/section";
import PAGES from "@/config/seo";
import { getAllProjectsFilteredByOrder } from "@/lib/mdx";
import { getBaseUrl } from "@/lib/utils";
import { ProjectType } from "@/types";
import { Metadata } from "next";

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
  const projects: ProjectType[] = await getAllProjectsFilteredByOrder({
    featured: true,
  });
  return (
    <Section id="home">
      <Profile className="mb-8" />
      <section id="selected-projects" className="relative">
        {projects.map((project, index) => (
          <div key={index} className="relative mx-auto max-w-5xl">
            <ProjectItem project={project} />
            {projects.length !== index + 1 && (
              <HandDrawnArrow className="mx-auto my-6 size-20 text-center text-gray-300" />
            )}
          </div>
        ))}
      </section>
    </Section>
  );
}
