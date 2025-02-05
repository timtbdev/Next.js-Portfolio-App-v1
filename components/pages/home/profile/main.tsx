import { ProfileType } from "types";
import Avatar from "./avatar";
import Bio from "./bio";
import Greeting from "./greeting";
import HandDrawnArrowDownOne from "./hand-drawn-arrow-down-01";
import HandDrawnArrowDownTwo from "./hand-drawn-arrow-down-02";
import SelectedProjectsButton from "./selected-projects-button";
import Title from "./title";

interface Props {
  profile: ProfileType;
}

const Profile: React.FC<Props> = ({ profile }) => {
  const { image, initials, title, greeting, description } = profile;

  return (
    <div id="heading" className="px-6 pt-2 sm:pt-4 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Avatar image={image} initials={initials} />
        <Title title={title} />
        <Greeting greeting={greeting} />
        <Bio className="mt-6" />
        <HandDrawnArrowDownOne className="mx-auto mt-6 size-20 text-center text-gray-400 dark:text-zinc-400" />
        <SelectedProjectsButton />
        <HandDrawnArrowDownTwo className="mx-auto my-6 size-20 text-center text-gray-400 dark:text-zinc-400" />
      </div>
    </div>
  );
};

export default Profile;
