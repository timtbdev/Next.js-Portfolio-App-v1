import HandDrawnArrow from "@/components/ui/hand-drawn-arrow";
import { FC } from "react";
import { ProfileType } from "types";
import Avatar from "./avatar";
import Bio from "./bio";
import Greeting from "./greeting";
import SelectedProjectsButton from "./selected-projects-button";
import Title from "./title";

interface Props {
  profile: ProfileType;
}

const Home: FC<Props> = ({ profile }) => {
  const { image, initials, title, greeting } = profile;

  return (
    <div id="heading" className="px-6 pt-4 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Avatar image={image} initials={initials} />
        <Title title={title} />
        <Greeting greeting={greeting} />
        <Bio className="mt-6" />
        <SelectedProjectsButton className="mt-4" />
        <HandDrawnArrow className="mx-auto my-6 size-20 text-center text-gray-400 dark:text-zinc-400" />
      </div>
    </div>
  );
};

export default Home;
