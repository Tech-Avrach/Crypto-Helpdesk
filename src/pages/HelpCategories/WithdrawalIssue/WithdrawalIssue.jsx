import React from 'react'
import WithdrawalIssueHero from './components/WithdrawalIssueHero'
import CryptoWithdrawalTroubleshooter from './components/CryptoWithdrawalTroubleshooter'
import WithdrawalHelpCenter from './components/WithdrawalHelpCenter'

const WithdrawalIssue = () => {
  return (
    <div>
        <WithdrawalIssueHero />
        <CryptoWithdrawalTroubleshooter />
        <WithdrawalHelpCenter />
    </div>
  )
}

export default WithdrawalIssue