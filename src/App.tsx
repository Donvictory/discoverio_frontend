import { useState } from "react";
import { OnboardingFlow } from "./features/onboarding/OnboardingFlow";
import { SearchLanding } from "./features/search/SearchLanding";
import { DiagnosisView } from "./features/search/DiagnosisView";
import { ResultsView } from "./features/results/ResultsView";
import { MOCK_TOOLS } from "./lib/mockData";
import "./App.css";

type AppView = "onboarding" | "search" | "diagnosis" | "results";

function App() {
  const [view, setView] = useState<AppView>("onboarding");
  const [userData, setUserData] = useState<{
    persona: string;
    tools: string;
    problems: string;
  } | null>(null);

  const [diagnosis, setDiagnosis] = useState<{
    persona: string;
    task: string;
    successCriteria: string;
  } | null>(null);

  const handleOnboardingComplete = (data: any) => {
    setUserData(data);
    setView("search");
  };

  const handleSearch = (query: string) => {
    // Simulate AI diagnosis extraction
    setDiagnosis({
      persona: userData?.persona || "Creative Professional",
      task: query.length > 50 ? query.substring(0, 47) + "..." : query,
      successCriteria:
        "Must be user-friendly, reliable, and fit existing workflow.",
    });
    setView("diagnosis");
  };

  const handleDiagnosisConfirm = () => {
    setView("results");
  };

  const handleReset = () => {
    setDiagnosis(null);
    setView("search");
  };

  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="logo-container">
          <div className="logo-icon">D</div>
          <span className="logo-text">
            Discover<span>.io</span>
          </span>
        </div>
        {view !== "onboarding" && (
          <nav className="app-nav">
            <button
              onClick={() => setView("search")}
              className={view === "search" ? "active" : ""}
            >
              Search
            </button>
            <button
              onClick={() => setView("results")}
              className={view === "results" ? "active" : ""}
            >
              Results
            </button>
          </nav>
        )}
      </header>

      <main className="app-main">
        {view === "onboarding" && (
          <OnboardingFlow onComplete={handleOnboardingComplete} />
        )}
        {view === "search" && (
          <SearchLanding
            onSearch={handleSearch}
            userPersona={userData?.persona}
          />
        )}
        {view === "diagnosis" && diagnosis && (
          <DiagnosisView
            data={diagnosis}
            onConfirm={handleDiagnosisConfirm}
            onEdit={() => setView("search")}
          />
        )}
        {view === "results" && (
          <ResultsView tools={MOCK_TOOLS} onReset={handleReset} />
        )}
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Discover.io. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
