/**
 * @module pages/user
 * 사용자 목록 페이지 컴포넌트입니다.
 * 
 * 책임:
 * - 사용자 페이지 레이아웃 구성
 * - UserList feature 통합
 * 
 * 이 컴포넌트는 서버 컴포넌트입니다.
 */

import { PageHeader } from '@/widgets/PageHeader';
import { UserList } from '@/features/user-list';
import { Panel } from '@/shared/ui';

export async function User() {
  return (
    <main>
      <PageHeader userLink="/" userLinkLabel="최근 활동" />
      <section className="intro">
        <h1>팀원 목록</h1>
        <span className="summary">함께 작업하는 팀원들입니다.</span>
      </section>
      <Panel>
        <UserList limit={3} />
      </Panel>
    </main>
  );
}
