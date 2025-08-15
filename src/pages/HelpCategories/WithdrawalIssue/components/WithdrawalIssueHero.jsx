import { motion } from 'framer-motion';
import { X, DollarSign, CreditCard, AlertTriangle, Clock, Shield, TrendingDown, Wallet, Ban } from 'lucide-react';

export default function WithdrawalIssueHero() {
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

  const errorIndicatorVariants = {
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

  const shakeVariants = {
    animate: {
      x: [-2, 2, -2, 2, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 2
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 md:pt-0 bg-gradient-to-br from-yellow-50 via-blue-50 to-pink-50 relative overflow-hidden">
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
              Withdrawal 
              <br />
              <span className="text-gray-800">Blocked?</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-lg"
            >
              Can't access your funds? Withdrawal requests stuck in processing?
              <br />
              Our specialists will resolve your withdrawal issues fast.
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
                Unlock Funds
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-3xl font-semibold text-lg border-2 border-black hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Support
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Side - Withdrawal Issue Visual */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center relative"
          >
            <div className="relative">
              {/* Background glow effect */}
              <motion.div
                variants={pulseVariants}
                animate="animate"
                className="absolute inset-0 bg-red-100/40 rounded-3xl scale-150 blur-3xl"
              ></motion.div>
              
              {/* Withdrawal Interface Container */}
              <div className="relative flex flex-col items-center space-y-8">
                
                {/* Main ATM/Banking Interface */}
                <motion.div
                  variants={cardVariants}
                  className="relative"
                  style={{ perspective: '1000px' }}
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 w-80 h-64 sm:w-96 sm:h-72 shadow-2xl transform-gpu border border-slate-700">
                    {/* ATM Screen Header */}
                    <div className="bg-green-900 rounded-lg p-4 mb-4 relative">
                      <div className="text-green-400 font-mono text-lg font-bold text-center">
                        WITHDRAWAL REQUEST
                      </div>
                      <div className="absolute top-2 right-2">
                        <Shield className="w-5 h-5 text-green-400" />
                      </div>
                    </div>
                    
                    {/* Transaction Details */}
                    <div className="space-y-3 text-gray-300">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Amount:</span>
                        <div className="text-green-400 font-bold text-xl flex items-center">
                          <DollarSign className="w-5 h-5 mr-1" />
                          2,500.00
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Account:</span>
                        <span className="font-mono text-sm">****8842</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Status:</span>
                        <motion.span 
                          variants={shakeVariants}
                          animate="animate"
                          className="text-red-400 font-semibold text-sm flex items-center"
                        >
                          <Ban className="w-4 h-4 mr-1" />
                          BLOCKED
                        </motion.span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Time:</span>
                        <span className="text-sm font-mono">14:35:22</span>
                      </div>
                    </div>
                    
                    {/* Progress bar (stuck) */}
                    <div className="mt-4">
                      <div className="bg-gray-700 rounded-full h-2 relative overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "35%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="bg-red-500 h-full rounded-full relative"
                        >
                          <motion.div
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="absolute right-0 top-0 h-full w-1 bg-red-300"
                          ></motion.div>
                        </motion.div>
                      </div>
                      <div className="text-red-400 text-xs mt-1 text-center">Processing Failed</div>
                    </div>
                  </div>
                  
                  {/* Error indicators */}
                  <motion.div
                    variants={errorIndicatorVariants}
                    className="absolute -top-4 -right-4 bg-red-500 rounded-full p-3 shadow-lg"
                  >
                    <X className="w-8 h-8 text-white" strokeWidth={3} />
                  </motion.div>
                  
                  <motion.div
                    variants={errorIndicatorVariants}
                    className="absolute -bottom-4 -left-4 bg-orange-500 rounded-full p-2 shadow-lg"
                  >
                    <AlertTriangle className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </motion.div>
                  
                  {/* Blocked overlay stamp */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: -15 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="border-4 border-red-600 text-red-600 font-bold text-2xl px-6 py-3 transform -rotate-15 bg-white/95 rounded-lg">
                      ACCESS DENIED
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Status Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-center space-y-2"
                >
                  <div className="text-red-600 text-2xl sm:text-3xl lg:text-4xl font-bold">
                    WITHDRAWAL FAILED
                  </div>
                  <div className="text-gray-600 text-lg font-medium">
                    Transaction Cannot Be Processed
                  </div>
                </motion.div>
                
                {/* Error code */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="bg-red-50 border border-red-200 rounded-xl px-4 py-2"
                >
                  <span className="text-red-700 font-mono text-sm">
                    Error Code: WD-403-BLOCKED
                  </span>
                </motion.div>
              </div>
              
              {/* Floating money and error indicators */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="absolute -left-24 top-8 bg-red-100 border border-red-300 rounded-lg p-3 shadow-lg max-w-xs hidden lg:block"
              >
                <div className="flex items-center space-x-2">
                  <TrendingDown className="w-4 h-4 text-red-600" />
                  <div className="text-red-700 text-sm font-medium">
                    Insufficient Balance
                  </div>
                </div>
                <div className="absolute -right-2 top-4 w-0 h-0 border-l-8 border-l-red-100 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </motion.div>
              
              <motion.div
                variants={floatingVariants}
                animate="animate"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="absolute -right-28 top-32 bg-orange-100 border border-orange-300 rounded-lg p-3 shadow-lg max-w-xs hidden lg:block"
              >
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-4 h-4 text-orange-600" />
                  <div className="text-orange-700 text-sm font-medium">
                    Card Limit Exceeded
                  </div>
                </div>
                <div className="absolute -left-2 top-4 w-0 h-0 border-r-8 border-r-orange-100 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </motion.div>
              
              <motion.div
                variants={floatingVariants}
                animate="animate"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="absolute -right-20 bottom-8 bg-yellow-100 border border-yellow-300 rounded-lg p-3 shadow-lg max-w-xs hidden lg:block"
              >
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-yellow-600" />
                  <div className="text-yellow-700 text-sm font-medium">
                    Processing Timeout
                  </div>
                </div>
                <div className="absolute -left-2 top-4 w-0 h-0 border-r-8 border-r-yellow-100 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </motion.div>
              
              {/* Floating money symbols */}
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
                  💸
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
                  💳
                </motion.div>
              </motion.div>
              
              {/* Wallet with no money */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 3 }}
                className="absolute -left-12 bottom-16 hidden lg:block"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-red-100 rounded-full p-3 shadow-lg"
                >
                  <Wallet className="w-6 h-6 text-red-600" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </motion.div>
    </div>
  );
}