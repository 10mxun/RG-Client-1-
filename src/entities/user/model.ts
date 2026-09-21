/**
 * @module entities/user/model
 * 사용자 엔티티의 타입을 정의합니다.
 */

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  company: {
    name: string;
  };
};

export type UserApiResponse = User[];
