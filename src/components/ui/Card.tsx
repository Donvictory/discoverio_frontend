import React from "react";
import "./Card.css";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  hoverable?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  padding = "md",
  hoverable = false,
  onClick,
}) => {
  return (
    <div
      className={`card padding-${padding} ${hoverable ? "card--hoverable" : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
