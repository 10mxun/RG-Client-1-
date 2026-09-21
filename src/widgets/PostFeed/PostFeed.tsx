/**
 * @module widgets/PostFeed
 * 게시글 피드 위젯입니다.
 * 
 * 책임:
 * - PostList feature와 SearchInput feature를 조합
 * - 전체 게시글 피드 UI 제공
 * 
 * 여러 features를 조합하여 완성된 기능을 제공하는 위젯입니다.
 * 이는 페이지에 바로 삽입될 수 있는 자립적인 UI입니다.
 */

'use client';

import { PostList, usePostList } from '@/features/post-list';
import { SearchInput, usePostSearch } from '@/features/post-search';
import { Panel } from '@/shared/ui';

export function PostFeed() {
  const { posts, authors, loading, error } = usePostList();
  const { searchQuery, setSearchQuery, filteredPosts } = usePostSearch();

  const displayPosts = filteredPosts(posts);

  return (
    <Panel title="최근 활동" className="post-panel">
      <SearchInput 
        value={searchQuery} 
        onChange={setSearchQuery}
        placeholder="게시글 검색..."
      />
      <PostList 
        posts={displayPosts} 
        authors={authors}
        loading={loading} 
        error={error} 
      />
    </Panel>
  );
}
