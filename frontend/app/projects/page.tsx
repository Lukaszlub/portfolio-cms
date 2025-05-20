'use client';

import Link from 'next/link';
import { MagicButton } from '@/components/ui/magic-button';

const projects = [
  { title: "AI Helpdesk Assistant", slug: "ai-helpdesk" },
  { title: "Transmission Optimizer", slug: "transmission-ai" },
  { title: "Customer Churn Predictor", slug: "customer-churn" },
];

const ideas = [
  { title: "AI do analizy umów", slug: "contract-ai" },
  { title: "Bot rekrutacyjny", slug: "recruitment-bot" },
  { title: "Predykcja awarii infrastruktury", slug: "infrastructure-ai" },
  { title: "Asystent do zgłoszeń serwisowych", slug: "service-assistant" },
  { title: "Wirtualny mentor dla inżynierów", slug: "ai-mentor" },
  { title: "Automatyczny audyt dokumentów", slug: "doc-audit-ai" },
];

export default function ProjectsPage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Tło jak w /about */}
      <div className="absolute inset-0 z-0 bg-grid-white/[0.05]">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-900/30" />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-32">
        {/* Projekty */}
        <section>
          <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-16">
            Moje Projekty
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <MagicButton key={project.slug}>
                <Link href={`/projects/${project.slug}`}>
                  {project.title}
                </Link>
              </MagicButton>
            ))}
          </div>
        </section>

        {/* Pomysły */}
        <section>
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-16">
            Moje Pomysły
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {ideas.map((idea) => (
              <MagicButton key={idea.slug}>
                <Link href={`/ideas/${idea.slug}`}>
                  {idea.title}
                </Link>
              </MagicButton>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
