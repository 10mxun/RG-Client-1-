import PostFeed from "./components/post-feed";

export default function Home() {
  return (
    <main>
      <header>
        <a className="brand" href="/">
          Next.js 연습
        </a>
        <a className="user-link" href="/user">팀원 목록</a>
      </header>
      <section className="intro">
        <h1>오늘의 작업 현황</h1>
        <span className="summary">
          진행 중인 활동과 팀 구성원을 한곳에서 확인하세요.
        </span>
      </section>
      <section>
        <PostFeed />
      </section>
    </main>
  );
}
