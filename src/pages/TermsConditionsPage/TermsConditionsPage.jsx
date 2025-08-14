import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Scale, 
  AlertTriangle, 
  CreditCard, 
  Users, 
  Globe, 
  Mail, 
  Phone,
  Shield,
  Lock,
  CheckCircle,
  Calendar,
  ArrowUp,
  BookOpen,
  UserCheck,
  Settings,
  XCircle,
  RefreshCw,
  DollarSign,
  Clock,
  Ban,
  Info,
  Gavel
} from 'lucide-react';

const TermsConditionsPage = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    { id: 'overview', title: 'Overview', icon: FileText },
    { id: 'acceptance', title: 'Acceptance of Terms', icon: CheckCircle },
    { id: 'account-terms', title: 'Account Terms', icon: UserCheck },
    { id: 'trading-rules', title: 'Trading Rules', icon: Scale },
    { id: 'prohibited-activities', title: 'Prohibited Activities', icon: Ban },
    { id: 'fees-charges', title: 'Fees & Charges', icon: DollarSign },
    { id: 'disclaimer', title: 'Disclaimer', icon: AlertTriangle },
    { id: 'limitation-liability', title: 'Limitation of Liability', icon: Shield },
    { id: 'refund-policy', title: 'Refund Policy', icon: RefreshCw },
    { id: 'cancellation-policy', title: 'Cancellation Policy', icon: XCircle },
    { id: 'modifications', title: 'Modifications', icon: Settings },
    { id: 'contact', title: 'Contact Us', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-black text-yellow-400 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-800"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-yellow-300/10"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-black px-6 py-2 rounded-full border border-yellow-300 mb-8">
              <Gavel className="w-5 h-5" />
              <span className="font-medium">Legal Terms & Conditions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-black">Terms & Conditions</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                Service Agreement
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Please read these terms carefully before using our cryptocurrency trading platform. 
              By accessing our services, you agree to be bound by these terms and conditions.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Last Updated: August 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Legally Binding</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-yellow-300">
        <div className="container mx-auto px-6">
          <div className="flex items-center overflow-x-auto py-4 space-x-6">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    activeSection === section.id
                      ? 'bg-black text-yellow-400 shadow-md font-semibold'
                      : 'text-gray-700 hover:bg-yellow-50 hover:text-black'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{section.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          
          {/* Table of Contents - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-black mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-yellow-600" />
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSection(section.id);
                          document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all text-sm ${
                          activeSection === section.id
                            ? 'bg-black text-yellow-400 border-l-4 border-yellow-500 font-semibold'
                            : 'text-gray-700 hover:bg-yellow-50 hover:text-black'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {section.title}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              
              {/* Overview Section */}
              <section id="overview" className="mb-16">
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-300 rounded-2xl p-8 mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-black">Terms & Conditions Overview</h2>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    These Terms and Conditions ("Terms") govern your use of CryptoPlatform's cryptocurrency trading services. 
                    These terms constitute a legally binding agreement between you and CryptoPlatform Inc.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center">
                      <Scale className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-black text-sm">Legal Agreement</h4>
                      <p className="text-gray-600 text-xs mt-2">Binding contract between you and CryptoPlatform</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center">
                      <Shield className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-black text-sm">Risk Protection</h4>
                      <p className="text-gray-600 text-xs mt-2">Clear guidelines for safe trading practices</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center">
                      <UserCheck className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-black text-sm">User Responsibilities</h4>
                      <p className="text-gray-600 text-xs mt-2">Your obligations when using our platform</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Acceptance of Terms */}
              <section id="acceptance" className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">Acceptance of Terms</h2>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                  <p className="text-gray-700 mb-6">
                    By creating an account, accessing our website, or using our services, you acknowledge that you have read, 
                    understood, and agree to be bound by these Terms and our Privacy Policy.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black mb-1">Age Requirement</h4>
                        <p className="text-gray-600 text-sm">You must be at least 18 years old to use our services</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black mb-1">Legal Capacity</h4>
                        <p className="text-gray-600 text-sm">You have the legal capacity to enter into binding agreements</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black mb-1">Jurisdiction Compliance</h4>
                        <p className="text-gray-600 text-sm">You are not prohibited by law from using cryptocurrency services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Account Terms */}
              <section id="account-terms" className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">Account Terms</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-black mb-4">Account Registration</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• You must provide accurate, complete, and current information during registration</li>
                      <li>• Each person may maintain only one account on our platform</li>
                      <li>• You are responsible for maintaining the confidentiality of your account credentials</li>
                      <li>• You must complete our KYC (Know Your Customer) verification process</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-black mb-4">Account Security</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Enable two-factor authentication (2FA) for enhanced security</li>
                      <li>• Notify us immediately of any unauthorized access to your account</li>
                      <li>• Use strong, unique passwords and change them regularly</li>
                      <li>• Do not share your account credentials with anyone</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Trading Rules */}
              <section id="trading-rules" className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <Scale className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">Trading Rules & Regulations</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-black mb-4">Trading Guidelines</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• All trades are final once executed</li>
                      <li>• Minimum trade amounts may apply</li>
                      <li>• Market orders execute at current market prices</li>
                      <li>• Limit orders execute only at specified prices or better</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-black mb-4">Market Conditions</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Trading may be suspended during high volatility</li>
                      <li>• Price gaps may occur during market closures</li>
                      <li>• Liquidity providers determine available pricing</li>
                      <li>• System maintenance may temporarily halt trading</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Prohibited Activities */}
              <section id="prohibited-activities" className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <Ban className="w-5 h-5 text-red-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">Prohibited Activities</h2>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-900 mb-2">Important Warning</h3>
                      <p className="text-red-700">
                        Violation of these prohibited activities may result in immediate account suspension, 
                        termination, and potential legal action.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-black mb-3">You are prohibited from:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Money laundering or terrorist financing</li>
                        <li>• Market manipulation or fraudulent trading</li>
                        <li>• Using multiple accounts or false identities</li>
                        <li>• Attempting to hack or breach our systems</li>
                      </ul>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Trading with funds from illegal sources</li>
                        <li>• Violating any applicable laws or regulations</li>
                        <li>• Sharing account access with third parties</li>
                        <li>• Using automated trading bots without approval</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Fees & Charges */}
              <section id="fees-charges" className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">Fees & Charges</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-black mb-3">Trading Fees</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Maker fees: 0.1%</li>
                      <li>• Taker fees: 0.2%</li>
                      <li>• Volume discounts available</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-black mb-3">Withdrawal Fees</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Bitcoin: 0.0005 BTC</li>
                      <li>• Ethereum: 0.005 ETH</li>
                      <li>• Bank transfer: $25</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-black mb-3">Other Fees</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Deposit fees: Free</li>
                      <li>• Inactivity fee: $10/month</li>
                      <li>• Account closure: Free</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 border border-yellow-300 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-black mb-2">Fee Updates</h4>
                      <p className="text-gray-700 text-sm">
                        We reserve the right to modify our fee structure with 30 days' advance notice. 
                        Current fees are always available on our fee schedule page.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Disclaimer */}
              <section id="disclaimer" className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">Disclaimer</h2>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 text-red-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-red-900 mb-4">Risk Warning</h3>
                      <p className="text-red-700 leading-relaxed mb-4">
                        Cryptocurrency trading involves substantial risk of loss and is not suitable for all investors. 
                        The value of cryptocurrencies can be extremely volatile and may result in significant financial losses.
                      </p>
                      <p className="text-red-700 leading-relaxed">
                        Past performance does not guarantee future results. Only invest what you can afford to lose.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-black mb-4">Service Disclaimer</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Our platform is provided "as is" without warranties of any kind</li>
                      <li>• We do not guarantee uninterrupted or error-free service</li>
                      <li>• Market data and pricing information may be delayed or inaccurate</li>
                      <li>• We are not responsible for third-party services or external wallet issues</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-black mb-4">Investment Advice Disclaimer</h3>
                    <p className="text-gray-700 mb-4">
                      CryptoPlatform does not provide investment advice, financial planning, or tax guidance. 
                      All trading decisions are made at your own discretion and risk.
                    </p>
                    <p className="text-gray-700">
                      Consult with qualified financial advisors before making investment decisions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section id="limitation-liability" className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">Limitation of Liability</h2>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                  <p className="text-gray-700 mb-6">
                    To the maximum extent permitted by applicable law, CryptoPlatform shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages resulting from your use of our services.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Maximum Liability</h4>
                      <p className="text-gray-700 text-sm">
                        Our total liability to you for any claims related to our services shall not exceed 
                        the greater of $100 or the fees paid by you to us in the 12 months preceding the claim.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">Excluded Damages</h4>
                      <p className="text-gray-700 text-sm">
                        We are not liable for trading losses, missed opportunities, data loss, business interruption, 
                        or any other damages arising from market volatility or technical issues.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Refund Policy */}
              <section id="refund-policy" className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">Refund Policy</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-yellow-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-black mb-2">General Policy</h3>
                        <p className="text-gray-700 text-sm">
                          Due to the nature of cryptocurrency trading, all executed trades are final and non-refundable. 
                          However, we offer refunds in specific circumstances outlined below.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold text-black mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Refundable Items
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Subscription fees (within 7 days)</li>
                        <li>• Premium service charges (unused portion)</li>
                        <li>• Duplicate charges or billing errors</li>
                        <li>• Unauthorized transactions (verified cases)</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold text-black mb-4 flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-red-600" />
                        Non-Refundable Items
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Executed cryptocurrency trades</li>
                        <li>• Trading fees and commissions</li>
                        <li>• Withdrawal and transfer fees</li>
                        <li>• Market losses or poor investment decisions</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-black mb-4">Refund Process</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-yellow-700 font-bold">1</span>
                        </div>
                        <h5 className="font-medium text-black mb-2">Submit Request</h5>
                        <p className="text-gray-600 text-xs">Contact support with refund request and relevant details</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-yellow-700 font-bold">2</span>
                        </div>
                        <h5 className="font-medium text-black mb-2">Review Process</h5>
                        <p className="text-gray-600 text-xs">We review your request within 5-7 business days</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-yellow-700 font-bold">3</span>
                        </div>
                        <h5 className="font-medium text-black mb-2">Processing</h5>
                        <p className="text-gray-600 text-xs">Approved refunds processed within 10 business days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cancellation Policy */}
              <section id="cancellation-policy" className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">Cancellation Policy</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                    <h3 className="text-lg font-semibold text-black mb-4">Order Cancellations</h3>
                    <p className="text-gray-700 mb-4">
                      You may cancel pending orders (limit orders, stop orders) at any time before they are executed. 
                      Once an order is executed, it cannot be cancelled or reversed.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-black mb-3">Cancellable Orders</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Pending limit orders</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Stop-loss orders (pending)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Scheduled recurring purchases</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Withdrawal requests (processing)</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-black mb-3">Non-Cancellable</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-center gap-2">
                            <XCircle className="w-4 h-4 text-red-600" />
                            <span>Executed market orders</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <XCircle className="w-4 h-4 text-red-600" />
                            <span>Completed transactions</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <XCircle className="w-4 h-4 text-red-600" />
                            <span>Processed withdrawals</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <XCircle className="w-4 h-4 text-red-600" />
                            <span>Confirmed deposits</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-black mb-4">Account Cancellation</h3>
                    <p className="text-gray-700 mb-4">
                      You may close your account at any time by contacting our support team. 
                      Please note the following requirements:
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-yellow-600 mt-1" />
                        <div>
                          <h4 className="font-medium text-black">Processing Time</h4>
                          <p className="text-gray-600 text-sm">Account closure typically takes 5-10 business days</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <DollarSign className="w-5 h-5 text-yellow-600 mt-1" />
                        <div>
                          <h4 className="font-medium text-black">Withdraw Funds</h4>
                          <p className="text-gray-600 text-sm">All cryptocurrency and fiat balances must be withdrawn before closure</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1" />
                        <div>
                          <h4 className="font-medium text-black">Data Retention</h4>
                          <p className="text-gray-600 text-sm">We retain transaction records as required by law (typically 5-7 years)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black mb-2">Subscription Cancellations</h4>
                        <p className="text-gray-700 text-sm">
                          Premium subscriptions can be cancelled at any time. You will continue to have access 
                          to premium features until the end of your current billing period. No pro-rated refunds 
                          are provided unless required by applicable law.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Modifications */}
              <section id="modifications" className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">Modifications to Terms</h2>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                  <p className="text-gray-700 mb-6">
                    We reserve the right to modify these Terms and Conditions at any time. When we make changes, 
                    we will update the "Last Updated" date and notify you through appropriate channels.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-3">Notification Methods</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Email notification to registered address</li>
                        <li>• In-platform notification banner</li>
                        <li>• Website announcement</li>
                        <li>• Mobile app push notification</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-3">Your Options</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Continue using our services (acceptance)</li>
                        <li>• Close your account within 30 days</li>
                        <li>• Contact us with questions or concerns</li>
                        <li>• Withdraw funds before closure deadline</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <p className="text-gray-700 text-sm">
                      <strong>Important:</strong> Continued use of our services after changes take effect 
                      constitutes acceptance of the new terms. If you do not agree with the changes, 
                      you must stop using our services and close your account.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section id="contact" className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">Contact Our Legal Team</h2>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-300 rounded-xl p-8">
                  <p className="text-gray-700 mb-6">
                    If you have questions about these Terms and Conditions, need clarification on any policies, 
                    or wish to discuss legal matters, please contact our legal team.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black mb-1">Legal Department</h4>
                        <p className="text-yellow-700">legal@cryptoplatform.com</p>
                        <p className="text-gray-600 text-sm">Response within 72 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black mb-1">Legal Hotline</h4>
                        <p className="text-yellow-700">+1-800-LEGAL-01</p>
                        <p className="text-gray-600 text-sm">Monday - Friday, 9 AM - 5 PM EST</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-yellow-200">
                    <h4 className="font-semibold text-black mb-3">Mailing Address</h4>
                    <div className="text-gray-700">
                      <p>CryptoPlatform Inc.</p>
                      <p>Legal Department</p>
                      <p>123 Crypto Street, Suite 456</p>
                      <p>Financial District, NY 10001</p>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              These Terms and Conditions are effective as of August 15, 2025 and constitute the entire agreement 
              between you and CryptoPlatform Inc.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <span className="text-gray-500">© 2025 CryptoPlatform Inc.</span>
              <span className="text-gray-300">•</span>
              <button className="text-yellow-700 hover:underline">Privacy Policy</button>
              <span className="text-gray-300">•</span>
              <button className="text-yellow-700 hover:underline">Cookie Policy</button>
              <span className="text-gray-300">•</span>
              <button className="text-yellow-700 hover:underline">Support Center</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsConditionsPage;