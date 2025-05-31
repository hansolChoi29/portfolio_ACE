"use client";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-screen-lg mx-auto px-4 bg-[#FFFBF6]">{children}</div>
  );
}
