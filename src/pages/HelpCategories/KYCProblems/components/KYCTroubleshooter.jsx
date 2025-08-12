import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, MessageCircle, Phone, Mail, CheckCircle, Shield } from 'lucide-react';

export default function KYCTroubleshooter() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [userContact, setUserContact] = useState({ email: '', phone: '' });
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 6;

  const questions = {
    1: {
      title: "Which crypto platform are you having KYC issues with?",
      subtitle: "Select the platform where your identity verification is blocked",
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
      title: "What specific KYC problem are you experiencing?",
      subtitle: "Select the verification issue that's blocking your account",
      options: [
        { id: 'document_rejected', label: 'Identity documents rejected/declined', icon: '❌' },
        { id: 'verification_failed', label: 'Identity verification failed repeatedly', icon: '🚫' },
        { id: 'pending_review', label: 'KYC stuck in pending review for weeks', icon: '⏳' },
        { id: 'photo_issues', label: 'Selfie/photo verification not working', icon: '📸' },
        { id: 'address_verification', label: 'Address verification rejected', icon: '🏠' },
        { id: 'document_quality', label: 'Document quality/clarity issues', icon: '📄' },
        { id: 'wrong_information', label: 'Information mismatch or errors', icon: '❗' },
        { id: 'account_limited', label: 'Account limited due to incomplete KYC', icon: '🔒' }
      ]
    },
    3: {
      title: "What type of identity documents are you using?",
      subtitle: "This helps us understand potential document-specific issues",
      options: [
        { id: 'drivers_license', label: 'Driver\'s License', icon: '🪪' },
        { id: 'passport', label: 'Passport', icon: '📖' },
        { id: 'national_id', label: 'National ID Card', icon: '🆔' },
        { id: 'state_id', label: 'State-Issued ID', icon: '🏛️' },
        { id: 'military_id', label: 'Military ID', icon: '🪖' },
        { id: 'foreign_docs', label: 'Foreign/International Documents', icon: '🌍' },
        { id: 'expired_docs', label: 'Recently Expired Documents', icon: '📅' },
        { id: 'no_documents', label: 'Don\'t have acceptable documents', icon: '❓' }
      ]
    },
    4: {
      title: "How long has your KYC been pending or rejected?",
      subtitle: "Timeline helps us understand the urgency and next steps",
      options: [
        { id: 'today', label: 'Just submitted today', icon: '🕐' },
        { id: 'few_days', label: '2-7 days ago', icon: '📅' },
        { id: 'one_week', label: '1-2 weeks ago', icon: '🗓️' },
        { id: 'few_weeks', label: '2-4 weeks ago', icon: '📆' },
        { id: 'over_month', label: 'Over a month ago', icon: '⏰' },
        { id: 'multiple_attempts', label: 'Multiple attempts over months', icon: '🔄' }
      ]
    },
    5: {
      title: "What's your current account status?",
      subtitle: "Understanding your account limitations helps us prioritize",
      options: [
        { id: 'fully_blocked', label: 'Completely blocked from trading/withdrawals', icon: '🚫' },
        { id: 'limited_features', label: 'Limited features (low deposit/withdrawal limits)', icon: '⚠️' },
        { id: 'deposit_only', label: 'Can deposit but cannot withdraw', icon: '💰' },
        { id: 'view_only', label: 'Can only view account, no transactions', icon: '👀' },
        { id: 'new_account', label: 'New account, never completed KYC', icon: '🆕' },
        { id: 'funds_locked', label: 'Have funds locked in the account', icon: '🔐' }
      ]
    },
    6: {
      title: "What steps have you already taken to resolve this?",
      subtitle: "Select all that apply - this helps us avoid duplicate efforts",
      options: [
        { id: 'resubmitted_docs', label: 'Re-submitted documents multiple times', icon: '🔄' },
        { id: 'contacted_support', label: 'Contacted platform customer support', icon: '📞' },
        { id: 'different_documents', label: 'Tried different types of documents', icon: '📋' },
        { id: 'better_photos', label: 'Improved photo quality/lighting', icon: '📸' },
        { id: 'updated_info', label: 'Updated personal information', icon: '✏️' },
        { id: 'social_media', label: 'Reached out on social media', icon: '📱' },
        { id: 'searched_online', label: 'Searched for solutions online', icon: '🔍' },
        { id: 'asked_friends', label: 'Asked others for advice', icon: '👥' },
        { id: 'first_attempt', label: 'This is my first attempt to get help', icon: '🆕' }
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
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-blue-50 to-pink-50 py-12 lg:py-16">
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
                We Can Get You KYC Verified!
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Based on your answers, our KYC specialists can help resolve your 
                {answers[1] && ` ${getSelectedOption(1)?.label}`} verification issues and get your account fully verified.
              </p>
              <div className="bg-yellow-100 border border-yellow-300 rounded-2xl p-6 mb-8">
                <p className="text-lg font-semibold text-yellow-800 mb-2">
                  ⚡ Express Verification Available
                </p>
                <p className="text-yellow-700">
                  While {getSelectedOption(1)?.label || 'platform'} KYC reviews can take 2-3 weeks, 
                  our verification specialists often resolve KYC issues and get accounts approved in under 2 hours.
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
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Get KYC Help Now
                <span className="text-sm bg-black text-yellow-400 px-2 py-1 rounded-full ml-2">
                  LIVE CHAT
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Schedule Verification Call
                <span className="text-sm bg-yellow-400 text-black px-2 py-1 rounded-full ml-2">
                  20 MIN
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
                Or send me KYC solutions via email
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-blue-50 to-pink-50 py-12 lg:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 lg:px-8"
      >
        {/* Header */}
        <motion.div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-yellow-500" />
            <h1 className="text-2xl lg:text-3xl font-bold text-black">
              KYC Verification Troubleshooter
            </h1>
          </div>
          <p className="text-gray-600">
            Answer a few quick questions to get personalized help with your identity verification issues
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
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-3 rounded-full"
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
                          ? 'border-yellow-400 bg-yellow-50 shadow-lg'
                          : 'border-gray-200 hover:border-yellow-300 hover:bg-gray-50 shadow-md'
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
                          <span className="text-2xl hidden">🛡️</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <span className={`font-semibold text-lg ${
                          isSelected ? 'text-yellow-800' : 'text-gray-800'
                        }`}>
                          {option.label}
                        </span>
                      </div>
                      <ChevronRight className={`w-6 h-6 ${
                        isSelected ? 'text-yellow-600' : 'text-gray-400'
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
                <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                  🚨 KYC Verification Crisis? We'll Get You Approved! 
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Don't let KYC issues lock you out of your crypto investments! Our expert verification specialists are ready to resolve your 
                  {answers[1] && ` ${getSelectedOption(1)?.label}`} identity verification problems immediately.
                </p>
                <div className="bg-red-100 border border-red-300 rounded-2xl p-6 mb-8">
                  <p className="text-lg font-semibold text-red-800 mb-2">
                    ⚡ URGENT: Fast-Track KYC Approval Available 24/7
                  </p>
                  <p className="text-red-700">
                    KYC delays can lock your funds for months! While {getSelectedOption(1)?.label || 'platform'} verification can take 2-4 weeks, 
                    our certified KYC specialists often get accounts fully verified and approved in under 2 hours.
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
                    <div>Call KYC Hotline</div>
                    <div className="text-sm font-normal opacity-90">24/7 Verification Support</div>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowResults(true)}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  <div className="text-left">
                    <div>Live KYC Chat</div>
                    <div className="text-sm font-normal opacity-90">Instant Verification Help</div>
                  </div>
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <div className="bg-yellow-100 border border-yellow-300 rounded-2xl p-4 mb-6">
                  <p className="text-yellow-800 font-semibold">
                    🛡️ 100% Secure Identity Verification Process
                  </p>
                  <p className="text-yellow-700 text-sm">
                    Your personal documents and identity are protected with bank-level encryption.
                  </p>
                </div>
                <p className="text-gray-500 text-sm">
                  Available 24/7 • Average Verification Time: Under 2 Hours • Approval Rate: 99.5%
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