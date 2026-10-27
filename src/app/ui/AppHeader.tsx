import Link from "next/link";

/** 전역 내비게이션은 모든 라우트에서 한 번만 렌더링합니다. */
export function AppHeader() {
  return (
    <header>
      <Link className="brand" href="/">
        Next.js 연습
      </Link>
      <nav aria-label="주요 메뉴">
        <Link className="user-link" href="/">
          최근 활동
        </Link>
        <Link className="user-link" href="/user">
          팀원 목록
        </Link>
      </nav>
    </header>
  );
}
