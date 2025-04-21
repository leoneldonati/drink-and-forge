import type { PropsWithChildren } from "react";

export default function PageSubtitle({ children }: PropsWithChildren) {
  return (
    <h2 className="text-2xl md:text-4xl font-brand-2 w-fit  p-2 rounded-md uppercase font-bold animate-neon-infinite text-shadow-md text-shadow-white contrast-150">
      {children}
    </h2>
  );
}
