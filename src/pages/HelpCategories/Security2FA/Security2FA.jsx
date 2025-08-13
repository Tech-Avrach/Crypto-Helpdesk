import React from 'react'
import Security2FAHero from './components/Security2FAHero'
import Security2FATroubleshooter from './components/Security2FATroubleshooter'
import Security2FAHelpCenter from './components/Security2FAHelpCenter'

const Security2FA = () => {
  return (
    <div>
      <Security2FAHero />
      <Security2FATroubleshooter />
      <Security2FAHelpCenter />
    </div>
  )
}

export default Security2FA