import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CreditCard, User, Shield, DollarSign, Calculator, ChevronRight } from 'lucide-react';

export default function HelpByTopic() {
  const topics = [
    {
      id: 1,
      title: "Getting started",
      icon: Clock,
      description: "Set up your account and make your first transaction",
      iconBg: "bg-[#293b92]",
      delay: 0.1
    },
    {
      id: 2,
      title: "Payment and Invoice Issues",
      description: "Connect your bank account or debit card",
      icon: CreditCard,
      iconBg: "bg-[#293b92]",
      delay: 0.2
    },
    {
      id: 3,
      title: "Managing my account",
      description: "Account settings, verification, and profile management",
      icon: User,
      iconBg: "bg-gray-800",
      delay: 0.3
    },
    {
      id: 4,
      title: "QR Code and Wallet Redirection",
      description: "Report fraud and protect your account",
      icon: Shield,
      iconBg: "bg-[#293b92]",
      delay: 0.4
    },
    {
      id: 5,
      title: "Trading and funding",
      description: "Buy, sell, and manage your cryptocurrency",
      icon: DollarSign,
      iconBg: "bg-gray-600",
      delay: 0.5
    },
    {
      id: 6,
      title: "Privacy and security",
      description: "Keep your account safe and secure",
      icon: Shield,
      iconBg: "bg-[#293b92]",
      delay: 0.6
    },
    {
      id: 7,
      title: "Taxes",
      description: "Tax reporting and documentation",
      icon: Calculator,
      iconBg: "bg-[#293b92]",
      delay: 0.7
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const TopicCard = ({ topic }) => {
    const IconComponent = topic.icon;
    
    return (
      <motion.div
        variants={cardVariants}
        className="group relative overflow-hidden rounded-2xl bg-white shadow-inner border border-gray-200 p-6 cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-300 hover:bg-gray-50"
        style={{
          boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)'
        }}
        whileHover={{ 
          y: -8,
          scale: 1.02,
          boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Subtle Background Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#293b92]/30 via-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />
        
        {/* Subtle Floating Effect */}
        <motion.div
          className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-gray-100/50 to-gray-200/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Icon Container */}
        <div className="relative z-10 mb-6">
          <motion.div
            className={`inline-flex items-center justify-center w-16 h-16 ${topic.iconBg} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
            whileHover={{ 
              rotate: [0, -10, 10, 0],
              scale: 1.1 
            }}
            transition={{ duration: 0.5 }}
          >
            <IconComponent 
              className={`w-8 h-8 ${topic.iconBg === 'bg-white' ? 'text-[#293b92]' : 'text-white'} group-hover:scale-110 transition-transform duration-300`} 
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
              {topic.title}
            </h3>
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-all duration-300"
              whileHover={{ x: 4 }}
            >
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </motion.div>
          </div>
          
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm leading-relaxed">
            {topic.description}
          </p>
        </div>

        {/* Subtle Hover Border Effect */}
        <motion.div
          className="absolute inset-0 border border-[#293b92]/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />
      </motion.div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 bg-white">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-left mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Help by topic
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#293b92] to-purple-600 rounded-full"></div>
      </motion.div>

      {/* Topics Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </motion.div>

      {/* Bottom Decorative Element */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
      />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#293b92]/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-3 h-3 bg-purple-400/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}
