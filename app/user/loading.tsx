/**
 * @module app/user/loading
 * Next.js loading 파일입니다.
 *
 * /user 경로의 로딩 상태를 표시합니다.
 * 이 라우트의 사용자 조회 로딩 상태를 표시합니다.
 */

export default function UserLoading() {
  return (
    <main>
      <section className="intro">
        <h1>팀원 목록</h1>
      </section>
      <p className="loading">팀원 정보를 불러오는 중입니다.</p>
    </main>
  );
}
