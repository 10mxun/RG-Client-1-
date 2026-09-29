/**
 * @module features/post-search/hooks/usePostSearch
 * 게시글 검색 로직을 캡슐화한 커스텀 훅입니다.
 *
 * 검색어와 같은 Client State는 Zustand로 관리합니다.
 */

"use client";

import { useCallback } from "react";
import { Post } from "@/entities/post";
import { usePostSearchStore } from "../store/postSearchStore";

type UsePostSearchReturn = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredPosts: (posts: Post[]) => Post[];
};

export function usePostSearch(): UsePostSearchReturn {
  const searchQuery = usePostSearchStore((state) => state.searchQuery);
  const setSearchQuery = usePostSearchStore((state) => state.setSearchQuery);

  const filteredPosts = useCallback(
    (posts: Post[]) => {
      if (!searchQuery) return posts;

      return posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    },
    [searchQuery],
  );

  return {
    searchQuery,
    setSearchQuery,
    filteredPosts,
  };
}
