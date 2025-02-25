import SocialAccountButton from "@/components/contact/social-account-button";
import {
  AvatarFallback,
  AvatarImage,
  Avatar as AvatarWrapper,
} from "@/components/ui/avatar";
import Card from "@/components/ui/card";
import MainTitle from "@/components/ui/main-title";
import PAGES from "@/config/seo";
import { socialConfigs } from "@/config/social";
import { getBaseUrlWithSlug } from "@/lib/utils";
import { Metadata } from "next";
import { Fragment } from "react";

const PAGE = "contact";

// SEO Configuration
const seo = PAGES.find((page) => page.name === PAGE);

if (!seo) {
  throw new Error(`SEO configuration for '${PAGE}' page not found`);
}

// Metadata Configuration
export const metadata: Metadata = {
  title: seo?.title,
  description: seo?.description,
  alternates: {
    canonical: getBaseUrlWithSlug(PAGE),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: getBaseUrlWithSlug(PAGE),
    title: seo?.title,
    description: seo?.description,
    images: [
      {
        url: seo?.openGraphImageUrl || "Default Open Graph Image URL",
        width: 1200,
        height: 630,
        alt: seo?.title,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo?.title,
    description: seo?.description,
    site: seo?.author?.twitterAddress,
    images: [
      {
        url: seo?.twitterImageUrl || "Default Twitter Image URL",
        width: 1200,
        height: 675,
        alt: seo?.title,
        type: "image/png",
      },
    ],
    creator: seo?.author?.twitterAddress,
  },
};

export default async function ContactPage() {
  const title = "Contact";
  const description = "Please feel free to reach out to me.";
  const imageUrl = "/images/logo.png";
  const imageAlt = "Avatar";
  const initials = "TB";
  return (
    <Fragment>
      <MainTitle
        title={seo?.name || "Default Title"}
        description={seo?.description}
      />
      <Card>
        <div className="mx-auto py-6 sm:py-8">
          <div>
            <div className="text-center">
              <AvatarWrapper className="mx-auto size-24 rounded-full shadow-md ring-1 ring-gray-300 dark:ring-zinc-700">
                <AvatarImage src={imageUrl} alt={imageAlt} />
                <AvatarFallback>{initials}</AvatarFallback>
              </AvatarWrapper>
              <h2 className="mt-4 text-2xl font-bold text-gray-800 dark:text-zinc-400">
                {title}
              </h2>
              <p className="mt-2 text-base text-gray-600 dark:text-zinc-400">
                {description}
              </p>
            </div>
          </div>
          <ul
            role="list"
            className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {socialConfigs.map((item, index) => (
              <li key={index}>
                <SocialAccountButton social={item} />
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </Fragment>
  );
}
