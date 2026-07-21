"use client";

import { motion } from "framer-motion";
import { IconPhone } from "@tabler/icons-react";
import { SITE_CONFIG } from "@/config/constants";

export function FloatingCall() {
  return (
    <motion.a
      href={`tel:${SITE_CONFIG.phone}`}
      aria-label={`Call ${SITE_CONFIG.name}`}
      className="fixed bottom-6 right-6 z-toast group"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
    >
      {/* Pulsing rings */}
      <span className="absolute inset-0 rounded-full bg-secondary animate-pulse-ring" />
      <span
        className="absolute inset-0 rounded-full bg-secondary animate-pulse-ring"
        style={{ animationDelay: "0.6s" }}
      />

      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-white shadow-gold transition-transform duration-300 group-hover:scale-110">
        <IconPhone size={24} />
      </span>

      {/* Tooltip */}
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap rounded-full bg-background-dark text-white text-xs font-body font-medium px-3 py-1.5 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        {SITE_CONFIG.phone}
      </span>
    </motion.a>
  );
}
