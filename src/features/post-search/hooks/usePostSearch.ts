/**
 * @module features/post-search/hooks/usePostSearch
 * 게시글 검색 로직을 캡슐화한 커스텀 훅입니다.
 * 
 * 이 훅은 다음을 처리합니다:
 * - 검색 키워드 상태 관리
 * - 검색 필터링 로직
 * 
 * 주의: 현재 검색 기능은 클라이언트 사이드에서만 처리됩니다.
 * 나중에 서버 사이드 검색으로 확장할 수 있습니다.
 */

'use client';

import { useState, useCallback } from 'react';
import { Post } from '@/entities/post';

type UsePostSearchReturn = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredPosts: (posts: Post[]) => Post[];
};

export function usePostSearch(): UsePostSearchReturn {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useCallback(
    (posts: Post[]) => {
      if (!searchQuery) return posts;

      return posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
    [searchQuery]
  );

  return {
    searchQuery,
    setSearchQuery,
    filteredPosts,
  };
}
