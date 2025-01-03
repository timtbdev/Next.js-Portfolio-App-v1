import Logo from "./logo";
import NavigationLinks from "./navigation-links";

export default function Header() {
  return (
    <div className="sticky top-0 z-10 border-b-[1.2px] border-zinc-600/20 bg-white shadow-sm shadow-zinc-800/5 dark:border-zinc-700/40 dark:bg-zinc-900">
      <nav
        aria-label="Navigation"
        className="mx-auto flex max-w-4xl items-center justify-between px-6 py-2.5 md:py-5"
      >
        {/* Logo */}
        <div className="z-10 flex flex-1 justify-start">
          <Logo />
        </div>
        <NavigationLinks />
      </nav>
    </div>
  );
}
