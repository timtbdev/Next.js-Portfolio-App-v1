import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProfileType } from "types";
import SelectedProjectsButton from "./selected-projects-button";

interface Props {
  profile: ProfileType;
}

const Profile: React.FC<Props> = ({ profile }) => {
  const { image, initials, title, greeting, description } = profile;
  return (
    <div id="heading" className="px-6 pt-12 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Avatar className="mx-auto mb-2 h-32 w-32 rounded-full shadow-md ring-1 ring-gray-300 dark:ring-zinc-700">
          <AvatarImage src={image} alt={`${initials}'s avatar`} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <h6 className="mb-2">{title}</h6>
        <h1 className="mb-2">{greeting}</h1>
        <h4 className="mt-8">{description}</h4>
        <SelectedProjectsButton />
      </div>
    </div>
  );
};

export default Profile;
