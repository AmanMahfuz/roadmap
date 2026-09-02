# Project Ideography: Interactive Coding Learning Platform (DevQuik / Roadmap)

## Overview
This project is an interactive, gamified learning platform designed to teach programming languages and concepts using a "Duolingo-style" progressive roadmap. The application emphasizes visual feedback, bite-sized learning (nodes/days), code playgrounds, quizzes, and a vibrant user experience to keep learners engaged. 

The tech stack includes **React 19**, **Vite**, and **Supabase** for backend services, with **Canvas Confetti** for celebration animations and **Lucide React** for iconography.

## Core Concepts & Architecture
- **Gamified Learning Path**: The core UI is a winding path of nodes (DayTask/Lessons), mimicking Duolingo's curriculum flow. Nodes have distinct states: locked, active, and completed.
- **Interactive Modals**: Learning happens heavily within rich modals (`DayDetailModal`, `AiMentorModal`, `BossBattleModal`), allowing users to read concepts, review code snippets, and take quick quizzes without navigating away from the main map.
- **Progress Tracking & Analytics**: Users track their progress via an `AnalyticsDashboard`, `ProfileStatsView`, and a `CapabilitiesTracker`. Experience points (XP), daily challenges, and a streak system encourage consistent learning.
- **Extensive Curriculum Data**: The `src/data/` directory houses detailed JSON/JS structures (`sixLanguagesData.js`, `duolingoCurriculum.js`, `bossBattlesData.js`, etc.) defining the learning content, questions, and roadmaps for various technologies.

## Design System: Vibrant Light Mode

The platform uses a custom, highly polished "Vibrant Light Mode" design system defined primarily in `src/App.css` and `src/index.css`. It heavily leans on modern UI trends: subtle gradients, soft shadows, rounded corners, and clear typography.

### Typography
- **Heading Font**: `Plus Jakarta Sans` (Bold, structural, modern)
- **Body Font**: `Inter` (Legible, clean, versatile)
- **Monospace Font**: `JetBrains Mono` (Used for code snippets, badges, and technical terms)

### Color Palette
The color scheme is designed to be bright, inviting, and clear, with semantic accents to denote progress and actions.

- **Backgrounds**: 
  - Main: `#f8f9ff` (Soft cool white)
  - Surface/Card: `#ffffff` (Pure white)
  - Subtle Card: `#f1f5f9` (Slate 50)
- **Text**:
  - Main: `#0b1c30` (Deep navy/black)
  - Muted: `#475569` (Slate 600)
  - Dim: `#64748b` (Slate 500)
- **Borders**: 
  - Standard: `#e2e8f0`
  - Hover: `#cbd5e1`
- **Accents (Semantic & Gamification)**:
  - Primary/Brand: `#9d4300` (Deep Orange/Brown)
  - Vibrant Orange: `#f97316` (Used for active states, streaks, XP)
  - Amber/Gold: `#f59e0b` (Active nodes, stars, premium indicators)
  - Green: `#10b981` (Completed nodes, correct answers, success)
  - Blue: `#0284c7` (Informational, code highlights)

### UI Components & Aesthetics
1. **Cards & Containers**:
   - Extensive use of `border-radius: 24px` or `16px` for friendly, soft edges.
   - Micro-interactions: Cards lift on hover (`transform: translateY(-4px)`) with expanded shadow spread (`box-shadow: 0 16px 30px -8px rgba(11, 28, 48, 0.1)`).
   - "Glass" effects and slight gradient top borders are used to distinguish premium or selected language cards.

2. **The Winding Path (Roadmap)**:
   - Nodes (`.duo-node-btn`) are circular and chunky, featuring a 3D-like bottom border/shadow (`box-shadow: 0 6px 0 ...`) that depresses when clicked, mimicking a physical button (skeuomorphic touch).
   - Connectors between nodes (`.node-connector`) light up with accent colors as the user progresses.
   - States: Green for 'done', Amber/Orange for 'active', and Grey for 'locked/disabled'.

3. **Modals & Overlays**:
   - Modals use a backdrop blur (`backdrop-filter: blur(6px)`) and a dark transparent overlay.
   - Modal entrances are animated (`modalSlideUp`) for a smooth, app-like feel.
   - Tab bars inside modals use clean, bottom-bordered active states to switch between Concepts, Code, and Quizzes.

4. **Quizzes & Code Playgrounds**:
   - **Quiz Options**: Styled as interactive list items. They feature default, selected, correct (green), and wrong (red) states with soft background opacities (e.g., `rgba(16, 185, 129, 0.1)`).
   - **Code Blocks**: Displayed in a dark mode container (`#0f172a`) to contrast with the light theme, using `JetBrains Mono` and syntax highlight colors (e.g., bright blue `#38bdf8`).

### Micro-Animations
- Smooth cubic-bezier transitions on hover states (`transition: all 0.3s cubic-bezier(...)`).
- Progress bars that fill smoothly (`transition: width 0.4s ease`).
- Button clicks that physically compress the element (`transform: translateY(4px)`).

## Summary
The project's design language is highly intentional, prioritizing an encouraging, low-friction, and visually delightful experience. By borrowing proven gamification UI patterns (chunky 3D buttons, vivid progress tracks, prominent XP badges) and pairing them with a clean, modern web aesthetic, the platform aims to make learning complex coding topics feel approachable and rewarding.
