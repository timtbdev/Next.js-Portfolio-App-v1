import { ProfileConfigType } from "@/types";

const profileConfig: ProfileConfigType = {
  title: "Hello, I'm Tim.",
  image: {
    src: "/images/profile_image.jpg",
    alt: "Profile Image",
  },
  content: [
    {
      text: "I’m an Android developer in the Bay Area. I got into app development back in 2013 using Java and XML. Those early apps weren’t big hits, but they taught me a lot. In 2017, I switched to Kotlin and Jetpack Components, and one of my apps got featured by a popular Android YouTuber. Now I focus on Jetpack Compose. I have a Computer Science degree, speak English, German, and Mongolian, and enjoy running when I’m not coding.",
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
