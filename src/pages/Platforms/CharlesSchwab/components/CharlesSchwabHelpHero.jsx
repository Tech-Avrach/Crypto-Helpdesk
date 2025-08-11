import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Phone } from 'lucide-react';

export default function CharlesSchwabHelpHero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-blue-50 to-pink-50 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-gray-800 mb-4">
            <div className="text-6xl md:text-8xl font-medium mb-6">
              Hi There,
            </div>
            <div className="text-4xl md:text-6xl font-medium mb-6">
              Having Issue in{' '}
              <span 
                className="font-black text-[#009cdb] px-4 py-2 rounded-lg inline-block transform hover:scale-105 transition-transform duration-200"
                style={{ backgroundColor: 'white' }}
              >
                Charles Schwab
              </span>
            </div>
            <div className="text-3xl md:text-5xl font-medium">
              How can we help you?
            </div>
          </h1>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-6 pl-16 pr-6 text-lg rounded-full bg-white/95 backdrop-blur-sm shadow-2xl border-0 focus:ring-4 focus:ring-white/50 focus:outline-none transition-all duration-300 placeholder-gray-500"
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 via-pink-500/20 -z-10"
                style={{
                  background: `linear-gradient(to right, rgba(251, 191, 36, 0.2), rgba(0, 156, 219, 0.2), rgba(236, 72, 153, 0.2))`
                }}
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Instant Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-gray-700 text-xl mb-6 font-medium">
            Instant Support
          </p>
          
          {/* Animated Connect Button */}
          <motion.button
            className="group relative inline-flex items-center gap-4 bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {/* Animated Background Gradient */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              style={{
                background: `linear-gradient(to right, #fbbf24, #009cdb, #ec4899)`
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Ringing Phone Icon */}
            <motion.div
              animate={{
                rotate: [0, -15, 15, -15, 15, 0],
                scale: [1, 1.1, 1, 1.1, 1, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <Phone 
                className="w-6 h-6"
                style={{ color: '#009cdb' }}
              />
              
              {/* Ripple Effect */}
              <motion.div
                className="absolute inset-0 border-2 rounded-full"
                style={{ borderColor: '#009cdb' }}
                animate={{
                  scale: [1, 2, 3],
                  opacity: [0.8, 0.3, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              <motion.div
                className="absolute inset-0 border-2 rounded-full"
                style={{ borderColor: '#009cdb' }}
                animate={{
                  scale: [1, 2, 3],
                  opacity: [0.6, 0.2, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 0.5,
                  ease: "easeOut"
                }}
              />
            </motion.div>
            
            <span 
              className="relative z-10 transition-colors duration-300"
              style={{ color: 'inherit' }}
            >
              Connect Now
            </span>
            
            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
              animate={{
                x: ['-200%', '200%']
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-gray-300/50 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 bg-gray-300/30 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-8 h-8 bg-gray-300/20 rounded-full"
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}
