/**
 * ui.js — everything that draws to the screen.
 *
 * Screens are rendered as HTML strings into <main id="screen">. Buttons carry a
 * `data-action` attribute; main.js listens for clicks and decides what they do.
 * Nothing here changes game state.
 */
import { CHARACTER_BY_ID, LETTER_BY_ID, ENDINGS, ENDING_BY_ID, CHARACTERS } from "./content.js";
import { answeredCount, isDeskComplete, totalDays, isEndless } from "./engine.js";
import { highlights } from "./endings.js";
import { STAT_KEYS } from "./state.js";
import { escapeHtml, fillTemplate, signed } from "./util.js";

const screen = () => document.getElementById("screen");

const STAT_INFO = {
  readership: { label: "Readership", icon: "📰" },
  reputation: { label: "Reputation", icon: "🤝" },
  chaos: { label: "Chaos", icon: "🔥" },
};

const WEATHER = [
  "Partly cloudy, mostly confused",
  "Light drizzle, heavy gossip",
  "Sunny, with a chance of llamas",
  "Windy (23 chimes audible)",
  "Foggy near the lighthouse",
  "Overcast, like Marge's mood",
  "Clear skies, murky motives",
];

/** Stable pseudo-random number from a string, so tilts don't jump on re-render. */
function hash(str) {
  let h = 2166136261;
  for (const ch of String(str)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return (h >>> 0) / 4294967295;
}
const tiltFor = (key, max = 2.5) => ((hash(key) * 2 - 1) * max).toFixed(2);

/** Escape + fill {name} placeholders. Use for every piece of game text. */
const text = (state, str) => escapeHtml(fillTemplate(str, state.name));

const dayLabel = (state) => (isEndless(state) ? `Day ${state.day}` : `Day ${Math.min(state.day, totalDays(state))} of ${totalDays(state)}`);

function characterOf(letter) {
  return CHARACTER_BY_ID[letter.from];
}
function senderName(letter) {
  const c = characterOf(letter);
  return c.id === "townsfolk" ? letter.signature ?? c.name : c.name;
}

// Swap the screen's content and scroll to the top, with a gentle fade.
function show(html, className) {
  const el = screen();
  el.className = `screen ${className ?? ""}`;
  el.innerHTML = html;
  window.scrollTo({ top: 0 });
  el.querySelector("[autofocus], h1, h2")?.focus?.({ preventScroll: true });
}

function masthead(state, extra = "") {
  const day = state ? state.day : 1;
  const weather = WEATHER[Math.floor(hash(`weather${day}`) * WEATHER.length)];
  return `
    <header class="masthead">
      <div class="masthead-top">
        <span>Vol. XII · No. ${day}</span>
        <span class="masthead-motto">“Shrugsville's Most Adequate Newspaper”</span>
        <span>25¢</span>
      </div>
      <h1 class="masthead-title" tabindex="-1">The Daily Shrug</h1>
      <div class="masthead-rule">
        <span>${state ? escapeHtml(dayLabel(state)) : "Est. 1952"}</span>
        <span>Weather: ${escapeHtml(weather)}</span>
        ${extra}
      </div>
    </header>`;
}

function deltaChips(delta, extraClass = "") {
  if (!delta) return "";
  const chips = STAT_KEYS.filter((k) => delta[k])
    .map(
      (k) =>
        `<span class="chip chip--${k} ${delta[k] > 0 ? "up" : "down"}" title="${STAT_INFO[k].label}">${STAT_INFO[k].icon} ${signed(delta[k])}</span>`,
    )
    .join("");
  return chips ? `<span class="chips ${extraClass}">${chips}</span>` : "";
}

// ─────────────────────────────────────────────────────────────────────────────
// Dashboard (the stat meters at the top)
// ─────────────────────────────────────────────────────────────────────────────

export function showDashboard(visible) {
  document.getElementById("dashboard").hidden = !visible;
}

/**
 * Update the meters. If `previous` stats are given, show a little floating +/- bubble.
 */
export function updateDashboard(state, previous = null) {
  document.getElementById("dash-day").textContent = dayLabel(state);
  for (const key of STAT_KEYS) {
    const meter = document.querySelector(`.meter[data-stat="${key}"]`);
    const value = state.stats[key];
    meter.querySelector(".meter-fill").style.width = `${value}%`;
    meter.querySelector(".meter-value").textContent = value;
    meter.setAttribute("aria-valuenow", value);
    meter.classList.toggle("is-low", value < 25);
    meter.classList.toggle("is-high", value >= 70);

    const diff = previous ? value - previous[key] : 0;
    if (diff) {
      const bubble = document.createElement("span");
      bubble.className = `meter-bubble ${diff > 0 ? "up" : "down"}`;
      bubble.textContent = signed(diff);
      meter.appendChild(bubble);
      meter.classList.remove("pulse");
      void meter.offsetWidth; // restart the CSS animation
      meter.classList.add("pulse");
      setTimeout(() => bubble.remove(), 1800);
    }
  }
  document.querySelector('[data-action="retire"]')?.toggleAttribute("hidden", !isEndless(state));
}

// ─────────────────────────────────────────────────────────────────────────────
// Title, new game, how to play
// ─────────────────────────────────────────────────────────────────────────────

export function renderTitle({ save, storageOk }) {
  const continueButton = save
    ? `<button class="btn btn-primary" data-action="continue" autofocus>
         Continue <small>${escapeHtml(save.name)} · ${escapeHtml(dayLabel(save))}</small>
       </button>`
    : "";
  show(
    `<section class="newspaper title-screen">
      ${masthead(null)}
      <div class="title-body">
        <div class="title-lead">
          <p class="kicker">Help Wanted · Classifieds · Page 1 (We Ran Out of News)</p>
          <h2 class="headline headline--huge">NOW HIRING: ADVICE COLUMNIST</h2>
          <p class="subhead">No experience necessary. No, really. Please. Anyone.</p>
          <p class="lede dropcap">The Daily Shrug's last advice columnist moved into a lighthouse on their own advice. Now the letters are piling up: a llama farmer who's being watched, a grandmother at war, a mayor with “hypothetical” problems, and a ghost nobody notices. Every day you pick their advice, and every morning you read what happened. Sometimes it's what you hoped. Often it's what you deserved.</p>
        </div>
        <nav class="title-actions" aria-label="Main menu">
          ${continueButton}
          <button class="btn ${save ? "" : "btn-primary"}" data-action="new-game-setup" ${save ? "" : "autofocus"}>New Game</button>
          <button class="btn" data-action="how-to-play">How to Play</button>
          <button class="btn" data-action="hall-of-fame">Hall of Fame</button>
          ${storageOk ? "" : `<p class="note">⚠️ Your browser isn't letting this page save. You can still play, but progress won't be remembered.</p>`}
        </nav>
      </div>
    </section>`,
    "screen--title",
  );
}

export function renderNewGame() {
  show(
    `<section class="newspaper paper-form">
      <p class="kicker">Employment Contract · Please Sign in Ink (or Pencil, We're Not Fussy)</p>
      <h2 class="headline" tabindex="-1">Welcome to The Daily Shrug</h2>
      <form class="newgame-form" data-form="new-game">
        <label class="field">
          <span class="field-label">Your pen name</span>
          <input name="name" type="text" maxlength="24" value="Sage" autocomplete="off" required autofocus />
          <span class="field-hint">Printed above your column as “Ask ___.”</span>
        </label>
        <fieldset class="field">
          <legend class="field-label">Contract length</legend>
          <label class="radio">
            <input type="radio" name="mode" value="standard" checked />
            <span><strong>Two-Week Trial</strong> · 14 days, then Marge decides your fate.</span>
          </label>
          <label class="radio">
            <input type="radio" name="mode" value="endless" />
            <span><strong>Open-Ended</strong> · Keep going forever. Retire from the menu whenever you like.</span>
          </label>
        </fieldset>
        <div class="form-actions">
          <button type="submit" class="btn btn-primary">Sign &amp; Start Day One</button>
          <button type="button" class="btn btn-ghost" data-action="back">Back</button>
        </div>
      </form>
    </section>`,
    "screen--form",
  );
}

export function renderHowTo() {
  const cast = CHARACTERS.filter((c) => c.id !== "townsfolk")
    .map(
      (c) => `<li><span class="cast-icon" aria-hidden="true">${c.icon}</span><strong>${escapeHtml(c.name)}</strong> · ${escapeHtml(c.blurb)}</li>`,
    )
    .join("");
  show(
    `<section class="newspaper howto">
      <p class="kicker">A Message From Your Editor</p>
      <h2 class="headline" tabindex="-1">How This Job Works</h2>
      <div class="howto-columns">
        <ol class="howto-steps">
          <li><strong>Open your mail.</strong> Each day a few letters land on your desk. Click one to read it.</li>
          <li><strong>Pick your advice.</strong> Every letter has 3–4 replies, from sensible to “move to a lighthouse.” You can change your mind until you publish.</li>
          <li><strong>Publish the column.</strong> When every letter has an answer, hit Publish. <em>Thump.</em></li>
          <li><strong>Read the morning paper.</strong> “Reader Updates” shows how your advice played out. Some results take two or three days to arrive.</li>
          <li><strong>Watch your meters.</strong> 📰 <b>Readership</b> is how many people read you. 🤝 <b>Reputation</b> is whether they trust you. 🔥 <b>Chaos</b> is how much of the town you've set on fire. Wild advice gets readers but costs trust. Hit zero Reputation or Readership and you're done.</li>
          <li><strong>Nothing is guaranteed.</strong> Good advice usually works but sometimes backfires. Terrible advice usually backfires but sometimes works brilliantly.</li>
          <li><strong>People remember.</strong> Your advice changes what readers write next, and their troubles spill into each other's lives.</li>
          <li><strong>Collect endings.</strong> How it ends depends on your meters and your choices. Every ending you reach goes in the Hall of Fame.</li>
        </ol>
        <div class="howto-cast">
          <h3 class="section-title">Who's Who in Shrugsville</h3>
          <ul class="cast-list">${cast}</ul>
        </div>
      </div>
      <p class="signoff">— Marge Crumb, Editor-in-Chief. Your progress saves automatically.</p>
      <div class="form-actions"><button class="btn btn-primary" data-action="back" autofocus>Got It</button></div>
    </section>`,
    "screen--howto",
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Morning paper
// ─────────────────────────────────────────────────────────────────────────────

function renderClipping(state, c, i) {
  const letter = LETTER_BY_ID[c.letterId];
  const option = letter.options[c.optionIndex];
  const outcome = option[c.kind];
  const character = characterOf(letter);
  const late = c.daysLater > 1 ? `<span class="clip-late">Late-breaking · ${c.daysLater} days later</span>` : "";
  return `
    <article class="clipping clipping--${c.kind}" style="--tilt:${tiltFor(c.letterId + c.kind, 1.6)}deg; --i:${i}">
      <span class="clip-tape" aria-hidden="true"></span>
      <p class="clip-re"><span aria-hidden="true">${character.icon}</span> Re: ${text(state, senderName(letter))} · you said “${text(state, option.text)}”</p>
      ${late}
      <h3 class="clip-headline">${text(state, outcome.headline)}</h3>
      <p class="clip-text">${text(state, outcome.text)}</p>
      <div class="clip-footer">
        <span class="mini-stamp mini-stamp--${c.kind}">${c.kind === "success" ? "It worked!" : "Backfired!"}</span>
        ${deltaChips(c.delta)}
      </div>
    </article>`;
}

export function renderMorning(state) {
  const m = state.morning;
  const articles = m.articles
    .map(
      (a) => `
      <article class="front-article ${a.event ? "front-article--event" : ""}">
        <p class="kicker">${text(state, a.kicker)}</p>
        <h2 class="headline">${text(state, a.headline)}</h2>
        <p class="lede dropcap">${text(state, a.article)}</p>
        ${a.event ? deltaChips(m.eventDelta) : ""}
      </article>`,
    )
    .join("");

  const updates = m.updates.length
    ? `<div class="clippings">${m.updates.map((c, i) => renderClipping(state, c, i)).join("")}</div>`
    : `<p class="no-updates">${state.day === 1 ? "No reader updates yet. You haven't given anybody any advice. Yet." : "No reader updates today. Consequences are still brewing…"}</p>`;

  const filler = m.filler
    .map((f) => `<div class="brief"><h4>${text(state, f.headline)}</h4><p>${text(state, f.text)}</p></div>`)
    .join("");

  const overnight = m.overnight?.readership
    ? `<p class="overnight">Overnight, a few readers forgot you existed. ${deltaChips(m.overnight, "inline")}</p>`
    : "";

  const ending = state.pendingEnding;
  const button = ending
    ? `<button class="btn btn-primary btn-big" data-action="see-ending" autofocus>${
        m.isFinal ? "Report to Marge's Office →" : "Uh oh. Marge wants to see you →"
      }</button>`
    : `<button class="btn btn-primary btn-big" data-action="to-desk" autofocus>To My Desk (${state.desk.length} new letter${state.desk.length === 1 ? "" : "s"}) →</button>`;

  const alarm =
    ending === "fired"
      ? `<p class="alarm">Your reputation has hit rock bottom. The phone on your desk is ringing. It's Marge.</p>`
      : ending === "folded"
        ? `<p class="alarm">Nobody's reading anymore. The printing press has gone quiet.</p>`
        : "";

  show(
    `<section class="newspaper morning">
      ${masthead(state, m.isFinal ? `<span class="final-flag">Final Edition</span>` : "")}
      <div class="morning-grid">
        <div class="morning-main">
          ${articles}
          <section class="updates" aria-labelledby="updates-title">
            <h2 class="section-title" id="updates-title">Reader Updates</h2>
            ${updates}
          </section>
        </div>
        <aside class="around-town" aria-label="Around Town">
          <h3 class="section-title">Around Town</h3>
          ${filler}
        </aside>
      </div>
      <footer class="morning-footer">${overnight}${alarm}${button}</footer>
    </section>`,
    "screen--morning",
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// The desk
// ─────────────────────────────────────────────────────────────────────────────

function renderEnvelope(state, slot, i) {
  const letter = LETTER_BY_ID[slot.letterId];
  const character = characterOf(letter);
  const answered = slot.choice !== null;
  const reply = answered ? letter.options[slot.choice].text : "";
  return `
    <button class="envelope ${answered ? "is-answered" : ""} ${letter.event ? "is-urgent" : ""}"
            data-action="open-letter" data-letter="${escapeHtml(letter.id)}"
            style="--tilt:${tiltFor(letter.id)}deg; --i:${i}"
            aria-label="Letter from ${text(state, senderName(letter))}: ${text(state, letter.subject)}${answered ? " (answered)" : ""}">
      <span class="env-postmark" aria-hidden="true">${character.icon}</span>
      ${letter.event ? `<span class="env-urgent">Urgent</span>` : ""}
      <span class="env-from">From: ${text(state, senderName(letter))}</span>
      <span class="env-subject">${text(state, letter.subject)}</span>
      ${
        answered
          ? `<span class="stamp stamp--answered" aria-hidden="true">Answered</span>
             <span class="env-reply">“${text(state, reply)}”</span>`
          : `<span class="env-open">Click to open</span>`
      }
    </button>`;
}

export function renderDesk(state) {
  const done = answeredCount(state);
  const total = state.desk.length;
  const ready = isDeskComplete(state);
  show(
    `<section class="desk">
      <div class="desk-surface">
        <div class="desk-deco" aria-hidden="true">
          <span class="coffee-ring coffee-ring--a"></span>
          <span class="coffee-ring coffee-ring--b"></span>
          <span class="mug"></span>
          <span class="sticky">Column due by 5!<br />— M.</span>
          <span class="pencil"></span>
          <span class="paperclip"></span>
        </div>
        <header class="desk-header">
          <h2 class="desk-title" tabindex="-1">Today's Mailbag</h2>
          <p class="desk-sub">${escapeHtml(dayLabel(state))} · Ask ${text(state, state.name)}</p>
        </header>
        <div class="letters">${state.desk.map((slot, i) => renderEnvelope(state, slot, i)).join("")}</div>
        <div class="desk-actions">
          <button class="btn btn-stamp" data-action="publish" ${ready ? "" : "disabled"}>
            ${ready ? "Publish Today's Column" : `Answer every letter to publish (${done}/${total})`}
          </button>
        </div>
      </div>
    </section>`,
    "screen--desk",
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Letter dialog
// ─────────────────────────────────────────────────────────────────────────────

export function renderLetterDialog(state, letterId) {
  const dialog = document.getElementById("letter-dialog");
  const letter = LETTER_BY_ID[letterId];
  const slot = state.desk.find((d) => d.letterId === letterId);
  const character = characterOf(letter);
  const signature = letter.signature ?? character.signature;
  const ps = (letter.postscripts ?? [])
    .filter((p) => p.requires.every((f) => state.flags[f]))
    .map((p) => `<p class="letter-ps">${text(state, p.text)}</p>`)
    .join("");
  const options = letter.options
    .map(
      (o, i) => `
      <button class="option ${slot?.choice === i ? "is-selected" : ""}" data-action="choose"
              data-letter="${escapeHtml(letter.id)}" data-option="${i}" aria-pressed="${slot?.choice === i}">
        <span class="option-key" aria-hidden="true">${"ABCD"[i]}</span>
        <span class="option-text">${text(state, o.text)}</span>
      </button>`,
    )
    .join("");

  dialog.innerHTML = `
    <article class="letter-paper" aria-labelledby="letter-subject">
      <button class="dialog-close" data-action="close-letter" aria-label="Close letter">×</button>
      <p class="letter-meta"><span aria-hidden="true">${character.icon}</span> ${text(state, senderName(letter))}</p>
      <h2 class="letter-subject" id="letter-subject">${text(state, letter.subject)}</h2>
      <p class="letter-salutation">Dear ${text(state, state.name)},</p>
      <p class="letter-body">${text(state, letter.body)}</p>
      ${ps}
      <p class="letter-signoff">— ${text(state, signature)}</p>
      <section class="reply" aria-label="Your advice">
        <h3 class="reply-title">Your advice:</h3>
        <div class="options">${options}</div>
      </section>
    </article>`;
  if (!dialog.open) dialog.showModal();
  dialog.querySelector(".letter-paper").scrollTop = 0;
}

export function closeLetterDialog() {
  const dialog = document.getElementById("letter-dialog");
  if (dialog.open) dialog.close();
}

// ─────────────────────────────────────────────────────────────────────────────
// Publishing animation
// ─────────────────────────────────────────────────────────────────────────────

/** Show the column being printed and stamped. Resolves when the animation ends. */
export function playPublishAnimation(state, entries) {
  const overlay = document.getElementById("publish-overlay");
  const items = entries
    .map(({ letterId, optionIndex }) => {
      const letter = LETTER_BY_ID[letterId];
      return `<li><strong>${text(state, letter.subject)}</strong><span>${text(state, letter.options[optionIndex].text)}</span></li>`;
    })
    .join("");
  overlay.innerHTML = `
    <div class="publish-sheet">
      <p class="kicker">The Daily Shrug · Advice</p>
      <h2 class="publish-title">Ask ${text(state, state.name)}</h2>
      <ul class="publish-list">${items}</ul>
      <span class="stamp stamp--published">Published</span>
    </div>`;
  overlay.hidden = false;
  overlay.classList.remove("is-leaving");

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return new Promise((resolve) => {
    setTimeout(() => overlay.classList.add("is-leaving"), reduced ? 700 : 1900);
    setTimeout(() => {
      overlay.hidden = true;
      overlay.innerHTML = "";
      resolve();
    }, reduced ? 900 : 2400);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Ending + Hall of Fame
// ─────────────────────────────────────────────────────────────────────────────

export function renderEnding(state, { isNew }) {
  const ending = ENDING_BY_ID[state.endingId];
  const stats = STAT_KEYS.map(
    (k) => `<div class="final-stat"><span class="final-stat-icon" aria-hidden="true">${STAT_INFO[k].icon}</span><span class="final-stat-value">${state.stats[k]}</span><span class="final-stat-label">${STAT_INFO[k].label}</span></div>`,
  ).join("");
  const moments = highlights(state)
    .map((h) => {
      const letter = LETTER_BY_ID[h.letterId];
      return `<li><span class="moment-day">Day ${Math.min(h.day, totalDays(state))}</span> ${text(state, letter.options[h.optionIndex][h.kind].headline)}</li>`;
    })
    .join("");
  // Days actually published (the current morning's column hasn't been written yet).
  const daysServed = Math.max(1, Math.min(state.day - 1, totalDays(state)));

  show(
    `<section class="newspaper ending">
      ${masthead(state, `<span class="final-flag">Extra! Extra!</span>`)}
      <div class="ending-body">
        <p class="kicker">The End · ${daysServed} day${daysServed === 1 ? "" : "s"} on the job</p>
        <h2 class="headline headline--huge" tabindex="-1">${text(state, ending.headline)}</h2>
        <div class="ending-badge">
          <span class="ending-icon" aria-hidden="true">${ending.icon}</span>
          <span class="ending-title">Ending: ${escapeHtml(ending.title)}</span>
          ${isNew ? `<span class="stamp stamp--new">New ending unlocked!</span>` : ""}
        </div>
        <p class="lede dropcap">${text(state, ending.text)}</p>
        <div class="final-stats">${stats}</div>
        ${moments ? `<section class="ending-highlights"><h3 class="section-title">Career Highlights</h3><ul>${moments}</ul></section>` : ""}
        <div class="form-actions">
          <button class="btn btn-primary" data-action="new-game-setup" autofocus>Play Again</button>
          <button class="btn" data-action="hall-of-fame">Hall of Fame</button>
          <button class="btn btn-ghost" data-action="title">Title Screen</button>
        </div>
      </div>
    </section>`,
    "screen--ending",
  );
}

export function renderHallOfFame(hall) {
  const unlocked = ENDINGS.filter((e) => hall[e.id]).length;
  const cards = ENDINGS.map((e) => {
    const entry = hall[e.id];
    if (!entry) {
      return `<li class="hof-card is-locked" style="--tilt:${tiltFor(e.id, 1.5)}deg">
        <span class="hof-icon" aria-hidden="true">❓</span>
        <h3 class="hof-title">???</h3>
        <p class="hof-hint">${escapeHtml(e.hint)}</p>
      </li>`;
    }
    const date = new Date(entry.first).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
    return `<li class="hof-card" style="--tilt:${tiltFor(e.id, 1.5)}deg">
      <span class="hof-icon" aria-hidden="true">${e.icon}</span>
      <h3 class="hof-title">${escapeHtml(e.title)}</h3>
      <p class="hof-meta">First reached ${escapeHtml(date)} as “${escapeHtml(entry.name)}”${entry.count > 1 ? ` · ×${entry.count}` : ""}</p>
    </li>`;
  }).join("");
  show(
    `<section class="newspaper hall">
      <p class="kicker">Framed on the Newsroom Wall</p>
      <h2 class="headline" tabindex="-1">Hall of Fame</h2>
      <p class="subhead">${unlocked} of ${ENDINGS.length} endings unlocked.</p>
      <ul class="hof-grid">${cards}</ul>
      <div class="form-actions"><button class="btn btn-primary" data-action="back" autofocus>Back</button></div>
    </section>`,
    "screen--hall",
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Menu + confirm dialogs
// ─────────────────────────────────────────────────────────────────────────────

export function openMenu() {
  document.getElementById("menu-dialog").showModal();
}
export function closeMenu() {
  const d = document.getElementById("menu-dialog");
  if (d.open) d.close();
}

/** A friendly in-page replacement for window.confirm(). Resolves true/false. */
export function confirmDialog(message, okLabel = "Yes") {
  const dialog = document.getElementById("confirm-dialog");
  dialog.innerHTML = `
    <form method="dialog" class="confirm-paper">
      <p>${escapeHtml(message)}</p>
      <div class="form-actions">
        <button class="btn btn-danger" value="ok">${escapeHtml(okLabel)}</button>
        <button class="btn btn-ghost" value="cancel" autofocus>Never mind</button>
      </div>
    </form>`;
  dialog.returnValue = "";
  dialog.showModal();
  return new Promise((resolve) => {
    dialog.addEventListener("close", () => resolve(dialog.returnValue === "ok"), { once: true });
  });
}
