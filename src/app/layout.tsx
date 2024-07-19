// 루트 레이아웃
import type { Metadata } from "next";
// 폰트
import { Inter } from "next/font/google";
// 기본 글로벌 CSS
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 메타 데이터
export const metadata: Metadata = {
  title: "Next Study",
  description: "Next Study By INSUNG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
