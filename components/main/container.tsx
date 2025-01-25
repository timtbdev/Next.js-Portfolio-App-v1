import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="mx-auto max-w-3xl overflow-hidden">
      <div className="mx-4 py-3 sm:mx-6 md:py-6">{children}</div>
    </div>
  );
};

export default Container;
