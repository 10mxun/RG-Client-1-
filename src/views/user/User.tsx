/**
 * @module views/user
 * 사용자 목록 페이지 컴포넌트입니다.
 * 
 * 책임:
 * - 사용자 페이지 레이아웃 구성
 * - UserList feature 통합
 * 
 * 사용자 데이터는 TanStack Query를 통해 브라우저에서 조회합니다.
 */

import { UserList } from '@/features/user-list';
import { Panel } from '@/shared/ui';

export function User() {
  return (
    <main>
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
