import { ProjectType } from "types";

const projectConfig: ProjectType[] = [
  {
    id: 1,
    title: "Portfolio App 2.0",
    category: "Android",
    youtubeUrl: "https://www.youtube.com/watch?v=YjVJyqcv5I8",
    description:
      "This portfolio app, built with Kotlin and Jetpack, uses MVVM, Room, and Coroutines for efficient offline and network syncing.",
    slug: "portfolio-app-2",
    created_at: "September 2019",
    url: "https://github.com/timtbdev/Portfolio-App-2",
    screenshots: [
      "/images/projects/portfolio-02/screen-01.jpg",
      "/images/projects/portfolio-02/screen-02.jpg",
      "/images/projects/portfolio-02/screen-03.jpg",
      "/images/projects/portfolio-02/screen-04.jpg",
    ],
  },
  {
    id: 2,
    title: "Fullstack Blog App",
    category: "Next.js",
    youtubeUrl: "https://www.youtube.com/watch?v=Xht7srEWZ1o",
    description:
      "Multi-User, Full-stack blogging application built with Next.js and Supabase. It uses serverless functions, authentication, and real-time data.",
    slug: "next.js-blog-app",
    created_at: "June 2023",
    url: "https://github.com/timtbdev/Next.js-Blog-App",
    screenshots: [
      "/images/projects/blog-app/screen-01.jpg",
      "/images/projects/blog-app/screen-02.jpg",
      "/images/projects/blog-app/screen-03.jpg",
      "/images/projects/blog-app/screen-04.jpg",
    ],
  },
  {
    id: 3,
    title: "Portfolio App 1.0",
    category: "Android",
    youtubeUrl: "https://www.youtube.com/watch?v=j56fSGqF7Ho",
    description:
      "Portfolio App 1.0 is a simple Java-based Android app I created to show my skills and love for Android development. It’s built with standard SDK APIs and uses the MVC architecture.",
    slug: "portfolio-app-1",
    created_at: "June 2019",
    url: "https://github.com/timtbdev/Portfolio-App-1",
    screenshots: [
      "/images/projects/portfolio-01/screen-01.jpg",
      "/images/projects/portfolio-01/screen-02.jpg",
    ],
  },
];

export default projectConfig;
