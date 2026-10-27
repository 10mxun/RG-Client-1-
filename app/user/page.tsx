/**
 * @module app/user/page
 * Next.js app router의 사용자 페이지입니다.
 *
 * 이 파일은 "/user" 경로로 접근했을 때 렌더링됩니다.
 * FSD views layer의 공개 컴포넌트를 사용합니다.
 */

import { User } from "@/views/user";

export default function UserPage() {
  return <User />;
}
