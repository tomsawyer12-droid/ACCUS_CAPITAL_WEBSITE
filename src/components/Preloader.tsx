import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from 'figma:asset/a5ef97919a18c066e5bfd791ba39348318cf79e4.png';

interface PreloaderProps {
  onLoadComplete: () => void;
}

export function Preloader({ onLoadComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadComplete();
          }, 800);
          return 100;
        }
        return prev + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      >
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00A99D] rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.08, 0.05],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00A99D] rounded-full blur-3xl"
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
          {/* Logo with pulse animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Rotating ring around logo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-32 h-32 border-4 border-transparent border-t-[#00A99D] border-r-[#00A99D] rounded-full"></div>
            </motion.div>

            {/* Second rotating ring (counter-clockwise) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-40 h-40 border-2 border-transparent border-b-[#00A99D]/30 border-l-[#00A99D]/30 rounded-full"></div>
            </motion.div>

            {/* Logo with subtle pulse */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative bg-white rounded-2xl p-4 shadow-2xl z-10"
            >
              <img 
                src={logo} 
                alt="Accus Capital" 
                className="h-12 w-auto"
              />
            </motion.div>
          </motion.div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-8"
          >
            {/* Progress bar */}
            <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gradient-to-r from-[#00A99D] to-[#00C9BA] rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Corner accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-0 right-0 w-64 h-64 bg-[#00A99D] rounded-full blur-3xl transform translate-x-32 -translate-y-32"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-0 left-0 w-64 h-64 bg-[#00A99D] rounded-full blur-3xl transform -translate-x-32 translate-y-32"
        />
      </motion.div>
    </AnimatePresence>
  );
}