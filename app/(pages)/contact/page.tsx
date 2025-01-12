import social from "@/config/layout/social";
import logo from "@/public/images/logo.png";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-md py-2 sm:max-w-xl sm:py-4">
      <ContactInfo />
      <SocialLinks />
    </div>
  );
}

const ContactInfo = () => (
  <div className="text-center">
    <Image
      src={logo}
      alt="Logo"
      width={96}
      height={96}
      className="mx-auto rounded-full object-cover"
    />
    <div className="mt-2">
      <a
        href="mailto:timtb.dev@gmail.com"
        className="text-2xl font-semibold text-zinc-950 hover:text-blue-500 dark:text-white dark:hover:text-sky-500"
      >
        timtb.dev@gmail.com
      </a>
    </div>
    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      Please feel free to reach out to me via email or social media.
    </p>
  </div>
);

const SocialLinks = () => (
  <div className="mt-6">
    <ul role="list" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {social.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            className="flex items-center space-x-2 text-zinc-950 hover:text-blue-500 dark:text-white dark:hover:text-sky-500"
          >
            <ChevronRightIcon className="h-5 w-5" />
            <span>{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);
