import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/shared/providers/QueryProvider";

export const metadata: Metadata = {
  title: "Next.js 연습",
  description:
    "Rewrite와 RSC 데이터 패칭을 보여주는 대시보드 페이지를 만들었습니다.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
