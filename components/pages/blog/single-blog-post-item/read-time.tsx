import { getMinutes } from "@/utils/helpers";
import { Clock10Icon } from "lucide-react";
import { FC } from "react";

interface Props {
  minutes: number;
}

const ReadTime: FC<Props> = ({ minutes }) => {
  return (
    <div className="inline-flex items-center">
      <Clock10Icon className="h-4 w-4 text-gray-600 dark:text-zinc-400" />
      <span className="ml-1">{getMinutes(minutes)}</span>
    </div>
  );
};

export default ReadTime;
