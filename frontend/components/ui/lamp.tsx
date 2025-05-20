'use client';
import { ReactNode } from 'react';

export function LampContainer({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full flex justify-center items-center py-10">
      <div className="absolute top-0 w-80 h-80 bg-blue-500 opacity-20 rounded-full blur-3xl" />
      <div className="z-10">{children}</div>
    </div>
  );
}
