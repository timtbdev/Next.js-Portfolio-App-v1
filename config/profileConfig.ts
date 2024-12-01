import { ProfileConfigType } from "@/types";

const profileConfig: ProfileConfigType = {
  title: "Hello, I'm Tim.",
  image: {
    src: "/images/profile_image.jpg",
    alt: "Profile Image",
  },
  content: [
    {
      text: "I’m an Android developer based in the San Francisco Bay Area. Back in 2013, I left my corporate job to learn Android app development and built my first two apps using Java and XML. They didn’t really take off, but it was a great learning experience.",
    },
    {
      text: "In 2017, I decided to start fresh, picked up Kotlin and Jetpack Components, and built two more apps. One of them was even featured by a popular Android YouTuber on his channel, which really inspired me to keep going and improving. Now I’m focused on Jetpack Compose and building apps with modern architecture.",
    },
    {
      text: "I have a degree in Computer Science, speak English, German, and Mongolian, and enjoy running when I’m not coding.",
    },
    {
      text: "Contact: timtb.dev@gmail.com",
      url: {
        link: "/about",
        text: "Learn more",
        external: false,
      },
    },
  ],
};

export default profileConfig;
