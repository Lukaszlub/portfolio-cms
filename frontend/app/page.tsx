'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LampContainer } from '@/components/ui/lamp';
import { MagicButton } from '@/components/ui/magic-button';

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0 bg-grid-white/[0.05]">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-900/30" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-6xl font-bold tracking-tight text-transparent"
          >
            <span className="text-4xl md:text-7xl">Łukasz Baran</span>
            <br />
            <span className="text-xl md:text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Principal Engineer @ EmiTel | AI in Operations
            </span>
          </motion.h1>
        </LampContainer>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center gap-6 mt-20"
        >
          <MagicButton>
            <Link href="/about">ℹ️ O mnie</Link>
          </MagicButton>
          <MagicButton>
            <Link href="/projects">🚀 Projekty</Link>
          </MagicButton>
          <MagicButton>
            <Link href="/ideas">💡 Moje pomysły</Link>
          </MagicButton>
        </motion.div>
      </main>
    </div>
  );
}
