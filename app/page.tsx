import Profile from "@/components/pages/home/profile";
import VerticalLine from "@/components/pages/home/profile/vertical-line";
import SingleProjectItem from "@/components/pages/projects/single-project-item";
import profileConfig from "@/config/pages/profile";
import projectConfig from "@/config/pages/projects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const length = projectConfig.length;
  return (
    <>
      <Profile profile={profileConfig} />
      <section id="selected-projects" className="relative mb-8 sm:mb-10">
        {projectConfig.map((project, index) => (
          <React.Fragment key={index}>
            <SingleProjectItem project={project} />
            {length !== index + 1 && <VerticalLine />}
          </React.Fragment>
        ))}
      </section>
    </>
  );
}
