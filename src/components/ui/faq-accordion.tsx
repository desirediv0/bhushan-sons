"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/types";

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn("flex flex-col divide-y divide-border", className)}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className="group">
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between py-7 text-left gap-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm"
              aria-expanded={isOpen}
              id={`faq-button-${item.id}`}
              aria-controls={`faq-panel-${item.id}`}
            >
              <span className="font-heading font-semibold text-primary text-lg leading-snug group-hover:text-secondary transition-colors duration-300">
                <span className="font-body text-sm text-secondary mr-4 font-normal" style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.question}
              </span>
              <span className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-secondary transition-all duration-300 group-hover:border-secondary group-hover:bg-secondary group-hover:text-white">
                {isOpen ? <IconMinus size={16} /> : <IconPlus size={16} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-button-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-7 pl-10 pr-12">
                    <p className="font-body text-text-muted leading-relaxed text-base">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
