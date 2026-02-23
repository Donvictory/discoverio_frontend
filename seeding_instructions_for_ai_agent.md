# Agent Instructions: Discover.io Database Seeding

## Context
Discover.io is an AI tool discovery platform. The system flow is:
1. User provides an open-ended request.
2. LLM normalizes this into **User Persona**, **Core Task**, and **Success Criteria**.
3. User confirms the normalization.
4. Backend searches a verified database for high-quality, persona-specific matches.

## Your Objective
Seed the system with **50-100 high-quality AI tools**, tagged with rich, granular metadata that allows for precise matching against any combination of Persona, Task, and Criteria.

## Reference Architecture
Before starting, read the data model defined in [seed_data_architecture.md](file:///C:/Users/Jasmond/.gemini/antigravity/brain/1a94fe37-aaaf-474b-baeb-a7d22a383364/seed_data_architecture.md). You MUST follow the relational structure described there (Tools, Personas, Tasks, Capabilities, and the `tool_use_cases` join table).

---

## Part 1: Persona & Task Definition
You must create a comprehensive list of search axes:
- **Personas (20-30):** Define roles across Design, Dev, Marketing, Writing, etc. (e.g., "Fullstack Dev", "SEO Specialist", "Social Media Manager").
- **Tasks (50-80):** For each persona, identify 3-5 specific, actionable tasks (e.g., "Remove background", "Review PRs", "Generate ad headlines").

## Part 2: Tool Curation
- **Identify 50-100 verified AI tools.**
- **Constraint:** Do NOT hallucinate. Only use tools that actually exist and are currently operational.
- **Categorize:** Map each tool to high-level buckets (e.g., Image Generation, Code Assistants).

## Part 3: Use Case Mapping (The Power Table)
This is the most critical step. For each tool, you must create 1-5 `tool_use_case` entries. A single tool (e.g., ChatGPT) will have different entries for a "Developer" vs. a "Writer".

**Each Use Case Entry must include:**
- `persona_id` & `task_id`.
- `relevance_score` (0-100) — How well does this tool solve THIS specific task for THIS specific persona?
- `use_case_description` — A brief narrative explaining the fit.
- `how_to_use` — Practical, step-by-step guidance for the user.
- `strengths` & `limitations` — Be honest about trade-offs (e.g., "Good UI but expensive").
- `best_for` — A one-sentence summary of the ideal user/scenario.

## Part 4: Success Criteria (Capabilities)
Define ~30 filterable capabilities (e.g., "Has API", "Supports CSV export", "Free plan available"). Tag every tool with the relevant capabilities.

---

## Output Format
Deliver the final data as a structured JSON or TypeScript file ready for a database seed script.

### Example Seed Entry:
```json
{
  "tool": { "name": "Cursor", "pricing": "freemium", "platforms": ["desktop"] },
  "capabilities": ["api-integration", "code-autocomplete", "terminal-context"],
  "use_cases": [
    {
      "persona": "frontend-developer",
      "task": "refactor-react-components",
      "relevance_score": 98,
      "how_to_use": "1. Open your project in Cursor...\n2. Cmd+K to describe the refactor...",
      "limitations": ["Monthly quota on Pro model usage"],
      "best_for": "Developers who want AI deeply integrated into their IDE"
    }
  ]
}
```

## Quality Standards
1. **Granularity:** Avoid generic descriptions. "Good for writing" is bad; "Excels at SEO-optimized blog outlines" is good.
2. **Relevance:** Higher scores must be reserved for tools that are undisputed leaders in that specific task.
3. **Consistency:** Ensure Persona and Task slugs are consistent across the entire dataset.
