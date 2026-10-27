import type { Metadata } from "next";
import "./globals.css";
import { AppShell, QueryProvider } from "@/app";

export const metadata: Metadata = {
  title: "Next.js 연습",
  description: "TanStack Query와 Zustand를 사용하는 팀 활동 대시보드입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <AppShell>{children}</AppShell>
        </QueryProvider>
      </body>
    </html>
  );
}
