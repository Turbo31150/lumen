<div align="center">

  <h1>Lumen</h1>
  <p><strong>Multilingual Live AI Web Application</strong></p>

  <br/>

  [![License: MIT](https://img.shields.io/badge/License-MIT-06B6D4?style=flat-square)](LICENSE)
  [![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org)
  [![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
  [![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
  [![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)](#)
  [![JARVIS](https://img.shields.io/badge/JARVIS-Ecosystem-8B5CF6?style=flat-square)](https://github.com/Turbo31150/jarvis-linux)
  [![CI](https://github.com/Turbo31150/lumen/actions/workflows/ci.yml/badge.svg)](https://github.com/Turbo31150/lumen/actions/workflows/ci.yml)

  <br/><br/>
  <p><em>A React 19 web app designed to work in tandem with the JARVIS local AI cluster — centralizing everything a professional or learner needs to work in any language, in real time.</em></p>
</div>

---

## Overview

**Lumen** bridges the gap between humans and languages. It captures your microphone input, transcribes it live with Whisper large-v3, translates it across languages in real-time, applies contextual grammar corrections, and speaks the result back — all in a single responsive interface.

Built for the **JARVIS** cluster, it leverages local AI inference for privacy and speed.

---

## Features

| Feature | Description |
|---------|-------------|
| **Live Transcription** | Mic capture with WhisperFlow (Whisper large-v3) — low-latency streaming |
| **Simultaneous Translation** | Multi-language real-time translation powered by JARVIS AI models |
| **Grammar Correction** | Contextual AI-powered grammar and style suggestions |
| **Voice Synthesis** | High-fidelity TTS via Piper — natural-sounding output |
| **Responsive UI** | Modern React 19 interface — works on desktop, tablet, and mobile |
| **WebSocket Streaming** | Real-time bidirectional communication for instant feedback |
| **Docker Deployment** | One-command deployment with docker-compose |

---

## Tech Stack

```
┌─────────────────────────────────────────────────────┐
│  Frontend                                           │
│  ├── React 19 + Vite 5 (fast HMR)                  │
│  ├── TailwindCSS 3 (utility-first styling)          │
│  └── WebSocket client (real-time streams)           │
├─────────────────────────────────────────────────────┤
│  Backend                                            │
│  ├── Node.js + Express                              │
│  ├── WebSocket server (bidirectional audio/text)    │
│  └── REST API for config and session management     │
├─────────────────────────────────────────────────────┤
│  AI Layer (JARVIS Cluster)                          │
│  ├── WhisperFlow — live transcription (large-v3)    │
│  ├── Translation models — multi-language            │
│  ├── Grammar models — contextual correction         │
│  └── Piper TTS — high-fidelity voice synthesis      │
├─────────────────────────────────────────────────────┤
│  Infrastructure                                     │
│  ├── Docker + docker-compose                        │
│  └── JARVIS cluster integration                     │
└─────────────────────────────────────────────────────┘
```

---

## Quick Start

### With Docker (recommended)

```bash
git clone https://github.com/Turbo31150/lumen.git
cd lumen
docker-compose up -d
```

Open [http://localhost:3000](http://localhost:3000).

### Manual Setup

```bash
git clone https://github.com/Turbo31150/lumen.git
cd lumen
npm install
npm run dev
```

> Requires a running JARVIS cluster for AI features (transcription, translation, TTS).

---

## Interface

The Lumen interface provides a clean, single-page experience:

- **Microphone panel** — tap to record, see live waveform
- **Transcription feed** — real-time text as you speak
- **Translation output** — select target language, see instant results
- **Grammar overlay** — corrections highlighted inline
- **Audio playback** — listen to the translated/corrected output

---

## JARVIS Ecosystem

Lumen is part of the **JARVIS** distributed AI cluster:

- [jarvis-linux](https://github.com/Turbo31150/jarvis-linux) — Distributed Autonomous AI Cluster
- [TradeOracle](https://github.com/Turbo31150/TradeOracle) — Autonomous Crypto Trading Agent
- **lumen** — Multilingual Live AI Web App *(this repo)*
- [gemini-live-trading-agent](https://github.com/Turbo31150/gemini-live-trading-agent) — Voice Trading Assistant
- [gemini-creative-storyteller](https://github.com/Turbo31150/gemini-creative-storyteller) — Interactive AI Storyteller

---

## License

MIT © 2026 [Turbo31150](https://github.com/Turbo31150) — Franck Delmas

> Freelance profile: [codeur.com/-6666zlkh](https://www.codeur.com/-6666zlkh)
