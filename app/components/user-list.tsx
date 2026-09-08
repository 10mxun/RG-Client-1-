import { headers } from 'next/headers';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  company: { name: string };
};

async function getUsers(): Promise<User[]> {
  const requestHeaders = await headers();
  const host = requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host');
  const protocol = requestHeaders.get('x-forwarded-proto') ?? 'http';

  if (!host) throw new Error('요청 주소를 확인할 수 없습니다.');

  const response = await fetch(`${protocol}://${host}/api/users`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) throw new Error('사용자 목록을 불러오지 못했습니다.');
  return response.json();
}

export default async function UserList() {
  await getUsers();

  return (
    <section className="panel user-panel">
      <div className="panel-heading">
        <h2>팀원</h2>
      </div>
      <div className="user-grid">
        <article className="user-card">
          <div>
            <h3>최민준</h3>
            <p>@minjun</p>
          </div>
        </article>
      </div>
    </section>
  );
}
