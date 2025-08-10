import React from 'react';
import { motion } from 'framer-motion';
import BottomImg from '@/assets/home/Troubleshooting.png';

const TroubleshootingGuides = () => {
  const guides = [
    "How to Reset 2FA on Coinbase",
    "Why Your Binance Withdrawal is Pending", 
    "Fixing MetaMask Connection Issues",
    "Resolving Kraken Deposit Problems",
    "Understanding Ethereum Gas Fees"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <div className="min-h-screen bg-[#fafafa] py-16 px-6rounded-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto pt-10 rounded-2xl overflow-hidden">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Troubleshooting Guides
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Crypto Helpdesk is a U.S.-based support website designed to help users facing issues on major 
            cryptocurrency platforms. Access our most popular and trending guides below.
          </p>
        </motion.div>

        {/* Guides Grid */}
        <motion.div 
          className="space-y-8 px-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* First Row - 3 Guides */}
          <div className="grid md:grid-cols-3 gap-6">
            {guides.slice(0, 3).map((guide, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl transition-all duration-300">
                  {/* White Strip with Yellow Border */}
                  <div className="h-20 bg-white border-2 border-yellow-400 rounded-2xl flex items-center justify-center px-6 group-hover:border-4 transition-all duration-300">
                    <h3 className="text-gray-900 font-semibold text-center leading-tight group-hover:scale-105 transition-transform duration-300">
                      {guide}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 2 Guides (Centered) */}
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
              {guides.slice(3, 5).map((guide, index) => (
                <motion.div
                  key={index + 3}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl transition-all duration-300">
                    {/* White Strip with Yellow Border */}
                    <div className="h-20 bg-white border-2 border-yellow-400 rounded-2xl flex items-center justify-center px-6 group-hover:border-4 transition-all duration-300">
                      <h3 className="text-gray-900 font-semibold text-center leading-tight group-hover:scale-105 transition-transform duration-300">
                        {guide}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Full Width Image */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={BottomImg}
            alt="Crypto Helpdesk"
            className="w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TroubleshootingGuides;
