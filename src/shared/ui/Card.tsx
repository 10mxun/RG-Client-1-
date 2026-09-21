/**
 * @module shared/ui/Card
 * 여러 곳에서 사용되는 기본 카드 컴포넌트입니다.
 * 게시글 카드, 사용자 카드 등이 상속받을 수 있는 기본 구조를 제공합니다.
 */

import React from 'react';

type CardProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
};

export function Card<T extends { id: number }>({
  items,
  renderItem,
  className = '',
}: CardProps<T>) {
  if (items.length === 0) {
    return <div className="empty">항목이 없습니다.</div>;
  }

  return (
    <div className={`card-list ${className}`}>
      {items.map((item) => (
        <div key={item.id}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
