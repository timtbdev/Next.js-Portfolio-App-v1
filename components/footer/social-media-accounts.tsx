import socialConfig from "@/config/layout/social";

export default function SocialMediaAccounts() {
  return (
    <>
      {/* Social Media Links */}
      <div className="mt-8 flex justify-center space-x-6">
        {socialConfig.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6 text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white" />
          </a>
        ))}
      </div>
    </>
  );
}
