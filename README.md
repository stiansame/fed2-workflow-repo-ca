# Workflow repo for the CA

## Tools & Tech

- [x] **Tailwind CSS** - A utility-first CSS framework for quickly building modern, consistent UIs.
- [x] **ESLint** -  A configurable linting tool that enforces JavaScript and TypeScript code quality.
- [x] **Prettier** - An opinionated formatter that ensures consistent code style automatically.
- [x] **Husky** - A tool for managing Git hooks to automate checks during the commit process.
- [x] **VITE** - A fast frontend build tool with an efficient dev server and optimized builds.
- [x] **Vitest** - A lightweight, fast testing framework designed for Vite projects.
- [x] **Playwright** - A cross-browser automation framework for reliable end-to-end testing.
- [x] **JSDOM** - A JavaScript implementation of the DOM for testing without a real browser.
- [x] **Live-Server** - A simple development server with automatic browser reloads.

<sub>Live-server is not needed, but included for ease of use when running playwright</sub>

## Installation

### ✅ Prerequisites

Ensure you have the following installed:
- **Node.js**
- **npm, pnpm or yarn**

Verify installation:
```
node -v
npm -v
```

### 📥Get the repository

**CLONE**
```
git clone https://github.com/stiansame/fed2-workflow-repo-ca.git
```

**Or Download ZIP**
1. Open the repo on GitHub
2. Click Code → Download ZIP
3. Extract and open the folder in your editor

**or Fork**
1. Click Fork in the GitHub UI
2. Clone your fork locally

## Commands & Useage

### 🎨Tailwind CSS

- Tailwind is configured via `tailwind.config.js`.
- To build yoyr css, run:
  ```
  npm run dev
  ```

### 🔍ESLint

- To lint your code, you can run:
  ```
  npx eslint .
  ```
- ESLint will check your JS files for issues and suggest fixes

### ✨Prettier

- To format your code, run:
  ```
  npx prettier --write .
  ```
- Prettier will format your feiles automatically for a consitent style
- You can configure prettier in the prettier config.file `prettierrc`
- See [https://prettier.io/docs/configuration](https://prettier.io/docs/configuration) for instructions and usage

### 🧩Husky

- Husky is used for Git hooks (e.g., pre-commit).
- Hooks are configured in the `.husky` directory.
- Husky will automatically run checks (like linting or formatting) before commits.

### 🧪VITE + VITEST

- To run VITE, use:
  ```
  npm run vite
  ```
- to runtests using Vitest, use:
  ```
  npm run vitest
   ```
- Add all your own tests using Vitest conventions (eg. `*test.js`)


### 🧭Playwright

### 🌐 Live-server (Static server)
