// Data is embedded here for file:// compatibility.
// In a later phase, replace with fetch('data/scenarios.json') when running a local server.

const SCENARIOS = [
  {
    id: 1,
    text: "[PLACEHOLDER] A new company policy requires all employees to attend weekly 3-hour all-hands meetings. Your already stretched team is pushing back hard."
  },
  {
    id: 2,
    text: "[PLACEHOLDER] The quarterly budget was cut by 20%. You must decide how to allocate reduced resources across your department before Friday."
  },
  {
    id: 3,
    text: "[PLACEHOLDER] A top-performing employee has asked for a promotion, but there is no budget approved for raises this quarter."
  }
];

const QUESTIONS = [
  {
    id: 1,
    text: "[PLACEHOLDER] What is the primary purpose of a formal performance review?"
  },
  {
    id: 2,
    text: "[PLACEHOLDER] Which leadership style tends to be most effective during an organizational crisis?"
  },
  {
    id: 3,
    text: "[PLACEHOLDER] How should a manager handle an interpersonal conflict between two direct reports?"
  }
];

const COLORS = ["red", "blue", "green", "yellow", "purple"];
const MAX_ROUNDS = 10;

const state = {
  players: [],
  currentPlayerIndex: 0,
  currentRound: 1
};

// ─── Setup ───────────────────────────────────────────────────────────────────

function initSetup() {
  addPlayerRow();
  addPlayerRow();

  document.getElementById("add-player-btn").addEventListener("click", () => {
    addPlayerRow();
  });

  document.getElementById("start-game-btn").addEventListener("click", startGame);
}

function addPlayerRow() {
  const container = document.getElementById("player-inputs");
  const index = container.querySelectorAll(".player-row").length;
  if (index >= 5) return;

  const div = document.createElement("div");
  div.className = "player-row";
  div.innerHTML = `
    <label>Player ${index + 1}:</label>
    <input type="text" class="player-name" placeholder="Enter name" maxlength="20">
    <select class="player-color">
      ${COLORS.map((c, i) => `<option value="${c}" ${i === index ? "selected" : ""}>${c[0].toUpperCase() + c.slice(1)}</option>`).join("")}
    </select>
  `;
  container.appendChild(div);

  const addBtn = document.getElementById("add-player-btn");
  addBtn.disabled = container.querySelectorAll(".player-row").length >= 5;
}

function startGame() {
  const rows = document.querySelectorAll(".player-row");
  const errorEl = document.getElementById("setup-error");
  errorEl.textContent = "";

  const players = [];
  const usedColors = new Set();

  for (let i = 0; i < rows.length; i++) {
    const name = rows[i].querySelector(".player-name").value.trim();
    const color = rows[i].querySelector(".player-color").value;

    if (!name) {
      errorEl.textContent = `Player ${i + 1} needs a name.`;
      return;
    }
    if (usedColors.has(color)) {
      errorEl.textContent = `Two players can't share the same color. Check Player ${i + 1}.`;
      return;
    }
    usedColors.add(color);
    players.push({
      name,
      color,
      stats: { Morale: 5, Productivity: 5, Performance: 5 }
    });
  }

  state.players = players;
  state.currentPlayerIndex = 0;
  state.currentRound = 1;

  showScreen("game");
  renderGameScreen();
}

// ─── Game Screen ──────────────────────────────────────────────────────────────

function renderGameScreen() {
  const player = state.players[state.currentPlayerIndex];

  document.getElementById("round-display").textContent =
    `Round ${state.currentRound} / ${MAX_ROUNDS}`;
  document.getElementById("turn-display").textContent = `${player.name}'s Turn`;
  document.getElementById("turn-display").style.color = player.color;

  renderStats();

  document.getElementById("draw-scenario-btn").style.display = "inline-block";
  document.getElementById("scenario-display").style.display = "none";
}

function renderStats() {
  const panel = document.getElementById("stats-panel");
  panel.innerHTML = state.players.map(p => `
    <div class="player-stat-card" style="border-color: ${p.color}">
      <strong style="color: ${p.color}">${p.name}</strong>
      <span>Morale: ${p.stats.Morale}</span>
      <span>Productivity: ${p.stats.Productivity}</span>
      <span>Performance: ${p.stats.Performance}</span>
    </div>
  `).join("");
}

function drawScenario() {
  const scenario = SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
  document.getElementById("scenario-text").textContent = scenario.text;
  document.getElementById("draw-scenario-btn").style.display = "none";
  document.getElementById("scenario-display").style.display = "block";
}

function handleResponse(choice) {
  const player = state.players[state.currentPlayerIndex];
  console.log(`[Performance Review] Round ${state.currentRound} | ${player.name} chose: ${choice}`);
  advanceTurn();
}

function advanceTurn() {
  state.currentPlayerIndex++;

  if (state.currentPlayerIndex >= state.players.length) {
    state.currentPlayerIndex = 0;
    state.currentRound++;
  }

  if (state.currentRound > MAX_ROUNDS) {
    showGameOver();
  } else {
    renderGameScreen();
  }
}

// ─── Game Over ────────────────────────────────────────────────────────────────

function showGameOver() {
  showScreen("gameover");
  document.getElementById("final-stats").innerHTML = state.players.map(p => `
    <div class="player-stat-card" style="border-color: ${p.color}">
      <strong style="color: ${p.color}">${p.name}</strong>
      <span>Morale: ${p.stats.Morale}</span>
      <span>Productivity: ${p.stats.Productivity}</span>
      <span>Performance: ${p.stats.Performance}</span>
    </div>
  `).join("");
}

// ─── Utilities ────────────────────────────────────────────────────────────────

function showScreen(name) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(`screen-${name}`).classList.add("active");
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  initSetup();

  document.getElementById("draw-scenario-btn").addEventListener("click", drawScenario);

  document.querySelectorAll(".response-btn").forEach(btn => {
    btn.addEventListener("click", () => handleResponse(btn.dataset.choice));
  });
});
