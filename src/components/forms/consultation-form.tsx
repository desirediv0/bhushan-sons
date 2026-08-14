"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconCheck, IconLoader2, IconArrowRight, IconAlertCircle } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const consultationSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number too long"),
  email: z.string().email("Invalid email address").or(z.literal("")).optional(),
  category: z.string().min(1, "Please select a case category"),
  issue: z.string().min(1, "Please select your issue"),
  message: z.string().optional(),
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
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  const onSubmit = async (data: ConsultationFormData) => {
    setServerError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit request.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setServerError(err?.message || "Something went wrong. Please try again.");
    }
  };

  const isDark = variant === "dark";

  const inputClass = cn(
    "w-full font-body text-[15px] px-[15px] py-[13px] border rounded transition-all duration-200 outline-none",
    isDark
      ? "bg-white/5 border-white/15 text-white placeholder:text-white/40 focus:border-secondary focus:bg-white/10"
      : "bg-[#F6F5F1] border-border text-text placeholder:text-text-muted/60 focus:border-primary focus:bg-white"
  );

  const labelClass = cn(
    "block font-body text-[11px] font-semibold uppercase tracking-[0.14em] mb-[7px]",
    isDark ? "text-white/60" : "text-text-muted"
  );

  const errorClass = "text-xs font-body text-red-500 mt-1";

  if (isSubmitted) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center text-center p-8 border min-h-[300px]",
          isDark ? "border-white/10 bg-white/5" : "border-border bg-background-alt",
          className
        )}
      >
        <div className="w-16 h-16 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center mb-6">
          <IconCheck size={28} className="text-secondary" />
        </div>
        <h3 className={cn("font-heading font-semibold text-xl mb-3", isDark ? "text-white" : "text-primary")}>
          Request Received Successfully!
        </h3>
        <p className={cn("font-body leading-relaxed mb-6 max-w-sm text-sm", isDark ? "text-white/60" : "text-text-muted")}>
          Thank you for reaching out. An email has been sent to our team at <strong>bhushanandsonsllp@gmail.com</strong>, and a senior advocate will call you back shortly.
        </p>
        <button
          onClick={() => { setIsSubmitted(false); reset(); }}
          className="font-body text-sm text-secondary hover:text-secondary-hover underline underline-offset-2"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-4", className)}
      noValidate
    >
      {serverError && (
        <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-600 rounded flex items-center gap-2 text-xs font-body">
          <IconAlertCircle size={16} className="shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Name */}
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

      {/* Phone */}
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

      {/* Email (Optional) */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address (Optional)
        </label>
        <input
          id="email"
          type="email"
          placeholder="your.name@example.com"
          className={inputClass}
          {...register("email")}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      {/* Select Case Category */}
      <div>
        <label htmlFor="category" className={labelClass}>
          Select Case Category *
        </label>
        <select
          id="category"
          className={cn(inputClass, "cursor-pointer")}
          {...register("category")}
          defaultValue=""
        >
          <option value="" disabled>
            Select Case Category
          </option>
          <option value="Loan Settlement & Debt Resolution">Loan Settlement & Debt Resolution</option>
          <option value="SARFAESI Act & DRT Matters">SARFAESI Act & DRT Matters</option>
          <option value="Bank Account Freeze & Cyber Crime">Bank Account Freeze & Cyber Crime</option>
          <option value="Civil Law">Civil Law</option>
          <option value="Criminal Law">Criminal Law</option>
          <option value="Family Law">Family Law</option>
          <option value="Corporate Law">Corporate Law</option>
          <option value="Real Estate Law">Real Estate Law</option>
          <option value="Immigration Law">Immigration Law</option>
        </select>
        {errors.category && <p className={errorClass}>{errors.category.message}</p>}
      </div>

      {/* Select Your Issue */}
      <div>
        <label htmlFor="issue" className={labelClass}>
          Select Your Issue *
        </label>
        <select
          id="issue"
          className={cn(inputClass, "cursor-pointer")}
          {...register("issue")}
          defaultValue=""
        >
          <option value="" disabled>
            Select Your Issue
          </option>
          <option value="Divorce & Matrimonial">Divorce & Matrimonial</option>
          <option value="Child Custody">Child Custody</option>
          <option value="Property Transactions & Disputes">Property Transactions & Disputes</option>
          <option value="Vigorous Defense / Bail">Vigorous Defense / Bail</option>
          <option value="Business / Corporate Counsel">Business / Corporate Counsel</option>
          <option value="General Civil Litigation">General Civil Litigation</option>
          <option value="Other Legal Query">Other Legal Query</option>
        </select>
        {errors.issue && <p className={errorClass}>{errors.issue.message}</p>}
      </div>

      {/* Message (Optional) */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Brief Case Description (Optional)
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="Briefly describe your situation..."
          className={cn(inputClass, "resize-none")}
          {...register("message")}
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="secondary"
        size="lg"
        className="w-full group gap-3"
        loading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <IconLoader2 size={18} className="animate-spin" />
            Sending Email & Requesting...
          </>
        ) : (
          <>
            GET FREE CONSULTATION
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
