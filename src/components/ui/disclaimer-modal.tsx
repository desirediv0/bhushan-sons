"use client";

import { useEffect, useState } from "react";
import { ShieldAlert, CheckCircle2, XCircle, Phone, Mail, MapPin } from "lucide-react";

export function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDeclined, setIsDeclined] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has already accepted terms in this session/browser
    const hasAccepted = localStorage.getItem("bhushan_disclaimer_accepted");
    if (!hasAccepted) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("bhushan_disclaimer_accepted", "true");
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleDecline = () => {
    setIsDeclined(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-6 overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#16332B] text-[#F6F5F1] rounded-lg shadow-2xl border border-[#B08A4A]/40 overflow-hidden my-auto flex flex-col max-h-[90vh]">
        
        {/* Header Strip */}
        <div className="bg-[#0D211B] px-6 py-5 border-b border-[#B08A4A]/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#B08A4A]/10 border border-[#B08A4A]/40 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 text-[#CBA765]" />
            </div>
            <div>
              <span className="overline !text-[#CBA765] block text-[10px]">LEGAL NOTICE & DISCLAIMER</span>
              <h2 className="text-xl md:text-2xl font-heading font-normal text-white tracking-tight">
                Terms of Access
              </h2>
            </div>
          </div>
          <div className="hidden sm:block text-right">
            <span className="text-xs font-serif italic text-[#CBA765]">Bhushan & Sons</span>
            <span className="block text-[11px] text-gray-400">Advocates & Solicitors</span>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm text-[#DCDAD2] leading-relaxed scrollbar-thin scrollbar-thumb-[#B08A4A] scrollbar-track-[#0D211B]">
          
          {isDeclined ? (
            <div className="py-8 text-center space-y-4 animate-fade-in">
              <XCircle className="w-16 h-16 text-red-400 mx-auto" />
              <h3 className="text-xl font-heading text-white">Access Restricted</h3>
              <p className="text-gray-300 max-w-md mx-auto text-sm">
                As per the rules of the Bar Council of India, access to this website requires your explicit acknowledgment of our terms of access. Since you have declined, you cannot proceed to view the website.
              </p>
              <div className="pt-4 flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => setIsDeclined(false)}
                  className="px-5 py-2.5 bg-[#B08A4A] hover:bg-[#9C7940] text-white text-xs font-medium uppercase tracking-widest transition-colors rounded-sm"
                >
                  Reconsider & View Terms
                </button>
                <a
                  href="https://www.google.com"
                  className="px-5 py-2.5 bg-transparent border border-white/20 hover:bg-white/10 text-white text-xs font-medium uppercase tracking-widest transition-colors rounded-sm"
                >
                  Leave Website
                </a>
              </div>
            </div>
          ) : (
            <>
              {/* Disclaimer */}
              <div className="p-4 bg-[#0D211B] border-l-2 border-[#B08A4A] rounded-r-sm">
                <h3 className="text-[#CBA765] font-medium text-base mb-1 font-heading">Disclaimer</h3>
                <p className="text-xs md:text-sm text-gray-200">
                  The rules of the Bar Council of India prohibit advocates from advertising or soliciting work in any form or manner. This website is not intended as, and does not constitute, an advertisement, solicitation, invitation or inducement of any sort.
                </p>
              </div>

              {/* Acknowledgment */}
              <p className="text-xs md:text-sm text-gray-300">
                By accessing this website, you acknowledge and confirm that you are seeking information about <strong className="text-white">Bhushan & Sons, Advocates & Solicitors</strong>, of your own accord, and that no advertisement, personal communication, solicitation, invitation or inducement of any kind has been made by the firm or any of its members to solicit work through this website.
              </p>

              {/* Grid of Terms */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                <div className="space-y-1.5 bg-[#0D211B]/60 p-4 border border-white/5 rounded-sm">
                  <h4 className="text-[#CBA765] text-xs font-semibold uppercase tracking-wider">No Legal Advice</h4>
                  <p className="text-xs text-gray-300">
                    The information on this website is provided for general understanding only. It is not, and must not be treated as, legal advice or an opinion on any specific set of facts. Legal positions change, and the application of the law depends entirely on the circumstances of each matter. You should not act, or refrain from acting, on the basis of anything contained here without obtaining advice on your own facts.
                  </p>
                </div>

                <div className="space-y-1.5 bg-[#0D211B]/60 p-4 border border-white/5 rounded-sm">
                  <h4 className="text-[#CBA765] text-xs font-semibold uppercase tracking-wider">No Advocate–Client Relationship</h4>
                  <p className="text-xs text-gray-300">
                    Transmission, receipt or use of this website, and any correspondence sent through it, does not create an advocate–client relationship between you and the firm or any of its members. That relationship arises only upon a written engagement being confirmed after a consultation. Until then, please do not send confidential or privileged information through this website, by email or by messaging service, as no duty of confidentiality can be assumed.
                  </p>
                </div>

                <div className="space-y-1.5 bg-[#0D211B]/60 p-4 border border-white/5 rounded-sm">
                  <h4 className="text-[#CBA765] text-xs font-semibold uppercase tracking-wider">No Representation as to Outcome</h4>
                  <p className="text-xs text-gray-300">
                    The firm makes no claim of superiority of service and gives no assurance, express or implied, as to the result of any matter. Outcomes in litigation depend on the facts, the evidence, the applicable law and the discretion of the court. Any advocate who guarantees a result should be treated with caution.
                  </p>
                </div>

                <div className="space-y-1.5 bg-[#0D211B]/60 p-4 border border-white/5 rounded-sm">
                  <h4 className="text-[#CBA765] text-xs font-semibold uppercase tracking-wider">Accuracy & Third-Party Content</h4>
                  <p className="text-xs text-gray-300">
                    While reasonable care is taken, the firm does not warrant that the information on this website is complete, current or free from error. Where this website links to external sites, those are provided for convenience only, and the firm is not responsible for their content.
                  </p>
                </div>

                <div className="space-y-1.5 bg-[#0D211B]/60 p-4 border border-white/5 rounded-sm">
                  <h4 className="text-[#CBA765] text-xs font-semibold uppercase tracking-wider">Limitation of Liability</h4>
                  <p className="text-xs text-gray-300">
                    Any person accessing this website does so at their own risk. Bhushan & Sons, its partners, associates and employees accept no liability for any loss or damage, direct or indirect, arising from the use of this website or reliance on any material contained in it.
                  </p>
                </div>

                <div className="space-y-1.5 bg-[#0D211B]/60 p-4 border border-white/5 rounded-sm">
                  <h4 className="text-[#CBA765] text-xs font-semibold uppercase tracking-wider">Intellectual Property & Governing Law</h4>
                  <p className="text-xs text-gray-300">
                    The contents of this website are the property of Bhushan & Sons. Use of this website is governed by the laws of India, subject to exclusive jurisdiction of courts at Gurugram, Haryana.
                  </p>
                </div>
              </div>

              {/* Contact Footer Info */}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#CBA765] shrink-0" />
                  <span>Chamber No. 142, SBS Block, District Court, Gurugram – 122001, Haryana</span>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <a href="tel:+919306185801" className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#CBA765]" />
                    <span>+91-9306185801</span>
                  </a>
                  <a href="mailto:contact@bhushanandsons.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5 text-[#CBA765]" />
                    <span>contact@bhushanandsons.com</span>
                  </a>
                </div>
              </div>
            </>
          )}

        </div>

        {/* Sticky Action Footer */}
        {!isDeclined && (
          <div className="bg-[#0D211B] px-6 py-4 border-t border-[#B08A4A]/30 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <p className="text-[11px] text-gray-400 text-center sm:text-left">
              Please review and accept terms to enter the site.
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleDecline}
                className="w-1/2 sm:w-auto px-5 py-2.5 bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-gray-300 hover:text-white text-xs font-medium uppercase tracking-wider transition-all rounded-sm"
              >
                I do not agree
              </button>
              <button
                type="button"
                onClick={handleAgree}
                className="w-1/2 sm:w-auto px-6 py-2.5 bg-[#B08A4A] hover:bg-[#9C7940] text-white text-xs font-semibold uppercase tracking-wider shadow-lg shadow-[#B08A4A]/20 transition-all rounded-sm flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>I agree — enter the website</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
