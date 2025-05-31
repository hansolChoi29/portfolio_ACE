"use client";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className=" mx-auto w-full  bg-[#FFF6EB]">{children}</div>;
}
