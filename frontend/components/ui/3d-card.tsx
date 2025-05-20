'use client';
import { ReactNode } from 'react';

export function CardContainer({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`relative group perspective-1000 ${className}`}>{children}</div>;
}

export function CardBody({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`relative transform transition-transform duration-500 group-hover:rotate-y-2 group-hover:scale-105 ${className}`}>{children}</div>;
}

export function CardItem({ children, className = '', ...props }: any) {
  return (
    <div className={`transition-transform ${className}`} {...props}>
      {children}
    </div>
  );
}
