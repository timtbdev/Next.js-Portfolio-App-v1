import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="mx-auto max-w-4xl overflow-hidden">
      <div className="mx-4 py-3 md:mx-6 md:px-6 md:py-6">{children}</div>
    </div>
  );
}
