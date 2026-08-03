import type { ReactNode } from "react";

type BodyTextProps = {
  children: ReactNode;
  className?: string;
};

export default function BodyText({
  children,
  className = "",
}: BodyTextProps) {
  return (
    <p className={`max-w-[520px] text-[22px] leading-[160%] text-neutral-600 ${className}`}>
      {children}
    </p>
  );
}