import React from "react";
import { motion } from "framer-motion";
import { Container, Card, Button } from "../../components/ui";
import {
  Star,
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  ExternalLink,
  RefreshCw,
} from "lucide-react";
import "./ResultsView.css";

interface Tool {
  id: string;
  name: string;
  rank: number;
  description: string;
  usefulness: number;
  relevance: number;
  reliability: number;
  tradeoff: string;
  guidance: string;
  url: string;
}

interface ResultsViewProps {
  tools: Tool[];
  onReset: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ tools, onReset }) => {
  return (
    <Container className="results-container">
      <div className="results-header">
        <h1>Your Curated AI Tools</h1>
        <p>
          Based on your specific use case and success criteria, here are the top
          5 tools recommended for you.
        </p>
        <Button variant="ghost" onClick={onReset} className="reset-button">
          <RefreshCw size={16} /> Start New Search
        </Button>
      </div>

      <div className="leaderboard">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="tool-card">
              <div className="tool-rank">#{tool.rank}</div>
              <div className="tool-main">
                <div className="tool-info">
                  <div className="tool-name-row">
                    <h2>{tool.name}</h2>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tool-link"
                    >
                      Visit <ExternalLink size={14} />
                    </a>
                  </div>
                  <p className="tool-description">{tool.description}</p>
                </div>

                <div className="tool-metrics">
                  <div className="metric">
                    <Star size={14} />
                    <span>Usefulness: {tool.usefulness}%</span>
                  </div>
                  <div className="metric">
                    <TrendingUp size={14} />
                    <span>Relevance: {tool.relevance}%</span>
                  </div>
                  <div className="metric">
                    <ShieldCheck size={14} />
                    <span>Reliability: {tool.reliability}%</span>
                  </div>
                </div>

                <div className="tool-guidance">
                  <h4>Practical Guidance</h4>
                  <p>{tool.guidance}</p>
                </div>

                <div className="tool-limitation">
                  <AlertTriangle size={16} />
                  <span>
                    <strong>Limitation:</strong> {tool.tradeoff}
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};
