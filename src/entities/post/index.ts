/**
 * @module entities/post
 * Post 엔티티의 공개 인터페이스입니다.
 * 다른 레이어에서는 이 파일을 통해서만 post 엔티티에 접근합니다.
 */

export { getPosts, getPost } from './api';
export type { Post, PostApiResponse } from './model';
