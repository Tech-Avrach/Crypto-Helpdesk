import React from 'react'
import HeroSection from './Components/Hero'
import CryptoHelpStrip from './Components/CryptoHelpStrip'
import TopIssueCategories from './Components/TopIssueCategories'
import HowItWorks from './Components/HowItWorks'
import TroubleshootingGuides from './Components/TroubleshootingGuides'
import BlogsSection from './Components/BlogsSection'
import TrustReminder from './Components/TrustReminder'

function Home() {
  return (
    <div>
      <HeroSection />
      <CryptoHelpStrip />
      <TopIssueCategories />
      <HowItWorks />
      <TroubleshootingGuides />
      <TrustReminder />
      <BlogsSection />
    </div>
  )
}

export default Home