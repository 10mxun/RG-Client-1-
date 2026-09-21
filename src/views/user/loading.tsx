/**
 * @module pages/user/loading
 * 사용자 페이지 로딩 상태 컴포넌트입니다.
 * 
 * Next.js의 로딩 파일입니다.
 * 사용자 데이터가 로드되는 동안 표시됩니다.
 */

import { PageHeader } from '@/widgets/PageHeader';

export default function Loading() {
  return (
    <main>
      <PageHeader />
      <section className="intro">
        <h1>팀원 목록</h1>
      </section>
      <p className="loading">팀원 정보를 불러오는 중입니다.</p>
    </main>
  );
}
