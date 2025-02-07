import HandDrawnArrow from "@/components/ui/hand-drawn-arrow";
import { FC } from "react";
import { ProfileType } from "types";
import Avatar from "./avatar";
import Badge from "./badge";
import Bio from "./bio";
import Greeting from "./greeting";
import SelectedProjectsButton from "./selected-projects-button";

interface Props {
  profile: ProfileType;
}

const Home: FC<Props> = ({ profile }) => {
  const { image, initials, status, greeting } = profile;

  return (
    <div id="heading" className="px-6 pt-4 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Avatar image={image} initials={initials} />
        <Badge status={status} />
        <Greeting greeting={greeting} />
        <Bio className="mt-6" />
        <SelectedProjectsButton
          title="Selected Projects"
          scrollTo="#selected-projects"
          className="mt-4"
        />
        <HandDrawnArrow className="mx-auto my-6 size-20 text-center text-gray-400 dark:text-zinc-400" />
      </div>
    </div>
  );
};

export default Home;
