"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, SparklesIcon, ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';


const SuccessModal = ({ isOpen, onClose, onSignIn }) => {
  const [step, setStep] = useState(0);
  const router = useRouter();
  useEffect(() => {
    if (isOpen) {
      // Trigger step animation after modal opens
      const timer = setTimeout(() => setStep(1), 300);
      return () => clearTimeout(timer);
    } else {
      setStep(0);
    }
  }, [isOpen]);

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -100,
      transition: {
        duration: 0.2,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  const handleSignIn = () => {
    onClose();
    router.push('/login');
  };

  return (
    <AnimatePresence>
      {isOpen && (        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 min-h-screen bg-black/40"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          
          {/* Backdrop with glass effect */}
          <motion.div
            className="absolute inset-0 w-full h-full bg-black/75 backdrop-blur-2xl"
            style={{
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              background: 'linear-gradient(to bottom right, rgba(10, 10, 10, 0.95), rgba(0, 0, 0, 0.98))'
            }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md mx-auto z-10 px-3 sm:px-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="w-full">
              {/* Background with darker gradient and enhanced glassmorphism */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-950/95 via-slate-900/95 to-gray-950/95 backdrop-blur-2xl border border-gray-800/30 shadow-2xl" />
            
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-purple-600/10 opacity-30 blur-xl animate-pulse" />
            
              {/* Content */}
              <div className="relative p-4 sm:p-8 text-center">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 text-gray-500 hover:text-gray-300 transition-colors duration-200 hover:bg-gray-800/50 rounded-full"
                >
                  <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Success Icon with animation */}
                <motion.div
                  className="relative inline-flex items-center justify-center mb-4 sm:mb-6"
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="absolute inset-0 bg-emerald-600/10 rounded-full blur-xl animate-pulse" />
                  <div className="relative bg-gradient-to-r from-emerald-600 to-green-500 rounded-full p-3 sm:p-4">
                    <CheckCircleIcon className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                  </div>
                  
                  {/* Sparkles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        top: `${20 + Math.sin((i * Math.PI) / 3) * 30}px`,
                        left: `${20 + Math.cos((i * Math.PI) / 3) * 30}px`,
                      }}
                      variants={sparkleVariants}
                      animate="animate"
                      transition={{ delay: i * 0.1 }}
                    >
                      <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.h2
                    className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3"
                    variants={itemVariants}
                  >
                    Step 1 Complete! 🎉
                  </motion.h2>

                  <motion.p
                    className="text-gray-400 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed"
                    variants={itemVariants}
                  >
                    Congratulations! You've successfully completed the first step.
                  </motion.p>

                  <motion.div
                    className="bg-gray-900/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-800/30"
                    variants={itemVariants}
                  >
                    <div className="flex items-center justify-center mb-3 sm:mb-4">
                      <div className="bg-orange-600/10 rounded-full p-2 sm:p-3">
                        <SparklesIcon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                      Next Step: Sign In
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      Sign in to your account to collect your free Sidra tokens and unlock exclusive rewards.
                    </p>
                  </motion.div>

                  {/* Sign In Button */}
                  <motion.button
                    onClick={handleSignIn}
                    className="group relative w-full py-3 sm:py-4 px-4 sm:px-6 text-base sm:text-lg font-semibold text-white rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    style={{
                      background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 50%, #172554 100%)',
                    }}
                    variants={itemVariants}
                    whileHover={{
                      boxShadow: '0 20px 40px rgba(29, 78, 216, 0.2)',
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                      Continue to Sign In
                      <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </span>

                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
                    
                    {/* Button shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-700" />
                    </div>
                  </motion.button>

                  <motion.p
                    className="text-gray-600 text-xs sm:text-sm mt-3 sm:mt-4"
                    variants={itemVariants}
                  >
                    Free tokens • No credit card required • Instant access
                  </motion.p>
                </motion.div>
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-20"
                    initial={{
                      x: Math.random() * 400,
                      y: Math.random() * 600,
                    }}
                    animate={{
                      y: [0, -100],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export  {SuccessModal};