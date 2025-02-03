import { cn } from "@/utils/helpers";
import { FC } from "react";

interface Props {
  emoji: string;
  text: string;
  className?: string;
}

const InfoItem: FC<Props> = ({ emoji, text, className }) => (
  <div className={cn("inline-flex items-center gap-x-1 text-sm", className)}>
    {emoji}
    <span className="text-sm font-medium">{text}</span>
  </div>
);

export default InfoItem;
