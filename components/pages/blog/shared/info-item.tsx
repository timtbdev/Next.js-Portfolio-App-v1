import { cn } from "@/utils/helpers";
import { FC, JSX } from "react";

interface Props {
  icon: JSX.Element;
  text: string;
  className?: string;
}

const InfoItem: FC<Props> = ({ icon, text, className }) => (
  <div className={cn("inline-flex items-center gap-x-1", className)}>
    {icon}
    <span className="text-md">{text}</span>
  </div>
);

export default InfoItem;
