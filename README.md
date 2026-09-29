# Next.js 팀 활동 대시보드

## 프로젝트 소개

팀원 목록과 최근 활동 내역을 한눈에 확인할 수 있는 대시보드입니다.

Next.js를 학습하며 CSR(Client-Side Rendering)과 RSC(React Server Components)의 데이터 패칭 방식 차이를 직접 구현하고, TanStack Query와 Zustand를 활용하여 서버 상태와 클라이언트 상태를 분리해 관리하도록 개선했습니다.

## 주요 기능

* 팀원 목록 확인
* 최근 활동 내역 확인
* TanStack Query를 이용한 게시글 및 사용자 데이터 조회
* `useQuery`를 활용한 서버 상태 관리 및 캐싱
* Zustand를 이용한 게시글 검색 상태 관리
* `/user` 페이지에서 RSC를 이용한 팀원 정보 데이터 패칭
* Next.js `rewrites`를 이용한 클라이언트 API 요청
* 로딩 및 에러 상태 처리

## 기술 스택

* **Framework:** Next.js 16, React 19
* **Language:** TypeScript
* **Styling:** CSS
* **Server State:** TanStack Query
* **Client State:** Zustand
* **API:** JSONPlaceholder
* **Deployment:** Vercel

## 상태 관리 구조

프로젝트의 상태를 서버 상태와 클라이언트 상태로 구분하여 관리합니다.

| 구분           | 기술             | 사용 목적                               |
| ------------ | -------------- | ----------------------------------- |
| Server State | TanStack Query | 게시글 및 사용자 데이터 조회, 캐싱, 로딩 및 에러 상태 관리 |
| Client State | Zustand        | 게시글 검색어 상태 관리                       |

### TanStack Query

기존에 `useEffect`와 `useState`를 사용하여 직접 관리하던 API 요청 로직을 `useQuery` 기반으로 전환했습니다.

* `QueryClientProvider`를 통해 애플리케이션에 TanStack Query를 연결합니다.
* `queryKey`를 이용해 조회할 데이터를 구분합니다.
* `queryFn`으로 기존 API 요청 함수를 실행합니다.
* 캐싱과 로딩 및 에러 상태 관리를 TanStack Query에 위임합니다.

### Zustand

게시글 검색어를 Zustand store에서 관리하도록 변경했습니다.

* 검색어와 검색어 변경 함수를 store에 정의합니다.
* 컴포넌트에서 필요한 상태와 함수를 선택적으로 가져옵니다.
* 검색 상태 관리 로직을 UI 및 데이터 조회 로직과 분리합니다.

## CSR과 RSC 비교

이번 프로젝트에서는 클라이언트와 서버에서 데이터를 가져오는 방식을 각각 적용했습니다.

* **CSR:** 최근 활동 데이터는 클라이언트에서 TanStack Query를 통해 조회합니다.
* **RSC:** `/user` 페이지에서는 서버 컴포넌트에서 팀원 정보를 가져옵니다.
* **Rewrites:** 클라이언트 API 요청 경로를 `/api/posts`와 같은 내부 경로로 연결하여 외부 API 주소를 요청 코드에서 분리합니다.

## 실행 방법

저장소를 클론한 뒤 프로젝트 디렉터리에서 다음 명령어를 실행합니다.

```bash
npm install
npm run dev
```

실행 후 브라우저에서 아래 주소로 접속합니다.

```text
http://localhost:3000
```

## 배포 URL

배포 후 실제 Vercel URL을 입력합니다.

https://vercel.com/10mxuns-projects/rg-client-1

## 배운 점 / 어려웠던 점

이번 프로젝트에서는 Next.js의 CSR과 RSC를 직접 구현하며 두 방식의 데이터 패칭 시점과 실행 환경의 차이를 경험했습니다.

최근 활동 데이터는 클라이언트에서 조회하고, 팀원 정보는 `/user` 페이지의 서버 컴포넌트에서 가져오도록 구성했습니다. 이를 통해 데이터 패칭 방식은 페이지와 데이터의 특성에 따라 다르게 설계할 수 있다는 점을 배웠습니다.

또한 기존에는 `useEffect`와 `useState`를 이용해 API 요청, 로딩 상태, 에러 상태를 직접 관리했습니다. 이후 TanStack Query의 `useQuery`를 적용하여 서버 상태의 조회와 캐싱을 라이브러리에 위임하고, 기존 API 요청 함수를 재사용하도록 구조를 개선했습니다.

클라이언트 상태 관리에는 Zustand를 적용했습니다. 게시글 검색어를 별도의 store로 분리하여 검색 상태와 관련 로직을 관리하도록 변경했습니다. 이 과정에서 서버에서 가져오는 데이터와 사용자의 입력처럼 클라이언트에서 관리하는 상태의 차이를 이해할 수 있었습니다.

클라이언트 API 요청에는 Next.js의 `rewrites`를 활용해 내부 API 경로를 사용하도록 구성했습니다. 또한 서버 컴포넌트에서 데이터를 가져오는 방식과 캐싱 설정을 함께 살펴보며 Next.js의 데이터 패칭 구조를 학습했습니다.

프로젝트 실행 과정에서는 상위 폴더의 lockfile로 인해 Next.js가 프로젝트 루트를 잘못 인식하는 문제를 경험했습니다. `next.config.ts`의 루트 관련 설정을 확인하고 수정하면서 프로젝트 환경 설정의 중요성도 배울 수 있었습니다.

이번 개선을 통해 단순히 API를 호출하는 것에서 나아가, 서버 상태와 클라이언트 상태를 구분하고 각 목적에 맞는 도구를 선택하는 방법을 익혔습니다.
