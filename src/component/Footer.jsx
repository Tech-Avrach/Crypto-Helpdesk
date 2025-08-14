import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              <li><Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/help-center/login-issues" className="text-gray-300 hover:text-yellow-400 transition-colors">Help Categories</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</Link></li>
              <li><Link to="/coinbase" className="text-gray-300 hover:text-yellow-400 transition-colors">Supported Platforms</Link></li>
              <li><Link to="/help-center/security-2fa" className="text-gray-300 hover:text-yellow-400 transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* BLOG */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">BLOG</h3>
            <ul className="space-y-4">
              <li><Link to="/blog/blog1" className="text-gray-300 hover:text-yellow-400 transition-colors">Crypto Wallets</Link></li>
              <li><Link to="/blog/blog2" className="text-gray-300 hover:text-yellow-400 transition-colors">Trading Shortcuts</Link></li>
              <li><Link to="/blog/blog3" className="text-gray-300 hover:text-yellow-400 transition-colors">Best Crypto Apps</Link></li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">RESOURCES</h3>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-300 hover:text-yellow-400 transition-colors">Terms & Conditions</Link></li>
              <li>
                <a href="https://example.com/security-center" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2">
                  Security Center
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">SUPPORT</h3>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">General Support</Link></li>
              <li>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Discord Community
                </a>
              </li>
              <li>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Telegram Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm">
            © All Rights Reserved
          </div>
          <div className="mt-4 md:mt-0 flex gap-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
