import Link from 'next/link';

const subjects = [
  { slug: 'html', emoji: '🌐', name: 'HTML', questions: 40 },
  { slug: 'css', emoji: '🎨', name: 'CSS', questions: 10 },
  { slug: 'javascript', emoji: '⚡', name: 'JavaScript', questions: 10 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-3">Exam Quiz App</h1>
      <p className="text-gray-400 text-lg mb-12">Choose a subject to start your quiz</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-2xl">
        {subjects.map((subject) => (
          <Link
            key={subject.slug}
            href={`/quiz/${subject.slug}`}
            className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-indigo-500 hover:bg-gray-800 transition-all duration-200 cursor-pointer"
          >
            <span className="text-5xl">{subject.emoji}</span>
            <span className="text-lg font-semibold">{subject.name}</span>
            <span className="text-sm text-gray-400 group-hover:text-indigo-400 transition-colors">
              {subject.questions} Questions
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
