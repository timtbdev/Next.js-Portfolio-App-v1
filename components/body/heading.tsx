import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Heading: FC<Props> = ({ children }) => {
  return (
    <div className="relative mx-auto w-full">
      <svg
        className="pointer-events-none absolute inset-[unset] top-0 left-1/2 -z-10 h-80 w-full -translate-x-1/2 text-neutral-300/50 [mask-image:radial-gradient(70%_60%_at_50%_60%,black_30%,transparent)] max-sm:opacity-50"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="grid-:r1i:"
            x="35"
            y="43"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="1"
            ></path>
          </pattern>
        </defs>
        <rect fill="url(#grid-:r1i:)" width="100%" height="100%"></rect>
      </svg>
      {children}
    </div>
  );
};

export default Heading;
