import { FC } from "react";

interface XIconAttributes {
  className?: string;
}

const XIcon: FC<XIconAttributes> = ({ className = "" }: XIconAttributes) => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
    </svg>
  );
};

export default XIcon;
