import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group mr-4 flex items-center">
      {/* Logo Image */}
      <div className="group flex h-10 w-10 items-center justify-center rounded-full shadow-sm ring-1 ring-gray-200 dark:ring-gray-600">
        <Image
          src={logo}
          alt="Logo"
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
      </div>
      {/* Logo Text */}
      <div className="ml-2 text-lg font-semibold tracking-tight text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-sky-500">
        Tim
      </div>
    </Link>
  );
}
