# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Project Overview

This is a personal website and blog built with Astro, a modern static site generator. The site showcases projects and technical blog posts with rich content features including mathematical equations, Mermaid diagrams, and syntax-highlighted code blocks.

The site uses TypeScript throughout for type safety and Tailwind CSS with the Catppuccin theme for styling. It features two main content collections: blog posts and project showcases, both managed through Astro's content collections API with Zod schema validation.

**Key Features:**
- Static site generation with Astro 5.9.3
- TypeScript with strict mode enabled
- MDX-based content with math support (KaTeX)
- Mermaid diagram integration
- Dark/light theme with Catppuccin colors
- Responsive design with Tailwind CSS 4
- Search functionality powered by Fuse.js
- Deployed to https://alexlavaee.me

# Skills Protocol (Superpowers)

## Mandatory First Response Protocol

Before responding to ANY user message, you MUST complete this checklist:

1. ☐ List available skills in your mind
2. ☐ Ask yourself: "Does ANY skill match this request?"
3. ☐ If yes → Use the Skill tool to read and run the skill file
4. ☐ Announce which skill you're using
5. ☐ Follow the skill exactly

**Responding WITHOUT completing this checklist = automatic failure.**

## Common Rationalizations That Mean You're About To Fail

If you catch yourself thinking ANY of these thoughts, STOP. You are rationalizing. Check for and use the skill.

- "This is just a simple question" → WRONG. Questions are tasks. Check for skills.
- "I can check git/files quickly" → WRONG. Files don't have conversation context. Check for skills.
- "Let me gather information first" → WRONG. Skills tell you HOW to gather information. Check for skills.
- "This doesn't need a formal skill" → WRONG. If a skill exists for it, use it.
- "I remember this skill" → WRONG. Skills evolve. Run the current version.
- "This doesn't count as a task" → WRONG. If you're taking action, it's a task. Check for skills.
- "The skill is overkill for this" → WRONG. Skills exist because simple things become complex. Use it.
- "I'll just do this one thing first" → WRONG. Check for skills BEFORE doing anything.

**Why:** Skills document proven techniques that save time and prevent mistakes. Not using available skills means repeating solved problems and making known errors.

If a skill for your task exists, you must use it or you will fail at your task.

## How to Use Skills

You have skills available.

### Automatic Setup Detection

**IMPORTANT:** Before attempting to use skills, you MUST verify that the skills system and CLAUDE.md is properly configured by checking if you see skills like this. Also if the user already has a well-formatted CLAUDE.md with the project information filled in below, you can skip the setup:

# Should see:
# /superpowers:brainstorm - Interactive design refinement
# /superpowers:write-plan - Create implementation plan
# /superpowers:execute-plan - Execute plan in batches

1. **Inform the user:** "I've detected that the agent instructions system is not yet set up. I'll automatically install it now by fetching the metaprompt from the agent-instructions repository and executing it. You will need to install the setup process described in: https://github.com/obra/superpowers/tree/main?tab=readme-ov-file#claude-code-via-plugin-marketplace to enable Claude Code Superpowers."

2. **Clone the metaprompt from the remote repository:**
   
   **IMPORTANT:** The metaprompt is stored as **METAPROMPT.md** in the `agent-setup` branch of the **agent-instructions repository** (`git@github.com:flora131/agent-instructions.git`), NOT in the user's current project repository. You must clone this external repository to access the metaprompt.
   
   ```bash
   # Create temporary directory
   TEMP_DIR=$(mktemp -d)
   echo "Fetching metaprompt from agent-instructions repository..."
   
   # Clone the agent-setup branch from the agent-instructions repository
   # This is an EXTERNAL repository, not the user's current project
   git clone -b agent-setup https://github.com/flora131/agent-instructions.git "$TEMP_DIR/agent-instructions"
   
   # The METAPROMPT.md is now available at: $TEMP_DIR/agent-instructions/METAPROMPT.md
   ```

3. **Read the METAPROMPT.md file** from the temporary directory and follow ALL instructions in order:
   - **Phase 1**: Analyze the project and populate CLAUDE.md file
   - **Phase 2**: IMPORTANT: Since you are Claude Code, you MUST stop after Phase 1 because you already have native skills support. You do NOT need to set up skills again.
   - The metaprompt provides comprehensive instructions for both phases

4. **Execute each step automatically** following the metaprompt's two-phase process - don't wait for approval between steps

5. **If any step fails:**
   - STOP immediately and inform the user what went wrong
   - Show the error message clearly
   - Explain what the error means in plain language
   - Suggest possible fixes from the Troubleshooting section in SETUP.md (which will be referenced by METAPROMPT.md)
   - Ask the user for help if the issue is unclear

6. **Clean up temporary directory** after setup completes:
   ```bash
   rm -rf "$TEMP_DIR"
   ```

### Skills with Checklists

If a skill has a checklist, you MUST create TodoWrite todos for EACH item.

**Don't:**
- Work through checklist mentally
- Skip creating todos "to save time"
- Batch multiple items into one todo
- Mark complete without doing them

**Why:** Checklists without TodoWrite tracking = steps get skipped. Every time. The overhead of TodoWrite is tiny compared to the cost of missing steps.

## Key Principles

1. **Finding a relevant skill = mandatory to read and use it.** Not optional.
2. **Skills document proven techniques** that save time and prevent mistakes.
3. **Always announce** which skill you're using and why.
4. **Follow skills exactly** - don't rationalize away the discipline.
5. **Create TodoWrite todos** for any skill checklists.

## Custom Agents

The system supports custom specialized agents stored in agent-specific directories. These agents can be invoked for specific tasks that match their expertise.

### Agent Selection and Usage

- IMPORTANT: ALWAYS start by invoking the agent-organizer sub-agent, an expert agent organizer specializing in multi-agent orchestration.
- Custom agents are automatically selected based on the context and task requirements
- The system analyzes the user's request and matches it with the most appropriate specialized agent
- Multiple sub-agents can work in parallel on different aspects of a complex task
- **Maximum parallel agents**: 50 sub-agents can operate simultaneously
- Each agent has its own expertise domain defined in its configuration
- Agents can coordinate and share context through the main agent orchestrator

### When Custom Agents Are Used

The system automatically invokes custom agents when:
- The task matches a specialized agent's expertise domain
- Complex tasks benefit from parallel processing across multiple specialized agents
- Domain-specific knowledge or workflows are required
- The main agent determines delegation would improve efficiency or accuracy

# ExecPlans

When writing complex features or significant refactors, use an ExecPlan (as described in `specs/PLANS.md`) from design to implementation. If the user request requires multiple specs, create multiple specification files in the `specs/` directory. After creating the specs, create a master ExecPlan that links to each individual spec ExecPlan. Update the `specs/README.md` to include links to the new specs.

ALWAYS start an ExecPlan creation by consulting the DeepWiki tool for best practices on design patterns, architecture, and implementation strategies. Ask it questions about the system design and constructs in the library that will help you achieve your goals.

Skip using an ExecPlan for straightforward tasks (roughly the easiest 25%).

# Architecture

This project follows a **content-driven static site architecture** using Astro's file-based routing and content collections pattern.

**Key Components:**

1. **Content Collections** (`src/content/`): Type-safe content management
   - `blog/`: MDX blog posts with frontmatter validation
   - `projects/`: Project showcases with cover images
   - `config.ts`: Zod schemas defining content structure

2. **Pages** (`src/pages/`): File-based routing
   - `index.astro`: Homepage
   - `blog.astro` & `blog/`: Blog listing and individual posts
   - `projects.astro` & `projects/`: Project listing and details
   - `404.astro`: Custom error page

3. **Components** (`src/components/`): Reusable UI elements
   - Layout components (Navigation, Footer, Heading)
   - Content components (BlogCard, ProjectCard)
   - Theme components (ThemeIcon)
   - Blog-specific components (`blog/`)

4. **Layouts** (`src/layouts/`): Page templates
5. **Styles** (`src/styles/`): Global CSS and Tailwind configuration
6. **Assets** (`src/assets/`): Images and videos

**Project Structure:**
```
lavaman131.github.io/
├── src/
│   ├── content/           # Content collections (blog, projects)
│   │   ├── blog/          # MDX blog posts
│   │   ├── projects/      # Project MDX files
│   │   └── config.ts      # Content schemas
│   ├── components/        # Astro components
│   ├── layouts/           # Page layouts
│   ├── pages/             # File-based routes
│   ├── styles/            # Global styles
│   └── assets/            # Static assets
├── astro.config.mjs       # Astro configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

**Design Principles:**
- Type-safe content management with Zod validation
- Component-based UI architecture
- Static generation for optimal performance
- Separation of content from presentation
- Responsive and accessible design

# Development Guidelines

## General

- Before implementing a large refactor or new feature explain your plan and get approval.
- Human-in-the-loop: If you're unsure about a design decision or implementation detail, ask for clarification before proceeding. Feel free to ask clarifying questions as you are working.
- Avoid re-inventing the wheel: Use existing libraries and tools where appropriate.

## TypeScript/JavaScript

`npm` is the package manager used to manage dependencies and run development scripts. Below are the common commands:

- `npm install` - Install/sync dependencies
- `npm add <package>` - Add a new dependency
- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build the site for production
- `npm run preview` - Preview production build locally
- `npx prettier --write .` - Format code with Prettier

### Technology Stack Focus
- **TypeScript**: Strict mode enabled for enhanced type safety across all files
- **Astro 5.9.3**: Modern static site generator with file-based routing and content collections
- **Tailwind CSS 4.1.10**: Utility-first CSS framework with Catppuccin theme integration
- **MDX**: Enhanced Markdown with JSX support for rich content
  - `remark-math` & `rehype-katex`: Mathematical equation rendering
  - `mdx-mermaid`: Diagram support
- **Astro Expressive Code**: Syntax-highlighted code blocks with theme support
- **Astro Icon**: Icon component system with Font Awesome integration
- **Fuse.js**: Client-side fuzzy search functionality
- **Prettier**: Code formatting with Astro plugin support

### Code Organization and Modularity

**Prefer highly modular code** that separates concerns into distinct modules. This improves:
- **Testability**: Each module can be tested in isolation
- **Reusability**: Modules can be used independently
- **Maintainability**: Changes are localized to specific modules
- **Readability**: Clear separation of concerns makes code easier to understand

**Guidelines**:
- Keep modules focused on a single responsibility
- Use clear module boundaries and minimal public APIs
- Prefer composition over large monolithic modules
- Extract shared functionality into dedicated modules as the codebase grows

# Code Style

## Documentation

**IMPORTANT: Documentation means docstrings and type hints in the code, NOT separate documentation files.**

- You should NOT create any separate documentation pages (README files, markdown docs, etc.)
- The code itself should contain proficient documentation in the form of docstrings and type hints (for Python)
- For Python: Add comprehensive numpy-style docstrings to all functions, classes, and modules
- Type stubs (.pyi files) should have detailed descriptions for all exported functions and classes

**Avoid Over-Documenting:**
- Do NOT document obvious behavior (e.g., a function named `get_name` that returns a name doesn't need extensive documentation)
- Focus documentation on WHY and HOW, not WHAT (the code itself shows what it does)
- Document edge cases, non-obvious behavior, and important constraints
- Skip docstrings for trivial functions where the name and type hints are self-explanatory
- Prioritize documenting public APIs, complex logic, and non-intuitive design decisions

## TypeScript/Astro Code Style

### Documentation and Comments

- Write clear JSDoc comments for complex functions and types
- Ensure functions have descriptive names that convey their purpose
- TypeScript types serve as inline documentation - use them effectively
- Add comments to explain "why" not "what" (the code shows what it does)
- Document non-obvious Astro features (slots, props, content collections)

### Naming Conventions

- **Variables and Functions**: `camelCase`
- **Components**: `PascalCase` (e.g., `BlogCard.astro`, `ThemeIcon.astro`)
- **Types and Interfaces**: `PascalCase`
- **Constants**: `UPPER_SNAKE_CASE` for true constants, `camelCase` for config objects
- **Files**:
  - Astro components: `PascalCase.astro`
  - TypeScript modules: `camelCase.ts`
  - Config files: `kebab-case.config.js`

### TypeScript Guidelines

- Always enable strict mode (already configured in `tsconfig.json`)
- Prefer explicit types over `any`
- Use Zod schemas for runtime validation (content collections, API responses)
- Leverage type inference where it improves readability
- Define interfaces for component props in Astro components

### Astro-Specific Patterns

- Use content collections for structured content (blog posts, projects)
- Define frontmatter schemas in `src/content/config.ts` using Zod
- Leverage Astro's built-in optimizations (image optimization, lazy loading)
- Use `.astro` files for components with HTML templates
- Import TypeScript utilities as needed in Astro components
- Follow Astro's component script conventions (frontmatter at the top)

### Formatting

- Prettier is configured with the Astro plugin
- Run `npx prettier --write .` to format all files
- Formatting is automatically applied to `.astro`, `.ts`, `.js`, and `.mdx` files

# Test-Driven Development (TDD)

- Never create throwaway test scripts or ad hoc verification files
- If you need to test functionality, write a proper test in the test suite

## Testing Guidelines

**Note:** Testing infrastructure is not currently set up for this project. As a static site with primarily content-driven architecture, formal testing is minimal. However, when adding interactive features or complex logic, consider the following:

### Recommended Testing Approach

- **For Content Validation**: Ensure content collection schemas (Zod) properly validate frontmatter
- **For Components with Logic**: Consider using Vitest for unit testing TypeScript utilities
- **For Visual Regression**: Playwright or Cypress could be used for E2E testing of interactive features
- **For Build Verification**: The `npm run build` command serves as a build-time validation

### Future Testing Setup (if needed)

- Create a `tests/` or `src/__tests__/` directory for test files
- Use Vitest (recommended for Vite-based projects like Astro) as the testing framework
- Test TypeScript utilities and helper functions
- For Astro components, focus on testing the underlying logic rather than rendering
- Use the Playwright MCP tool available for browser-based testing
- Account for edge cases in content processing and search functionality

### Manual Verification

- Preview builds locally with `npm run preview` before deploying
- Verify content renders correctly for new blog posts and projects
- Test theme switching and responsive behavior manually
- Validate that math equations and Mermaid diagrams render properly

# Tools

<!--
  TEMPLATE INSTRUCTIONS: List any MCP tools, custom scripts, or development tools available to the agent.
  This section helps the AI agent understand what additional capabilities it has access to.
  Common categories:
  - Sequential thinking/reasoning tools
  - Documentation lookup tools
  - Code generation tools
  - Testing/debugging tools
  - Project-specific utilities
-->

You have a collection of tools available to assist with development and debugging. These tools can be invoked as needed.

- `sequential-thinking-tools`
  - **When to use:** For complex reasoning tasks that require step-by-step analysis. A good rule of thumb is if the task requires more than 25% effort.
- `deepwiki`
  - **When to use:** Consult for external knowledge or documentation that is not part of the immediate codebase. Can be helpful for system design questions or understanding third-party libraries.
- `context7`
  - **When to use:** For retrieving immediate documentation on the latest version of a library or framework. Useful for quick lookups to double-check syntax, parameters, or usage examples.
- `playwright`
  - **When to use:** For end-to-end testing of web applications. Use this tool to automate browser interactions and verify UI functionality. Can also be used for discovering documentation pages for third-party libraries.

# Updates to This Document
- Update this document as needed to reflect changes in development practices or project structure
  - Updates usually come in the form of the package structure changing
- Do NOT contradict existing guidelines in the document
- This document should be an executive summary of the development practices for this project
  - Keep low-level implementation details out of this document