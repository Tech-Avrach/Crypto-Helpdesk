import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Eye, Phone, MessageCircle, Mail, User, Send, Shield, Smartphone, HardDrive, Globe, TrendingUp, Lock, Zap, Users } from 'lucide-react';

const CryptoWalletBlog = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [readers, setReaders] = useState(12847);

  useEffect(() => {
    // Simulate reader count increasing
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
                src="https://cdn.aglty.io/fortanix/blog/blogthumbs/Guide-To-Choosing-the-Best-and-Most-Secure-Crypto-Wallets.webp"
                alt="Crypto Wallet Security Guide 2025"
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
                  News
                </motion.span>
              </div>
            </motion.div>

            {/* Article Header */}
            <motion.div className="mb-8" variants={fadeInUp}>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                What is the Best and Most Secure Crypto Wallet of 2025?
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
                  As cryptocurrency adoption continues to surge in 2025, choosing the right wallet has become more critical than ever. With billions of dollars worth of digital assets at stake, security, usability, and feature sets are the primary factors that distinguish the best crypto wallets from the mediocre ones.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  In this comprehensive guide, we'll explore the top cryptocurrency wallets of 2025, analyzing their security features, supported cryptocurrencies, user experience, and unique advantages to help you make an informed decision for your digital asset management needs.
                </p>
              </div>

              {/* Types of Crypto Wallets */}
              <motion.section className="mb-10" variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <Shield className="text-gray-600" />
                  Understanding Crypto Wallet Types
                </h2>
                
                <p className="text-lg text-gray-700 mb-6">
                  Before diving into specific wallet recommendations, it's essential to understand the different types of cryptocurrency wallets available in 2025:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <motion.div 
                    className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <HardDrive className="text-gray-600 w-8 h-8" />
                      <h3 className="text-xl font-semibold text-black">Hardware Wallets</h3>
                    </div>
                    <p className="text-gray-700">
                      Physical devices that store your private keys offline, offering the highest level of security for long-term storage. Perfect for hodlers and large investments.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Smartphone className="text-gray-600 w-8 h-8" />
                      <h3 className="text-xl font-semibold text-black">Software Wallets</h3>
                    </div>
                    <p className="text-gray-700">
                      Applications installed on your computer or mobile device. More convenient for regular transactions but potentially less secure than hardware wallets.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="text-gray-600 w-8 h-8" />
                      <h3 className="text-xl font-semibold text-black">Web Wallets</h3>
                    </div>
                    <p className="text-gray-700">
                      Browser-based wallets that can be accessed from any device with internet connectivity. Convenient but require trust in third-party services.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="text-gray-600 w-8 h-8" />
                      <h3 className="text-xl font-semibold text-black">Multi-Sig Wallets</h3>
                    </div>
                    <p className="text-gray-700">
                      Require multiple signatures to authorize transactions, providing enhanced security for businesses and shared funds management.
                    </p>
                  </motion.div>
                </div>
              </motion.section>

              {/* Top Wallets of 2025 */}
              <motion.section className="mb-10" variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <TrendingUp className="text-gray-600" />
                  Top 7 Crypto Wallets of 2025
                </h2>

                <div className="space-y-8">
                  {/* Ledger Nano X Plus */}
                  <motion.div 
                    className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">1</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-black">Ledger Nano X Plus</h3>
                        <p className="text-blue-600 font-medium">Best Overall Hardware Wallet</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      The latest iteration of Ledger's flagship hardware wallet features enhanced security chips, support for over 5,000 cryptocurrencies, and improved battery life. The Nano X Plus introduced advanced biometric authentication and quantum-resistant encryption protocols.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Bluetooth Support</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Mobile App</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">5000+ Coins</span>
                    </div>
                  </motion.div>

                  {/* MetaMask Portfolio */}
                  <motion.div 
                    className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">2</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-black">MetaMask Portfolio</h3>
                        <p className="text-blue-600 font-medium">Best for DeFi and Web3</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      MetaMask's 2025 update includes portfolio management, cross-chain swaps, and institutional-grade security features. Perfect for DeFi enthusiasts and Web3 developers with its seamless dApp integration.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">dApp Browser</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Cross-chain</span>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">DEX Integration</span>
                    </div>
                  </motion.div>

                  {/* Phantom Wallet */}
                  <motion.div 
                    className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">3</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-black">Phantom Wallet</h3>
                        <p className="text-blue-600 font-medium">Best for Solana Ecosystem</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Phantom has evolved into a multi-chain wallet supporting Solana, Ethereum, and Bitcoin. Known for its intuitive interface and seamless NFT management capabilities, making it perfect for creators and collectors.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Multi-chain</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">NFT Support</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Staking</span>
                    </div>
                  </motion.div>
                </div>
              </motion.section>

              {/* Security Features */}
              <motion.section className="mb-10" variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <Lock className="text-gray-600" />
                  Essential Security Features to Look For
                </h2>
                
                <p className="text-lg text-gray-700 mb-6">
                  When choosing a crypto wallet in 2025, these security features are non-negotiable:
                </p>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xl font-semibold text-black mb-3">🔐 Private Key Control</h4>
                      <p className="text-gray-700">Always maintain full control of your private keys. Avoid custodial wallets for large amounts.</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-black mb-3">🛡️ Multi-Factor Authentication</h4>
                      <p className="text-gray-700">Enable 2FA, biometric authentication, and hardware security keys where available.</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-black mb-3">🔄 Regular Updates</h4>
                      <p className="text-gray-700">Choose wallets with active development and frequent security patches.</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-black mb-3">🏦 Insurance Coverage</h4>
                      <p className="text-gray-700">Some wallets offer insurance coverage for digital assets stored on their platforms.</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Future Trends */}
              <motion.section className="mb-10" variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <Zap className="text-gray-600" />
                  2025 Wallet Technology Trends
                </h2>
                
                <p className="text-lg text-gray-700 mb-6">
                  The cryptocurrency wallet landscape is rapidly evolving. Here are the key trends shaping wallet development in 2025:
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-gray-400 pl-6">
                    <h4 className="text-xl font-semibold text-black mb-2">Quantum-Resistant Security</h4>
                    <p className="text-gray-700">
                      As quantum computing advances, wallet providers are implementing quantum-resistant encryption algorithms to future-proof digital assets.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-gray-400 pl-6">
                    <h4 className="text-xl font-semibold text-black mb-2">Social Recovery Systems</h4>
                    <p className="text-gray-700">
                      Advanced recovery mechanisms using social networks and trusted contacts to help users recover their wallets without seed phrases.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-gray-400 pl-6">
                    <h4 className="text-xl font-semibold text-black mb-2">AI-Powered Security</h4>
                    <p className="text-gray-700">
                      Machine learning algorithms that detect suspicious activities and provide real-time threat protection for crypto transactions.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Conclusion */}
              <motion.section className="mb-8" variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-black mb-6">Conclusion</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Choosing the best crypto wallet in 2025 depends on your specific needs, technical expertise, and security preferences. For maximum security with occasional transactions, hardware wallets like the Ledger Nano X Plus remain the gold standard. For frequent DeFi interactions, software wallets like MetaMask Portfolio offer the best user experience.
                </p>
                
                <p className="text-lg text-gray-700">
                  Remember that no single wallet is perfect for every use case. Many experienced crypto users employ a combination of hot and cold wallets to balance security and convenience. Whatever you choose, always prioritize security, keep your software updated, and never share your private keys or seed phrases with anyone.
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
                <h3 className="text-xl font-bold text-black mb-3">Stay Updated</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Get the latest crypto wallet reviews and security tips delivered to your inbox.
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

export default CryptoWalletBlog;