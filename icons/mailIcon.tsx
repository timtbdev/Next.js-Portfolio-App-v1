import { FC } from "react";

interface MailIconAttributes {
  className?: string;
}

const MailIcon: FC<MailIconAttributes> = ({
  className = "",
}: MailIconAttributes) => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
};

export default MailIcon;
