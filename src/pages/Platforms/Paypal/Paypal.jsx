import React from 'react'
import PayPalHelpHero from './components/PayPalHelpHero'
import TopPayPalIssues from './components/TopPayPalIssues'
import PayPalAgentSupport from './components/PayPalAgentSupport'
import HelpByTopicPayPal from './components/HelpByTopicPayPal'
import CTASectionPayPal from './components/CTASectionPayPal'

const Paypal = () => {
  return (
    <div>
        <PayPalHelpHero />
        <TopPayPalIssues />
        <PayPalAgentSupport />
        <HelpByTopicPayPal />
        <CTASectionPayPal />
    </div>
  )
}

export default Paypal