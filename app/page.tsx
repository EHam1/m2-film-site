import DownloadButton from '@/components/DownloadButton'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream flex flex-col">
      {/* Hero Section - Centered */}
      <section className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-6 py-20 text-center max-w-4xl">
          <h1 className="hero-title">
            M2 Film
          </h1>
          <p className="hero-subtitle">
            Metadata Editor for Film Photographers
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Bulk edit EXIF metadata on your scanned film photos. 
            Add timestamps, locations, film stock, and camera info in one click.
          </p>
          
          <DownloadButton />
          
          <p className="mt-6 text-sm text-gray-600">
            Free download • macOS 10.15+
          </p>
          
          <div className="mt-4 inline-block bg-yellow-100 border-2 border-yellow-400 rounded-lg px-4 py-2">
            <p className="text-sm text-gray-800">
              <strong>Important:</strong> Follow the{' '}
              <Link href="/download" className="text-teal-600 underline font-semibold hover:text-teal-700">
                installation instructions
              </Link>
              {' '}to avoid errors while opening the app
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-8 mb-4">
            <Link href="/download" className="hover:text-teal-400 transition text-sm">
              Download
            </Link>
            <a 
              href="https://github.com/eham1/m2-film-app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition text-sm"
            >
              GitHub
            </a>
            <a 
              href="https://github.com/eham1/m2-film-app/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition text-sm"
            >
              Support
            </a>
          </div>
          <p className="text-xs text-gray-500">
            © 2025 M2 Film • Made for OCD film photographers
          </p>
        </div>
      </footer>
    </main>
  )
}
