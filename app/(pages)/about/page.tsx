import Content from "@/components/body/content";
import Heading from "@/components/body/heading";
import Card from "@/components/ui/card";
import MainTitle from "@/components/ui/main-title";
import PAGES from "@/config/seo";
import { getBaseUrlWithSlug } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";

const PAGE = "about";

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

export default async function AboutPage() {
  return (
    <Fragment>
      <Heading>
        <MainTitle
          title={seo?.name || "Default Title"}
          description={seo?.description}
          className="mx-auto mt-6 mb-12 max-w-3xl"
        />
      </Heading>
      <Content>
        <div className="relative mx-auto -mt-12 max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card className="mb-6">
            <div className="shrink-0">
              <Image
                title="Cover Image"
                alt="Cover Image"
                src="/images/cover.jpg"
                layout="responsive"
                width={1200}
                height={630}
                quality={100}
                className="h-128 w-full object-cover"
              />
            </div>
            <div className="relative mx-auto flex max-w-3xl flex-col px-8 pt-4 pb-6 text-pretty sm:px-14">
              <div className="flex items-center justify-start">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-800">
                  Why Hire Tim?
                </h2>
              </div>
              <article id="about-me" className="mt-2">
                <p className="text-lg text-gray-600">
                  <strong className="font-semibold text-black">
                    Tim is a Frontend Developer
                  </strong>{" "}
                  – Here’s Why He’s the Perfect Addition to Your Team!
                </p>

                <ul
                  role="list"
                  className="mt-8 max-w-xl space-y-8 text-gray-600"
                >
                  <li className="flex items-center gap-x-3">
                    <span className="text-3xl">1️⃣</span>
                    <span>
                      <strong className="font-semibold text-black">He</strong>{" "}
                      is based in the 🌉 San Francisco Bay Area.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-3xl">2️⃣</span>
                    <span>
                      <strong className="font-semibold text-black">He</strong>{" "}
                      has a Computer Science degree from the University of
                      Applied Sciences Mittweida in 🇩🇪Germany
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-3xl">3️⃣</span>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        He
                      </strong>{" "}
                      loves working with{" "}
                      <strong className="font-semibold text-gray-900">
                        JavaScript
                      </strong>
                      ,{" "}
                      <strong className="font-semibold text-black">
                        TypeScript
                      </strong>
                      ,{" "}
                      <strong className="font-semibold text-black">
                        Next.js
                      </strong>
                      ,{" "}
                      <strong className="font-semibold text-black">
                        React
                      </strong>
                      ,{" "}
                      <strong className="font-semibold text-black">
                        Tailwind CSS
                      </strong>
                      , and{" "}
                      <strong className="font-semibold text-black">
                        Supabase
                      </strong>
                      .
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-3xl">4️⃣</span>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        He
                      </strong>{" "}
                      has built{" "}
                      <a
                        href="https://github.com/timtbdev"
                        target="_blank"
                        className="font-semibold text-black underline hover:text-blue-600"
                      >
                        three open-source apps
                      </a>
                      , one of which has{" "}
                      <a
                        href="https://github.com/timtbdev/Next.js-Blog-App"
                        target="_blank"
                        className="font-semibold text-black underline hover:text-blue-600"
                      >
                        🌟360+ GitHub stars
                      </a>{" "}
                      and is used by over{" "}
                      <a
                        href="https://github.com/timtbdev/Next.js-Blog-App"
                        target="_blank"
                        className="font-semibold text-black underline hover:text-blue-600"
                      >
                        👨‍💻60 developers
                      </a>
                      .
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-3xl">5️⃣</span>
                    <span>
                      <strong className="font-semibold text-black">He</strong>{" "}
                      speaks{" "}
                      <strong className="font-semibold text-black">
                        🇺🇸English
                      </strong>
                      {", "}
                      <strong className="font-semibold text-black">
                        🇩🇪German
                      </strong>
                      {", "} and{" "}
                      <strong className="font-semibold text-black">
                        🇲🇳Mongolian
                      </strong>
                      .
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-3xl">6️⃣</span>
                    <span>
                      <strong className="font-semibold text-black">He</strong>{" "}
                      learns fast, and has a good eye for design.
                    </span>
                  </li>
                </ul>
              </article>
            </div>
          </Card>
        </div>
      </Content>
    </Fragment>
  );
}
