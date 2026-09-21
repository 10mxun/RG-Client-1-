/**
 * @module shared/ui/Panel
 * 여러 페이지에서 사용되는 기본 패널 컴포넌트입니다.
 * 반복되는 스타일링을 이곳에서 처리합니다.
 */

import React from 'react';

type PanelProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function Panel({ title, children, className = '' }: PanelProps) {
  return (
    <section className={`panel ${className}`}>
      {title && (
        <div className="panel-heading">
          <h2>{title}</h2>
        </div>
      )}
      {children}
    </section>
  );
}
