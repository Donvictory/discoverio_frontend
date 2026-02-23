import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  size = "lg",
}) => {
  const maxWidths = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    full: "100%",
  };

  const style = {
    maxWidth: maxWidths[size],
    margin: "0 auto",
    padding: "0 var(--space-4)",
    width: "100%",
  };

  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};
