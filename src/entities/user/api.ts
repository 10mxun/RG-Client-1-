/**
 * @module entities/user/api
 * User 엔티티 관련 API 호출을 담당합니다.
 */

import { User, UserApiResponse } from './model';

/**
 * 모든 사용자를 조회합니다.
 * @returns 사용자 배열
 */
export async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch("/api/users");

    if (!response.ok) {
      throw new Error('사용자 목록을 불러오지 못했습니다.');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

/**
 * 특정 사용자를 조회합니다.
 * @param id - 사용자 ID
 * @returns 사용자 객체
 */
export async function getUser(id: number): Promise<User> {
  try {
    const response = await fetch(`/api/users/${id}`);

    if (!response.ok) {
      throw new Error('사용자 정보를 불러오지 못했습니다.');
    }

    return response.json();
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    throw error;
  }
}
