import { 
    LogIn, 
    CreditCard, 
    UserCheck, 
    ArrowUpCircle, 
    Shield 
  } from "lucide-react";
  import { motion } from "framer-motion";
  
  export default function TopIssueCategories() {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-24">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Top Issue Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get instant help with the most common crypto platform issues. Our expert support team is ready to assist you.
          </p>
        </div>
  
        {/* Equal-height responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch [grid-auto-rows:1fr]">
          
          {/* Large card */}
          <motion.div 
            className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-shadow duration-300 flex flex-col lg:flex-row h-full max-h-96"
            whileHover={{ 
              boxShadow: "0 0 0 4px #EAB308, 0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Left side - Content */}
            <div className="flex-1 flex flex-col justify-center pr-0 lg:pr-8 mb-6 lg:mb-0">
              <LogIn className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Login Problems
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Can't access your account? We'll help you get back in securely and quickly.
              </p>
            </div>
            
            {/* Right side - Image */}
            <div className="flex-1 flex items-center">
              <img 
                src="https://cdn.prod.website-files.com/6217a376b29e9be35c01ccfc/623c90e44e21cf3db90ad9c3_tab-image-1-web3-webflow-ecommerce-template.png"
                alt="Crypto dashboard interface"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </motion.div>
  
          {/* Other cards */}
          {[
            { icon: CreditCard, title: "Payment Failures", text: "Resolve payment issues and transaction errors with expert guidance." },
            { icon: UserCheck, title: "KYC Verification", text: "Complete your identity verification process smoothly." },
            { icon: ArrowUpCircle, title: "Withdrawal Issues", text: "Having trouble withdrawing funds? Get immediate assistance." },
            { icon: Shield, title: "2FA / Security", text: "Secure your account with two-factor authentication support." },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-shadow duration-300 flex flex-col justify-center h-full"
              whileHover={{ 
                boxShadow: "0 0 0 4px #EAB308, 0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <item.icon className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
  