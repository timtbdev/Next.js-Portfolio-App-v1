import {
  AvatarFallback,
  AvatarImage,
  Avatar as AvatarWrapper,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

const Profile: FC<Props> = ({ className }) => {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      <AvatarWrapper className="mx-auto mb-4 h-32 w-32 rounded-full shadow-md ring-1 ring-gray-300">
        <AvatarImage
          src="/images/profile.jpg"
          alt="Tim's Avatar"
          title="Tim's Avatar"
        />
        <AvatarFallback>TB</AvatarFallback>
      </AvatarWrapper>
      <h1 className="mb-4 inline-flex flex-col items-center gap-1 text-center leading-none tracking-tight">
        <span className="text-5xl font-bold text-black">
          <span className="relative whitespace-nowrap text-5xl font-bold text-black">
            <span className="absolute -left-[2.5%] -top-[2.5%] z-0 h-[105%] w-[105%] -rotate-1 bg-gray-200" />
            <span className="relative text-5xl text-black">✨Hire</span>
          </span>{" "}
          Tim
        </span>
      </h1>

      <p className="text-lg font-semibold text-gray-600">
        The Best Frontend Developer
      </p>
      <p className="text-lg font-semibold text-gray-600">
        in the 🇺🇸 San-Francisco Bay Area.
      </p>
    </div>
  );
};

export default Profile;
