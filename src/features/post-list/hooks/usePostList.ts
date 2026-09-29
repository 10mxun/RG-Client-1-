/**
 * @module features/post-list/hooks/usePostList
 * 게시글 목록 조회 로직을 캡슐화한 커스텀 훅입니다.
 *
 * 서버 상태는 TanStack Query를 사용하여 관리합니다.
 */

"use client";

import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/entities/post";
import { getUsers } from "@/entities/user";

export function usePostList() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const authors = Object.fromEntries(
    (usersQuery.data ?? []).map((user) => [user.id, user.name]),
  );

  return {
    posts: postsQuery.data ?? [],
    authors,
    loading: postsQuery.isLoading || usersQuery.isLoading,
    error: postsQuery.isError || usersQuery.isError,
  };
}
