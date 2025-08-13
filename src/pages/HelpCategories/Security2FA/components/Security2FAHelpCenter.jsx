import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Lock, Key, Settings, ChevronRight } from 'lucide-react';

export default function Security2FAHelpCenter() {
  const [activeSection, setActiveSection] = useState('setting-up-2fa');
  const sectionRefs = useRef({});
  const [isMobile, setIsMobile] = useState(false);

  const categories = [
    {
      id: 'setting-up-2fa',
      title: 'Setting Up Two-Factor Authentication (2FA)',
      icon: Shield,
      description: 'Guides for enabling and configuring extra account security.',
      articles: [
        {
          title: 'How to enable 2FA on your account',
          content: 'Navigate to your account security settings and select "Two-Factor Authentication" or "2FA Setup." Choose your preferred method (SMS, email, or authenticator app), then follow the on-screen instructions. You\'ll typically scan a QR code or enter a setup key into your chosen authenticator app. Verify the setup by entering a test code, then save your backup codes in a secure location.'
        },
        {
          title: 'Choosing between SMS, email, and authenticator app 2FA',
          content: 'Authenticator apps like Google Authenticator or Authy are the most secure option as they work offline and can\'t be intercepted. SMS 2FA is convenient but vulnerable to SIM swapping attacks. Email 2FA is the least secure as email accounts can be compromised. For maximum security, use an authenticator app as your primary method with SMS or email as backup options.'
        },
        {
          title: 'Setting up 2FA using Google Authenticator or Authy',
          content: 'Download Google Authenticator or Authy from your app store. In your account security settings, select "Authenticator App" and scan the displayed QR code with your app. If you can\'t scan, manually enter the provided setup key. The app will generate 6-digit codes that refresh every 30 seconds. Test the setup by entering a current code, then save your backup codes securely.'
        },
        {
          title: 'How to back up your 2FA codes',
          content: 'Most platforms provide backup codes when you set up 2FA - save these securely offline. Authy offers cloud backup for your codes across devices. For Google Authenticator, manually record your setup keys or QR codes. Consider using multiple authenticator apps or devices. Never store backup codes in easily accessible digital locations like email or cloud storage without encryption.'
        },
        {
          title: 'Enabling 2FA on multiple devices',
          content: 'When setting up 2FA, scan the same QR code or enter the same setup key on multiple devices running authenticator apps. This creates synchronized codes across all devices. Authy allows automatic syncing across devices with the same account. Keep at least one backup device in a secure location in case your primary device is lost or damaged.'
        },
        {
          title: 'How 2FA protects your account',
          content: '2FA adds a second layer of security beyond your password. Even if someone steals your password through phishing, data breaches, or keyloggers, they still need access to your second factor (phone, authenticator app, or email). This makes unauthorized access exponentially more difficult and protects against most common attack methods including credential stuffing and brute force attacks.'
        }
      ]
    },
    {
      id: 'troubleshooting-2fa',
      title: 'Troubleshooting 2FA Problems',
      icon: AlertTriangle,
      description: 'Fixing issues when your two-factor login isn\'t working.',
      articles: [
        {
          title: '2FA code not accepted or invalid',
          content: 'Ensure your device\'s time is synchronized correctly - go to device settings and enable automatic time sync. Double-check you\'re entering the current 6-digit code, not an expired one. Make sure there are no extra spaces when copying codes. If using SMS, check for network delays. Try generating a new code and entering it immediately. Clear your browser cache if using web-based 2FA.'
        },
        {
          title: 'Time sync issues with authenticator apps',
          content: 'Authenticator apps rely on precise time synchronization. On Android, go to Google Authenticator settings and select "Time correction for codes." On iOS, ensure automatic date and time is enabled in Settings > General > Date & Time. For other apps, check their time sync settings. If problems persist, try removing and re-adding your account to the authenticator app.'
        },
        {
          title: 'Lost or changed phone number linked to 2FA',
          content: 'If you changed phone numbers, update it in your account settings before you lose access to the old number. If already locked out, use backup codes or alternative 2FA methods you set up. Contact customer support with identity verification documents. They may require additional verification steps like ID documents, account history, or answering security questions to restore access.'
        },
        {
          title: 'How to reset or disable 2FA if locked out',
          content: 'Use your saved backup codes to regain access, then reconfigure 2FA. If no backup codes available, contact customer support immediately. Provide identity verification documents and be prepared for a longer verification process. Some platforms offer alternative verification through email or SMS to backup contacts. Never attempt to create new accounts to bypass 2FA lockouts.'
        },
        {
          title: 'Recovery codes and how to use them',
          content: 'Recovery codes are single-use backup codes provided when you set up 2FA. Use them exactly like regular 2FA codes during login when your primary method isn\'t available. Each code works only once, so keep track of used codes. Access your account settings to generate new recovery codes before running out. Store them securely offline, preferably in multiple physical locations.'
        },
        {
          title: 'Common mistakes when entering 2FA codes',
          content: 'Avoid entering expired codes - use only current 6-digit codes from your authenticator. Don\'t include spaces when typing codes manually. Ensure caps lock is off as codes are case-sensitive on some platforms. Don\'t refresh the page while entering codes. Wait for network delays with SMS codes rather than requesting multiple codes. Double-check you\'re using codes from the correct account if you have multiple.'
        }
      ]
    },
    {
      id: 'account-security-prevention',
      title: 'Account Security & Threat Prevention',
      icon: Lock,
      description: 'Identifying and avoiding security risks.',
      articles: [
        {
          title: 'How to recognize phishing emails and fake websites',
          content: 'Always check the sender\'s email address carefully - legitimate platforms use official domains, not free email services. Look for spelling errors, urgent language, or requests for immediate action. Verify URLs by typing them directly rather than clicking links. Legitimate sites use HTTPS with valid certificates. Be suspicious of emails asking for passwords, 2FA codes, or personal information - real platforms never request this via email.'
        },
        {
          title: 'Signs your account may be compromised',
          content: 'Watch for unexpected login notifications, unrecognized devices in your account, unauthorized transactions or trades, changes to your personal information, new email addresses or phone numbers added, suspicious activity in your transaction history, or 2FA codes being requested when you\'re not logging in. If you notice any of these signs, secure your account immediately and contact support.'
        },
        {
          title: 'How to verify official communications from the platform',
          content: 'Log into your account directly through the official website to check for messages rather than relying on emails. Official communications will appear in your account\'s message center or notifications. Verify sender domains match the platform\'s official domain exactly. Contact customer support through official channels if unsure about any communication. Never provide personal information through email, even if it appears legitimate.'
        },
        {
          title: 'Avoiding social engineering scams',
          content: 'Be skeptical of anyone contacting you claiming to be from customer support, especially through social media or unsolicited calls. Real support agents will never ask for your password, 2FA codes, or private keys. Don\'t trust urgent messages claiming your account will be closed or frozen unless you act immediately. Always verify identity through official support channels before providing any information.'
        },
        {
          title: 'How to report suspicious activity',
          content: 'Report suspicious emails, fake websites, or social media accounts impersonating the platform through official support channels. Screenshot evidence before reporting. Forward phishing emails to the platform\'s abuse email address if available. Report suspicious login attempts or account activity immediately through your account\'s security settings. Help protect the community by reporting scams you encounter.'
        },
        {
          title: 'Using browser security extensions',
          content: 'Install reputable ad blockers and anti-phishing extensions like uBlock Origin or Malwarebytes Browser Guard. Use password managers with phishing protection like 1Password or Bitwarden. Enable browser security features like Safe Browsing in Chrome or Enhanced Tracking Protection in Firefox. Keep your browser updated and avoid installing suspicious extensions that request excessive permissions.'
        }
      ]
    },
    {
      id: 'account-recovery',
      title: 'Recovering from a Hacked or Compromised Account',
      icon: Key,
      description: 'Steps to take if you lose control of your account.',
      articles: [
        {
          title: 'Immediate actions to secure your account',
          content: 'Change your password immediately from a clean, secure device. Enable or reset 2FA if possible. Check and secure your email account used for the platform. Log out of all devices and sessions in your account settings. Review recent account activity for unauthorized actions. Contact customer support immediately to report the compromise and freeze account activity if necessary.'
        },
        {
          title: 'Changing your password and resetting 2FA',
          content: 'Create a strong, unique password that you\'ve never used before. Use a combination of letters, numbers, and symbols with at least 12 characters. Reset your 2FA by removing old devices and setting up new authenticator apps. Generate new backup codes and store them securely. If you can\'t access your account to make changes, contact support with identity verification documents.'
        },
        {
          title: 'Checking recent login history',
          content: 'Review your account\'s login history or activity log for unfamiliar IP addresses, locations, or device types. Note any logins during times you weren\'t using the account. Check for logins from countries you haven\'t visited. Look for patterns that might indicate automated attacks. Screenshot this information for your records and to share with support if needed.'
        },
        {
          title: 'Removing unauthorized devices',
          content: 'Access your account\'s security settings and review all connected devices and active sessions. Remove any devices you don\'t recognize or no longer use. Force logout from all devices and sessions, then log back in from your secure device. Change your password after removing unauthorized access to prevent them from regaining entry. Monitor your account closely after removing unauthorized devices.'
        },
        {
          title: 'Contacting support for account recovery',
          content: 'Use official support channels only - never respond to unsolicited help offers. Provide identity verification documents like government ID, proof of address, and account creation details. Be prepared for a thorough verification process that may take several days. Keep records of all communications with support. Be patient but persistent in following up on your case.'
        },
        {
          title: 'Preventing future account takeovers',
          content: 'Use a unique, strong password and enable 2FA with an authenticator app. Regularly update your recovery information and backup codes. Monitor your account activity regularly and set up security alerts. Keep your devices and browsers updated with latest security patches. Use a dedicated email address for your crypto accounts with strong security. Never share account details or access with others.'
        }
      ]
    },
    {
      id: 'security-best-practices',
      title: 'Security Best Practices',
      icon: Settings,
      description: 'Everyday tips to keep your account safe.',
      articles: [
        {
          title: 'Using strong and unique passwords',
          content: 'Create passwords with at least 12 characters combining uppercase, lowercase, numbers, and symbols. Never reuse passwords across different platforms. Use a password manager like 1Password, Bitwarden, or Dashlane to generate and store unique passwords. Avoid personal information like birthdays or names. Consider using passphrases with random words for easier memorization while maintaining security.'
        },
        {
          title: 'Avoiding public Wi-Fi for sensitive actions',
          content: 'Never access your crypto accounts on public Wi-Fi networks in cafes, airports, or hotels. These networks are often unsecured and monitored. If you must use public Wi-Fi, use a reputable VPN service first. Consider using your phone\'s cellular data instead. For maximum security, conduct sensitive transactions only from your home network or trusted private connections.'
        },
        {
          title: 'Enabling withdrawal whitelist addresses',
          content: 'Set up address whitelisting in your account security settings to restrict withdrawals to only pre-approved wallet addresses. This prevents unauthorized withdrawals even if someone gains account access. Add a waiting period for new addresses to be activated. Regularly review your whitelist and remove old or unused addresses. This feature provides an additional layer of protection against theft.'
        },
        {
          title: 'Regularly updating your recovery information',
          content: 'Keep your email address, phone number, and backup contacts current in your account settings. Update this information before changing phones or email providers. Generate new 2FA backup codes periodically and store them securely. Review and update your emergency contacts or trusted devices. Set calendar reminders to review and update your security information quarterly.'
        },
        {
          title: 'Keeping your devices secure from malware',
          content: 'Install reputable antivirus software and keep it updated. Regularly scan your devices for malware. Avoid downloading software from untrusted sources or clicking suspicious links. Keep your operating system and browsers updated with latest security patches. Use device encryption and screen locks. Consider using a dedicated device or browser profile exclusively for crypto activities.'
        },
        {
          title: 'Reviewing account security settings monthly',
          content: 'Schedule monthly security reviews of your account settings. Check active devices and sessions, removing any you don\'t recognize. Review recent login history and transaction activity. Update passwords and 2FA codes if needed. Verify your contact information is current. Check security alert preferences and ensure they\'re enabled. Document any suspicious activity and report it to support.'
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-12 lg:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-3xl lg:text-5xl font-bold text-black mb-4">
            Security & 2FA Help Center
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Keep your account secure with comprehensive guides for two-factor authentication, threat prevention, and security best practices
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
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Security Categories</h3>
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
          <h3 className="text-2xl font-bold text-black mb-4">Still Need Help with Account Security?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you couldn't resolve your security or 2FA issue, our security specialists are available to help you secure your account and restore access safely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-3xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
            >
              Contact Security Support
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-3xl font-semibold text-lg border-2 border-black hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              Emergency Account Help
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}