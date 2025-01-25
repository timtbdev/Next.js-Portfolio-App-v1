const MobileCopyright = () => {
  return (
    <div className="lg:hidden">
      <div className="mx-auto mt-10 flex max-w-4xl justify-center gap-x-2">
        <a
          href="#main"
          className="text-md text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-orange-600"
        >
          ↑ Back to top
        </a>
        <span> | </span>
        <a
          href="https://github.com/timtbdev/Next.js-Portfolio-App-v2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-orange-600"
        >
          Source code
        </a>
      </div>
      <div className="text-md mx-auto mt-6 flex max-w-4xl justify-center text-center leading-5 text-zinc-600 dark:text-zinc-400">
        © 2025 All rights reserved.
      </div>
    </div>
  );
};

export default MobileCopyright;
