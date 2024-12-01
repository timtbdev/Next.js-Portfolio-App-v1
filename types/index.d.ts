export type PostType = {
  id: number;
  title: string;
  image: ImageType;
  content: ContentType[];
};

export type ContentType = {
  text: string;
  image?: ImageType;
  url?: UrlType;
};

export type ImageType = {
  src: string;
  alt: string;
};

export type UrlType = {
  link: string;
  text: string;
  external: boolean;
};

export type ProfileConfigType = {
  title: string;
  image: ImageType;
  content: ContentType[];
};

export type AboutMeConfigType = {
  image: ImageType;
  content: ContentType[];
};
