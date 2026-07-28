type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
      {children}
    </div>
  );
}