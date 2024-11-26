export default function AnimatedGradientText({
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="loading-text-gradient text-transparent animate-gradient">
      {children}
    </div>
  );
}
