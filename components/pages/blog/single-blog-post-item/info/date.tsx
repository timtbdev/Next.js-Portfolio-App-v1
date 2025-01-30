import { format, parseISO } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { FC } from "react";

interface Props {
  date: string;
}

const Date: FC<Props> = ({ date }) => {
  return (
    <div className="inline-flex items-center">
      <CalendarIcon className="h-4 w-4 text-gray-600 dark:text-zinc-400" />
      <span className="ml-1 text-sm">
        {format(parseISO(date), "MMMM dd, yyyy")}
      </span>
    </div>
  );
};

export default Date;
