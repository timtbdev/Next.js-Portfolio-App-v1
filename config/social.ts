import { SocialType } from "@/types";
import { getUrl } from "@/utils/helpers";
import { BiSolidUserRectangle as ResumeIcon } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { RiMailSendFill as EmailIcon } from "react-icons/ri";

export const socialConfigs: SocialType[] = [
  {
    id: 1,
    name: "Email",
    username: "Send email",
    tooltip: "Send me an email",
    href: "mailto:timtb.dev@gmail.com",
    icon: EmailIcon,
  },
  {
    id: 2,
    name: "Resume",
    username: "View resume",
    tooltip: "Download my resume",
    href: getUrl("/files/resume.pdf"),
    icon: ResumeIcon,
  },
  {
    id: 3,
    name: "Twitter",
    username: "@timtbdev",
    tooltip: "Follow me on Twitter",
    href: "https://x.com/timtbdev",
    icon: FaTwitter,
  },

  {
    id: 4,
    name: "GitHub",
    username: "timtbdev",
    tooltip: "Check out my GitHub",
    href: "https://github.com/timtbdev",
    icon: FaGithub,
  },
  {
    id: 5,
    name: "LinkedIn",
    username: "timtbdev",
    tooltip: "Connect with me on LinkedIn",
    href: "https://www.linkedin.com/in/timtbdev/",
    icon: FaLinkedin,
  },
  {
    id: 6,
    name: "Facebook",
    username: "timtbaz",
    tooltip: "Connect with me on Facebook",
    href: "https://www.facebook.com/timtbaz/",
    icon: FaFacebook,
  },
];
