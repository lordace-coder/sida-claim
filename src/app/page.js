"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';



export default function SidraClaimPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    <div className="min-h-screen overflow-hidden relative bg-[#0d0d0d]">
      {/* Animated Background */}
      <div 
        className="fixed inset-0 opacity-60"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(79, 70, 229, 0.2) 0%, 
            rgba(99, 102, 241, 0.15) 20%, 
            rgba(67, 56, 202, 0.1) 40%, 
            rgba(17, 24, 39, 1) 60%)`,
          filter: 'blur(60px)',
          transform: `scale(1.2)`,
        }}
      />
      
      {/* Main Content */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 rounded-full bg-indigo-600/10 backdrop-blur-sm"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 left-20 w-16 h-16 rounded-full bg-purple-500/10 backdrop-blur-sm"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
        />

        {/* Logo/Icon */}
        <motion.div
          className="mb-8 relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-2xl">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-xl animate-pulse" />
        </motion.div>

        {/* Main Heading */}
        <motion.div className="text-center" variants={itemVariants}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Claim Your
            </span>
            <br />
            <span className="text-white">Sidra Tokens</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join the Sidra ecosystem and unlock the future of decentralized finance. 
            Claim your tokens and start your journey to financial freedom.
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
              description: "Instant token claiming with next-generation blockchain technology"
            },
            {
              icon: "🔒",
              title: "Secure & Safe",
              description: "Military-grade security protecting your digital assets"
            },
            {
              icon: "💎",
              title: "High Value",
              description: "Premium tokens with real utility and growth potential"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <motion.button
            className="relative group px-12 py-6 text-xl font-bold text-white rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
            style={{
              background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
              boxShadow: '0 20px 40px rgba(79, 70, 229, 0.3)',
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 25px 50px rgba(79, 70, 229, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
      
          >
            <Link  href="/claim" className="relative z-10 flex items-center gap-3">
              Claim Tokens
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl" />
          </motion.button>
          
          <motion.p
            className="text-gray-400 text-sm mt-6"
            variants={itemVariants}
          >
            No fees • Instant claim • Limited time offer
          </motion.p>
        </motion.div>

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
    </div>
  );
}
