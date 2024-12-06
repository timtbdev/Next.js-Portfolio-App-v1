import { socialConfig } from "@/config";
import { ChevronRightIcon } from "lucide-react";

export default async function ContactPage() {
  return (
    <div className="px-6 py-10">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xl font-semibold text-gray-600 dark:text-gray-400">
          Get in touch:
        </p>
        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl">
          timtb.dev@gmail.com
        </h1>
      </div>
      <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
        <h2 className="sr-only">Socials</h2>
        <ul
          role="list"
          className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5 dark:divide-gray-400/10 dark:border-gray-400/10"
        >
          {socialConfig.map((item, index) => (
            <li key={index} className="relative flex gap-x-6 py-6">
              <div className="flex size-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10 dark:ring-gray-400/10">
                <item.icon
                  aria-hidden="true"
                  className="size-6 text-gray-600 dark:text-gray-400"
                />
              </div>
              <div className="flex-auto">
                <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-gray-200">
                  <a href={item.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.name}
                  </a>
                </h3>
                <p className="text-sm/6 text-gray-600 dark:text-gray-400">
                  {item.href}
                </p>
              </div>
              <div className="flex-none self-center">
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-5 text-gray-400 dark:text-gray-400/10"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
