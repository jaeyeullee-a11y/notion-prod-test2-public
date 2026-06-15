import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-600 text-white shadow-xs hover:bg-brand-700",
        "secondary-gray":
          "border border-gray-300 bg-white text-gray-700 shadow-xs hover:bg-gray-50",
        "secondary-color":
          "border border-brand-300 bg-brand-50 text-brand-700 shadow-xs hover:bg-brand-100",
        tertiary:
          "text-gray-600 hover:bg-gray-50 hover:text-gray-700",
        "tertiary-color":
          "text-brand-700 hover:bg-brand-50",
        link: "text-gray-600 underline-offset-4 hover:underline",
        "link-color":
          "text-brand-700 underline-offset-4 hover:underline",
        destructive:
          "bg-error-600 text-white shadow-xs hover:bg-error-700",
        "destructive-outline":
          "border border-error-300 bg-white text-error-700 shadow-xs hover:bg-error-50",
      },
      size: {
        sm: "h-9 px-3.5 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-[18px] text-base",
        xl: "h-12 px-5 text-base",
        "2xl": "h-[60px] px-7 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
