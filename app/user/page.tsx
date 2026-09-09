type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  company: { name: string };
};

async function getUsers(): Promise<User[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 3600 },
  });

  if (!response.ok) throw new Error('사용자 목록을 불러오지 못했습니다.');
  return response.json();
}

export default async function UserPage() {
  const users = await getUsers();

  return (
    <main>
      <header>
        <a className="brand" href="/">Next.js 연습</a>
        <a className="user-link" href="/">최근 활동</a>
      </header>
      <section className="intro">
        <h1>팀원 목록</h1>
        <span className="summary">함께 작업하는 팀원들입니다.</span>
      </section>
      <section className="panel">
        <div className="user-grid">
          {users.slice(0, 3).map((user) => (
            <article className="user-card" key={user.id}>
              <h2>{user.name}</h2>
              <p>@{user.username}</p>
              <p>{user.email}</p>
              <span>{user.company.name}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
