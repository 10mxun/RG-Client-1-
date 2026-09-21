/**
 * @module features/user-list/ui/UserList
 * 사용자 목록을 렌더링하는 서버 컴포넌트입니다.
 * 
 * 책임:
 * - 사용자 목록 표시
 * 
 * 서버 컴포넌트이므로 직접 데이터를 페칭할 수 있습니다.
 * 이 컴포넌트는 데이터 페칭과 렌더링을 함께 처리합니다.
 */

import { getUsers, User } from '@/entities/user';

type UserListProps = {
  limit?: number;
};

export async function UserList({ limit = 3 }: UserListProps) {
  const users = await getUsers();

  return (
    <div className="user-grid">
      {users.slice(0, limit).map((user) => (
        <article className="user-card" key={user.id}>
          <h2>{user.name}</h2>
          <p>@{user.username}</p>
          <p>{user.email}</p>
          <span>{user.company.name}</span>
        </article>
      ))}
    </div>
  );
}
