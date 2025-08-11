import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CreditCard, User, Shield, DollarSign, Calculator, ChevronRight, BarChart3, Lock, RefreshCcw } from 'lucide-react';

export default function HelpByTopicPayPal() {
  const topics = [
    {
      id: 1,
      title: "Getting Started with PayPal",
      icon: Clock,
      description: "Learn how to sign up, set up your account, and start sending or receiving money.",
      iconBg: "bg-indigo-500",
    },
    {
      id: 2,
      title: "Link a Bank or Card",
      description: "Add your bank account or debit/credit card for payments and withdrawals.",
      icon: CreditCard,
      iconBg: "bg-emerald-500",
    },
    {
      id: 3,
      title: "Account Settings & Profile",
      description: "Update your personal details, email, phone, and notification preferences.",
      icon: User,
      iconBg: "bg-orange-500",
    },
    {
      id: 4,
      title: "Security & Fraud Prevention",
      description: "Keep your account safe and learn how PayPal protects buyers and sellers.",
      icon: Shield,
      iconBg: "bg-red-500",
    },
    {
      id: 5,
      title: "Sending & Receiving Money",
      description: "Make payments, request money, and manage your PayPal transactions.",
      icon: DollarSign,
      iconBg: "bg-purple-500",
    },
    {
      id: 6,
      title: "Privacy & Data Protection",
      description: "Understand how your personal and financial data is stored and used.",
      icon: Lock,
      iconBg: "bg-teal-500",
    },
    {
      id: 7,
      title: "Refunds, Disputes & Claims",
      description: "Learn how to resolve payment issues and request refunds.",
      icon: RefreshCcw,
      iconBg: "bg-pink-500",
    },
    {
      id: 8,
      title: "Reports & Tax Documents",
      description: "Access your transaction history, reports, and year-end tax documents.",
      icon: Calculator,
      iconBg: "bg-yellow-500",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.6, ease: "easeOut", type: "spring", stiffness: 100 }
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
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Hover Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        
        {/* Glow */}
        <motion.div
          className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-blue-100/50 to-blue-200/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
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
            <IconComponent className="w-8 h-8 text-white" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
              {topic.title}
            </h3>
            <ChevronRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm leading-relaxed">
            {topic.description}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 bg-white relative">
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
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
      </motion.div>

      {/* Grid */}
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
    </div>
  );
}
