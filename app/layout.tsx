/**
 * @module app/layout
 * Next.js 루트 레이아웃입니다.
 *
 * 모든 페이지를 감싸는 최상위 레이아웃입니다.
 * 여기서는 메타데이터와 기본 HTML 구조만 정의합니다.
 */

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js 연습',
  description:
    'Rewrite와 RSC 데이터 패칭을 보여주는 대시보드 페이지를 만들었습니다.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
