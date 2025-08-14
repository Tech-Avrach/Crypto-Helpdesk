import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Eye, Phone, MessageCircle, Mail, User, Send, Keyboard, Command, Zap, Clock, Layers, TrendingUp } from 'lucide-react';

const TradingShortcutsBlog = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [readers, setReaders] = useState(8923);

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
                src="https://cdn.prod.website-files.com/6217a376b29e9b5ebb01ccd6/621e846b0a10dd6595fd66a1_great-crypto-apps-thumbnail-image-web3-webflow-template.png"
                alt="Trading App Keyboard Shortcuts"
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
                  Articles
                </motion.span>
              </div>
            </motion.div>

            {/* Article Header */}
            <motion.div className="mb-8" variants={fadeInUp}>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                Useful Keyboard Shortcuts for All Popular Trading Apps (2025)
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
                  Professional traders know that speed and efficiency are crucial in the fast-paced world of crypto and stock trading. Mastering keyboard shortcuts can significantly enhance your trading performance by reducing reaction time and minimizing manual errors. In this guide, we'll cover the most essential keyboard shortcuts for all major trading platforms in 2025.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you're using Binance Pro, Coinbase Advanced, Kraken Terminal, or TradingView, these shortcuts will help you execute trades faster, navigate charts more efficiently, and manage your portfolio like a pro.
                </p>
              </div>

              {/* Universal Shortcuts */}
              <motion.section className="mb-10" variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <Keyboard className="text-gray-600" />
                  Universal Trading Shortcuts
                </h2>
                
                <p className="text-lg text-gray-700 mb-6">
                  These shortcuts work across most trading platforms and can dramatically improve your workflow:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <motion.div 
                    className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Command className="text-gray-600 w-8 h-8" />
                      <h3 className="text-xl font-semibold text-black">Quick Order Execution</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li><kbd className="bg-gray-100 px-2 py-1 rounded">B</kbd> + <kbd className="bg-gray-100 px-2 py-1 rounded">Enter</kbd> - Buy at market price</li>
                      <li><kbd className="bg-gray-100 px-2 py-1 rounded">S</kbd> + <kbd className="bg-gray-100 px-2 py-1 rounded">Enter</kbd> - Sell at market price</li>
                      <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl</kbd> + <kbd className="bg-gray-100 px-2 py-1 rounded">B</kbd> - Buy with limit order</li>
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Zap className="text-gray-600 w-8 h-8" />
                      <h3 className="text-xl font-semibold text-black">Chart Navigation</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li><kbd className="bg-gray-100 px-2 py-1 rounded">←</kbd>/<kbd className="bg-gray-100 px-2 py-1 rounded">→</kbd> - Move left/right on chart</li>
                      <li><kbd className="bg-gray-100 px-2 py-1 rounded">+</kbd>/<kbd className="bg-gray-100 px-2 py-1 rounded">-</kbd> - Zoom in/out</li>
                      <li><kbd className="bg-gray-100 px-2 py-1 rounded">0</kbd> - Reset chart zoom</li>
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="text-gray-600 w-8 h-8" />
                      <h3 className="text-xl font-semibold text-black">Timeframe Switching</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li><kbd className="bg-gray-100 px-2 py-1 rounded">1</kbd> - 1 minute chart</li>
                      <li><kbd className="bg-gray-100 px-2 py-1 rounded">5</kbd> - 5 minute chart</li>
                      <li><kbd className="bg-gray-100 px-2 py-1 rounded">D</kbd> - Daily chart</li>
                      <li><kbd className="bg-gray-100 px-2 py-1 rounded">W</kbd> - Weekly chart</li>
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Layers className="text-gray-600 w-8 h-8" />
                      <h3 className="text-xl font-semibold text-black">Tool Selection</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li><kbd className="bg-gray-100 px-2 py-1 rounded">T</kbd> - Trend line tool</li>
                      <li><kbd className="bg-gray-100 px-2 py-1 rounded">F</kbd> - Fibonacci retracement</li>
                      <li><kbd className="bg-gray-100 px-2 py-1 rounded">R</kbd> - Rectangle tool</li>
                    </ul>
                  </motion.div>
                </div>
              </motion.section>

              {/* Platform-Specific Shortcuts */}
              <motion.section className="mb-10" variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <TrendingUp className="text-gray-600" />
                  Platform-Specific Shortcuts
                </h2>

                <div className="space-y-8">
                  {/* Binance Pro */}
                  <motion.div 
                    className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">1</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-black">Binance Pro (2025)</h3>
                        <p className="text-blue-600 font-medium">Advanced Trading Terminal</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-black mb-2">Order Management</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li><kbd className="bg-gray-100 px-2 py-1 rounded">Alt</kbd> + <kbd className="bg-gray-100 px-2 py-1 rounded">L</kbd> - Limit order</li>
                          <li><kbd className="bg-gray-100 px-2 py-1 rounded">Alt</kbd> + <kbd className="bg-gray-100 px-2 py-1 rounded">M</kbd> - Market order</li>
                          <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl</kbd> + <kbd className="bg-gray-100 px-2 py-1 rounded">C</kbd> - Cancel all orders</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-2">Navigation</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl</kbd> + <kbd className="bg-gray-100 px-2 py-1 rounded">1-9</kbd> - Switch between layouts</li>
                          <li><kbd className="bg-gray-100 px-2 py-1 rounded">F</kbd> - Fullscreen mode</li>
                          <li><kbd className="bg-gray-100 px-2 py-1 rounded">H</kbd> - Hide/show interface</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* TradingView */}
                  <motion.div 
                    className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">2</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-black">TradingView Pro</h3>
                        <p className="text-blue-600 font-medium">Charting Platform</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-black mb-2">Drawing Tools</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li><kbd className="bg-gray-100 px-2 py-1 rounded">Alt</kbd> + <kbd className="bg-gray-100 px-2 py-1 rounded">T</kbd> - Trend line</li>
                          <li><kbd className="bg-gray-100 px-2 py-1 rounded">Alt</kbd> + <kbd className="bg-gray-100 px-2 py-1 rounded">H</kbd> - Horizontal line</li>
                          <li><kbd className="bg-gray-100 px-2 py-1 rounded">Alt</kbd> + <kbd className="bg-gray-100 px-2 py-1 rounded">C</kbd> - Crosshair</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-2">Analysis</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li><kbd className="bg-gray-100 px-2 py-1 rounded">/</kbd> - Search symbols</li>
                          <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl</kbd> + <kbd className="bg-gray-100 px-2 py-1 rounded">S</kbd> - Save chart</li>
                          <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl</kbd> + <kbd className="bg-gray-100 px-2 py-1 rounded">P</kbd> - Screenshot</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Kraken Terminal */}
                  <motion.div 
                    className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">3</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-black">Kraken Terminal</h3>
                        <p className="text-blue-600 font-medium">Professional Trading Interface</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-black mb-2">Order Execution</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li><kbd className="bg-gray-100 px-2 py-1 rounded">F1</kbd> - Buy market</li>
                          <li><kbd className="bg-gray-100 px-2 py-1 rounded">F2</kbd> - Sell market</li>
                          <li><kbd className="bg-gray-100 px-2 py-1 rounded">F3</kbd> - Buy limit</li>
                          <li><kbd className="bg-gray-100 px-2 py-1 rounded">F4</kbd> - Sell limit</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-2">Interface</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl</kbd> + <kbd className="bg-gray-100 px-2 py-1 rounded">L</kbd> - Logs panel</li>
                          <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl</kbd> + <kbd className="bg-gray-100 px-2 py-1 rounded">O</kbd> - Order book</li>
                          <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl</kbd> + <kbd className="bg-gray-100 px-2 py-1 rounded">T</kbd> - Trades history</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.section>

              {/* Productivity Tips */}
              <motion.section className="mb-10" variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
                  <Zap className="text-gray-600" />
                  Advanced Productivity Tips
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h4 className="text-xl font-semibold text-black mb-3">💡 Create Custom Shortcuts</h4>
                    <p className="text-gray-700">
                      Most trading platforms allow you to create custom keyboard shortcuts. Take advantage of this to tailor the interface to your trading style. For example, set up one-key shortcuts for your most used order sizes or favorite indicators.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h4 className="text-xl font-semibold text-black mb-3">⌨️ Use a Mechanical Keyboard</h4>
                    <p className="text-gray-700">
                      Serious traders often use mechanical keyboards for their tactile feedback and N-key rollover (the ability to register multiple simultaneous key presses). This prevents missed inputs during fast trading sessions.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h4 className="text-xl font-semibold text-black mb-3">🔄 Practice Regularly</h4>
                    <p className="text-gray-700">
                      Muscle memory is key. Dedicate 10 minutes daily to practicing shortcuts in a demo account. Within weeks, you'll execute trades faster than 90% of retail traders.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Conclusion */}
              <motion.section className="mb-8" variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-black mb-6">Mastering the Keyboard</h2>
                <p className="text-lg text-gray-700 mb-6">
                  In the high-speed world of trading, every millisecond counts. By mastering these keyboard shortcuts, you'll gain a significant edge over traders who rely solely on mouse clicks. Remember that different platforms may have slightly different shortcuts, so always check the official documentation for your specific trading software.
                </p>
                
                <p className="text-lg text-gray-700">
                  Start by learning 3-5 essential shortcuts for your primary platform, then gradually expand your repertoire. Within a few weeks, you'll wonder how you ever traded without them. The time investment is minimal compared to the long-term efficiency gains you'll achieve.
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
                <h3 className="text-xl font-bold text-black mb-3">Trading Tips Newsletter</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Get weekly trading efficiency tips and shortcut updates delivered to your inbox.
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

export default TradingShortcutsBlog;