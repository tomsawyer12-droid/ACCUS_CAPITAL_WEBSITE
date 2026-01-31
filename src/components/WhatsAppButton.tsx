import { motion } from "motion/react";

export function WhatsAppButton() {
  // Replace with actual WhatsApp business number
  const whatsappNumber = "256757136062"; // Format: country code + number (no + or spaces)
  const message = encodeURIComponent(
    "Hello! I would like to inquire about your loan services.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulsing ring effect */}
      <motion.div
        className="absolute inset-0 bg-[#25D366] rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main button */}
      <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-lg flex items-center justify-center transition-colors duration-300">
        {/* WhatsApp Icon SVG */}
        <svg
          viewBox="0 0 32 32"
          className="w-8 h-8 md:w-9 md:h-9"
          fill="white"
        >
          <path d="M16.002 3.2c-7.067 0-12.8 5.733-12.8 12.8 0 2.267 0.6 4.4 1.633 6.267l-1.733 6.333 6.533-1.7c1.8 0.933 3.867 1.5 6.067 1.5 7.067 0 12.8-5.733 12.8-12.8s-5.733-12.8-12.8-12.8zM16.002 26.4c-1.933 0-3.733-0.533-5.267-1.467l-0.367-0.2-3.8 1 1.033-3.667-0.267-0.4c-1.067-1.6-1.667-3.5-1.667-5.533 0-5.733 4.667-10.4 10.4-10.4s10.4 4.667 10.4 10.4-4.667 10.267-10.467 10.267zM21.6 18.533c-0.3-0.133-1.8-0.867-2.067-0.967s-0.5-0.133-0.667 0.133c-0.2 0.267-0.733 0.967-0.9 1.133-0.167 0.2-0.333 0.2-0.633 0.067s-1.267-0.467-2.4-1.467c-0.867-0.8-1.467-1.8-1.633-2.067s0-0.433 0.133-0.567c0.133-0.133 0.3-0.333 0.433-0.5s0.2-0.267 0.3-0.467c0.1-0.167 0.067-0.333 0-0.467s-0.667-1.6-0.933-2.2c-0.233-0.6-0.5-0.5-0.667-0.5h-0.567c-0.2 0-0.5 0.067-0.767 0.333s-1 0.967-1 2.367 1.033 2.767 1.167 2.933c0.133 0.2 2.067 3.133 5 4.4 0.7 0.3 1.233 0.467 1.667 0.6 0.7 0.2 1.333 0.167 1.833 0.1 0.567-0.067 1.8-0.733 2.033-1.433s0.233-1.3 0.167-1.433c-0.067-0.1-0.267-0.2-0.567-0.333z" />
        </svg>
      </div>

      {/* Tooltip */}
      <motion.div
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl"
        initial={{ x: 10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
      >
        <span className="text-sm">
          Chat with us on WhatsApp
        </span>
        {/* Arrow pointing to button */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-900"></div>
        </div>
      </motion.div>
    </motion.a>
  );
}