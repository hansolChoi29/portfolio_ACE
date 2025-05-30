import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "최한솔의 포트폴리오",
  description: "그동안 해왔던 프로젝트를 담은 반응형 웹 사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
