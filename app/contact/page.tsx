export default function ContactPage() {
  return (
    <main>
      <div className="bg-white p-8 rounded-lg border border-gray-200 max-w-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact</h1>
        <p className="text-gray-500 leading-relaxed mb-6">
          Feel free to reach out. I am always open to new opportunities 
          and collaborations.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-400">📧</span>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-gray-700 font-medium">hello@example.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-400">🐙</span>
            <div>
              <p className="text-sm text-gray-400">GitHub</p>
              <p className="text-gray-700 font-medium">github.com/yourusername</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-400">💼</span>
            <div>
              <p className="text-sm text-gray-400">LinkedIn</p>
              <p className="text-gray-700 font-medium">linkedin.com/in/yourusername</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}