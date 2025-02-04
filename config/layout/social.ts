import { SocialType } from "@/types";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const socialConfigs: SocialType[] = [
  {
    id: 1,
    name: "Twitter",
    username: "@timtbdev",
    href: "https://x.com/timtbdev",
    icon: FaTwitter,
  },
  {
    id: 2,
    name: "GitHub",
    username: "timtbdev",
    href: "https://github.com/timtbdev",
    icon: FaGithub,
  },
  {
    id: 3,
    name: "Facebook",
    username: "timtbaz",
    href: "https://www.facebook.com/timtbaz/",
    icon: FaFacebook,
  },
  {
    id: 4,
    name: "LinkedIn",
    username: "timtbdev",
    href: "https://www.linkedin.com/in/timtbdev/",
    icon: FaLinkedin,
  },
  {
    id: 5,
    name: "Youtube",
    username: "@timtbdev",
    href: "https://www.youtube.com/@timtbdev",
    icon: FaYoutube,
  },
];
