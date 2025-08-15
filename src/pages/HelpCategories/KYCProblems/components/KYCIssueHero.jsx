import { motion } from 'framer-motion';
import { X, User, FileText, AlertTriangle, Camera, Clock, Shield } from 'lucide-react';

export default function KYCIssueHero() {
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

  const documentVariants = {
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
              KYC 
              <br />
              <span className="text-gray-800">Rejected?</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-lg"
            >
              Identity verification problems blocking your account?
              <br />
              Our KYC specialists will get you verified quickly and securely.
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
                Get Verified
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-3xl font-semibold text-lg border-2 border-black hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                KYC Support
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Side - KYC Rejection Visual */}
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
              
              {/* KYC Document Container */}
              <div className="relative flex flex-col items-center space-y-8">
                
                {/* Main ID Document */}
                <motion.div
                  variants={documentVariants}
                  className="relative"
                  style={{ perspective: '1000px' }}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 w-80 h-52 sm:w-96 sm:h-60 shadow-2xl transform-gpu border-2 border-blue-200">
                    {/* Document header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-blue-800 font-bold text-lg">IDENTITY DOCUMENT</div>
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    {/* Photo placeholder */}
                    <div className="absolute top-20 left-6 w-20 h-24 bg-gray-300 rounded-lg border-2 border-gray-400 flex items-center justify-center">
                      <User className="w-8 h-8 text-gray-500" />
                    </div>
                    
                    {/* Document details */}
                    <div className="absolute top-20 left-32 space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="text-blue-700 font-semibold">Name:</div>
                        <div className="h-4 w-24 bg-gray-300 rounded"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-blue-700 font-semibold">DOB:</div>
                        <div className="h-4 w-20 bg-gray-300 rounded"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-blue-700 font-semibold">ID:</div>
                        <div className="h-4 w-28 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Document number */}
                    <div className="absolute bottom-6 left-6 text-blue-600 font-mono text-sm">
                      DOC: ID123456789
                    </div>
                    
                    {/* Expiry date */}
                    <div className="absolute bottom-6 right-6 text-blue-600 text-sm">
                      Valid until: 12/2025
                    </div>
                  </div>
                  
                  {/* Error indicators on the document */}
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
                  
                  {/* Rejected stamp overlay */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: -15 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="border-4 border-red-600 text-red-600 font-bold text-3xl px-8 py-4 transform -rotate-15 bg-white/90">
                      REJECTED
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Verification Status */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-center space-y-2"
                >
                  <div className="text-red-600 text-2xl sm:text-3xl lg:text-4xl font-bold">
                    VERIFICATION FAILED
                  </div>
                  <div className="text-gray-600 text-lg font-medium">
                    Identity Check Incomplete
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
                    KYC Error: Document Mismatch
                  </span>
                </motion.div>
              </div>
              
              {/* Floating documents and issues */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="absolute -left-24 top-8 bg-orange-100 border border-orange-300 rounded-lg p-3 shadow-lg max-w-xs hidden lg:block"
              >
                <div className="flex items-center space-x-2">
                  <Camera className="w-4 h-4 text-orange-600" />
                  <div className="text-orange-700 text-sm font-medium">
                    Photo Quality Poor
                  </div>
                </div>
                <div className="absolute -right-2 top-4 w-0 h-0 border-l-8 border-l-orange-100 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </motion.div>
              
              <motion.div
                variants={floatingVariants}
                animate="animate"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="absolute -right-28 top-32 bg-red-100 border border-red-300 rounded-lg p-3 shadow-lg max-w-xs hidden lg:block"
              >
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-red-600" />
                  <div className="text-red-700 text-sm font-medium">
                    Document Expired
                  </div>
                </div>
                <div className="absolute -left-2 top-4 w-0 h-0 border-r-8 border-r-red-100 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
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
                    Review Pending
                  </div>
                </div>
                <div className="absolute -left-2 top-4 w-0 h-0 border-r-8 border-r-yellow-100 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </motion.div>
              
              {/* Additional floating documents */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
                animate={{ opacity: 0.6, scale: 0.8, rotate: 25 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="absolute -top-8 left-16 w-16 h-20 bg-blue-200 rounded-lg shadow-md transform rotate-12 hidden lg:block"
              >
                <div className="p-2">
                  <div className="w-full h-2 bg-blue-400 rounded mb-1"></div>
                  <div className="w-3/4 h-1 bg-blue-300 rounded mb-1"></div>
                  <div className="w-full h-1 bg-blue-300 rounded"></div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                animate={{ opacity: 0.6, scale: 0.7, rotate: -35 }}
                transition={{ duration: 1, delay: 2.7 }}
                className="absolute bottom-4 right-8 w-14 h-18 bg-green-200 rounded-lg shadow-md transform -rotate-12 hidden lg:block"
              >
                <div className="p-2">
                  <div className="w-full h-2 bg-green-400 rounded mb-1"></div>
                  <div className="w-2/3 h-1 bg-green-300 rounded mb-1"></div>
                  <div className="w-full h-1 bg-green-300 rounded"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </motion.div>
    </div>
  );
}