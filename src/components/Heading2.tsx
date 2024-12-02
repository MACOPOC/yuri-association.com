import { ReactNode } from "react";

export default function Heading2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-4 text-l leading-none tracking-tight md:text-xl lg:text-2xl dark:text-white">
      {children}
    </h2>
  );
}
