'use client';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface MagicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function MagicButton({ children, ...props }: MagicButtonProps) {
  return (
    <button
      {...props}
      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:scale-105 transition-transform"
    >
      {children}
    </button>
  );
}
