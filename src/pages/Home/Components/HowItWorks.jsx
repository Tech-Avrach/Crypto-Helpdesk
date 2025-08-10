import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HowItWorks = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrollProgress(latest);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const steps = [
    {
      number: "01",
      title: "Search Your Issue",
      description:
        "Quickly find solutions to your problems using our intelligent search system that understands your needs."
    },
    {
      number: "02",
      title: "Read Step-by-Step Guide",
      description:
        "Follow our detailed, easy-to-understand guides that break down complex solutions into simple steps."
    },
    {
      number: "03",
      title: "Chat With Support if Needed",
      description:
        "Get personalized help from our expert support team whenever you need additional assistance."
    }
  ];

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Send, Receive, Swap.
                <br />
                All in one place.
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                With our platform, you gain access to a range of exclusive
                benefits and features. Follow our{" "}
                <span className="font-bold text-yellow-400">
                  3-step visual guide
                </span>{" "}
                to get started quickly and efficiently.
              </p>
            </div>

            {/* Steps with Progress Line */}
            <div className="relative">
              {/* Progress Line Container */}
              <div className="absolute left-6 top-0 w-0.5 h-full">
                {/* Background Line */}
                <div className="w-full h-full bg-gray-600 rounded-full"></div>
                {/* Animated Progress Line */}
                <motion.div
                  className="absolute top-0 left-0 w-full bg-yellow-400 rounded-full origin-top"
                  style={{ height: progressHeight }}
                />
              </div>

              {/* Steps */}
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex items-start space-x-6"
                  >
                    {/* Step Number Circle */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gray-800 border-2 border-gray-600 rounded-full text-yellow-400 font-bold text-sm">
                      {step.number}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://cdn.prod.website-files.com/663a1a82eec9c72eff92e7bd/663a26df4cb0237203e43324_Feature%20Image%20Simple%2002-p-1080.webp"
                alt="Platform demonstration"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Overlay for better visual hierarchy */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-yellow-400/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
