import menuConfig from "@/config/menu";
import social from "@/config/social";
import { Link } from "next-view-transitions";

export default function Footer() {
  return (
    <>
      <footer className="border-y border-zinc-600/20 bg-white shadow-sm shadow-zinc-800/5 dark:border-zinc-700/40 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl overflow-hidden p-6 sm:py-10 lg:px-8">
          {/* Navigation Links */}
          <nav
            aria-label="Footer"
            className="mx-auto -mb-6 hidden columns-3 gap-x-10 text-center sm:flex sm:justify-center"
          >
            {menuConfig.map((item) => (
              <div key={item.title} className="pb-6">
                <Link
                  href={item.slug}
                  className="text-md font-medium text-zinc-600 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-sky-500"
                  prefetch={true}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </nav>

          {/* Social Media Links */}
          <div className="mt-8 flex justify-center space-x-6">
            {social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inset-px rounded-full bg-white p-2 shadow-md shadow-gray-800/5 ring-1 ring-zinc-600/20 hover:bg-zinc-200/40 dark:bg-zinc-900 dark:ring-zinc-700/40 dark:hover:bg-zinc-500/10"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                />
              </Link>
            ))}
          </div>

          {/* AllYouNeed Button */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://allyouneed.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="transiton group relative inset-px inline-flex items-center gap-x-1.5 rounded-full bg-gradient-to-t from-gray-100 via-gray-50 to-white px-3 py-2 shadow-md shadow-black/5 ring-1 ring-black/10 transition duration-200 hover:bg-gradient-to-tr hover:from-gray-100 hover:via-gray-100 hover:to-gray-50 active:scale-[96%] active:ring-black/20 dark:bg-gradient-to-bl dark:from-zinc-800/20 dark:via-zinc-800/10 dark:to-zinc-800 dark:ring-zinc-700/40 dark:hover:bg-gradient-to-tr dark:hover:from-zinc-800/20 dark:hover:via-zinc-800/10 dark:hover:to-zinc-800"
              aria-label="Visit allyouneed.dev"
            >
              {/* Sparkles Icon */}
              <svg
                className="size-4 fill-blue-500 dark:fill-sky-500"
                viewBox="0 0 24 24"
                aria-hidden="true" // Mark SVG as hidden for screen readers if decorative
              >
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Built with • AllYouNeed.Dev
              </span>
            </a>
          </div>

          {/* Footer Text */}
          <p className="text-md mt-6 text-center leading-5 text-zinc-600 dark:text-zinc-400">
            © 2024 All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
