/**
 * @module features/post-list/ui/PostList
 * 게시글 목록을 렌더링하는 UI 컴포넌트입니다.
 * 
 * 책임:
 * - 게시글 목록 표시
 * - 로딩/에러 상태 UI 표시
 * 
 * 이 컴포넌트는 게시글 데이터 페칭 로직을 알지 못합니다.
 * 데이터는 부모 컴포넌트(widget)에서 전달됩니다.
 */

'use client';

import type { Post } from '@/entities/post';

type PostListProps = {
  posts: Post[];
  authors: Record<number, string>;
  loading: boolean;
  error: boolean;
};

export function PostList({ posts, authors, loading, error }: PostListProps) {
  if (loading) {
    return (
      <div className="loading">
        포스트를 불러오는 중입니다
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        포스트를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.
      </div>
    );
  }

  if (posts.length === 0) {
    return <div className="loading">검색 결과가 없습니다.</div>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <article className="activity-card" key={post.id}>
          <span className="activity-icon">✓</span>
          <div>
            <h3>{post.title}</h3>
            <p>작성자: {authors[post.userId] ?? '알 수 없음'}</p>
            <p>{post.body}</p>
            <span className="activity-state">완료됨</span>
          </div>
        </article>
      ))}
    </div>
  );
}
