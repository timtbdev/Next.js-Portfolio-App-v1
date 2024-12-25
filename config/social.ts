import { SocialType } from "@/types";
import {
  GithubIcon,
  Play as GoogleIcon,
  LinkedinIcon as LinkedInIcon,
  Twitter as XIcon,
} from "lucide-react";

const socialConfig: SocialType[] = [
  {
    id: 1,
    name: "X.com",
    href: "https://x.com/timtbdev",
    icon: XIcon,
  },
  {
    id: 2,
    name: "GitHub",
    href: "https://github.com/timtbdev",
    icon: GithubIcon,
  },
  {
    id: 3,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/timtbdev/",
    icon: LinkedInIcon,
  },
  {
    id: 4,
    name: "Google Play",
    href: "https://play.google.com/store/apps/developer?id=timtbdev",
    icon: GoogleIcon,
  },
];

export default socialConfig;
