/**
 * @module entities/post/api
 * Post 엔티티 관련 API 호출을 담당합니다.
 * 엔티티 레이어에서만 서버 데이터와 직접 통신합니다.
 */

import { Post, PostApiResponse } from './model';

/**
 * 모든 게시글을 조회합니다.
 * @returns 게시글 배열
 */
export async function getPosts(): Promise<Post[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

/**
 * 특정 게시글을 조회합니다.
 * @param id - 게시글 ID
 * @returns 게시글 객체
 */
export async function getPost(id: number): Promise<Post> {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    throw error;
  }
}
