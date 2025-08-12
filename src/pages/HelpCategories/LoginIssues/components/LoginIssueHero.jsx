import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function LoginIssueHero() {
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

  const loginTextVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const crossVariants = {
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
              Having Problem 
              <br />
              <span className="text-gray-800">In Login?</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-lg"
            >
              Don't worry, we're here to help you get back into your account.
              <br />
              Our support team is ready to assist you immediately.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Help
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg border-2 border-black hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Connect Now
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Side - Login Failed Visual */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center relative"
          >
            <div className="relative">
              {/* Background circle for emphasis */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="absolute inset-0 bg-red-100/30 rounded-full scale-150 blur-2xl"
              ></motion.div>
              
              {/* Login text with cross */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  variants={loginTextVariants}
                  className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-800 select-none"
                  style={{
                    textShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}
                >
                  LOGIN
                </motion.div>
                
                {/* Red cross overlay */}
                <motion.div
                  variants={crossVariants}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative">
                    {/* Cross background for better visibility */}
                    <div className="absolute inset-0 bg-red-500 rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 opacity-90 blur-sm"></div>
                    
                    <X 
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-white relative z-10" 
                      strokeWidth={4}
                    />
                  </div>
                </motion.div>
              </div>
              
              {/* Failed text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-center mt-4"
              >
                <span className="text-red-600 text-xl sm:text-2xl lg:text-3xl font-bold">
                  ACCESS DENIED
                </span>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </motion.div>
    </div>
  );
}