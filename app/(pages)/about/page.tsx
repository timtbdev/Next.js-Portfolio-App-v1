import { ContentType } from "@/types";
import Image from "next/image";

const content: ContentType = {
  image: {
    src: "/images/about_me_image.jpg",
    alt: "About Me Image",
  },
  url: {
    link: "/files/resume.pdf",
    text: "Download Resume",
  },
  title: "About Me",
  text: [
    "Tim (Tumur Bazarragchaa), born in 1982 in Ulaanbaatar, Mongolia. In 2000, his family left Mongolia in search of a better life—his parents and brother settled in California, while Tim moved to Germany to pursue his studies.",
    "He graduated in 2008 with a degree in Computer Science and secured a position as a Test Engineer at a leading online and mobile banking company in Germany. However, his work visa was denied, forcing him to return to Mongolia.",
    "In 2009, Tim joined Mongolia’s leading telecom company and took charge of launching BlackBerry services. He helped sell over 6,000 devices and got them all set up and running smoothly.",
    "In 2012, he founded his own Android app company, publishing two apps before closing the startup in 2013. He later led a team on Mongolia’s largest hydropower project, securing funding through a successful feasibility study.",
    "In 2016, Tim reunited with his family in the United States. While working in ride-sharing, he resumed his passion for Android development, launching two additional apps.",
    "In 2020, Tim started working at Tesla in Fremont as a Production Associate, building cars on the assembly line. He was recognized for his hard work with two Employee Appreciation Awards.",
    "In 2023, Tim married his soulmate, Dogi, and they welcomed their daughter, Undra.",
    "These days, he’s focused on improving his skills and building great Android apps.",
  ],
};

export default async function AboutPage() {
  return (
    <div>
      {/* AboutMe Image */}
      <div className="shadow-photo lg:aspect-square relative mx-auto flex aspect-[16/9] rounded-2xl text-center shadow-md sm:aspect-[2/1] lg:max-w-3xl">
        <Image
          src={content.image?.src || ""}
          alt={content.image?.alt || "Profile picture"}
          fill={true}
          priority={true}
          className="absolute inset-0 h-full w-full bg-gray-50 object-cover md:rounded-2xl"
          unoptimized
        />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 py-4">
        {/* AboutMe Content */}
        <div className="mt-4 text-wrap text-lg leading-8 text-gray-600 dark:text-gray-400">
          {content.text.map((item, index) => (
            <p key={index} className="mt-4">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
