/**
 * @module features/post-list/hooks/usePostList
 * 게시글 목록 조회 로직을 캡슐화한 커스텀 훅입니다.
 * 
 * 이 훅은 다음을 처리합니다:
 * - 게시글 데이터 페칭
 * - 로딩/에러 상태 관리
 * - 페이지네이션 (첫 1개만 표시)
 */

'use client';

import { useEffect, useState } from 'react';
import { getPosts, Post } from '@/entities/post';
import { getUsers } from '@/entities/user';

type UsePostListReturn = {
  posts: Post[];
  authors: Record<number, string>;
  loading: boolean;
  error: boolean;
};

export function usePostList(): UsePostListReturn {
  const [posts, setPosts] = useState<Post[]>([]);
  const [authors, setAuthors] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const [postData, userData] = await Promise.all([getPosts(), getUsers()]);
        setPosts(postData);
        setAuthors(
          Object.fromEntries(userData.map((user) => [user.id, user.name]))
        );
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return { posts, authors, loading, error };
}
