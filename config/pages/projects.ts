import { ProjectType } from "types";

const projectConfig: ProjectType[] = [
  {
    id: 1,
    title: "Portfolio App 2.0",
    description:
      "This portfolio app, built with Kotlin and Jetpack, uses MVVM, Room, and Coroutines for efficient offline and network syncing.",
    slug: "portfolio-app-2",
    created_at: "September 2019",
    url: "https://github.com/timtbdev/Portfolio-App-2",
    screenshots: [
      "/images/projects/portfolio-02/screen-01.png",
      "/images/projects/portfolio-02/screen-02.png",
      "/images/projects/portfolio-02/screen-03.png",
    ],
  },
  {
    id: 2,
    title: "Portfolio App 1.0",
    description:
      "Portfolio App 1.0 is a simple Java-based Android app I created to show my skills and love for Android development. It’s built with standard SDK APIs and uses the MVC architecture.",
    slug: "portfolio-app-1",
    created_at: "June 2019",
    url: "https://github.com/timtbdev/Portfolio-App-1",
    screenshots: [
      "/images/projects/portfolio-01/screen-01.png",
      "/images/projects/portfolio-01/screen-02.png",
      "/images/projects/portfolio-01/screen-03.png",
    ],
  },
];

export default projectConfig;
