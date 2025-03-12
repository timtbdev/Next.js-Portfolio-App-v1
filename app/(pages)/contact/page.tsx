import Content from "@/components/body/content";
import Heading from "@/components/body/heading";
import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import SocialAccountButton from "@/components/pages/contact/social-account-button";
import Card from "@/components/ui/card";
import MainTitle from "@/components/ui/main-title";
import PAGES from "@/config/seo";
import { socialConfigs } from "@/config/social";
import { getBaseUrlWithSlug, shimmer, toBase64 } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
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
      <Header />
      <Heading type="default">
        <MainTitle
          title={seo?.name || "Default Title"}
          description={seo?.description}
          className="mx-auto mt-6 mb-14 max-w-3xl px-4 sm:px-6 lg:px-8"
        />
      </Heading>
      <Content>
        <div className="relative mx-auto -mt-12 max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="mx-auto py-6 sm:py-8">
              <div>
                <div className="text-center">
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    className="mx-auto size-24 rounded-full shadow-md ring-1 ring-gray-300"
                    placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(96, 96))}`}
                    width={96}
                    height={96}
                  />
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
        </div>
      </Content>
      <Footer />
    </Fragment>
  );
}
