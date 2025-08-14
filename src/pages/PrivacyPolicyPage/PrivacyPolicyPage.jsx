import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  Users, 
  FileText, 
  Globe, 
  Mail, 
  Phone,
  Cookie,
  Database,
  AlertTriangle,
  CheckCircle,
  Calendar,
  ArrowUp,
  BookOpen,
  Scale,
  UserCheck,
  Settings,
  Download,
  Trash2
} from 'lucide-react';

const PrivacyPolicyPage = () => {
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
    { id: 'overview', title: 'Overview', icon: Shield },
    { id: 'information-collect', title: 'Information We Collect', icon: Database },
    { id: 'how-we-use', title: 'How We Use Information', icon: Settings },
    { id: 'data-sharing', title: 'Data Sharing', icon: Users },
    { id: 'data-protection', title: 'Data Protection', icon: Lock },
    { id: 'your-rights', title: 'Your Rights', icon: UserCheck },
    { id: 'cookies', title: 'Cookies & Tracking', icon: Cookie },
    { id: 'international', title: 'International Transfers', icon: Globe },
    { id: 'retention', title: 'Data Retention', icon: Calendar },
    { id: 'security', title: 'Security Measures', icon: Shield },
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
              <Shield className="w-5 h-5" />
              <span className="font-medium">Your Privacy Matters</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-black">Privacy Policy &</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                Data Protection
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              We are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Last Updated: August 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>GDPR Compliant</span>
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
                      <Shield className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-black">Privacy Policy Overview</h2>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    At CryptoPlatform, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, process, and disclose your information when you use our cryptocurrency trading platform and related services.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <Lock className="w-6 h-6 text-yellow-600" />
                        <h4 className="font-semibold text-black">Data Protection</h4>
                      </div>
                      <p className="text-gray-600 text-sm">
                        We implement industry-leading security measures to protect your personal and financial information.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <Scale className="w-6 h-6 text-yellow-600" />
                        <h4 className="font-semibold text-black">Legal Compliance</h4>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Our practices comply with GDPR, CCPA, and other applicable data protection regulations.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Information We Collect */}
              <section id="information-collect" className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">Information We Collect</h2>
                </div>

                <div className="space-y-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                    <h3 className="text-xl font-semibold text-black mb-4 flex items-center gap-2">
                      <UserCheck className="w-5 h-5 text-yellow-600" />
                      Personal Information
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        <span>Full name, email address, phone number</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        <span>Date of birth and government-issued identification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        <span>Residential address and billing information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        <span>Employment information and source of funds</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                    <h3 className="text-xl font-semibold text-black mb-4 flex items-center gap-2">
                      <Settings className="w-5 h-5 text-yellow-600" />
                      Technical Information
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        <span>IP address, device information, and browser type</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        <span>Transaction history and trading patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        <span>Log files, cookies, and usage analytics</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section id="how-we-use" className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">How We Use Your Information</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-black mb-4">Primary Uses</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Verify your identity and comply with KYC/AML regulations</li>
                      <li>• Process transactions and maintain account security</li>
                      <li>• Provide customer support and respond to inquiries</li>
                      <li>• Detect and prevent fraud or suspicious activities</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-black mb-4">Secondary Uses</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Improve our services and user experience</li>
                      <li>• Send important updates and notifications</li>
                      <li>• Conduct market research and analytics</li>
                      <li>• Comply with legal and regulatory requirements</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Sharing */}
              <section id="data-sharing" className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">Data Sharing & Disclosure</h2>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-300 rounded-xl p-8 mb-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Important Notice</h3>
                      <p className="text-gray-700">
                        We do not sell, rent, or trade your personal information to third parties for their marketing purposes. We only share your data in specific circumstances outlined below.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-black mb-3">When We Share Information</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• With regulatory authorities and law enforcement when required by law</li>
                      <li>• With our trusted service providers who assist in operating our platform</li>
                      <li>• In case of merger, acquisition, or sale of our business assets</li>
                      <li>• To protect our rights and prevent fraud or illegal activities</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Protection */}
              <section id="data-protection" className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <Lock className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">Data Protection Measures</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lock className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Encryption</h4>
                    <p className="text-gray-600 text-sm">256-bit SSL encryption for all data transmission and storage</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Access Control</h4>
                    <p className="text-gray-600 text-sm">Strict access controls and employee authentication protocols</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Monitoring</h4>
                    <p className="text-gray-600 text-sm">24/7 security monitoring and threat detection systems</p>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section id="your-rights" className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">Your Rights & Choices</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-black mb-4 flex items-center gap-2">
                      <Download className="w-5 h-5 text-yellow-600" />
                      Access & Portability
                    </h4>
                    <p className="text-gray-700 text-sm mb-3">
                      You have the right to request a copy of your personal data and transfer it to another service provider.
                    </p>
                    <button className="text-yellow-700 text-sm font-medium hover:underline">
                      Request Data Export →
                    </button>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-black mb-4 flex items-center gap-2">
                      <Settings className="w-5 h-5 text-yellow-600" />
                      Correction & Update
                    </h4>
                    <p className="text-gray-700 text-sm mb-3">
                      You can update or correct your personal information at any time through your account settings.
                    </p>
                    <button className="text-yellow-700 text-sm font-medium hover:underline">
                      Update Information →
                    </button>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-black mb-4 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-yellow-600" />
                      Transparency
                    </h4>
                    <p className="text-gray-700 text-sm mb-3">
                      You have the right to know how your data is being processed and for what purposes.
                    </p>
                    <button className="text-yellow-700 text-sm font-medium hover:underline">
                      Data Usage Report →
                    </button>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-black mb-4 flex items-center gap-2">
                      <Trash2 className="w-5 h-5 text-red-600" />
                      Deletion
                    </h4>
                    <p className="text-gray-700 text-sm mb-3">
                      You may request deletion of your personal data, subject to legal and regulatory requirements.
                    </p>
                    <button className="text-red-600 text-sm font-medium hover:underline">
                      Request Deletion →
                    </button>
                  </div>
                </div>
              </section>

              {/* Cookies & Tracking */}
              <section id="cookies" className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">Cookies & Tracking Technologies</h2>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                  <p className="text-gray-700 mb-6">
                    We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and provide personalized content.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-yellow-50 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-black mb-2">Essential Cookies</h4>
                      <p className="text-gray-600 text-sm">Required for basic site functionality and security</p>
                    </div>
                    
                    <div className="p-4 bg-yellow-50 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-black mb-2">Analytics Cookies</h4>
                      <p className="text-gray-600 text-sm">Help us understand how you use our platform</p>
                    </div>
                    
                    <div className="p-4 bg-yellow-50 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-black mb-2">Preference Cookies</h4>
                      <p className="text-gray-600 text-sm">Remember your settings and preferences</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section id="contact" className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">Contact Our Privacy Team</h2>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-300 rounded-xl p-8">
                  <p className="text-gray-700 mb-6">
                    If you have any questions about this privacy policy or our data practices, please don't hesitate to contact us.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black mb-1">Email</h4>
                        <p className="text-yellow-700">privacy@cryptoplatform.com</p>
                        <p className="text-gray-600 text-sm">Response within 48 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black mb-1">Phone</h4>
                        <p className="text-yellow-700">+1-800-PRIVACY-1</p>
                        <p className="text-gray-600 text-sm">Monday - Friday, 9 AM - 6 PM EST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;