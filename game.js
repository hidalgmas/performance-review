// Data is embedded here for file:// compatibility.
// In a later phase, replace with fetch() calls when running a local server.

const SCENARIOS = [
  {
    id: "s001",
    text: "[PLACEHOLDER] A new company policy requires all employees to attend weekly 3-hour all-hands meetings. Your already stretched team is pushing back hard.",
    responses: {
      safe:      { label: "Agree to the policy and communicate it to your team", primaryStat: "morale" },
      knowledge: { label: "Request data on the policy's impact before deciding", primaryStat: "productivity", secondaryStat: "performance" },
      bold:      { label: "Push back directly to leadership and propose an alternative", primaryStat: "performance" }
    }
  },
  {
    id: "s002",
    text: "[PLACEHOLDER] The quarterly budget was cut by 20%. You must decide how to allocate reduced resources across your department before Friday.",
    responses: {
      safe:      { label: "Spread cuts evenly across all projects", primaryStat: "productivity" },
      knowledge: { label: "Analyze project ROI before reallocating budget", primaryStat: "performance", secondaryStat: "morale" },
      bold:      { label: "Eliminate low-impact projects entirely to protect top priorities", primaryStat: "productivity" }
    }
  },
  {
    id: "s003",
    text: "[PLACEHOLDER] A top-performing employee has asked for a promotion, but there is no budget approved for raises this quarter.",
    responses: {
      safe:      { label: "Explain the budget situation and promise to revisit next quarter", primaryStat: "morale" },
      knowledge: { label: "Research what non-monetary recognition options are available", primaryStat: "morale", secondaryStat: "productivity" },
      bold:      { label: "Go to bat with HR to create a special exception for this employee", primaryStat: "performance" }
    }
  }
];

const QUESTIONS = [
  {
    id: "q001", difficulty: "standard", topic: "feedback",
    text: "[PLACEHOLDER] What is the primary purpose of a formal performance review?",
    choices: [
      "To document employee shortcomings for legal protection",
      "To align individual goals with organizational objectives",
      "To determine whether to terminate underperformers",
      "To compare employees against each other for ranking"
    ],
    correctIndex: 1
  },
  {
    id: "q002", difficulty: "standard", topic: "communication",
    text: "[PLACEHOLDER] When delivering critical feedback, which approach is generally most effective?",
    choices: [
      "Deliver feedback publicly to motivate the whole team",
      "Wait until the annual review to avoid disrupting workflow",
      "Provide specific, timely, and private feedback with actionable steps",
      "Frame all feedback as praise to maintain morale"
    ],
    correctIndex: 2
  },
  {
    id: "q003", difficulty: "standard", topic: "conflict",
    text: "[PLACEHOLDER] How should a manager handle an interpersonal conflict between two direct reports?",
    choices: [
      "Let them resolve it themselves without management involvement",
      "Immediately separate the two employees into different teams",
      "Take sides with the higher-performing employee",
      "Facilitate a structured conversation focused on work impact"
    ],
    correctIndex: 3
  },
  {
    id: "q004", difficulty: "bold", topic: "strategy",
    text: "[PLACEHOLDER] A competitor just released a product that undercuts your team's current project. What is the most strategically sound response?",
    choices: [
      "Immediately cancel your project to avoid competing",
      "Ignore the competitor and proceed with the original plan",
      "Assess differentiation opportunities and pivot scope if justified",
      "Match the competitor's price point regardless of margin impact"
    ],
    correctIndex: 2
  },
  {
    id: "q005", difficulty: "bold", topic: "retention",
    text: "[PLACEHOLDER] Your highest performer tells you they are actively interviewing elsewhere. You cannot offer a raise. What is the boldest and most effective move?",
    choices: [
      "Accept their departure and begin succession planning immediately",
      "Threaten to downgrade their role if they leave",
      "Offer expanded responsibilities and increased visibility to leadership",
      "Immediately escalate to HR and freeze the situation"
    ],
    correctIndex: 2
  },
  {
    id: "q006", difficulty: "bold", topic: "operations",
    text: "[PLACEHOLDER] Your team consistently misses deadlines despite working long hours. What is the root cause you should investigate first?",
    choices: [
      "Individual performance issues requiring performance plans",
      "Scope creep and unclear prioritization of work",
      "Team morale problems due to poor management style",
      "Insufficient headcount that requires immediate hiring"
    ],
    correctIndex: 1
  }
];

// Mirrored from data/events.json for file:// compatibility
const EVENTS = [
  {
    id: "e001",
    title: "Merger Announced",
    description: "All players lose 1 Morale as uncertainty spreads through the organization.",
    effect: { type: "all_players", stat: "morale", change: -1 }
  },
  {
    id: "e002",
    title: "Employee of the Quarter",
    description: "The current top performer earns a bonus recognition — +1 Performance.",
    effect: { type: "leader_only", stat: "performance", change: 1 }
  },
  {
    id: "e003",
    title: "Underdog Spotlight",
    description: "The player falling furthest behind gets a morale boost to help them catch up.",
    effect: { type: "lowest_only", stat: "morale", change: 2 }
  },
  {
    id: "e004",
    title: "Mandatory Compliance Training",
    description: "Everyone except the top performer loses 1 Productivity from the all-day training session.",
    effect: { type: "all_except_leader", stat: "productivity", change: -1 }
  },
  {
    id: "e005",
    title: "Budget Surplus",
    description: "A surprise windfall at the end of the fiscal quarter — all players gain 1 Productivity.",
    effect: { type: "all_players", stat: "productivity", change: 1 }
  }
];

const COLORS = ["red", "blue", "green", "yellow", "purple"];
const MAX_ROUNDS = 10;
const EVENT_ROUNDS = new Set([4, 7, 10]);

// ─── Audit configuration — tune during playtesting ────────────────────────────
// Audits are "use it or lose it" — they RESET (not accumulate) on reset rounds.
// AUDIT_INITIAL_COUNT — audits each player starts with at game start
// AUDIT_RESET_ROUNDS  — rounds where every player's audit count is RESET to
//                       AUDIT_RESET_VALUE, overwriting whatever they had
//                       (use an empty array [] for no resets)
// AUDIT_RESET_VALUE   — what audit count gets set to on a reset round
//
// Examples:
//   1 audit, no reset:              AUDIT_INITIAL_COUNT = 1, AUDIT_RESET_ROUNDS = []
//   1 per half, midpoint reset:     AUDIT_INITIAL_COUNT = 1, AUDIT_RESET_ROUNDS = [6],      AUDIT_RESET_VALUE = 1
//   Reset every 3 rounds:           AUDIT_INITIAL_COUNT = 1, AUDIT_RESET_ROUNDS = [4, 7, 10], AUDIT_RESET_VALUE = 1
//   More aggressive (2 per window): AUDIT_INITIAL_COUNT = 2, AUDIT_RESET_ROUNDS = [6],      AUDIT_RESET_VALUE = 2
const AUDIT_INITIAL_COUNT = 1;
const AUDIT_RESET_ROUNDS  = [6];  // audit count is reset to AUDIT_RESET_VALUE at the start of round 6
const AUDIT_RESET_VALUE   = 1;    // value players are reset to on each reset round

const state = {
  players: [],
  currentPlayerIndex: 0,
  currentRound: 1,
  currentScenario: null,
  usedQuestionIds: new Set(),
  usedEventIds: new Set(),
  auditContext: null,
  modalTimer: null
};

// ─── Setup ───────────────────────────────────────────────────────────────────

function initSetup() {
  addPlayerRow();
  addPlayerRow();
  document.getElementById("add-player-btn").addEventListener("click", addPlayerRow);
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
  div.querySelector('.player-name').addEventListener('input', function() {
    const pos = this.selectionStart;
    this.value = this.value.toUpperCase();
    this.setSelectionRange(pos, pos);
  });
  document.getElementById("add-player-btn").disabled = container.querySelectorAll(".player-row").length >= 5;
}

function startGame() {
  const rows = document.querySelectorAll(".player-row");
  const errorEl = document.getElementById("setup-error");
  errorEl.textContent = "";

  const players = [];
  const usedColors = new Set();

  for (let i = 0; i < rows.length; i++) {
    const name = rows[i].querySelector(".player-name").value.trim().toUpperCase();
    const color = rows[i].querySelector(".player-color").value;
    if (!name) { errorEl.textContent = `Player ${i + 1} needs a name.`; return; }
    if (usedColors.has(color)) { errorEl.textContent = `Two players can't share the same color. Check Player ${i + 1}.`; return; }
    usedColors.add(color);
    players.push({
      name,
      color,
      stats: { Morale: 5, Productivity: 5, Performance: 5 },
      auditsRemaining: AUDIT_INITIAL_COUNT
    });
  }

  state.players = players;
  state.currentPlayerIndex = 0;
  state.currentRound = 1;
  state.usedQuestionIds = new Set();
  state.usedEventIds = new Set();
  state.auditContext = null;

  showScreen("game");
  renderGameScreen();
}

function playAgain() {
  state.players = [];
  state.currentPlayerIndex = 0;
  state.currentRound = 1;
  state.currentScenario = null;
  state.usedQuestionIds = new Set();
  state.usedEventIds = new Set();
  state.auditContext = null;

  const container = document.getElementById("player-inputs");
  container.innerHTML = "";
  document.getElementById("add-player-btn").disabled = false;
  document.getElementById("setup-error").textContent = "";
  addPlayerRow();
  addPlayerRow();

  showScreen("setup");
}

// ─── Game Screen ──────────────────────────────────────────────────────────────

function renderGameScreen(floatTargets = []) {
  const player = state.players[state.currentPlayerIndex];
  document.getElementById("round-display").textContent = `Round ${state.currentRound} / ${MAX_ROUNDS}`;
  document.getElementById("turn-display").textContent = `${player.name}'s Turn`;
  document.getElementById("turn-display").style.color = player.color;

  renderStats(floatTargets);

  const auditBtn = document.getElementById("audit-btn");
  const auditCount = player.auditsRemaining;
  auditBtn.textContent = auditCount === 0 ? "AUDIT (USED)" : `AUDIT (${auditCount} LEFT)`;
  auditBtn.disabled = auditCount === 0;

  document.getElementById("action-buttons").style.display = "flex";
  document.getElementById("scenario-display").style.display = "none";
}

function renderStats(floatTargets = []) {
  const panel = document.getElementById("stats-panel");
  panel.dataset.playerCount = state.players.length;

  panel.innerHTML = state.players.map((p, idx) => {
    const isActive = idx === state.currentPlayerIndex;
    return `
    <div class="player-stat-card${isActive ? " active-player" : ""}">
      <div class="crt-bezel">
        <div class="crt-bezel-top">
          <div class="crt-power-led" style="background:${displayColor(p.color)}"></div>
        </div>
        <div class="crt-screen">
          <span class="player-name-label" style="color:${displayColor(p.color)}">${p.name}</span>
          ${Object.entries(p.stats).map(([k, v]) => {
            const ft = floatTargets.find(f => f.playerIdx === idx && f.stat === k);
            const flashClass = ft ? (ft.delta > 0 ? " stat-flash-gain" : " stat-flash-loss") : "";
            return `
            <div class="stat-row">
              <span class="stat-label">${k}</span>
              <div class="stat-bar-track">
                <div class="stat-bar-fill stat-bar-${k.toLowerCase()}" style="width:${v * 10}%"></div>
              </div>
              <span class="stat-value${flashClass}" data-stat="${k}">${v}</span>
            </div>`;
          }).join("")}
        </div>
      </div>
    </div>`;
  }).join("");

  // Spawn floating delta indicators after DOM is built
  // Walk up from span to .player-stat-card to get correct absolute top offset
  const cards = panel.querySelectorAll(".player-stat-card");
  for (const { playerIdx, stat, delta } of floatTargets) {
    const card = cards[playerIdx];
    if (!card) continue;
    const span = card.querySelector(`[data-stat="${stat}"]`);
    if (!span) continue;
    let topOffset = 0;
    let el = span;
    while (el && el !== card) {
      topOffset += el.offsetTop;
      el = el.offsetParent;
    }
    const float = document.createElement("span");
    float.className = `stat-float ${delta > 0 ? "gain" : "loss"}`;
    float.textContent = (delta > 0 ? "+" : "") + delta;
    float.style.top = topOffset + "px";
    card.appendChild(float);
    setTimeout(() => float.remove(), 1900);
  }
}

function drawScenario() {
  const scenario = SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
  state.currentScenario = scenario;

  document.getElementById("scenario-text").textContent = scenario.text;

  document.querySelectorAll(".response-btn").forEach(btn => {
    const key = btn.dataset.choice.toLowerCase();
    const r = scenario.responses[key];
    btn.innerHTML = `<span class="response-type">${btn.dataset.choice}</span><span class="response-label">${r.label}</span>`;
  });

  document.getElementById("action-buttons").style.display = "none";
  document.getElementById("scenario-display").style.display = "block";
}

// ─── Response Handling ────────────────────────────────────────────────────────

function handleResponse(choice) {
  const scenario = state.currentScenario;
  const playerIdx = state.currentPlayerIndex;

  if (choice === "SAFE") {
    const stat = toStatKey(scenario.responses.safe.primaryStat);
    const floatTargets = applyStatChanges(playerIdx, [{ stat, delta: 1 }]);
    advanceTurn(floatTargets);
    return;
  }

  const difficulty = choice === "BOLD" ? "bold" : "standard";
  const timeLimit   = choice === "BOLD" ? 15 : 20;
  const question = pickQuestion(difficulty);

  showQuestionModal(question, timeLimit, choice);
}

function pickQuestion(difficulty) {
  let pool = QUESTIONS.filter(q => q.difficulty === difficulty && !state.usedQuestionIds.has(q.id));
  if (pool.length === 0) {
    console.warn(`[Performance Review] Question pool exhausted for "${difficulty}". Reshuffling.`);
    QUESTIONS.filter(q => q.difficulty === difficulty).forEach(q => state.usedQuestionIds.delete(q.id));
    pool = QUESTIONS.filter(q => q.difficulty === difficulty);
  }
  const question = pool[Math.floor(Math.random() * pool.length)];
  state.usedQuestionIds.add(question.id);
  return question;
}

// ─── Question Modal ───────────────────────────────────────────────────────────

function showQuestionModal(question, timeLimit, type, auditTargetName) {
  const timerRing = document.getElementById("modal-timer-ring");
  const timerText = document.getElementById("modal-timer-text");
  const badge     = document.getElementById("modal-difficulty-badge");
  const qText     = document.getElementById("modal-question-text");
  const choicesEl = document.getElementById("modal-choices");
  const feedback  = document.getElementById("modal-feedback");

  if (type === "AUDIT") {
    badge.textContent = `AUDIT: ${auditTargetName} must answer`;
    badge.className = "audit";
  } else if (type === "BOLD") {
    badge.textContent = "Bold Question";
    badge.className = "bold";
  } else {
    badge.textContent = "Knowledge Question";
    badge.className = "knowledge";
  }

  qText.textContent = question.text;
  feedback.textContent = "";
  feedback.className   = "modal-feedback";
  timerRing.className  = "";

  let timeLeft = timeLimit;
  timerText.textContent = timeLeft;

  const timerBarFill = document.getElementById("modal-timer-bar-fill");
  if (timerBarFill) {
    timerBarFill.style.transition = "none";
    timerBarFill.style.width = "100%";
    timerBarFill.classList.remove("urgent");
    // Double rAF: first frame commits the reset, second frame starts the drain transition
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        timerBarFill.style.transition = `width ${timeLimit}s linear, background 0.3s`;
        timerBarFill.style.width = "0%";
      });
    });
  }

  choicesEl.innerHTML = question.choices.map((c, i) =>
    `<button class="choice-btn" data-index="${i}">
      <span class="choice-key">${String.fromCharCode(65 + i)}</span>
      <span class="choice-text">${c}</span>
    </button>`
  ).join("");

  document.getElementById("question-modal").classList.add("active");

  choicesEl.querySelectorAll(".choice-btn").forEach(btn => {
    btn.addEventListener("click", () => handleAnswer(parseInt(btn.dataset.index), question, type));
  });

  state.modalTimer = setInterval(() => {
    timeLeft--;
    timerText.textContent = timeLeft;
    if (timeLeft <= 5) {
      timerRing.classList.add("urgent");
      const fill = document.getElementById("modal-timer-bar-fill");
      if (fill) fill.classList.add("urgent");
    }
    if (timeLeft <= 0) {
      clearModalTimer();
      handleAnswer(-1, question, type);
    }
  }, 1000);
}

function handleAnswer(selectedIndex, question, type) {
  clearModalTimer();

  const choicesEl = document.getElementById("modal-choices");
  const feedback  = document.getElementById("modal-feedback");

  choicesEl.querySelectorAll(".choice-btn").forEach(btn => { btn.disabled = true; });

  const isCorrect = selectedIndex === question.correctIndex;

  if (selectedIndex >= 0) {
    choicesEl.querySelector(`[data-index="${selectedIndex}"]`).classList.add(isCorrect ? "correct" : "incorrect");
  }
  if (!isCorrect) {
    choicesEl.querySelector(`[data-index="${question.correctIndex}"]`).classList.add("correct");
  }

  feedback.textContent = selectedIndex === -1 ? "Time's up!" : (isCorrect ? "Correct!" : "Incorrect");
  feedback.className = `modal-feedback ${isCorrect ? "correct" : "incorrect"}`;

  setTimeout(() => {
    closeModal();

    if (type === "AUDIT") {
      const { auditorIdx, targetIdx } = state.auditContext;
      const changeList = isCorrect
        ? [{ playerIdx: targetIdx, stat: "Performance", delta: 1 }, { playerIdx: auditorIdx, stat: "Performance", delta: -1 }]
        : [{ playerIdx: auditorIdx, stat: "Performance", delta: 1 }, { playerIdx: targetIdx, stat: "Performance", delta: -1 }];
      state.players[auditorIdx].auditsRemaining = Math.max(0, state.players[auditorIdx].auditsRemaining - 1);
      state.auditContext = null;
      const floatTargets = applyMultiStatChanges(changeList);
      advanceTurn(floatTargets);
    } else {
      const scenario  = state.currentScenario;
      const playerIdx = state.currentPlayerIndex;
      const changes   = buildStatChanges(type, scenario, isCorrect);
      const floatTargets = applyStatChanges(playerIdx, changes);
      advanceTurn(floatTargets);
    }
  }, 2000);
}

function buildStatChanges(type, scenario, isCorrect) {
  if (type === "KNOWLEDGE") {
    const primary   = toStatKey(scenario.responses.knowledge.primaryStat);
    const secondary = scenario.responses.knowledge.secondaryStat
      ? toStatKey(scenario.responses.knowledge.secondaryStat)
      : null;
    if (isCorrect) {
      const changes = [{ stat: primary, delta: 2 }];
      if (secondary) changes.push({ stat: secondary, delta: 1 });
      return changes;
    }
    return [{ stat: primary, delta: -1 }];
  }
  // BOLD
  const primary = toStatKey(scenario.responses.bold.primaryStat);
  return [{ stat: primary, delta: isCorrect ? 3 : -2 }];
}

function applyStatChanges(playerIdx, changes) {
  return applyMultiStatChanges(changes.map(c => ({ playerIdx, ...c })));
}

function applyMultiStatChanges(changeList) {
  const floatTargets = [];
  for (const { playerIdx, stat, delta } of changeList) {
    const player = state.players[playerIdx];
    const before = player.stats[stat];
    player.stats[stat] = Math.min(10, Math.max(0, player.stats[stat] + delta));
    const actual = player.stats[stat] - before;
    if (actual !== 0) floatTargets.push({ playerIdx, stat, delta: actual });
  }
  return floatTargets;
}

function closeModal() {
  document.getElementById("question-modal").classList.remove("active");
}

function clearModalTimer() {
  if (state.modalTimer) {
    clearInterval(state.modalTimer);
    state.modalTimer = null;
  }
}

// ─── Audit ────────────────────────────────────────────────────────────────────

function handleAuditClick() {
  const player = state.players[state.currentPlayerIndex];
  if (player.auditsRemaining <= 0) return;

  document.getElementById("action-buttons").style.display = "none";
  showAuditTargetModal();
}

function showAuditTargetModal() {
  const auditorIdx = state.currentPlayerIndex;
  const modal = document.getElementById("audit-target-modal");
  const btnsEl = document.getElementById("audit-target-buttons");

  btnsEl.innerHTML = state.players
    .map((p, i) => ({ p, i }))
    .filter(({ i }) => i !== auditorIdx)
    .map(({ p, i }) =>
      `<button class="audit-target-btn" data-target="${i}">
        <span class="audit-color-swatch" style="background:${p.color}"></span>
        <span class="audit-player-name">${p.name}</span>
      </button>`
    ).join("");

  modal.classList.add("active");

  btnsEl.querySelectorAll(".audit-target-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetIdx = parseInt(btn.dataset.target);
      modal.classList.remove("active");
      startAudit(auditorIdx, targetIdx);
    });
  });
}

function startAudit(auditorIdx, targetIdx) {
  state.auditContext = { auditorIdx, targetIdx };
  const target = state.players[targetIdx];
  const question = pickQuestion("standard");
  showQuestionModal(question, 15, "AUDIT", target.name);
}

// ─── Event Cards ──────────────────────────────────────────────────────────────

function fireEventCard() {
  const pool = EVENTS.filter(e => !state.usedEventIds.has(e.id));
  if (pool.length === 0) {
    renderGameScreen();
    return;
  }

  const event = pool[Math.floor(Math.random() * pool.length)];
  state.usedEventIds.add(event.id);

  const affectedIndices = getAffectedPlayerIndices(event.effect.type);

  showEventModal(event, affectedIndices, () => {
    const stat = toStatKey(event.effect.stat);
    const changeList = affectedIndices.map(idx => ({ playerIdx: idx, stat, delta: event.effect.change }));
    const floatTargets = applyMultiStatChanges(changeList);
    renderGameScreen(floatTargets);
  });
}

function getAffectedPlayerIndices(effectType) {
  const leaderIdx = getLeaderIdx();
  const lowestIdx = getLowestIdx();
  switch (effectType) {
    case "all_players":       return state.players.map((_, i) => i);
    case "leader_only":       return [leaderIdx];
    case "lowest_only":       return [lowestIdx];
    case "all_except_leader": return state.players.map((_, i) => i).filter(i => i !== leaderIdx);
    default:                  return [];
  }
}

function showEventModal(event, affectedIndices, onClose) {
  document.getElementById("event-title").textContent = event.title;
  document.getElementById("event-description").textContent = event.description;

  const affectedEl = document.getElementById("event-affected");
  if (affectedIndices.length === 0) {
    affectedEl.textContent = "No players affected.";
  } else {
    const names = affectedIndices.map(i => state.players[i].name).join(", ");
    const statName = toStatKey(event.effect.stat);
    const change = event.effect.change;
    const changeStr = change > 0 ? `+${change}` : `${change}`;
    affectedEl.innerHTML = `Affected: <strong>${names}</strong><br>${statName} ${changeStr}`;
  }

  document.getElementById("event-modal").classList.add("active");

  const closeBtn = document.getElementById("event-close-btn");
  const handler = () => {
    closeBtn.removeEventListener("click", handler);
    document.getElementById("event-modal").classList.remove("active");
    onClose();
  };
  closeBtn.addEventListener("click", handler);
}

// ─── Turn Advancement ─────────────────────────────────────────────────────────

function advanceTurn(floatTargets = []) {
  state.currentPlayerIndex++;
  if (state.currentPlayerIndex >= state.players.length) {
    state.currentPlayerIndex = 0;
    state.currentRound++;
  }

  if (state.currentRound > MAX_ROUNDS) {
    showGameOver();
    return;
  }

  handleRoundStart(floatTargets);
}

// Handles ordered round-start effects for the first player of each round:
// (a) audit recharge  →  (b) event card  →  (c) render game screen
function handleRoundStart(floatTargets) {
  if (state.currentPlayerIndex !== 0) {
    renderGameScreen(floatTargets);
    return;
  }

  const shouldReset     = AUDIT_RESET_ROUNDS.includes(state.currentRound);
  const shouldFireEvent = EVENT_ROUNDS.has(state.currentRound);

  if (shouldReset) {
    state.players.forEach(p => { p.auditsRemaining = AUDIT_RESET_VALUE; });
    showAuditResetNotification(() => {
      if (shouldFireEvent) {
        fireEventCard();
      } else {
        renderGameScreen(floatTargets);
      }
    });
  } else if (shouldFireEvent) {
    fireEventCard();
  } else {
    renderGameScreen(floatTargets);
  }
}

function showAuditResetNotification(callback) {
  const nextReset = AUDIT_RESET_ROUNDS.find(r => r > state.currentRound);
  const deadline  = nextReset ? `round ${nextReset}` : "game end";

  document.getElementById("event-title").textContent = "Audits Refreshed";
  document.getElementById("event-description").textContent =
    `All players' audits have been reset to ${AUDIT_RESET_VALUE}. Use them before ${deadline}!`;
  document.getElementById("event-affected").textContent = "";

  const modal = document.getElementById("event-modal");
  modal.classList.add("active");

  const closeBtn = document.getElementById("event-close-btn");
  let dismissed = false;

  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;
    clearTimeout(autoTimer);
    closeBtn.removeEventListener("click", dismiss);
    modal.classList.remove("active");
    callback();
  };

  closeBtn.addEventListener("click", dismiss);
  const autoTimer = setTimeout(dismiss, 3500);
}

// ─── Game Over ────────────────────────────────────────────────────────────────

function showGameOver() {
  showScreen("gameover");

  const sorted = [...state.players].sort((a, b) => {
    const totalA = totalStats(a), totalB = totalStats(b);
    if (totalB !== totalA) return totalB - totalA;
    if (b.stats.Performance !== a.stats.Performance) return b.stats.Performance - a.stats.Performance;
    return b.stats.Morale - a.stats.Morale;
  });

  // ── Winner detection (logic unchanged) ───────────────────────────
  const maxTotal = Math.max(...state.players.map(totalStats));
  let contenders = state.players.filter(p => totalStats(p) === maxTotal);
  let winnerPlayer = null, tiebreakLabel = '';

  if (contenders.length === 1) {
    winnerPlayer = contenders[0];
  } else {
    const maxPerf = Math.max(...contenders.map(p => p.stats.Performance));
    contenders = contenders.filter(p => p.stats.Performance === maxPerf);
    if (contenders.length === 1) {
      winnerPlayer = contenders[0];
      tiebreakLabel = 'PERF TIEBREAK';
    } else {
      const maxMorale = Math.max(...contenders.map(p => p.stats.Morale));
      contenders = contenders.filter(p => p.stats.Morale === maxMorale);
      if (contenders.length === 1) {
        winnerPlayer = contenders[0];
        tiebreakLabel = 'MORALE TIEBREAK';
      }
      // else: true tie, winnerPlayer stays null
    }
  }

  // ── Podium card builder ───────────────────────────────────────────
  const placeLabels = ['', '1ST', '2ND', '3RD'];

  function podiumStatRows(p) {
    return Object.entries(p.stats).map(([k, v]) => `
      <div class="stat-row">
        <span class="stat-label">${k}</span>
        <div class="stat-bar-track">
          <div class="stat-bar-fill stat-bar-${k.toLowerCase()}" style="width:${v * 10}%"></div>
        </div>
        <span class="stat-value">${v}</span>
      </div>`).join('');
  }

  function makePodiumSlot(p, place) {
    if (!p) return `<div class="podium-slot podium-slot-empty"></div>`;
    const isFirst = place === 1;
    const crownEmoji = winnerPlayer ? '👑' : '🤝';
    const crownHtml  = isFirst ? `<div class="podium-crown">${crownEmoji}</div>` : '';
    const tieHtml    = isFirst && !winnerPlayer ? `<div class="podium-tie-note">IT'S A TIE!</div>` : '';
    const tbHtml     = isFirst && tiebreakLabel ? `<div class="podium-tie-note">${tiebreakLabel}</div>` : '';
    return `
      <div class="podium-slot">
        <div class="podium-card podium-place-${place}">
          ${crownHtml}
          <div class="podium-player-name" style="color:${p.color}">${p.name}</div>
          ${tieHtml}${tbHtml}
          <div class="podium-player-stats">${podiumStatRows(p)}</div>
          <div class="podium-total">TOTAL: ${totalStats(p)}</div>
        </div>
        <div class="podium-platform podium-platform-${place}">${placeLabels[place]}</div>
      </div>`;
  }

  // Display order: 2nd left, 1st center, 3rd right
  const podiumHtml = `<div class="podium-row">
    ${makePodiumSlot(sorted[1] || null, 2)}
    ${makePodiumSlot(sorted[0], 1)}
    ${makePodiumSlot(sorted[2] || null, 3)}
  </div>`;

  const restPlayers = sorted.slice(3);
  const restLabels  = ['4TH', '5TH'];
  const restHtml = restPlayers.length ? `
    <div class="podium-rest">
      ${restPlayers.map((p, i) => `
        <div class="podium-rest-item" style="border-color:${p.color}">
          <span class="podium-rest-place">${restLabels[i]}</span>
          <span class="podium-rest-name" style="color:${p.color}">${p.name}</span>
          <span class="podium-rest-total">TOTAL: ${totalStats(p)}</span>
          <span class="podium-rest-stats">${Object.entries(p.stats).map(([k,v]) => `${k.slice(0,4)}: ${v}`).join(' | ')}</span>
        </div>`).join('')}
    </div>` : '';

  document.getElementById("final-stats").innerHTML = podiumHtml + restHtml;
}

// ─── Navigation & Modals ─────────────────────────────────────────────────────

function returnToTitle() {
  clearModalTimer();
  state.players = [];
  state.currentPlayerIndex = 0;
  state.currentRound = 1;
  state.currentScenario = null;
  state.usedQuestionIds = new Set();
  state.usedEventIds = new Set();
  state.auditContext = null;

  document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));

  const container = document.getElementById("player-inputs");
  container.innerHTML = "";
  document.getElementById("add-player-btn").disabled = false;
  document.getElementById("setup-error").textContent = "";
  addPlayerRow();
  addPlayerRow();

  showScreen("setup");
}

function showConfirm(message, onConfirm) {
  document.getElementById("confirm-message").textContent = message;
  document.getElementById("confirm-modal").classList.add("active");

  const okBtn = document.getElementById("confirm-ok-btn");
  const handler = () => {
    okBtn.removeEventListener("click", handler);
    document.getElementById("confirm-modal").classList.remove("active");
    onConfirm();
  };
  okBtn.addEventListener("click", handler);
}

// ─── Utilities ────────────────────────────────────────────────────────────────

function totalStats(player) {
  return Object.values(player.stats).reduce((a, b) => a + b, 0);
}

function getLeaderIdx() {
  return state.players.reduce((best, p, i) =>
    totalStats(p) > totalStats(state.players[best]) ? i : best, 0);
}

function getLowestIdx() {
  return state.players.reduce((lowest, p, i) =>
    totalStats(p) < totalStats(state.players[lowest]) ? i : lowest, 0);
}

function toStatKey(s) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

// CSS named colors that are too dark to read on the CRT screen background
const SCREEN_COLORS = {
  blue:   '#5BAAEE',
  purple: '#B468D4',
  green:  '#4EC94E',
};
function displayColor(c) { return SCREEN_COLORS[c] || c; }

function showScreen(name) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(`screen-${name}`).classList.add("active");
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  initSetup();

  document.getElementById("draw-scenario-btn").addEventListener("click", drawScenario);
  document.getElementById("audit-btn").addEventListener("click", handleAuditClick);
  document.getElementById("play-again-btn").addEventListener("click", playAgain);

  document.querySelectorAll(".response-btn").forEach(btn => {
    btn.addEventListener("click", () => handleResponse(btn.dataset.choice));
  });

  // HOW TO PLAY (title screen)
  document.getElementById("howtoplay-open-btn").addEventListener("click", () => {
    document.getElementById("howtoplay-modal").classList.add("active");
  });
  document.getElementById("howtoplay-close-btn").addEventListener("click", () => {
    document.getElementById("howtoplay-modal").classList.remove("active");
  });

  // Quick Reference (in-game "?" button)
  document.getElementById("rules-quick-btn").addEventListener("click", () => {
    document.getElementById("quickref-modal").classList.add("active");
  });
  document.getElementById("quickref-close-btn").addEventListener("click", () => {
    document.getElementById("quickref-modal").classList.remove("active");
  });

  // In-game menu
  document.getElementById("menu-btn").addEventListener("click", () => {
    document.getElementById("menu-modal").classList.add("active");
  });
  document.getElementById("menu-resume-btn").addEventListener("click", () => {
    document.getElementById("menu-modal").classList.remove("active");
  });
  document.getElementById("menu-restart-btn").addEventListener("click", () => {
    showConfirm("Restart game? All progress will be lost.", () => {
      document.getElementById("menu-modal").classList.remove("active");
      playAgain();
    });
  });
  document.getElementById("menu-title-btn").addEventListener("click", () => {
    showConfirm("Return to title? All progress will be lost.", () => {
      document.getElementById("menu-modal").classList.remove("active");
      returnToTitle();
    });
  });

  // Game Over — Return to Title
  document.getElementById("gameover-title-btn").addEventListener("click", returnToTitle);

  // Confirm modal — cancel button
  document.getElementById("confirm-cancel-btn").addEventListener("click", () => {
    document.getElementById("confirm-modal").classList.remove("active");
  });
});
