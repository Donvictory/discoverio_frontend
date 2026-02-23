import React from "react";
import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  disabled,
  ...props
}) => {
  const classes = [`btn`, `btn--${variant}`, `btn--${size}`, className].join(
    " ",
  );

  return (
    <button className={classes} disabled={disabled || isLoading} {...props}>
      {isLoading ? <span className="btn__spinner" /> : children}
    </button>
  );
};
