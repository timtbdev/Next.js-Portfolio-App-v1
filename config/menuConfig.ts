import React from "react";

type MenuType = {
  id: number;
  title: string;
  slug: string;
};

const menuConfig: MenuType[] = [
  {
    id: 1,
    title: "Home",
    slug: "/",
  },
  {
    id: 2,
    title: "About",
    slug: "/about",
  },
  {
    id: 3,
    title: "Projects",
    slug: "/projects",
  },
  {
    id: 3,
    title: "Blog",
    slug: "/blog",
  },
  {
    id: 4,
    title: "Contact",
    slug: "/contact",
  },
];

export default menuConfig;
