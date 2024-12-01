import { GithubIcon, LinkedInIcon, XIcon } from "@/icons/";

type SocialType = {
  id: number;
  name: string;
  href: string;
  icon: React.FC<{ className?: string }>;
};

const socialConfig: SocialType[] = [
  {
    id: 1,
    name: "Twitter",
    href: "https://twitter.com/timtbdev",
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
];

export default socialConfig;
