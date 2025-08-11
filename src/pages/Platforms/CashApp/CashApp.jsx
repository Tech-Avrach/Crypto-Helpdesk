import React from 'react'
import CashAppHelpHero from './components/CashAppHelpHero'
import TopCashAppIssues from './components/TopCashAppIssues'
import CashAppAgentSupport from './components/AgentSupport'
import HelpByTopicCashApp from './components/HelpByTopicCashApp'
import CTASectionCashApp from './components/CTASectionCashApp'

const CashApp = () => {
  return (
    <div>
        <CashAppHelpHero />
        <TopCashAppIssues />
        <CashAppAgentSupport />
        <HelpByTopicCashApp />
        <CTASectionCashApp />
    </div>
  )
}

export default CashApp