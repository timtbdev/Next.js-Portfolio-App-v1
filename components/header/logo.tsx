import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group mr-4 flex items-center">
      <Avatar className="h-10 w-10 shadow-md ring-1 ring-gray-300 dark:ring-zinc-700">
        <AvatarImage src="/images/logo.png" />
        <AvatarFallback>TM</AvatarFallback>
      </Avatar>
      {/* Text */}
      <div className="text-md ml-2 font-medium text-gray-600 group-hover:text-black dark:text-zinc-400 dark:group-hover:text-white">
        Tim
      </div>
    </Link>
  );
}
