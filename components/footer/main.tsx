import Copyright from "./copyright/main";
import NavigationLinks from "./navigation-links";
import SocialMediaAccounts from "./social-media-accounts";

const Footer = () => {
  return (
    <>
      <footer className="border-y border-zinc-600/20 bg-white shadow-xs shadow-zinc-800/5">
        <div className="mx-auto max-w-6xl overflow-hidden p-6 sm:py-10 lg:px-8">
          <NavigationLinks className="hidden sm:flex" />
          <SocialMediaAccounts />
          <Copyright />
        </div>
      </footer>
    </>
  );
};

export default Footer;
