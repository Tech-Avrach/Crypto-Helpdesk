import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Clock, RotateCcw, Settings, AlertTriangle, ChevronRight } from 'lucide-react';

export default function PaymentHelpCenter() {
  const [activeSection, setActiveSection] = useState('failed-payments');
  const sectionRefs = useRef({});
  const [isMobile, setIsMobile] = useState(false);

  const categories = [
    {
      id: 'failed-payments',
      title: 'Failed or Declined Payments',
      icon: CreditCard,
      description: 'When a payment doesn\'t go through successfully.',
      articles: [
        {
          title: 'Common reasons for payment failure',
          content: 'Payment failures typically occur due to insufficient funds, expired cards, incorrect card details, or bank security measures. Network connectivity issues and merchant-specific problems can also cause failures. Always double-check your card information and ensure your account has sufficient balance.'
        },
        {
          title: 'Troubleshooting failed transactions',
          content: 'Start by verifying your card details including number, expiry date, and CVV. Check if your card is activated and hasn\'t been blocked. Try using a different payment method or contact your bank to ensure there are no restrictions on your account.'
        },
        {
          title: 'Bank declined payment – what to do',
          content: 'When your bank declines a payment, contact them immediately to understand the reason. Common causes include suspected fraud, spending limits, or international transaction blocks. Your bank can lift these restrictions once they verify the transaction is legitimate.'
        },
        {
          title: 'Card verification errors',
          content: 'Verification errors occur when the billing address or security code doesn\'t match your bank records. Ensure your billing address exactly matches what\'s on file with your bank, including abbreviations and apartment numbers. The CVV should be the 3-4 digit code on your card.'
        },
        {
          title: 'Unsupported payment methods',
          content: 'Some merchants don\'t accept certain card types or digital wallets. Check the accepted payment methods on the checkout page. If your preferred method isn\'t supported, try an alternative like a different card or bank transfer.'
        },
        {
          title: 'Retrying a failed payment',
          content: 'Wait a few minutes before retrying a failed payment to avoid triggering fraud alerts. Fix any identified issues first, such as updating card details or contacting your bank. If problems persist after multiple attempts, try a different payment method.'
        }
      ]
    },
    {
      id: 'pending-payments',
      title: 'Pending or Stuck Payments',
      icon: Clock,
      description: 'When a payment remains "in progress" longer than expected.',
      articles: [
        {
          title: 'Why is my payment still pending?',
          content: 'Payments can remain pending due to bank processing delays, additional verification requirements, weekend or holiday processing schedules, or security reviews. International payments often take longer due to additional compliance checks.'
        },
        {
          title: 'How long pending payments take to process',
          content: 'Most card payments process within 1-3 business days, while bank transfers can take 3-5 business days. International transactions may take up to 7 business days. Weekends and holidays can extend these timeframes.'
        },
        {
          title: 'Canceling a pending payment',
          content: 'Pending payments can often be canceled if they haven\'t been processed yet. Look for a "Cancel" option in your payment history or account dashboard. Once processing begins, cancellation may not be possible, and you\'ll need to request a refund instead.'
        },
        {
          title: 'Tracking payment status',
          content: 'Check your account dashboard or payment history for real-time status updates. You should also receive email notifications about status changes. If tracking information isn\'t available, contact customer support with your payment reference number.'
        },
        {
          title: 'Payment stuck due to verification',
          content: 'Payments may be held for additional verification to prevent fraud. You might need to provide identification, confirm your identity through email or SMS, or contact your bank. Complete any requested verification steps promptly to release the payment.'
        },
        {
          title: 'When to contact support for pending issues',
          content: 'Contact support if a payment has been pending longer than the expected timeframe, if you haven\'t received status updates, or if you need urgent assistance. Provide your payment reference number and transaction details for faster resolution.'
        }
      ]
    },
    {
      id: 'refunds-chargebacks',
      title: 'Refunds & Chargebacks',
      icon: RotateCcw,
      description: 'For customers wanting money returned or disputing charges.',
      articles: [
        {
          title: 'How to request a refund',
          content: 'Log into your account and navigate to your order or payment history. Look for a "Request Refund" option next to eligible transactions. Provide a reason for the refund request and any supporting documentation. Refund requests are typically reviewed within 2-3 business days.'
        },
        {
          title: 'Refund processing timelines',
          content: 'Once approved, refunds typically take 3-5 business days for credit cards and up to 10 business days for bank transfers. The exact timing depends on your bank or card issuer. You\'ll receive confirmation when the refund is processed and when it should appear in your account.'
        },
        {
          title: 'Refund not received – what to check',
          content: 'First, verify the refund was approved and processed by checking your account dashboard. Then check if enough time has passed based on your payment method. Contact your bank to confirm they haven\'t held the refund. If everything looks correct but you still haven\'t received it, contact support.'
        },
        {
          title: 'Understanding chargebacks',
          content: 'A chargeback is when you dispute a charge directly with your bank or card issuer. This should be a last resort after trying to resolve the issue with the merchant. Chargebacks can take 60-90 days to resolve and may result in fees or account restrictions.'
        },
        {
          title: 'How to dispute unauthorized charges',
          content: 'If you see charges you didn\'t authorize, contact the merchant first to attempt resolution. If unsuccessful, dispute the charge with your bank or card issuer immediately. Provide all relevant documentation including transaction details, communication attempts, and proof of unauthorized use.'
        },
        {
          title: 'Refunds for failed transactions',
          content: 'If you were charged for a failed transaction, request a refund immediately through your account dashboard or by contacting support. These refunds are typically processed faster than regular refunds since no goods or services were provided.'
        }
      ]
    },
    {
      id: 'payment-methods',
      title: 'Updating & Managing Payment Methods',
      icon: Settings,
      description: 'When you need to change or fix your payment info.',
      articles: [
        {
          title: 'How to add a new payment method',
          content: 'Go to your account settings and select "Payment Methods" or "Billing." Click "Add Payment Method" and enter your card or bank account details. Verify the information is correct and complete any required verification steps. Your new payment method will be available immediately after verification.'
        },
        {
          title: 'Editing existing payment details',
          content: 'In your payment methods section, find the card or account you want to update and click "Edit." You can typically update the expiry date, billing address, and cardholder name. For security reasons, you usually can\'t edit the card number – you\'ll need to add it as a new payment method instead.'
        },
        {
          title: 'Removing old or expired cards',
          content: 'Locate the payment method you want to remove and click "Delete" or the trash icon. You can\'t remove a payment method that has pending transactions or is set as your default. Change your default payment method first, then remove the old one.'
        },
        {
          title: 'Verifying your payment method',
          content: 'New payment methods may require verification through a small charge (usually $1) that\'s immediately refunded, or by confirming micro-deposits in your bank account. Check your bank statement or account for these verification amounts and confirm them in your account settings.'
        },
        {
          title: 'Setting a default payment option',
          content: 'In your payment methods section, look for a "Set as Default" option next to your preferred payment method. Your default payment method will be automatically selected for future purchases, but you can still choose a different one during checkout if needed.'
        },
        {
          title: 'Updating billing address',
          content: 'Your billing address must match what\'s on file with your bank or card issuer. Update it in your payment method settings or during checkout. Incorrect billing addresses are a common cause of payment failures, so ensure all details including ZIP code and apartment numbers are accurate.'
        }
      ]
    },
    {
      id: 'duplicate-charges',
      title: 'Duplicate or Incorrect Charges',
      icon: AlertTriangle,
      description: 'When you\'re charged more than once or incorrectly.',
      articles: [
        {
          title: 'How to identify a double charge',
          content: 'Check your bank or card statement for multiple charges of the same amount on the same date. Compare these with your purchase history to confirm if you should have been charged multiple times. Sometimes authorization holds can appear as duplicate charges but will be corrected automatically.'
        },
        {
          title: 'Requesting a refund for duplicate payments',
          content: 'Document the duplicate charges with screenshots of your bank statement and purchase history. Contact customer support immediately with this evidence. Most merchants will quickly process refunds for confirmed duplicate charges, usually within 3-5 business days.'
        },
        {
          title: 'Reporting incorrect billing amounts',
          content: 'If you\'re charged a different amount than expected, first check if there were additional fees, taxes, or currency conversion charges. If the amount is still incorrect, contact support with your order details and the amount you expected to be charged versus what you were actually charged.'
        },
        {
          title: 'Understanding temporary holds on funds',
          content: 'Temporary authorization holds reserve funds on your account and may appear as charges. These typically release automatically within 1-7 days if the actual transaction doesn\'t go through. Hotels, car rentals, and gas stations commonly use authorization holds.'
        },
        {
          title: 'Preventing duplicate transactions',
          content: 'Avoid clicking payment buttons multiple times, especially if the page seems slow to respond. Don\'t refresh the payment page during processing. If you\'re unsure whether a payment went through, check your account or email confirmations before attempting to pay again.'
        },
        {
          title: 'Contacting support for charge corrections',
          content: 'When contacting support about incorrect charges, provide your transaction ID, the incorrect amount charged, the correct amount expected, and any relevant screenshots. Response times are typically faster when you provide complete information upfront.'
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
            Payment Issues Help Center
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Resolve payment problems, manage billing issues, and get your transactions working smoothly
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
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Payment Categories</h3>
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

                      {/* Subtopics */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-800">Subtopics:</h3>
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
          <h3 className="text-2xl font-bold text-black mb-4">Still Having Payment Issues?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you couldn't resolve your payment problem, our billing specialists are available 24/7 to help you get your transactions working smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-3xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
            >
              Contact Billing Support
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-3xl font-semibold text-lg border-2 border-black hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              Live Payment Help
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}