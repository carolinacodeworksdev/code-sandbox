# ⬡ JS Sandbox

**A free, lightweight JavaScript scratchpad for your desktop.**  
Write code, see results instantly — no browser tabs, no setup, no fluff.

Made with ♥ by **[Carolina Codeworks](https://github.com/carolinacodeworks)**

---

## Features

- ✅ Syntax-highlighted editor with One Dark theme
- ✅ Full console output — `log`, `warn`, `error`, `info` all captured
- ✅ Objects and arrays pretty-printed
- ✅ Multiple tabs
- ✅ Resizable editor / console split pane
- ✅ Timestamps on every log entry
- ✅ Word wrap toggle
- ✅ Auto-scroll toggle
- ✅ 100% free, no license key, no account required

---

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+Enter` | Run code |
| `Ctrl+/` | Toggle comment on selected line(s) |
| `Tab` | Indent (2 spaces) |

---

## Installation

### 🐧 Linux (Ubuntu, Debian, Mint, Fedora, and most others)

**Prerequisites:** Node.js v18 or higher.

Check if you have it:
```bash
node --version
```

If not, install it:
```bash
# Ubuntu / Debian / Mint
sudo apt install nodejs npm

# Fedora
sudo dnf install nodejs
```

**Install JS Sandbox:**
```bash
unzip jssandbox.zip
cd jssandbox
chmod +x install.sh
./install.sh
```

The installer will:
- Install Electron automatically (one-time, ~100MB)
- Add `jssandbox` as a terminal command
- Add **JS Sandbox** to your application launcher/menu

**Launch it:**
```bash
jssandbox
```
Or search **"JS Sandbox"** in your app menu and pin it to your dock.

> **Note for Linux users:** If you see a sandbox permission error mentioning `chrome-sandbox`, don't worry — this app already handles that automatically.

---

### 🪟 Windows

**Prerequisites:** Node.js v18 or higher — download from [nodejs.org](https://nodejs.org).

1. Extract `jssandbox.zip` to a folder of your choice (e.g. `C:\Tools\jssandbox`)
2. Open that folder in **File Explorer**
3. Hold `Shift`, right-click an empty area, and choose **"Open PowerShell window here"**
4. Run:

```powershell
npm install
npx electron .
```

**To create a desktop shortcut:**
- Right-click your desktop → New → Shortcut
- For the location, enter:
  ```
  cmd /c "cd /d C:\Tools\jssandbox && npx electron ."
  ```
  *(adjust the path to where you extracted the zip)*
- Name it **JS Sandbox** and you're done

---

### 🍎 macOS

**Prerequisites:** Node.js v18 or higher — download from [nodejs.org](https://nodejs.org) or install via Homebrew:
```bash
brew install node
```

**Install JS Sandbox:**
```bash
unzip jssandbox.zip
cd jssandbox
npm install
npx electron .
```

**To launch it easily in future:**
Add an alias to your `~/.zshrc` or `~/.bash_profile`:
```bash
echo 'alias jssandbox="cd ~/path/to/jssandbox && npx electron ."' >> ~/.zshrc
source ~/.zshrc
```
Then just type `jssandbox` in any terminal.

---

## Uninstall

### Linux
```bash
rm -rf ~/.local/share/jssandbox
rm ~/.local/bin/jssandbox
rm ~/.local/share/applications/jssandbox.desktop
```

### Windows / macOS
Delete the folder you extracted the zip into. That's it — nothing is written to your system.

---

## About

JS Sandbox is a free tool built and released by **Carolina Codeworks**.  
We build practical tools for developers. This one's on us.

---

## License

MIT — free to use, share, and modify. Attribution appreciated but not required.

---

*Carolina Codeworks — building things that work.*
