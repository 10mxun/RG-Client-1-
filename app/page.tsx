/**
 * @module app/page
 * Next.js app router의 홈 페이지입니다.
 *
 * 이 파일은 "/" 경로로 접근했을 때 렌더링됩니다.
 * FSD pages layer의 Home 컴포넌트를 사용합니다.
 */

import { Home } from '@/pages/home/Home';

export default function AppPage() {
  return <Home />;
}
