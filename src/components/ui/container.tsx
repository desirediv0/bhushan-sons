import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  size?: "default" | "sm" | "lg" | "xl" | "full";
  className?: string;
}

export function Container({
  children,
  size = "default",
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        size === "sm" && "max-w-screen-sm",
        size === "default" && "max-w-screen-lg",
        size === "lg" && "max-w-screen-xl",
        size === "xl" && "max-w-screen-2xl",
        size === "full" && "max-w-full",
        className
      )}
    >
      {children}
    </div>
  );
}
