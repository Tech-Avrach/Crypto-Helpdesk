import React from 'react'
import BitpayHelpHero from './components/BitpayHelp'
import TopBitpayIssues from './components/TopBitpayIssues'
import HelpByTopic from './components/HelpByTopic'
import CTASection from './components/CTASection'
import AgentSupport from './components/AgentSupport'

const Bitpay = () => {
  return (
    <div>
        <BitpayHelpHero />
        <TopBitpayIssues />
        <AgentSupport />
        <HelpByTopic />
        <CTASection />
    </div>
  )
}

export default Bitpay