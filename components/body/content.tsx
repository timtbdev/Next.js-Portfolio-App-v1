import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Content: FC<Props> = ({ children }) => {
  return (
    <div className="relative min-h-[50vh] border-t border-neutral-200 bg-gradient-to-b from-neutral-50">
      {children}
    </div>
  );
};

export default Content;
