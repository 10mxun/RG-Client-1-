/**
 * @module entities/post/model
 * 게시글 엔티티의 타입을 정의합니다.
 * 모든 post 관련 타입 정의가 여기에 집중됩니다.
 */

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type PostApiResponse = Post[];
