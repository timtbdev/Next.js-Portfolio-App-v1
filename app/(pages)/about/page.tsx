import Content from "@/components/body/content";
import Heading from "@/components/body/heading";
import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import MainTitle from "@/components/ui/main-title";
import PAGES from "@/config/seo";
import { getBaseUrlWithSlug } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
                <h2 className="w-full text-center text-3xl font-semibold tracking-tight text-gray-800 sm:w-auto sm:text-left">
                  Why Hire Tim?
                </h2>
              </div>
              <article id="about-me" className="mt-2">
                <p className="w-full text-center text-lg text-gray-600 sm:w-auto sm:text-left">
                  Here’s Why He’s the Perfect Addition to Your Team!
                </p>

                <ul
                  role="list"
                  className="mt-4 max-w-xl space-y-4 text-gray-600"
                >
                  <li className="flex items-center gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none text-blue-500"
                    />
                    <span>
                      He is based in the 🌉{" "}
                      <strong className="font-semibold">
                        San Francisco Bay Area
                      </strong>
                      .
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none text-blue-500"
                    />
                    <span>
                      He has a{" "}
                      <strong className="font-semibold">
                        Computer Science degree
                      </strong>{" "}
                      from the University of Applied Sciences Mittweida in 🇩🇪
                      Germany.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none text-blue-500"
                    />
                    <span>
                      He loves working with{" "}
                      <strong className="font-semibold">JavaScript</strong>,{" "}
                      <strong className="font-semibold">TypeScript</strong>,{" "}
                      <strong className="font-semibold">Next.js</strong>,{" "}
                      <strong className="font-semibold">React</strong>,{" "}
                      <strong className="font-semibold">Tailwind CSS</strong>,{" "}
                      <strong className="font-semibold">Supabase</strong>.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none text-blue-500"
                    />
                    <span>
                      He has built{" "}
                      <a
                        href="https://github.com/timtbdev"
                        target="_blank"
                        className="font-semibold text-gray-600 underline hover:text-black"
                      >
                        three open-source apps
                      </a>
                      , one of which has{" "}
                      <a
                        href="https://github.com/timtbdev/Next.js-Blog-App"
                        target="_blank"
                        className="font-semibold text-gray-600 underline hover:text-black"
                      >
                        🌟370+ GitHub stars
                      </a>{" "}
                      and is used by over{" "}
                      <a
                        href="https://github.com/timtbdev/Next.js-Blog-App"
                        target="_blank"
                        className="font-semibold text-gray-600 underline hover:text-black"
                      >
                        👨‍💻60 developers
                      </a>
                      .
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none text-blue-500"
                    />
                    <span>
                      He speaks{" "}
                      <strong className="font-semibold">🇺🇸English</strong>
                      {", "}
                      <strong className="font-semibold">🇩🇪German</strong>
                      {", "} and{" "}
                      <strong className="font-semibold">🇲🇳Mongolian</strong>.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none text-blue-500"
                    />
                    <span>
                      He learns ⚡fast, and has a good eye for 🎨design.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none text-blue-500"
                    />
                    <span>When he is not 🧑‍💻coding, he is out for a 🏃‍♂️run.</span>
                  </li>
                </ul>
              </article>
              <div className="mt-10 flex">
                <Link
                  href="/files/resume.pdf"
                  target="_blank"
                  className="w-full items-center rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-center text-base/7 font-semibold text-gray-600 hover:bg-gray-100 hover:text-black sm:w-auto"
                >
                  Download Resume <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </Content>
      <Footer />
    </Fragment>
  );
}
