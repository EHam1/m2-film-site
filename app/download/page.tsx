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
              Version 1.0.0 • macOS 11.0 (Big Sur) or later • Apple Silicon (M1/M2/M3)
            </p>
          </div>

          <div className="prose prose-lg">
            <h2>Installation Instructions</h2>
            
            <h3>Quick Install (2 Steps)</h3>
            <ol>
              <li>Download the <code>.dmg</code> or <code>.zip</code> file above</li>
              <li>If using DMG: Open it and drag <strong>M2 Film</strong> to Applications</li>
              <li>If using ZIP: Unzip and drag <strong>M2 Film.app</strong> to Applications</li>
              <li><strong>Right-click</strong> the app in Applications and select <strong>Open</strong></li>
              <li>Click <strong>Open</strong> in the security dialog</li>
              <li>Done! Future opens will work normally</li>
            </ol>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className="font-semibold">⚠️ Why Your Mac Will Yell at You</p>
              <p className="text-sm mt-2">
                Look, I&apos;m a bum who doesn&apos;t have an Apple Developer account ($99/year) to 
                &quot;sign&quot; this app properly. So when you download M2 Film, macOS will quarantine it and 
                throw up scary warnings. <strong>The app is completely safe</strong> — it&apos;s{' '}
                <a href="https://github.com/eham1/m2-film-app" 
                target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">fully open source</a> 
                {' '}so you can inspect every line of code. Just <strong>right-click → Open</strong> to bypass 
                the Gatekeeper check and you&apos;re golden.
              </p>
            </div>

            <h3>If Right-Click Doesn&apos;t Work</h3>
            <p>Open Terminal and run:</p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
              xattr -cr &quot;/Applications/M2 Film.app&quot;
            </pre>
            <p className="text-sm text-gray-600 mt-2">
              This removes the macOS quarantine flag. Then open the app normally.
            </p>

            <h3>System Requirements</h3>
            <ul>
              <li>macOS 11.0 (Big Sur) or later</li>
              <li>Apple Silicon (M1, M2, M3) - arm64 architecture</li>
              <li>~300 MB free disk space</li>
              <li>4 GB RAM minimum</li>
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

