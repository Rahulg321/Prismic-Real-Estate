import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface OutlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

export function OutlineButton({
  className,
  children = "VIEW ALL",
  ...props
}: OutlineButtonProps) {
  return (
    <button
      className={cn(
        "px-8 py-2 border border-[#C5A880] text-[#C5A880] hover:bg-[#C5A880] hover:text-white transition-colors duration-200",
        "text-sm tracking-wider font-medium",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
