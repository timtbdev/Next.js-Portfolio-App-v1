import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { FC } from "react";

interface Props {
  className?: string;
}

const LogoButton: FC<Props> = ({ className }) => {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2", className)}
    >
      <Image
        src="/images/logo.png"
        alt="Mongolian Food Logo"
        width={176}
        height={176}
        className="ring-brand-600 size-10 transform rounded-full bg-zinc-800 ring-1 transition-all duration-300 hover:scale-105"
      />
      <span className="text-lg font-bold text-gray-600 group-hover:text-black">
        Tim
      </span>
    </Link>
  );
};

export default LogoButton;
