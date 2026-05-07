export default function AboutPage() {
  return (
    <main>
      <div className="bg-white p-8 rounded-lg border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-gray-500 leading-relaxed mb-4">
          I am a developer learning Next.js and Supabase to build 
          real world full stack applications.
        </p>
        <p className="text-gray-500 leading-relaxed mb-4">
          This blog is my learning project — built from scratch 
          during a 4 week intensive study plan.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
              Next.js
            </span>
            <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm">
              Supabase
            </span>
            <span className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm">
              Tailwind CSS
            </span>
            <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm">
              TypeScript
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}