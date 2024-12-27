import { ContentType } from "types";

const projectContent: ContentType[] = [
  {
    id: 1,
    title: "Portfolio App 2.0",
    image: {
      src: "/images/portfolio_app_2_0.jpg",
      alt: "Screenshot of Portfolio App 2.0",
    },
    url: {
      link: "https://github.com/timtbdev/Portfolio-App-2",
      text: "Learn more",
    },
    text: [
      "This portfolio app, built with Kotlin and Jetpack, uses MVVM, Room, and Coroutines for efficient offline and network syncing. It features Material Design and libraries like Retrofit and Glide. Code is on GitHub.",
    ],
  },
  {
    id: 2,
    title: "Portfolio App 1.0",
    image: {
      src: "/images/portfolio_app_1_0.jpg",
      alt: "Screenshot of Portfolio App 1.0",
    },
    url: {
      link: "https://github.com/timtbdev/Portfolio-App-1",
      text: "Learn more",
    },
    text: [
      "Portfolio App 1.0 is a Java-based Android app that fetches content from a REST API using Retrofit, OkHttp, and Glide. It follows the MVC architecture for clean organization and includes Firebase Analytics and Crashlytics for tracking and issue monitoring. The project is open source on GitHub.",
    ],
  },
];

export default projectContent;
