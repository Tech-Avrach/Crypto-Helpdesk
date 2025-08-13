import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Clock, Settings, Link, Bitcoin, RotateCcw, ChevronRight } from 'lucide-react';

export default function WithdrawalHelpCenter() {
  const [activeSection, setActiveSection] = useState('pending-withdrawals');
  const sectionRefs = useRef({});
  const [isMobile, setIsMobile] = useState(false);

  const categories = [
    {
      id: 'pending-withdrawals',
      title: 'Pending or Delayed Withdrawals',
      icon: Clock,
      description: 'When a withdrawal is stuck or taking longer than expected.',
      articles: [
        {
          title: 'Why my withdrawal is still pending',
          content: 'Withdrawals can remain pending due to security reviews, bank processing delays, verification requirements, or compliance checks. Large withdrawals often trigger additional review processes. Weekend and holiday processing schedules can also extend pending times, especially for bank transfers.'
        },
        {
          title: 'Common reasons for withdrawal delays',
          content: 'The most common causes include insufficient verification documents, bank holidays, network congestion for crypto withdrawals, security holds on new accounts, and technical maintenance. International withdrawals may face additional compliance checks that extend processing time.'
        },
        {
          title: 'How weekends & holidays affect processing time',
          content: 'Bank transfers don\'t process on weekends or holidays, which can add 2-3 days to your withdrawal. Crypto withdrawals may still process, but customer support response times are limited. Plan withdrawals accordingly, especially before long holiday weekends.'
        },
        {
          title: 'Network congestion for cryptocurrency withdrawals',
          content: 'High network traffic can slow crypto withdrawals significantly. Bitcoin and Ethereum networks experience congestion during market volatility. Check network status and consider timing withdrawals during lower traffic periods. Higher fees can sometimes prioritize your transaction.'
        },
        {
          title: 'How to track your withdrawal status',
          content: 'Use your account dashboard to monitor withdrawal status in real-time. Most platforms provide tracking numbers or transaction hashes for crypto withdrawals. Email notifications should update you on status changes. Contact support if tracking information seems outdated.'
        },
        {
          title: 'Escalating a delayed withdrawal',
          content: 'If your withdrawal exceeds the stated processing time, contact customer support with your withdrawal reference number. Document the delay with screenshots and expected timeline. Escalate through management channels if standard support doesn\'t resolve the issue within 24-48 hours.'
        }
      ]
    },
    {
      id: 'withdrawal-limits',
      title: 'Withdrawal Limits & Timelines',
      icon: Settings,
      description: 'Understanding the rules for how much and how often you can withdraw.',
      articles: [
        {
          title: 'Daily and monthly withdrawal limits',
          content: 'Most platforms impose daily limits ranging from $1,000-$50,000 depending on your verification level. Monthly limits can be 5-10x higher than daily limits. These limits reset at specific times (usually midnight UTC) and are cumulative across all withdrawal methods.'
        },
        {
          title: 'How to increase your withdrawal limit',
          content: 'Complete full identity verification including government ID, proof of address, and sometimes income verification. Higher tier verification can increase limits to $100,000+ daily. Some platforms offer temporary limit increases for documented legitimate needs with additional verification.'
        },
        {
          title: 'Minimum withdrawal amounts',
          content: 'Minimum withdrawals vary by method: bank transfers often require $10-50 minimum, while crypto withdrawals may have minimums based on network fees. PayPal and other digital wallets typically have lower minimums ($1-10). Check the fee structure to ensure withdrawals are cost-effective.'
        },
        {
          title: 'Withdrawal cooldown periods after large deposits',
          content: 'New deposits often have holding periods of 3-10 days before withdrawal is allowed, especially for bank transfers and checks. This prevents fraud and ensures deposit funds are fully cleared. Credit card deposits may have longer holds due to chargeback risk.'
        },
        {
          title: 'Timelines for different withdrawal methods (bank, PayPal, crypto)',
          content: 'Bank transfers: 1-5 business days. PayPal: Instant to 24 hours. Crypto: 10 minutes to 2 hours (network dependent). Wire transfers: Same day to 1 business day. Debit cards: Instant to 30 minutes. International transfers add 1-3 additional days.'
        },
        {
          title: 'How verification status affects withdrawal speed',
          content: 'Fully verified accounts get priority processing and higher limits. Unverified accounts face delays, manual reviews, and lower limits. Partial verification creates inconsistent processing times. Complete all verification steps early to avoid withdrawal delays when you need funds quickly.'
        }
      ]
    },
    {
      id: 'bank-linking',
      title: 'Bank Account & Payment Method Linking',
      icon: Link,
      description: 'Connecting the right account to receive funds.',
      articles: [
        {
          title: 'How to link a new bank account',
          content: 'Navigate to your account settings and select "Add Bank Account." Enter your routing and account numbers carefully. Some platforms use instant verification through your online banking login, while others require micro-deposit verification that takes 1-2 business days.'
        },
        {
          title: 'Verifying your bank account for withdrawals',
          content: 'Verification typically involves confirming small test deposits (usually under $1) sent to your account. Check your bank statement for these amounts and enter them in your platform account. Instant verification services like Plaid can verify accounts immediately using your banking credentials.'
        },
        {
          title: 'Troubleshooting failed bank account linking',
          content: 'Double-check your routing and account numbers for accuracy. Ensure the account is in your name and actively open. Some banks block third-party connections - contact your bank if linking fails repeatedly. Business accounts may require additional documentation.'
        },
        {
          title: 'Switching to a different payment method',
          content: 'You can usually change your withdrawal method in account settings, but pending withdrawals may need to complete first. Some platforms require verification of new payment methods before allowing withdrawals. Consider processing times when switching methods.'
        },
        {
          title: 'Linking PayPal or other third-party accounts',
          content: 'Third-party account linking often requires email verification and sometimes additional identity checks. Ensure your PayPal account is verified and in good standing. Some platforms limit third-party withdrawals to specific amounts or require additional verification.'
        },
        {
          title: 'Bank account mismatch issues',
          content: 'Account holder names must match exactly between your platform account and bank account. Address discrepancies can also cause issues. Contact support to update account information or provide documentation explaining legitimate name differences (marriage, legal name changes).'
        }
      ]
    },
    {
      id: 'crypto-withdrawals',
      title: 'Cryptocurrency Network Withdrawals',
      icon: Bitcoin,
      description: 'When sending funds through blockchain networks.',
      articles: [
        {
          title: 'How to choose the correct blockchain network',
          content: 'Always verify the destination wallet supports the same network you\'re sending from. Common networks include Ethereum (ERC-20), Binance Smart Chain (BEP-20), and Polygon. Using the wrong network can result in permanent loss of funds. When in doubt, send a small test amount first.'
        },
        {
          title: 'Understanding network fees and gas charges',
          content: 'Network fees vary by blockchain and network congestion. Ethereum fees can range from $5-100+ during high traffic. Bitcoin fees are typically $1-20. These fees go to network validators, not the platform. Higher fees often mean faster processing during congested periods.'
        },
        {
          title: 'Why my crypto withdrawal is stuck in "processing"',
          content: 'Crypto withdrawals may be held for security reviews, especially for new accounts or large amounts. Network congestion can delay transaction broadcasting. Some platforms batch withdrawals at specific intervals. Check if maintenance is scheduled on your chosen network.'
        },
        {
          title: 'Transaction hash (TxID) and how to use it',
          content: 'Your transaction hash is a unique identifier you can use to track your withdrawal on blockchain explorers like Etherscan or Blockchain.info. The TxID appears once your transaction is broadcast to the network. Use it to verify transaction status independently of the platform.'
        },
        {
          title: 'Network maintenance or downtime delays',
          content: 'Blockchain networks occasionally undergo maintenance or experience technical issues. Platforms may pause withdrawals during network instability to prevent lost funds. Check official network status pages and platform announcements for maintenance schedules.'
        },
        {
          title: 'Confirmations required for crypto withdrawals',
          content: 'Different cryptocurrencies require different confirmation numbers for finality. Bitcoin typically needs 3-6 confirmations, Ethereum needs 12-35. More valuable transactions may require additional confirmations. Each confirmation represents a new block added to the blockchain.'
        }
      ]
    },
    {
      id: 'cancelling-withdrawals',
      title: 'Cancelling or Reversing a Withdrawal',
      icon: RotateCcw,
      description: 'When you need to stop or undo a transfer.',
      articles: [
        {
          title: 'Can I cancel a withdrawal in progress?',
          content: 'Withdrawals can usually be cancelled if they\'re still pending and haven\'t been processed yet. Look for a "Cancel" button in your transaction history. Once processing begins (especially for crypto), cancellation becomes impossible. Bank transfers may be cancellable within the first few hours.'
        },
        {
          title: 'How to request a withdrawal reversal',
          content: 'Contact customer support immediately with your transaction ID and reason for reversal. Provide clear documentation if the withdrawal was made in error. Reversals are only possible for certain payment methods and within specific timeframes. Act quickly for the best chance of success.'
        },
        {
          title: 'Time limits for reversing withdrawals',
          content: 'Bank transfers: Usually within 24 hours before processing begins. PayPal: Often reversible within 30 minutes to 1 hour. Crypto: Generally irreversible once broadcast to the network. Wire transfers: Possible within the same business day if caught early. International transfers have shorter reversal windows.'
        },
        {
          title: 'What to do if withdrawal was sent to the wrong account',
          content: 'Contact both the platform and the receiving bank immediately. For bank transfers, your bank may be able to recall the transfer if it hasn\'t been credited yet. Provide transaction details and explain the error. Recovery success rates are higher if you act within the first few hours.'
        },
        {
          title: 'Recovery process for incorrect crypto address withdrawals',
          content: 'Crypto sent to wrong addresses is usually permanently lost due to blockchain immutability. If you sent to an address you control but on the wrong network, recovery may be possible with technical expertise. Some exchanges may assist if the error involved their addresses, but success is rare.'
        },
        {
          title: 'Why some withdrawals can\'t be reversed',
          content: 'Cryptocurrency transactions are immutable once confirmed on the blockchain. International wire transfers often can\'t be reversed after same-day processing. Some digital payment methods have instant, non-reversible transfers. Always double-check recipient details before confirming withdrawals.'
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
            Withdrawal Issues Help Center
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Resolve withdrawal problems, understand limits and timelines, and get your funds transferred smoothly
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
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Withdrawal Categories</h3>
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
          <h3 className="text-2xl font-bold text-black mb-4">Still Having Withdrawal Issues?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you couldn't resolve your withdrawal problem, our fund recovery specialists are available 24/7 to help you get your transfers completed safely and quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-3xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
            >
              Contact Withdrawal Support
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-3xl font-semibold text-lg border-2 border-black hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              Live Recovery Help
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}