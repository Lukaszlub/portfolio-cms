export default function Page() {
  return (
    <div className="bg-green-500 text-white p-6">
      Tailwind działa poprawnie!
    </div>
  );
}
export const projects = [
  {
    title: "AI Helpdesk Assistant",
    description: "System wspierający automatyzację obsługi klienta w infrastrukturze krytycznej",
    slug: "ai-helpdesk",
    tech: ["Python", "OpenAI API", "Next.js"],
    results: "Redukcja czasu odpowiedzi o 45%"
  },
  {
    title: "Transmission Optimizer",
    description: "Projekt optymalizacji planowania radiowego z użyciem AI",
    slug: "transmission-ai",
    tech: ["MATLAB", "Python", "ML"],
    results: "Zwiększenie efektywności pasma o 20%"
  }
];
