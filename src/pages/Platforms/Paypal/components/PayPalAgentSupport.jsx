import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Headphones, Shield, Clock } from 'lucide-react';

export default function PayPalAgentSupport() {
  const paypalBlue = '#0070df';

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
              className="lg:w-2/5 relative flex items-center justify-center p-8 lg:p-12 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${paypalBlue} 0%, #003087 100%)`
              }}
            >
              {/* Animated Background Orbs */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full blur-3xl"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                  animate={{
                    scale: [1, 1.3, 1.1, 1],
                    opacity: [0.2, 0.4, 0.3, 0.2],
                    x: [0, 20, -10, 0],
                    y: [0, -15, 10, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full blur-2xl"
                  style={{ background: 'rgba(0,112,223,0.25)' }}
                  animate={{
                    scale: [1, 1.4, 1.2, 1],
                    opacity: [0.15, 0.35, 0.25, 0.15],
                    x: [0, -25, 15, 0],
                    y: [0, 20, -8, 0]
                  }}
                  transition={{ duration: 10, repeat: Infinity, delay: 2, ease: "easeInOut" }}
                />
              </div>

              {/* Central Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="relative z-10 text-center"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Support Features */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 text-white/90">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm font-medium">24/7 PayPal Support</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-white/90">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm font-medium">Buyer & Seller Protection</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-white/90">
                    <Phone className="w-5 h-5" />
                    <span className="text-sm font-medium">Expert Payment Assistance</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="lg:w-3/5 p-8 lg:p-12 xl:p-16 flex flex-col justify-center relative"
            >
              <div className="relative z-10">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 leading-tight"
                >
                  Need help with{' '}
                  <span className="font-semibold relative" style={{ color: paypalBlue }}>
                    PayPal?
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  className="text-lg xl:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
                >
                  Our PayPal support specialists are available around the clock to help with account access, payment disputes, or transaction issues.  
                  For urgent account security matters, call us at{' '}
                  <span className="font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded-md">
                    +1 888 221 1161
                  </span>.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                >
                  <motion.button
                    className="group relative inline-flex items-center gap-4 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
                    style={{
                      backgroundColor: paypalBlue,
                      boxShadow: `0 10px 25px ${paypalBlue}4d`
                    }}
                    whileHover={{
                      scale: 1.02,
                      y: -4,
                      boxShadow: `0 20px 40px ${paypalBlue}66`
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-6 h-6" />
                    <span>Contact PayPal Support</span>
                  </motion.button>
                </motion.div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    PayPal Buyer & Seller Protection applies
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
