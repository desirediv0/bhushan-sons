"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/types";

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn("flex flex-col border-t border-border", className)}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className="border-b border-border">
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-start gap-4 text-left py-[22px] pr-11 relative focus-visible:outline-none"
              aria-expanded={isOpen}
              id={`faq-button-${item.id}`}
              aria-controls={`faq-panel-${item.id}`}
            >
              <span className="font-body text-[11.5px] font-semibold text-secondary pt-1.5 shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-heading font-medium text-text text-[clamp(1.02rem,1.75vw,1.18rem)] leading-[1.35]">
                {item.question}
              </span>
              <motion.span
                className="absolute right-1.5 top-[29px] w-[11px] h-[11px] border-r-[1.5px] border-b-[1.5px] border-secondary"
                animate={{ rotate: isOpen ? 225 : 45 }}
                transition={{ duration: 0.3 }}
              />
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
                  <div className="pb-6 pl-9 pr-10">
                    <p className="font-body text-text-muted leading-relaxed text-[15px]">
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
