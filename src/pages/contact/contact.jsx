import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Shield, 
  FileText, 
  Upload, 
  Send,
  MapPin,
  Headphones,
  CheckCircle,
  Users,
  Lock,
  Zap,
  Star,
  Award,
  Clock
} from 'lucide-react';

const CryptoContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    file: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    setFormData(prev => ({
      ...prev,
      file: e.target.files[0]
    }));
  };

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ fullName: '', email: '', subject: '', message: '', file: null });
    
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const issueTypes = [
    'Account Access & Login',
    'Payment & Transactions', 
    'Identity Verification',
    'Withdrawal Issues',
    'Security & Authentication',
    'Trading Support',
    'Account Recovery',
    'Technical Issues',
    'Other Inquiries'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-8 right-8 z-50 bg-gradient-to-r from-yellow-300 to-yellow-400 text-gray-800 px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-yellow-500">
          <CheckCircle className="w-6 h-6" />
          <span className="font-semibold">Message sent successfully! We'll respond within 2 hours.</span>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/30 to-pink-200/20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-6 py-2 rounded-full border border-yellow-300 mb-8">
              <Award className="w-5 h-5" />
              <span className="font-medium">Premium Support Experience</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black mb-8">
              <span className="text-gray-800">Expert Support,</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                Lightning Fast
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Get instant help from our world-class support team. We're here 24/7 to resolve 
              your cryptocurrency needs with unmatched expertise.
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2min</div>
                <div className="text-gray-500">Average Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-500">Issue Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-500">Always Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Options */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white border border-gray-200 rounded-3xl p-8 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Instant Call</h3>
                <p className="text-gray-600 mb-6">Connect with our experts immediately</p>
                <div className="text-yellow-600 font-bold text-lg">+1-800-CRYPTO-1</div>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 text-sm">Available Now</span>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white border border-gray-200 rounded-3xl p-8 hover:border-blue-400 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                   onClick={() => alert('Live chat would open here')}>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Live Chat</h3>
                <p className="text-gray-600 mb-6">Real-time messaging support</p>
                <div className="text-blue-600 font-bold text-lg">Start Chat Now</div>
                <div className="flex items-center gap-2 mt-3">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-500 text-sm">12 agents online</span>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-pink-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white border border-gray-200 rounded-3xl p-8 hover:border-pink-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Priority Email</h3>
                <p className="text-gray-600 mb-6">Detailed support via email</p>
                <div className="text-pink-600 font-bold text-lg">support@crypto.com</div>
                <div className="flex items-center gap-2 mt-3">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-500 text-sm">2 hour response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-pink-100/30 rounded-3xl blur-xl"></div>
                <div className="relative bg-white border border-gray-200 rounded-3xl p-12 shadow-xl">
                  
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-pink-500 rounded-2xl flex items-center justify-center">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-gray-800">Get Expert Help</h2>
                      <p className="text-gray-600 mt-1">Fill out the form and we'll respond within minutes</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-500"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Issue Category *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
                      >
                        <option value="">Select your issue category...</option>
                        {issueTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Detailed Description *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-500 resize-none"
                        placeholder="Please provide detailed information about your issue..."
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Attach Supporting Documents
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                          accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                        />
                        <label
                          htmlFor="file-upload"
                          className="flex items-center justify-center w-full p-8 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-500 cursor-pointer transition-all bg-gray-50"
                        >
                          <div className="text-center">
                            <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                            <p className="text-gray-700 font-medium">
                              {formData.file ? formData.file.name : 'Drop files here or click to upload'}
                            </p>
                            <p className="text-gray-500 text-sm mt-2">Screenshots, documents, or error logs (max 25MB)</p>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-pink-50 border border-blue-200 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-blue-700 font-semibold mb-2">Enterprise-Grade Security</h4>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Your data is protected with military-grade encryption. We maintain strict confidentiality 
                            and never share your information with third parties.
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl hover:shadow-blue-500/25 transform hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                          Processing Request...
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6" />
                          Send Priority Request
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Contact Information */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-8">
                  <Headphones className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-800">Direct Access</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <Mail className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 mb-1">Priority Email</p>
                      <p className="text-blue-600 text-sm">priority@support.com</p>
                      <p className="text-gray-500 text-xs mt-1">Guaranteed 2-hour response</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <Phone className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 mb-1">VIP Hotline</p>
                      <p className="text-green-600 text-sm">+1-800-CRYPTO-VIP</p>
                      <p className="text-gray-500 text-xs mt-1">24/7 immediate assistance</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <MessageCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 mb-1">Live Chat</p>
                      <p className="text-yellow-600 text-sm">Always Online</p>
                      <p className="text-gray-500 text-xs mt-1">Average wait: 30 seconds</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-8">
                  <MapPin className="w-8 h-8 text-pink-600" />
                  <h3 className="text-2xl font-bold text-gray-800">Global Presence</h3>
                </div>

                <div className="space-y-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="font-semibold text-gray-800 mb-2">🇺🇸 North America HQ</p>
                    <p className="text-gray-600 text-sm">San Francisco Financial District</p>
                    <p className="text-gray-500 text-xs">24/7 Operations Center</p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="font-semibold text-gray-800 mb-2">🇬🇧 European Hub</p>
                    <p className="text-gray-600 text-sm">London Canary Wharf</p>
                    <p className="text-gray-500 text-xs">EU Regulatory Compliance</p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="font-semibold text-gray-800 mb-2">🇸🇬 Asia Pacific</p>
                    <p className="text-gray-600 text-sm">Singapore Financial Center</p>
                    <p className="text-gray-500 text-xs">Regional Support Hub</p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-300 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-8 h-8 text-yellow-600" />
                  <h3 className="text-xl font-bold text-gray-800">Why Trust Us</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700 text-sm">SOC 2 Type II Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700 text-sm">256-bit Encryption</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700 text-sm">24/7 Security Monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700 text-sm">99.99% Uptime SLA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoContactPage;