import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';

export default function CTASectionCharlesSchwab() {
  const charlesSchwabBlue = '#009cdb';

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Support",
      description: "Get immediate assistance",
      action: "Call Now"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our team",
      action: "Start Chat"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your questions",
      action: "Send Email"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Main CTA Content */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative bg-white rounded-3xl p-12 md:p-16 shadow-inner border border-gray-200"
              style={{
                boxShadow:
                  'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
            >
              {/* Subtle background pattern */}
              <div
                className="absolute inset-0 bg-gradient-to-br via-transparent to-gray-50/30 rounded-3xl"
                style={{ background: `linear-gradient(135deg, ${charlesSchwabBlue}20, transparent)` }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight"
                >
                  Can't find what you're looking for?
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
                >
                  Our expert support team is here to help you with any questions or issues you may have.
                </motion.p>

                {/* Primary CTA Button */}
                <motion.button
                  variants={itemVariants}
                  className="group relative inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    backgroundColor: charlesSchwabBlue,
                    boxShadow: `0 4px 14px ${charlesSchwabBlue}50`
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Get Personal Support</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>

                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 rounded-xl"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                </motion.button>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-6 right-6 w-2 h-2 rounded-full"
                style={{ backgroundColor: `${charlesSchwabBlue}33` }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              <motion.div
                className="absolute bottom-8 left-8 w-1 h-1 bg-gray-400/30 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1,
                  ease: 'easeInOut'
                }}
              />
            </motion.div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 cursor-pointer"
                  style={{
                    boxShadow:
                      'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    boxShadow: `inset 0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 10px 15px -3px ${charlesSchwabBlue}40, 0 4px 6px -2px ${charlesSchwabBlue}20`,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Subtle hover background */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to bottom, ${charlesSchwabBlue}15, transparent)`
                    }}
                    initial={false}
                  />

                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 text-white rounded-xl mb-4"
                      style={{ backgroundColor: charlesSchwabBlue }}
                      whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      {method.description}
                    </p>
                    <span
                      className="font-medium text-sm transition-colors duration-300"
                      style={{ color: charlesSchwabBlue }}
                    >
                      {method.action}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Decorative Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
            className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}
