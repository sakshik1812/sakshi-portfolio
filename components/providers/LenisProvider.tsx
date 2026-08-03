"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

type LenisProviderProps = {
  children: ReactNode;
};

export default function LenisProvider({
  children,
}: LenisProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}