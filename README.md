# 🏰 Shakespearean Insult Forge & Elizabethan Roast Master

A high-performance, ultra-lightweight static web application to generate, customize, lock, save, and export Shakespearean insults. Built with **Preact 10** and **Vite 6**.

---

## ✨ Features

- **🎭 3 Intensity Modes**:
  - **Mild**: Light Elizabethan ribbing (*"Thou artless, base-court apple-john!"*)
  - **Savage**: Sharp Elizabethan jabs (*"Fie! Thou churlish, beetle-headed bladder!"*)
  - **Lethal**: Full-blown Bard vituperation (*"Out! Thou most accursed craven, boil-brained canker-blossom!"*)
- **🔒 Word Locking**: Click any individual word to lock it while generating new combinations for the remaining slots.
- **📖 Instant Definitions**: Hover or tap any vocabulary chip to open word definitions, grammatical types, and Elizabethan contexts.
- **📸 PNG Card Exporter**: Generate and download formatted, shareable 1200x630 social media image cards via HTML5 Canvas.
- **💾 Saved Insults**: Save your favorite insults to persistent `localStorage` with quick copy and management tools.
- **🌙 Dark Mode Theme**: Toggle between light and dark mode with persistent user preferences.
- **⚡ 100% Static & Lightweight**: Entire JavaScript runtime + dataset + UI is under **13 kB gzipped**.

---

## 🛠️ Technology Stack

- **Core UI Framework**: [Preact](https://preactjs.com/) (3 KB React alternative)
- **Build Tool & Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS with modern CSS Custom Properties & responsive design tokens
- **Local Server**: Pure Node.js `http` module (zero external runtime server dependencies)

---

## 📂 Project Structure

```
shakesphere-insult/
├── index.html              # HTML entry point
├── package.json            # Project dependencies and npm scripts
├── vite.config.js          # Vite build configuration
├── server.js               # Lightweight Node.js static file server
├── src/
│   ├── main.jsx            # Preact application entry point
│   ├── app.jsx             # Main Application root component
│   ├── index.css           # Global CSS design tokens & component styles
│   ├── components/         # Modular Preact UI components
│   │   ├── Header.jsx      # Title & dark mode toggle
│   │   ├── Controls.jsx    # Target name & intensity selector
│   │   ├── InsultCard.jsx  # Main insult display & word locking buttons
│   │   ├── Actions.jsx     # Action triggers (Generate, Copy, Save, Download)
│   │   ├── FavoritesPanel.jsx # Saved insults drawer
│   │   └── DefinitionModal.jsx # Vocabulary definition dialog
│   ├── hooks/              # Custom reactive hooks
│   │   ├── useTheme.js     # Dark mode state & DOM sync
│   │   └── useFavorites.js # Saved insults state & LocalStorage sync
│   ├── data/
│   │   └── words.js        # Shakespearean dictionary & intensity rules
│   └── utils/
│       └── canvasExport.js # HTML5 Canvas PNG card exporter
└── dist/                   # Production build output directory
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

---

## 💻 Running & Building

### 1. Development Mode

Runs Vite development server with Instant Hot Module Replacement (HMR):

```bash
npm run dev
```
> Opens dev server at `http://localhost:5173/` by default.

### 2. Production Build

Compiles and optimizes the static bundle into the `dist/` directory:

```bash
npm run build
```

### 3. Production Node Server (Port 9002)

Serves the production build from `dist/` using the included lightweight Node.js server:

```bash
npm start
```

---

## 🔌 Port Information & Environment Variables

| Property | Default Value | Description |
| :--- | :--- | :--- |
| **Default Port** | `9002` | Port used by `npm start` / `node server.js` |
| **URL** | `http://localhost:9002` | Default local access address |

### Changing the Port

You can specify a custom port using the `PORT` environment variable:

```bash
PORT=8080 npm start
```
Or:
```bash
PORT=3000 node server.js
```

---

## 🌐 Static Hosting & Deployment

Because this app builds into pure static HTML/CSS/JS, the `dist/` directory can be deployed directly to any static host without Node.js:

- **GitHub Pages**: Set build command to `npm run build` and publish directory to `dist`.
- **Netlify / Vercel**: Set publish directory to `dist`.
- **Cloudflare Pages / AWS S3**: Deploy `dist/` directly.

---

## 🛠️ Codebase Maintenance Guidelines

1. **Adding New Words**:
   Edit `src/data/words.js` and append new items to `col1Words`, `col2Words`, or `col3Words`, then categorize them in `mildWords` or `lethalWords` Sets.
2. **Modifying Styles**:
   Edit `src/index.css` to update color tokens (`--accent`, `--mild`, `--savage`, `--lethal`, etc.).
3. **Updating PNG Export Layout**:
   Modify `src/utils/canvasExport.js` to change font sizes, line heights, or colors on downloaded insult cards.

---

## 📄 License

ISC License
