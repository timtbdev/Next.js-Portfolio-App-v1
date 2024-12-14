import {
  CodeIcon,
  FileTextIcon,
  HomeIcon,
  Icon,
  MailIcon,
  UserIcon,
} from "lucide-react";
import React from "react";

type MenuType = {
  id: number;
  title: string;
  slug: string;
  icon: React.FC<{ className?: string }>;
};

const menuConfig: MenuType[] = [
  {
    id: 1,
    title: "Home",
    slug: "/",
    icon: HomeIcon,
  },
  {
    id: 2,
    title: "About",
    slug: "/about",
    icon: UserIcon,
  },
  {
    id: 3,
    title: "Projects",
    slug: "/projects",
    icon: CodeIcon,
  },
  {
    id: 3,
    title: "Blog",
    slug: "/blog",
    icon: FileTextIcon,
  },
  {
    id: 4,
    title: "Contact",
    slug: "/contact",
    icon: MailIcon,
  },
];

export default menuConfig;
