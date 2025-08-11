import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  // Scroll listener for shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const platforms = [
    { name: "Coinbase", path: "/coinbase" },
    { name: "Paypal", path: "/paypal" },
    { name: "Robinhood", path: "/robinhood" },
    { name: "Bitpay", path: "/bitpay" },
    { name: "Charles Schwab", path: "/charlesschwab" },
    { name: "Cash App", path: "/cashapp" },
  ];

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

            {/* Center Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 font-normal text-base transition-colors"
              >
                Home
              </Link>

              {/* Help Categories Dropdown */}
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
                      {[
                        "Login Issues",
                        "Payment Issues",
                        "KYC Problems",
                        "Withdrawal Issues",
                        "Security & 2FA",
                      ].map((item) => (
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

              {/* Platforms Dropdown */}
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

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-gray-100 py-4"
              >
                <div className="space-y-3">
                  <Link to="/" className="block text-gray-600 font-normal" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                  <a href="#" className="block text-gray-600 font-normal">
                    Help Categories
                  </a>
                  <a href="#" className="block text-gray-600 font-normal">
                    Platforms
                  </a>
                  <a href="#" className="block text-gray-600 font-normal">
                    Blog
                  </a>
                  <a href="#" className="block text-gray-600 font-normal">
                    Contact
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
