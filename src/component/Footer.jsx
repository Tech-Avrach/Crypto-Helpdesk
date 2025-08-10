import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-800 to-black text-white rounded-3xl mx-4 mb-4">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* MENU */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">MENU</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Help Categories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">About Helpdesk</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Supported Platforms</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Security</a></li>
            </ul>
          </div>

          {/* DOWNLOAD */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">DOWNLOAD</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2">
                  iOS App
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2">
                  Android App
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2">
                  Chrome Extension
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">RESOURCES</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2">
                  Help Guides
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2">
                  Security Center
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2">
                  Crypto Foundation
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">SUPPORT</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">General Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Discord Community</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Telegram Chat</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm">
            © All Rights Reserved
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
              Licenses
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;