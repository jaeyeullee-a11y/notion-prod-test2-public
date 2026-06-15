import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, hint, error, id, ...props }, ref) => {
    const inputId = id || React.useId();
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={inputId}
          className={cn(
            "flex h-11 w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-base text-gray-900 shadow-xs placeholder:text-gray-500 focus:border-brand-300 focus:ring-4 focus:ring-brand-100 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
            error &&
              "border-error-300 focus:border-error-300 focus:ring-error-100",
            className
          )}
          ref={ref}
          {...props}
        />
        {hint && !error && (
          <p className="text-sm text-gray-600">{hint}</p>
        )}
        {error && (
          <p className="text-sm text-error-500">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
