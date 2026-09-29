/**
 * @module features/user-list/ui/UserList
 * 사용자 목록을 렌더링하는 컴포넌트입니다.
 *
 * 사용자 목록의 서버 상태는 TanStack Query로 관리합니다.
 */

"use client";

import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/entities/user";

type UserListProps = {
  limit?: number;
};

export function UserList({ limit = 3 }: UserListProps) {
  const {
    data: users = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) {
    return <p className="loading">팀원 정보를 불러오는 중입니다.</p>;
  }

  if (isError) {
    return <p className="error">팀원 정보를 불러오지 못했습니다.</p>;
  }

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
