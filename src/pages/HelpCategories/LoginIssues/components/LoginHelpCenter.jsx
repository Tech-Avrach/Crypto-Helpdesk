import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Shield, ChevronRight } from 'lucide-react';

export default function LoginHelpCenter() {
  const [activeSection, setActiveSection] = useState('account-access');
  const sectionRefs = useRef({});
  const [isMobile, setIsMobile] = useState(false);

  const categories = [
    {
      id: 'account-access',
      title: 'Account Access Problems',
      icon: User,
      description: 'For users who can\'t get into their account at all.',
      articles: [
        {
          title: 'Can\'t sign in to your account (incorrect credentials)',
          content: 'If you\'re receiving an error message about incorrect credentials, first double-check that you\'re entering your username and password correctly. Remember that passwords are case-sensitive.'
        },
        {
          title: '"Account not found" error',
          content: 'This error typically occurs when the email address or username you\'re entering isn\'t associated with any account in our system. Try using a different email address you might have used to register.'
        },
        {
          title: 'Trouble logging in from a new device',
          content: 'For security reasons, logging in from a new device may require additional verification. Check your email for a verification code or security notification.'
        }
      ]
    },
    {
      id: 'password-credential',
      title: 'Password & Credential Issues',
      icon: Lock,
      description: 'For problems related to forgotten, expired, or compromised login details.',
      articles: [
        {
          title: 'How to reset your password',
          content: 'Click on the "Forgot Password" link on the login page. Enter your email address, and we\'ll send you a secure link to reset your password. The link expires after 24 hours for security.'
        },
        {
          title: 'Password reset email not received',
          content: 'Check your spam or junk folder first. If you still don\'t see the email, make sure you\'re using the correct email address. You can also add our domain to your email whitelist.'
        },
        {
          title: 'Updating your email or username',
          content: 'Once logged in, go to Account Settings > Profile Information to update your email or username. You\'ll need to verify the new email address before the change takes effect.'
        }
      ]
    },
    {
      id: 'security-lockouts',
      title: 'Security & Account Lockouts',
      icon: Shield,
      description: 'For cases where security measures prevent login.',
      articles: [
        {
          title: 'Account temporarily locked after suspicious activity',
          content: 'If our system detects unusual login attempts, your account may be temporarily locked for security. This typically resolves automatically within 15-30 minutes, or you can contact support for immediate assistance.'
        },
        {
          title: 'Two-Factor Authentication (2FA) not working',
          content: 'Ensure your device\'s time is synchronized correctly, as 2FA codes are time-sensitive. If you\'ve lost access to your authenticator app, use one of your backup codes or contact support.'
        },
        {
          title: 'Steps to unlock a suspended account',
          content: 'Account suspensions require manual review by our security team. Please contact support with your account details and any relevant information about recent account activity.'
        }
      ]
    }
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) return;
      
      const sections = Object.keys(sectionRefs.current);
      let currentSection = sections[0];

      sections.forEach(sectionId => {
        const element = sectionRefs.current[sectionId];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-blue-50 to-pink-50 py-12 lg:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-3xl lg:text-5xl font-bold text-black mb-4">
            Login Issues Help Center
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Find solutions to common login problems and get back to your account quickly
          </p>
        </motion.div>

        {/* Mobile Navigation */}
        {isMobile && (
          <motion.div variants={itemVariants} className="mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Quick Navigation</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => scrollToSection(category.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                        activeSection === category.id
                          ? 'bg-black text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium text-sm">{category.title}</span>
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* Main Content */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Desktop Sidebar - Sticky */}
          {!isMobile && (
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <div className="sticky top-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <motion.button
                          key={category.id}
                          onClick={() => scrollToSection(category.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full flex items-start gap-4 p-4 rounded-xl transition-all duration-300 text-left ${
                            activeSection === category.id
                              ? 'bg-black text-white shadow-lg'
                              : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                          }`}
                        >
                          <Icon className="w-6 h-6 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold mb-1">{category.title}</h4>
                            <p className={`text-sm ${
                              activeSection === category.id ? 'text-gray-200' : 'text-gray-500'
                            }`}>
                              {category.description}
                            </p>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Content Area */}
          <motion.div variants={itemVariants} className="lg:col-span-8">
            <div className="space-y-12">
              {categories.map((category, categoryIndex) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.id}
                    ref={(el) => (sectionRefs.current[category.id] = el)}
                    className="scroll-mt-8"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg"
                    >
                      {/* Category Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-black text-white p-3 rounded-xl">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-2">
                            {categoryIndex + 1}. {category.title}
                          </h2>
                          <p className="text-gray-600 text-lg">{category.description}</p>
                        </div>
                      </div>

                      {/* Articles */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-800">Articles/Problems:</h3>
                        {category.articles.map((article, articleIndex) => (
                          <motion.div
                            key={articleIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: articleIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="border-l-4 border-black pl-6 py-2"
                          >
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">
                              • {article.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                              {article.content}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Contact Support CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-black mb-4">Still Need Help?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you couldn't find a solution to your login problem, our support team is here to help you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-3xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
            >
              Contact Support
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-3xl font-semibold text-lg border-2 border-black hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              Live Chat
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}