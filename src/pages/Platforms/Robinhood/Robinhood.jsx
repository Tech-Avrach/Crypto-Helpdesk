import React from 'react'
import RobinhoodHelpHero from './components/RobinhoodHelpHero'
import TopRobbinHoodIssues from './components/TopRobbinHoodIssues'
import RobinhoodAgentSupport from './components/AgentSupport'
import HelpByTopicRobinhood from './components/HelpByTopicRobinhood'
import CTASectionRobinhood from './components/CTASectionRobinhood'

const Robinhood = () => {
  return (
    <div>
        <RobinhoodHelpHero />
        <TopRobbinHoodIssues />
        <RobinhoodAgentSupport />
        <HelpByTopicRobinhood />
        <CTASectionRobinhood />
    </div>
  )
}

export default Robinhood