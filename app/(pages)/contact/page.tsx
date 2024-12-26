import Card from "@/components/layout/card";
import social from "@/config/components/social";
import { ChevronRightIcon } from "lucide-react";

export default async function ContactPage() {
  return (
    <Card>
      <div className="mx-auto mt-6 max-w-2xl text-center">
        <p className="text-2xl font-semibold text-zinc-600 dark:text-zinc-400 sm:text-3xl">
          Get in touch:
        </p>
        <a
          href="mailto:timtb.dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-zinc-950 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-sky-500 sm:text-5xl">
            timtb.dev@gmail.com
          </h1>
        </a>
      </div>
      <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
        <h2 className="sr-only">Socials</h2>
        <ul
          role="list"
          className="-mt-6 divide-y divide-zinc-600/20 border-b border-zinc-600/20 dark:divide-zinc-700/40 dark:border-zinc-700/40"
        >
          {social.map((item, index) => (
            <li key={index} className="relative flex gap-x-6 py-6">
              <div className="flex size-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-zinc-600/20 dark:ring-zinc-700/40">
                <item.icon
                  aria-hidden="true"
                  className="size-6 text-zinc-600 dark:text-zinc-400"
                />
              </div>
              <div className="flex-auto">
                <h3 className="text-sm/6 font-semibold text-zinc-950 dark:text-white">
                  <a href={item.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.name}
                  </a>
                </h3>
                <p className="text-sm/6 text-zinc-600 dark:text-zinc-400">
                  {item.href}
                </p>
              </div>
              <div className="flex-none self-center">
                <ChevronRightIcon
                  aria-hidden="true"
                  className="dark:text-zinc-400/ size-5 text-zinc-600"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
