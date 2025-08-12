import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { XCircle, Upload, Search, Settings, AlertTriangle, ChevronRight } from 'lucide-react';

export default function KYCHelpCenter() {
  const [activeSection, setActiveSection] = useState('kyc-rejections');
  const sectionRefs = useRef({});
  const [isMobile, setIsMobile] = useState(false);

  const categories = [
    {
      id: 'kyc-rejections',
      title: 'KYC Application Rejections',
      icon: XCircle,
      description: 'When your KYC request gets denied.',
      articles: [
        {
          title: 'Common reasons for KYC rejection',
          content: 'KYC rejections typically occur due to blurry or incomplete documents, expired identification, name mismatches between documents and account details, or using non-government-issued IDs. Document quality issues like poor lighting, glare, or cropped images are also common causes. Always ensure your documents are current, clear, and match your account information exactly.'
        },
        {
          title: 'How to reapply after rejection',
          content: 'After a rejection, review the specific reason provided in your rejection notice. Address the identified issues before resubmitting. You can typically reapply immediately through your account dashboard. Make sure to use high-quality, complete document images and verify all information matches your account details. Some platforms may have a waiting period between applications.'
        },
        {
          title: 'Incorrect document type submitted',
          content: 'Each platform accepts specific document types for identity verification. Government-issued photo IDs like passports, national ID cards, or driver\'s licenses are typically required. Screenshots, photocopies, or non-government documents are usually rejected. Check the accepted document list in your account settings and ensure you\'re submitting the correct type of identification.'
        },
        {
          title: 'Low-quality or blurry images',
          content: 'Poor image quality is a leading cause of KYC rejection. Ensure your photos are taken in good lighting, are in sharp focus, and show all document details clearly. Avoid shadows, glare, or reflections. Use your phone\'s camera rather than scanning, and make sure the entire document fits within the frame without being cut off.'
        },
        {
          title: 'Expired ID documents',
          content: 'Expired identification documents are automatically rejected during KYC verification. Check your document\'s expiration date before submission. If your ID has expired, renew it with the issuing authority before attempting KYC verification. Some platforms accept documents that expire within 30 days, but it\'s best to use current documents.'
        },
        {
          title: 'Name mismatch with account details',
          content: 'Your document name must exactly match your account registration details, including middle names, suffixes, and spelling. Even minor differences like "Mike" vs "Michael" can cause rejection. If there\'s a legitimate name change, you may need to provide supporting documentation like a marriage certificate or court order for name changes.'
        }
      ]
    },
    {
      id: 'document-submission',
      title: 'Document Submission & Upload',
      icon: Upload,
      description: 'When you need to send in your identification.',
      articles: [
        {
          title: 'How to upload ID documents step-by-step',
          content: 'Navigate to your account settings and select "Identity Verification" or "KYC." Choose your document type from the dropdown menu, then click "Upload Document." Take or select a clear photo of the front and back of your ID. Review the image quality before submitting, ensuring all text is readable and corners are visible. Click "Submit" and wait for confirmation.'
        },
        {
          title: 'Accepted document types (passport, ID card, etc.)',
          content: 'Most platforms accept government-issued photo identification including passports, national identity cards, driver\'s licenses, and residence permits. Some may also accept military IDs or voter registration cards. Student IDs, employee badges, or any non-government-issued documents are typically not accepted. Always check your platform\'s specific requirements.'
        },
        {
          title: 'How to take a clear photo of your ID',
          content: 'Place your ID on a flat, dark surface in bright, even lighting. Hold your camera directly above the document, ensuring it\'s parallel to avoid distortion. Fill the frame with your document but don\'t cut off any edges. Avoid using flash which can create glare. Take multiple photos and choose the clearest one with all text easily readable.'
        },
        {
          title: 'Avoiding glare and reflections on images',
          content: 'Position your document away from direct light sources and shiny surfaces. Use natural lighting from a window rather than overhead lights when possible. If using artificial light, ensure it\'s diffused and even. Tilt your phone slightly if you see reflections, and avoid taking photos on glass or glossy surfaces. Remove any plastic protective covers from your ID before photographing.'
        },
        {
          title: 'File size and format requirements',
          content: 'Most platforms accept JPEG, PNG, or PDF files with maximum sizes between 5-10MB per image. Ensure your photos are high resolution (at least 300 DPI) but not so large that they exceed file limits. If your file is too large, use your phone\'s built-in compression or photo editing apps to reduce size while maintaining clarity.'
        },
        {
          title: 'Troubleshooting failed uploads',
          content: 'If uploads fail, check your internet connection stability first. Ensure your file meets size and format requirements. Try clearing your browser cache or using a different browser. Mobile users should try the desktop version or vice versa. If problems persist, try uploading during off-peak hours or contact technical support for assistance.'
        }
      ]
    },
    {
      id: 'kyc-status',
      title: 'Checking & Tracking KYC Status',
      icon: Search,
      description: 'Knowing where your application stands.',
      articles: [
        {
          title: 'How to check your KYC application status',
          content: 'Log into your account and navigate to the "Account Settings" or "Verification" section. Your KYC status will be displayed prominently, showing current progress and next steps. You can also check the notifications or messages section for updates. Some platforms send email or SMS updates about status changes.'
        },
        {
          title: 'Average KYC approval timelines',
          content: 'Standard KYC verification typically takes 1-3 business days for automated processing. Manual reviews can take 5-7 business days. Enhanced due diligence or complex cases may require up to 15 business days. Weekends and holidays don\'t count as business days. High-volume periods like market volatility can extend processing times.'
        },
        {
          title: 'Understanding "Pending Verification" status',
          content: 'Pending Verification means your documents have been received and are queued for review. This is a normal status and doesn\'t indicate any problems. Your application is in line for processing by the verification team. During this time, avoid submitting duplicate applications as this can delay the process further.'
        },
        {
          title: 'Why your KYC is taking longer than expected',
          content: 'Extended processing times can occur due to high application volumes, additional compliance checks for certain jurisdictions, document quality issues requiring manual review, or enhanced due diligence requirements. Complex cases involving name changes, multiple citizenships, or high-risk countries may require additional verification steps.'
        },
        {
          title: 'Status stuck at "Under Review" – what to do',
          content: 'If your status has been "Under Review" for longer than the stated timeframe, first check if you\'ve received any requests for additional information. Review your email and account notifications. If no additional information is requested and the timeline has exceeded expectations, contact customer support with your application reference number.'
        },
        {
          title: 'How to receive status notifications',
          content: 'Enable notifications in your account settings to receive real-time updates via email or SMS. Ensure your contact information is current and check your spam folder regularly. Some platforms offer push notifications through mobile apps. You can usually customize which types of verification updates you want to receive.'
        }
      ]
    },
    {
      id: 'updating-information',
      title: 'Updating & Correcting Personal Information',
      icon: Settings,
      description: 'Fixing mistakes or outdated details.',
      articles: [
        {
          title: 'How to update your name in the account',
          content: 'Navigate to your profile or account settings and look for "Personal Information" or "Edit Profile." Update your name to match your current legal documents exactly. You\'ll likely need to re-verify your identity with updated documents. For legal name changes, provide supporting documentation like marriage certificates or court orders.'
        },
        {
          title: 'Changing your address on file',
          content: 'Update your address in the account settings under "Personal Information." Some platforms require proof of address through utility bills, bank statements, or official mail dated within the last 3 months. If you\'ve moved countries, this may trigger additional compliance requirements and extended verification timelines.'
        },
        {
          title: 'Updating your date of birth',
          content: 'Date of birth changes are rare and heavily scrutinized for fraud prevention. Contact customer support directly as this usually can\'t be changed through self-service. You\'ll need to provide official documentation showing the correct date, such as a birth certificate or passport. This change will likely require complete re-verification.'
        },
        {
          title: 'Fixing incorrect phone number or email',
          content: 'Phone numbers and emails can usually be updated in account settings, but you\'ll need to verify the new contact method. For emails, click the verification link sent to your new address. For phone numbers, enter the SMS verification code. Keep your old contact method active until the new one is confirmed to avoid account access issues.'
        },
        {
          title: 'Providing proof for personal detail changes',
          content: 'Significant changes like name or address updates require supporting documentation. Accepted proof includes marriage certificates for name changes, utility bills or bank statements for address changes, and official government documents for other modifications. Documents should be recent, official, and clearly show your name and the updated information.'
        },
        {
          title: 'When updated details require re-verification',
          content: 'Any changes to core identity information typically trigger re-verification. This includes name changes, address changes to different countries, or corrections to personal details. The re-verification process follows the same steps as initial KYC but may be expedited since you\'re an existing customer. Complete this promptly to avoid account restrictions.'
        }
      ]
    },
    {
      id: 'common-mistakes',
      title: 'Common KYC Mistakes & How to Avoid Them',
      icon: AlertTriangle,
      description: 'Mistakes that slow or block verification.',
      articles: [
        {
          title: 'Submitting cropped or incomplete ID photos',
          content: 'Always capture the entire document including all four corners and edges. Cropped photos are automatically rejected as they may hide security features or important information. Use the camera guidelines provided during upload to ensure proper framing. If your ID doesn\'t fit in one photo, contact support for guidance rather than cropping.'
        },
        {
          title: 'Using scanned copies instead of originals',
          content: 'Most platforms require photos of original documents, not scans or photocopies. Original documents show authentic security features, holograms, and textures that prove legitimacy. If you only have access to copies, contact customer support to discuss alternative verification methods or exceptions for your situation.'
        },
        {
          title: 'Submitting non-government-issued IDs',
          content: 'Only government-issued photo identification is accepted for KYC verification. This includes passports, national ID cards, driver\'s licenses, and some military IDs. Employee badges, student IDs, membership cards, or any privately-issued identification will be rejected. Always verify your document type is on the accepted list before submission.'
        },
        {
          title: 'Inconsistent information across documents',
          content: 'Ensure all information matches exactly across your account profile, submitted documents, and any supporting paperwork. This includes name spelling, address format, and date formatting. Minor inconsistencies like abbreviations or different address formats can cause delays. Double-check everything before submission.'
        },
        {
          title: 'Poor lighting in document photos',
          content: 'Inadequate lighting makes text unreadable and can obscure security features. Use bright, natural light when possible, or well-diffused artificial lighting. Avoid harsh shadows, yellow indoor lighting, or dim conditions. If text appears unclear or shadows obscure parts of the document, retake the photo in better lighting conditions.'
        },
        {
          title: 'Not including all required documents',
          content: 'Carefully read the complete document requirements before starting your submission. Some verifications require both front and back of IDs, proof of address, or additional supporting documents. Missing any required document will result in rejection. Create a checklist of required items and verify you have everything before beginning the upload process.'
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
            KYC Verification Help Center
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Complete your identity verification smoothly with step-by-step guidance and troubleshooting tips
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
                  <h3 className="text-xl font-bold text-gray-800 mb-6">KYC Categories</h3>
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
          <h3 className="text-2xl font-bold text-black mb-4">Still Need Help with KYC Verification?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you couldn't resolve your KYC verification issue, our compliance specialists are available to guide you through the process and help complete your identity verification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-3xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
            >
              Contact KYC Support
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-3xl font-semibold text-lg border-2 border-black hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              Live Verification Help
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}