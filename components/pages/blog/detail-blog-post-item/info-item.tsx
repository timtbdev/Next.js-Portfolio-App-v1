import { FC, JSX } from "react";

interface Props {
  icon: JSX.Element;
  text: string;
}

const InfoItem: FC<Props> = ({ icon, text }) => (
  <div className="inline-flex items-center gap-x-1">
    {icon}
    <span className="text-sm">{text}</span>
  </div>
);

export default InfoItem;
