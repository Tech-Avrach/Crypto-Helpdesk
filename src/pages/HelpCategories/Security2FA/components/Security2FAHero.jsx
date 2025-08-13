import { motion } from 'framer-motion';
import { Shield, Smartphone, Lock, Key, CheckCircle, AlertTriangle, Eye, Fingerprint, QrCode } from 'lucide-react';

export default function Security2FAHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const securityIndicatorVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: "backOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(34, 197, 94, 0.3)",
        "0 0 40px rgba(34, 197, 94, 0.5)",
        "0 0 20px rgba(34, 197, 94, 0.3)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const codeVariants = {
    animate: {
      opacity: [1, 0.5, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-blue-50 to-pink-50 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 via-blue-100/30 to-pink-100/30"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-200/20 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-40 w-24 h-24 bg-blue-200/20 rounded-full blur-lg"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-200/20 rounded-full blur-2xl"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 min-h-screen flex items-center"
      >
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 w-full items-center max-w-7xl mx-auto px-4 lg:px-8">
          
          {/* Left Side - Text Content */}
          <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight"
            >
              Security 
              <br />
              <span className="text-gray-800">& 2FA</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-lg"
            >
              Protect your account with advanced security features and two-factor authentication.
              <br />
              Keep your funds safe and secure from unauthorized access.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-4 rounded-3xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Enable 2FA
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-3xl font-semibold text-lg border-2 border-black hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Security Center
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Side - Security & 2FA Visual */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center relative"
          >
            <div className="relative">
              {/* Background glow effect */}
              <motion.div
                variants={pulseVariants}
                animate="animate"
                className="absolute inset-0 bg-green-100/40 rounded-3xl scale-150 blur-3xl"
              ></motion.div>
              
              {/* Security Interface Container */}
              <div className="relative flex flex-col items-center space-y-8">
                
                {/* Main Security Dashboard */}
                <motion.div
                  variants={cardVariants}
                  className="relative"
                  style={{ perspective: '1000px' }}
                >
                  <motion.div
                    variants={glowVariants}
                    animate="animate"
                    className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 w-80 h-64 sm:w-96 sm:h-72 shadow-2xl transform-gpu border border-slate-700"
                  >
                    {/* Security Dashboard Header */}
                    <div className="bg-green-900 rounded-lg p-4 mb-4 relative">
                      <div className="text-green-400 font-mono text-lg font-bold text-center">
                        SECURITY CENTER
                      </div>
                      <div className="absolute top-2 right-2">
                        <Shield className="w-5 h-5 text-green-400" />
                      </div>
                    </div>
                    
                    {/* Security Status Items */}
                    <div className="space-y-3">
                      {/* 2FA Status */}
                      <div className="flex justify-between items-center p-2 rounded-lg bg-green-800/30">
                        <div className="flex items-center space-x-2">
                          <Smartphone className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">2FA Authentication</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 font-semibold text-xs">ACTIVE</span>
                        </div>
                      </div>
                      
                      {/* Password Security */}
                      <div className="flex justify-between items-center p-2 rounded-lg bg-green-800/30">
                        <div className="flex items-center space-x-2">
                          <Lock className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">Password Strength</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 font-semibold text-xs">STRONG</span>
                        </div>
                      </div>
                      
                      {/* Biometric */}
                      <div className="flex justify-between items-center p-2 rounded-lg bg-green-800/30">
                        <div className="flex items-center space-x-2">
                          <Fingerprint className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">Biometric Lock</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 font-semibold text-xs">ENABLED</span>
                        </div>
                      </div>
                      
                      {/* Session Security */}
                      <div className="flex justify-between items-center p-2 rounded-lg bg-slate-700/30">
                        <div className="flex items-center space-x-2">
                          <Eye className="w-4 h-4 text-yellow-400" />
                          <span className="text-gray-300 text-sm">Active Sessions</span>
                        </div>
                        <span className="text-yellow-400 font-semibold text-xs">2 DEVICES</span>
                      </div>
                    </div>
                    
                    {/* Security Level Indicator */}
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-xs">Security Level</span>
                        <span className="text-green-400 font-bold text-sm">MAXIMUM</span>
                      </div>
                      <div className="bg-gray-700 rounded-full h-2 relative overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "95%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className="bg-gradient-to-r from-green-500 to-green-400 h-full rounded-full relative"
                        >
                          <motion.div
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="absolute right-0 top-0 h-full w-1 bg-green-300"
                          ></motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Security indicators */}
                  <motion.div
                    variants={securityIndicatorVariants}
                    className="absolute -top-4 -right-4 bg-green-500 rounded-full p-3 shadow-lg"
                  >
                    <CheckCircle className="w-8 h-8 text-white" strokeWidth={3} />
                  </motion.div>
                  
                  <motion.div
                    variants={securityIndicatorVariants}
                    className="absolute -bottom-4 -left-4 bg-blue-500 rounded-full p-2 shadow-lg"
                  >
                    <Key className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </motion.div>
                  
                  {/* Security verification overlay */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: 45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 15 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="border-4 border-green-600 text-green-600 font-bold text-xl px-6 py-3 transform rotate-15 bg-white/95 rounded-lg">
                      SECURED ✓
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* 2FA Code Display */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-200"
                >
                  <div className="text-center space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <Smartphone className="w-6 h-6 text-gray-600" />
                      <span className="text-gray-700 font-semibold">Authenticator Code</span>
                    </div>
                    <motion.div
                      variants={codeVariants}
                      animate="animate"
                      className="text-4xl font-mono font-bold text-black tracking-wider"
                    >
                      847 293
                    </motion.div>
                    <div className="text-sm text-gray-500">
                      Refreshes in 23s
                    </div>
                  </div>
                </motion.div>
                
                {/* Status Message */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="bg-green-50 border border-green-200 rounded-xl px-6 py-3"
                >
                  <div className="text-green-700 font-bold text-xl text-center">
                    ACCOUNT SECURED
                  </div>
                  <div className="text-green-600 text-sm text-center mt-1">
                    All security features active
                  </div>
                </motion.div>
              </div>
              
              {/* Floating security indicators */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="absolute -left-24 top-8 bg-blue-100 border border-blue-300 rounded-lg p-3 shadow-lg max-w-xs hidden lg:block"
              >
                <div className="flex items-center space-x-2">
                  <QrCode className="w-4 h-4 text-blue-600" />
                  <div className="text-blue-700 text-sm font-medium">
                    QR Code Setup
                  </div>
                </div>
                <div className="absolute -right-2 top-4 w-0 h-0 border-l-8 border-l-blue-100 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </motion.div>
              
              <motion.div
                variants={floatingVariants}
                animate="animate"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="absolute -right-28 top-32 bg-green-100 border border-green-300 rounded-lg p-3 shadow-lg max-w-xs hidden lg:block"
              >
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-green-600" />
                  <div className="text-green-700 text-sm font-medium">
                    End-to-End Encryption
                  </div>
                </div>
                <div className="absolute -left-2 top-4 w-0 h-0 border-r-8 border-r-green-100 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </motion.div>
              
              <motion.div
                variants={floatingVariants}
                animate="animate"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="absolute -right-20 bottom-8 bg-purple-100 border border-purple-300 rounded-lg p-3 shadow-lg max-w-xs hidden lg:block"
              >
                <div className="flex items-center space-x-2">
                  <Fingerprint className="w-4 h-4 text-purple-600" />
                  <div className="text-purple-700 text-sm font-medium">
                    Biometric Verification
                  </div>
                </div>
                <div className="absolute -left-2 top-4 w-0 h-0 border-r-8 border-r-purple-100 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </motion.div>
              
              {/* Floating security symbols */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                animate={{ opacity: 0.6, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="absolute -top-8 left-16 hidden lg:block"
              >
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-4xl"
                >
                  🛡️
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 0.6, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.7 }}
                className="absolute bottom-4 right-8 hidden lg:block"
              >
                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-3xl opacity-70"
                >
                  🔐
                </motion.div>
              </motion.div>
              
              {/* Shield with checkmark */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 3 }}
                className="absolute -left-12 bottom-16 hidden lg:block"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-green-100 rounded-full p-3 shadow-lg"
                >
                  <Shield className="w-6 h-6 text-green-600" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </motion.div>
    </div>
  );
}