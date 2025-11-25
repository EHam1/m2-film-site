import DownloadButton from '@/components/DownloadButton'
import Link from 'next/link'

export default function Download() {
  return (
    <main className="min-h-screen bg-cream">
      <div className="container mx-auto px-6 py-20">
        <Link href="/" className="inline-block mb-8 text-teal-600 hover:text-teal-700 font-semibold">
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Download M2 Film
        </h1>
        
        <div className="max-w-3xl">
          <p className="text-xl text-gray-700 mb-8">
            Free metadata editor for film photographers. Available for macOS.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border-4 border-gray-900">
            <h2 className="text-2xl font-bold mb-4">Latest Version</h2>
            <DownloadButton />
            <p className="mt-4 text-sm text-gray-600">
              Version 1.0.0 • macOS 10.15 or later
            </p>
          </div>

          <div className="prose prose-lg">
            <h2>Installation Instructions</h2>
            
            <h3>First Time Opening</h3>
            <ol>
              <li>Download the <code>.dmg</code> file above</li>
              <li>Open the downloaded file</li>
              <li>Drag <strong>M2 Film</strong> to your Applications folder</li>
              <li><strong>Right-click</strong> the app and select <strong>Open</strong></li>
              <li>Click <strong>Open</strong> in the security dialog</li>
            </ol>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className="font-semibold">⚠️ macOS Security Note</p>
              <p className="text-sm mt-2">
                The first time you open M2 Film, macOS will show a security warning because 
                the app isn&apos;t notarized yet. Right-click → Open bypasses this. 
                The app is safe and open source.
              </p>
            </div>

            <h3>System Requirements</h3>
            <ul>
              <li>macOS 10.15 (Catalina) or later</li>
              <li>Apple Silicon or Intel processor</li>
              <li>50 MB free disk space</li>
            </ul>

            <h3>Supported File Formats</h3>
            <ul>
              <li>JPEG (.jpg, .jpeg)</li>
              <li>TIFF (.tif, .tiff)</li>
            </ul>

            <h3>Getting Started</h3>
            <ol>
              <li>Launch M2 Film</li>
              <li>Drag photos from a single folder into the app</li>
              <li>Select photos you want to edit</li>
              <li>Fill in metadata (timestamp, location, film stock, camera)</li>
              <li>Click <strong>Write Changes</strong></li>
              <li>Your photos now have complete metadata!</li>
            </ol>

            <h3>Backups</h3>
            <p>
              M2 Film automatically backs up your original files before making changes. 
              Backups are saved in a <code>m2-film-backups/</code> folder next to your photos.
            </p>

            <h3>Need Help?</h3>
            <p>
              Check out our{' '}
              <a 
                href="https://github.com/eham1/m2-film-app/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700"
              >
                GitHub Issues
              </a>{' '}
              for support or to report bugs.
            </p>

            <h3>Windows Version?</h3>
            <p>
              Windows support is planned for a future update. Star the{' '}
              <a 
                href="https://github.com/eham1/m2-film-app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700"
              >
                GitHub repo
              </a>{' '}
              to get notified when it&apos;s ready.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

