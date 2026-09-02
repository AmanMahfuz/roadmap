export default {
  id: "fullstack-tooling-2026",
  title: "Version Control & Package Management",
  estimatedWeeks: 2,
  totalXp: 600,
  
  modules: [
    {
      id: "git-github",
      title: "Git & GitHub",
      order: 1,
      xpReward: 400,
      lessons: [
        {
          id: "git-001",
          title: "Git Basics: Init, Add, Commit",
          type: "concept",
          duration: 20,
          xpReward: 50,
          content: {
            concepts: [
              {
                title: "Setting Up Git",
                codeSnippet: `# Initialize repository
git init

# Configure user
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Check status
git status

# Add files to staging
git add filename.txt
git add .  # Add all files

# Commit changes
git commit -m "Initial commit"`,
                keyPoints: [
                  "git init creates new repository",
                  "git add stages changes",
                  "git commit saves snapshot",
                  "Write meaningful commit messages"
                ]
              }
            ]
          }
        },
        {
          id: "git-002",
          title: "Branching & Merging",
          type: "concept",
          duration: 25,
          xpReward: 60,
          content: {
            concepts: [
              {
                title: "Working with Branches",
                codeSnippet: `# Create and switch to branch
git checkout -b feature/new-feature

# Or with newer Git
git switch -c feature/new-feature

# List branches
git branch

# Merge branch
git checkout main
git merge feature/new-feature

# Delete branch
git branch -d feature/new-feature`,
                keyPoints: [
                  "Branches allow parallel development",
                  "main/master is default branch",
                  "Feature branches for new features",
                  "Merge integrates changes"
                ]
              }
            ]
          }
        },
        {
          id: "git-003",
          title: "GitHub: Push, Pull, PRs",
          type: "concept",
          duration: 25,
          xpReward: 60,
          content: {
            concepts: [
              {
                title: "Remote Repositories",
                codeSnippet: `# Add remote
git remote add origin https://github.com/username/repo.git

# Push to remote
git push -u origin main

# Pull changes
git pull origin main

# Clone repository
git clone https://github.com/username/repo.git`,
                keyPoints: [
                  "origin is default remote name",
                  "push uploads commits",
                  "pull downloads and merges",
                  "clone copies entire repository"
                ]
              },
              {
                title: "Pull Requests",
                text: "Pull Requests (PRs) allow you to propose changes and get code review before merging.",
                keyPoints: [
                  "Create PR on GitHub from a branch",
                  "Add description of changes",
                  "Request review from teammates",
                  "Discuss and iterate before merging",
                  "Best practice for collaborative work"
                ]
              }
            ]
          }
        },
        {
          id: "git-004",
          title: "Checkpoint: Collaborative Project",
          type: "project",
          duration: 120,
          xpReward: 150,
          isBossBattle: true,
          content: {
            project: {
              title: "GitHub Collaboration Challenge",
              description: "Create a repository, make branches, and simulate team collaboration",
              requirements: [
                "Create a new GitHub repository",
                "Create a feature branch",
                "Make at least 3 commits",
                "Create a Pull Request",
                "Merge the PR to main",
                "Clone to a different folder and pull updates"
              ]
            }
          }
        }
      ]
    },
    
    {
      id: "npm-basics",
      title: "npm & Package Management",
      order: 2,
      xpReward: 200,
      lessons: [
        {
          id: "npm-001",
          title: "npm Basics: Install & Scripts",
          type: "concept",
          duration: 20,
          xpReward: 50,
          content: {
            concepts: [
              {
                title: "Package.json & Dependencies",
                codeSnippet: `# Initialize project
npm init -y

# Install packages
npm install lodash
npm install react --save

# Dev dependencies
npm install vite --save-dev

# Run scripts
npm run dev
npm run build
npm test`,
                keyPoints: [
                  "package.json lists dependencies",
                  "dependencies for production",
                  "devDependencies for development",
                  "scripts automate common tasks"
                ]
              }
            ]
          }
        },
        {
          id: "npm-002",
          title: "Checkpoint: External Packages",
          type: "project",
          duration: 60,
          xpReward: 100,
          isBossBattle: true,
          content: {
            project: {
              title: "Build with npm Packages",
              description: "Create a project using at least 3 external npm packages",
              requirements: [
                "Initialize npm project",
                "Install 3+ packages (e.g., lodash, axios, dayjs)",
                "Use all packages in your code",
                "Add custom npm scripts",
                "Push to GitHub"
              ]
            }
          }
        }
      ]
    }
  ]
};
