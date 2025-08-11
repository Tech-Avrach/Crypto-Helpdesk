import React from 'react'
import CoinbaseHelpHero from './components/CoinbaseHelp'
import TopCoinbaseIssues from './components/TopCoinbaseIssues'
import HelpByTopic from './components/HelpByTopic'
import CTASection from './components/CTASection'
import AgentSupport from './components/AgentSupport'

const Coinbase = () => {
  return (
    <div>
        <CoinbaseHelpHero />
        <TopCoinbaseIssues />
        <AgentSupport />
        <HelpByTopic />
        <CTASection />
    </div>
  )
}

export default Coinbase