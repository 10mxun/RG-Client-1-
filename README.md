# Next.js 팀 활동 대시보드

## 프로젝트 소개

팀원 목록과 최근 활동 내역을 한눈에 확인할 수 있는 대시보드입니다.

Next.js를 공부하면서 CSR과 RSC에서 데이터를 가져오는 방식의 차이를 직접 사용해보기 위해 만들었습니다.

## 주요 기능

- 팀원 목록 확인
- 최근 활동 내역 확인
- CSR을 이용한 최근 활동 데이터 가져오기
- `/user` 페이지에서 RSC를 이용한 팀원 정보 데이터 가져오기
- Next.js `rewrites`를 이용한 클라이언트 API 요청

## 기술 스택

- Next.js 16
- React 19
- TypeScript
- CSS
- JSONPlaceholder API
- Vercel

## 실행 방법

```bash
npm install
npm run dev
```

실행 후 브라우저에서 아래 주소로 접속합니다.

```text
http://localhost:3000
```

## 배포 URL

[https://your-project-name.vercel.app](https://your-project-name.vercel.app)

※ Vercel 배포 후 실제 URL로 수정

## 배운 점 / 어려웠던 점

이번 프로젝트를 만들면서 Next.js에서 CSR과 RSC를 사용하는 방법을 직접 경험해봤습니다.

최근 활동은 `useEffect`를 사용해서 클라이언트에서 데이터를 가져오도록 만들었고, 팀원 정보는 서버 컴포넌트에서 데이터를 가져오도록 했습니다. 직접 구현해보면서 두 방식의 데이터 요청 시점이 다르다는 것을 알게 되었습니다.

또 클라이언트에서 실행되는 최근 활동 요청은 JSONPlaceholder API 주소를 직접 노출하지 않고, Next.js의 `rewrites`를 이용해 `/api/posts` 내부 경로로 요청하도록 만들었습니다. 반면 서버 컴포넌트인 `/user` 페이지는 브라우저에 코드가 전달되지 않으므로 외부 API를 직접 요청하고, `revalidate`로 데이터를 캐싱합니다.

프로젝트를 실행하는 과정에서는 상위 폴더의 lockfile 때문에 Next.js가 프로젝트 루트를 잘못 인식하는 문제가 있었습니다. `next.config.ts`에서 `outputFileTracingRoot`를 설정해서 현재 프로젝트를 루트로 지정하는 방법으로 해결했습니다.

처음에는 CSR과 RSC의 차이를 이론으로만 알고 있었는데 직접 적용해보면서 각각 어떤 상황에서 사용할 수 있는지 조금 더 이해할 수 있었습니다.
# RG-Client-1-
# RG-Client-1-
# RG-Client-1-
