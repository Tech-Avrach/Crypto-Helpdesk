import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, MessageCircle, Phone, Mail, CheckCircle, Bitcoin } from 'lucide-react';

export default function CryptoLoginTroubleshooter() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [userContact, setUserContact] = useState({ email: '', phone: '' });
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 5;

  const questions = {
    1: {
      title: "Which crypto platform are you locked out of?",
      subtitle: "Select the platform you're having trouble accessing",
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
      title: "What exactly is happening when you try to log in?",
      subtitle: "Describe the exact issue you're experiencing",
      options: [
        { id: 'wrong_credentials', label: 'Wrong password/username error', icon: '🔐' },
        { id: 'account_locked', label: 'Account locked or suspended', icon: '🚫' },
        { id: 'two_factor_issue', label: 'Two-factor authentication not working', icon: '📱' },
        { id: 'technical_error', label: 'Page won\'t load/technical error', icon: '⚠️' },
        { id: 'account_hacked', label: 'Account hacked or compromised', icon: '🛡️' },
        { id: 'device_issue', label: 'New device not recognized', icon: '📲' },
        { id: 'other_issue', label: 'Other login issue', icon: '❓' }
      ]
    },
    3: {
      title: "Can you access the email linked to this account?",
      subtitle: "This helps us determine the best recovery approach",
      options: [
        { id: 'full_access', label: 'Yes, I have full email access', icon: '✅' },
        { id: 'read_only', label: 'I can see emails but can\'t send', icon: '👀' },
        { id: 'no_access', label: 'No access to that email anymore', icon: '❌' },
        { id: 'forgot_email', label: 'I\'m not sure which email I used', icon: '🤔' },
        { id: 'other_email', label: 'Other email situation', icon: '❓' }
      ]
    },
    4: {
      title: "How urgently do you need access?",
      subtitle: "Help us prioritize your case appropriately",
      options: [
        { id: 'critical', label: 'Extremely urgent (work/business critical)', icon: '🚨' },
        { id: 'today', label: 'Need it today for important task', icon: '⏰' },
        { id: 'this_week', label: 'Moderate priority', icon: '📅' },
        { id: 'whenever', label: 'Just whenever convenient', icon: '😌' }
      ]
    },
    5: {
      title: "What have you already tried?",
      subtitle: "Select all that apply - this helps us avoid duplicate efforts",
      options: [
        { id: 'password_reset', label: 'Password reset (didn\'t work)', icon: '🔄' },
        { id: 'platform_support', label: 'Contacted platform support (no response)', icon: '📞' },
        { id: 'different_devices', label: 'Tried different devices/browsers', icon: '💻' },
        { id: 'social_recovery', label: 'Asked friends/colleagues for help', icon: '👥' },
        { id: 'google_search', label: 'Searched online for solutions', icon: '🔍' },
        { id: 'first_attempt', label: 'This is my first attempt to fix it', icon: '🆕' },
        { id: 'other_attempts', label: 'Other troubleshooting attempts', icon: '❓' }
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
                We Can Help You Recover Access!
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Based on your answers, our crypto recovery specialists can resolve your 
                {answers[1] && ` ${getSelectedOption(1)?.label}`} access issue quickly.
              </p>
              <div className="bg-yellow-100 border border-yellow-300 rounded-2xl p-6 mb-8">
                <p className="text-lg font-semibold text-yellow-800 mb-2">
                  ⚡ Fast Track Available
                </p>
                <p className="text-yellow-700">
                  While {getSelectedOption(1)?.label || 'platform'} support can take 24-48 hours to respond, 
                  our specialists often resolve crypto login issues in under 15 minutes.
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
                Get Instant Help Now
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
                Schedule Quick Call
                <span className="text-sm bg-yellow-400 text-black px-2 py-1 rounded-full ml-2">
                  15 MIN
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
                Or send me solutions via email
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
            <Bitcoin className="w-8 h-8 text-yellow-500" />
            <h1 className="text-2xl lg:text-3xl font-bold text-black">
              Crypto Login Troubleshooter
            </h1>
          </div>
          <p className="text-gray-600">
            Answer a few quick questions to get personalized help with your crypto platform access
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
                          <span className="text-2xl hidden">📱</span>
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
                  🚨 Crypto Account Recovery Crisis? We're Here to Help! 
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Don't lose access to your valuable crypto assets! Our expert recovery specialists are standing by to restore your 
                  {answers[1] && ` ${getSelectedOption(1)?.label}`} account access immediately.
                </p>
                <div className="bg-red-100 border border-red-300 rounded-2xl p-6 mb-8">
                  <p className="text-lg font-semibold text-red-800 mb-2">
                    ⚡ URGENT: Time-Sensitive Recovery Available
                  </p>
                  <p className="text-red-700">
                    Every minute counts when crypto accounts are locked! While {getSelectedOption(1)?.label || 'platform'} support can take days, 
                    our 24/7 specialists often resolve critical access issues in under 15 minutes.
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
                    <div>Call Now - 24x7</div>
                    <div className="text-sm font-normal opacity-90">Emergency Recovery Hotline</div>
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
                    <div>Chat With Us - 24x7</div>
                    <div className="text-sm font-normal opacity-90">Instant Live Support</div>
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
                    🔒 100% Secure & Confidential Recovery Process
                  </p>
                  <p className="text-yellow-700 text-sm">
                    Your crypto security is our top priority. All recovery sessions are encrypted and private.
                  </p>
                </div>
                <p className="text-gray-500 text-sm">
                  Available 24/7 • Average Response Time: Under 60 Seconds • Success Rate: 98.7%
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