import React from "react";
import { motion } from "framer-motion";
import { Container, Card, Button } from "../../components/ui";
import { CheckCircle2, User, Zap, Target, ArrowRight } from "lucide-react";
import "./DiagnosisView.css";

interface DiagnosisData {
  persona: string;
  task: string;
  successCriteria: string;
}

interface DiagnosisViewProps {
  data: DiagnosisData;
  onConfirm: () => void;
  onEdit: () => void;
}

export const DiagnosisView: React.FC<DiagnosisViewProps> = ({
  data,
  onConfirm,
  onEdit,
}) => {
  return (
    <Container size="md" className="diagnosis-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="diagnosis-content"
      >
        <div className="diagnosis-header">
          <div className="status-icon">
            <CheckCircle2 size={32} />
          </div>
          <h1>System Diagnosis</h1>
          <p>I've analyzed your request. Here's what I understand:</p>
        </div>

        <div className="diagnosis-grid">
          <Card className="diagnosis-card">
            <div className="card-header">
              <User size={20} className="card-icon persona" />
              <h3>User Persona</h3>
            </div>
            <p className="diagnosis-value">{data.persona}</p>
          </Card>

          <Card className="diagnosis-card">
            <div className="card-header">
              <Zap size={20} className="card-icon task" />
              <h3>Core Task</h3>
            </div>
            <p className="diagnosis-value">{data.task}</p>
          </Card>

          <Card className="diagnosis-card">
            <div className="card-header">
              <Target size={20} className="card-icon criteria" />
              <h3>Success Criteria</h3>
            </div>
            <p className="diagnosis-value">{data.successCriteria}</p>
          </Card>
        </div>

        <div className="diagnosis-actions">
          <p>Does this look accurate? I'll use this to find the best tools.</p>
          <div className="action-buttons">
            <Button variant="outline" onClick={onEdit}>
              No, let me correct it
            </Button>
            <Button variant="primary" onClick={onConfirm}>
              Yes, find tools <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};
