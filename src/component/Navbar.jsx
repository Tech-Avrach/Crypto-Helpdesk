import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const toggleMobileDropdown = (dropdownName) => {
    setMobileActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  // Scroll listener for shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on overlay
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const platforms = [
    { name: "Coinbase", path: "/coinbase" },
    { name: "Paypal", path: "/paypal" },
    { name: "Robinhood", path: "/robinhood" },
    { name: "Bitpay", path: "/bitpay" },
    { name: "Charles Schwab", path: "/charlesschwab" },
    { name: "Cash App", path: "/cashapp" },
  ];

  const helpCategories = [
    "Login Issues",
    "Payment Issues", 
    "KYC Problems",
    "Withdrawal Issues",
    "Security & 2FA",
  ];

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setMobileActiveDropdown(null);
  };

  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-md py-2"
            : "bg-white/90 backdrop-blur-sm border-b border-gray-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-gray-900">
                Crypto Helpdesk
              </Link>
            </div>

            {/* Center Navigation - Desktop */}
            <div className="hidden lg:flex items-center space-x-10">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 font-normal text-base transition-colors"
              >
                Home
              </Link>

              {/* Help Categories Dropdown - Desktop */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("help")}
                  className="flex items-center text-gray-600 hover:text-gray-900 font-normal text-base transition-colors"
                >
                  Help Categories <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === "help" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                    >
                      {helpCategories.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Platforms Dropdown - Desktop */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("platforms")}
                  className="flex items-center text-gray-600 hover:text-gray-900 font-normal text-base transition-colors"
                >
                  Platforms <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === "platforms" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                    >
                      {platforms.map((platform) => (
                        <Link
                          key={platform.name}
                          to={platform.path}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {platform.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-normal text-base transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-normal text-base transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden lg:block px-6 py-2.5 bg-gray-900 text-white font-medium rounded-full text-sm hover:bg-gray-800 transition-colors"
              >
                Get started
              </motion.button>
              <Search className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors" />

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="space-y-6">
                <Link 
                  to="/" 
                  className="block text-gray-600 hover:text-gray-900 font-medium text-lg transition-colors" 
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>

                {/* Help Categories - Mobile */}
                <div>
                  <button
                    onClick={() => toggleMobileDropdown("help")}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900 font-medium text-lg transition-colors"
                  >
                    Help Categories 
                    <motion.div
                      animate={{ rotate: mobileActiveDropdown === "help" ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {mobileActiveDropdown === "help" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 ml-4 space-y-3"
                      >
                        {helpCategories.map((item) => (
                          <a
                            key={item}
                            href="#"
                            className="block text-gray-500 hover:text-gray-700 transition-colors"
                            onClick={closeMobileMenu}
                          >
                            {item}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Platforms - Mobile */}
                <div>
                  <button
                    onClick={() => toggleMobileDropdown("platforms")}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-gray-900 font-medium text-lg transition-colors"
                  >
                    Platforms 
                    <motion.div
                      animate={{ rotate: mobileActiveDropdown === "platforms" ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {mobileActiveDropdown === "platforms" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 ml-4 space-y-3"
                      >
                        {platforms.map((platform) => (
                          <Link
                            key={platform.name}
                            to={platform.path}
                            className="block text-gray-500 hover:text-gray-700 transition-colors"
                            onClick={closeMobileMenu}
                          >
                            {platform.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a 
                  href="#" 
                  className="block text-gray-600 hover:text-gray-900 font-medium text-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  Blog
                </a>
                <a 
                  href="#" 
                  className="block text-gray-600 hover:text-gray-900 font-medium text-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  Contact
                </a>

                {/* Mobile CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-8 px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Get started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;