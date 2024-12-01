import { PostType } from "@/types";

const projectConfig: PostType[] = [
  {
    id: 1,
    title: "Portfolio App 2.0",
    image: {
      src: "/images/portfolio_app_2_0.jpg",
      alt: "Screenshot of Portfolio App 2.0",
    },
    content: [
      {
        text: "This portfolio app showcases my Android development skills and passion. It’s built with Kotlin, using Android Jetpack, Material Design, and Firebase, along with libraries like Retrofit, OkHttp, Glide, LeakCanary, and Koin.",
      },
      {
        text: "The app follows the MVVM architecture for clean and maintainable code. It works offline by loading data from a local Room database and syncing with the network when needed. I also added smart features like efficient API syncing and seamless data handling with Coroutines. The code is available on GitHub",
        url: {
          link: "https://github.com/timtbdev/Portfolio-App-2",
          text: "Learn more",
          external: true,
        },
      },
    ],
  },
  {
    id: 2,
    title: "Portfolio App 1.0",
    image: {
      src: "/images/portfolio_app_1_0.jpg",
      alt: "Screenshot of Portfolio App 1.0",
    },
    content: [
      {
        text: "Portfolio App 1.0 is a Java-based Android application that fetches content from a REST API, follows the MVC architecture for clean organization, and uses libraries like Retrofit for API calls, OkHttp for networking, and Glide for smooth image handling.",
      },
      {
        text: "It also integrates Firebase Analytics to track user activity and Crashlytics to monitor and fix any issues. The project is open source and available on GitHub.",
        url: {
          link: "https://github.com/timtbdev/Portfolio-App-1",
          text: "Learn more",
          external: true,
        },
      },
    ],
  },
];

export default projectConfig;
