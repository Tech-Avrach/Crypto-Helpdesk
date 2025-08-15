import { motion } from 'framer-motion';
import { X, CreditCard, AlertTriangle } from 'lucide-react';

export default function PaymentIssueHero() {
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
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
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
              Payment 
              <br />
              <span className="text-gray-800">Issues?</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-lg"
            >
              Don't worry about failed transactions or billing problems.
              <br />
              Our payment specialists are here to resolve any issues quickly.
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
                Get Help
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-3xl font-semibold text-lg border-2 border-black hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Support
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Side - Payment Failed Visual */}
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
              
              {/* Credit Card Container */}
              <div className="relative flex flex-col items-center space-y-8">
                
                {/* Credit Card */}
                <motion.div
                  variants={cardVariants}
                  className="relative"
                  style={{ perspective: '1000px' }}
                >
                  <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-2xl p-6 w-80 h-48 sm:w-96 sm:h-56 shadow-2xl transform-gpu">
                    {/* Card background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-transparent rounded-2xl"></div>
                    <div className="absolute top-4 right-4 w-12 h-8 bg-yellow-400 rounded opacity-80"></div>
                    
                    {/* Card chip */}
                    <div className="absolute top-6 left-6 w-8 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-sm"></div>
                    
                    {/* Card number (partially masked) */}
                    <div className="absolute bottom-20 left-6 text-white font-mono text-lg tracking-wider">
                      •••• •••• •••• 1234
                    </div>
                    
                    {/* Cardholder name */}
                    <div className="absolute bottom-8 left-6 text-gray-300 text-sm font-medium">
                      JOHN DOE
                    </div>
                    
                    {/* Expiry */}
                    <div className="absolute bottom-8 right-6 text-gray-300 text-sm">
                      12/25
                    </div>
                    
                    {/* Card brand logo area */}
                    <div className="absolute top-6 right-6">
                      <CreditCard className="w-8 h-8 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Error indicators on the card */}
                  <motion.div
                    variants={errorIndicatorVariants}
                    className="absolute -top-4 -right-4 bg-red-500 rounded-full p-3 shadow-lg"
                  >
                    <X className="w-8 h-8 text-white" strokeWidth={3} />
                  </motion.div>
                  
                  <motion.div
                    variants={errorIndicatorVariants}
                    className="absolute -bottom-4 -left-4 bg-red-500 rounded-full p-2 shadow-lg"
                  >
                    <AlertTriangle className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </motion.div>
                </motion.div>
                
                {/* Payment Status */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-center space-y-2"
                >
                  <div className="text-red-600 text-2xl sm:text-3xl lg:text-4xl font-bold">
                    PAYMENT DECLINED
                  </div>
                  <div className="text-gray-600 text-lg font-medium">
                    Transaction Failed
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
                    Error Code: 4001
                  </span>
                </motion.div>
              </div>
              
              {/* Floating error messages */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="absolute -left-20 top-10 bg-red-100 border border-red-300 rounded-lg p-3 shadow-lg max-w-xs hidden lg:block"
              >
                <div className="text-red-700 text-sm font-medium">
                  Insufficient Funds
                </div>
                <div className="absolute -right-2 top-4 w-0 h-0 border-l-8 border-l-red-100 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="absolute -right-24 bottom-16 bg-orange-100 border border-orange-300 rounded-lg p-3 shadow-lg max-w-xs hidden lg:block"
              >
                <div className="text-orange-700 text-sm font-medium">
                  Card Expired
                </div>
                <div className="absolute -left-2 top-4 w-0 h-0 border-r-8 border-r-orange-100 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </motion.div>
    </div>
  );
}