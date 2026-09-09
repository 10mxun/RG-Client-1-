'use client';

import { useEffect, useState } from 'react';

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function PostFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch('/api/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data: Post[] = await response.json();
        setPosts(data.slice(0, 1));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getPosts();
  }, []);

  return (
    <section className="panel post-panel">
      <div className="panel-heading">
          <h2>최근 활동</h2>
      </div>

      {loading && <div className="loading">포스트를 불러오는 중입니다<span>.</span><span>.</span><span>.</span></div>}
      {error && <div className="error">포스트를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.</div>}
      {!loading && !error && (
        <div className="post-list">
          {posts.map((post) => (
            <article className="activity-card" key={post.id}>
              <span className="activity-icon">✓</span>
              <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <span className="activity-state">완료됨</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
