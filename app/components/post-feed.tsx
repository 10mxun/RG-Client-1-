'use client';

import { useEffect, useState } from 'react';

export default function PostFeed() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch('/api/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        await response.json();
        setLoaded(true);
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
      {!loading && !error && loaded && (
        <div className="post-list">
          <article className="activity-card">
            <span className="activity-icon">✓</span>
            <div>
              <h3>테스트 1</h3>
              <p>테스트 활동입니다.</p>
              <span className="activity-state">완료됨</span>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
