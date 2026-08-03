import type { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export default function Heading({
  children,
  className = "",
}: HeadingProps) {
  return (
    <h1
      className={`
        max-w-3xl
        text-[58px]
        font-medium
        leading-[0.92]
        tracking-[-0.05em]

        sm:text-[72px]

        lg:text-[84px]

        xl:text-[96px]

        ${className}
      `}
      style={{ fontFamily: "var(--font-general-sans)" }}
    >
      {children}
    </h1>
  );
}