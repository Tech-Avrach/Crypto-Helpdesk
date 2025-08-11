import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function TopPayPalIssues() {
  const paypalBlue = '#0070df';

  const leftColumnIssues = [
    { title: "Account & Security", hasArrow: false, isCategory: true },
    { title: "How to reset your PayPal password", hasArrow: true },
    { title: "Confirming your email address", hasArrow: true },
    { title: "Enable two-step verification", hasArrow: true },
    { title: "Payments & Transactions", hasArrow: false, isCategory: true },
    { title: "How to send money securely", hasArrow: true },
    { title: "Understanding PayPal fees", hasArrow: true },
    { title: "Why is my payment on hold?", hasArrow: true }
  ];

  const rightColumnIssues = [
    { title: "Withdrawals & Bank Linking", hasArrow: false, isCategory: true },
    { title: "Link a bank account to PayPal", hasArrow: true },
    { title: "Withdraw funds to your bank", hasArrow: true },
    { title: "Currency conversion rules", hasArrow: true },
    { title: "PayPal Features & Tools", hasArrow: false, isCategory: true },
    { title: "Using PayPal Credit", hasArrow: true },
    { title: "Seller Protection Program", hasArrow: true },
    { title: "Download transaction history", hasArrow: true }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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

  const IssueItem = ({ issue }) => (
    <motion.div
      variants={itemVariants}
      className={`group cursor-pointer transition-all duration-300 ${
        issue.isCategory 
          ? 'py-4 border-b border-blue-100' 
          : 'py-4 px-4 rounded-xl border border-gray-100 hover:border-blue-300 hover:bg-blue-50/30 hover:shadow-lg hover:shadow-blue-100/50 mb-3 bg-white'
      }`}
      whileHover={!issue.isCategory ? { x: 6, scale: 1.02 } : {}}
      whileTap={!issue.isCategory ? { scale: 0.98 } : {}}
    >
      <div className="flex items-center justify-between">
        <span className={`${
          issue.isCategory 
            ? 'text-lg font-semibold text-gray-800' 
            : 'text-gray-700 group-hover:text-blue-700 font-medium'
        } transition-colors duration-300`}>
          {issue.title}
        </span>
        {issue.hasArrow && (
          <div className="relative">
            <ChevronRight 
              className="w-5 h-5 text-gray-400 group-hover:translate-x-2 transition-all duration-300" 
              style={{ color: paypalBlue }}
            />
            <motion.div
              className="absolute inset-0 rounded-full -z-10"
              style={{ backgroundColor: `${paypalBlue}33` }}
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
          style={{ background: `linear-gradient(to right, ${paypalBlue}0d, transparent, ${paypalBlue}0d)` }}
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
          <span className="font-black" style={{ color: paypalBlue }}>
            PayPal
          </span>{' '}
          Issues
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
        <div className="space-y-1">
          {leftColumnIssues.map((issue, i) => (
            <IssueItem key={i} issue={issue} />
          ))}
        </div>
        <div className="space-y-1">
          {rightColumnIssues.map((issue, i) => (
            <IssueItem key={i} issue={issue} />
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
