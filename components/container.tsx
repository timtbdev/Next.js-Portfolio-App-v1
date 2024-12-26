import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="mx-auto max-w-4xl overflow-hidden">
      <div className="mx-6 p-3 md:p-6">{children}</div>
    </div>
  );
}
