/**
 * main.js — the entry point. Connects buttons on screen to the game engine,
 * saves after every change, and decides which screen to show.
 *
 * Every clickable thing has a `data-action="..."` attribute. One click listener
 * looks that name up in the ACTIONS table below.
 */
import * as Engine from "./engine.js";
import * as UI from "./ui.js";
import * as Storage from "./storage.js";
import { validateContent } from "./content.js";
import { isValidSave } from "./state.js";

/** The game in progress (or null when on the title screen). */
let state = null;
/** Whatever screen should come back when the player presses "Back". */
let currentScreen = showTitle;
let backTarget = showTitle;
let storageOk = true;

const save = () => state && state.phase !== "ending" && Storage.saveGame(state);
const statsCopy = () => (state ? { ...state.stats } : null);

// ─────────────────────────────────────────────────────────────────────────────
// Screens
// ─────────────────────────────────────────────────────────────────────────────

/** Show a "top-level" screen and remember it as the place Back returns to. */
function go(screenFn) {
  currentScreen = screenFn;
  screenFn();
}

/** Show a secondary screen (How to Play, Hall of Fame, New Game) on top of the current one. */
function detour(renderFn) {
  backTarget = currentScreen;
  UI.closeMenu();
  UI.showDashboard(false);
  renderFn();
}

function showTitle() {
  UI.showDashboard(false);
  const saved = Storage.loadGame();
  UI.renderTitle({ save: isValidSave(saved) && saved.phase !== "ending" ? saved : null, storageOk });
}

/** Show the current game at whatever phase it's in. */
function showGame() {
  if (!state) return go(showTitle);
  UI.showDashboard(true);
  UI.updateDashboard(state);
  if (state.phase === "desk") UI.renderDesk(state);
  else UI.renderMorning(state);
}

function showEnding(isNew) {
  UI.showDashboard(false);
  UI.renderEnding(state, { isNew });
}

/** End the game: pick the ending, record it in the Hall of Fame, clear the save. */
function endGame(endingFn = Engine.finishGame) {
  endingFn(state);
  const isNew = Storage.unlockEnding(state.endingId, { name: state.name, day: state.day });
  Storage.clearGame();
  go(() => showEnding(isNew));
}

function startNewGame(name, mode) {
  state = Engine.newGame(name, mode);
  save();
  go(showGame);
}

// ─────────────────────────────────────────────────────────────────────────────
// Actions (what each data-action button does)
// ─────────────────────────────────────────────────────────────────────────────

const ACTIONS = {
  continue() {
    const saved = Storage.loadGame();
    if (!isValidSave(saved)) return go(showTitle);
    state = saved;
    go(showGame);
  },

  async "new-game-setup"() {
    const saved = Storage.loadGame();
    const inProgress = isValidSave(saved) && saved.phase !== "ending";
    if (inProgress && !(await UI.confirmDialog("Start a new game? Your current column will be lost.", "Start fresh"))) return;
    detour(UI.renderNewGame);
  },

  "how-to-play": () => detour(UI.renderHowTo),
  "hall-of-fame": () => detour(() => UI.renderHallOfFame(Storage.loadHallOfFame())),
  back: () => go(backTarget),
  title() {
    UI.closeMenu();
    state = null;
    go(showTitle);
  },

  "to-desk"() {
    state.phase = "desk";
    save();
    UI.renderDesk(state);
  },

  "open-letter": (el) => UI.renderLetterDialog(state, el.dataset.letter),
  "close-letter": () => UI.closeLetterDialog(),

  choose(el) {
    const { letter } = el.dataset;
    Engine.chooseAdvice(state, letter, Number(el.dataset.option));
    save();
    UI.renderLetterDialog(state, letter); // show the selection…
    setTimeout(() => {
      // …then put the letter back on the desk with its "Answered" stamp.
      UI.closeLetterDialog();
      UI.renderDesk(state);
      document.querySelector(`.envelope[data-letter="${CSS.escape(letter)}"]`)?.focus();
    }, 380);
  },

  async publish(el) {
    if (!Engine.isDeskComplete(state)) return;
    el.disabled = true;
    const before = statsCopy();
    const { published } = Engine.publishColumn(state); // also builds tomorrow's paper
    save();
    await UI.playPublishAnimation(state, published);
    UI.renderMorning(state);
    UI.updateDashboard(state, before);
  },

  "see-ending": () => endGame(),

  menu: () => UI.openMenu(),
  "menu-close": () => UI.closeMenu(),

  async retire() {
    UI.closeMenu();
    if (await UI.confirmDialog("Retire now and see how your career ends?", "Retire")) endGame(Engine.retire);
  },

  async restart() {
    UI.closeMenu();
    if (!state) return;
    if (await UI.confirmDialog("Restart from Day 1? This game's progress will be lost.", "Restart")) {
      Storage.clearGame();
      startNewGame(state.name, state.mode);
    }
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Event listeners
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener("click", (event) => {
  const el = event.target.closest("[data-action]");
  if (!el || el.disabled) return;
  const action = ACTIONS[el.dataset.action];
  if (action) {
    event.preventDefault();
    action(el);
  }
});

// Clicking the dark backdrop around a dialog closes it.
for (const id of ["letter-dialog", "menu-dialog"]) {
  const dialog = document.getElementById(id);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

// Keyboard shortcuts inside an open letter: 1–4 or A–D picks an answer.
document.getElementById("letter-dialog").addEventListener("keydown", (event) => {
  const index = "1234".indexOf(event.key) >= 0 ? "1234".indexOf(event.key) : "abcd".indexOf(event.key.toLowerCase());
  if (index < 0 || event.metaKey || event.ctrlKey || event.altKey) return;
  document.querySelectorAll("#letter-dialog .option")[index]?.click();
});

// The new-game form.
document.addEventListener("submit", (event) => {
  const form = event.target.closest('[data-form="new-game"]');
  if (!form) return;
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") ?? "").trim().slice(0, 24) || "Sage";
  startNewGame(name, data.get("mode") === "endless" ? "endless" : "standard");
});

// ─────────────────────────────────────────────────────────────────────────────
// Boot
// ─────────────────────────────────────────────────────────────────────────────

const problems = validateContent();
if (problems.length) console.warn("[Bad Advice Simulator] Data problems:\n" + problems.join("\n"));

storageOk = Storage.isStorageAvailable();
go(showTitle);
