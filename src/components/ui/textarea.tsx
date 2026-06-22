import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-text mb-1.5 font-body"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            "w-full min-h-[120px] px-4 py-3 bg-white border border-border rounded-md text-text text-sm font-body",
            "placeholder:text-text-light",
            "transition-all duration-200 resize-y",
            "focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary",
            "hover:border-text-muted",
            error && "border-error focus:ring-error/30 focus:border-error",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs text-error font-body">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-xs text-text-muted font-body">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
