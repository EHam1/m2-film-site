'use client'

import { useEffect, useState } from 'react'

export default function DownloadButton() {
  const [platform, setPlatform] = useState<'mac' | 'windows' | 'other'>('other')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Detect OS
    const userAgent = window.navigator.userAgent.toLowerCase()
    if (userAgent.includes('mac')) {
      setPlatform('mac')
    } else if (userAgent.includes('win')) {
      setPlatform('windows')
    } else {
      setPlatform('other')
    }
  }, [])

  const downloadUrl = 'https://github.com/eham1/m2-film-app/releases/latest'

  const getButtonText = () => {
    if (!isClient) return 'Download M2 Film'
    
    switch (platform) {
      case 'mac':
        return 'Download for macOS'
      case 'windows':
        return 'Windows Coming Soon'
      case 'other':
        return 'Download M2 Film'
    }
  }

  const isDisabled = platform === 'windows'

  return (
    <div className="inline-block">
      <a
        href={isDisabled ? undefined : downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-primary inline-block ${
          isDisabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={(e) => {
          if (isDisabled) {
            e.preventDefault()
            alert('Windows version coming soon! macOS only for now.')
          }
        }}
      >
        {getButtonText()}
      </a>
      
      {platform === 'windows' && (
        <p className="mt-3 text-sm text-gray-600">
          Windows support coming soon. macOS only for now.
        </p>
      )}
      
      {platform === 'other' && isClient && (
        <p className="mt-3 text-sm text-gray-600">
          macOS 10.15+ required
        </p>
      )}
    </div>
  )
}

