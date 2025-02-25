import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { FC } from "react";

const Logo = () => {
  return (
    <Link href="/" className="group mr-4 hidden items-center lg:flex">
      <Avatar className="h-10 w-10 shadow-md ring-1 ring-gray-300 dark:ring-zinc-700">
        <AvatarImage
          src="/images/logo.png"
          alt="Tim's Avatar"
          title="Tim's Avatar"
        />
        <AvatarFallback>TM</AvatarFallback>
      </Avatar>
      <div className="text-md ml-2 font-medium text-gray-600 group-hover:text-black dark:text-zinc-400 dark:group-hover:text-white">
        Tim
      </div>
    </Link>
  );
};

export default Logo;
