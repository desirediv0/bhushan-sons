import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-body font-semibold uppercase tracking-wider transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-primary-light active:bg-primary-dark hover:-translate-y-px",
        secondary:
          "bg-secondary text-white hover:bg-secondary-hover active:bg-secondary-hover hover:-translate-y-px",
        outline:
          "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
        "outline-gold":
          "border border-white/30 text-white bg-transparent hover:bg-white hover:text-primary hover:border-white",
        ghost:
          "text-text hover:bg-background-alt active:bg-background-alt/80 normal-case tracking-normal font-medium",
        "ghost-gold":
          "text-secondary hover:bg-secondary/10 active:bg-secondary/15",
        link:
          "text-primary underline-offset-4 hover:underline p-0 h-auto normal-case tracking-normal font-medium",
        "link-gold":
          "text-secondary underline-offset-4 hover:underline p-0 h-auto normal-case tracking-normal font-medium",
      },
      size: {
        sm: "h-9 px-4 text-xs rounded",
        md: "h-11 px-6 text-[13.5px] rounded",
        lg: "h-13 px-7 text-[13.5px] rounded",
        xl: "h-15 px-9 text-sm rounded",
        icon: "h-10 w-10 rounded",
        "icon-sm": "h-8 w-8 rounded",
        "icon-lg": "h-12 w-12 rounded",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
