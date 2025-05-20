'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MagicButton } from '@/components/ui/magic-button';
import { LampContainer } from '@/components/ui/lamp';
import { CardBody, CardContainer, CardItem } from '../../components/ui/3d-card';

const projects = [
  {
    title: "AI Assistant",
    description: "System wspierający automatyzację obsługi klienta.",
    slug: "ai-helpdesk",
    tech: ["Python", "OpenAI API", "Next.js"],
    results: "Redukcja czasu odpowiedzi o 45%"
  },
  {
    title: "Porownanie ofert",
    description: "Projekt porównojacy oferty ubezpieczen z użyciem AI",
    slug: "transmission-ai",
    tech: ["MATLAB", "Python", "ML"],
    results: "Zwiększenie efektywności sprzedawcy"
  }
];

export default function AboutPage() {
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
          className="flex flex-col md:flex-row items-center gap-8 my-24"
        >
          <div className="w-64 h-64 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
            <Image
              src="/profile.jpg"
              alt="Łukasz Baran"
              width={512}
              height={512}
              className="relative rounded-full border-4 border-white/10"
            />
          </div>

          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
              Ekspert AI i telekomunikacji
            </h2>
            <p className="text-slate-400 max-w-2xl">
              Posiadam ponad 10 lat doświadczenia w zarządzaniu zespołami i procesami w obszarze obsługi klienta oraz sprzedaży online. W Trasti, jako Manager Centrum Obsługi Klienta i Agenta, wspieram kluczowe procesy związane z obsługą klientów i agentów, zarządzając raportowaniem wyników, rekrutacją oraz testowaniem aplikacji. Dzięki umiejętności zarządzania zmianami oraz skutecznej koordynacji działań zespołowych, przyczyniam się do wzrostu efektywności i rozwoju organizacji.

              W swojej roli koncentruję się na wspieraniu zmian, które wzmacniają wydajność pracy zespołu. Moje wcześniejsze doświadczenie w zarządzaniu zespołem windykacyjnym w EOS KSI Polska oraz budowanie efektywnych relacji z agentami ubezpieczeniowymi w Generali pozwoliły mi rozwinąć kompetencje w zarządzaniu zmianami i budowie relacji biznesowych. Moje działania są ukierunkowane na realizację celów organizacji z wykorzystaniem różnorodnych perspektyw i doświadczeń.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              <MagicButton>
                <Link href="/cv.pdf">📄 Pobierz CV</Link>
              </MagicButton>
              <MagicButton>
                <Link href="https://linkedin.com/in/łukasz-baran-942ab398" target="_blank">
                  🔗 LinkedIn
                </Link>
              </MagicButton>
              <MagicButton>
                <Link href="/projects">🚀 Projekty</Link>
              </MagicButton>
            </div>
          </div>
        </motion.div>

        <section className="my-24 space-y-12">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Doświadczenie zawodowe
          </h2>

          <CardContainer className="inter-var">
            <CardBody className="bg-gray-900/50 relative group/card hover:shadow-2xl hover:shadow-blue-500/20 transition-shadow">
              <CardItem translateZ="50" className="text-2xl font-bold text-slate-300">
                TRASTI - Manager Centrum Obsługi Klienta i Agenta
              </CardItem>
              <CardItem translateZ="60" className="text-blue-400 text-sm mt-2">
                Listopad 2020 – obecnie, Lublin
              </CardItem>
              <CardItem
                as="ul"
                translateZ="80"
                className="text-slate-400 text-sm mt-4 space-y-2 list-disc pl-5"
              >
                <li>Kierowanie zespołów ds. obsługi klientów i agentów</li>
                <li>Implementacja rozwiązań opartych na AI zwiększających efektywność operacyjną</li>
                <li>Rekrutacja i rozwój zespołu</li>
                <li>Rozwój i optymalizacja aplikacji wewnętrznych</li>
                <li>Analiza danych i raportowanie wyników (KPI, SLA,)</li>
          
              </CardItem>
            </CardBody>
          </CardContainer>
        </section>

        <section className="my-24">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Projekty z AI
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <CardContainer key={project.slug} className="inter-var">
                <CardBody className="bg-gray-900/50 relative group/card hover:shadow-2xl hover:shadow-purple-500/20">
                  <CardItem translateZ="50" className="text-xl font-bold text-slate-300">
                    {project.title}
                  </CardItem>
                  <CardItem translateZ="60" className="text-slate-400 text-sm mt-2">
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="80" className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </CardItem>
                  <CardItem translateZ="100" className="mt-6">
                    <MagicButton>
                      <Link href={`/projects/${project.slug}`}>Szczegóły →</Link>
                    </MagicButton>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </section>

        <section className="my-24">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Umiejętności techniczne
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['AI i ML', 'Automatyzacja procesów', 'Analiza danych', 'Chmura'].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl border border-white/10"
              >
                <h3 className="text-lg font-semibold text-slate-300">{skill}</h3>
                <p className="text-slate-400 text-sm mt-2">
                  {{
                    'AI i ML': 'Python • GPT-4 • NLP • TensorFlow',
                    'Automatyzacja procesów': 'RPA • BPMN • Lean',
                    'Analiza danych': 'Power BI • SQL • Excel VBA',
                    'Chmura': 'AWS • Azure • CI/CD'
                  }[skill]}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
