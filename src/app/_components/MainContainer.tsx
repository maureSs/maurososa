export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="site-background relative min-h-screen overflow-hidden">
      {children}
    </div>
  );
}
