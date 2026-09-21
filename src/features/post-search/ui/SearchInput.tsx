/**
 * @module features/post-search/ui/SearchInput
 * 게시글 검색 입력창 UI 컴포넌트입니다.
 * 
 * 책임:
 * - 검색 입력창 렌더링
 * - 입력값 변경 이벤트 처리
 * 
 * 실제 검색 로직은 부모 컴포넌트에서 처리됩니다.
 */

'use client';

import React from 'react';

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function SearchInput({
  value,
  onChange,
  placeholder = '게시글 검색...',
}: SearchInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="search-input"
      aria-label="게시글 검색"
    />
  );
}
