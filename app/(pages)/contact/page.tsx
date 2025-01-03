import social from "@/config/layout/social";
import logo from "@/public/images/logo.png";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

export default async function ContactPage() {
  return (
    <div className="mx-auto max-w-md py-2 sm:max-w-xl sm:py-4">
      <div>
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
      </div>
      <div className="mt-6">
        <ul role="list" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {social.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-xs group flex w-full items-center justify-between space-x-3 rounded-full border border-zinc-600/20 px-4 py-2 text-left hover:bg-zinc-200/40 dark:border-zinc-700/40 dark:hover:bg-zinc-500/10"
              >
                <span className="flex min-w-0 flex-1 items-center space-x-4">
                  <span className="block shrink-0">
                    <item.icon className="size-8 text-zinc-600 dark:text-zinc-400" />
                  </span>
                  <span className="block min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                      {item.name}
                    </span>
                    <span className="block truncate text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      {item.username}
                    </span>
                  </span>
                </span>
                <span className="inline-flex size-10 shrink-0 items-center justify-center">
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="size-5 text-gray-400 dark:text-gray-400/10"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
