/**
 * @module pages/home
 * 홈 페이지 컴포넌트입니다.
 * 
 * 책임:
 * - 홈 페이지 레이아웃 구성
 * - 여러 위젯 조합
 * 
 * 이 컴포넌트는 widgets과 features를 조합하여
 * 완전한 페이지를 제공합니다.
 */

import { PageHeader } from '@/widgets/PageHeader';
import { PostFeed } from '@/widgets/PostFeed';

export function Home() {
  return (
    <main>
      <PageHeader userLink="/user" userLinkLabel="팀원 목록" />
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
