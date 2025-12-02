export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-orange-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-indigo-900 mb-6">
            Jengalabs
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stacking Ideas, Building Futures. Your Full-Stack, Full-Potential Studio.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}