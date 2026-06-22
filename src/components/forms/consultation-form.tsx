"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconCheck, IconLoader2, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const consultationSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number too long"),
  category: z.string().min(1, "Please select a case category"),
  issue: z.string().min(1, "Please select your issue"),
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
          "flex flex-col items-center justify-center text-center p-8 border min-h-[300px]",
          isDark ? "border-white/10 bg-white/5" : "border-border bg-[#FAFAFA]",
          className
        )}
      >
        <div className="w-16 h-16 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center mb-6">
          <IconCheck size={28} className="text-white" />
        </div>
        <h3 className={cn("font-heading font-semibold text-xl mb-3", isDark ? "text-white" : "text-primary")}>
          We Will Call You Back
        </h3>
        <p className={cn("font-body leading-relaxed mb-6 max-w-sm text-sm", isDark ? "text-white/60" : "text-text-muted")}>
          Thank you for requesting a call back. A senior attorney will get in touch shortly to assist with your issue.
        </p>
        <button
          onClick={() => { setIsSubmitted(false); reset(); }}
          className="font-body text-sm text-white hover:text-white-hover underline underline-offset-2"
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
          <option value="civil-law">Civil Law</option>
          <option value="criminal-law">Criminal Law</option>
          <option value="family-law">Family Law</option>
          <option value="corporate-law">Corporate Law</option>
          <option value="realestate-law">Realestate Law</option>
          <option value="immigration-law">Immigration Law</option>
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
          <option value="divorce">Divorce & Matrimonial</option>
          <option value="child-custody">Child Custody</option>
          <option value="property">Property Transactions & Disputes</option>
          <option value="criminal">Vigorous Defense / Bail</option>
          <option value="corporate">Business / Corporate Counsel</option>
          <option value="other">General Civil Litigation</option>
        </select>
        {errors.issue && <p className={errorClass}>{errors.issue.message}</p>}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="secondary"
        size="lg"
        className="w-full group gap-3 font-medium bg-[#111111] text-white hover:bg-[#333333]"
        loading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <IconLoader2 size={18} className="animate-spin" />
            Requesting Callback...
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
