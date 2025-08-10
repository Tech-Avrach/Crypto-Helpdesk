import { motion } from "framer-motion";

export default function CryptoHelpStrip() {
  const platforms = [
    "Binance Help",
    "Robinhood Help", 
    "Trust Wallet Help",
    "Coinbase Help",
    "Kraken Help",
    "MetaMask Help",
    "Crypto.com Help",
    "Gemini Help",
    "KuCoin Help",
    "Huobi Help",
    "Bybit Help",
    "OKX Help"
  ];

  return (
    <div className="w-full overflow-hidden bg-black border-t-4 border-b-4 border-yellow-400 py-4 md:h-28 md:flex md:items-center">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -100 * platforms.length]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear"
          }
        }}
      >
        {/* First set of platforms */}
        {platforms.map((platform, index) => (
          <div key={`first-${index}`} className="inline-flex items-center">
            <span className="text-white text-lg md:text-2xl font-medium px-8">
              * {platform}
            </span>
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {platforms.map((platform, index) => (
          <div key={`second-${index}`} className="inline-flex items-center">
            <span className="text-white text-lg md:text-2xl font-medium px-8">
              * {platform}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}