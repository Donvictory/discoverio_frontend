import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Pagination.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  disabled = false,
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  // Logic to show a limited window of pages if there are many
  const visiblePages = pages.filter(p => {
    if (totalPages <= 7) return true;
    if (p === 1 || p === totalPages) return true;
    return Math.abs(p - currentPage) <= 1;
  });

  const finalPages: (number | string)[] = [];
  let lastPage: number | null = null;

  for (const p of visiblePages) {
    if (lastPage !== null && p - lastPage > 1) {
      finalPages.push("...");
    }
    finalPages.push(p);
    lastPage = p;
  }

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        className="pagination__btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={disabled || currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>

      <div className="pagination__pages">
        {finalPages.map((p, i) => (
          <React.Fragment key={i}>
            {typeof p === "number" ? (
              <button
                className={`pagination__page ${p === currentPage ? "active" : ""}`}
                onClick={() => onPageChange(p)}
                disabled={disabled}
              >
                {p}
              </button>
            ) : (
              <span className="pagination__dots">{p}</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <button
        className="pagination__btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={disabled || currentPage === totalPages}
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
};
