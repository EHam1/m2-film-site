import DownloadButton from '@/components/DownloadButton'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="hero-title">
            M2 Film
          </h1>
          <p className="hero-subtitle">
            Metadata Editor for Film Photographers
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Bulk edit EXIF metadata on your scanned film photos. 
            Add timestamps, locations, film stock, and camera info in one click.
          </p>
          
          <DownloadButton />
          
          <p className="mt-6 text-sm text-gray-600">
            Free download • macOS 10.15+
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="feature-card">
              <div className="feature-icon">📸</div>
              <h3 className="feature-title">Batch Editing</h3>
              <p className="feature-description">
                Edit metadata for hundreds of photos at once. Perfect for organizing entire rolls.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3 className="feature-title">Location Search</h3>
              <p className="feature-description">
                Add GPS coordinates by searching for places. Your photos show up on the map.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎞️</div>
              <h3 className="feature-title">Film Stock & Camera</h3>
              <p className="feature-description">
                Tag your photos with film stock and camera info. Search your archive later.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3 className="feature-title">Timestamps</h3>
              <p className="feature-description">
                Set correct dates and times. Your photos appear in chronological order.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💾</div>
              <h3 className="feature-title">Safe Backups</h3>
              <p className="feature-description">
                Automatic backups before any changes. Your originals are always safe.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3 className="feature-title">Retro UI</h3>
              <p className="feature-description">
                Beautiful vintage interface that celebrates analog photography.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Version CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-400 to-yellow-400">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pro Version Coming Soon
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Advanced features like preset management, batch rename, and cloud backup.
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="btn-primary">
              Notify Me
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-bold mb-4">M2 Film</p>
          <div className="flex justify-center gap-6 mb-6">
            <Link href="/download" className="hover:text-teal-400 transition">
              Download
            </Link>
            <a 
              href="https://github.com/eham1/m2-film-app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              GitHub
            </a>
            <a 
              href="https://github.com/eham1/m2-film-app/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              Support
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © 2024 M2 Film • Made for film photographers
          </p>
        </div>
      </footer>
    </main>
  )
}
