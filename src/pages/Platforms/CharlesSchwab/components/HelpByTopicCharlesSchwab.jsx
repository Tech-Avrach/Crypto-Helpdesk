import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CreditCard, User, Shield, DollarSign, Calculator, ChevronRight, BarChart3 } from 'lucide-react';

export default function HelpByTopicCharlesSchwab() {
  const topics = [
    {
      id: 1,
      title: "Getting Started",
      icon: Clock,
      description: "Create your account and explore Charles Schwab features.",
      iconBg: "bg-[#009cdb]",
    },
    {
      id: 2,
      title: "TD Ameritrade Integration",
      description: "Issues related to the TD Ameritrade merger.",
      icon: CreditCard,
      iconBg: "bg-[#009cdb]",
    },
    {
      id: 3,
      title: "Account Management",
      description: "Update profile, verify identity, and manage settings.",
      icon: User,
      iconBg: "bg-gray-800",
    },
    {
      id: 4,
      title: "Platform and Technology",
      description: "Report suspicious activity and protect your investments.",
      icon: Shield,
      iconBg: "bg-[#009cdb]",
    },
    {
      id: 5,
      title: "Trading Stocks & Crypto",
      description: "Buy, sell, and manage your stock and crypto portfolio.",
      icon: DollarSign,
      iconBg: "bg-gray-600",
    },
    {
      id: 6,
      title: "Privacy & Data",
      description: "Learn how Charles Schwab keeps your data secure.",
      icon: Shield,
      iconBg: "bg-[#009cdb]",
    },
    {
      id: 7,
      title: "Taxes & Reports",
      description: "Access your tax documents and transaction history.",
      icon: Calculator,
      iconBg: "bg-[#009cdb]",
    },
    {
      id: 8,
      title: "Market Insights",
      description: "Understand market trends and Charles Schwab analytics tools.",
      icon: BarChart3,
      iconBg: "bg-[#009cdb]",
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
        {/* Background Hover Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#009cdb]/30 via-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />
        
        {/* Decorative Floating Glow */}
        <motion.div
          className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-[#009cdb]/50 to-[#009cdb]/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Icon */}
        <div className="relative z-10 mb-6">
          <motion.div
            className={`inline-flex items-center justify-center w-16 h-16 ${topic.iconBg} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <IconComponent 
              className={`w-8 h-8 ${topic.iconBg === 'bg-white' ? 'text-[#009cdb]' : 'text-white'} group-hover:scale-110 transition-transform duration-300`} 
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

        {/* Border Highlight */}
        <motion.div
          className="absolute inset-0 border border-[#009cdb]/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />
      </motion.div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 bg-white">
      {/* Title */}
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
        <div className="w-24 h-1 bg-gradient-to-r from-[#009cdb] to-[#007baf] rounded-full"></div>
      </motion.div>

      {/* Cards Grid */}
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

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
      />

      {/* Floating Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#009cdb]/30 rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-3 h-3 bg-[#009cdb]/20 rounded-full"
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
