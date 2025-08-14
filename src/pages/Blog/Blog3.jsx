import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Eye, Phone, MessageCircle, Mail, User, Send, Smartphone, TrendingUp, Zap, Shield, CreditCard, BarChart2, Globe } from 'lucide-react';

const CryptoAppsBlog = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [readers, setReaders] = useState(15632);

  useEffect(() => {
    const interval = setInterval(() => {
      setReaders(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } else {
      alert('Please fill in all fields');
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Main Blog Content - 70% */}
          <motion.div 
            className="xl:w-[70%] w-full xl:pr-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Hero Image */}
            <motion.div 
              className="relative overflow-hidden rounded-2xl shadow-2xl mb-8"
              variants={fadeInUp}
            >
              <img 
                src="https://m.economictimes.com/thumb/msid-119805576,width-1200,height-900,resizemode-4,imgsize-3534412/lead-image.jpg"
                alt="Must-Have Crypto Apps 2025"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <motion.span 
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Resources
                </motion.span>
              </div>
            </motion.div>

            {/* Article Header */}
            <motion.div className="mb-8" variants={fadeInUp}>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                5 Great Crypto Apps You Should Not Be Missing Out in 2025
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span>March 2, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-gray-500" />
                  <span>{readers.toLocaleString()} readers</span>
                </div>
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.article className="prose prose-lg max-w-none" variants={fadeInUp}>
              
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The cryptocurrency ecosystem has exploded with innovative applications in 2025, offering everything from AI-powered trading to decentralized social media. With so many options available, it's easy to miss out on truly transformative apps that can enhance your crypto experience.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  After testing hundreds of applications, we've curated this list of 5 must-have crypto apps that deliver exceptional value, security, and user experience. Whether you're a trader, investor, or crypto enthusiast, these apps will help you navigate the Web3 space more effectively.
                </p>
              </div>

              {/* Top Crypto Apps */}
              <motion.section className="mb-10" variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <Smartphone className="text-gray-600" />
                  Essential Crypto Apps for 2025
                </h2>
                
                <div className="space-y-8">
                  {/* 1. Delta Portfolio Tracker */}
                  <motion.div 
                    className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">1</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-black">Delta Portfolio Tracker</h3>
                        <p className="text-blue-600 font-medium">Best Portfolio Management</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Delta has become the gold standard for tracking crypto portfolios across multiple wallets and exchanges. The 2025 version introduces AI-powered insights, tax optimization suggestions, and predictive analytics based on market trends.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Multi-exchange</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AI Analytics</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Tax Reports</span>
                    </div>
                  </motion.div>

                  {/* 2. Zerion */}
                  <motion.div 
                    className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">2</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-black">Zerion</h3>
                        <p className="text-blue-600 font-medium">Best DeFi Interface</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Zerion has evolved into the most comprehensive DeFi dashboard, allowing users to manage all their decentralized finance activities from one interface. The 2025 update includes cross-chain swaps, yield farming automation, and institutional-grade security features.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">DeFi Dashboard</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Cross-chain</span>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Yield Farming</span>
                    </div>
                  </motion.div>

                  {/* 3. Koinly */}
                  <motion.div 
                    className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">3</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-black">Koinly</h3>
                        <p className="text-blue-600 font-medium">Best Tax Solution</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Crypto taxes have never been more complex, and Koinly's 2025 version handles every possible scenario with ease. The app now supports automatic tax optimization, real-time liability tracking, and integration with 500+ exchanges worldwide.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Tax Optimization</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">500+ Exchanges</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Real-time</span>
                    </div>
                  </motion.div>

                  {/* 4. Glassnode */}
                  <motion.div 
                    className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">4</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-black">Glassnode Studio</h3>
                        <p className="text-blue-600 font-medium">Best On-Chain Analytics</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Glassnode's 2025 Studio version offers the most sophisticated on-chain analytics platform available to retail investors. New features include AI-driven market signals, predictive indicators, and institutional-grade data visualization tools.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">On-chain Data</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AI Signals</span>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Market Predictions</span>
                    </div>
                  </motion.div>

                  {/* 5. Stepn */}
                  <motion.div 
                    className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">5</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-black">Stepn 3.0</h3>
                        <p className="text-blue-600 font-medium">Best Move-to-Earn App</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      The revolutionary move-to-earn app has completely transformed in 2025 with enhanced gamification, cross-chain compatibility, and real-world utility. Stepn now integrates with fitness trackers and offers tangible health benefits alongside crypto rewards.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Move-to-Earn</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Health Tracking</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Multi-chain</span>
                    </div>
                  </motion.div>
                </div>
              </motion.section>

              {/* App Categories */}
              <motion.section className="mb-10" variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <TrendingUp className="text-gray-600" />
                  Crypto App Categories to Explore
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <motion.div 
                    className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <BarChart2 className="text-gray-600 w-8 h-8" />
                      <h3 className="text-xl font-semibold text-black">Trading & Analytics</h3>
                    </div>
                    <p className="text-gray-700">
                      Advanced charting platforms, algorithmic trading tools, and AI-powered market analysis apps that give you an edge in volatile crypto markets.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="text-gray-600 w-8 h-8" />
                      <h3 className="text-xl font-semibold text-black">Security & Wallets</h3>
                    </div>
                    <p className="text-gray-700">
                      Next-generation wallet solutions with biometric security, multi-signature options, and quantum-resistant encryption to protect your digital assets.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <CreditCard className="text-gray-600 w-8 h-8" />
                      <h3 className="text-xl font-semibold text-black">Payments & Banking</h3>
                    </div>
                    <p className="text-gray-700">
                      Crypto banking apps offering seamless fiat on/off ramps, debit cards with crypto rewards, and global payment solutions with minimal fees.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="text-gray-600 w-8 h-8" />
                      <h3 className="text-xl font-semibold text-black">Web3 & Social</h3>
                    </div>
                    <p className="text-gray-700">
                      Decentralized social media platforms, content monetization apps, and community-driven networks that put users in control of their data.
                    </p>
                  </motion.div>
                </div>
              </motion.section>

              {/* Future Trends */}
              <motion.section className="mb-10" variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <Zap className="text-gray-600" />
                  Emerging Trends in Crypto Apps
                </h2>
                
                <p className="text-lg text-gray-700 mb-6">
                  The crypto app landscape is evolving rapidly. Here's what to expect in 2025 and beyond:
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-gray-400 pl-6">
                    <h4 className="text-xl font-semibold text-black mb-2">AI-Powered Personalization</h4>
                    <p className="text-gray-700">
                      Crypto apps are increasingly using artificial intelligence to provide personalized investment strategies, risk assessments, and automated portfolio management.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-gray-400 pl-6">
                    <h4 className="text-xl font-semibold text-black mb-2">Cross-Chain Interoperability</h4>
                    <p className="text-gray-700">
                      The best apps now support seamless interaction between multiple blockchains, allowing users to manage assets across ecosystems without manual bridging.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-gray-400 pl-6">
                    <h4 className="text-xl font-semibold text-black mb-2">Regulatory Compliance Tools</h4>
                    <p className="text-gray-700">
                      With increasing regulation, apps are building compliance features directly into their platforms, including automatic tax reporting and KYC/AML integration.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Conclusion */}
              <motion.section className="mb-8" variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-black mb-6">Final Thoughts</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The crypto apps we've highlighted represent the cutting edge of blockchain technology in 2025. Each serves a distinct purpose, from portfolio management to tax optimization, and together they form a powerful toolkit for any crypto enthusiast.
                </p>
                
                <p className="text-lg text-gray-700">
                  Remember that the crypto space moves quickly, and new innovative apps emerge regularly. Stay curious, keep exploring, and always prioritize security when trying new applications. The right set of tools can make all the difference in your cryptocurrency journey.
                </p>
              </motion.section>
            </motion.article>
          </motion.div>

          {/* Sidebar - 30% */}
          <motion.div 
            className="xl:w-[30%] w-full xl:pl-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="sticky top-8 space-y-6">
              {/* Contact Form */}
              <motion.div 
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
                whileHover={{ y: -2 }}
              >
                <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                  <Mail className="text-gray-600" />
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>
                  <motion.button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div 
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
                whileHover={{ y: -2 }}
              >
                <h3 className="text-xl font-bold text-black mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <motion.button 
                    className="w-full bg-gray-800 text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-900 transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Quick Chat
                  </motion.button>
                  <motion.button 
                    className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="w-5 h-5" />
                    Quick Call
                  </motion.button>
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div 
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
                whileHover={{ y: -2 }}
              >
                <h3 className="text-xl font-bold text-black mb-3">App Discovery Newsletter</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Get weekly updates on the newest and most innovative crypto apps.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="flex-1 p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <motion.button 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CryptoAppsBlog;