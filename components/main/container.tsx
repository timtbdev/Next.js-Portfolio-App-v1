import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className="mx-auto w-full overflow-hidden">{children}</div>;
};

export default Container;
