import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group mr-4 flex items-center">
      {/* Logo Image */}
      <div className="group flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-600/20 dark:ring-zinc-700/40">
        <Image
          src={logo}
          alt="Logo"
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
      </div>
      {/* Logo Text */}
      <div className="text-md ml-2 font-medium text-zinc-600 group-hover:text-zinc-950 dark:text-zinc-400 dark:group-hover:text-white">
        Tim
      </div>
    </Link>
  );
}
