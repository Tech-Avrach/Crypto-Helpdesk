import React from 'react'
import LoginIssueHero from './components/LoginIssueHero'
import LoginHelpCenter from './components/LoginHelpCenter'
import CryptoLoginTroubleshooter from './components/CryptoLoginTroubleshooter'

const LoginIssues = () => {
  return (
    <div>
        <LoginIssueHero />
        <CryptoLoginTroubleshooter />
        <LoginHelpCenter />
    </div>
  )
}

export default LoginIssues