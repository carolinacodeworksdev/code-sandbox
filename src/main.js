import './style.css';

const app = document.querySelector('#app');

const starterCode = `// Welcome to JavaScript Sandbox by Carolina Codeworks
// Try editing this code. The output updates live.

const name = "Brian";
console.log("Hello, " + name + "!");

for (let i = 1; i <= 3; i++) {
  console.log("Count:", i);
}`;

app.innerHTML = `
  <header class="app-header">
    <div>
      <h1>JavaScript Sandbox by Carolina Codeworks <span>v1.0.0</span></h1>
      <p>A lightweight practice tool for beginner JavaScript developers.</p>
    </div>
    <div class="header-actions">
      <button id="runBtn">Run</button>
      <button id="clearBtn" class="secondary">Clear</button>
      <button id="resetBtn" class="secondary">Reset</button>
    </div>
  </header>

  <main class="layout">
    <section class="panel editor-panel">
      <div class="panel-title">JavaScript</div>
      <textarea id="codeInput" spellcheck="false"></textarea>
    </section>

    <section class="panel output-panel">
      <div class="panel-title">Output Log</div>
      <pre id="outputLog"></pre>
    </section>
  </main>

  <aside class="settings">
    <h2>Settings</h2>
    <label>
      Theme
      <select id="themeSelect">
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="blue">Blue</option>
      </select>
    </label>

    <label>
      Font Color
      <input id="fontColor" type="color" value="#e5e7eb" />
    </label>

    <label>
      Font Style
      <select id="fontFamily">
        <option value="monospace">Monospace</option>
        <option value="Arial, sans-serif">Arial</option>
        <option value="Georgia, serif">Georgia</option>
        <option value="Verdana, sans-serif">Verdana</option>
      </select>
    </label>

    <label>
      Font Size
      <input id="fontSize" type="range" min="12" max="24" value="16" />
      <span id="fontSizeLabel">16px</span>
    </label>

    <label class="checkbox-row">
      <input id="autoRun" type="checkbox" checked />
      Live update
    </label>
  </aside>
`;

const codeInput = document.querySelector('#codeInput');
const outputLog = document.querySelector('#outputLog');
const runBtn = document.querySelector('#runBtn');
const clearBtn = document.querySelector('#clearBtn');
const resetBtn = document.querySelector('#resetBtn');
const themeSelect = document.querySelector('#themeSelect');
const fontColor = document.querySelector('#fontColor');
const fontFamily = document.querySelector('#fontFamily');
const fontSize = document.querySelector('#fontSize');
const fontSizeLabel = document.querySelector('#fontSizeLabel');
const autoRun = document.querySelector('#autoRun');

codeInput.value = localStorage.getItem('sandbox-code') || starterCode;
themeSelect.value = localStorage.getItem('sandbox-theme') || 'dark';
fontColor.value = localStorage.getItem('sandbox-font-color') || '#e5e7eb';
fontFamily.value = localStorage.getItem('sandbox-font-family') || 'monospace';
fontSize.value = localStorage.getItem('sandbox-font-size') || '16';
autoRun.checked = localStorage.getItem('sandbox-auto-run') !== 'false';

function applySettings() {
  document.body.dataset.theme = themeSelect.value;
  codeInput.style.color = fontColor.value;
  outputLog.style.color = fontColor.value;
  codeInput.style.fontFamily = fontFamily.value;
  outputLog.style.fontFamily = fontFamily.value;
  codeInput.style.fontSize = `${fontSize.value}px`;
  outputLog.style.fontSize = `${fontSize.value}px`;
  fontSizeLabel.textContent = `${fontSize.value}px`;

  localStorage.setItem('sandbox-theme', themeSelect.value);
  localStorage.setItem('sandbox-font-color', fontColor.value);
  localStorage.setItem('sandbox-font-family', fontFamily.value);
  localStorage.setItem('sandbox-font-size', fontSize.value);
  localStorage.setItem('sandbox-auto-run', String(autoRun.checked));
}

function writeOutput(value) {
  const text = value.map(item => {
    if (typeof item === 'object') {
      try {
        return JSON.stringify(item, null, 2);
      } catch {
        return String(item);
      }
    }
    return String(item);
  }).join(' ');

  outputLog.textContent += `${text}\n`;
}

function runCode() {
  outputLog.textContent = '';
  localStorage.setItem('sandbox-code', codeInput.value);

  const sandboxConsole = {
    log: (...args) => writeOutput(args),
    warn: (...args) => writeOutput(['Warning:', ...args]),
    error: (...args) => writeOutput(['Error:', ...args])
  };

  try {
    const execute = new Function('console', codeInput.value);
    execute(sandboxConsole);
  } catch (error) {
    writeOutput([`${error.name}: ${error.message}`]);
  }
}

function debounce(callback, delay = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
}

const liveRun = debounce(() => {
  if (autoRun.checked) runCode();
}, 500);

codeInput.addEventListener('input', liveRun);
runBtn.addEventListener('click', runCode);
clearBtn.addEventListener('click', () => outputLog.textContent = '');
resetBtn.addEventListener('click', () => {
  codeInput.value = starterCode;
  runCode();
});

[themeSelect, fontColor, fontFamily, fontSize, autoRun].forEach(control => {
  control.addEventListener('input', applySettings);
  control.addEventListener('change', applySettings);
});

applySettings();
runCode();
