import { ContentType } from "types";

const aboutContentShort: ContentType = {
  title: "Hello, I'm Tim.",
  image: {
    src: "/images/profile_image.jpg",
    alt: "Profile Image",
  },
  url: {
    link: "/about",
    text: "Learn more",
  },
  text: [
    "I’m an Android developer in the Bay Area who loves building modern, user-friendly apps. I started my journey in app development in 2013 using Java and XML and later transitioned to Kotlin and Jetpack Compose. I’ve published two apps on the Google Play Store, and one was featured by a popular Android YouTuber.",
    "I have a Computer Science degree, speak English, German, and Mongolian, and enjoy running when I’m not coding.",
  ],
};

export default aboutContentShort;
