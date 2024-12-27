import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/icons/layout/social";
import { SocialType } from "@/types";

const socialConfig: SocialType[] = [
  {
    id: 1,
    name: "X.com",
    username: "@timtbdev",
    href: "https://x.com/timtbdev",
    icon: TwitterIcon,
  },
  {
    id: 2,
    name: "GitHub",
    username: "timtbdev",
    href: "https://github.com/timtbdev",
    icon: GithubIcon,
  },
  {
    id: 3,
    name: "Facebook",
    username: "timtbaz",
    href: "https://www.facebook.com/timtbaz/",
    icon: FacebookIcon,
  },
  {
    id: 4,
    name: "Instagram",
    username: "tim_tbz",
    href: "https://www.instagram.com/tim_tbz/",
    icon: InstagramIcon,
  },
  {
    id: 5,
    name: "Youtube",
    username: "@timtbdev",
    href: "https://www.youtube.com/@timtbdev",
    icon: YoutubeIcon,
  },
];

export default socialConfig;
