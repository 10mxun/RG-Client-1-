# Next.js 팀 활동 대시보드

팀원 목록과 최근 활동을 확인하는 Next.js App Router 실습 프로젝트입니다. 서버 데이터 조회는 TanStack Query, 게시글 검색어는 Zustand로 관리합니다.

## 주요 기능

- 최근 게시글과 작성자 목록 조회
- 팀원 목록 조회 (`/user`)
- 게시글 제목 검색
- 로딩 및 오류 상태 표시
- TanStack Query 캐싱
- Next.js rewrite를 통한 `/api/posts`, `/api/users` 요청

## 기술 스택

- Next.js 16, React 19, TypeScript
- TanStack Query: 게시글·사용자 서버 상태와 캐시
- Zustand: 게시글 검색어 클라이언트 상태
- JSONPlaceholder: 실습 데이터 API

## 폴더 구조

```text
app/                         # Next.js 라우트 및 라우트 경계 파일
src/
  app/                       # 전역 QueryProvider와 AppShell/헤더
  views/                     # 라우트별 화면 조합 (home, user)
  widgets/                   # 페이지에서 재사용하는 큰 UI 조합 (PostFeed)
  features/
    post-list/               # 게시글·작성자 조회 및 목록 표시
    post-search/             # 검색어 입력과 필터링
    user-list/               # 사용자 조회와 목록 표시
  entities/                  # post/user 모델과 API 함수
  shared/                    # 도메인에 의존하지 않는 공통 UI
```

`app/`은 Next.js 파일 기반 라우팅을 담당하고, `src/app/`은 FSD의 app layer로 전역 provider와 모든 경로에서 공통으로 보이는 헤더를 관리합니다. 각 Next.js route entry는 화면 slice의 `index.ts`를 통해 공개 컴포넌트를 가져옵니다. 예를 들어 `app/page.tsx`는 `@/views/home`을 사용합니다. Next.js App Router의 `app/`과 충돌하지 않도록 FSD 화면 계층은 `views/`로 두고, `@/*` alias 하나로 `src/*`를 가리킵니다.

## FSD 경계와 분리 기준

- `entities/user`는 사용자 데이터 모델과 API만 제공합니다. 사용자 목록을 조회하고 로딩·오류 상태와 목록 UI를 제공하는 `UserList`는 화면 기능이므로 `features/user-list`에 둡니다. 범용 UI만 `shared`에 남겨 entity 의존 규칙을 지킵니다.
- `features/post-list`는 게시글·작성자를 조회하고 목록을 표시합니다. `features/post-search`는 검색 입력 및 필터링 상태를 담당합니다. 두 기능은 각자 독립된 사용자 목적을 가지므로 feature로 나눴습니다.
- `widgets/PostFeed`는 검색 입력과 게시글 목록을 함께 배치하는 화면 단위 조합입니다. 서로 다른 두 feature를 이어 홈 화면에서 바로 쓸 수 있게 하므로 widget에 둡니다.
- `ui`에는 화면 컴포넌트를, `model`에는 조회 훅·상태 및 기능 로직을 둡니다. `hooks`, `store` 같은 기술 이름으로 segment를 나누지 않습니다.
- 다른 slice를 사용할 때는 해당 slice의 `index.ts`만 가져옵니다. 내부 파일 경로를 직접 지정하지 않습니다.

## 데이터 조회 방식

게시글과 사용자 정보는 모두 브라우저의 TanStack Query로 조회합니다. `/user` 화면도 `features/user-list/model/useUserList`의 `useQuery`를 사용합니다. 로딩·오류 상태와 캐싱도 query 결과를 사용합니다.

API 함수는 `/api/posts`, `/api/users` 경로를 호출하고 `next.config.ts`의 rewrite가 JSONPlaceholder로 전달합니다. `src/app/providers/QueryProvider`가 앱 전체에 하나의 QueryClient를 제공합니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

## 배포

프로젝트 배포 주소: https://vercel.com/10mxuns-projects/rg-client-1
