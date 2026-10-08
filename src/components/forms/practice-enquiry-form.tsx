"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

export function PracticeEnquiryForm({ category }: { category: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (name.length < 2 || !/^[+\d\s()-]+$/.test(phone) || phone.replace(/\D/g, "").length < 10 || phone.replace(/\D/g, "").length > 15 || !message) {
      setError("Please enter your name, a valid phone number and a message.");
      return;
    }

    setError(null);
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message, category }),
      });
      if (!response.ok) throw new Error("Unable to send your enquiry. Please try again or call us.");
      setIsSubmitted(true);
      form.reset();
    } catch {
      setError("Unable to send your enquiry. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass = "w-full rounded border border-border bg-[#F6F5F1] px-4 py-3 font-body text-sm text-text placeholder:text-text-muted/70 outline-none transition-colors focus:border-secondary focus:ring-2 focus:ring-secondary/20";
  const labelClass = "mb-2 block font-body text-xs font-semibold text-primary";

  return (
    <div id="practice-enquiry" className="w-full scroll-mt-28 rounded-lg border-t-4 border-secondary bg-white p-6 shadow-2xl sm:p-8">
      <p className="mb-2 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">Get in touch</p>
      <h2 className="font-heading text-[28px] leading-tight text-primary">Request a Consultation</h2>
      <p className="mb-6 mt-2 font-body text-sm leading-relaxed text-text-muted">Tell us about your matter. Our team will get in touch.</p>
      {isSubmitted ? (
        <div role="status" className="py-10 text-center">
          <h3 className="font-heading text-2xl text-primary">Thank you for reaching out.</h3>
          <p className="mt-3 font-body text-sm text-text-muted">Your enquiry has been received. Our team will contact you shortly.</p>
          <button type="button" onClick={() => setIsSubmitted(false)} className="mt-6 font-body text-sm text-primary underline underline-offset-4">Send another enquiry</button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4" aria-label={`${category} enquiry`} aria-busy={isSubmitting}>
          <div>
            <label htmlFor="enquiry-name" className={labelClass}>Name *</label>
            <input id="enquiry-name" name="name" autoComplete="name" placeholder="Your full name" required minLength={2} maxLength={100} className={inputClass} />
          </div>
          <div>
            <label htmlFor="enquiry-phone" className={labelClass}>Phone Number *</label>
            <input id="enquiry-phone" name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required minLength={10} maxLength={25} className={inputClass} />
          </div>
          <div>
            <label htmlFor="enquiry-message" className={labelClass}>Message *</label>
            <textarea id="enquiry-message" name="message" rows={3} placeholder="Briefly describe your matter..." required maxLength={5000} className={`${inputClass} resize-y`} />
          </div>
          {error && <p role="alert" className="font-body text-sm text-red-700">{error}</p>}
          <Button type="submit" variant="secondary" size="lg" loading={isSubmitting} className="w-full">{isSubmitting ? "Sending..." : "Submit Enquiry"}</Button>
        </form>
      )}
    </div>
  );
}
