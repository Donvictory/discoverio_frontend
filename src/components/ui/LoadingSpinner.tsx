import React from "react";
import "./LoadingSpinner.css";

interface LoadingSpinnerProps {
  message?: string;
  fullPage?: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = "Loading...",
  fullPage = false,
}) => {
  const content = (
    <div className="loading-spinner-container">
      <div className="loading-spinner" />
      {message && <p className="loading-spinner-message">{message}</p>}
    </div>
  );

  if (fullPage) {
    return <div className="loading-spinner-full-page">{content}</div>;
  }

  return content;
};
