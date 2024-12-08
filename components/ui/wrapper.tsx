import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Wrapper({ children }: Props) {
  return <div className="relative mx-auto max-w-3xl px-6 py-4">{children}</div>;
}
