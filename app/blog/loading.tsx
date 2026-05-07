export default function Loading() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Blog</h1>
      <div className="flex flex-col gap-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg border border-gray-200 animate-pulse"
          >
            <div className="h-5 bg-gray-200 rounded w-3/4 mb-3" />
            <div className="h-4 bg-gray-100 rounded w-full mb-2" />
            <div className="h-4 bg-gray-100 rounded w-5/6" />
          </div>
        ))}
      </div>
    </main>
  )
}