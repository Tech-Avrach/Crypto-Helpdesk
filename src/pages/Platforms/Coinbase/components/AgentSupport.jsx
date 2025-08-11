import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Headphones, Shield, Clock } from 'lucide-react';

export default function AgentSupport() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
          }}
        >
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            
            {/* Left Side - Image (40%) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="lg:w-2/5 relative bg-gradient-to-br from-blue-400 via-blue-600 via-blue-800 to-slate-900 flex items-center justify-center p-8 lg:p-12 overflow-hidden"
            >
              {/* Enhanced Animated Background Pattern */}
              <div className="absolute inset-0">
                {/* Primary gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 via-blue-500/30 to-blue-900/40"></div>
                
                {/* Animated orbs */}
                <motion.div
                  className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-white/20 to-sky-300/30 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1.1, 1],
                    opacity: [0.2, 0.4, 0.3, 0.2],
                    x: [0, 20, -10, 0],
                    y: [0, -15, 10, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-300/25 to-blue-600/35 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.4, 1.2, 1],
                    opacity: [0.15, 0.35, 0.25, 0.15],
                    x: [0, -25, 15, 0],
                    y: [0, 20, -8, 0]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    delay: 2,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute top-1/2 right-1/6 w-24 h-24 bg-gradient-to-r from-blue-200/30 to-slate-300/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.5, 1.1, 1],
                    opacity: [0.1, 0.3, 0.2, 0.1],
                    x: [0, 15, -20, 0],
                    y: [0, -25, 12, 0]
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    delay: 4,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Mesh gradient effect */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-300/20 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-700/25 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Central Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="relative z-10 text-center"
              >
                {/* Main Support Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Headphones className="w-16 h-16 text-white" />
                  </motion.div>
                  
                  {/* Pulsing Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white/30 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Support Features */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex items-center justify-center gap-3 text-white/90"
                  >
                    <Clock className="w-5 h-5" />
                    <span className="text-sm font-medium">24/7 Available</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex items-center justify-center gap-3 text-white/90"
                  >
                    <Shield className="w-5 h-5" />
                    <span className="text-sm font-medium">Secure & Private</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="flex items-center justify-center gap-3 text-white/90"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-sm font-medium">Expert Support</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Content (60%) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="lg:w-3/5 p-8 lg:p-12 xl:p-16 flex flex-col justify-center relative"
            >
              {/* Background Decoration */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-gray-100/50 rounded-full blur-3xl"></div>
              <div className="absolute bottom-12 left-8 w-24 h-24 bg-gradient-to-br from-gray-100/60 to-blue-100/40 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 leading-tight"
                >
                  Need to speak to an{' '}
                  <span className="font-semibold text-blue-600 relative">
                    agent?
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-1 bg-blue-600/20 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    />
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  className="text-lg xl:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
                >
                  Tell us about your issue, and connect with an agent. For suspicious activity, call us at{' '}
                  <span className="font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded-md">
                    +1 888 908 7930
                  </span>
                  . If you have any issue, we'll help troubleshoot.
                </motion.p>

                {/* Call to Action Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                >
                  <motion.button
                    className="group relative inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-200/50"
                    whileHover={{ 
                      scale: 1.02,
                      y: -4
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Animated Phone Icon */}
                    <motion.div
                      animate={{
                        rotate: [0, -15, 15, -10, 10, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                      className="relative"
                    >
                      <Phone className="w-6 h-6" />
                      
                      {/* Ring Effect */}
                      <motion.div
                        className="absolute inset-0 border-2 border-white/40 rounded-full"
                        animate={{
                          scale: [1, 1.8, 2.2],
                          opacity: [0.6, 0.2, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 border-2 border-white/40 rounded-full"
                        animate={{
                          scale: [1, 1.8, 2.2],
                          opacity: [0.4, 0.1, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0.5,
                          ease: "easeOut"
                        }}
                      />
                    </motion.div>
                    
                    <span className="relative z-10">Speak to us</span>
                    
                    {/* Button Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 rounded-2xl"
                      animate={{
                        x: ['-200%', '200%']
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        repeatDelay: 4
                      }}
                    />
                  </motion.button>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="mt-8 pt-8 border-t border-gray-200"
                >
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Your privacy and security are our top priority
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}