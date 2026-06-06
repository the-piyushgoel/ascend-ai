# Ascend AI Architecture

## Overview

Ascend AI is a multi-agent career intelligence platform that analyzes a user's profile, evaluates career readiness, identifies skill gaps, and generates personalized roadmaps.

The system follows an orchestrated multi-agent architecture where a central Orchestrator Agent coordinates specialized agents.

---

## High-Level Architecture

User

↓

Orchestrator Agent

│

├── Resume Agent

├── GitHub Agent

├── Assessment Agent

├── Gap Analysis Agent

├── Roadmap Agent

└── Mentor Agent

---

## Agent Responsibilities

### Resume Agent

Purpose:

Analyze uploaded resumes and extract meaningful career signals.

Input:

* Resume PDF

Output:

* Skills
* Projects
* Experience
* Achievements
* ATS Score
* Resume Suggestions

---

### GitHub Agent

Purpose:

Analyze GitHub activity and project quality.

Input:

* GitHub Username

Output:

* Repository Count
* Commit Activity
* Languages Used
* Stars
* Open Source Activity
* Activity Score

---

### Assessment Agent

Purpose:

Evaluate technical readiness.

Input:

* MCQs
* Fill in the blanks
* Short text responses

Output:

* DSA Score
* OOP Score
* OS Score
* DBMS Score
* CN Score
* Overall Assessment Score

---

### Gap Analysis Agent

Purpose:

Identify missing skills and weaknesses.

Input:

* Resume Analysis
* GitHub Analysis
* Assessment Results
* Career Goal

Output:

* Missing Skills
* Missing Projects
* Missing Experience
* Improvement Areas

---

### Roadmap Agent

Purpose:

Generate personalized career plans.

Input:

* Goal
* Timeline
* Daily Study Hours
* Gap Analysis

Output:

* Must Do Tasks
* Recommended Tasks
* Milestones
* Career Roadmap

---

### Mentor Agent

Purpose:

Provide interactive career guidance.

Input:

* User Queries

Output:

* Personalized Suggestions
* Dynamic Roadmap Updates
* Career Guidance

---

## Data Flow

Google Login

↓

Career Profile Setup

↓

Resume Analysis

↓

GitHub Analysis

↓

Technical Assessment

↓

Gap Analysis

↓

Readiness Score Generation

↓

Roadmap Generation

↓

Mentor Interaction
