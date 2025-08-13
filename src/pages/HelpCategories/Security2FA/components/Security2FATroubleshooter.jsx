import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, MessageCircle, Phone, Mail, CheckCircle, Shield, Lock } from 'lucide-react';

export default function Security2FATroubleshooter() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [userContact, setUserContact] = useState({ email: '', phone: '' });
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 6;

  const questions = {
    1: {
      title: "Which crypto platform are you having security/2FA issues with?",
      subtitle: "Select the platform where your security features are blocked or not working",
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
      title: "What specific security/2FA problem are you experiencing?",
      subtitle: "Select the security issue that's preventing access to your account",
      options: [
        { id: '2fa_locked_out', label: 'Locked out due to lost 2FA device/app', icon: '🔒' },
        { id: '2fa_codes_invalid', label: '2FA codes not working or being rejected', icon: '❌' },
        { id: 'phone_number_changed', label: 'Changed phone number, can\'t receive SMS codes', icon: '📱' },
        { id: 'authenticator_lost', label: 'Lost authenticator app or device', icon: '📲' },
        { id: 'email_compromised', label: 'Email account compromised or hacked', icon: '✉️' },
        { id: 'account_suspicious', label: 'Account flagged for suspicious activity', icon: '⚠️' },
        { id: 'password_reset_blocked', label: 'Can\'t reset password or change security settings', icon: '🔐' },
        { id: 'backup_codes_used', label: 'Used all backup codes and still locked out', icon: '🆘' }
      ]
    },
    3: {
      title: "What type of 2FA were you using before the issue?",
      subtitle: "This helps us understand your security setup and recovery options",
      options: [
        { id: 'google_auth', label: 'Google Authenticator', icon: '🔐' },
        { id: 'authy', label: 'Authy', icon: '🛡️' },
        { id: 'sms_codes', label: 'SMS Text Message Codes', icon: '📱' },
        { id: 'email_codes', label: 'Email Verification Codes', icon: '📧' },
        { id: 'hardware_key', label: 'Hardware Security Key (YubiKey, etc.)', icon: '🔑' },
        { id: 'app_based', label: 'Platform\'s Built-in Authenticator', icon: '📲' },
        { id: 'multiple_methods', label: 'Multiple 2FA Methods Setup', icon: '🔄' },
        { id: 'unsure', label: 'Not sure which type I was using', icon: '❓' }
      ]
    },
    4: {
      title: "Do you still have access to any of these recovery methods?",
      subtitle: "Check all that still work - this determines your recovery options",
      options: [
        { id: 'backup_email', label: 'Backup email address', icon: '📮' },
        { id: 'phone_number', label: 'Phone number for SMS', icon: '📞' },
        { id: 'backup_codes', label: 'Written down backup/recovery codes', icon: '📝' },
        { id: 'trusted_device', label: 'Previously trusted device/computer', icon: '💻' },
        { id: 'id_documents', label: 'Government-issued ID for verification', icon: '🆔' },
        { id: 'account_details', label: 'Account creation details (dates, amounts, etc.)', icon: '📊' },
        { id: 'support_history', label: 'Previous support tickets or communication', icon: '🎫' },
        { id: 'none_available', label: 'None of these are available to me', icon: '🚫' }
      ],
      multiple: true
    },
    5: {
      title: "How urgent is your account access need?",
      subtitle: "This helps us prioritize and recommend the best recovery approach",
      options: [
        { id: 'funds_locked', label: 'Have significant funds locked in account', icon: '💰' },
        { id: 'trading_opportunity', label: 'Missing important trading opportunities', icon: '📈' },
        { id: 'security_concern', label: 'Concerned about account security/hacking', icon: '🚨' },
        { id: 'daily_use', label: 'Need access for regular transactions', icon: '🔄' },
        { id: 'tax_season', label: 'Need records for tax reporting', icon: '📋' },
        { id: 'not_urgent', label: 'Not urgent, just want to regain access', icon: '⏰' }
      ]
    },
    6: {
      title: "What steps have you already taken to resolve this security issue?",
      subtitle: "Select all that apply - this helps us avoid duplicate efforts",
      options: [
        { id: 'contacted_support', label: 'Contacted platform customer support', icon: '📞' },
        { id: 'tried_recovery', label: 'Attempted account recovery process', icon: '🔄' },
        { id: 'reset_password', label: 'Successfully reset password', icon: '🔐' },
        { id: 'new_phone_setup', label: 'Tried to setup 2FA with new phone', icon: '📱' },
        { id: 'backup_codes_tried', label: 'Used backup/recovery codes', icon: '📝' },
        { id: 'id_verification', label: 'Submitted identity verification documents', icon: '🆔' },
        { id: 'social_media', label: 'Reached out on social media', icon: '📱' },
        { id: 'searched_online', label: 'Searched for solutions online', icon: '🔍' },
        { id: 'asked_community', label: 'Asked for help in forums/communities', icon: '👥' },
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
                <Lock className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                We Can Restore Your Account Access!
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Based on your security situation, our specialists can help restore access to your 
                {answers[1] && ` ${getSelectedOption(1)?.label}`} account and fix your 2FA/security issues.
              </p>
              <div className="bg-yellow-100 border border-yellow-300 rounded-2xl p-6 mb-8">
                <p className="text-lg font-semibold text-yellow-800 mb-2">
                  🔐 Emergency Account Recovery Available
                </p>
                <p className="text-yellow-700">
                  While {getSelectedOption(1)?.label || 'platform'} security recovery can take 1-2 weeks, 
                  our security specialists often restore account access and fix 2FA issues in under 4 hours.
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
                Get Security Help Now
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
                Emergency Recovery Call
                <span className="text-sm bg-yellow-400 text-black px-2 py-1 rounded-full ml-2">
                  URGENT
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
                Or send me security recovery solutions via email
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
            <Lock className="w-8 h-8 text-yellow-500" />
            <h1 className="text-2xl lg:text-3xl font-bold text-black">
              Security & 2FA Troubleshooter
            </h1>
          </div>
          <p className="text-gray-600">
            Answer a few quick questions to get personalized help with your security and two-factor authentication issues
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
                          <span className="text-2xl hidden">🔒</span>
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
                  <Lock className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                  🚨 Account Locked? Security Issue? We'll Get You Back In! 
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Don't let security problems lock you out of your crypto! Our expert security specialists are ready to resolve your 
                  {answers[1] && ` ${getSelectedOption(1)?.label}`} 2FA and account access issues immediately.
                </p>
                <div className="bg-red-100 border border-red-300 rounded-2xl p-6 mb-8">
                  <p className="text-lg font-semibold text-red-800 mb-2">
                    ⚡ URGENT: Emergency Account Recovery Available 24/7
                  </p>
                  <p className="text-red-700">
                    Security lockouts can keep you from your funds for weeks! While {getSelectedOption(1)?.label || 'platform'} recovery can take 1-3 weeks, 
                    our certified security specialists often restore full account access and fix 2FA issues in under 4 hours.
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
                    <div>Security Hotline</div>
                    <div className="text-sm font-normal opacity-90">24/7 Account Recovery</div>
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
                    <div>Live Security Chat</div>
                    <div className="text-sm font-normal opacity-90">Instant Recovery Help</div>
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
                    🛡️ 100% Secure Account Recovery Process
                  </p>
                  <p className="text-yellow-700 text-sm">
                    Your account credentials and recovery process are protected with military-grade encryption.
                  </p>
                </div>
                <p className="text-gray-500 text-sm">
                  Available 24/7 • Average Recovery Time: Under 4 Hours • Success Rate: 98.7%
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