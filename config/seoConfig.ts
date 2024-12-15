// This file contains the core meta data for the application
const seoConfig: SeoConfigType = {
  title: "Tim | Android Developer",
  subTitle: "Welcome to my portfolio",
  author: {
    name: "Tim Baz",
    twitterUrl: "https://x.com/timtbdev",
    twitterAddress: "@timtbdev",
  },
  description:
    "Tim is a Android developer based in San Francisco Bay Area, California.",
  keywords: [
    "Tumur Bazarragchaa, Tim Baz, Android developer, Android development, Android app development, Android software engineer, Hire Android developer, Freelance Android developer, Custom Android app development, Android development company, Android app design and development, Native Android app solutions, Full-stack Android development, Enterprise Android development, Professional Android developer for hire, End-to-end Android application development services, How to choose the best Android development company, User-friendly Android UI/UX design and development, Scalable Android apps for startups and enterprises, Android app maintenance and support services, Kotlin Android developer, Java-based Android apps, Android Jetpack libraries, MVVM architecture for Android, Android SDK integration, Android app testing and QA, E-commerce Android app development, Healthcare Android application solutions, On-demand services Android apps, Educational Android mobile apps, Fintech Android development, Android developer in San-Francisco Bay Area, Top Android development services in San-Francisco Bay Area, Best Android app development company near me, Modern Android development with Jetpack, Jetpack Compose for Android, Compose Material 3 (Material You) design, Jetpack Navigation, Android Jetpack WorkManager, Jetpack Compose UI testing, State management in Jetpack Compose, Kotlin Coroutines, Kotlin Flow, Reactive programming with Kotlin, Kotlin Multiplatform Mobile (KMM), Dependency injection with Hilt, Android architecture components (ViewModel, LiveData, Room), MVVM architecture with Kotlin, Gradle build optimization for Android, Continuous Integration (CI) for Android apps, Android app performance optimization, Multi-module Android project architecture, Automated testing for Android (Espresso, JUnit), Firebase integration for Android, Google Play App Bundle, Serverless backend for Android (Firebase Functions), APIs integration in Android apps, Push notifications setup for Android, Android Machine Learning Kit, Android App Bundles and Instant Apps, Android data binding vs. view binding, Compose vs. XML layouts, Design patterns for modern Android apps, Material Design 3 best practices, Advanced Android development techniques, Android modularization architecture, Jetpack Compose vs traditional Android UI, Best practices for scalable Android apps, UI/UX innovation with Android Compose",
  ],
  tags: [
    "Tumur Bazarragchaa",
    "Tim Baz",
    "Android developer",
    "Android development",
    "Android app development",
    "Android software engineer",
    "Hire Android developer",
    "Freelance Android developer",
    "Custom Android app development",
    "Android development company",
    "Android app design and development",
    "Native Android app solutions",
    "Full-stack Android development",
    "Enterprise Android development",
    "Professional Android developer for hire",
    "End-to-end Android application development services",
    "How to choose the best Android development company",
    "User-friendly Android UI/UX design and development",
    "Scalable Android apps for startups and enterprises",
    "Android app maintenance and support services",
    "Kotlin Android developer",
    "Java-based Android apps",
    "Android Jetpack libraries",
    "MVVM architecture for Android",
    "Android SDK integration",
    "Android app testing and QA",
    "E-commerce Android app development",
    "Healthcare Android application solutions",
    "On-demand services Android apps",
    "Educational Android mobile apps",
    "Fintech Android development",
    "Android developer in San-Francisco Bay Area",
    "Top Android development services in San-Francisco Bay Area",
    "Best Android app development company near me",
    "Modern Android development with Jetpack",
    "Jetpack Compose for Android",
    "Compose Material 3 (Material You) design",
    "Jetpack Navigation",
    "Android Jetpack WorkManager",
    "Jetpack Compose UI testing",
    "State management in Jetpack Compose",
    "Kotlin Coroutines",
    "Kotlin Flow",
    "Reactive programming with Kotlin",
    "Kotlin Multiplatform Mobile (KMM)",
    "Dependency injection with Hilt",
    "Android architecture components (ViewModel, LiveData, Room)",
    "MVVM architecture with Kotlin",
    "Gradle build optimization for Android",
    "Continuous Integration (CI) for Android apps",
    "Android app performance optimization",
    "Multi-module Android project architecture",
    "Automated testing for Android (Espresso, JUnit)",
    "Firebase integration for Android",
    "Google Play App Bundle",
    "Serverless backend for Android (Firebase Functions)",
    "APIs integration in Android apps",
    "Push notifications setup for Android",
    "Android Machine Learning Kit",
    "Android App Bundles and Instant Apps",
    "Android data binding vs. view binding",
    "Compose vs. XML layouts",
    "Design patterns for modern Android apps",
    "Material Design 3 best practices",
    "Advanced Android development techniques",
    "Android modularization architecture",
    "Jetpack Compose vs traditional Android UI",
    "Best practices for scalable Android apps",
    "UI/UX innovation with Android Compose",
  ],
};

// Type for seo data
export type SeoConfigType = {
  title: string;
  subTitle: string;
  author: { name: string; twitterUrl: string; twitterAddress: string };
  description: string;
  keywords: Array<string>;
  tags: Array<string>;
};

export default seoConfig;
