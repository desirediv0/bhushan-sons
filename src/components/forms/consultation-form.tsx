"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconCheck, IconLoader2, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { PRACTICE_AREA_OPTIONS } from "@/config/constants";
import { cn } from "@/lib/utils";

const consultationSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number too long"),
  practiceArea: z.string().min(1, "Please select a practice area"),
  message: z.string().min(20, "Please describe your matter in at least 20 characters"),
  preferredTime: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

interface ConsultationFormProps {
  variant?: "light" | "dark";
  className?: string;
}

export function ConsultationForm({
  variant = "light",
  className,
}: ConsultationFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  const onSubmit = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  const isDark = variant === "dark";

  const inputClass = cn(
    "w-full font-body text-sm px-4 py-3.5 border transition-all duration-200 outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-0",
    isDark
      ? "bg-white/5 border-white/15 text-white placeholder:text-white/40 focus:border-secondary focus:bg-white/10"
      : "bg-white border-border text-primary placeholder:text-text-muted/60 focus:border-secondary hover:border-primary/30"
  );

  const labelClass = cn(
    "block font-body text-xs uppercase tracking-widest mb-2",
    isDark ? "text-white/60" : "text-text-muted"
  );

  const errorClass = "text-xs font-body text-red-500 mt-1";

  if (isSubmitted) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center text-center p-12 border min-h-[400px]",
          isDark ? "border-white/10 bg-white/5" : "border-border bg-[#FAFAFA]",
          className
        )}
      >
        <div className="w-16 h-16 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center mb-6">
          <IconCheck size={28} className="text-secondary" />
        </div>
        <h3 className={cn("font-heading font-semibold text-xl mb-3", isDark ? "text-white" : "text-primary")}>
          Thank You for Reaching Out
        </h3>
        <p className={cn("font-body leading-relaxed mb-8 max-w-sm", isDark ? "text-white/60" : "text-text-muted")}>
          We have received your consultation request. A senior attorney will
          contact you within one business day.
        </p>
        <button
          onClick={() => { setIsSubmitted(false); reset(); }}
          className="font-body text-sm text-secondary hover:text-secondary-hover underline underline-offset-2"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-5", className)}
      noValidate
    >
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your full name"
            className={inputClass}
            {...register("name")}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            className={inputClass}
            {...register("email")}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Phone + Practice Area */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className={inputClass}
            {...register("phone")}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="practiceArea" className={labelClass}>
            Practice Area *
          </label>
          <select
            id="practiceArea"
            className={cn(inputClass, "cursor-pointer")}
            {...register("practiceArea")}
            defaultValue=""
          >
            <option value="" disabled>
              Select a practice area
            </option>
            {PRACTICE_AREA_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.practiceArea && (
            <p className={errorClass}>{errors.practiceArea.message}</p>
          )}
        </div>
      </div>

      {/* Preferred Time */}
      <div>
        <label htmlFor="preferredTime" className={labelClass}>
          Preferred Consultation Time
        </label>
        <select
          id="preferredTime"
          className={cn(inputClass, "cursor-pointer")}
          {...register("preferredTime")}
          defaultValue=""
        >
          <option value="">No preference</option>
          <option value="morning">Morning (9:00 AM – 12:00 PM)</option>
          <option value="afternoon">Afternoon (12:00 PM – 4:00 PM)</option>
          <option value="evening">Evening (4:00 PM – 7:00 PM)</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Describe Your Legal Matter *
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Briefly describe your legal matter, concerns, or questions..."
          className={cn(inputClass, "resize-none")}
          {...register("message")}
        />
        {errors.message && (
          <p className={errorClass}>{errors.message.message}</p>
        )}
      </div>

      {/* Privacy note */}
      <p className={cn("font-body text-xs leading-relaxed", isDark ? "text-white/40" : "text-text-muted/70")}>
        All communications are protected by attorney-client privilege and treated
        with absolute confidentiality.
      </p>

      {/* Submit */}
      <Button
        type="submit"
        variant="secondary"
        size="lg"
        className="w-full group gap-3 font-medium"
        loading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <IconLoader2 size={18} className="animate-spin" />
            Submitting Request...
          </>
        ) : (
          <>
            Request Consultation
            <IconArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </>
        )}
      </Button>
    </form>
  );
}
