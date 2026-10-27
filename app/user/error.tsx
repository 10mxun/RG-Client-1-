/**
 * @module app/user/error
 * Next.js error boundary 파일입니다.
 *
 * /user 경로의 에러를 처리합니다.
 * 이 라우트의 사용자 조회 오류 상태를 표시합니다.
 */

"use client";

export default function UserError({ reset }: { reset: () => void }) {
  return (
    <main>
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
