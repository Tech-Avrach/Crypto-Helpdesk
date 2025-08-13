import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, MessageCircle, Phone, Mail, CheckCircle, Bitcoin, CreditCard, ArrowDownCircle } from 'lucide-react';

export default function CryptoWithdrawalTroubleshooter() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [userContact, setUserContact] = useState({ email: '', phone: '' });
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 6;

  const questions = {
    1: {
      title: "Which crypto platform are you having withdrawal issues with?",
      subtitle: "Select the platform where your withdrawal problem occurred",
      options: [
        { id: 'coinbase', label: 'Coinbase', logo: 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/bhusvwtttjcsxhaq0kil' },
        { id: 'binance', label: 'Binance', logo: 'https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png' },
        { id: 'robinhood', label: 'Robinhood', logo: 'https://images.0xw.app/Robinhood.png' },
        { id: 'kraken', label: 'Kraken', logo: 'https://altcoinsbox.com/wp-content/uploads/2023/01/kraken-logo.png' },
        { id: 'bitpay', label: 'BitPay', logo: 'https://cdn.dribbble.com/userupload/20061840/file/original-9ba0517ccaeecbc2814eb9495db0cd19.png?resize=752x&vertical=center' },
        { id: 'paypal', label: 'PayPal (Crypto)', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfYDgjh2kHGqv2F3LX3bF9PrcdSXK7xoUiYA&s' },
        { id: 'schwab', label: 'Charles Schwab', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Charles_Schwab_Corporation_logo.png' },
        { id: 'cashapp', label: 'Cash App', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFVEI-5neCuUSfQcaApIiL29hYlu6e5kE0rg&s' },
        { id: 'other', label: 'Other Platform', logo: 'https://cdn-icons-png.flaticon.com/512/1828/1828833.png' }
      ]
    },
    2: {
      title: "What type of withdrawal issue are you experiencing?",
      subtitle: "Select the specific withdrawal problem you're facing",
      options: [
        { id: 'withdrawal_failed', label: 'Withdrawal transaction failed or rejected', icon: '❌' },
        { id: 'withdrawal_pending', label: 'Withdrawal stuck in pending status', icon: '⏳' },
        { id: 'funds_missing', label: 'Crypto withdrawn but funds never arrived', icon: '💸' },
        { id: 'withdrawal_blocked', label: 'Account or withdrawal temporarily blocked', icon: '🚫' },
        { id: 'kyc_verification', label: 'Withdrawal blocked due to verification issues', icon: '🔒' },
        { id: 'minimum_amount', label: 'Cannot meet minimum withdrawal requirements', icon: '📊' },
        { id: 'wrong_address', label: 'Sent to wrong wallet address', icon: '📍' },
        { id: 'withdrawal_fees', label: 'Unexpected or excessive withdrawal fees', icon: '💰' }
      ]
    },
    3: {
      title: "What type of withdrawal were you attempting?",
      subtitle: "This helps us understand the withdrawal method and potential issues",
      options: [
        { id: 'crypto_to_wallet', label: 'Crypto to External Wallet', icon: '🔐' },
        { id: 'crypto_to_bank', label: 'Crypto to Bank Account (Sell & Withdraw)', icon: '🏦' },
        { id: 'crypto_to_card', label: 'Crypto to Debit/Credit Card', icon: '💳' },
        { id: 'crypto_to_paypal', label: 'Crypto to PayPal', icon: '💰' },
        { id: 'internal_transfer', label: 'Transfer to Another Platform', icon: '🔄' },
        { id: 'wire_transfer', label: 'Wire Transfer Withdrawal', icon: '📡' },
        { id: 'ach_transfer', label: 'ACH Bank Transfer', icon: '🏦' },
        { id: 'other_method', label: 'Other Withdrawal Method', icon: '❓' }
      ]
    },
    4: {
      title: "When did you initiate this withdrawal?",
      subtitle: "Timeline helps us understand if this is within normal processing time",
      options: [
        { id: 'today', label: 'Today (within last 24 hours)', icon: '🕐' },
        { id: 'yesterday', label: 'Yesterday', icon: '📅' },
        { id: 'this_week', label: 'Earlier this week (2-7 days ago)', icon: '📆' },
        { id: 'last_week', label: 'Last week (1-2 weeks ago)', icon: '🗓️' },
        { id: 'this_month', label: 'Earlier this month', icon: '📋' },
        { id: 'longer', label: 'More than a month ago', icon: '⏰' }
      ]
    },
    5: {
      title: "What's the approximate withdrawal amount?",
      subtitle: "This helps us understand the urgency and determine the best resolution approach",
      options: [
        { id: 'under_500', label: 'Under $500', icon: '💵' },
        { id: '500_1000', label: '$500 - $1,000', icon: '💶' },
        { id: '1000_5000', label: '$1,000 - $5,000', icon: '💷' },
        { id: '5000_10000', label: '$5,000 - $10,000', icon: '💰' },
        { id: '10000_50000', label: '$10,000 - $50,000', icon: '💎' },
        { id: 'over_50000', label: 'Over $50,000', icon: '🏆' },
        { id: 'prefer_not_say', label: 'Prefer not to specify', icon: '🤐' }
      ]
    },
    6: {
      title: "What troubleshooting steps have you already tried?",
      subtitle: "Select all that apply - this helps us avoid duplicate efforts",
      options: [
        { id: 'contacted_platform', label: 'Contacted the crypto platform support', icon: '📞' },
        { id: 'checked_wallet', label: 'Verified destination wallet address', icon: '🔍' },
        { id: 'checked_network', label: 'Checked blockchain/network status', icon: '⛓️' },
        { id: 'updated_verification', label: 'Updated KYC/verification documents', icon: '📄' },
        { id: 'contacted_bank', label: 'Called receiving bank/card company', icon: '🏦' },
        { id: 'checked_limits', label: 'Reviewed withdrawal limits and requirements', icon: '📊' },
        { id: 'social_media', label: 'Reached out on social media', icon: '📱' },
        { id: 'searched_online', label: 'Searched for solutions online', icon: '🔍' },
        { id: 'asked_community', label: 'Asked crypto community for help', icon: '👥' },
        { id: 'first_attempt', label: 'This is my first attempt to resolve it', icon: '🆕' },
        { id: 'other_steps', label: 'Other troubleshooting steps', icon: '❓' }
      ],
      multiple: true
    }
  };

  const handleAnswer = (questionId, answerId) => {
    if (questions[questionId].multiple) {
      const currentAnswers = answers[questionId] || [];
      const newAnswers = currentAnswers.includes(answerId)
        ? currentAnswers.filter(id => id !== answerId)
        : [...currentAnswers, answerId];
      setAnswers({ ...answers, [questionId]: newAnswers });
    } else {
      setAnswers({ ...answers, [questionId]: answerId });
      // Auto-advance for single-select questions
      setTimeout(() => {
        if (currentStep < totalSteps) {
          setCurrentStep(currentStep + 1);
        } else if (currentStep === totalSteps) {
          // Move to contact form
          setCurrentStep(totalSteps + 1);
        }
      }, 500);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (userContact.email && userContact.phone) {
      setShowResults(true);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === totalSteps) {
      // Show contact form
      setCurrentStep(totalSteps + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getSelectedOption = (questionId) => {
    const answer = answers[questionId];
    if (!answer) return null;
    
    if (Array.isArray(answer)) {
      return questions[questionId].options.filter(opt => answer.includes(opt.id));
    }
    
    return questions[questionId].options.find(opt => opt.id === answer);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const questionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  const optionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto px-4 lg:px-8"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-8"
            >
              <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                We Can Recover Your Stuck Withdrawal!
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Based on your answers, our withdrawal recovery specialists can help unlock your funds from 
                {answers[1] && ` ${getSelectedOption(1)?.label}`} and complete your withdrawal successfully.
              </p>
              <div className="bg-orange-100 border border-orange-300 rounded-2xl p-6 mb-8">
                <p className="text-lg font-semibold text-orange-800 mb-2">
                  ⚡ Emergency Withdrawal Recovery Service
                </p>
                <p className="text-orange-700">
                  While {getSelectedOption(1)?.label || 'platform'} support can take 5-14 business days to resolve withdrawal issues, 
                  our certified specialists have direct connections to expedite stuck withdrawals in under 2 hours.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid md:grid-cols-2 gap-6 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Get Withdrawal Help Now
                <span className="text-sm bg-white text-blue-500 px-2 py-1 rounded-full ml-2">
                  LIVE CHAT
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Emergency Recovery Call
                <span className="text-sm bg-white text-purple-600 px-2 py-1 rounded-full ml-2">
                  24/7
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-center"
            >
              <button className="text-gray-500 hover:text-gray-700 underline flex items-center gap-2 mx-auto">
                <Mail className="w-4 h-4" />
                Or send me withdrawal recovery solutions via email
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 lg:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 lg:px-8"
      >
        {/* Header */}
        <motion.div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ArrowDownCircle className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl lg:text-3xl font-bold text-black">
              Crypto Withdrawal Issue Resolver
            </h1>
          </div>
          <p className="text-gray-600">
            Answer a few quick questions to get personalized help with your crypto withdrawal problems
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Step {Math.min(currentStep, totalSteps)} of {totalSteps}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round((Math.min(currentStep, totalSteps) / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div
              className="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(Math.min(currentStep, totalSteps) / totalSteps) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          {currentStep <= totalSteps && (
            <motion.div
              key={currentStep}
              variants={questionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl mb-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-black mb-3">
                  {questions[currentStep]?.title}
                </h2>
                <p className="text-gray-600 text-lg">
                  {questions[currentStep]?.subtitle}
                </p>
              </div>

              <div className="grid gap-4 max-w-3xl mx-auto">
                {questions[currentStep]?.options.map((option, index) => {
                  const isSelected = questions[currentStep].multiple
                    ? (answers[currentStep] || []).includes(option.id)
                    : answers[currentStep] === option.id;

                  return (
                    <motion.button
                      key={option.id}
                      variants={optionVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(currentStep, option.id)}
                      className={`flex items-center gap-4 p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                        isSelected
                          ? 'border-blue-400 bg-blue-50 shadow-lg'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 shadow-md'
                      }`}
                    >
                      <div className={`${isSelected ? 'scale-110' : ''} transition-transform`}>
                        {currentStep === 1 ? (
                          <img 
                            src={option.logo} 
                            alt={option.label}
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                        ) : (
                          <span className="text-2xl">{option.icon}</span>
                        )}
                        {currentStep === 1 && (
                          <span className="text-2xl hidden">💳</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <span className={`font-semibold text-lg ${
                          isSelected ? 'text-blue-800' : 'text-gray-800'
                        }`}>
                          {option.label}
                        </span>
                      </div>
                      <ChevronRight className={`w-6 h-6 ${
                        isSelected ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                    </motion.button>
                  );
                })}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>

                {questions[currentStep]?.multiple && (
                  <button
                    onClick={handleNext}
                    disabled={!answers[currentStep] || answers[currentStep].length === 0}
                    className="flex items-center gap-2 px-8 py-4 bg-black text-white rounded-2xl font-semibold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Continue
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {/* Contact Options */}
          {currentStep === totalSteps + 1 && (
            <motion.div
              key="contact"
              variants={questionVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-8"
              >
                <div className="bg-red-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <ArrowDownCircle className="w-10 h-10 text-red-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                  🚨 Withdrawal Stuck? We'll Unlock Your Funds! 
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Don't let withdrawal issues trap your crypto investments! Our expert withdrawal recovery specialists are ready to unlock your funds and resolve your 
                  {answers[1] && ` ${getSelectedOption(1)?.label}`} withdrawal problems immediately.
                </p>
                <div className="bg-red-100 border border-red-300 rounded-2xl p-6 mb-8">
                  <p className="text-lg font-semibold text-red-800 mb-2">
                    ⚡ URGENT: 24/7 Withdrawal Recovery Service
                  </p>
                  <p className="text-red-700">
                    Stuck withdrawals can lock your funds indefinitely! While {getSelectedOption(1)?.label || 'platform'} support can take 7-21 business days to resolve withdrawal issues, 
                    our certified withdrawal specialists often unlock funds and complete withdrawals in under 2 hours using direct platform connections.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid md:grid-cols-2 gap-6 mb-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowResults(true)}
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <Phone className="w-6 h-6" />
                  <div className="text-left">
                    <div>Call Withdrawal Hotline</div>
                    <div className="text-sm font-normal opacity-90">Emergency Fund Recovery</div>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowResults(true)}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  <div className="text-left">
                    <div>Live Recovery Chat</div>
                    <div className="text-sm font-normal opacity-90">Instant Withdrawal Help</div>
                  </div>
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <div className="bg-blue-100 border border-blue-300 rounded-2xl p-4 mb-6">
                  <p className="text-blue-800 font-semibold">
                    💰 98.7% Success Rate for Withdrawal Recovery & Fund Unlocking
                  </p>
                  <p className="text-blue-700 text-sm">
                    We work directly with exchanges and blockchain networks to resolve withdrawal issues safely.
                  </p>
                </div>
                <p className="text-gray-500 text-sm">
                  Available 24/7 • Average Response Time: Under 90 Seconds • Withdrawal Recovery Rate: 98.7%
                </p>
              </motion.div>

              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}