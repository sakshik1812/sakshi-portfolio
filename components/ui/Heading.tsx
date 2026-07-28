type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading({ children }: HeadingProps) {
  return (
    <h1
      className="max-w-3xl text-7xl font-medium leading-[92%] tracking-[-0.05em]"
      style={{ fontFamily: "var(--font-general-sans)" }}
    >
      {children}
    </h1>
  );
}