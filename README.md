
![Banner](src/assets/banner.png)

# 🎵 SoundCloud Desktop App

A simple Electron-based desktop application to run [SoundCloud](https://soundcloud.com) as a standalone app with cookie saving and native app feel on macOS and Windows.

---

## ⚙️ Features

- Runs SoundCloud inside a native desktop window
- Automatically saves and loads cookies (so you stay logged in)
- macOS dock and menu icon support
- Buildable for macOS `.dmg` and Windows `.exe`
- Minimal interface – no annoying cookie banners

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourname/soundcloud-app.git
cd soundcloud-app
```
### 2. Install dependencies

```bash
npm install
```

### 3. Start the app

```bash
npm start
```

## 📦 Build
### Build for macOS

```bash
npm run dist
```
### And

```bash
electron-builder -mw
```

``P.S Install global electron-builder``
```bash
npm install -g electron-builder
```

`You’ll get a .dmg file in the dist/ folder.`

### Build for Windows

```bash
npm run dist
```
### And

```bash
electron-builder -mw
```
`You’ll get a .exe file in the dist/ folder.`

