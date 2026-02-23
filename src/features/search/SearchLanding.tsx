import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Button } from "../../components/ui";
import { Search, Sparkles } from "lucide-react";
import "./SearchLanding.css";

interface SearchLandingProps {
  onSearch: (query: string) => void;
  userPersona?: string;
}

export const SearchLanding: React.FC<SearchLandingProps> = ({
  onSearch,
  userPersona,
}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <Container className="search-landing-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="search-hero"
      >
        <div className="badge">
          <Sparkles size={14} /> <span>AI-Powered Discovery</span>
        </div>
        <h1>
          Find the perfect AI tool for <br />
          <span className="accent-text">
            {userPersona || "your creative workflow"}
          </span>
        </h1>
        <p>
          Describe your problem, task, or workflow in natural language. <br />
          We'll handle the diagnosis and recommend the best tools.
        </p>

        <form onSubmit={handleSubmit} className="search-box-container">
          <div className="search-box">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Tell me what you need..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input-field"
              autoFocus
            />
            <Button type="submit" variant="primary" disabled={!query.trim()}>
              Search
            </Button>
          </div>
        </form>

        <div className="search-suggestions">
          <span>Try:</span>
          <button
            onClick={() =>
              setQuery(
                "I need an AI tool to generate social media copies for a fashion brand",
              )
            }
          >
            "Generate social media copies..."
          </button>
          <button
            onClick={() =>
              setQuery(
                "Looking for a tool to clean up background noise from my podcast audio",
              )
            }
          >
            "Clean up podcast audio..."
          </button>
        </div>
      </motion.div>
    </Container>
  );
};
