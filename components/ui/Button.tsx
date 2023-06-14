import { Loader } from "lucide-react";
import { FC, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

// Types

// Hooks

// Actions

// Components

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, disabled, isLoading, type = "button", ...props },
    ref
  ) => {
    return (
      <button
        type={type}
        className={twMerge(
          "w-full rounded-lg bg-theme-purple border flex items-center justify-center border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition",
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {isLoading ? <Loader className="animate-spin" /> : children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
