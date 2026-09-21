/**
 * @module pages/user/error
 * 사용자 페이지 에러 핸들러입니다.
 * 
 * Next.js의 error boundary 파일입니다.
 * 사용자 페이지에서 발생한 에러를 처리합니다.
 */

'use client';

import { PageHeader } from '@/widgets/PageHeader';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main>
      <PageHeader />
      <section className="intro">
        <h1>팀원 목록</h1>
      </section>
      <div className="error">
        <p>팀원 정보를 불러오지 못했습니다.</p>
        <button type="button" onClick={reset}>
          다시 시도
        </button>
      </div>
    </main>
  );
}
