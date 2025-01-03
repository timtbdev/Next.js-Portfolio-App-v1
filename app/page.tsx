import Profile from "@/components/pages/home/profile/main";
import SingleProjectItem from "@/components/pages/projects/single-project-item/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tim | Home",
  description: "Android Developer in the Bay Area",
};

export default async function HomePage() {
  return (
    <>
      <Profile />
      <section id="selected-projects">
        <SingleProjectItem />
      </section>
    </>
  );
}
