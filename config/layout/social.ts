import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
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
    name: "LinkedIn",
    username: "timtbdev",
    href: "https://www.linkedin.com/in/timtbdev/",
    icon: LinkedinIcon,
  },
  {
    id: 4,
    name: "Facebook",
    username: "timtbaz",
    href: "https://www.facebook.com/timtbaz/",
    icon: FacebookIcon,
  },
  {
    id: 5,
    name: "Instagram",
    username: "tim_tbz",
    href: "https://www.instagram.com/tim_tbz/",
    icon: InstagramIcon,
  },
  {
    id: 6,
    name: "Youtube",
    username: "@timtbdev",
    href: "https://www.youtube.com/@timtbdev",
    icon: YoutubeIcon,
  },
];

export default socialConfig;
