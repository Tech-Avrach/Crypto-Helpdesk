import React from 'react';
import { Shield } from 'lucide-react';
// import BackgroundImg from '@/assets/home/Trust.svg?url';


const TrustReminder = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div 
        className="relative rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat min-h-[200px] flex flex-col justify-center items-center p-8"
        style={{
            backgroundImage: `url(Trust.svg)`
          }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Yellow Icon */}
          <div className="mb-4">
            <Shield className="w-12 h-12 text-yellow-500 mx-auto" />
          </div>
          
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold text-yellow-500">
            We'll never ask for your passwords or 2FA codes. Stay safe from scams.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TrustReminder;