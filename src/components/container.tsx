interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`mx-auto w-[95%] md:w-11/12 max-w-6xl ${className}`}>
      {children}
    </div>
  );
}
