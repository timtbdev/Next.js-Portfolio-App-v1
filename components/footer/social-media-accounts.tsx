import socialConfig from "@/config/layout/social";
import { SocialType } from "@/types";

const SocialMediaAccounts: React.FC = () => {
  return (
    <div className="mt-8 flex justify-center space-x-6">
      {socialConfig.map((item: SocialType) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
        >
          <item.icon className="h-6 w-6 text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white" />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaAccounts;
