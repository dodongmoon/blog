import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "블로그 도우미",
  description: "네이버 블로그 계정과 공감, 이웃, 댓글 작업을 관리하는 블로그 도우미",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
