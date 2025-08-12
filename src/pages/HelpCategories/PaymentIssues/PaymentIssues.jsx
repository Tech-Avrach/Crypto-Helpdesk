import React from 'react'
import PaymentIssueHero from './components/PaymentIssueHero'
import PaymentHelpCenter from './components/PaymentHelpCenter'
import CryptoPaymentTroubleshooter from './components/CryptoPaymentTroubleshooter'

const PaymentIssues = () => {
  return (
    <div>
        <PaymentIssueHero />
        <CryptoPaymentTroubleshooter />
        <PaymentHelpCenter />
    </div>
  )
}

export default PaymentIssues