import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to My Blog
        </h1>
        <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
          I am learning Next.js and Supabase and building real world apps.
        </p>
        <Link
          href="/blog"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Read the Blog →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="font-bold text-gray-800 mb-2">Next.js</h2>
          <p className="text-gray-500 text-sm">
            Learning the App Router, Server Components, and data fetching.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="font-bold text-gray-800 mb-2">Supabase</h2>
          <p className="text-gray-500 text-sm">
            Building a real database with authentication and row level security.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="font-bold text-gray-800 mb-2">Tailwind CSS</h2>
          <p className="text-gray-500 text-sm">
            Styling everything quickly without writing a single CSS file.
          </p>
        </div>
      </div>
    </main>
  )
}