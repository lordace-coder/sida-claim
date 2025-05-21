"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "./assets/logo.png";

export default function SidraClaimPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash screen after 1 second
    const timer = setTimeout(() => {
      setShowSplash(false);
      setIsLoaded(true);
    }, 1000);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const splashVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      y: [0, -20, 0],
      transition: {
        duration: 1,
        y: {
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        },
      },
    },
    exit: {
      scale: 1.2,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen overflow-hidden relative bg-black">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={splashVariants}
          >
            <div className="relative w-32 h-32">
              <Image
                src={Logo}
                alt="Sidra Logo"
                priority
                fill
                sizes="128px"
                className="object-contain"
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {/* Animated Background */}
            <div
              className="fixed inset-0 opacity-60"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                  rgba(218, 165, 32, 0.2) 0%, 
                  rgba(184, 134, 11, 0.15) 20%, 
                  rgba(139, 69, 19, 0.1) 40%, 
                  rgba(0, 0, 0, 1) 60%)`,
                filter: "blur(60px)",
                transform: `scale(1.2)`,
              }}
            />

            {/* Main Content */}
            <motion.div
              className="relative z-10 min-h-screen flex flex-col items-center justify-start px-6 py-12"
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              {/* Logo/Icon */}
              <motion.div
                className="w-32 h-32 relative mb-16"
                variants={itemVariants}
              >
                <Image
                  src={Logo}
                  alt="Sidra Logo"
                  priority
                  fill
                  sizes="128px"
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#DAA520]/20 to-[#B8860B]/20 rounded-full blur-xl opacity-50" />
              </motion.div>

              {/* Main Heading */}
              <motion.div className="text-center" variants={itemVariants}>
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-[#DAA520] via-[#B8860B] to-[#DAA520] bg-clip-text text-transparent">
                    Claim Your
                  </span>
                  <br />
                  <span className="text-white">Sidra Tokens</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                  Join the Sidra ecosystem and unlock the future of
                  decentralized finance. Claim your tokens and start your
                  journey to financial freedom.
                </p>
              </motion.div>

              {/* Features Section */}
              <motion.div
                className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16"
                variants={itemVariants}
              >
                {[
                  {
                    icon: "🚀",
                    title: "Lightning Fast",
                    description:
                      "Instant token claiming with next-generation blockchain technology",
                  },
                  {
                    icon: "🔒",
                    title: "Secure & Safe",
                    description:
                      "Military-grade security protecting your digital assets",
                  },
                  {
                    icon: "💎",
                    title: "High Value",
                    description:
                      "Premium tokens with real utility and growth potential",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 rounded-2xl bg-[#DAA520]/5 backdrop-blur-md border border-[#DAA520]/10 hover:bg-[#DAA520]/10 transition-all duration-300"
                    whileHover={{ y: -10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <Link
                href="/claim"
                className="relative z-10 flex items-center gap-3"
              >
                <motion.div className="text-center" variants={itemVariants}>
                  {" "}
                  <motion.button
                    className="relative group px-12 py-6 text-xl font-bold text-white rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#8B6B1F]/30 flex align-middle"
                    style={{
                      background:
                        "linear-gradient(135deg, #8B6B1F 0%, #6B4E0F 100%)",
                      boxShadow: "0 20px 40px rgba(139, 107, 31, 0.15)",
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 25px 50px rgba(139, 107, 31, 0.25)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Claim Tokens
                    <svg
                      className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    {/* Button glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8B6B1F]/20 to-[#6B4E0F]/20 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-xl" />
                  </motion.button>
                  <motion.p
                    className="text-gray-400 text-sm mt-6"
                    variants={itemVariants}
                  >
                    No fees • Instant claim • Limited time offer
                  </motion.p>
                </motion.div>
              </Link>
              {/* Particle Animation */}
              <div className="fixed inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{
                      x: Math.random() * window.innerWidth,
                      y: Math.random() * window.innerHeight,
                      opacity: Math.random(),
                    }}
                    animate={{
                      y: [0, -100],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
