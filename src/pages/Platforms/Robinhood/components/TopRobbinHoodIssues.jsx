import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function TopRobbinHoodIssues() {
  const leftColumnIssues = [
    { title: "Account management", hasArrow: false, isCategory: true },
    { title: "How to enable two-factor authentication", hasArrow: true },
    { title: "Account verification and approval", hasArrow: true },
    { title: "Reset password or unlock account", hasArrow: true },
    { title: "Buying and selling crypto", hasArrow: false, isCategory: true },
    { title: "Why is my crypto order pending?", hasArrow: true },
    { title: "How to buy cryptocurrency", hasArrow: true },
    { title: "Cryptocurrency order types", hasArrow: true }
  ];

  const rightColumnIssues = [
    { title: "Deposits and withdrawals", hasArrow: false, isCategory: true },
    { title: "Instant deposits and buying power", hasArrow: true },
    { title: "How to transfer crypto to external wallet", hasArrow: true },
    { title: "Deposit and withdrawal limits", hasArrow: true },
    { title: "Robinhood features", hasArrow: false, isCategory: true },
    { title: "Cryptocurrency wallets on Robinhood", hasArrow: true },
    { title: "Pattern Day Trading rules", hasArrow: true },
    { title: "Tax documents and reporting", hasArrow: true }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const IssueItem = ({ issue, index }) => (
    <motion.div
      variants={itemVariants}
      className={`group cursor-pointer transition-all duration-300 ${
        issue.isCategory 
          ? 'py-4 border-b border-green-100' 
          : 'py-4 px-4 rounded-xl border border-gray-100 hover:border-green-300 hover:bg-green-50/30 hover:shadow-lg hover:shadow-green-100/50 mb-3 bg-white'
      }`}
      whileHover={!issue.isCategory ? { x: 6, scale: 1.02 } : {}}
      whileTap={!issue.isCategory ? { scale: 0.98 } : {}}
      style={{
        '--hover-border': issue.isCategory ? undefined : '#62f15b66',
        '--hover-bg': issue.isCategory ? undefined : '#62f15b0d',
        '--hover-shadow': issue.isCategory ? undefined : '#62f15b33'
      }}
    >
      <div className="flex items-center justify-between">
        <span className={`${
          issue.isCategory 
            ? 'text-lg font-semibold text-gray-800' 
            : 'text-gray-700 group-hover:text-green-700 font-medium'
        } transition-colors duration-300`}
        style={issue.isCategory ? {} : { '--hover-color': '#15803d' }}>
          {issue.title}
        </span>
        {issue.hasArrow && (
          <div className="relative">
            <ChevronRight 
              className="w-5 h-5 text-gray-400 group-hover:translate-x-2 transition-all duration-300" 
              style={{ '--hover-color': '#62f15b' }}
            />
            <motion.div
              className="absolute inset-0 rounded-full -z-10"
              style={{ backgroundColor: '#62f15b33' }}
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.5, opacity: 0.3 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        )}
      </div>
      {!issue.isCategory && (
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ 
            background: 'linear-gradient(to right, #62f15b0d, transparent, #62f15b0d)'
          }}
          initial={false}
        />
      )}
    </motion.div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 bg-white">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-2">
          Top{' '}
          <span className="font-black" style={{ color: '#62f15b' }}>
            Robinhood
          </span>
          {' '}Issues
        </h2>
      </motion.div>

      {/* Issues Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6 md:gap-8"
      >
        {/* Left Column */}
        <div className="space-y-1">
          {leftColumnIssues.map((issue, index) => (
            <IssueItem key={index} issue={issue} index={index} />
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-1">
          {rightColumnIssues.map((issue, index) => (
            <IssueItem key={index} issue={issue} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Bottom Decoration */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
      />
    </div>
  );
}