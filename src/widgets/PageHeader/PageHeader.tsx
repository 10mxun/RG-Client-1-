/**
 * @module widgets/PageHeader
 * 페이지 헤더 위젯입니다.
 * 
 * 책임:
 * - 공통 헤더 UI 제공
 * - 네비게이션 링크 관리
 * 
 * 모든 페이지에서 사용되는 헤더를 한곳에서 관리합니다.
 * 이렇게 하면 헤더 변경 시 모든 페이지에 일관되게 적용됩니다.
 */

type PageHeaderProps = {
  userLink?: string;
  userLinkLabel?: string;
};

export function PageHeader({
  userLink = '/user',
  userLinkLabel = '팀원 목록',
}: PageHeaderProps) {
  return (
    <header>
      <a className="brand" href="/">
        Next.js 연습
      </a>
      <a className="user-link" href={userLink}>
        {userLinkLabel}
      </a>
    </header>
  );
}
