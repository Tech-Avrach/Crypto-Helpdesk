import React from 'react'
import KYCIssueHero from './components/KYCIssueHero'
import KYCTroubleshooter from './components/KYCTroubleshooter'
import KYCHelpCenter from './components/KYCHelpCenter'

const KYCProblem = () => {
  return (
    <div>
        <KYCIssueHero />
        <KYCTroubleshooter />
        <KYCHelpCenter />
    </div>
  )
}

export default KYCProblem