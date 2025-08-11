import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, Menu, X, MessageCircle, TrendingUp, TrendingDown, User } from 'lucide-react';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [portfolioValue, setPortfolioValue] = useState(54805.32);
  const [cryptoValues, setCryptoValues] = useState({
    bitcoin: { price: 12550.23, change: 4.65 },
    ethereum: { price: 5218.44, change: -2.34 }
  });

  // Animate portfolio and crypto values
  useEffect(() => {
    const interval = setInterval(() => {
      setPortfolioValue(prev => {
        const change = (Math.random() - 0.5) * 500;
        return Math.max(0, prev + change);
      });
      
      setCryptoValues(prev => ({
        bitcoin: {
          ...prev.bitcoin,
          price: prev.bitcoin.price + (Math.random() - 0.5) * 300,
          change: (Math.random() - 0.5) * 8
        },
        ethereum: {
          ...prev.ethereum,
          price: prev.ethereum.price + (Math.random() - 0.5) * 100,
          change: (Math.random() - 0.5) * 6
        }
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/80 via-pink-50/60 to-yellow-50/80 relative overflow-hidden">
      
      {/* Navbar - Exact Reference Style */}

      {/* Hero Section - Exact Reference Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content - Reference Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:space-y-10"
          >
            {/* Main Title - Exact Reference Style */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Get Instant Help for Your Crypto Issues
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg lg:text-xl text-gray-600 font-normal leading-relaxed max-w-md"
              >
                Troubleshooting for Coinbase, Binance, Robinhood & more
              </motion.p>
            </div>

            {/* Buttons - Reference Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gray-900 text-white font-medium rounded-full text-base hover:bg-gray-800 transition-colors shadow-sm"
              >
                Get Help Now
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white border border-gray-300 text-gray-700 font-medium rounded-full text-base hover:bg-gray-50 transition-colors shadow-sm"
              >
                Browse features
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Perfect Mobile Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.img
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                src="https://assets-global.website-files.com/65f84e10ab33243479648185/65f8647f92caa70cf477dfb8_Mockup%20Home-p-800.webp"
                alt="Crypto Platform Mobile App Mockup"
                className="w-80 h-auto max-w-full shadow-2xl rounded-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="h-6 w-6" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroSection;