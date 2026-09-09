'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main>
      <header>
        <a className="brand" href="/">Next.js 연습</a>
      </header>
      <section className="intro">
        <h1>팀원 목록</h1>
      </section>
      <div className="error">
        <p>팀원 정보를 불러오지 못했습니다.</p>
        <button type="button" onClick={reset}>다시 시도</button>
      </div>
    </main>
  );
}
